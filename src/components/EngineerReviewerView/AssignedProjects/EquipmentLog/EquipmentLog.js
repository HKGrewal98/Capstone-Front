import React from "react";
import "./EquipmentLog.css";

import { LoaderStatus } from "../../../Common/LoaderReducer/LoaderSlice";
import { DeliverablesDetails } from "../AssignedProjectsReducer/Deliverables";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { LoginDetails } from "../../../Login/LoginReducer/LoginSlice";
import Cookies from 'universal-cookie'
import { useState } from "react";
import { Reports } from "../AssignedProjectsReducer/ReportDetails";
import { ProjectNumber } from "../AssignedProjectsReducer/ProjectNumber";
import BACKEND_URL from "../../../../backendUrl";
export const EquipmentLog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const EquipmentLogData = useSelector((state) => state.Deliverables.value);
  const ProjectNumberRedux = useSelector((state) => state.ProjectNumberDetails.value.project_number);
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Access-Control-Allow-Origin", "http://localhost:8081");
  myHeaders.append("Access-Control-Allow-Credentials", true);
  const [showModalDeleteDoc, setShowModalDeleteDoc] = useState(false)
  const [tempReport, setTempReport] = useState()

  const cookies = new Cookies()
  const [arrayPageState, setArrayPageState] = useState(1)


  const nextPage = ()=>{
    let max = Math.ceil(EquipmentLogData?.reports?.length/4)
    // console.log("Max", max)
    if(arrayPageState<max){

      setArrayPageState(arrayPageState+1)
    }
  }
  const prevPage = ()=>{
    if(arrayPageState>1){

      setArrayPageState(arrayPageState-1)
    }
  }

  

  const getEquipmentlog = ()=>{
    if(ProjectNumberRedux !== undefined){
      
    dispatch(LoaderStatus(true));

    // let project_name = JSON.parse(localStorage.getItem("ProjectName"))
   
    axios({
      method: "get",
      maxBodyLength: Infinity,
      url: `${BACKEND_URL}/project/${ProjectNumberRedux}`,
      headers: myHeaders,
      credentials: "include",
      withCredentials: true,
      params: {
        screenId: 4,
      },
    })
      .then(function (response) {
        // console.log("Response in Equipment Log", response.data);
        if (response?.data?.data?.project) {
          dispatch(DeliverablesDetails(response?.data?.data));
          localStorage.setItem("PrevProjectNumber", JSON.stringify(response?.data?.data?.project?.project_number))
          dispatch(LoaderStatus(false));
        } else {
          console.log("no projects yet");
          dispatch(LoaderStatus(false));
        }

      
      })
      .catch(function (error) {
        console.log("Error block equipment log", error);
        if(error?.response?.status===401){
          dispatch(LoginDetails({}));
              cookies.remove('connect.sid');
              
              localStorage.setItem("AlertMessage", JSON.stringify("Session Expired...Please Login Again"))
            navigate('/')
        }
      });
    }
  }
  useEffect(()=>{
    let prevProjectNumber = JSON.parse(localStorage.getItem("PrevProjectNumber"))
    
    if(prevProjectNumber != ProjectNumberRedux ||  !EquipmentLogData?.project){
    getEquipmentlog()
    }
  },[ProjectNumberRedux])
  useEffect(() => {
    let SelectedProject = JSON.parse(localStorage.getItem("SelectedProject"))

    if(!EquipmentLogData?.project){
      getEquipmentlog()
    }
    if(!EquipmentLogData?.project?.project_name && SelectedProject != undefined){
      dispatch(ProjectNumber(SelectedProject))
      getEquipmentlog() 

    }
  }, []);

  return (
    <div>
       {showModalDeleteDoc === true ? <>
      <div id="myCustomModal" class="customModal">
<div class="custom-modal-content" >
  <div class="custom-modal-header customDC-color pt-2" >
   
    <h4 className='text-center '>Are you sure you want to delete the document?</h4>
  </div>
 
 
  <div class="custom-modal-footer d-flex justify-content-end ">
  <button className="btn customDC-color m-2"  onClick={()=>{
         axios({
          method: 'put',
          maxBodyLength: Infinity,
          url: `${BACKEND_URL}/report/delete`,
          headers:myHeaders,
          credentials: "include", 
          withCredentials:true,
            data : {
              doc_id:tempReport?.doc_id,
              report_id: tempReport?.report_id
            },
          
        })
        .then(function (response) {
          console.log("Response From Delete in equipment log",response.data)  
          if(response?.data?.statusCode === 200){
          setShowModalDeleteDoc(false)
          getEquipmentlog() 
          }
        
        })
        .catch(function (error) {
          console.log("Error block delete teport", error);
          if(error?.response?.status===401){
            dispatch(LoginDetails({}));
                cookies.remove('connect.sid');
                localStorage.setItem("AlertMessage", JSON.stringify("Session Expired...Please Login Again"))
              navigate('/')
          }
          
         
        });
  }}>
            Confirm
          </button>
    <button className='btn customDC-color m-2' onClick={()=>{
       
      setShowModalDeleteDoc(false)}}>Cancel</button>
  </div>
</div>
</div>
    </>:""}
      <div className="Adddocument">
        <button>ADD DOCUMENT</button>
      </div>

      <table className="table customTableMArgin" >
        <thead>
          <tr>
            <th scope="col" style={{minWidth:"110px"}}>Date created</th>
            <th scope="col" style={{minWidth:"110px"}}>Record Name</th>
            <th scope="col" style={{minWidth:"110px"}}>Record Type</th>
            <th scope="col" style={{minWidth:"110px"}}>Project Number</th>
            <th scope="col" style={{minWidth:"110px"}}>Project Name</th>
            <th scope="col" style={{minWidth:"110px"}}>Description</th>
            <th scope="col" style={{minWidth:"110px"}}>Responsibility</th>
            <th scope="col" style={{minWidth:"110px"}}>Work Order</th>
            <th scope="col" width="140px"></th>
          </tr>
        </thead>

        <tbody>
          {EquipmentLogData?.project && EquipmentLogData.reports?.length > 0 ? (
            <>
              {EquipmentLogData?.reports.slice((arrayPageState-1)*4,arrayPageState* 4).map((data) => {
                return (
                  <tr key={data?.file_id}>
                    <th><b>{data?.report_created_at.slice(0,10)}</b></th>
                    <td>{data?.original_file_name}</td>
                    <td>{data?.file_sub_type}</td>
                    <td>{EquipmentLogData?.project?.project_number}</td>
                    <td>{EquipmentLogData?.project?.project_name}</td>
                    <td>{EquipmentLogData?.project?.description}</td>
                    <td>{data?.reviewer_id}</td>
                    <td>{data?.tags}</td>
                    
                    <td>
                      <svg
                        className="m-1"
                        width="20"
                        height="17"
                        viewBox="0 0 20 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                       style={{cursor:"pointer"}} 
                       onClick={()=>{
                        window.open(
                          `http://localhost:8081/report/download/${data?.file_id}`
                        )
                    }}
                       >
                        <path
                          d="M19 11V14.3333C19 14.7754 18.7893 15.1993 18.4142 15.5118C18.0391 15.8244 17.5304 16 17 16H3C2.46957 16 1.96086 15.8244 1.58579 15.5118C1.21071 15.1993 1 14.7754 1 14.3333V11"
                          stroke="#007D99"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5 6.8335L10 11.0002L15 6.8335"
                          stroke="#007D99"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 11V1"
                          stroke="#007D99"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <svg
                        className="m-1"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ cursor: "pointer" }}
                        onClick={() => 
                          {
                            dispatch(Reports({"report":data,"project":EquipmentLogData.project}))
                            navigate("/view/editReport")}}
                      >
                        <g clipPath="url(#clip0_106_9042)">
                          <path
                            d="M9.16699 3.3335H3.33366C2.89163 3.3335 2.46771 3.50909 2.15515 3.82165C1.84259 4.13421 1.66699 4.55814 1.66699 5.00016V16.6668C1.66699 17.1089 1.84259 17.5328 2.15515 17.8453C2.46771 18.1579 2.89163 18.3335 3.33366 18.3335H15.0003C15.4424 18.3335 15.8663 18.1579 16.1788 17.8453C16.4914 17.5328 16.667 17.1089 16.667 16.6668V10.8335"
                            stroke="#007D99"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M15.417 2.0832C15.7485 1.75168 16.1982 1.56543 16.667 1.56543C17.1358 1.56543 17.5855 1.75168 17.917 2.0832C18.2485 2.41472 18.4348 2.86436 18.4348 3.3332C18.4348 3.80204 18.2485 4.25168 17.917 4.5832L10.0003 12.4999L6.66699 13.3332L7.50033 9.99986L15.417 2.0832Z"
                            stroke="#007D99"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_106_9042">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>

                      <svg
                        className="m-1"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setShowModalDeleteDoc(true)
                         setTempReport({"doc_id":data?.file_id,
                          "report_id": data?.report_number, "original_file_name": data?.original_file_name})
                        
                         
                        }}
                      >
                        <path
                          d="M2.5 5H17.5"
                          stroke="#007D99"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.8337 5V16.6667C15.8337 17.5 15.0003 18.3333 14.167 18.3333H5.83366C5.00033 18.3333 4.16699 17.5 4.16699 16.6667V5"
                          stroke="#007D99"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.66699 4.99984V3.33317C6.66699 2.49984 7.50033 1.6665 8.33366 1.6665H11.667C12.5003 1.6665 13.3337 2.49984 13.3337 3.33317V4.99984"
                          stroke="#007D99"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.33301 9.1665V14.1665"
                          stroke="#007D99"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M11.667 9.1665V14.1665"
                          stroke="#007D99"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <svg
                        className="m-1"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{cursor:"pointer"}}
                       onClick={()=>{
                        dispatch(Reports({"report":data,"project":EquipmentLogData.project}))
                        navigate('/view/viewReport')}}
                      >
                        <path
                          d="M15.25 10.9583V15.9583C15.25 16.4004 15.0744 16.8243 14.7618 17.1368C14.4493 17.4494 14.0254 17.625 13.5833 17.625H4.41667C3.97464 17.625 3.55072 17.4494 3.23816 17.1368C2.92559 16.8243 2.75 16.4004 2.75 15.9583V6.79167C2.75 6.34964 2.92559 5.92572 3.23816 5.61316C3.55072 5.30059 3.97464 5.125 4.41667 5.125H9.41667"
                          stroke="#007D99"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12.75 2.625H17.75V7.625"
                          stroke="#007D99"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.58301 11.7917L17.7497 2.625"
                          stroke="#007D99"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </td>
                  </tr>
                );
              })}
            </>
          ) : (
            ""
          )}
        </tbody>
      </table>
      {EquipmentLogData?.reports?.length>4 ? <div className='d-flex justify-content-center'>
      <button className='btn customDC-color m-2' onClick={prevPage}>Previous Page</button>
      <button className='btn customDC-color m-2' onClick={nextPage}>Next Page</button>
      </div>:""}  
    </div>
  );
};
