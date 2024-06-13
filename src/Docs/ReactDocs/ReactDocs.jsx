import Content from "../../common/Content";
import Navbar from "../../common/Navbar";
import img from "../../assets/react.svg";
import CodeCard from "../../common/CodeCard.jsx"

function ReactDocs() {
    const heading="React"
    const sections=['Overview','Installation','Folder Structure','Components','',]
    const intro = <div>
        <p>Welcome to the React documentation!</p>
        <p>ReactJS, also known as React, is a popular JavaScript library for building user interfaces. It is also referred to as a front-end JavaScript library. It was developed by Facebook and is widely used for creating dynamic and interactive web applications.</p>
        <h3>What is React?</h3>
        <p>React is a declarative, component based library that allows developers to build reusable UI components and It follows the Virtual DOM (Document Object Model) approach, which optimizes rendering performance by minimizing DOM updates. React is fast and works well with other tools and libraries.</p>
        <h3>Features of React</h3>
        <ol>
            <li> Component based Architecture</li>
            <p>React divides the web page into multiple components as it is component-based. Each component is a part of the UI design which has its own logic and design. So the component logic which is written in JavaScript makes it easy and run faster and can be reusable.</p>
            <li> JSX</li>
            <p>JSX is a syntax extension for JavaScript that allows developers to write HTML-like code within their JavaScript files. It makes React components more readable and expressive.</p>
            <CodeCard content='const name="React";
const ele = <h1>Welcome to {name}</h1>;'/>
            <li>One way Binding</li>
            <p>The data in react flows only in one direction i.e. the data is transferred from top to bottom i.e. from parent components to child components. The properties(props) in the child component cannot return the data to its parent component but it can have communication with the parent components to modify the states according to the provided inputs.</p>
        </ol>
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