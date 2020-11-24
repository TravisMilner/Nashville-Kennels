import React from "react"
import { LocationList } from "./location/LocationList"
import { LocationProvider } from "./location/LocationDataProvider"
import "./Kennel.css"
import { EmployeeProvider } from "./employee/EmployeeDataProvider"
import { EmployeeList } from "./employee/EmployeeList"
import { CustomerProvider } from "./customer/CustomerDataProvider"
import { CustomerList } from "./customer/CustomerList"
import { AnimalProvider } from "./animal/AnimalDataProvider"
import { AnimalList } from "./animal/AnimalList"

export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <h2>Locations</h2>
        <LocationProvider>
            <LocationList />
        </LocationProvider>

        <h2>Employees</h2>
        <EmployeeProvider>
            <EmployeeList />
        </EmployeeProvider>

        <h2>Customers</h2>
        <CustomerProvider>
                <CustomerList />
        </CustomerProvider>

        <h2>Animals</h2>
        <AnimalProvider>
            <AnimalList />
        </AnimalProvider>
    </>
)