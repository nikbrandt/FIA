const PORT = 8080;

const express = require('express');
const path = require('path');
const moment = require('moment');

const indexRouter = require('./routes/index');
const proposalRouter = require('./routes/proposal');
const researchRouter = require('./routes/research');
const fundingRouter = require('./routes/funding');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use((req, res, next) => { // logger/all requests
	let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	if (ip === '::1') ip = 'localhost'; // localhost checker
	if (ip && ip.startsWith('::ffff:')) ip = ip.slice(7); // IPv6 checker
	let method = req.method;
	let path = req.originalUrl;

	console.info(`${moment().format('MM/DD/YY H:mm:ss')} -- ${method} request from ${ip} at ${path}`);
	next();
});

app.use('/node_modules/jquery/dist/', express.static('node_modules/jquery/dist/'));
app.use('/semantic/dist/', express.static('semantic/dist/'));
app.use('/public/', express.static('public/'));
app.use('/public/', express.static('public/favicons'));

app.use('/', indexRouter);
app.use('/home', indexRouter);
app.use('/proposal', proposalRouter);
app.use('/research', researchRouter);
app.use('/funding', fundingRouter);

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}.`);
});