import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { Navigate, Outlet } from 'react-router-dom';


import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const [text,setText]=useState('Enable Dark Mode');
  const [Alert1,setAlert]=useState('null');
  
  const showAlert=(message,type)=>{
    setAlert({
      message:message,
      type:type  

    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor="#042743"
      showAlert("The Dark mode has been Eanbled", "success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="White"
      showAlert("The Light mode has been Eanbled", "success")
    }
    if(text==='Enable Dark Mode'){
      setText('Disbale Dark Mode')
    }
    else{
      setText('Enable Dark Mode')
    }
  }
 
  
  return (
    <>
       {/* <div className="container"><About heading="Enter the text To analyze"/>
</div> */}
      <Router>
   <Navbar title="TextUtils" About="about" mode={mode} toggleMode={toggleMode}  />
   <Alert Alert1={Alert1}/>
 
<div className="container my-3">
  <Routes>
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text To analyze" mode={mode} />} />
          <Route path="/About" element={<About />} />
          
        </Routes>
      </div>
   </Router>
   </>
  );
}


export default App;
