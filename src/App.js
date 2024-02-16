import React from 'react';
import NavbarTop from './Components/Navbar';
import 'bootstrap/dist/js/bootstrap.bundle';
import About from './Components/About';
import Services from './Components/Services';


function App() {
  return (
    <div className="App">
      <NavbarTop />
      <About />
      <Services />
    </div>
  );
}

export default App;
