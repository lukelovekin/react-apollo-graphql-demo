import React, { Component } from 'react'

class LyricList extends Component {

    render() {
        return (
            <ul className="collection">
                Lyric List
                
                {this.props.lyrics.map(l => (
                    <li key={l.id} className="collection-item">{l.content}</li>
                ))}
            </ul>
        )
    }
}

export default LyricList
