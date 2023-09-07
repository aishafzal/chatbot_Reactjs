import './App.css'
import {Space} from "antd";
import AppHeader from './Components/Header';
import PageContent from './Components/PageContent';
import SideMenu from './Components/SideMenu';

function App() {
  return (
    <div className="App">
       <AppHeader />
       <Space className='SideMenuAndPageContent'>
       <SideMenu/>
       <PageContent />
       </Space>
    </div>
  );
}

export default App;
