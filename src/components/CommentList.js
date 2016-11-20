import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {

    constructor() {
        super()
        this.state = {
            isOpen: false
        }
    }

    render() {
        const { comments } = this.props
        let commentsBlock = null;
        if (comments) {
            const toggleText = (this.state.isOpen ? 'Close' : 'Open') + ' comments'
            const commentItems = comments.map(comment => <Comment key={comment.id} comment={comment} />)
            const style = {
                display: this.state.isOpen ? 'block' : 'none'
            };
            const commentList = <ul style={style}>{commentItems}</ul>
            commentsBlock = (
                <div>
                    <div onClick={this.handleClick}>{ toggleText }</div>
                    {commentList}
                </div>
            )
        }

        return commentsBlock;
    }

    handleClick = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default CommentList