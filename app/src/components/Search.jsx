import React, { Component } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { ThreeDots } from 'react-loading-icons';
//import { DataGrid } from '@mui/x-data-grid';
//import axios from 'axios';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      isLoading: false,
    };
  }
  urlParams = new URLSearchParams(window.location.search);
  inputValue = this.urlParams.get('input');

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    this.setState({ isLoading: true });
    fetch(`/search?input=${this.inputValue}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ results: data.results });
        this.setState({ isLoading: false });
      })
      .catch(error => console.log(error));
    
  }

  render() {
    const { results, isLoading } = this.state;
    let pId, term;

    return (
        <div className="w-screen h-full overflow-y-auto ">
            <div className="bg-slate-600 grid grid-flow-col-dense pl-20 pr-20">
                <form className="items-center grid grid-flow-col p-5 pl-20 pr-20" action="/search">
                    <div className="relative items-center">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <AiOutlineSearch size={22} className="text-[#ababab]" />
                        </div>
                        <input
                            type="text"
                            id="simple-search"
                            name="input"
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
              <h1>Results for "{ this.inputValue }"</h1>
                {results.map((result) => (
                  <form action="/protein">
                    <button>{ pId = result.substring(0, result.indexOf(' ')) }</button>
                    { term = result.substring(result.indexOf(' ') + 1) }
                    <input type="text" name="id" value={ pId } hidden/>
                    <input type="text" name="term" value={ term } />
                  </form>
                ))}
                <center className='pt-5'>
                  { isLoading ? <ThreeDots strokeOpacity={.125} speed={.75} /> : null }
                </center>

            </div>
      </div>
    );
  }
}

export default Search;
