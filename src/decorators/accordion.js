import React, {Component} from 'react'

export default (Component) => class Accordion extends React.Component {
    state = {
        openArticleId: null
    }
    render() {
        return <Component {...this.props} {...this.state} openArticle = {this.openArticle}/>
    }

    openArticle = id => ev => {
        this.setState({
            openArticleId: this.state.openArticleId == id ? null : id
        })
    }
}
