import { React } from 'react';
import './Home.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function Home() {
    return (
        <div className="home" id='home'>
            <p className='gif' align="center"><a href="https://www.linkedin.com/in/gökhan-yardimci/"><img src="https://user-images.githubusercontent.com/41234408/101987297-4473fb00-3cb9-11eb-9675-289ada4eef7e.gif" alt="Animated footer bars" width="100%" max-width='1024px'/></a></p>
            <div className="home-data">
                <h1 className="home-title">
                    Hey!,<img src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif" alt='' width="50px"></img>
                    <br />
                    I'm <span>Gökhan YARDIMCI</span>
                    <br />
                    DevOps and Cloud Engineer
                </h1>
                <div className="home-img">
                    <img src="assets/home.png" alt=""></img>
                </div>
            </div>

            <div className="home-social">
                <a href="https://www.linkedin.com/in/gökhan-yardimci/" className="home-social-icon">
                    <LinkedInIcon className='icon' />
                </a>
                <a href="https://github.com/gokhanwell" className="home-social-icon">
                    <GitHubIcon className='icon' />
                </a>
            </div>
        </div>
    )
}

export default Home