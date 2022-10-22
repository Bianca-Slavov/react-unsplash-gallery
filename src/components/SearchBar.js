import React, { useState } from 'react';

export default function SearchBar(){
    let [keyword, setKeyword] = useState("");

    function search(event){
        event.preventDefault();
        alert(`Searching for ${keyword} photos`);
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }


    return(
        <div className="Searchbar">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange}/>
            </form>
        </div>
    )
}