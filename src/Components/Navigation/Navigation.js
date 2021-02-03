import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink, useHistory, Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Navigation = () => {
    const {loggedIn, showImage} = useContext(UserContext)
    const [loggedinUser, setLoggedinUser ] = loggedIn
    const history = useHistory()
    const getUser = localStorage.getItem('loggedIn')
    const [user, setUser] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/users/?token=' + getUser)
            .then((response) => response.data)
            .then(data => {
                console.log(data)
                setUser(data)
            })
    }, [])
    const handleLog = () => {
        localStorage.clear()
        setTimeout(function(){ window.location.reload() }, 2000);
    }
    console.log(getUser)
    user.map(x => console.log(x.values.name))
    return (
        <header className="bd-hd px-5">
                <Navbar expand="lg">
                    <div className='mr-5 mb-4'>
                        <Link to='/' className='text-decoration-none'><h2>PhotoGallery</h2></Link>
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <NavLink className="text-decoration-none font-weight-bold text-dark mx-3 my-4" to="/" style={{ fontSize: '17px', fontWeight: 'bold' }}>Home</NavLink>
                            <NavLink className="text-decoration-none font-weight-bold text-dark mx-3 my-4" to='/' style={{ fontSize: '17px', fontWeight: 'bold' }}>About</NavLink>
                            <NavLink className="text-decoration-none font-weight-bold text-dark mx-3 my-4" to="/" style={{ fontSize: '17px', fontWeight: 'bold' }}>Contact us</NavLink>
                            {localStorage.getItem('loggedIn')?
                                <>
                                    <div className="text-decoration-none font-weight-bold text-dark mx-3 my-4" style={{ fontSize: '17px', fontWeight: 'bold' }}>
                                        HOWDY, {
                                            user.map(x => x.values.name)
                                        }
                                    </div>
                                    <button className='btn btn-warning px-5 mb-5 mt-3' style={{ fontSize: '17px', fontWeight: 'bold', borderRadius: '30px' }} onClick={handleLog}>Logout</button>
                                </>
                                : <>
                                    <button className='btn btn-warning px-5 mb-5 mt-3' style={{ fontSize: '17px', fontWeight: 'bold', borderRadius: '20px' }} onClick={() => history.push('/login')}>Login</button>
                                </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
    );
};

export default Navigation;