import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="Nav gnb">
      <ul>
        <li><Link to="/">main</Link></li>
        <li><Link to="/sc01">section01</Link></li>
        <li><Link to="/sc02">section02</Link></li>
        <li><Link to="/sc03">section03</Link></li>
        {/* a href말고 link to를 쓰자 */}
      </ul>
    </nav>
  )
}

export default Nav;