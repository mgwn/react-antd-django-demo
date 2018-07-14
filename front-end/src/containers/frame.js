import { browserHistory } from 'react-router';
import React, { Component } from 'react';
import {Menu, Icon} from 'antd';

export default class Frame extends Component {
    constructor() {
        super();
        this.state = {
            current: '/'
        }
    }

    handleClick(e) {
        this.setState({
            current: e.key,
        });
        browserHistory.push(e.key);
    }

    render() {
        const { children } = this.props;
        return (
            <div>
                <Menu
                    onClick={this.handleClick.bind(this)}
                    selectedKeys={[this.state.current]}
                    mode="horizontal">
                    <Menu.Item key='/'>
                    <Icon type="home" />主页
                    </Menu.Item>
                    <Menu.Item key='/blog'>
                        <Icon type="database" />博客
                    </Menu.Item>
                </Menu>
                { children }
            </div>
            
        );
    }
}