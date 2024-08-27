import './App.css';
// import Sidebar from './Components/Sidebar';
import Homepage from './Pages/Homepage';
import ScrollBtn from './Components/ScrolltoTopBtn.jsx';

function App() {
  return (
    <div className='animate-fade'>
      {/* <Sidebar/> */}
      <Homepage/>   
      <ScrollBtn/>
    </div>
  );
}

export default App;
