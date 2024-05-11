import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />
                <NavMenu>
                    <NavLink to="/home" >
                        Home
                    </NavLink>
                    <NavLink to="/read" activeStyle>
                        Read
                    </NavLink>
                    <NavLink to="/search" activeStyle>
                        Search
                    </NavLink>
                    <NavLink to="/guide" activeStyle>
                        Guide
                    </NavLink>
                    <NavLink to="/edit" activeStyle>
                        Edit
                    </NavLink>
                    <NavLink to="/community" activeStyle>
                        Community
                    </NavLink>
                    <NavLink to="/account" activeStyle>
                        Account
                    </NavLink>

                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}

                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;