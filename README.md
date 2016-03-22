## Synopsis

A React Component for an upload button which allows for custom styling. 

## Code Example

Download from NPM `npm install react-upload-button-v2 --save`

Then include the component into your react like so:
```javascript
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import UploadButton from 'component/index.jsx';

function handleChange(input) 
{
	console.log('Uploaded File Changed: ' + input.value);
}

ReactDOM.render(
	<UploadButton styles={{width: '10em'}} className="btn" onChange={handleChange.bind(null)}>
		<p>Upload</p>
	</UploadButton>,
    document.getElementById('entry')
);

```

## Get Started

Download from NPM `npm install react-upload-button-v2 --save`

## Motivation 

http://stackoverflow.com/questions/21842274/cross-browser-custom-styling-for-file-upload-button

It is notoriously annoying to work with a simple upload button on the web.

## License

MIT