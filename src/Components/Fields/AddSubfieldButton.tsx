import React from 'react';
import { Subfield } from './Subfield';

export default function AddSubfieldButton(props: {
	subfieldsState: [
		Subfield[],
		React.Dispatch<React.SetStateAction<Subfield[]>>
	];
}) {
	const [subfields, setSubfields] = props.subfieldsState;

	return (
		<div>
			<button
				onClick={() =>
					setSubfields([
						...subfields,
						new Subfield({
							type: 'TEXT',
							body: 'No BOddy LOl',
							heading: 'no heading eiteher llol',
						}),
					])
				}
			>
				Add SF
			</button>
		</div>
	);
}
