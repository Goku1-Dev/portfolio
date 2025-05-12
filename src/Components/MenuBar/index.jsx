import './index.scss';
import ThemeToggle from '../ThemeToggle';
import SearchBar from '../SearchBar';
import { NavigationLinks } from './data';
import { Link } from 'react-router-dom';

export const MenuBar = () => {
    return (
        <div className='Menu_container'>
            <div className='Menu_Wrapper'>
                <div className='Menu_logo'>Logo</div>
                <div className='Menu_item'>
                    {NavigationLinks.map((link) => (
                        <Link
                            key={link.id}
                            to={link.path}
                            className='Menu_link'
                        >
                            {link.title}
                        </Link>
                    ))}
                </div>
                <div className='Menu_Search'>
                    <SearchBar />
                </div>
                <div className='Menu_Dark_Light'>
                    <ThemeToggle />
                </div>
            </div>
        </div>
    );
};

export default MenuBar;
