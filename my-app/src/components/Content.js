import React from 'react';
import FormFindTaco from '../components/FormFindTaco';
import AllParts from '../components/AllParts';
import Part from '../components/Part';

class Content extends React.Component {
    render() {
        return (
            <div>
                <FormFindTaco searchTaco={this.props.searchTaco} handleChange={this.props.handleChange} />
                <button onClick={this.props.fetchData}>Fresh Taco</button>
                {this.props.data ? <AllParts data={this.props.data} /> : ''}
  
                {this.props.specificTaco ?
                    <Part title={this.props.recipe_type} data={this.props.specificTaco} /> : ''
                }
            </div>
        )
    }
  }
export default Content;