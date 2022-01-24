import { IncomingMessage, ServerResponse } from "http";

export enum Methods {
	GET = "GET",
	POST = "POST",
	DELETE = "DELETE",
	PUT = "PUT",
};

export type handlerFunction = (req: IncomingMessage, res: ServerResponse) => string;

export const methodsArray = ["get", "post", "delete", "put"];
