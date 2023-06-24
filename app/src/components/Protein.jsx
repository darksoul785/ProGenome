import React, { Component } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { ThreeDots } from 'react-loading-icons';

class Protein extends Component {
    constructor(props) {
      super(props);
      this.state = {
        results: [],
        isLoading: false,
      };
    }
    urlParams = new URLSearchParams(window.location.search);
    idValue = this.urlParams.get('id');
    termValue = this.urlParams.get('term');
  
    componentDidMount() {
      this.fetchData();
    }
  
    fetchData() {
      this.setState({ isLoading: true });
      fetch(`/protein?id=${this.idValue}&term=${this.term}`)
        .then(response => response.json())
        .then(data => {
          this.setState({ results: data.results });
          this.setState({ isLoading: false });
        })
        .catch(error => console.log(error));
      
    }
  
    render() {
      const { results, isLoading } = this.state;
  
      return (
        <div className="w-screen h-full overflow-y-auto ">
            <h1 className="">{ this.idValue } - { this.termValue }</h1>

        </div>
      )
    }
}

export default Protein;