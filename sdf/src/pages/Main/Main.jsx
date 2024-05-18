
import About from "../../component/About/About"
import ContactUs from "../../component/ContactUs/ContactUs"
import MainFocus from "../../component/MainFocus/MainFocus"
import Projects from "../../component/Projects/Projects"
import './styles/mainStyle.css'
import Top from "../../component/Top/Top"
function Main() {
  
  return (
    <>
    <Top/>
    <About/>
    <MainFocus/>
    <Projects/>
    <ContactUs/>
    </>
  )
}

export default Main