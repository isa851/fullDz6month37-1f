import { Link } from 'react-router-dom';
import './header.scss';
import image2 from './image.png';

const Header = () => {
    return (
        <header className="header">
            <div className="header-nav">
                <Link to={'/'}>
                    <img src={image2} alt="logo" />
                </Link>

                <ul>
                    <li><a href="#" className='sup'>Docs</a></li>
                    <li><a href="#" className='sup'>About</a></li>
                    <li><a href="#" className='sup button' id='support'>SUPPORT US</a></li>
                </ul>
            </div>
            <div className="header-banner">
                <h1>The Rick and Morty API</h1>
            </div>  
        </header>
    );
}

export default Header;
