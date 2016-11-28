import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import CommentForm from './CommentForm'
import toggleOpen from '../decorators/toggleOpen'

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array.isRequired,
        //from toggleOpen decorator
        isOpen: PropTypes.bool.isRequired,
        toggleOpen: PropTypes.func.isRequired
    }

    static defaultProps = {
        comments: []
    }


    componentWillReceiveProps() {
        //console.log('---', 'CL receiving props')
    }

    componentWillUpdate() {
        //console.log('---', 'CL will update')
    }


    render() {
        return (
            <div>
                {this.getButton()}
                {this.getList()}
                {this.getForm()}
            </div>
        )
    }


    getButton() {
        const { comments, isOpen, toggleOpen } = this.props
        if ( !comments.length) return <p>No comments yet</p>
        return <a href="#" onClick = {toggleOpen}>{isOpen ? 'hide' : 'show'} comments</a>
    }

    getList() {
        const { comments, isOpen } = this.props
        if (!isOpen || !comments.length) return null
        const commentItems = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
        return <ul>{commentItems}</ul>
    }

    getForm() {
        const { comments, isOpen } = this.props
        if (!isOpen && comments.length) return null
        return <CommentForm />
    }
}

export default toggleOpen(CommentList)