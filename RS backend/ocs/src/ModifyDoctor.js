import React, { useState } from "react";
import "./ModifyDoc.css"
import axios from 'axios'
const ModifyDocotor = () => {
  const [doctorID, setDoctorID] = useState(0);
  const [doctorName, setDoctorName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [dateOfJoining, setDateOfJoining] = useState('');
  const [gender, setGender] = useState('');
  const [qualification, setQualification] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [street, setStreet] = useState('');
  const [yearsOfExperience, setYearsOfExperience] = useState('');
  const [location, setLocation] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [state,setState]=useState('')
    
 
  const handleSubmit=(e)=>{
       e.preventDefault();
      console.log( doctorID+"" +doctorName+" "+dateOfBirth+" "+dateOfJoining+""+gender+""+qualification+""+specialization+""+street+""+yearsOfExperience+""+location+""+city+""+state+""+pincode+""+contactNumber+""+email);
      const obj={doctorID:doctorID,doctorName:doctorName,dateOfBirth:dateOfBirth,dateOfJoining:dateOfJoining,gender:gender,qualification:qualification,specialization:specialization,street:street,yearsOfExperience:yearsOfExperience,location:location,city:city,state:state,pincode:pincode,contactNumber:contactNumber,email:email}
     console.log(obj)
      axios.put('http://localhost:8056/admin/updateDoctor',obj).then(
          alert('Updated successfully')
      ).catch((e)=>console.log(e))
  } 
  return (
    <div className="GG">
    <div className="add-doctor">
      <h1>ModifyDocotor</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="doctorID">Doctor ID:</label>
          <input
            type="text"
            name="doctorID"
            value={doctorID}
            onChange={(e)=>{setDoctorID(e.target.value)}}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="doctorName">Doctor Name:</label>
          <input
            type="text"
            name="doctorName"
            value={doctorName}
            onChange={(e)=>{setDoctorName(e.target.value)}}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input
            type="date"
            name="dateOfBirth"
            value={dateOfBirth}
            onChange={(e)=>{setDateOfBirth(e.target.value)}}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dateOfJoining">Date of Joining:</label>
          <input
            type="date"
            name="dateOfJoining"
            value={dateOfJoining}
            onChange={(e)=>{setDateOfJoining(e.target.value)}}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            name="gender"
            value={gender}
            onChange={(e)=>{setGender(e.target.value)}}
            required
          >
            <option value="">--Select Gender--</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="qualification">Qualification:</label>
          <input
            type="text"
            name="qualification"
            value={qualification}
            onChange={(e)=>{setQualification(e.target.value)}}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="specialization">Specialization:</label>
          <input
            type="text"
            name="specialization"
            value={specialization}
            onChange={(e)=>{setSpecialization(e.target.value)}}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="yearsOfExperience">Years of Experience:</label>
          <input
            type="number"
            name="yearsOfExperience"
            value={yearsOfExperience}
            onChange={(e)=>{setYearsOfExperience(e.target.value)}}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="street">Street:</label>
          <input
            type="text"
            name="street"
            value={street}
            onChange={(e)=>{setStreet(e.target.value)}}
            requried
           />
           </div>


          <div className="form-group">
          <label htmlFor="location">location:</label>
          <input
            type="text"
            name="location"
            value={location}
            onChange={(e)=>{setLocation(e.target.value)}}
            requried
           />
           </div>

           <div className="form-group">
          <label htmlFor="city">city:</label>
          <input
            type="text"
            name="city"
            value={city}
            onChange={(e)=>{setCity(e.target.value)}}
            requried
           />
           </div>

           <div className="form-group">
          <label htmlFor="city">State</label>
          <input
            type="text"
            name="state"
            value={state}
            onChange={(e)=>{setState(e.target.value)}}
            requried
           />
           </div>

           

           <div className="form-group">
          <label htmlFor="pincode">PinCode:</label>
          <input
            type="number"
            name="pincode"
            value={pincode}
            onChange={(e)=>{setPincode(e.target.value)}}
            requried
           />
           </div>

           <div className="form-group">
          <label htmlFor="contactNumber">contactNumber:</label>
          <input
            type="number"
            name="contactNumber"
            value={contactNumber}
            onChange={(e)=>{setContactNumber(e.target.value)}}
            requried
           />
           </div>

           <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
          
            requried
           />
           </div>
         <div>
           <button type="submit">UPDATE</button>
           </div>
           
           </form>
           </div>
           </div>
  )};

export default ModifyDocotor;