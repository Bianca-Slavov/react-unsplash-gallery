import React, { useState } from 'react';
import Unsplash, { toJson } from 'unsplash-js';
import PhotoGrid from "./PhotoGrid";
import "../styles/SearchBar.css";

const unsplash = new Unsplash({
    accessKey: process.env.REACT_APP_ACCESS_KEY
  });

export default function SearchBar(){
    const [keyword, setKeyword] = useState("");
    const [photos, setPhotos] = useState([]);

    const searchPhotos = async (e) => {
        e.preventDefault();

        unsplash.search
         .photos(keyword)
        .then(toJson)
        .then((json) => {
        setPhotos(json.results);
         });
    }
    
    return(
        <div className="Searchbar">
            <p>Type a word and hit enter</p>
            <form onSubmit={searchPhotos}>
                <input 
                type="search" 
                placeholder="Search photos" 
                value={keyword} 
                onChange={(e) => setKeyword(e.target.value)}
                />
            </form>
            <PhotoGrid photos={photos}/>
        </div>
    );
}