import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import styles from './SocialIconRow.module.css';
import '../index.css';

import YouTubeIcon from '../Media/Branding/YouTube/youtube_full_color_icon/social/128px/red/youtube_social_circle_red.png';
import TwitterIcon from '../Media/Branding/Twitter/Twitter social icons - circle/Twitter social icons - circle - blue.png';
import itchIcon from '../Media/Branding/itch.io/logos/app-icon.png';
import DiscordIcon from '../Media/Branding/Discord/Logos/3_Icon_Clyde/RGB/Custom Discord logo with background.png';

function SocialIconRow() {
	return (
		<div className={styles['socialIconRow']}>
			<a
				href="https://www.youtube.com/channel/UCQw8W0hg4jUdY0qqPNnoanQ"
				hrefLang="en"
				target="_blank"
				rel="noreferrer"
			>
				<img
					className={styles['socialIcon']}
					src={YouTubeIcon}
					alt="YouTube social icon"
				/>
			</a>
			<a
				href="https://twitter.com/ADucksQuack"
				hrefLang="en"
				target="_blank"
				rel="noreferrer"
			>
				<img
					className={styles['socialIcon']}
					src={TwitterIcon}
					alt="Twitter social icon"
				/>
			</a>
			<a
				href="https://discord.gg/qxpFnqmnCB"
				hrefLang="en"
				target="_blank"
				rel="noreferrer"
			>
				<img
					className={`${styles['socialIcon']} ${styles['discordIcon']}`}
					src={DiscordIcon}
					alt="Discord social icon"
				/>
			</a>
			<a
				href="https://a-ducks-quack.itch.io/"
				hrefLang="en"
				target="_blank"
				rel="noreferrer"
			>
				<img
					className={`${styles['socialIcon']} ${styles['itchIcon']}`}
					src={itchIcon}
					alt="itch.io social icon"
				/>
			</a>
		</div>
	);
}

export default withRouter(SocialIconRow);
