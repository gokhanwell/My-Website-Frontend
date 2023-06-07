import React from 'react'
import './Footer.css'

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

function Footer() {
    return (
        <div className='footer'>
            <p className="footer-title">Gökhan YARDIMCI</p>
            <div className="footer-social">
                <a href="https://www.linkedin.com/in/gökhan-yardimci/" className="footer-icon"><LinkedInIcon /></a>
                <a href="https://www.linkedin.com/in/gökhan-yardimci/" className="footer-icon"><TwitterIcon /></a>
                <a href="https://github.com/gokhanwell/" className="footer-icon"><GitHubIcon /></a>
            </div>
            <p className='footer-copyright'>&#169; 2022 copyright all right reserved</p>
        </div>
    )
}

export default Footer
