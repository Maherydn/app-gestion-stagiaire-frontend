import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import RecruiterHome from '../pages/recruiter/RecruiterHome';
import SupervisorHome from '../pages/supervisor/SupervisorHome';
import AddStagiaire from '../pages/recruiter/AddStagiaire';
import UpdateStagiaire from '../pages/recruiter/UpdateStagiaire';
import CreateAuthorization from '../pages/recruiter/CreateAuthorization';
import BarChart from '../components/admin/bar/BarChart';
import AddUser from '../pages/admin/AddUser';
import { AdminTableUsers } from '../containers/admin/AdminTableUsers';
import UpdateUserForm from '../containers/admin/UpdateUserForm';
import { AdminTableStagiaires } from '../containers/admin/AdminTableStagiaire';
import HomeAdmin from '../pages/admin/HomeAdmin';
import ShowCv from '../pages/supervisor/ShowCv';
import RecruiterMain from '../pages/recruiter/RecruiterMain';
import SupervisorMain from '../pages/supervisor/SupervisorMain';

const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<Login />} />

    <Route path="/recruiter" element={<RecruiterHome />}>
      <Route index element={<RecruiterMain/>} />
      <Route path="addintern" element={<AddStagiaire/>} />
      <Route path='intern/:id' element={<UpdateStagiaire/>}/>
      <Route path={"intern/authorization/:id"} element={<CreateAuthorization/>} />
    </Route>

    <Route path="/supervisor" element={<SupervisorHome />}>
      <Route index element={<SupervisorMain/>} />
    </Route>
      <Route path="/supervisor/intern-cv/:id" element={<ShowCv />} />

    <Route path="/admin" element={<HomeAdmin />}>
      <Route index element={<BarChart/>} />
      <Route path="adduser" element={<AddUser/>} />
      <Route path='table/users' element={<AdminTableUsers/>}/>
      <Route path={"user/:id"} element={<UpdateUserForm/>} />
      <Route path='table/stagiaires' element={<AdminTableStagiaires/>} />
    </Route>
  </Routes>
);

export default AppRoutes;
