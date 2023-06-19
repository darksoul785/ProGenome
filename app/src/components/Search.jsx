import React, { Component } from 'react';
import { AiOutlineSearch } from 'react-icons/ai'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    };
  }

  componentDidMount() {
    const fetchData = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const inputValue = urlParams.get('input');
      const response = await fetch(`/search?input=${inputValue}`);
      const data = await response.json();
      this.setState({ searchValue: data.value });
    };

    fetchData();
  }

  render() {
    const { searchValue } = this.state;

    return (
        <div className="w-screen h-full">

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
                        className="p-3 pl-8 pr-8 ml-2 text-sm font-medium text-[#3961AB] rounded-full 
                                 hover:bg-[#44AF58] focus:ring-4 focus:outline-none focus:ring-[#3961AB] 
                                 dark:bg-white hover:border-white hover:text-white"
                        >
                        Search
                    </button>
                </form>
           </div>
            <div className="w-screen h-full bg-slate-700 items-center p-3">
                Results for "{ searchValue }"
                <div>
                    ------------------------------------------------
                </div>
            </div>
      </div>
    );
  }
}

export default Search;
