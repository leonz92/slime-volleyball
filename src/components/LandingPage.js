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
			<div className='how-to-play'>
				<h1>How To Play</h1>
				<p>
					It's a 2 player volleyball game. Player 1 is on the left and Player 2
					is on the right. If the ball touches the ground on your side, the
					opponent scores a point.
				</p>
				<p> First to score 6 points wins!</p>
				<p>Player 1 controls: W, S, A, D</p>
				<p>Player 2 controls: Up, Down, Left, Right</p>
				<p>Click the 'Reset' button to restart at any time.</p>
			</div>
			&nbsp;
		</div>
	)
}
