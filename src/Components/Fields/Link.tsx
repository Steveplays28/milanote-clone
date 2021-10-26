import React from 'react';

export class LinkSubfied {
	type: 'LINK';
	URL: string;
	constructor(URL: string) {
		this.URL = URL;
		this.type = 'LINK';
	}
}

export default function Link() {
	return <div>Link subfield placeholder</div>;
}
