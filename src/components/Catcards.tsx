interface ICatProps { name: string, image: string, temperament: string }

function CatCards({ name, image, temperament }: ICatProps) {
    return <div className="card has-background-danger">
        <div className="card-header has-text-white">
            <h3 className="card-header-title has-text-white">{name}</h3>
        </div>
        <div className="card-image">
            <figure className="image">
                <img src={image} alt={name} />
                <h5 className="card-header-subtitle has-text-white"> <strong className="has-text-white">Temperament:</strong>{temperament}</h5>
            </figure>
        </div>
    </div>
}

// a mix of JSX and CSS from Bulma to create the individual catcards. 

export default CatCards