import Heading from 'Components/Heading';
import React, { useRef, useState } from 'react';

import styles from './Field.module.css';
import Text from './Text';
import { Subfield } from './Subfield';
import AddSubfieldButton from './AddSubfieldButton';

export interface FieldData {
	key: number;
}

export type SubfieldStateType = [
	Subfield[],
	React.Dispatch<React.SetStateAction<Subfield[]>>
];

export default function Field(props: { key: number }) {
	const tmp: Subfield[] = [];
	const subfieldState: SubfieldStateType = useState(tmp);
	const [subfields, setSubfields] = subfieldState;

	const addSubfieldButtonDOM = useRef(null);
	return (
		<div className={styles['field']}>
			<Heading val="" />
			<ul className={styles['subfields']}>
				{subfields.map((e, i) => {
					console.log(`Here ${i}`);
					e.key = i;

					const ref = useRef(null);

					if (e.type == 'TEXT')
						return (
							<Text
								ref={addSubfieldButtonDOM}
								subfield={{
									type: 'TEXT',
									heading: e.heading,
									body: e.body || '',
								}}
								subfieldState={subfieldState}
								id={i}
							></Text>
						);
				})}
			</ul>
			<AddSubfieldButton
				subfieldsState={subfieldState}
				ref={addSubfieldButtonDOM}
			></AddSubfieldButton>
		</div>
	);
}
