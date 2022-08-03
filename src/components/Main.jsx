import { useEffect, useState } from "react";
import List from "./List";
import NavBar from "./NavBar";

function Main() {
    let [list, setList] = useState([]);
    let [page, setPage] = useState(1);

    let handleClick = (val) => {
        val === 'next' ? setPage(page + 1) : setPage(page - 1);
    }

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${(page - 1) * 20}`)
        .then(response => response.json())
        .then(data => setList(data.results));
    }, [page])
    
    return (
        <div className="container-main">
            <NavBar />
            {list.length === 0 && <div className="Loading"></div>}
            {list.length > 0 && <List data={list} page={page} handleClick={handleClick}/>}
        </div>
    )
}

export default Main;