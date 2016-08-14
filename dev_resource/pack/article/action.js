import fetch from "isomorphic-fetch";
const fetchList = callback => {
	fetch("/api/article/fetch").then(res => res.json()).then(data => {
		callback(data.data);
	});
};
export {
	fetchList
};