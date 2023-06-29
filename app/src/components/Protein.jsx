import React, { Component } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { ThreeDots } from 'react-loading-icons';
import { render } from 'react-dom';
import CompareChart from '../../src';

class Protein extends Component {
    constructor(props) {
      super(props);
      this.state = {
        // ncbiResults: { 'type': String, 'amount': Number, 'data': Array },
        // swissResults: { 'type': String, 'amount': Number, 'data': Array },
        results: { 'ncbiResults': {}, 'swissResults': {} },
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
      const idParam = this.urlParams.get('id') ?? this.urlParams.get('pId');
      const termParam = this.urlParams.get('term') ?? this.urlParams.get('sId');
      const endpoint = termParam.split(" ").length > 1 ? '/protein' : '/proteinByIds';
      console.log(endpoint);
      fetch(
          endpoint === '/protein' 
          ? `/protein?id=${idParam}&term=${termParam}` 
          : `/proteinByIds?pId=${idParam}&sId=${termParam}`
        )
        .then(response => response.json())
        .then(data => {
          const results = {
            ncbiResults: {
              data: data.ncbiResults
            },
            swissResults: {
              data: data.swissResults
            }
          };

          this.setState({ 
            results: results,
            isLoading: false
          });
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
        <div className="mt-5">
          <div className='w-1/2 float-left m-3/5 bg-[#FFF] m-0'>
            <h1 className="flex justify-center p-3">
              NCBI
            </h1>
            <hr/>
          </div>
        </div>
      )
    }

    sideB() {
      const { results, isLoading } = this.state;

      console.log(results);

      return (
        <div className='w-1/2 float-left m-3/5 overflow-auto bg-[#FFF] m-0'>
          <h1 className="flex justify-center p-3">
            SwissProt
          </h1>
          <hr/>
          <div className="mt-5">
            {/* { console.log(results['data']['swissResults']['data'][0]) }

            <div className="p-2 flex items-center">
              <div className="w-2/6 p-2 text-xl bg-gray-200 ml-2 rounded-lg">
                <span><center><b>Identifier</b></center></span>
              </div>
              <div className="w-4/6 p-2 text-xl bg-gray-100 ml-2 rounded-lg ">
                <span class="break-words">{ results['swissResults']['data'][0] }</span>
              </div>
            </div> */}
            {/* <div className="p-2 flex items-center">
              <div className="w-2/6 p-2 text-xl bg-gray-200 ml-2 rounded-lg ">
                <span><center><b>Scientific Name</b></center></span>
              </div>
              <div className="w-4/6 p-2 text-xl bg-gray-100 ml-2 rounded-lg ">
                <span class="break-words">{ results['swissResults']['data'][1] }</span>
              </div>
            </div>
            <div className="p-2 flex">
              <div className="w-2/6 p-2 text-xl bg-gray-200 ml-2 rounded-lg ">
                <span><center><b>Description</b></center></span>
              </div>
              <div className="w-4/6 p-2 text-xl bg-gray-100 ml-2 rounded-lg ">
                {
                  String(results['swissResults']['data'][2]).split(';').map((value, key) => (
                    value ? <li class="break-words">{ value }</li> : ''
                  ))
                }
              </div>
            </div> */}
            {
              // results['data'][0]
              // Object.entries(results['data']).map((value, key) => (
              //   <div className="p-3 text-xl bg-gray-200 m-3 rounded-lg ">
              //     <span class="break-words">{ value.slice(1) }</span>
              //   </div>
              // ))
            }
            {/* <div style={{width:"75%", marginLeft:"auto", marginRight:"auto"}}>
            <CompareChart 
              ID   = { results['data'][0] }
              name = { results['data'][1] }
            />
            </div> */}
          </div>
        </div>
      )
    }

    render() {
      const { showSideA, showSideB, isLoading } = this.state;

      return (
        <div className="w-full h-screen overflow-y-auto pt-16 bg-slate-600">
            <div className=" p-10">
              <h1 className="text-4xl text-white">{ this.termValue }</h1>
              <hr/>
              <div class="mt-2 mb-2">
                <button className="pt-3 pl-6 pr-6 pb-3 m-2 text-xl text-white bg-[#3c4d64] hover:bg-[#2d3845] rounded-full"
                  onClick={this.toggleSideA}> NCBI
                </button>
                <button className="pt-3 pl-6 pr-6 pb-3 m-2 text-xl text-white bg-[#3c4d64] hover:bg-[#2d3845] rounded-full"
                  onClick={this.toggleSideB}> SwissProt
                </button>
              </div>
              <div className="w-full h-full border-opacity-70 divide-x-2 divide-gray-500">
                    { showSideA && this.sideA() }
                    { 
                      isLoading 
                      ?
                        <center>
                          <ThreeDots color="#FF0000" secondaryColor="#00FF00" strokeOpacity={.125} speed={.75} className="p-10" />
                        </center>
                      : 
                        showSideB && this.sideB() 
                    }
              </div>
            </div>
        </div>
      )
    }
}

export default Protein;