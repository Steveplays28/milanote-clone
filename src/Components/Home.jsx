import React from 'react';
import { withRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { Helmet } from 'react-helmet';

import styles from './Home.module.css';
import '../index.css';

import ADQGif from '../Media/a-ducks-quack.gif';
import bbomb from '../Media/Team/Bbomb/Bbomb profile picture.png';
import derpyDino from '../Media/Team/Derpy/Derpy looking right.png';
import hallowdGames from '../Media/Team/Hallowd/Hallowd.png';
import icoso from '../Media/Team/Icoso/Icoso profile picture.png';
import spacespy from '../Media/Team/Space/Spacespy profile picture.jpeg';
import steveplays from "../Media/Team/Steve/Steve's profile picture.png";

function Home() {
	return (
		<div className={styles['home']}>
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

			<div className={styles['row-1']}>
				<p className={`${styles['about-text']} coolText`}>
					A Duck&apos;s Quack is an independent indie game development studio,
					founded by DerpyDino35, and joined by Arctic Fox, Bbomb, BLANKdev,
					Icoso, Hallowd Games, Spacespy, and Steveplays.
					<br></br>
					<br></br>A Duck’s Quack uniquely focuses on our differences, rather
					than our similarities. We highlight the imperfections of the indie
					genre, because imperfections are what makes indie development truly
					indie.
					<br></br>
					<br></br>
					For us, it&apos;s not about making money; it&apos;s about creating a
					passionate, impeccable community built of people who care.
				</p>

				<img
					className={styles['about-image']}
					src={ADQGif}
					alt="A Duck's Quack GIF"
				/>
			</div>

			<Link
				className={`${styles['readMoreButton']} coolButton`}
				to="#meetTheTeam"
			>
				Read more
			</Link>

			<br></br>
			<br></br>
			<br></br>
			<div id="meetTheTeam" className={`${styles['meetTheTeam']} coolText`}>
				<p className={`${styles['meetTheTeamText']}`}>Meet the team!</p>

				<div className={`${styles['meetTheTeamProfileIcons']}`}>
					<div>
						<Link to="/Bbomb">
							<img
								className={`${styles['teamIcon']}`}
								draggable="false"
								src={bbomb}
								alt="Bbomb"
							/>
						</Link>
						<br></br>

						<p className={`${styles['teamMemberText']}`}>
							Bbomb | Developer/artist
							<p className={`${styles['teamMemberTextTooltip']}`}>
								:&#41;
								<br />
								<br />
								<Link to="/Bbomb" className={`coolButton`}>
									Read more
								</Link>
							</p>
						</p>
					</div>
					<div>
						<Link to="/DerpyDino35">
							<img
								className={`${styles['teamIcon']}`}
								draggable="false"
								src={derpyDino}
								alt="DerpyDino35"
							/>
						</Link>
						<br></br>

						<p className={`${styles['teamMemberText']}`}>
							DerpyDino35 | Founder
							<p className={`${styles['teamMemberTextTooltip']}`}>
								:&#41;
								<br />
								<br />
								<Link to="/DerpyDino35" className={`coolButton`}>
									Read more
								</Link>
							</p>
						</p>
					</div>
					<div>
						<Link to="/HallowdGames">
							<img
								className={`${styles['teamIcon']}`}
								draggable="false"
								src={hallowdGames}
								alt="Hallowd Games"
							/>
						</Link>
						<br></br>

						<p className={`${styles['teamMemberText']}`}>
							Hallowd Games | Developer/artist
							<p className={`${styles['teamMemberTextTooltip']}`}>
								:&#41;
								<br />
								<br />
								<Link to="/HallowdGames" className={`coolButton`}>
									Read more
								</Link>
							</p>
						</p>
					</div>
					<div>
						<Link to="/Icoso">
							<img
								className={`${styles['teamIcon']}`}
								draggable="false"
								src={icoso}
								alt="Icoso"
							/>
						</Link>
						<br></br>

						<p className={`${styles['teamMemberText']}`}>
							Icoso | Developer/artist
							<p className={`${styles['teamMemberTextTooltip']}`}>
								:&#41;
								<br />
								<br />
								<Link to="/Icoso" className={`coolButton`}>
									Read more
								</Link>
							</p>
						</p>
					</div>
					<div>
						<Link to="/Spacespy">
							<img
								className={`${styles['teamIcon']}`}
								draggable="false"
								src={spacespy}
								alt="Spacespy"
							/>
						</Link>
						<br></br>

						<p className={`${styles['teamMemberText']}`}>
							Spacespy | Developer/artist
							<p className={`${styles['teamMemberTextTooltip']}`}>
								Spacespy loves to make games using Construct 3...
								<br />
								<br />
								<Link to="/Spacespy" className={`coolButton`}>
									Read more
								</Link>
							</p>
						</p>
					</div>
					<div>
						<Link to="/Steveplays">
							<img
								className={`${styles['teamIcon']}`}
								draggable="false"
								src={steveplays}
								alt="Steveplays"
							/>
						</Link>
						<br></br>

						<p className={`${styles['teamMemberText']}`}>
							Steveplays | Developer/artist
							<p className={`${styles['teamMemberTextTooltip']}`}>
								:&#41;
								<br />
								<br />
								<Link to="/Steveplays" className={`coolButton`}>
									Read more
								</Link>
							</p>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default withRouter(Home);
