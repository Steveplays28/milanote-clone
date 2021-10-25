import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import styles from './PageNotFound.module.css';
import '../index.css';

import ADQGif from '../Media/a-ducks-quack.gif';

function PageNotFound() {
	return (
		<div className={styles['home']}>
			<Helmet>
				<html lang="en" />
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="robots" content="noindex, follow" />

				<title>404 | A Duck&apos;s Quack</title>
				<meta
					name="description"
					content="Quack. Sorry, I couldn't find the page you were looking for! D:"
				/>
				<meta name="author" content="A Duck's Quack" />
				<meta
					name="keywords"
					content="Duck, indie, studio, game development, gaming"
				/>
			</Helmet>

			<div className={styles['row-1']}>
				<div className={`${styles['errorText']}`}>
					<h1 className={`${styles['errorTitle']} coolText`}>
						404 page not found
					</h1>
					<p className={`${styles['errorDescription']} coolText`}>
						Quack. Sorry, I couldn&apos;t find the page you were looking for! :(
					</p>
				</div>

				<img
					className={`${styles['duckImage']}`}
					src={ADQGif}
					alt="A Duck's Quack GIF"
				/>
			</div>

			<br></br>
			<Link
				className={`${styles['backToHomeButton']} coolButton`}
				exact={true}
				to="/"
			>
				Go back to the home page
			</Link>
		</div>
	);
}

export default withRouter(PageNotFound);
