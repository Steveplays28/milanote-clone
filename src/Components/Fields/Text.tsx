import Heading from 'Components/Heading';
import React, { createRef, useRef, useState } from 'react';
import { SubfieldStateType } from './Field';
import RemoveSubfieldButton from './RemoveSubfieldButton';
import { Subfield } from './Subfield';

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

export default function Text(props: {
	subfield: TextSubfield;
	subfieldState: SubfieldStateType;
	id: number;
	ref: React.MutableRefObject<null>;
}) {
	const [body, setBody] = useState('');

	const textareaDOM = useRef(null);
	const headingDOM: React.RefObject<HTMLDivElement> = createRef();

	const [subfields, setSubfields] = props.subfieldState;

	setSubfields(
		subfields.map(
			(e) =>
				new Subfield({
					type: 'TEXT',
					body: body,
					heading:
						headingDOM['current']?.['querySelector']('input')?.value || '',
					key: e.key,
					ref: e.ref,
				})
		)
	);

	return (
		<div className={styles['subfield']}>
			<Heading val={props.subfield.heading} ref={headingDOM} />
			<textarea
				ref={textareaDOM}
				className={styles['subfield__text__body']}
				value={body || props.subfield.body}
				onInput={() => setBody(textareaDOM?.current?.['value'] || '')}
			></textarea>
			<p>{props.id}</p>
			<RemoveSubfieldButton
				subfieldState={props.subfieldState}
				id={props.id}
			></RemoveSubfieldButton>
		</div>
	);
}
const TextSubfield__equals = ([SF1, SF2]: [Subfield, Subfield]) =>
	SF1.type === SF2.type &&
	SF1.heading === SF2.heading &&
	SF1.body === SF2.body &&
	SF1.key === SF2.key;
