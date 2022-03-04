const http = require('http');
const url = require('url');
const fs = require('fs');

function handleFile(req, res, callback) {
	let path = url.parse(req.url).pathname;
	let fileName = '.' + path;

	fs.readFile(fileName, (error, data) => {
		if (error) {
			if (callback) {
				if (!callback(req, res)) {
					res.writeHead(404, { 'Content-Type': 'text/html;charset=utf-8' });
					res.end('<h1>Página não encontrada </h1>');
				}
			}
		} else {
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.write(data);
			res.end();
		}
	});
}
function handleRequest(req, res) {
	let path = url.parse(req.url).pathname;

	let method = req.method;
	console.log(method);

	if (method == 'PUT') {
		res.writeHead(404, { 'Content-Type': 'text/html;charset=utf-8' });
	}

	if (path == '/teste') {
		res.end('Test');
		return true;
	}

	return false;
}

http
	.createServer((req, res) => {
		handleFile(req, res, handleRequest);
	})
	.listen(3000, (error) => {
		if (error) console.log(error);
		else console.log('Servidor rodando na porta 3000');
	});
