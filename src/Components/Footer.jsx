import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import styles from './Footer.module.css';
import '../index.css';

import SocialIconRow from 'Components/SocialIconRow';

function Footer() {
	return (
		<footer className={styles['App-footer']}>
			<h1 className={`${styles['footerText']}`}> made by Steve and Mixel - 2021</h1>

			<SocialIconRow />
		</footer>
	);
}

export default withRouter(Footer);
