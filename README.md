## Synopsis

A React Component for an upload button which allows for custom styling. 

## Code Example

Download from NPM `npm install react-upload-button-v2 --save`

Then include the component into your react like so:
```javascript
import React from 'react';
import { render } from 'react-dom';
import UploadButton from 'react-upload-button-v2';
import UploadButtonStyles from 'react-upload-button-v2/build/styles.css';
// or import UploadButtonStyles from 'react-upload-button-v2/component/styles.scss';

function handleChange(input) {
  console.log(`Uploaded File Changed: ${input.value}`);
}

render(
  <UploadButton
    style={{ width: '10em' }}
    className="button"
    onChange={handleChange}
  >
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

http://stackoverflow.com/questions/7358781/tapping-on-label-in-mobile-safari

Simple upload buttons have headaching IOS bugs.

## License

MIT