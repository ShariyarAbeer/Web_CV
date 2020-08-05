import React, { Component } from "react";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
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
				<Layout>
					<Sider
						breakpoint="lg"
						collapsedWidth="0"
						onBreakpoint={(broken) => {
							console.log(broken);
						}}
						onCollapse={(collapsed, type) => {
							console.log(collapsed, type);
						}}
					>
						<div className="logo" />

						<Menu
							style={{ marginTop: 80 }}
							theme="dark"
							mode="inline"
							defaultSelectedKeys={["2"]}
						>
							<Menu.Item key="1" icon={<UserOutlined />}>
								{/* <Link to="/homenav" /> */}
								Home
							</Menu.Item>
							<Menu.Item key="2" icon={<VideoCameraOutlined />}>
								{/* <Link to="/" /> */}
								Profile
							</Menu.Item>
							<Menu.Item key="3" icon={<UploadOutlined />}>
								{/* <Link to="/about" /> */}
								About
							</Menu.Item>
							<Menu.Item key="4" icon={<UserOutlined />}>
								{/* <Link to="/work" /> */}
								Work
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
								<HomeNav />

								{/* <Route path="/homenav" component={HomeNav} />
								<Route exact path="/" component={Profile} />

								<Route path="/about" component={About} />
								<Route path="/work" component={Work} /> */}
							</div>
						</Content>
						<Footer style={{ textAlign: "center" }}>
							Ant Design ©2018 Created by Abeer
						</Footer>
					</Layout>
				</Layout>
			</div>
		);
	}
}

export default Home;
