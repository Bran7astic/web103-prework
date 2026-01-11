// Navbar + Outlet

import { Link, Outlet } from "react-router";

export default function Layout() {
    return(
        <>  
            <nav>
                <ul>
                    <li><strong><Link to='/'>SubHub</Link></strong></li>
                </ul>
                <ul>
                    <li>
                        <Link to='/add'>Add Creator</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </>
    )
}