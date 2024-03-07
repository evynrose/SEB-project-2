import catCards from "./Catcards";
import React, { useEffect, useState } from "react";


interface Cats {
    "name": string 
    "image": string
    "origin": string
    "temperament": string
}


function catBreeds() {
    const [cats, setCats] = React.useState(true)
    console.log(cats)
}

async function fetchCats(){
    const resp = await fetch('https://api.thecatapi.com/v1/breeds')
    const data = await resp.json()
    // setCats(data)
    console.log(data)
}
fetchCats()

export default catBreeds
