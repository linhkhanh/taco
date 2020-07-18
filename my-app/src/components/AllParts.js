import React from 'react';
import Part from '../components/Part';

class AllParts extends React.Component {
    render() {
        return (
            <div>
                <h2>Random Taco</h2>
                <Part title="Shell" data={this.props.data.shell} />
                <Part title="Mixin" data={this.props.data.mixin} />
                <Part title="Seasoning" data={this.props.data.seasoning} />
                <Part title="Base layer" data={this.props.data.base_layer} />
                <Part title="Condiment" data={this.props.data.condiment} />
            </div>
        )
    }
  }
export default AllParts;