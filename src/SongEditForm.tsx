import React from 'react';
import ReactDOM from 'react-dom';

export default class SongEdit extends React.Component {
    render(){        
        return (
            <form>
                <p>
                    <label htmlFor="title">
                        Title
                        <input type="text" name="title"/>
                    </label>
                </p>
                <p>
                    <label htmlFor="artist">
                        Artist
                        <input type="text" name="artist"/>
                    </label>
                </p>
                <p>
                    <label htmlFor="lyric">
                        Lyric
                        <textarea name="lyric"/>
                    </label>   
                </p>
                <input type="submit" value="Save"/>
            </form>
        );
    };
}