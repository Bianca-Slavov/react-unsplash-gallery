import React, { useState } from 'react';
import Unsplash, { toJson } from 'unsplash-js';

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
            <form onSubmit={searchPhotos}>
                <input 
                type="search" 
                placeholder="Search photos" 
                value={keyword} 
                onChange={(e) => setKeyword(e.target.value)}
                />
            </form>

            <div className="image-grid">
            {photos.map((photo) => 
            <div className="card" key={photo.id}>
            <img
                className="card-image"
                alt={photo.alt_description}
                src={photo.urls.full}
                width="50%"
                height="50%"
              ></img>
              </div>
              )}
      </div>
        </div>
    );
}
