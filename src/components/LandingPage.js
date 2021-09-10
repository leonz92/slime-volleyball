import React, { useEffect, useState } from 'react';
import Game from './Game';

export default function LandingPage () {
  const { score1, setScore1 } = useState(0);
  const { score2, setScore2 } = useState(0);
  const { ballPossession, setBallPossession } = useState(true);

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
