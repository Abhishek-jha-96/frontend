import SideNavBar from './Components/Sidebar/SideNavBar';
import Forms from './Components/Midform/Forms'
import PhoneUi from './Components/PhoneUi';
import ButtonAppBar from "./Components/Header";
import './App.css';



function App() {
  return (
    <div className="App">
      <div className='Sidebar'>

      <SideNavBar />
      </div>
        <div className='navbar'>
          <ButtonAppBar className="nav1"/>
          <Forms />
        </div >
      <div className='phoneui'>

      <PhoneUi />
      </div>
    </div>
  );
}

export default App;



