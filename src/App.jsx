import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import DigitalTools from './Components/DigitalTools/DigitalTools'
import Navbar from './Components/NavBar/Navbar'
import Statistics from './Components/Statistics/Statistics'
import PricingOptions from './Components/PricingOptions/PricingOptions'
import Steps from './Components/Steps/Steps'
 import { ToastContainer } from 'react-toastify';
import Transparent from './Components/Transparent/Transparent'
import Footer from './Components/Footer/Footer'
import Workflow from './Components/Workflow/Workflow'




function App() {
  

  return (
    <>

    <Navbar></Navbar>
    <Banner></Banner>
    <Statistics></Statistics>
    <DigitalTools></DigitalTools>
    <Steps></Steps>
    <Transparent></Transparent>
    <Workflow></Workflow>
    <Footer></Footer>
    

    {/* react toastify */}
    <ToastContainer />





    </>
  )
}

export default App
