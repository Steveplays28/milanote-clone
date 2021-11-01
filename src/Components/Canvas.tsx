import React from 'react';
import { withRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { Helmet } from 'react-helmet';

import styles from './Canvas.module.css';
import '../index.css';

function Canvas() {
	const setCoordinates = (x: number, y: number, snapToGrid: boolean) => {
		//TODO: snap to grid
		return `position:absolute;   
				left: ${snapToGrid ? x.toFixed(0) : x.toFixed(0)}px;         
				top: ${snapToGrid ? y.toFixed(0) : y.toFixed(0)}px;`;
	};

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

			<div className={styles.centerIndicator} />
		</div>
	);
}

export default withRouter(Canvas);
