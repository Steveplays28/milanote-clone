import React from 'react';

export type ColorMode = 'HEX' | 'RGB' | 'HSV' | 'CMYK';

export class ColorSubfield {
	type: 'COLOR';
	color: string;
	colorMode: ColorMode;
	constructor(color: string, colorMode: ColorMode) {
		this.color = color;
		this.colorMode = colorMode;
		this.type = 'COLOR';
	}
}

export default function Color() {
	return <div>Color subfield placeholder</div>;
}
