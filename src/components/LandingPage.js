import React, { useEffect } from 'react';
import Game from './Game';

export default function LandingPage () {
  useEffect(() => {
    window.game = new Game();

    return () => window.game.destroy(true);
  }, [])


  return (
		<div className='App'>
			&nbsp;
			<div id='game_instance' />
			<div>
				<h1 className='how-to-play'>How To Play</h1>
			</div>
		</div>
	)
}
