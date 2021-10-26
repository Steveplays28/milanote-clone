import Heading from 'Components/Heading';
import React, { useRef, useState } from 'react';

import styles from './Field.module.css';
import Text from './Text';
import { Subfield } from './Subfield';
import AddSubfieldButton from './AddSubfieldButton';

export interface FieldData {
	key: number;
}

export default function Field(props: { key: number }) {
	const tmp: Subfield[] = [];
	const [subfields, setSubfields] = useState(tmp);

	return (
		<div className={styles['field']}>
			<Heading val="" />
			<ul className={styles['subfields']}>
				{subfields.map((e, i) => {
					if (e.type == 'TEXT' && e.body)
						return (
							<Text
								heading={e.heading}
								body={e.body}
								type="TEXT"
								key={i}
							></Text>
						);
				})}
			</ul>
			<AddSubfieldButton
				subfieldsState={[subfields, setSubfields]}
			></AddSubfieldButton>
		</div>
	);
}
