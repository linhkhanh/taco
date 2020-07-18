import React from 'react';
class Button extends React.Component {
    render() {
        return (
            <button type="submit" className={this.props.className} id={this.props.id} onClick={this.props.searchTaco}>{this.props.name}</button>
        )
    }
  }
export default Button;