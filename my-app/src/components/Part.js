import React from 'react';
import ReactMarkdown from 'react-markdown';
class Part extends React.Component {
    render() {
        return (
            <div>
                <h3 className="text-center">{this.props.title}: {this.props.data.slug}</h3>
       
                <ReactMarkdown source={this.props.data.recipe} />
            </div>
        )
    }
  }
export default Part;