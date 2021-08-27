import style from './Header.module.css';
import {Link} from "react-router-dom";

function Header() {

  return (<div className={style.header}>
    <div className={style.brand}>
      <Link to="/">
        <p>ivan mcgill</p>
      </Link>

    </div>
    <div className={style.about}>
      <Link to="/about">
        <p>about</p>
      </Link>
    </div>

  </div>)
}

export default Header;
