import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';


export default function ViewEmployee() {

    const { id } = useParams();

    const [employee, setEmployee] = useState("");


    useEffect(() => {
        EmployeeService.getEmployeeById(id).then(res =>{
            let employeeData = res.data
           setEmployee(employeeData)
        })

    })


    const navigate = useNavigate();
    const goBack = () => {
        
        navigate('/employees')
    }




    return(
        <div>
            <br></br>
            <div className='card col-md-6 offset-md-3'>
            <h3 className='text-center'>Employee Info</h3>
                    <div className='card-body'>
                        <div className='row'>
                            <label> First Name:</label>
                            <div>{ employee.firstName }</div>
                        </div>
                        <div className='row'>
                            <label> Last Name:</label>
                            <div>{ employee.lastName }</div>
                        </div>
                        <div className='row'>
                            <label> Email Address:</label>
                            <div>{ employee.emailId }</div>
                        </div>
                        
                    </div>
            </div>
            <br></br>
            <div>
                        <button onClick={goBack} 
                            className="btn btn-info offset-md-3">Back </button>
                        </div>
        </div>
    )
}