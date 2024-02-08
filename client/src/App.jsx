// Bringing in the required import from 'react-router-dom' and Nav and Footer components
import { Outlet } from 'react-router-dom';
import Navigation from './components/Nav';
import Footer from './components/Footer';


function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;

