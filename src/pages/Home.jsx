import Moviecard from "../components/MovieCard"
import { useState } from "react"

function Home() {
    const [searchQuery, setsearchQuery ] = useState("");

    const movie = [
    { id: 1, title: "little krishna", release_date: "2012"},
        {id: 2, title: "King krishna", release_date: "2024"},
        {id: 3, title: "krishna", release_date: "2023"},
    ]

    const handleSearch = () => {};
 
    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text"
                placeholder="search for movie........"
                className="search-input"/>
                <button type="submit" className="search-button">Search</button>
            </form>
            </div>
    )
}