import React, {Component} from 'react'
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class SongDetail extends Component{
    

    render(){
        return (
            <div>
                <h3>Song Detail</h3>    
            </div>
        )
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