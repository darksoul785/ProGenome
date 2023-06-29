import React, { Component } from 'react';
import { AiFillExclamationCircle } from "react-icons/ai"
import { FaExternalLinkAlt } from "react-icons/fa"
import { ThreeDots } from 'react-loading-icons';
import { render } from 'react-dom';
import CompareChart from '../../src';

class Protein extends Component {
    constructor(props) {
      super(props);
      this.state = {
        // results: { 'type': String, 'data': Array },
        results: { 
          'ncbiResults': {
            'amount': Number,
            'data': Array,
            'type': String
          },
          'swissResults': {
            'amount': Number,
            'data': Array,
            'type': String
          }
        },
        // results: {'ncbiResults': {}, 'swissResults': {}},
        isLoading: false,
        showSideA: true,
        showSideB: true
      };
    }
    urlParams = new URLSearchParams(window.location.search);
    pIdValue = this.urlParams.get('id') ?? this.urlParams.get('pId');
    termValue = this.urlParams.get('term') ?? this.urlParams.get('sId');
  
    componentDidMount() {
      this.fetchData();
    }
  
    fetchData() {
      this.setState({ isLoading: true });
      const idParam = this.urlParams.get('id') ?? this.urlParams.get('pId');
      const termParam = this.urlParams.get('term') ?? this.urlParams.get('sId');
      const endpoint = termParam.split(" ").length > 1 ? '/protein' : '/proteinByIds';
      fetch(endpoint === '/protein' ? `/protein?id=${idParam}&term=${termParam}` : `/proteinByIds?pId=${idParam}&sId=${termParam}`)
        .then(response => response.json())
        .then(data => {
          this.setState({
            results: { 'ncbi': data.ncbiResults, 'swiss': data.swissResults },
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
      const { results } = this.state;
      const ncbiResults = results?.ncbi?.data ?? [];

      if (ncbiResults.length < 0) {
        return (
        <div className='w-1/2 float-left m-3/5 p-8 overflow-auto bg-[#FFF] text-[#d53535] m-0'>
            <center>
              <AiFillExclamationCircle size={60}/>
              <h1 className="text-4xl p-2">Please try again</h1>
              <p className="text-2xl pb-40 text-black">
                There were some issues while trying to load your results. Please try loading the page again.
              </p>
            </center>
          </div>
        )
      }

      return (
        <div className='w-1/2 float-left m-3/5 overflow-auto bg-[#FFF] m-0'>
          <h1 className="flex justify-center p-3">
            NCBI
          </h1>
          <hr/>
          <div className="mt-5">
            { /** Swissprot ID */}
            <div className="p-2 flex items-center">
              <div className="w-2/6 p-2 text-lg bg-gray-200 ml-2 rounded-lg">
                <span><center><b>Identifier</b></center></span>
              </div>
              <div className="w-4/6 p-2 text-lg bg-gray-100 ml-2 rounded-lg ">
                <span className="break-words">{ ncbiResults[0] }</span>
              </div>
            </div>
            { /** Swissprot name */}
            <div className="p-2 flex items-center">
              <div className="w-2/6 p-2 text-lg bg-gray-200 ml-2 rounded-lg ">
                <span><center><b>Scientific Name</b></center></span>
              </div>
              <div className="w-4/6 p-2 text-lg bg-gray-100 ml-2 rounded-lg ">
                <span className="break-words">{ ncbiResults[1] }</span>
              </div>
            </div>
            { /** Swissprot description */}
            <div className="p-2 flex">
              <div className="w-2/6 p-2 text-lg bg-gray-200 ml-2 rounded-lg ">
                <span><center><b>Description</b></center></span>
              </div>
              <div className="w-4/6 p-2 text-lg bg-gray-100 ml-2 rounded-lg ">
                {
                  String(ncbiResults[3]).split(';').map((value, key) => (
                    // (String(value).replace("~", ""))
                    (!value.includes("##Evidence"))
                    ?
                      value ? <li className="break-words">{ value }</li> : ''
                    : ""
                  ))
                }
              </div>
            </div>
            { /** Swissprot name */}
            <span className="ml-5 text-lg"><b>Complete Sequence</b></span>
            <div className="p-2 flex">
              <div className="w-full p-3 text-md bg-gray-100 ml-2 mr-3 rounded-lg ">
                <span className="break-words font-mono">{ ncbiResults[4] }</span>
              </div>
            </div>
            { /** Visit */ }
            <div className="p-2 w-full flex items-center">
              <a href={ "https://www.ncbi.nlm.nih.gov/nuccore/" + ncbiResults[0] } 
                className="w-1/2 p-2 text-lg text-white hover:text-white bg-[#20558a] hover:bg-[#163c63] rounded-lg inline-flex justify-center">
                <FaExternalLinkAlt size="25" className="pr-3" /> See the source material
              </a>
            </div>
            { /** Info end */}
          </div>
        </div>
      )
    }

    sideB() {
      const { results } = this.state;
      const swissResults = results?.swiss?.data ?? [];

      if (swissResults.length < 0) {
        return (
        <div className='w-1/2 float-left m-3/5 p-8 overflow-auto bg-[#FFF] text-[#d53535] m-0'>
            <center>
              <AiFillExclamationCircle size={60}/>
              <h1 className="text-4xl p-2">Please try again</h1>
              <p className="text-2xl pb-40 text-black">
                There were some issues while trying to load your results. Please try loading the page again.
              </p>
            </center>
          </div>
        )
      }

      return (
        <div className='w-1/2 float-left m-3/5 overflow-auto bg-[#FFF] m-0'>
          <h1 className="flex justify-center p-3">
            SwissProt
          </h1>
          <hr/>
          <div className="mt-5">
            { /** Swissprot ID */}
            <div className="p-2 flex items-center">
              <div className="w-2/6 p-2 text-lg bg-gray-200 ml-2 rounded-lg">
                <span><center><b>Identifier</b></center></span>
              </div>
              <div className="w-4/6 p-2 text-lg bg-gray-100 ml-2 rounded-lg ">
                <span className="break-words">{ swissResults[0] }</span>
              </div>
            </div>
            { /** Swissprot name */}
            <div className="p-2 flex items-center">
              <div className="w-2/6 p-2 text-lg bg-gray-200 ml-2 rounded-lg ">
                <span><center><b>Scientific Name</b></center></span>
              </div>
              <div className="w-4/6 p-2 text-lg bg-gray-100 ml-2 rounded-lg ">
                <span className="break-words">{ swissResults[1] }</span>
              </div>
            </div>
            { /** Swissprot description */}
            <div className="p-2 flex">
              <div className="w-2/6 p-2 text-lg bg-gray-200 ml-2 rounded-lg ">
                <span><center><b>Description</b></center></span>
              </div>
              <div className="w-4/6 p-2 text-lg bg-gray-100 ml-2 rounded-lg ">
                {
                  String(swissResults[2]).split(';').map((value, key) => (
                    value ? <li className="break-words">{ value }</li> : ''
                  ))
                }
              </div>
            </div>
            { /** Swissprot Translation */}
            {/* <span className="ml-5 text-lg"><b>Translation</b></span>
            <div className="p-2 flex">
              <div className="w-full p-3 text-md bg-gray-100 ml-2 mr-3 rounded-lg ">
                <span className="break-words font-mono">{ swissResults[3] }</span>
              </div>
            </div> */}
            { /** Swissprot Features */}
            {/* <span className="ml-5 text-lg"><b>Features</b></span>
            <div className="p-2 flex">
              <div className="w-full p-3 text-md bg-gray-100 ml-2 mr-3 rounded-lg ">
                <span className="break-words font-mono">{ swissResults[4] }</span>
              </div>
            </div> */}
            { /** Swissprot sequence */}
            <span className="ml-5 text-lg"><b>Complete Sequence</b></span>
            <div className="p-2 flex">
              <div className="w-full p-3 text-md bg-gray-100 ml-2 mr-3 rounded-lg ">
                <span className="break-words font-mono">{ swissResults[3] }</span>
              </div>
            </div>
            { /** Visit */ }
            <div className="p-2 w-full flex items-center">
              <a href={ "https://swissmodel.expasy.org/repository/uniprot/" + swissResults[0] } 
                className="w-1/2 p-2 text-lg text-white hover:text-white bg-[#EC1820] hover:bg-[#cc141a] rounded-lg inline-flex justify-center">
                <FaExternalLinkAlt size="25" className="pr-3" /> See the source material
              </a>
            </div>
            { /** Info end */}
          </div>
        </div>
      )
    }

    render() {
      const { showSideA, showSideB, isLoading, pIdValue, termValue, results } = this.state;
      const ncbiResults = results?.ncbi?.data ?? [];
      const swissResults = results?.swiss?.data ?? [];

      console.log(ncbiResults[0])

      return (
        <div className="w-full overflow-y-auto pt-16 bg-slate-600 pb-5">
            <div className=" p-10">
              <h1 className="text-4xl text-white">
                {
                  isLoading
                  ? "Loading..."
                  : "Comparison between " + ncbiResults[0] + " and " + swissResults[0]
                }
              </h1>
              <hr/>
              <div className="mt-2 mb-2">
                <button className="pt-3 pl-6 pr-6 pb-3 m-2 text-xl text-white bg-[#3c4d64] hover:bg-[#2d3845] rounded-full"
                  onClick={this.toggleSideA}> NCBI
                </button>
                <button className="pt-3 pl-6 pr-6 pb-3 m-2 text-xl text-white bg-[#3c4d64] hover:bg-[#2d3845] rounded-full"
                  onClick={this.toggleSideB}> SwissProt
                </button>
              </div>
              { 
                isLoading 
                ?
                  <center>
                    <ThreeDots strokeOpacity={.125} speed={.75} className="p-10" />
                  </center>
                : 
                  <div className="w-full h-full border-opacity-70 divide-x-2 divide-gray-500 p-10">
                    { showSideA && this.sideA() }
                    { showSideB && this.sideB() }
                  </div>
              }
            </div>
        </div>
      )
    }
}

export default Protein;