import React, { Component, Fragment } from 'react';
import { AiOutlineSearch, AiOutlineFrown, AiOutlineFileExclamation } from 'react-icons/ai';
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
      .catch(error => {
        console.log(error);
        this.setState({ isLoading: false });
      });
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
        window.location.href = `/protein?id=${id}&term=${term}`;
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
        <div className="w-screen h-full overflow-y-auto pt-20">
        <Fragment>
            <div className="bg-slate-600 grid grid-flow-col-dense p-14">
              <form className="flex items-center md:flex-row flex-col" action="/search">
                  <div class="relative w-full lg:w-96 lg:pr-5">
                    <select name="cars" id="cars"
                        className="bg-gray-50 border border-gray-300 text-gray-900 font-montserrat
                                          rounded-full focus:ring-blue-500 focus:border-blue-500 block
                                          w-full md:w-full sm:w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600
                                          dark:placeholder-gray-400 dark:text-white font-thin text-xl
                                          dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option selected disabled>Choose a species</option>
                      <option value="">Any species</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>
                  <div className="relative w-full">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <AiOutlineSearch size={18} className='text-[#ababab]'/>
                      </div>
                      <input type="text" id="simple-search" name="protein"
                              className="bg-gray-50 border border-gray-300 text-gray-900 font-montserrat
                                          rounded-full focus:ring-blue-500 focus:border-blue-500 block
                                          w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600
                                          dark:placeholder-gray-400 dark:text-white font-thin text-xl
                                          dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="What are you looking for today?" required />
                  </div>
                  <button type="submit" className="p-3 pl-8 pr-8 md:ml-2 text-sm text-white rounded-full focus:ring-4 
                                                    focus:outline-none focus:ring-[#3961AB] hover:border-white hover:text-white md:mt-0 mt-5 ml-0 
                                                    md:w-fit w-full bg-[#2556A4] hover:bg-[#326CC9] border text-xl
                                                    ">
                      Search
                  </button>
                </form>
            </div>
            <div className="w-screen h-full bg-slate-700 items-center p-3">
              <h1 className="text-">Results for "{ this.proteinValue }"</h1>
              <center className='pt-5'>
                { isLoading ? <ThreeDots strokeOpacity={.125} speed={.75} /> : null }
              </center>
              { results.length === 0 && !isLoading
              ? 
              <div class="w-full p-8 text-white">
                <center>
                  <AiOutlineFrown size={40} />
                  <h1 className="text-4xl p-2">No Results Found</h1>
                  <p className="text-2xl">
                    We couldn't find any results for "{ this.proteinValue }"
                  </p>
                </center>
              </div>
              : results.map((result, index) => (
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
            </div>
        <Modal isVisible = { this.state.showModal } onClose = { this.handleCloseModal } matches = { this.state.matches } />
        </ Fragment>
      </div>
    );
  }
}

export default Search;
