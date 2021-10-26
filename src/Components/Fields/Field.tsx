import Heading from 'Components/Heading';
import React, { useRef, useState } from 'react';

import styles from './Field.module.css';
import Text from './Text';
import { Subfield } from './Subfield';

export default function Field() {
	const [subfields, setSubfields]: [
		Subfield[],
		React.Dispatch<React.SetStateAction<Subfield[]>>
	] = useState([new Subfield({ type: 'TEXT', heading: 'HEAD', body: 'body' })]);

	return (
		<div className={styles['field']}>
			<Heading val="Heading" />
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
		</div>
	);
}
