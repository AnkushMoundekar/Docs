import Content from "../../common/Content";
import Navbar from "../../common/Navbar";
import img from "../../assets/react.svg";

function ReactDocs() {
    const heading="React"
    const sections=['Overview','Installation','Folder Structure','Components','',]
    const intro = <div>
        <p>Welcome to the React documentation!</p>
        <p>React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.</p>
    </div>
    return (
        <>
            <div className="heading"><img src={img} alt="" /><h1 >{heading}</h1></div>
            <Navbar sections={sections} heading={heading.toLowerCase()}/>
            <Content text={intro}/>
        </>

    )
}
export default ReactDocs;