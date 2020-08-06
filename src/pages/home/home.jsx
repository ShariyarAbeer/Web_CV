import React, { Component } from "react";
import "antd/dist/antd.css";
import { Layout, Menu, PageHeader } from "antd";
import {
	UploadOutlined,
	UserOutlined,
	VideoCameraOutlined,
} from "@ant-design/icons";
import "./home.css";

import HomeNav from "../../component/home/home_nav";
import Profile from "../../component/profile/profile";
import About from "../../component/about/about";
import Work from "../../component/work/work";

import {
	NavLink,
	Route,
	Link,
	BrowserRouter as Router,
} from "../../../node_modules/react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

class Home extends Component {
	state = {};

	render() {
		return (
			<div>
				<Router>
					<Layout>
						<Sider className="site-page-header">
							<PageHeader
								className="site-page-header"
								style={{
									backgroundColor: "white",
								}}
								title="Title"
							/>

							<Menu
								style={{
									height: "100%",
									borderRight: 0,
								}}
								mode="inline"
								defaultSelectedKeys={["2"]}
								className="site-page-header"
							>
								<Menu.Item key="1" icon={<UserOutlined />}>
									<span>Home</span>
									<Link to="/homenav" />
								</Menu.Item>
								<Menu.Item
									key="2"
									icon={<VideoCameraOutlined />}
								>
									<span>Profile</span>
									<Link to="/" />
								</Menu.Item>

								<Menu.Item key="3" icon={<UploadOutlined />}>
									<span>About</span>
									<Link to="/about" />
								</Menu.Item>

								<Menu.Item key="4" icon={<UserOutlined />}>
									<span>Work</span>
									<Link to="/work" />
								</Menu.Item>
							</Menu>
						</Sider>
						<Layout>
							<Header
								className="site-layout-sub-header-background"
								style={{ padding: 0 }}
							/>
							<Content style={{ margin: "24px 16px 0" }}>
								<div
									className="site-layout-background"
									style={{ padding: 24, minHeight: 360 }}
								>
									<Route
										path="/homenav"
										component={HomeNav}
									/>
									<Route exact path="/" component={Profile} />

									<Route path="/about" component={About} />
									<Route path="/work" component={Work} />
								</div>
							</Content>
							<Footer
								style={{
									textAlignLast: "center",
									position: "fixed",
									bottom: "0",
									right: "0",
								}}
							>
								Ant Design ©2018 Created by Abeer
							</Footer>
						</Layout>
					</Layout>
				</Router>
			</div>
		);
	}
}

export default Home;
