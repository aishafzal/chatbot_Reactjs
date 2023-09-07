import {Menu,icon} from "antd";
import { BankOutlined,DatabaseOutlined,
  CustomerServiceOutlined,WechatOutlined,
  DeploymentUnitOutlined,SettingOutlined ,
  AccountBookOutlined,LogoutOutlined

} from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
const SideMenu = () => {
  const navigate = useNavigate();
  return (
    <div className='menus'>
      <Menu className='menu'
     
 onClick = {(item) => {

     navigate(item.key);
    }   }
   items ={[ 
        {
          className:'a',
       label: "Create Chatbot",
       key:"/create",
        },
        {
          label: "Dashboard",
          icon:<BankOutlined />,
          key:"/",
        },
        {
          
          label: "Data Source",
          icon:<DatabaseOutlined />,
          key:"/data",
        },
        {
          label: "Customize",
          icon: <CustomerServiceOutlined />,
          key:"/customize",
        },
        {
          label: "Chat History",
          icon: <WechatOutlined />,
          key:"/chat",
       
        },
        {
          label: "Leads",
          icon:<DeploymentUnitOutlined />,
          key:"/lead",
        },
       {
          label: "Settings",
          icon: <SettingOutlined />,
          key:"/setting",
      },{},{}, 
      
      {
        label: "Upgrade",
        icon:<BankOutlined />,
         key: "/upgrade",
      },
      {
        label: "My Account",
        icon: <AccountBookOutlined/>,
         key: "/account",
      }, {
        label: "Logout",
        icon: <LogoutOutlined />,
         key: "/logout",
      },{},{},    
      ]}
      
      ></Menu>
    </div>
  )
}

export default SideMenu
