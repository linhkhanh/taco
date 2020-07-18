import React from 'react';
import Content from './components/Content';
import './App.css';

class App extends React.Component {
  constructor(props) {
      super(props)
          this.state = {
              baseUrl: 'http://taco-randomizer.herokuapp.com/',
              url: 'http://taco-randomizer.herokuapp.com/random/?full-tack=true',
              recipe_slug: '',
              recipe_type: '',
              searchUrl: '',
              specificTaco: ''
          }
  }
  // call API
  fetchData = async () => {
      const response = await fetch(this.state.url);
      const data = await response.json();
      this.setState({
          data: data
      })
  }

  // handle Change
  handleChange = (event) => {
      this.setState({ [event.target.id]: event.target.value })
  }

  // search specific Taco
  searchTaco = (event) => {
      event.preventDefault()
      const id = event.target.id;
      const arr = id.split('');
      arr.pop();
      this.setState({
          recipe_type: arr.join(''),
          searchUrl: this.state.baseUrl + id + '/' + this.state.recipe_slug + '/'
      }, async () => {
          try {
              const response = await fetch(this.state.searchUrl);
              const data = await response.json();
              this.setState({
                  data: null,
                  specificTaco: data
              })

          } catch (err) {
              console.log(err);
          }
      })
  }

  // fetch data right page load
  componentDidMount() {
      this.fetchData()
  }

  render() {
      return (
          <Content fetchData={this.fetchData} data={this.state.data} searchTaco={this.searchTaco} handleChange={this.handleChange} recipe_type={this.state.recipe_type} specificTaco={this.state.specificTaco} />
      )
  }
}



export default App;
