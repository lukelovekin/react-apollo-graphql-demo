import React, {Component} from 'react'
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import LyricCreate from './LyricCreate';


class SongDetail extends Component{
    render(){
        const { song } = this.props.data

        if(!song) { return <div>...Loading...</div>}

        return (
          <div>
            <Link to="/">Back</Link>
            <h3>Song Detail</h3>
            <h4>{song.title}</h4>
            <LyricCreate songId={this.props.params.id}/>
          </div>
        );
    }
}

const query = gql`
    query GetSong($id: ID!){
        song(id: $id){
            id
            title
        }
}
`

export default graphql(query, {
    options: (props) => { return {variables: { id: props.params.id}}}
})(SongDetail)