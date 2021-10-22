import { Link } from 'react-router-dom';

export default function Navbar () {
  return (
		<header className='Navbar'>
			<div className="logo-container">
				<img src='/assets/navbar-slime.gif' alt='small slime' />
				&nbsp;
				<div className="logo-text">Slime Volleyball</div>
			</div>
			<div className="nav-links">
				<Link to='/'>Play</Link>
				&nbsp;&nbsp;
				<Link to='/about'>About</Link>
			</div>
		</header>
	)
}
