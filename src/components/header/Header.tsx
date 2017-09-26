import * as React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './header.less';

const Header: React.SFC<{}> = () => (
  <div>
    <h1 className={styles.title}>Tour of Heroes</h1>
    <nav className={styles.nav}>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/heroes">Heroes</Link>
    </nav>
    {/* TODO: what is this? <router-outlet></router-outlet>*/}
  </div>
);

export default Header;
