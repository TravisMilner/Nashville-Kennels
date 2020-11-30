import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeDataProvider"
import { Employee } from "./Employee"
import "./Employee.css"
import { LocationContext } from "../location/LocationDataProvider"

export const EmployeeList = (props) => {
    const { employees, getEmployees } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)

    useEffect(() => {
        getLocations()
            .then(getEmployees)
    }, [])
    return (
        <div className="employees">
            <h1>Employees</h1>
            <button onClick={() => props.history.push("/employees/create")}>
                Add Employee
            </button>
            <article className= "employeeList">

           
            {
                employees.map(emp => {
                    const clinic = locations.find(l => l.id === emp.locationId)

                    return <Employee key={emp.id}
                        location={clinic}
                        employee={emp}


                    />
                })
            }
            </article>
        </div>
    )
}