import { Typography } from '@mui/material'
import {Button, Card, Space, Statistic } from 'antd';

function dasboard(){
  return (
    <div>
     <h2>Dashboard</h2>

     <Space direction='horizontal'>
     <Button type="primary"
      style={{
        backgroundColor:"rgb(33, 33, 221)",
        position:'relative',
        width:'160px',
        height:'40px',
        border:"5px",
        top:"-30px",
        left:'780px'
      }}
     >Preview Chatbot</Button>
     <Button type="primary"
      style={{
        backgroundColor:"rgb(33, 33, 221)",
        width:'160px',
        height:'40px',
        border:"5px",
        position:'relative',
        top:"-30px",
        left:'800px'
      }}
     
     >Embed Chatbot</Button>


    
             <div
             style={{
              
              backgroundColor: "var(--black)",
              borderRadius: 10,
              padding: 2,
              width:'300px',
              textAlign:'center',
              position: 'relative',
              margin:"auto",
              top: "80px",
              left:'-180px'
              
             
            }}
             >
    <DashboardCard 
     title={"Total Chatbots"}
      value = {72}/>
      </div>
       <div
      style={{
              
              backgroundColor: "var(--black)",
              borderRadius: 10,
              padding: 2,
              width:'300px',
              textAlign:'center',
              position: 'relative',
              top: "80px",
              left:'20px'
              
             
            }}
             >

 
   <DashboardCard 
     title={"Total Messages for Selected Bot"} value = {0}/>
 </div>
<div
 style={{
              
              backgroundColor: "var(--black)",
              borderRadius: 10,
              padding: 2,
              width:'300px',
              textAlign:'center',
              position: 'relative',
              top: "290px",
              left:'-280px'
              
             
            }}
             >

<DashboardCard 
     title={"Total Leads captured for selected bot"} value = {72}/>
  

   </div>

   <div
 style={{
              
              backgroundColor: "var(--black)",
              borderRadius: 10,
              padding: 2,
              width:'300px',
              textAlign:'center',
              position: 'relative',
              top: "290px",
              left:'-1113px'
              
             
            }}
             >
             <DashboardCard 
     title={"Total Sessions for Selected Bot"} value = {0}/>
      
</div>
     </Space>
 
     </div>
  );
}






function DashboardCard({title,value}) {
return (
  <Card style={{
     backgroundColor:"rgb(88, 170, 238)",
  }}>
      <Space direction='horizontal'
      >
      <Statistic style={{
      }} title={title}
      value={value} 
      />
  </Space>
      </Card>
);
}

export default dasboard
