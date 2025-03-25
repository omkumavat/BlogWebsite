import React, { useState } from "react"
import { Search } from "lucide-react"

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("")

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  return (
    <div className="inline-flex items-center border border-gray-300 rounded-lg overflow-hidden">
      <input
        type="text"
        placeholder="Search by anything..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className="px-4 py-2 outline-none w-64"  
      />
      <button 
        onClick={handleSearch} 
        className="px-3 text-gray-600 hover:text-gray-800 h-10 w-10"
      >
        <Search className="h-5 w-5" />
      </button>
    </div>
  )
}

export default SearchBar
