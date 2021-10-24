import { Link } from 'react-router-dom'
import { APP_TITLE } from '../../utils/constants';

import NavBar from '../NavBar';

import './styles.css';
 
const Header = () => {
  return (
    <div id="headerContainer">
      <Link to="/" id="companyName" >{APP_TITLE}</Link>
      <NavBar/>
    </div> 
  );
}
 
export default Header;