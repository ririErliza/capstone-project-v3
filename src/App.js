import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AboutUs from './pages/AboutUs';
import DonationForm from './pages/DonationForm';
import VolunteerForm from './pages/VolunteerForm';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import CustomNavbar from './components/CustomNavbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import How from './components/How';
// import Why from './components/Why';
// import DropPoints from './components/DropPoints';
import ContactUs from './components/ContactUs';
import AddressList from './components/AddressList';
import Success from './pages/Success';




function App() {
  return (
    <Router>

        <CustomNavbar />

      
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />}/>
          <Route path="/donationForm" element={<DonationForm />}  />
          <Route path="/volunteerForm" element={<VolunteerForm />}   />
          <Route path="/contactus" element={<ContactUs />}   />
          <Route path="/addresslist" element={<AddressList />} />
          <Route path="/success" element={<Success />} />
          <Route path="*" component={NotFound}  />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
