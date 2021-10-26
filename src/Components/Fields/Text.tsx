import Heading from 'Components/Heading';
import React from 'react';

import styles from './Subfield.module.css';

export class TextSubfield {
	type: 'TEXT';
	heading: string | undefined;
	body: string;

	constructor(body: string, header?: string) {
		this.body = body;
		this.heading = header;
		this.type = 'TEXT';
	}
}

export default function Text(props: TextSubfield) {
	return (
		<div className={styles['subfield']}>
			<Heading val={props.heading} />
			<textarea className={styles['subfield__text__body']}>
				{props.body}
			</textarea>
		</div>
	);
}
