import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import InteriorParts from './components/InteriorParts';
import BodyParts from './components/BodyParts';
import AboutUs from './components/AboutUs';
import ContactForm from './components/ContactUs';
import SupplierReg1 from './components/SupplierReg1';
import SupplierReg2 from './components/SupplierReg2';
import SupplierReg3 from './components/SupplierReg3';
import SupplierReg4 from './components/SupplierReg4';
import CustomerReg from './components/CustomerReg';
import CartPage from './components/Cart';
import SpecialOffersPage from './components/Offers';
import TrackDetails from './components/TrackDetails';
import OrderHistory from './components/OrderHistory';
import OrderTracking from './components/OrderTracking';
import SearchPage from './components/SearchParts';
import Dashboard from './components/Admin/dashboard';
import SideNav from './components/Admin/side_navbar';
import AdvertisementManagement from './components//Admin/Advertisement_and_listing_managemnet';
import SupplierProfile from './components/Supplier_profile';
import CustomerProfile from './components/Customer_profile';
import CustomerManagement from './components/Admin/Customer_management';
import SupplierManagement from './components/Admin/Supplier_management';





function App() {
  return (
    <div className="min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/LandingPage" element={<LandingPage />} />
          <Route path="/loginpage" element={<LoginPage/>} />
           <Route path="/InteriorParts" element={<InteriorParts/>} />
          <Route path="/BodyParts" element={<BodyParts/>} />
           <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactForm" element={<ContactForm />} />
          <Route path="/SupplierReg1" element={<SupplierReg1/>} />
          <Route path="/SupplierReg2" element={<SupplierReg2/>} /> 
          <Route path="/SupplierReg3" element={<SupplierReg3/>} />
          <Route path="/SupplierReg4" element={<SupplierReg4/>} />
          <Route path="/CustomerReg" element={<CustomerReg/>} /> 
          <Route path="/Cart" element={<CartPage/>} /> 
          <Route path="/Offers" element={<SpecialOffersPage/>} /> 
          <Route path="/TrackDetails" element={<TrackDetails/>} />
          <Route path="/OrderHistory" element={<OrderHistory/>} />
          <Route path="/OrderTracking" element={<OrderTracking/>} /> 
          <Route path="/SearchPage" element={<SearchPage/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
           <Route path="/sidenav" element={<SideNav />} /> 
           <Route path="/customermanagement" element={<CustomerManagement />} /> 
           <Route path="/suppliermanagement" element={<SupplierManagement />} /> 
          <Route path="/advertisementmanagement " element={<AdvertisementManagement />} />
          <Route path="/supplierprofile " element={<SupplierProfile />} />
          <Route path="/customerprofile " element={<CustomerProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
