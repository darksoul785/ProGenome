import React, { Component, Fragment } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { ThreeDots } from 'react-loading-icons';
import Modal from './Modal.js';
import axios from 'axios';
//import { DataGrid } from '@mui/x-data-grid';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      isLoading: false,
      showModal: false,
      matches: null
    };
  }

  urlParams = new URLSearchParams(window.location.search);
  proteinValue = this.urlParams.get('protein');

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    this.setState({ isLoading: true });
    fetch(`/search?protein=${this.proteinValue}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ results: data.results });
        this.setState({ isLoading: false });
      })
      .catch(error => console.log(error));
  }

checkData = (result) => {
  const id = result.substring(0, result.indexOf(' '));
  const term = result.substring(result.indexOf(' ') + 1);
  axios
    .get(`http://localhost:5000/protein?id=${id}&term=${term}`)
    .then((response) => { 
      console.log(term);
      return response;
    })
    .then(response => {
      console.log(response.data.results.amount);
      const amount = response.data.results.amount;
      if (amount > 1) {
        this.setState({ showModal: true, matches: response.data.results });
      } else {
        const proteinTerm = response.data.data[0]; // Assuming data is an array of terms
        const ncbiId = result.substring(0, result.indexOf(' '));
        window.location.href = `/protein?id=${ncbiId}&term=${proteinTerm}`;
      }
    })
    .catch(error => {
      console.log(error);
    });
};

  handleCloseModal = () => {
    this.setState({ showModal: false, matches: null });
  }

  render() {
    const { results, isLoading } = this.state;
    let ncbiId, term;

    return (
        <div className="w-screen h-full overflow-y-auto ">
        <Fragment>
            <div className="bg-slate-600 grid grid-flow-col-dense pl-20 pr-20">
                <form className="items-center grid grid-flow-col p-5 pl-20 pr-20" action="/search">
                    <div className="relative items-center">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <AiOutlineSearch size={22} className="text-[#ababab]" />
                        </div>
                        <input
                            type="text"
                            id="simple-search"
                            name="protein"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full
                                        focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 
                                        dark:border-gray-600 dark:placeholder-gray-400 dark:text-white text-base 
                                        dark:focus:ring-blue-500 dark:focus:border-blue-500 font-montserrat font-thin"
                            placeholder="What are you looking for today?"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="p-3 pl-8 pr-8 ml-2 text-sm font-medium text-[#FFF] rounded-full 
                                  hover:bg-[#44AF58] focus:ring-4 focus:outline-none focus:ring-[#FFF] 
                                  dark:bg-white hover:border-[#44AF58] hover:text-white border-gray-100"
                        >
                        Search
                    </button>
                </form>
            </div>
            <div className="w-screen h-full bg-slate-700 items-center p-3">
              <h1>Results for "{ this.proteinValue }"</h1>
              {
                results.map((result, index) => (
                  <form key={index}>
                    <button
                      className="text-white"
                      type="button"
                      onClick={() => this.checkData(result)}
                      value={result}
                    >
                      {ncbiId = result.substring(0, result.indexOf(' '))}
                    </button>
                    {term = result.substring(result.indexOf(' ') + 1)}
                    <input type="text" name="id" value={ncbiId} hidden />
                    <input type="text" name="term" value={term} />
                  </form>
                ))
              }
              <center className='pt-5'>
                { isLoading ? <ThreeDots strokeOpacity={.125} speed={.75} /> : null }
              </center>

              {/* <button className='btn bg-blue-300' onClick = { () => this.setState({ showModal: true }) } > */}
            </div>
        <Modal isVisible = { this.state.showModal } onClose = { this.handleCloseModal } matches = { this.state.matches } />
        </ Fragment>
      </div>
    );
  }
}

export default Search;
