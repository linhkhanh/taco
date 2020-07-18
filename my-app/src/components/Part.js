import React from 'react';
class Part extends React.Component {
    render() {
        return (
            <div>
                <h3>{this.props.title}: {this.props.data.slug}</h3>
                <p>{this.props.data.recipe}</p>
            </div>
        )
    }
  }
export default Part;