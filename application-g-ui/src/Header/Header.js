import './Header.css';
import Logo from './Logo/Logo';

function Header() {
  return (
    <div className="Header">
      <Logo></Logo>
      <h1>Fitness Tracker</h1>
    </div>
  );
}

export default Header;
