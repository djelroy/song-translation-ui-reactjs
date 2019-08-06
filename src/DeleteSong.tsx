import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router';
import { Link } from "react-router-dom";

export default class DeleteSong extends React.Component<any, any>{
    constructor(props: any){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event: any){        
        console.log("Delete song id " + this.props.id);
        
        const url = process.env.REACT_APP_SONG_TRANSLATION_API_URL + "/songs/" + this.props.id;

        fetch(url, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });
    }

    render(){
        return (          
            <Link to="/" onClick={this.handleClick}>Delete</Link>
        );
    }   
}

