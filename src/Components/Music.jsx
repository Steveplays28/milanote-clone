import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import styles from './Music.module.css';
import '../index.css';

function Games() {
	return (
		<div className={styles['music']}>
			<Helmet>
				<html lang="en" />
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />

				<title>Music | A Duck&apos;s Quack</title>
				<meta
					name="description"
					content="Check out the incredible bops made by the one and only Icoso!"
				/>
				<meta name="author" content="A Duck's Quack" />
				<meta
					name="keywords"
					content="Duck, indie, studio, game development, gaming, games"
				/>
			</Helmet>

			<p className={`${styles['music-text']} coolText`}>
				Check out the incredible bops made by the one and only Icoso!
				<p className={`warningText`}>Watch out below, the music may be loud.</p>
			</p>

			{/* Icoso's album: Squares */}
			<div className={styles['spotify-embed']}>
				<iframe
					id="spotify-iframe"
					title="Spotify Embed"
					src="https://open.spotify.com/embed/album/6XSTSLq387Wx67P9d5pO44"
					width="100%"
					height="460"
					frameBorder="0"
					allowtransparency="true"
					allow="encrypted-media"
				></iframe>
			</div>
		</div>
	);
}

export default withRouter(Games);
