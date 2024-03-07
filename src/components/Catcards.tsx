interface ICatProps { name: string, image: string, origin: string, temperament: string}

function catCards({ name, image, origin, temperament }: ICatProps) {
    <div className="card">
        <div className="card-header">
            <h3 className="card-header-title">{name}</h3>
            <h4 className="card-header-subtitle">{origin}</h4>
            <h5 className="card-header-subtitle">{temperament}</h5>
        </div>
        <div className="card-image">
            <figure className="image">
                <img src={image} alt={name} />
            </figure>
        </div>
    </div>
}

export default catCards