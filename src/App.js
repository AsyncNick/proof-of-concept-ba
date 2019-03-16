// eslint-disable-next-line
import React, { Component, Img } from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
// eslint-disable-next-line
import { Card, Badge, Row, Col,
  Button, Menu, Icon, Layout, Avatar} from 'antd';

// partials
import SideNav from './partials/sider';
//import MainContainer from './partials/MainContainer';
import SpanContainer from './partials/SpanContainer';
import AccessKey from './partials/AccessKey';
// css
import './App.css';
import './app.min.css';
import 'antd/dist/antd.css';
// eslint-disable-next-line

const {
  Header, Content, Footer, Sider,
} = Layout;


class App extends Component {
  render () {
    return (
      <div>
        <Layout>
        <SideNav/>
        <Layout style={{ marginLeft: 200 }}>
          <SpanContainer />
          <Footer style={{ textAlign: 'center' }}>
            Designed by Nicky Laczko
          </Footer>
        </Layout>
      </Layout>
      </div>
    )
  }
}
/*<Layout>
<SideNav/>
<Layout style={{ marginLeft: 200 }}>
  <SpanContainer show={false}/>
  <Footer style={{ textAlign: 'center' }}>
    Designed by Nicky Laczko
  </Footer>
</Layout>
</Layout>*/
export default App;
