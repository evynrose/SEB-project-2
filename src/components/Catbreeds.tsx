import CatCards from "./Catcards";
import React from "react";


interface Cats {
    "name": string
    "image": string | any
    "temperament": string
}

//TypeScript for each element

//Function to set cats and search bar
function CatBreeds() {

    const [cats, setCats] = React.useState<null | Array<Cats>>(null)
    const [search, setSearch] = React.useState('')

    React.useEffect(() => {
        // we useeffect to load the display upon the page being first loaded.

        fetch("https://api.thecatapi.com/v1/breeds", {
            method: "GET",
            headers: {
                "x-api-key": import.meta.env.VITE_API_KEY,
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
    //functions to make the search bar work as well as allow the user to filter cats by their search.


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
                        console.log(cat);
                        return (<div key={cat.name} className="column is-one-quarter-desktop is-one-third-tablet">
                            <CatCards
                                name={cat.name}
                                image={cat.image?.url}

                                temperament={cat.temperament}
                            />

                        </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

// code to make the cat cards have the information needed on them. 

export default CatBreeds

