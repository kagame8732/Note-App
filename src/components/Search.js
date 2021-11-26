import React from "react"
import { MdSearch } from "react-icons/md"

const Search = ({ handleSearchNote }) => {
    return <div className="search">
        <MdSearch className="search-icon" size="1.3em" />
        <input type="search" 
        onChange={(e) => (handleSearchNote(e.target.value))} placeholder="Search here ...." />
    </div>
}

export default Search;