const proxy = require('http-proxy-middleware');
const Bundler = require('@parcel/core');
const express = require('express');

const bundler = new Bundler('src/index.html', {
	// Don't cache anything in development
	cache: false,
});

const app = express();
const PORT = process.env.PORT || 3000;

// This route structure is specifc to Netlify functions, so
// if you're setting this up for a non-Netlify project, just use
// whatever values make sense to you.  Probably something like /api/**

app.use(
	'/.netlify/functions/',
	proxy({
		// Your local server
		target: 'http://localhost:9000',
		// Your production routes
		pathRewrite: {
			'/.netlify/functions/': '',
		},
	})
);

// Pass the Parcel bundler into Express as middleware
app.use(bundler.middleware());

// Run your Express server
app.listen(PORT);