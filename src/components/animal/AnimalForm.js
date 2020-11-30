import { useContext, useRef, useEffect } from "react"
import { LocationContext } from "../location/LocationDataProvider"
import { AnimalContext } from "./AnimalDataProvider"






export const AnimalForm = (props) => {
    const { locations, getLocations } = useContext(LocationContext)
    const {  addAnimals } = useContext(AnimalContext)

    const name = useRef(null)
    const location = useRef(null)
    const breed = useRef(null)

    useEffect(() => {
        getLocations()
    }, [])


const constructNewAnimal = () => {


    const locationId = parseInt(location.current.value)
    const customerId = parseInt(localStorage.getItem("kennel_customer"))

    if(locationId === 0) {
        window.alert("Please select a location")
    } else {
        addAnimals({
            name: name.current.value,
            locationId,
            customerId,
            breed: breed.current.value
        })
        .then(() => props.history.push("/animals"))
    }
}
    return (
        <form className = "animalForm">
            <h2 className = "animalForm__title">New Animal</h2>
            <fieldset>
                <div className="form-gorup">
                    <label htmlFor="animalName">Animal Name:</label>
                    <input type="text" id="animalName" ref={name} required autoFocus className="form-control" placeholder = "Animal Name" />

                </div>
            </fieldset>
            <fieldset>
                <div className="form-gorup">
                    <label htmlFor="animalBreed">Animal Breed:</label>
                    <input type="text" id="animalBreed" ref={breed} required autoFocus className="form-control" placeholder = "Animal Breed" />

                </div>
            </fieldset>


            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select defaultValue="" name="location" ref={location} id="animalLocation" className="form-control">
                        <option value = "0">Select a location </option>
                        {locations.map(a => (
                            <option key={a.id} value = {a.id}>
                                {a.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button type = "submit"
                onClick={evt => {
                    evt.preventDefault()
                    constructNewAnimal()
                }}
                className="btn btn-primary">
                    Save Animal
                </button>
        </form>
    )

}