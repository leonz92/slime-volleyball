import { Link } from 'react-router-dom';

export default function Navbar () {
  return (
		<header className='App-header'>
			<div>
				<img src='/assets/navbar-slime.gif' alt='small slime' />
				&nbsp;&nbsp;
				<p>SLIME VOLLEYBALL</p>
			</div>
			<div>
				<Link to='/'>Play</Link>
				&nbsp;&nbsp;
				<Link to='/about'>About</Link>
			</div>
		</header>
	)
}
