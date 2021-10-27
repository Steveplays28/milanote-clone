import React, { useRef, useState } from 'react';

import styles from './Heading.module.css';

const Heading = React.forwardRef(function (
	props: { val: string | undefined },
	ref: React.ForwardedRef<HTMLDivElement>
) {
	const [heading, setHeading] = useState(props.val);
	const headingDOM = useRef(null);

	const [visible, setVisible] = useState(true);

	return (
		<div className={styles['heading-root']} ref={ref}>
			<input
				ref={headingDOM}
				type="text"
				className={styles['heading']}
				value={heading}
				onInput={() => setHeading(headingDOM?.current?.['value'] || '')}
				placeholder="Heading"
				hidden={!visible}
			/>
			<button
				className={styles[visible ? 'hide-btn' : 'show-btn']}
				onClick={() => setVisible(!visible)}
			>
				{visible ? '-' : '+'}
			</button>
		</div>
	);
});

Heading.displayName = 'Heading';

export default Heading;
