import CatCards from "./Catcards";
import React from "react";


interface Cats {
    "name": string
    "image": string
    "origin": string
    "temperament": string
}


function CatBreeds() {

    const [cats, setCats] = React.useState<null | Array<Cats>>(null)

    React.useEffect(() => {

        fetch("https://api.thecatapi.com/v1/breeds")
            .then(res => res.json())
            .then(data => setCats(data))
    }, [])

    return (
        <section className="section">
            <div className="container">
                <div className="columns is-multiline">
                    {cats?.map(cat => {
                        return <div key={cat.name} className="column is-one-quarter-desktop is-one-third-tablet">
                            <CatCards
                                name={cat.name}
                                image={cat.image}
                                origin={cat.origin}
                                temperament={cat.temperament}
                            />

                        </div>
                    })}
                </div>
            </div>
        </section>
    )
}

export default CatBreeds


//     const [cats, setCats] = React.useState(true)
// }

// async function fetchCats() {
//     const resp = await fetch('https://api.thecatapi.com/v1/breeds')
//     const data = await resp.json()
//     // setCats(data)
//     console.log(data)
// }
// fetchCats()

// export default catBreeds


// what we need: react component when page loads should fetch cats - aka use effect
// our catbreeds component needs to return some JSX 
// JSX is where we produce cards, map array 