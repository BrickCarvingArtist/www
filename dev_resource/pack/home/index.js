import React, {Component} from "React";
class Page extends Component{
	render(){
		return (
			<div className="page">
				<a href="http://tech.ikindness.cn/">技术</a>
			</div>
		);
	}
}
const init = render => {
	render(
		<Page />,
		document.querySelector(".main")
	);
};
export {
	Page,
	init
};