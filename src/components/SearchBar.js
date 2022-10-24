import React, { useState } from 'react';
import Unsplash, { toJson } from 'unsplash-js';
import PhotoGrid from "./PhotoGrid";

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
            console.log(json.results);
        setPhotos(json.results);
         });
    }
    
    return(
        <div className="Searchbar">
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