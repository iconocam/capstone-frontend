import React from 'react';
import { Link } from 'react-router-dom';

const SubNavLinks = ({ text, to }) => {
    return <Link to={to}>{text}</Link>;
};

export default SubNavLinks;