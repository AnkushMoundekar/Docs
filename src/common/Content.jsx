import { useLocation } from "react-router-dom";
import "./common.css"
function Content(props) {
    const location=useLocation();
    return (
        <>
        <div className="content">
                <h3>{!props.subheading?"Overview":props.subheading}</h3>
                {props.text}
            </div>
        </>

    )
}
export default Content;