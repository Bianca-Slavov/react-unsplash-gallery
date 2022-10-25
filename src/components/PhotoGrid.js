import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import "../styles/PhotoGrid.css";


export default function PhotoGrid(props){
    const breakpoints = {
        default: 3,
        1100: 2,
        700: 1,
    }

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
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
                onClick={() => { openInNewTab(photo.urls.full) }}
              ></img>
              </div>
              )}
            </Masonry>
      </div>
    );
}
}