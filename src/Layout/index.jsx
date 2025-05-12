import './index.scss';
import PropTypes from 'prop-types';
import MenuBar from '../Components/MenuBar';
import Footer from '../Components/BodyComponenets/Footer';

const Layout = ({ children }) => {
    return (
        <div className="Layout_container">
            <div className="layout_wrapper">
                <div className="Header">
                    <MenuBar />
                </div>
                <div className="Layout_Body">
                    {children}
                </div>
                <div className="Footer">
                    <Footer />
                </div>
            </div>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
