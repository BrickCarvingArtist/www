import React, {Component} from "React";
import {TopNav, Header} from "../../component/header";
import Footer from "../../component/footer";
export class Page extends Component{
	render(){
		return (
			<div className="page">
				<TopNav />
				<Header />
				<Footer />
			</div>
		);
	}
}
export const init = render => {
	render(
		<Page />,
		document.querySelector(".main")
	);
};