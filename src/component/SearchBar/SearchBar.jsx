import { useState } from "react";
import './SearchBar.css';

function SearchBar() {
    const [mangaTitle, setMangaTitle] = useState("");

    return (<>
        <div className="search-bar-container">
            <input
                type="text" 
                value={mangaTitle}
                onChange={(e) => setMangaTitle(e.target.value)}
                placeholder="Search manga title..."
            />
            <button>
                Enter
            </button>
        </div>
    </>)
}

export default SearchBar;