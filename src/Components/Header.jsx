import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import styles from './Header.module.css';

function Navigation(props) {
	var path = window.location.pathname;
	var page = path.split('/').pop();

	var gamesClassName = 'link';
	var musicClassName = 'link';
	var homeClassName = 'link';
	var reviewsClassName = 'link';
	var podcastsClassName = 'link';

	if (page === 'games') {
		gamesClassName = 'link-active';
	} else if (page === 'music') {
		musicClassName = 'link-active';
	} else if (page === '') {
		homeClassName = 'link-active';
	}

	return (
		<div className="navigation">
			<header className={styles['App-header']}>
				<Link className={styles[gamesClassName]} to="/games">
					Games
				</Link>
				<Link className={styles[musicClassName]} to="/music">
					Music
				</Link>

				<Link
					exact={true}
					className={`${styles[homeClassName]} ${styles['big-text']}`}
					to="/"
				>
					A Duck&apos;s Quack
				</Link>

				<Link className={styles[reviewsClassName]} to="/reviews">
					Reviews
				</Link>
				<Link className={styles[podcastsClassName]} to="/podcasts">
					Podcasts
				</Link>
			</header>
		</div>
	);
}

export default withRouter(Navigation);
