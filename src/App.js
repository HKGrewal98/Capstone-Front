import logo from './logo.svg';
import './App.css';
import { Form } from './components/Form';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { LandingPage } from './components/LandingPage/LandingPage';

function App() {
  return (
   <>
   <Header />
   <Navbar />
   <LandingPage />
   {/* <Form /> */}
   </>
  );
}

export default App;
