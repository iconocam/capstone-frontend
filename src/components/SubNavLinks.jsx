import React from 'react';
import { Link } from 'react-router-dom';
// simple link component that takes text and to as props, and when rendered, it creates a navigation link using react-router-dom's Link component.

// create reusable navigation components
const SubNavLinks = ({ text, to }) => {
    return <Link to={to}>{text}</Link>;
};

export default SubNavLinks;