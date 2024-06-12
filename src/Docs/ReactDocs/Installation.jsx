import Content from "../../common/Content";
import img from "../../assets/react.svg"
import Navbar from "../../common/Navbar";
function Installation(){
    const heading="React"
    const sections=['Overview','Installation','Folder Structure','Components','']
    const text=<p>Installation Page</p>
    return(
        <>
            <div className="heading"><img src={img} alt="" /><h1 >{heading}</h1></div>
            <Navbar sections={sections} heading={heading.toLowerCase()}/>
            <Content subheading="Installation" text={text}/>
        </>
    )
}
export default Installation;