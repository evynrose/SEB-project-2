interface ICatProps { id: string, image: string, origin: string }

function catCards({ id, image, origin }): ICatProps {
    <div className="card">
        <div className="card-header">
            <h3 className="card-header-title">{id}</h3>
        </div>
        <div className="card-image">
            <figure className="image">
                <img src={image} alt={id} />
            </figure>
        </div>
    </div>
}

export default catCards