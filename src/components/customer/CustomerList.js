import React, { useContext, useEffect } from "react"
import { CustomerContext } from "./CustomerDataProvider" 
import  { Customer } from "./Customer"
import "./Customer.css"

export const CustomerList = () => {
    const { customers, getCustomers } = useContext(CustomerContext)

    useEffect(() => {
        getCustomers()
    }, [])

    return (
        <div className = "customers">
            {
                customers.map(cus => <Customer key={cus.id} customer={cus} />)
            }
        </div>
    )
}