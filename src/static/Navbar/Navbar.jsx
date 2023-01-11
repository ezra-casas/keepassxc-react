import { Link } from "react-router-dom"

export default function Navbar(){
    return(

//         
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a href="" className="navbar-item">KeePassXC</a>
                {/* Hamburger Menu */}
                <a role='button' className="navbar-burger" aria-label="menu" aria-expanded="false" >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div className="navbar-menu" id="navigations">

                <div className="navbar-end">
                    <a href="#" className="navbar-item">Download</a>
                    <a href="#" className="navbar-item">Docs / FAQs</a>
                    <a href="#" className="navbar-item">GitHub</a>

                    {/* Dropdown Menu */}
                    <a href="#" className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">More</a>
                        <div className="navbar-dropdown is-right">
                            <a href="#" className="navbar-item">The Project</a>
                            <a href="#" className="navbar-item">Screenshots</a>
                            <a href="#" className="navbar-item">The Team</a>        
                        </div>
                    </a>

                </div>

            </div>

        </nav>
    )
}