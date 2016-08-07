import React, { PropTypes } from 'react';

// eslint-disable-next-line react/prop-types
class UploadButton extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string,
    children: PropTypes.element.isRequired,
    style: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    this.props.onChange(this.input);
  }

  render() {
    return (
      <div className="upload-button">
        <label style={{ ...this.props.style }} className={this.props.className}>
          <input
            className="upload-button-file"
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

export default UploadButton;

