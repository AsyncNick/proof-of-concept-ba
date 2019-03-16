// SpanContainer.js
import React, { Component, Img } from 'react';
import App from '../App'
import { Menu, Icon, Layout, Breadcrumb } from 'antd';
import BitCoinTableWatcher, { state } from './BitCoinTableWatcher';
import AccessKey from "./AccessKey";


const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

//<AccessKey/>

class SpanContainer extends Component {
  render () {
    let w_h = `width: 1000, height: 1000,minHeight: 280, paddingRight: 50, paddingLeft: 50, paddingTop: 25`;
    return (
    <div>
    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
      <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
        <h1> Study Data </h1>

        <div style={{w_h}}>
          <BitCoinTableWatcher show={false}/>
        </div>
      </div>
    </Content>
    </div>
    )
  }
}

export default SpanContainer;
