import React, { useRef, useState } from 'react';

import styles from './Heading.module.css';

export default function Heading(props: { val: string | undefined }) {
	const [heading, setHeading] = useState(props.val);
	const headingDOM = useRef(null);

	return (
		<>
			<input
				ref={headingDOM}
				type="text"
				className={styles['heading']}
				value={heading}
				onInput={() => setHeading(headingDOM?.current?.['value'] || '')}
				placeholder="Heading"
			/>
		</>
	);
}
