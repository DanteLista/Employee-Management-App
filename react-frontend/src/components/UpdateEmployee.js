import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';


//                                  props here?
export default function UpdateEmployee() {

    const { id } = useParams();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailId, setEmailId] = useState("");

    useEffect(() => {
         EmployeeService.getEmployeeById(id).then( (res) => {
             let employee = res.data;
             setFirstName(employee.firstName);
             setLastName(employee.lastName);
             setEmailId(employee.emailId);
         })
    }, [])

    const navigate = useNavigate();
    const cancel = () => {
        navigate("/employees")
    }

    const updateEmployee = (e) => {
        e.preventDefault();

        let employee = {firstName: firstName, lastName: lastName, emailId: emailId}
        console.log(JSON.stringify(employee))
        EmployeeService.updateEmployee(employee, id).then( res => {
            navigate('/employees')
        })
    }


    return(
    <div>
        <div className='container'>
          <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
              <h3 className='text-center'>Update Employee</h3>
                <div className='card-body'>
                  <form>
                    <div className='form-group'> 
                      <label>First Name: </label>
                      <input placeholder='First Name' name="firstName" className='form-control'
                      value={firstName} onChange={e => setFirstName(e.target.value)} />
                    </div>
                    <div className='form-group'>
                      <label>Last Name: </label>
                      <input placeholder='Last Name' name="lastName" className='form-control'
                      value={lastName} onChange={e => setLastName(e.target.value)} />
                    </div>
                    <div className='form-group'>
                      <label>Email Address: </label>
                      <input placeholder='Email Address' name="emailId" className='form-control'
                      value={emailId} onChange={e => setEmailId(e.target.value)} />
                    </div>
                    <button className='btn btn-success' onClick={updateEmployee}>Save</button>
                    <button className='btn btn-danger' onClick={cancel} 
                    style={{marginLeft: "10px"}}>Cancel</button>
                  </form>
                </div>
            </div>
          </div>
        </div>
  </div>)
}