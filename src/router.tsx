import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SongEditForm from "./SongEditForm";
import FilterableSongTable from "./FilterableSongTable";

function NewSong(){
    return <SongEditForm />;
}

const SONGS = [
    {title: "In My Life", artist: "The Beatles", lyrics: "There are places I'll remember"},
    {title: "Sweet Emotion", artist: "Aerosmith", lyrics: "Talking 'bout the things that nobody cares"},
    {title: "Shiny Happy People", artist: "R.E.M.", lyrics: "Shiny happy people laughing"}
];

function Home (){    
    return <FilterableSongTable songs={SONGS} />;
}           
function AppRouter(){
    return(
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/songs/">New Song</Link></li>
                    </ul>
                </nav>
            </div>

            <Route exact path="/" component={Home}/>
            <Route path="/songs/" component={NewSong}/>
        </Router>
    );
}

export default AppRouter;