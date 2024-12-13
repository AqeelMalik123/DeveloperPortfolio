import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div style={{width:"",backgroundColor:"white",padding:"",display:"",alignItems:"",justifyItems:""}} className='relative z-0 bg-primary w-full !important'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center' style={{display:"flex",width:"100%"}}>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative  z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;