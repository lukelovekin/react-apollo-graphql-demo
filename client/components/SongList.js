import React, {Component} from "react";
import { graphql } from "react-apollo";
import { Link, hashHistory } from 'react-router'
import query from '../queries/fetchSongs'
import gql from "graphql-tag";

class SongList extends Component {

    deleteSong(id){
        this.props
          .mutate({
            variables: { id },
          })
          .then(() => this.props.data.refetch())
    }
    
    renderSongs(){
        return this.props.data.songs.map((s) => {
            return (
              <li key={s.id} className="collection-item" onClick={() => hashHistory.push(`/songs/${s.id}`)}>
                {s.title}

                <i onClick={() => this.deleteSong(s.id)} className="material-icons right">
                  delete
                </i>
              </li>
            );
        })
    }
    
    render() {
        if(this.props.data.loading){return  <div> Loading ...</div>}
        console.log(this.props);
        return(
            <div>
                <ul className="collection">{this.renderSongs()}</ul>
                <Link to='/songs/new' className='btn-floating btn-large red right'>
                    <i className="material-icons">add</i>
                </Link>
            </div> 
        )
    }
}

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

export default graphql(mutation)(
    graphql(query)(SongList)
)
