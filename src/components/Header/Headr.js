import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../../CoustomLink/CoustomLink';


const Headr = () => {
    return (
        <div>
            <h1>Welcome to my fancy routing website</h1>
            <nav>
                < CustomLink to="/">Home</ CustomLink>
                < CustomLink to="friends">Friends</ CustomLink>
                < CustomLink to="about">About</ CustomLink>
            </nav>
        </div>
    );
};

export default Headr;