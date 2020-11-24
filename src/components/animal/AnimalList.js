import React, {useContext, useEffect } from "react"
import {AnimalContext} from "./AnimalDataProvider"
import { Animal } from "./Animal"
import "./Animal.css"

export const AnimalList = () => {
    const { animals, getAnimals } = useContext(AnimalContext)

    useEffect(() => {
        getAnimals()
    }, [])

    return (
        <div className = "animals">
            {
                animals.map(ani => <Animal key = {ani.id} animal={ani} />)
            }
        </div>
    )
}