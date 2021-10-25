import React from 'react';
import { withRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { Helmet } from 'react-helmet';

import styles from './Bbomb.module.css';
import '../../index.css';

import bbombBanner from '../../Media/Team/Bbomb/Bbomb banner (with fade).png';
import bbomb from '../../Media/Team/Bbomb/Bbomb profile picture.png';
import SocialIconRow from 'Components/SocialIconRow';

function Bbomb() {
	return (
		<div className={styles['bbomb']}>
			<Helmet>
				<html lang="en" />
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />

				<title>Indie game development studio | A Duck&apos;s Quack</title>
				<meta
					name="description"
					content="A Duck's Quack is an independent indie game development studio, that uniquely focuses on our differences rather than our similarities."
				/>
				<meta name="author" content="A Duck's Quack" />
				<meta
					name="keywords"
					content="Duck, indie, studio, game development, gaming, games"
				/>
			</Helmet>

			<img
				className={`${styles['bannerImage']}`}
				src={bbombBanner}
				alt="Bbomb: explosive games!"
			/>

			<div className={`flexRow`}>
				{/* prettier-ignore */}
				<Link className={`${styles['aboutButtons']} coolButton`} to="#aboutMe">
					About me
				</Link>
				{/* prettier-ignore */}
				<Link className={`${styles['aboutButtons']} coolButton`} to="#socials">
					Socials
				</Link>
				{/* prettier-ignore */}
				<Link className={`${styles['aboutButtons']} coolButton`} to="#games">
					Games
				</Link>
			</div>

			<div className={styles['row-1']} id="aboutMe">
				<p className={`${styles['about-text']} coolText`}>
					Hello hi! :D
					<br></br>
					<br></br>
					I&apos;m Bbomb, a developer for A Duck&apos;s Quack who loves making games. I
					also have a YouTube channel, where I post devlogs for my games.
					<br></br>
					<br></br>I love my community, and I hope you will join.
				</p>

				<img className={styles['about-image']} src={bbomb} alt="Bbomb" />
			</div>

			<div id="socials" className={`${styles['socials']} coolText`}>
				<h1>Socials</h1>

				<SocialIconRow />
			</div>

			<div id="games" className={`${styles['games']} coolText`}>
				<h1>Games</h1>
				<p>
					I mainly use Unity and C#, but Godot and Python are both things I am
					interested in and would love to explore more. Click on the icons to
					play my games :D
					<br />
					<br />
					Games will go here
				</p>
			</div>
		</div>
	);
}

export default withRouter(Bbomb);
