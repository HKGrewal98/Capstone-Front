import './NewReport.css'
import { useState } from 'react'
import { Link } from "react-router-dom"


export const NewReport=()=>{

  const list ={
    ASSIGNED: ["Electrical Safety Standards","To help verify the functionality and safety of medical devices, electrical safety standards have been established in the United States, European countries, and other parts of the world.",
    "Medical Device Testing","The standard outlines a process for medical devicemanufacturers to identify hazards, evaluates the risks associated with them, and implement risk controls.",
    "Battery Testing Standards","Standards ensure interoperability and compatibility between the many elements of battery system.",
    "Environmental and Reliability Testing","Electrical Environmental tests, as part of reliability testing, are important for confirmation of tolerances of electronic devices and components to enviromental stress and are most effective means of finding design and manufacturing problems"],
    ADD_LAB_STANDARDS:  ["2Electrical Safety Standards","To help verify the functionality and safety of medical devices, electrical safety standards have been established in the United States, European countries, and other parts of the world.",
    "Medical Device Testing","The standard outlines a process for medical devicemanufacturers to identify hazards, evaluates the risks associated with them, and implement risk controls.",
    "Battery Testing Standards","Standards ensure interoperability and compatibility between the many elements of battery system.",
    "Environmental and Reliability Testing","Electrical Environmental tests, as part of reliability testing, are important for confirmation of tolerances of electronic devices and components to enviromental stress and are most effective means of finding design and manufacturing problems"],
    ADD_GLOBAL_STANDARDS:  ["3Electrical Safety Standards","To help verify the functionality and safety of medical devices, electrical safety standards have been established in the United States, European countries, and other parts of the world.",
    "Medical Device Testing","The standard outlines a process for medical devicemanufacturers to identify hazards, evaluates the risks associated with them, and implement risk controls.",
    "Battery Testing Standards","Standards ensure interoperability and compatibility between the many elements of battery system.",
    "Environmental and Reliability Testing","Electrical Environmental tests, as part of reliability testing, are important for confirmation of tolerances of electronic devices and components to enviromental stress and are most effective means of finding design and manufacturing problems"]
  }

  const [name,setName] = useState("")
  const [data,setdata] = useState(list["ASSIGNED"])
  const [close,setClose] = useState(false)
  const [count,setCount] = useState(0)

  const dataHandler=(name, e)=>{
    console.log(name)
    if(list.hasOwnProperty(name)){
      setName(name)
      setdata(list[name])

    }
  }

  function message(){
    
    if(count>0)
    {
      alert("Standards Submitted successfully!")
    }
    else{
      alert("please select standards!")
    }
  }

  function countHandler(e){
    console.log(count)
    if(e.target.checked){
      setCount((prev)=>prev+1)
      setClose(true)
    }
    else{
      const prev=count
      setCount((prev)=>prev-1)
      if(prev-1===0){
        setClose(false)
      }
      else{
        setClose(true)
      }
    }
  }

return(

<div className="custom">
<form className='custom_form'>

<div className="mb-3 customColor">
  <label for="reportNumber" className="form-label"> *Report Number</label>
  <input type="reportNumber" className="form-control custom_txtbox" id="reportNumber" required/>
</div>
<div className="mb-3 customColor">
  <label for="dateIssued" className="form-label"> *Date Issued</label>
  <input type="dateIssued" className="form-control custom_txtbox" id="dateIssued" placeholder="MM/YY/XXXX" required/>
</div>
<div className="mb-3 customColor">
  <label for="tags" className="form-label">Tags</label>
  <input type="tags" className="form-control custom_txtbox" id="tags" placeholder="Select Report Tags"/>
</div>
<div className="mb-3 customColor">
  <label for="receivingContacts" className="form-label"> *Receiving Contacts</label>
  <input type="receivingContacts" className="form-control custom_txtbox" id="receivingContacts" placeholder="Choose a receiving contact" required/>
</div>

<div>
    <label className="custom_label">Report Standards</label>
    <svg data-bs-toggle="modal" data-bs-target="#exampleModal" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-node-plus" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM6.025 7.5a5 5 0 1 1 0 1H4A1.5 1.5 0 0 1 2.5 10h-1A1.5 1.5 0 0 1 0 8.5v-1A1.5 1.5 0 0 1 1.5 6h1A1.5 1.5 0 0 1 4 7.5h2.025zM11 5a.5.5 0 0 1 .5.5v2h2a.5.5 0 0 1 0 1h-2v2a.5.5 0 0 1-1 0v-2h-2a.5.5 0 0 1 0-1h2v-2A.5.5 0 0 1 11 5zM1.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"/>
</svg>
    <br></br>
    <label className="custom_label1">*Click(+) to add some Standards</label>
</div>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
    <div class="modal-header custom_title">
        <h6 class="modal-title fs-5 custom_title" id="exampleModalLabel">Assign Standards to Review</h6>
      </div>

      <div class="modal-body">
      

      {/* ------Navbar */}
      <div class="container">
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
     {
    
     Object.keys(list).map((v)=>{
      return <>
       <li style={{color:`${name===v?"blue":"Black"}`}}   onClick={dataHandler.bind(null,v)} class="navbar-brand report_navbar">{v}</li>
      <svg class ="bi bi-info-circle report_icon" xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
         <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
      </svg>
      
      </>
     })}
      
    </div>
  </nav>
</div>
      <table>
          <tr>
            <th> </th>
            <th> Standard </th>
            <th> Description </th>
            </tr>
            <hr class="report_hr"></hr>
            <tr class="report_td">
            <td><input type="checkbox" id="standard1" name="standard1" onChange={countHandler}></input></td>
              <td> {data[0]}</td>
              <td> {data[1]} </td>
            </tr>
            <hr class="report_hr"></hr>
            <tr class="report_td">
            <td><input type="checkbox" id="standard2" name="standard2" onChange={countHandler}></input></td>
              <td> {data[2]}</td>
              <td> {data[3]} </td>
            </tr>
            <hr class="report_hr"></hr>
            <tr class="report_td">
            <td><input type="checkbox" id="standard3" name="standard3" onChange={countHandler}></input></td>
              <td> {data[4]}</td>
              <td> {data[5]} </td>
            </tr>
            <hr class="report_hr"></hr>
            <tr class="report_td">
            <td><input class ="report_checkbox" type="checkbox" id="standard4" name="standard4" onChange={countHandler}></input></td>
              <td> {data[6]}</td>
              <td> {data[7]} </td>
            </tr>
        
            {/* onClick={()=>alert("Standards added successfully!") */}
    </table>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary modal_btn" data-bs-dismiss={close?"modal":""} onClick={()=>message()}>ADD STANDARDS TO REVIEW</button>
        <button type="button" class="btn btn-secondary modal_btn" data-bs-dismiss="modal">CANCEL</button>
      </div>
    </div>
  </div>
</div>

<div className="mb-3 customColor">
  <label for="availableReviewers" className="form-label">*Available Reviewers</label>
  <input type="availableReviewers" className="form-control custom_txtbox" id="availableReviewers"/>
</div>
<div className="mb-3 customColor">
  <textarea className="form-control custom_txtbox" id="exampleFormControlTextarea1" placeholder="Review Comments" rows="3"></textarea>
</div>
</form>
 
<form className='custom_form'>
<div className="mb-3 customColor">
  <label for="productsCovered" className="form-label"> *Products Covered</label> 
  <textarea className="form-control custom_txtbox" id="productsCovered" rows="2" required></textarea>
</div>
<div className="mb-3 customColor">
  <label for="models" className="form-label">Models</label>
  <textarea className="form-control custom_txtbox" id="models" rows="2" ></textarea>
</div>
<div className="mb-3 customColor">
  <label for="tags" className="form-label">Tags</label>
  <input type="tags" className="form-control custom_txtbox" id="tags" placeholder="Select Report Tags"/>
</div>

<div className="container">
    <input type="file" className ="upload_hide" id="uploadReport"/>
    <label for="uploadReport" className="upload_label">
        <button className="choose_file">Drag n' Drop or Browse</button>
        <i className="fas fa-cloud-upload-alt"/>
        <p className="drag_text">Max File Size: 25MB: Max Files: 1/Type: .doc,.docx,.xls,.xlsx,.xlsm,.xlsb</p>
    </label>

</div>
<div className="container">
    <input type="file" className ="upload_hide" id="uploadCertificate"/>
    <label for="uploadCertificate" className="upload_label">
        <button className="choose_file">Drag n' Drop or Browse</button>
        <i className="fas fa-cloud-upload-alt"/>
        <p className="drag_text">Max File Size: 25MB: Max Files: 1/Type: .doc,.docx,.xls,.xlsx,.xlsm,.xlsb</p>
    </label>
</div>
<button className="btn btn-primary btn_custom" type="submit">SAVE AS DRAFTS</button>
<button className="btn btn-primary btn_custom1" type="submit">SUBMIT REVIEW</button>
<button className="btn btn-primary btn_custom2" type="submit">CANCEL</button>
</form>
</div>


    )
}



