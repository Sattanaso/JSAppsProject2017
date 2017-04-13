module.exports = (express, app, mongo) => {
	const apiRouter = new express.Router();
	const db = mongo.db;
	const mongojs = mongo.api;

	app.use('/api', apiRouter);

	apiRouter.get('/users', (req, res, next) => {
		db['users']
			.find({}, (err, users) => {
				if (err) {
					res.send(err);
				}
				res.json(users);
			})
	});

	apiRouter.post('/user', (req, res, next) => {
		const newPost = req.body;

		db['users']
			.save(newPost, (err, newPost) => {
				if (err) {
					res.send(err);
					return;
				}
				res.json(newPost);
			})
	});

	apiRouter.get('/articles', (req, res, next) => {
		db['articles']
			.find({}, (err, articles) => {
				if (err) {
					res.send(err);
				}
				res.json(articles);
			})
	});

	apiRouter.post('/article', (req, res, next) => {
		const newPost = req.body;

		db['articles']
			.save(newPost, (err, newPost) => {
				if (err) {
					res.send(err);
					return;
				}
				res.json(newPost);
			})
	});

	apiRouter.get('/article/:id', (req, res, next) => {
		db['articles']
			.find({ _id: mongojs.ObjectId(req.params.id) }, (err, article) => {
				if (err) {
					res.send(err);
				}
				res.json(article);
			})
	});

	apiRouter.put('/article/:id', function (req, res, next) {
		let comment = req.body.comment;
		let updatedArticle = { $push: { comments: comment } };

		db['articles'].update({ _id: mongojs.ObjectId(req.params.id) }, updatedArticle, {},
			(err, comment) => {
				if (err) {
					res.send(err);
				}
				res.json(comment);
			})
	});
}
