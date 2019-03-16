// BitCoinTableWatcher.js
import React, { Component, Img } from 'react';
import App from '../App'
import { Menu, Icon, Layout, Breadcrumb, Table } from 'antd';
import {columns, data, Data} from '../lib/table_data';
import AccessKey, {props} from './AccessKey';

class BitcoinTableWatcher extends Component {
  constructor () {
    super(AccessKey);
  }
  state = {
    data : [],
    bitcoinData: `<ul>
      {this.state.data.map(li => (
        <li>{li.name}: {li.price_usd}</li>
      ))}
    </ul>`,
    show: true
  }
  async componentDidMount () {
    await fetch("https://api.coinmarketcap.com/v1/ticker/?limit=100")
      .then(res => res.json())
      .then(json => this.setState({ data: json }))
  }
  render () {
    if (this.state.show === true) {
      return (
        <div show={this.state.show}>
          <Table breakpoint="lg" columns={columns} dataSource={data}/>
        </div>
      )
    }
  }
}

export default BitcoinTableWatcher;
