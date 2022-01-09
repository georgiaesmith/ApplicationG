import './Logo.css';

function Logo() {
  return (
    <div className="Logo">
      <img id="fitness-logo" src={require('./FitnessLogo.png')} />
    </div>
  );
}

export default Logo;
