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

const pricingPromise = fetch('PricingData.json')
.then(res => res.json());


function App() {
  

  return (
    <>

    <Navbar></Navbar>
    <Banner></Banner>
    <Statistics></Statistics>
    <DigitalTools></DigitalTools>
    <Suspense fallback={<span className="loading loading-infinity loading-lg"></span>}>
      <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
      <Steps></Steps>
      <Transparent></Transparent>
      <Footer></Footer>
    </Suspense>
    

    {/* react toastify */}
    <ToastContainer />





    </>
  )
}

export default App
