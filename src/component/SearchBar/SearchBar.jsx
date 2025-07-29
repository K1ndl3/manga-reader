import { useState } from "react";
import './SearchBar.css';

function SearchBar({onResult}) {
    const [mangaTitle, setMangaTitle] = useState("");

    const handleSearch = async () => {
        if (!mangaTitle.trim()) return;
        const base_url = "https://api.mangadex.org/manga";
        const url = `${base_url}?title=${encodeURIComponent(mangaTitle)}`;
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error("HTTP error");
            const data = await response.json();
            if (onResult) onResult(data.data);
            
        } catch(error) {
            console.error("Failed to Fetch manga. Try again/Check your title", error);
        }
    }


    return (<>
        <div className="search-bar-container">
            <input
                type="text" 
                value={mangaTitle}
                onChange={(e) => setMangaTitle(e.target.value)}
                placeholder="Search manga title..."
            />
            <button
                onClick={() => handleSearch()}

            >
                Enter
            </button>
        </div>
    </>)
}

export default SearchBar;