import React from 'react';
import '../assets/css/searchbox.css';


function SearchBox() {
  return (
    <div id='search-bigger-section' className="search-wraper-deactive">
        <div className='serch-section'>
        <div className="search-box">
            <input type="text" placeholder='Search' />
        </div>
        <div className="search-btn">
            <button>Find</button>
        </div>
    </div>
    </div>
    
  )
}

export default SearchBox