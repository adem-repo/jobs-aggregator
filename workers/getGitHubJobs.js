const MongoClient = require('mongodb').MongoClient;
const fetch = require('node-fetch');

const baseURL = 'https://jobs.github.com/positions.json';

const dbUrl = 'mongodb://localhost:27017';
const dbName = 'jobs';

const insertDocuments = async (jobs) => {
	const client = new MongoClient(dbUrl, {
		useUnifiedTopology: true,
		useNewUrlParser: true
	});
	await client.connect();
	const db = client.db(dbName);
	const collection = db.collection('jobs');
	await collection.deleteMany({});
	const result = await collection.insertMany(jobs);
	await client.close();
	return result;
};

const fetchJobs = async (page, allJobs) => {
	const currentPage = ++page;
	const path = baseURL + '?page=' + currentPage;
	const response = await fetch(path);
	const jobs = await response.json();
	const jobsWithSource = jobs.map( job => {
		job.source = 'github';
		return job
	});
	if (jobs.length) {
		allJobs.push(...jobsWithSource);
		await fetchJobs(currentPage, allJobs);
	}
	return allJobs;
};

async function getGitHubJobs() {
	console.log('Start fetching jobs from GitHub Jobs...');
	const jobs = await fetchJobs(0, []);
	console.log(`${jobs.length} jobs found.`);
	const dbResult = await insertDocuments(jobs);
	if (dbResult.result.ok === 1)
		console.log(`Successfully wrote ${dbResult.insertedCount} jobs to the database.`);
	console.log('>----------------<>----------------<');
}

module.exports = getGitHubJobs;

module.exports();



