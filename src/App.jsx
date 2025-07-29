import SearchBar from './component/SearchBar/SearchBar'
import './App.css'
import { useState } from 'react'

function App() {
  const [searchResult, setSearchResult] = useState([]);

  const handleResults = (result) => {
    setSearchResult(result);
  }

  return (
    <>
      <SearchBar onResult={handleResults}></SearchBar>
      <ul>
    {searchResult.map((manga) => (
      <li key={manga.id}>{manga.attributes.title.en || "No English Title"}</li>
    ))}
      </ul>
    </>
  )
}

export default App
