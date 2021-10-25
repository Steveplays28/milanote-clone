import React from 'react';
import { withRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { Helmet } from 'react-helmet';

import styles from './Canvas.module.css';
import '../index.css';

function Canvas() {
	return (
		<div className={styles.canvas}>
			<Helmet>
				<html lang="en" />
				<meta charSet="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>

				<title>Milanote clone</title>
				<meta
					name="description"
					content="Yes, this is a Milanote clone :)"
				/>
				<meta name="author" content="Steve and Mixel" />
				<meta name="keywords" content="Milanote, note, notes" />
			</Helmet>

			<p className={styles.centerIndicator}></p>
		</div>
	);
}

export default withRouter(Canvas);
