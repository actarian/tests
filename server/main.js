const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { staticMiddleware } = require('./static/static.js');

const BASE_HREF = '/tests/';
const ASSETS = `assets/`;
const ROOT = `../docs/`;
const PORT = process.env.PORT || 8080;

const Vars = {
	port: PORT,
	host: `http://localhost:${PORT}`,
	charset: 'utf8',
	assets: ASSETS,
	baseHref: BASE_HREF,
	cacheMode: 'file',
	cache: path.join(__dirname, `../cache/`),
	root: ROOT,
	template: path.join(__dirname, `${ROOT}index.html`),
	accessControlAllowOrigin: true,
};

const staticMiddleware_ = staticMiddleware(Vars);

const app = express();
app.disable('x-powered-by');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use('*', staticMiddleware_);

const tests = ['angular', 'preact', 'react', 'recks', 'rxcomp', 'svelte', 'vue'];

tests.forEach(test => {
	app.get(`/tests/${test}-test/`, function(request, response) {
		response.sendFile(path.join(__dirname, `../docs/${test}-test/index.html`));
	});
});

app.listen(Vars.port, () => {
	console.log(`NodeJs Running server at ${Vars.host}`);
});
