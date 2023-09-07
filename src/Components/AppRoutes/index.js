

import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Dashboard from "../../pages/dashb/dasboard";
import CreateChatbot from '../../pages/chatbot/chatbot';
import Customize from '../../pages/customize/customize';
import DataSource from '../../pages/datasource/source';
import ChatHistory from '../../pages/chathistory/history';
import Leads from '../../pages/leads/leads';
import Settings from '../../pages/settings/setting';
import MyAccount from '../../pages/MyAccount/account';
import Upgrade from '../../pages/upgrade/upgrade';
import Logout from '../../pages/logout/logout';

const AppRoutes = () => {
  return (
    
     <Routes>
      <Route path='/' element={<Dashboard/>}></Route>
      <Route path='/create' element={<CreateChatbot/>}></Route>
      <Route path='/customize' element={<Customize/>}></Route>
      <Route path='/data' element={<DataSource/>}></Route>
      <Route path='/chat' element={<ChatHistory/>}></Route>
      <Route path='/lead' element={<Leads/>}></Route>
      <Route path='/setting' element={<Settings/>}></Route>
      <Route path='/account' element={<MyAccount/>}></Route>
      <Route path='/upgrade' element={<Upgrade/>}></Route>
      <Route path='/logout' element={<Logout/>}></Route>

     </Routes>

    
  )
}


export default AppRoutes;