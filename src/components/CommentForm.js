import React, { Component } from 'react'

class CommentForm extends Component {
    state = {
        user: '',
        text: ''
    }
    render() {
        return (
            <form method="" action="" onSubmit={this.handleSubmit}>
                <div>Add comment</div>
                <div>
                    <input placeholder="Name" name="user" value={this.state.user} onChange={this.handleChange('user')}/>
                </div>
                <div>
                    <textarea name="text" placeholder="Comment text" value={this.state.text} onChange={this.handleChange('text')}/>
                </div>
                <button>Submit</button>
            </form>
        )
    }

    handleChange = key => ev => {
        this.setState({[key]: ev.target.value});
    }

    handleSubmit = ev => {
        ev.preventDefault();
        const {user, text} = this.state
        if (!user || !text) return false
        console.log(this.state)
        this.setState({user: '', text: ''});
    }
}

export default CommentForm