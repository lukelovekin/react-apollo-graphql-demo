import React, { Component } from 'react'
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class LyricsCreate extends Component {
    constructor(props){
        super(props)
        this.state = {content: ''}
    }

    onSubmit(e){
        e.preventDefault()

        this.props.mutate({
            variables: { songId: this.props.songId, content: this.state.content }
          })

        this.setState({ content: "" });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label> Add Lyrics</label>
                    <input
                    value={this.state.content}
                    onChange={e => this.setState({content: e.target.value})}
                    />
                </form>
            </div>
        )
    }
}

const mutation = gql`
  mutation AddLyric($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        content
      }
    }
  }
`;

export default graphql(mutation)(LyricsCreate)