export default function About () {
  return (
		<div className='About'>
			<h1>About the Game</h1>
			<p>
				This is a recreation of the classic Slime Volleyball game. It was
				created for my first{' '}
				<a href='https://mintbean.io/meets/d51762d5-b874-4cc1-a420-ff316600192f'>
					Mintbean Hackathon
				</a>{' '}
				in August 2021. If you'd like to learn more about the awesome community
				at Mintbean be sure to check them out{' '}
				<a href='https://info.mintbean.io/'>here</a>.
			</p>
			<h2>Technologies Used</h2>
			<div className='tech-used'>
				<img
					className='icon'
					src='assets/javascript-logo.png'
					alt='small yellow logo with the letters J and S'
				></img>
				<img
					className='icon'
					src='assets/phaser-logo.png'
					alt='small logo with the text Phaser and a monkey, alien, asteroid and rocket'
				></img>
				<img
					className='icon'
					src='assets/react-logo.png'
					alt='small logo of a blue atom with black text React underneath'
				></img>
				<img
					className='icon'
					src='assets/html-logo.png'
					alt='text html above an orange shield with the number 5 inside'
				></img>
				<img
					className='icon'
					src='assets/css-logo.png'
					alt='text css about a blue shield with the number 3 inside'
				></img>
			</div>
			<h1>Meet the Developer</h1>
			<figure>
				<img
					className='portrait'
					src='assets/meet_the_dev.jpg'
					alt='Man wearing white shirt and bright green shorts sitting next to his black bike at the park.'
				/>
				<figcaption>
					"If you get one percent better each day for one year, you'll end up
					thirty-seven times better by the time you’re done." - James Clear
				</figcaption>
			</figure>
			<p>
				Hi, my name is Leon Zhao and I'm a software engineer based in NYC. I
				love creative problem solving and adventure. Feel free to reach out and
				connect!
			</p>
			<div className='social-links'>
				<a
					href='https://www.linkedin.com/in/lzhao92/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<img src='assets/LI-In-Bug.png' alt='LinkedIn logo' />
				</a>
				&nbsp;
				<a
					href='https://github.com/leonz92/slime-volleyball'
					target='_blank'
					rel='noopener noreferrer'
				>
					<img src='assets/github-mark-120px-plus.png' alt='Github mark logo' />
				</a>
			</div>
			&nbsp;
		</div>
	)
}
