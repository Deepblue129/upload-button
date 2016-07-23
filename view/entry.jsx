import React from 'react';
import { render } from 'react-dom';
import UploadButton from './../build/Component.js';

function handleChange(input) {
  // eslint-disable-next-line no-console
  console.log(`Uploaded File Changed: ${input.value}`);
}

render(
  <UploadButton
    styles={{ width: '10em' }}
    className="btn smple b-gry7 whte txtc"
    onChange={handleChange}
  >
    <p className="whte">Upload</p>
  </UploadButton>,
  document.getElementById('entry')
);
