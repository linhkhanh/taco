import React from 'react';
import Button from '../components/Button';

class FormFindTaco extends React.Component {
    render() {
        return (
            <React.Fragment>
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" id="recipe_slug" placeholder="enter recipe_slug" onChange={this.props.handleChange} required />
                    </div>
                    <Button className="btn btn-primary" id="shells" name="Shell" searchTaco={this.props.searchTaco} />
                    <Button className="btn btn-info" id='mixins' name="Mix-in" searchTaco={this.props.searchTaco} />
                    <Button className="btn btn-warning" id='base_layers' name='Base-layer' searchTaco={this.props.searchTaco} />
                    <Button className="btn btn-success" id='seasonings' name='Seasoning' searchTaco={this.props.searchTaco} />
                    <Button className="btn btn-dark" id='condiments' name='Condiment' searchTaco={this.props.searchTaco} />
                </form>
            </React.Fragment>
        )
    }
  }
export default FormFindTaco;