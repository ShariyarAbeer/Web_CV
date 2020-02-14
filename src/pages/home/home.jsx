import React, { Component } from "react";
import { Layout, Menu, Icon, Avatar, Card } from "antd";
import "antd/dist/antd.css";

const { Header, Content, Footer, Sider } = Layout;

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Layout>
          <Sider
            style={{
              overflow: "auto",
              height: "100vh",
              position: "auto",
              left: 0
            }}
          >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              <div theme="dark">
                <Avatar
                  style={{ margin: 40 }}
                  size={100}
                  src="https://avatars1.githubusercontent.com/u/34870297?s=400&u=4e2aa1397f994a283acfa72d5b69a67621e7c500&v=4"
                />
              </div>
              <Menu.Item key="1">
                <Icon type="video-camera" />
                <span className="nav-text">nav 1</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="upload" />
                <span className="nav-text">nav 2</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="bar-chart" />
                <span className="nav-text">nav 3</span>
              </Menu.Item>
              <Menu.Item key="4">
                <Icon type="cloud-o" />
                <span className="nav-text">nav 4</span>
              </Menu.Item>
              <Menu.Item key="5">
                <Icon type="appstore-o" />
                <span className="nav-text">nav 5</span>
              </Menu.Item>
              <Menu.Item key="6">
                <Icon type="team" />
                <span className="nav-text">nav 6</span>
              </Menu.Item>
              <Menu.Item key="7">
                <Icon type="shop" />
                <span className="nav-text">nav 7</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ marginLeft: 200 }}>
            <Header style={{ background: "#fff", padding: 0 }} />
            <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
              <div
                style={{ padding: 24, background: "#fff", textAlign: "center" }}
              >
                ...
                <br />
                Really content
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Design ©2020 Created by Md.Arif Shariyar
            </Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default Home;
