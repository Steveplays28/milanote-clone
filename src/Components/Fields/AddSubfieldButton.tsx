import React from 'react';
import { SubfieldStateType } from './Field';
import { Subfield } from './Subfield';

const AddSubfieldButton = React.forwardRef(function (
	props: {
		subfieldsState: SubfieldStateType;
		ref: React.MutableRefObject<null>;
	},
	ref: React.ForwardedRef<null>
) {
	const [subfields, setSubfields] = props.subfieldsState;

	return (
		<div>
			<button
				onClick={() => {
					setSubfields([
						...subfields,
						new Subfield({
							type: 'TEXT',
							body: 'No BOddy LOl',
							heading: 'no heading eiteher llol',
							key: subfields.length,
							ref: props.ref,
						}),
					]);
					console.log(subfields);
				}}
			>
				Add SF
			</button>
		</div>
	);
});
AddSubfieldButton.displayName = 'AddSubfieldButton';
export default AddSubfieldButton;
