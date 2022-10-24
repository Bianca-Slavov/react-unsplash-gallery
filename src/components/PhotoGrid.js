import React, { useState } from 'react';
import Masonry from 'react-masonry-css'
import './PhotoGrid.css';


export default function PhotoGrid(props){
    const breakpoints = {
        default: 3,
        1100: 2,
        700: 1,
    }

    if (props.photos){

    return(
        <div className="image-grid">
            <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            
            {props.photos.map((photo) => 
            <div className="card" key={photo.id}>
            <img
                className="card-image"
                alt={photo.alt_description}
                src={photo.urls.full}
                width="100%"
                height="50%"
              ></img>
              </div>
              )}
            </Masonry>
      </div>
    );
}
}