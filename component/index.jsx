import React from 'react';

// eslint-disable-next-line react/prop-types
class UploadButton extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    this.props.onChange(this.input);
  }

  render() {
    const uploadButtonFileStyles = {
      width: 0.1,
      height: 0.1,
      opacity: 0,
      overflow: 'hidden',
      position: 'absolute',
      zIndex: -100000000,
    };

    return (
      <div className="upload-button">
        <label style={this.props.styles} className={this.props.className}>
          <input
            className="upload-button-file"
            style={uploadButtonFileStyles}
            ref={(ref) => { this.input = ref; }}
            onChange={this.onChange}
            type="file"
          />
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
  styles: React.PropTypes.object,
};

export default UploadButton;

