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
        showSideA: true,
        showSideB: true
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
      fetch(`/protein?id=${this.idValue}&term=${this.termValue}`)
        .then(response => response.json())
        .then(data => {
          this.setState({ results: data.results });
          this.setState({ isLoading: false });
        })
        .catch(error => console.log(error));
      
    }
  
    toggleSideA = () => {
      this.setState(
        prevState => ({
          showSideA: !prevState.showSideA
        })
      )
    }

    toggleSideB = () => {
      this.setState(
        prevState => ({
          showSideB: !prevState.showSideB
        })
      )
    }

    sideA() {
      return (
        <div className="">
        </div>
      )
    }

    sideB() {
      const { results, isLoading } = this.state;
      console.log(results);

      return (
        <div className="">
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

    render() {
      const { showSideA, showSideB } = this.state;

      return (
          <div className="flex flex-col p-12 pt-16">
            <h1 className="bg-[#88F]">{ this.termValue }</h1>
            <p className='bg-[#FFF000]'>equisde</p>
            <div>
              <button onClick={this.toggleSideA}>NCBI</button>
              <button onClick={this.toggleSideB}>SwissProt</button>
            </div>
            <div className="bg-[#5ED533] w-full h-full">
              <div className='h-20 w-1/2 float-left m-3/5 bg-[#b4f2fa]'>
                <h1>NCBI</h1>
                { showSideA && this.sideA() }
              </div>
              <div className='h-20 w-1/2 float-left m-3/5 bg-[#c8c8f6]'>
                <h1>SwissProt</h1>
                { showSideB && this.sideB() }
              </div>
            </div>
        </div>
      )
    }
}

export default Protein;