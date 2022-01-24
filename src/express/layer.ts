import { handlerFunction, Methods } from "./types";

export class Layer {
	method: Methods;
	private handlerFunction: handlerFunction;

	constructor(method: Methods, handlerFunctions: handlerFunction) {
		this.handlerFunction = handlerFunctions;
		this.method = method;
	}

	layerHandler(req:any, res:any) {
		return this.handlerFunction(req, res)
	}
}
