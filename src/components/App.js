import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import Filter from './Filter'

class App extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    state = {
        dateRange: {
            from: null,
            to: null
        },
        selected: null
    }

    render() {
        const { dateRange, selected } = this.state
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <Filter options = {options} filters = {{ dateRange, selected }} filterChange = {this.handleFilterChange} />
                <ArticleList articles = {this.props.articles} />
            </div>
        )
    }

    handleFilterChange = (filter) => this.setState(filter)
}

export default App