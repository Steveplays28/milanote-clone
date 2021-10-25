import * as React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	withRouter,
	useHistory,
	useLocation,
} from 'react-router-dom';

import ScrollToTop from './Components/ScrollToTop';

import {
	PageNotFound,
	Canvas,
	Contact,
	Games,
	Music,
	Bbomb,
	DerpyDino35,
	HallowdGames,
	Icoso,
	Spacespy,
	Steveplays,
} from './Components';

function App() {
	return (
		<div className="App">
			<ScrollToTop>
				<Switch>
					<Route path="/" exact component={() => <Canvas />} />
					<Route path="/Contact" exact component={() => <Contact />} />

					<Route path="/Games" exact component={() => <Games />} />
					<Route path="/Music" exact component={() => <Music />} />

					<Route path="/Bbomb" exact component={() => <Bbomb />} />
					{/* prettier-ignore */}
					<Route path="/DerpyDino35" exact component={() => <DerpyDino35 />} />
					{/* prettier-ignore */}
					<Route path="/HallowdGames" exact component={() => <HallowdGames />} />
					<Route path="/Icoso" exact component={() => <Icoso />} />
					<Route path="/Spacespy" exact component={() => <Spacespy />} />
					<Route path="/Steveplays" exact component={() => <Steveplays />} />

					<Route component={PageNotFound} />
				</Switch>
			</ScrollToTop>
		</div>
	);
}

function BackToTopButton() {
	const [showButton, setShowButton] = React.useState(false);

	// Determine if back to top button needs to be shown
	React.useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.pageYOffset > 50) {
				setShowButton(true);
			} else {
				setShowButton(false);
			}
		});
	}, []);

	// Scroll the window to the top
	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};

	// Return back to top button for render
	return (
		<button
			id="backToTopButton"
			className={showButton ? 'backToTopButton' : 'backToTopButton hidden'}
			onClick={scrollToTop}
		>
			^
		</button>
	);
}

export const AppWithRouter = withRouter(App);
export const BackToTopButtonWithRouter = withRouter(BackToTopButton);
