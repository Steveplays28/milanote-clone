import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import styles from './Games.module.css';
import '../index.css';

import sainCoverArt from '../Media/Games/Sain/sain-cover-art.png';
import appleAppStore from '../Media/Branding/Apple App Store/US/Download_on_App_Store/Black_lockup/SVG/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg';
import itchio from '../Media/Branding/itch.io/badges/badge-color.png';

function Games() {
	return (
		<div className={styles['games']}>
			<Helmet>
				<html lang="en" />
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />

				<title>Games | A Duck&apos;s Quack</title>
				<meta
					name="description"
					content="The team behind A Duck's Quack uses Construct 3 and Unity to create unique and surreal gaming experiences."
				/>
				<meta name="author" content="A Duck's Quack" />
				<meta
					name="keywords"
					content="Duck, indie, studio, game development, gaming, games"
				/>
			</Helmet>

			<p className={`${styles['games-text']} coolText`}>
				The team behind A Duck&apos;s Quack uses Construct 3 and Unity to create
				unique and surreal gaming experiences.
			</p>

			<div className={`${styles['row']} coolText`}>
				<div className={`${styles['game-text']}`}>
					<p className={`${styles['game-title']}`}>Sain!</p>

					<p className={`${styles['game-description']}`}>
						<a
							href="https://play.google.com/store/apps/details?id=com.aducksquack.sain&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
							hrefLang="en"
							target="_blank"
							rel="noreferrer"
						>
							<img
								className={`${styles['googlePlay']}`}
								alt="Get it on Google Play"
								src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
							/>
						</a>

						<a
							href="https://apps.apple.com/us/app/sain/id1578937683"
							hrefLang="en"
							target="_blank"
							rel="noreferrer"
						>
							<img
								className={`${styles['appleAppStore']}`}
								alt="Get it on the App Store"
								src={appleAppStore}
							/>
						</a>

						<a
							href="https://a-ducks-quack.itch.io/sain"
							hrefLang="en"
							target="_blank"
							rel="noreferrer"
						>
							<img
								className={`${styles['itchio']}`}
								alt="Get it on itch.io"
								src={itchio}
							/>
						</a>
					</p>

					<div className={`${styles['platformIndicators']}`}>
						<p className={`${styles['mobile']}`}>Mobile</p>
						<p className={`${styles['desktop']}`}>Desktop</p>
					</div>
				</div>

				<img
					className={`${styles['game-image']} background`}
					src={sainCoverArt}
					alt="A Duck's Quack GIF"
				/>
			</div>

			<br></br>
			<p className={`coolText`}>More coming soon™</p>
		</div>
	);
}

export default withRouter(Games);
