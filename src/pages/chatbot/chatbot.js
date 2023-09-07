import React from 'react'
import {Menu,icon, Space, Statistic } from 'antd';
import {ArrowLeftOutlined,CloseOutlined} from '@ant-design/icons';
const chatbot = () => {
  return (
    <div style={{height:'50vh',width:"60vh",background:"rgb(88, 170, 238)"
    , padding:"1px" ,position:"relative",top:"60px",left:"190px"
    
    }}>
    <Menu className='me'
     mode="horizontal"
     items={[
      {
        className:"label",
        icon:<ArrowLeftOutlined />,
      label: "SiteGPT Bot"
      },
      {
        icon:<CloseOutlined 
        style={{
          position:'relative',
          left:"190px",
          color:'white',
          fontSize:'23px',
          fontWeight:'bold'
          
        }}


        />
      }
     ]}
    >


    </Menu>
      
    </div>
  )
}

export default chatbot
