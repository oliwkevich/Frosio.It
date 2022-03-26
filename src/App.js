import {Header} from "./Header/Header";
import {Hero} from "./Hero/Hero";
import {Features} from "./Features/Features";
import {Operators} from "./Operators/Operators";
import {FAQ} from "./FAQ/FAQ";
import {Contact} from "./Contact/Contact";
import {Footer} from "./Footer/Footer";


function App() {
    return (
        <div className='font-Poppins'>
            <Header/>
            <Hero/>
            <Features/>
            <Operators/>
            <FAQ/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
