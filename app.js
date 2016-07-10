import express from "express";
import RouterApi from "./controller/api/index";
import RouterStatic from "./controller/static/index";
import bodyParser from "body-parser";
const port = process.env.PORT || ServerConfig.port,
	app = express(),
	router = express.Router();
app.use(bodyParser.urlencoded({
	extended : 1
}));
app.set("views", `${__dirname}/view`);
app.set("view engine", "pug");
app.use(express.static(`${__dirname}/resource`, {
	index : 0,
	maxAge : 600000
}));
app.use(RouterApi(router, request));
app.use(RouterStatic(router, react, reactDOMServer));
app.listen(port);
console.log(`Server started on port ${port}`);