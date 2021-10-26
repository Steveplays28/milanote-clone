import { ColorMode } from './Color';

/* prettier-ignore */
type SubfieldData =
	| {
			type: 'TEXT';
			heading: string;
			body: string;
		}
	| { type: 'COLOR'; color: string; colorMode: ColorMode }
	| { type: 'LINK'; URL: string }
	| {
			type: 'FILE';
			mimeType: string;
			fileExtension: string;
			fileSize: string;
			fileLocation: string;
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
	constructor(data: SubfieldData) {
		this.type = data.type;
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
