import { IncomingMessage, ServerResponse } from "http";
import { Layer } from "./layer";
import { handlerFunction, Methods } from "./types";


export class Router {
	route: string;
	private layerStack: Layer[] = [];

	constructor(route: string) {
		this.route = route;
	}

	handle(method: Methods, fn: handlerFunction) {
		const layer = new Layer(method, fn);
		console.log(`Mapping ${method} ${this.route}`)
		this.layerStack.push(layer);
	}

	routeHandler(req: IncomingMessage, res: ServerResponse) {
		const matchLayer = this.layerStack.find((la) => la.method == req.method);
		if (!matchLayer) {
			return;
		}
		return matchLayer.layerHandler(req, res);
	}
}
