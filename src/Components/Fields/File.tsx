import React from 'react';

export class FileSubfield {
	type: 'FILE';
	mimeType: string;
	fileExtension: string;
	fileSize: string;
	fileLocation: string;
	constructor(
		mimeType: string,
		fileExtension: string,
		fileSize: string,
		fileLocation: string
	) {
		this.mimeType = mimeType;
		this.fileExtension = fileExtension;
		this.fileSize = fileSize;
		this.fileLocation = fileLocation;
		this.type = 'FILE';
	}
}

export default function File() {
	return <div>File subfield placeholder</div>;
}
