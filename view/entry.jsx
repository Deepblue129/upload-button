'use strict';

import React from 'react';
import { render } from 'react-dom';
import UploadButton from './../component/index.jsx';

function handleChange(input) 
{
	console.log('Uploaded File Changed: ' + input.value);
}

render(
	<UploadButton styles={{width: '10em'}} className="btn smple b-gry7 whte txtc" onChange={handleChange.bind(null)}>
		<p className="whte">Upload</p>
	</UploadButton>,
    document.getElementById('entry')
);
