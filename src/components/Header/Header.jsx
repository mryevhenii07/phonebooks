import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Navigation from '../Navigation/Navigation';
import s from './Header.module.css';
import BigButton from '../common/BigButton/BigButton';
import UserMenu from '../UserMenu/UserMenu';

const Header = (props) => {
  return (
    <div className={s.headerWrap}>
      <Navigation />
      {!props.name ? (
        <Link to="/login">
          <BigButton text="Create todo" />
        </Link>
      ) : (
        <UserMenu />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    name: state.name,
  };
};

export default connect(mapStateToProps, null)(Header);
