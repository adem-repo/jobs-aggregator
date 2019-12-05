const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const fetch = require('node-fetch');

const baseURL = 'https://jobs.github.com/positions.json';
const allJobs = [];

const dbUrl = 'mongodb://localhost:27017';
const dbName = 'jobs';
const client = new MongoClient(dbUrl, {
	useUnifiedTopology: true,
	useNewUrlParser: true
});

const insertDocuments = async (db) => {
	const collection = db.collection('jobs');
	await collection.deleteMany({});
	await collection.insertMany(allJobs);
};

const getJobs = async (page) => {
	const currentPage = ++page;
	const path = baseURL + '?page=' + currentPage;
	const response = await fetch(path);
	const jobs = await response.json();
	const jobsWithSource = jobs.map( job => {
		job.source = 'github';
		return job
	});
	// console.log(path, jobs.length);
	if (jobs.length) {
		allJobs.push(...jobsWithSource);
		await getJobs(currentPage);
	}
};

async function run() {
	console.log('Start fetching jobs from GitHub...');
	await getJobs(0);
	await client.connect();
	const db = client.db(dbName);
	console.log('Total jobs: ', allJobs.length);
	await insertDocuments(db);
	await client.close();
}

module.exports = run;



