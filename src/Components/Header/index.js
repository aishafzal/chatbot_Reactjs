import React from 'react';
import { Space, Typography } from "antd";

import InitialLogo from './InitialLogo';

function index() {
  const randomUserObj = [
    { name: "Estaban Huljo Ricardo Monteo Delaruso Mansoris", color: "white" },
  ];

  return (
    <div className='AppHeader'>
    <h1>Logo</h1>
      <Space>
      <InitialLogo userObj={randomUserObj} />
      </Space>
    </div>
  )
}

export default index
