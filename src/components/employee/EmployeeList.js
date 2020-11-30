import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeDataProvider"
import { Employee } from "./Employee"
import "./Employee.css"
import { LocationContext } from "../location/LocationDataProvider"
import {Link} from "react-router-dom"

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
                employees.map(employee => {
                    return <Link key={employee.id} to={`/employees/${employee.id}`}>
                        <h3>{employee.name}</h3>
                    </Link>


                    
                })
            }
            </article>
        </div>
    )
}