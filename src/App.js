import './App.css';
import Navbar from './components/Navbar';
import Search from './components/Search';
import SideBar from './components/SideBar';
import Container from './components/Container';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     {/* NAVBAR */}
     <Navbar/>

     {/* SEARCH */}
     <Search/>
     {/* SIDEBAR */}
     <SideBar/>
     {/* CONTAINER */}
     <Container/>
     {/* FOOTER */}
     <Footer/>
    </div>
  );
}

export default App;
