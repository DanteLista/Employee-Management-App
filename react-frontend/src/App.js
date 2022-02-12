import logo from './logo.svg';
import './App.css';
import {Router, Route, Routes} from 'react-router-dom'
import ListEmployee from './components/ListEmployee';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateEmployee from './components/CreateEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import ViewEmployee from './components/ViewEmployee';



function App() {
  return (
    <div>
      {/* <Router> */}
          <Header />
              <div className="container">
                <Routes>
                  <Route path="/" element = {<ListEmployee />} />
                  <Route exact path="/employees" element = {<ListEmployee />} />
                  <Route exact path="/add-employee" element = {<CreateEmployee />} />
                  <Route exact path="/update-employee/:id" element = {<UpdateEmployee />} />
                  <Route exact path="/view-employee/:id" element = {<ViewEmployee />} />
                </Routes>
              </div>
          <Footer />
      {/* </Router> */}
    </div>
  );
}

export default App;
