import React, { useState } from 'react';
import Field, { FieldData } from './Field';

import styles from './Field.module.css';

export default function FieldContainer() {
	const tmp: FieldData[] = [];
	const [fields, setFields] = useState(tmp);

	return (
		<div>
			{fields.map((e) => (
				<Field key={e.key}></Field>
			))}
			<button
				className={styles['field-container__add-btn']}
				onClick={() => setFields([...fields, { key: fields.length }])}
			>
				Add field
			</button>
		</div>
	);
}
