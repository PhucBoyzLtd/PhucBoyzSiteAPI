/*
	Phuc Boyz Site API
	(c) 2016 Phuc Boyz Ltd.
	All Rights Reserved.

	Description: Initializes the Hapi NodeJS Server
	Notes: To run the web server just type node init.js
*/

'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();

// TODO: Switch this to HTTPS at some point in the future
server.connection({
	// For development purposes ONLY -- we need to change this at some point along with the port!
	host: 'localhost',
	port: 80
});

// Fire up the server!
server.start((error) => {
	if (error) {
		// TODO: We need to do something with the error
		throw error;
	}

	// TODO: Put more useful stuff here, like a log perhaps?

	console.log(`Server started on ${server.info.uri}`);
});

// Request hook (fired when a request is made to the web server BEFORE passing execution to the route handlers)
server.ext('onRequest', (request, reply) => {
	// TODO: Logging so we know what is going on and will have some insight into times when things break?

	// Continue -- pass execution back to the route handlers below
	return reply.continue();
});

// TODO: Implement Routes

// Catch all for routes that don't exist
server.route({
	method: '*',
	path: '/{p*}',
	handler: (request, reply) => {
		// Return 404 - Not Found
		reply({ 'code': 404, 'message': 'Not Found' }).code(404);
	}
});
