import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router';

export default class SongEdit extends React.Component<any, any> {
    constructor(props: any){
        super(props);
        this.state = {
            redirect: false,
            title: "",
            artist: "",
            lyrics: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeArtist = this.handleChangeArtist.bind(this);
        this.handleChangeLyric = this.handleChangeLyric.bind(this);

    }

    renderRedirect = () => {
        if(this.state.redirect){
            return (<Redirect to="/" />);
        }
    }
    handleSubmit(event: any){
        event.preventDefault();

        const url = process.env.REACT_APP_SONG_TRANSLATION_API_URL + "/songs";
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: this.state.title,
                artist: this.state.artist,
                lyrics: this.state.lyric
            })
        })

        this.setState({redirect: true});
    }

    handleChangeTitle(event: any){
        this.setState({title: event.target.value});
    }

    handleChangeArtist(event: any){
        this.setState({artist: event.target.value});
    }

    handleChangeLyric(event: any){
        this.setState({lyric: event.target.value});
    }

    render(){        
        return (
            <div>{this.renderRedirect()}
            <form onSubmit={this.handleSubmit}>
                <p>
                    <label htmlFor="title">
                        Title
                        <input type="text" value={this.state.title} onChange={this.handleChangeTitle}/>
                    </label>
                </p>
                <p>
                    <label htmlFor="artist">
                        Artist
                        <input type="text" value={this.state.artist} onChange={this.handleChangeArtist}/>
                    </label>
                </p>
                <p>
                    <label htmlFor="lyric">
                        Lyric
                        <textarea value={this.state.lyric} onChange={this.handleChangeLyric}/>
                    </label>   
                </p>
                <input type="submit" value="Save"/>
            </form>
            </div>
        );
    };
}