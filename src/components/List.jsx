import Card from "./Card";

function List(props) {
    return (
        <>
            <div className="container-list">
                {props.data && props.data.map(el => <Card key={el.name} name={el.name} />)}
            </div>
            <div className="container-buttons">
                <button className="prev-button" onClick={() => props.page > 1 && props.handleClick('prev')}>Previous</button>
                <div className="page-number">Page {props.page}</div>
                <button className="next-button" onClick={() => props.handleClick('next')}>Next</button>
            </div>
        </>
    )
}

export default List;