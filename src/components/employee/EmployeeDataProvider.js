import React, { useState, useEffect } from "react"

export const EmployeeContext = React.createContext()

export const EmployeeProvider = (props) => {
    const [employees, setEmployees] = useState([])

    const getEmployees = () => {
        return fetch("http://localhost:8088/employees")
        .then(res => res.json())
        .then(setEmployees)
    }

    const addEmployees = () => {
        return fetch ("http://localhost:8088/employees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employees)
        })
            .then(getEmployees)
    }

    return (
        <EmployeeContext.Provider value={{
            employees, addEmployees, getEmployees
        }}>
            {props.children}
        </EmployeeContext.Provider>
    )
}