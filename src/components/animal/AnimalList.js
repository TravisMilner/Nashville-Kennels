import React, { useContext, useEffect, useState } from "react"
import { AnimalContext } from "./AnimalDataProvider"
import { Animal } from "./Animal"
import "./Animal.css"




    export const AnimalList = ({ history }) => {
        const { animals, searchTerms, getAnimals } = useContext(AnimalContext)

        const [ filteredAnimals, setFiltered ] = useState([])
    
        // Initialization effect hook -> Go get animal data
        useEffect(()=>{
            getAnimals()
        }, [])

        useEffect(() => {
            if (searchTerms !== "") {
                // If the search field is not blank, display matching animals
                const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms))
                setFiltered(subset)
            } else {
                // If the search field is blank, display all animals
                setFiltered(animals)
            }
        }, [searchTerms, animals])
    
        return (
            <>
                <h1>Animals</h1>
    
                <button onClick={() => history.push("/animals/create")}>
                    Make Reservation
                </button>
                <div className="animals">
                    {
                        filteredAnimals.map(animal => {
                            return <Animal key={animal.id} animal={animal} />
                        })
                    }
                </div>
            </>
        )
    }