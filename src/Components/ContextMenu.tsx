import React from 'react';
import { withRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { Helmet } from 'react-helmet';

import styles from './ContextMenu.module.css';
import '../index.css';

class ContextMenu extends React.Component {
	state = {
		xPos: '0px',
		yPos: '0px',
		showMenu: false,
	};

	componentDidMount() {
		document.addEventListener('click', this.handleClick);
		document.addEventListener('contextmenu', this.handleContextMenu);
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.handleClick);
		document.removeEventListener('contextmenu', this.handleContextMenu);
	}

	handleClick = (e: any) => {
		if (this.state.showMenu) this.setState({ showMenu: false });
	};

	handleContextMenu = (e: any) => {
		e.preventDefault();

		this.setState({
			xPos: `${e.pageX}px`,
			yPos: `${e.pageY}px`,
			showMenu: true,
		});
	};

	render() {
		const { showMenu, xPos, yPos } = this.state;

		if (showMenu) {
			return (
				<div
					className={styles.contextMenu}
					style={{
						top: yPos,
						left: xPos,
					}}
				>
					<Helmet>
						<html lang="en" />
						<meta charSet="UTF-8" />
						<meta
							name="viewport"
							content="width=device-width, initial-scale=1.0"
						/>
					</Helmet>

					<button className="coolButton">Create new text note</button>
				</div>
			);
		} else {
			return null;
		}
	}
}

export default ContextMenu;
