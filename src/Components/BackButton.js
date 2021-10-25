import React from 'react';
import { withRouter, useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

function BackButton() {
	const [showButton, setShowButton] = React.useState(false);
	const location = useLocation();

	let showButtonVar;
	if (
		location.pathname === '/Bbomb' ||
		location.pathname === '/DerpyDino35' ||
		location.pathname === '/HallowdGames' ||
		location.pathname === '/Icoso' ||
		location.pathname === '/Spacespy' ||
		location.pathname === '/Steveplays'
	) {
		showButtonVar = true;
	} else {
		showButtonVar = false;
	}

	React.useEffect(() => {
		setShowButton(showButtonVar);
	}, [showButtonVar]);

	return (
		<Link
			id="backButton"
			className={showButton ? 'backButton' : 'backButton hidden'}
			to="/#meetTheTeam"
		>
			<p className={'backButtonText'}>&lt;</p>
		</Link>
	);
}

export default withRouter(BackButton);
