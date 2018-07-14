import { Component } from 'react';
import { List } from 'antd';
import { blogList } from '@services/blog'

export default class BlogList extends Component {

    constructor() {
        super()
        this.state = {
            blogData: []
        }
    }

    componentWillMount() {
        this.fetchData();
    }

    componentWillReceiveProps() {
        this.fetchData();
    }

    fetchData = () => {
        blogList().then(data => {
            this.setState({
                blogData: data
            })
        })
    }

    renderItem = (item) => (
        <List.Item key={item.id}>
            <List.Item.Meta title={item.title}
                description={item.pub_date}/>
            {item.content}
        </List.Item>
    )

    render() {
        const { blogData } = this.state;
        return (
            <List
                itemLayout="vertical"
                size = "large"
                dataSource = {blogData}
                renderItem={this.renderItem}
            />
        )
    }
}