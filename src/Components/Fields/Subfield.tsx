import React from 'react';
import { ColorMode } from './Color';

/* prettier-ignore */
type SubfieldData =
	| {
			type: 'TEXT';
			heading: string;
			body: string;
			key: number;
			ref: React.MutableRefObject<null>;
		}
	| {
			type: 'COLOR';
			color: string;
			colorMode: ColorMode;
			key: number;
			ref: React.MutableRefObject<null>;
		}
	| {
			type: 'LINK';
			URL: string;
			key: number;
			ref: React.MutableRefObject<null>;
		}
	| {
			type: 'FILE';
			mimeType: string;
			fileExtension: string;
			fileSize: string;
			fileLocation: string;
			key: number;
			ref: React.MutableRefObject<null>;
		};

export type SubfieldTypes = 'TEXT' | 'LINK' | 'COLOR' | 'FILE';

export class Subfield {
	type: SubfieldTypes;
	heading;
	body;
	color;
	colorMode;
	URL;
	mimeType;
	fileExtension;
	fileSize;
	fileLocation;
	key;
	ref;
	constructor(data: SubfieldData) {
		this.type = data.type;
		this.key = data.key;
		this.ref = data.ref;
		switch (data.type) {
			case 'TEXT':
				this.heading = data.heading;
				this.body = data.body;
				break;

			case 'COLOR':
				this.color = data.color;
				this.colorMode = data.colorMode;
				break;

			case 'LINK':
				this.URL = data.URL;
				break;

			case 'FILE':
				this.mimeType = data.mimeType;
				this.fileExtension = data.fileExtension;
				this.fileSize = data.fileSize;
				this.fileLocation = data.fileLocation;
				break;

			default:
				console.error(`Unknown Subfield Type encountered`);
				break;
		}
	}
}
