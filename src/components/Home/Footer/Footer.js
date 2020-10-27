import React from 'react';

const Footer = () => {
    const footerStyle = {
        backgroundColor: '#FBD062',
        textAlign: 'center',
        paddingBottom: '10px'
    }
    return (
        <div style={footerStyle}>
            <h6>copyright Orange labs {(new Date()).getFullYear()}</h6>
        </div>
    );
};

export default Footer;