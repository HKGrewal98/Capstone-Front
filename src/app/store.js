import { configureStore } from '@reduxjs/toolkit'
import LoginReducer from '../components/Login/LoginReducer/LoginSlice'
import DeliverablesReducer from '../components/EngineerReviewerView/AssignedProjects/Deliverables/DeliverablesReducer/Deliverables'
import AllProjectsDetails from '../components/EngineerReviewerView/AssignedProjects/Deliverables/DeliverablesReducer/AllProjects'
import LoaderSliceReducer from '../components/Common/LoaderReducer/LoaderSlice'
import ProjectNumber from '../components/EngineerReviewerView/AssignedProjects/Deliverables/DeliverablesReducer/ProjectNumber'


export const store = configureStore({
  reducer: {
    
    Login:LoginReducer,
    Deliverables: DeliverablesReducer,
    AllProjectsDetails: AllProjectsDetails,
    ProjectNumberDetails: ProjectNumber,
    LoaderSlice: LoaderSliceReducer,
  
  },
})