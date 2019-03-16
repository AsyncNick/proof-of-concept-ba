// AccessKey.js
import React, { Component, Img } from 'react';
import App from '../App'
import { Menu, Icon, Layout, Breadcrumb } from 'antd';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import SideNav from './sider';
import SpanContainer from './SpanContainer';

const {
  Header, Content, Footer, Sider,
} = Layout;

class AccessKey extends Component {
  constructor (props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = props.input;
  }
  handleSubmit (e) {
    if (this.input.value === '1') {
      alert('test')
      return (
        <Route path="/data" component={<SpanContainer/>} />
      )
    }
  }
  render () {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label> Enter Access Key
          <input type="text" ref={(input) => this.input = input}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
      </div>
    );
  }
}

export default AccessKey;
