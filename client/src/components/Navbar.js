import React from "react";
import HaveRead from "../pages/HaveRead";
import SearchBooks from "../pages/SearchBooks";
import WantToRead from "../pages/WantToRead";
// import Login from "../components/LoginForm";
import { Link } from "react-router-dom";

const AppNavbar = () => {
    //possible modals for login/signup
    // const [showModal, setShowModal] = useState(false);

    return (
        <>
        
<nav class="uk-navbar-container" uk-navbar>

<div class="uk-navbar-right" id="nav-right">
    <ul class="uk-navbar-nav" id="nav">
        <li><Link to="/">Search Books</Link></li>
        <li><Link to="/have">Have Read</Link></li>
        <li><Link to="/want">Want To Read</Link></li>
        {/* <li><Link to={<Login/>}>Login</Link></li> */}
    </ul>

</div>

</nav>

        </>
    )
};
export default AppNavbar



