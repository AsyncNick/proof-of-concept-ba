import React, { Component } from 'react';
import { Menu, Icon, Layout, Breadcrumb } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class SideNav extends Component {
  state = { collapsed: false, }

  onCollapse = (collapsed) => {
    this.setState({ collapsed })
  }
  handleClick = (e) => {
    console.log('click', e)
  }
  render () {
    return (
      <Sider style={{
        overflow: 'auto', height: '100vh', position: 'fixed', left: 0,
      }}
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => { console.log(broken); }}
      onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item key="1">
            <Icon type="user" />
            <span className="nav-text">Data</span>
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}

export default SideNav;
/*
<Menu.Item key="2">
  <Icon type="video-camera" />
  <span className="nav-text">nav 2</span>
</Menu.Item>
<Menu.Item key="3">
  <Icon type="upload" />
  <span className="nav-text">nav 3</span>
</Menu.Item>
<Menu.Item key="4">
  <Icon type="bar-chart" />
  <span className="nav-text">nav 4</span>
</Menu.Item>
<Menu.Item key="5">
  <Icon type="cloud-o" />
  <span className="nav-text">nav 5</span>
</Menu.Item>
<Menu.Item key="6">
  <Icon type="appstore-o" />
  <span className="nav-text">nav 6</span>
</Menu.Item>
<Menu.Item key="7">
  <Icon type="team" />
  <span className="nav-text">nav 7</span>
</Menu.Item>
<Menu.Item key="8">
  <Icon type="shop" />
  <span className="nav-text">nav 8</span>
</Menu.Item>
*/
