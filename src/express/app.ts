import http, { IncomingMessage, ServerResponse } from "http";
import { Router } from "./router";

export class App {
	private router: Router[] = [];

	listen(url: number | string) {
		const requestHandler = (req: IncomingMessage, res: ServerResponse) => {
			console.log(`${req.method} ${req.url}`);
			this.handler(req, res);
		};
		const server = http.createServer(requestHandler);

		server.listen(url, () => console.log("Listening"));
	}

	private handler(req: http.IncomingMessage, res: http.ServerResponse) {
		const matchRouter = this.router.find((ro) => ro.route == req.url);
		if (!matchRouter) {
			res.statusCode = 404;
			res.end();
			return;
		}
		const response = matchRouter.routeHandler(req, res);
		if (!response) {
			res.statusCode = 404;
			res.end();
			return;
		}
		res.statusCode = 200;
		res.statusMessage = "OK";
		res.write(response);
		res.end();
		return;
	}

	use(router: Router) {
		this.router.push(router);
	}
}
