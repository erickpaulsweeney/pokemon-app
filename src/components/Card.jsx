import { useEffect, useState } from "react";

function Card(props) {
    let [data, setData] = useState(null);

    let colors = {
        bug: "#a8b820",
        dark: "#705848",
        dragon: "#7038f8",
        electric: "#f8d030",
        fairy: "#f8a0e0",
        fighting: "#903028",
        fire: "#f05030",
        flying: "#a890f0",
        ghost: "#705898",
        grass: "#78c850",
        ground: "#e0c068",
        ice: "#98d8d8",
        normal: "#a8a878",
        poison: "#a040a0",
        psychic: "#f85888",
        rock: "#b8a038",
        shadow: "#403246",
        steel: "#403246",
        unknown: "#68a090",
        water: "#6890f0",

    }

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${props.name}/`)
            .then(response => response.json())
            .then(data => setData(data));
        // eslint-disable-next-line
    }, [])

    return (
        <div className="container-card">
            {data !== null &&
                <>
                    <div className="pokemon-name">{data.name}</div>
                    <div className="pokemon-order">{data.id}</div>
                    <div className="pokemon-img"><img className="img-main" src={data.sprites.other.official_artwork.front_default} alt="" /></div>
                    <div className="container-types">
                        {data.types.map(el => <div key={el.type.name} className="pokemon-type" style={{ backgroundColor: colors[el.type.name] }}>{el.type.name}</div>)}
                    </div>
                </>
            }
        </div>
    )
}

export default Card;