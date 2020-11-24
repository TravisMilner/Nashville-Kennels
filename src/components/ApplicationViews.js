import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationDataProvider"
import { AnimalProvider } from "./animal/AnimalDataProvider"
import { LocationList } from "./location/LocationList"
import { AnimalList } from "./animal/AnimalList"
import { CustomerProvider } from "./customer/CustomerDataProvider"
import { CustomerList } from "./customer/CustomerList"
import { EmployeeProvider } from "./employee/EmployeeDataProvider"
import { EmployeeList } from "./employee/EmployeeList"

export const ApplicationViews = (props) => {
    return (
        <>
            <LocationProvider>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/">
                    <LocationList />
                </Route>
            </LocationProvider>

            <AnimalProvider>
                {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="/animals">
                    <AnimalList />
                </Route>
            </AnimalProvider>

            <CustomerProvider>
                <Route path = "/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>

            <EmployeeProvider>
                <Route path = "/employees">
                    <EmployeeList />
                </Route>
            </EmployeeProvider>
        </>
    )
}