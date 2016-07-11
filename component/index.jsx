'use strict';

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './style.scss';

class UploadButton extends React.Component {
	onChange() {
		this.props.onChange(this.input);
	}

	render() {
		return (
			<div className="upload-button">
				<label style={this.props.styles} className={this.props.className}>
					<input className="upload-button-file" ref={(ref) => this.input = ref} onChange={this.onChange.bind(this)} type="file" />	
					{this.props.children}
				</label>
				{/* http://stackoverflow.com/questions/22752116/react-label-element */}
            </div>
		);
	}
}

UploadButton.propTypes = {
	onChange: React.PropTypes.func.isRequired,
	className: React.PropTypes.string,
    children: React.PropTypes.element.isRequired,
    styles: React.PropTypes.object
};

export default withStyles(s)(UploadButton);

