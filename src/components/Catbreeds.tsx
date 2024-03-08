import CatCards from "./Catcards";
import React from "react";


interface Cats {
    "name": string
    "image": string | any
    "origin": string
    "temperament": string
}


function CatBreeds() {

    const [cats, setCats] = React.useState<null | Array<Cats>>(null)
    const [search, setSearch] = React.useState('')

    React.useEffect(() => {

 //         header: x-api-key
 // key: live_XICyWdeClBO3NsgdZuTEDKBembjywCyMwdyxm5Fv4dqBpsp41cyVUK3VdERxG1ic

        fetch("https://api.thecatapi.com/v1/breeds",  {
  method: "GET",
  headers: {
    "x-api-key":  import.meta.env.VITE_API_KEY, 
    "Content-Type": "application/json"
  }
 })
            .then(res => res.json())
            .then(data => setCats(data))
    }, [])

    function handleChange(e: any) {
        setSearch(e.currentTarget.value)
    }

    function filterCatBreeds() {
        return cats?.filter(cat => {
            return cat.name.toLowerCase().includes(search.toLowerCase())
        })
    }



    return (
        <section className="section">
            <div className="container">
            <input 
            className="input mb-4"
            placeholder="Search for your new best friend ..."
            onChange={handleChange}
            value={search}
            />
                <div className="columns is-multiline">
                    {filterCatBreeds()?.map(cat => {
                        return <div key={cat.name} ></>
                    }}
                    {cats?.map(cat => {
                        console.log(cat)
                        return <div key={cat.name} className="column is-one-quarter-desktop is-one-third-tablet">
                            <CatCards
                                name={cat.name}
                                image={cat.image?.url}
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