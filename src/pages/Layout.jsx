// Navbar + Outlet

import { Link, Outlet } from "react-router";

export default function Layout() {
    return(
        <div style={{width: "80vw"}}>  
            <nav style={{position: "fixed", top: "0", display: "flex", width: "80%"}}>
                <ul>
                    <li><strong><Link to='/'>SubHub</Link></strong></li>
                </ul>
                <ul>
                    <li>
                        <Link to='/add'>Add Creator</Link>
                    </li>
                </ul>
            </nav>

            <div style={{marginTop: "7%"}}>
                <Outlet/>
            </div>
        </div>
    )
}