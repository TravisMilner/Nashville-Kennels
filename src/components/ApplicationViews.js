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
import {EmployeeForm} from "./employee/EmployeeForm"
import {AnimalForm} from "./animal/AnimalForm"
import { EmployeeDetail } from "./employee/EmployeeDetail"
import {AnimalDetails} from "./animal/AnimalDetail"
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
                <LocationProvider>
                    <CustomerProvider>
                        <Route exact path="/animals" render = {
                            props => <AnimalList {...props} />
                        }/>
                            
                        <Route exact path="/animals/create" render = {
                            props => <AnimalForm {...props} />
                        }/>

                        <Route path="/animals/:animalId(\d+)" render={
                            props => <AnimalDetails {...props} />
                        } />
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>

            <CustomerProvider>
                <Route path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>
            <AnimalProvider>
            <EmployeeProvider>
                <LocationProvider>
                    <Route exact path="/employees" render={
                        props => <EmployeeList {...props} />
                    } />

                    <Route exact path="/employees/create" render={
                        props => <EmployeeForm {...props} />
                    } />
                    <Route path="/employees/:employeeId(\d+)" render={
                        props => <EmployeeDetail {...props} />
                    } />
                </LocationProvider>
        </EmployeeProvider>
        </AnimalProvider>

        </>
    )
}