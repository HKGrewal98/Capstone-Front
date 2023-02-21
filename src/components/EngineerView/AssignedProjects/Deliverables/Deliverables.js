import React from 'react'
import { Link } from 'react-router-dom'

export const Deliverables = () => {
  return (
    <>
    <div>Deliverables</div>
    <Link className='btn btn-success m-5' to="/engineerView/newReport">New Report</Link>
    </>
  )
}
