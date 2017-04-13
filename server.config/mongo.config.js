module.exports = (() => {
	const mongojs = require('mongojs');
	const connectionString = require('./mongodb-connection.json').mongodbConnection || 'mongodb://localhost:27017/appdb';
	const collections = ['users', 'articles'];

	const db = mongojs(connectionString, collections);
	db.on('error', function (err) {
		console.log('Database error!', err)
	})

	db.on('connect', function () {
		console.log('Database connected!')
	})

	const mongo = {
		api: mongojs,
		db: db
	}

	return mongo;
})();
