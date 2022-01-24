import Express, { Methods, Router } from "./express";

function main() {
	const app = new Express();

	const router = new Router("/");
	router.handle(Methods.GET, (req, res) => {
		return "Hello";
	})

	app.use(router);

	app.listen(7878);
}

main();
