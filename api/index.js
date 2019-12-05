const app = require("express")();
const cors = require("cors");
const MongoClient = require("mongodb").MongoClient;
const port = 3020;

app.use(cors());

const url = 'mongodb://localhost:27017';
const dbName = 'jobs';
const dbCollection = 'jobs';
const client = new MongoClient(url, {
	useUnifiedTopology: true
});

client.connect((err) => {

	console.log("Connected successfully to db server");

	const db = client.db(dbName);
	const collection = db.collection(dbCollection);

	app.get("/", async (req, res) => {

		let {page, limit} = req.query;
		const fetchData = async () => {
			const cursor = await collection.find().skip((+page-1)*+limit).limit(+limit);
			const isNext = await cursor.hasNext();
			const jobs = await cursor.toArray();
			return [jobs, isNext]
		};

		// TODO: find a better way to check if there more docs are because of
		//  	 unexpected cursor.hasNext() behaviour (read more about it)
		const [jobs] = await fetchData();
		page = +page + 1;
		const [, isNext] = await fetchData();

		res.send({jobs, isNext});
	});

	const listener = app.listen(port, () => {
		console.log("The app is listening on port " + listener.address().port);
	});
});