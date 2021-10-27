import React from 'react';
import { SubfieldStateType } from './Field';

export default function RemoveSubfieldButton(props: {
	id: number;
	subfieldState: SubfieldStateType;
}) {
	const [subfields, setSubfields] = props.subfieldState;

	console.log(`HI in REM ${subfields.map((e) => e.key)}, ID: ${props.id}`);

	return (
		<div>
			<button
				onClick={() => {
					console.log('props', JSON.stringify(props, null, 2));
					setSubfields(
						subfields.filter((e) => {
							console.log('e', JSON.stringify(e, null, 2));
							return e.key != props.id;
						})
					);
				}}
			>
				Rem SF [{props.id},{' '}
				{subfields.filter((e) => e.key == props.id)?.[0]?.key}]
			</button>
		</div>
	);
}
