import React from 'react';
import propTypes from 'prop-types';

const Navbar = ({ title, icon}) => {
    return (
        <div>
            <div className='navbar bg-primary'>
                <h1>
                    <i className={icon} /> { title }   
                </h1>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    
                    <li>
                        <Link to='/about'>About Us</Link>
                    </li>
                </ul>
         </div>
        </div>
    )
}

Navbar.propTypes = {
    title: propTypes.string.isRequired,
    icon: propTypes.string,
}

Navbar.defaultProps = {
    title: 'contact Keeper',
    icon: 'fas fa-id-card-alt'
}
export default Navbar