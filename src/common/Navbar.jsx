import { Link, useLocation } from "react-router-dom";
import "./common.css"
function Navbar(props) {
    const location = useLocation();
    return (
        <div className="sidebar">
            <ul className="navbar-list">
                <div className="getstarted">GET STARTED</div>
                {props.sections.map((item, index) => {
                    const path = `/${props.heading}${item.toLowerCase() === 'overview' ? '' : `/${item.toLowerCase()}`}`;
                    return (
                        <li
                            key={index}
                            className={`navbar-item ${location.pathname === path ? 'active' : ''}`}
                        >
                            <Link to={path} className="navbar-link">
                                {item}
                            </Link>
                        </li>
                    );
                })}

            </ul>
        </div>
    )

}
export default Navbar;