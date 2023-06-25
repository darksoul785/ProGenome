import React, { Component } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { ThreeDots } from 'react-loading-icons';
import { render } from 'react-dom';
import CompareChart from '../../src';

class Protein extends Component {
    constructor(props) {
      super(props);
      this.state = {
        results: { 'type': String, 'data': Array },
        isLoading: false,
      };
    }
    urlParams = new URLSearchParams(window.location.search);
    // idValue = this.urlParams.get('id');
    termValue = this.urlParams.get('term');
  
    componentDidMount() {
      this.fetchData();
    }
  
    fetchData() {
      this.setState({ isLoading: true });
      fetch(`/protein?term=${this.termValue}`)
        .then(response => response.json())
        .then(data => {
          this.setState({ results: data.results });
          this.setState({ isLoading: false });
        })
        .catch(error => console.log(error));
      
    }
  
    render() {
      const { results, isLoading } = this.state;
      console.log(results);
      return (
          <div className="flex flex-col p-12 pt-16">
            <h1 className="bg-[#88F]">{ this.idValue } - { this.termValue }</h1>
            <p className='bg-[#FFF000]'>equisde</p>
            {
              // results['data'][0]
              Object.entries(results['data']).map((value, key) => (
                <div className="p-3 bg-[#35c941]">
                  <span>{ value.slice(1) }</span>
                </div>
              ))
            }
            {/* <div style={{width:"75%", marginLeft:"auto", marginRight:"auto"}}>
            <CompareChart 
              ID   = { results['data'][0] }
              name = { results['data'][1] }
            />
            </div> */}
            <center className='pt-5'>
              { isLoading ? <ThreeDots strokeOpacity={.125} speed={.75} /> : null }
            </center>

        </div>
      )
    }
}

export default Protein;