import React, { Component, Fragment } from 'react';
import { AiOutlineSearch, AiOutlineFrown, AiOutlineDoubleRight } from 'react-icons/ai';
import { ThreeDots } from 'react-loading-icons';
import { Table, Pagination } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
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
      matches: null,
      selectedId: null,
      selectedTerm: null,
      activePage: 1,
      itemsPerPage: 50
    };
  }

  urlParams = new URLSearchParams(window.location.search);
  proteinValue = this.urlParams.get('protein');
  speciesValue = this.urlParams.get('species');
  species = ['Homo sapiens', 'Mus musculus', 'Aplysia californica', 'Octodon degus', 'Camelus dromedarius', 'Danio rerio', 'Elephant', 'Acanthochromis polyacanthus', 'Ovis aries', 'Squirrel monkey', 'Turkey', 'Cucurbitae', 'Bactrocera dorsalis', 'Galemys pyrenaicus', 'Myotis brandtii'];

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    this.setState({ isLoading: true });
    fetch(`/search?species=${this.speciesValue}&protein=${this.proteinValue}`)
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
        console.log(response.data.swissResults.amount);
        const amount = response.data.swissResults.amount;
        if (amount > 1) {
          this.setState({ showModal: true, matches: response.data.swissResults, selectedTerm: term, selectedId: id });
        } else {
          window.location.href = `/protein?id=${id}&term=${term}`;
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false, matches: null, selectedTerm: null, selectedId: null });
  }

  renderResults = () => {
    const { results, activePage, itemsPerPage } = this.state;
    let ncbiId, term;

    // Calcular los índices de inicio y fin de los resultados en la página actual
    const startIndex = (activePage - 1) * itemsPerPage;
    const endIndex = activePage * itemsPerPage;

    // Obtener los resultados para la página actual
    const resultsPerPage = results.slice(startIndex, endIndex);

    return resultsPerPage.map((result, index) => (
      <Table.Row key={index} className="hover:bg-gray-100">
        <Table.Cell>
          <p className="text-[#141833] font-bold justify-center">
            {ncbiId = result.substring(0, result.indexOf(' '))}
          </p>
        </Table.Cell>
        <Table.Cell>
          {term = result.substring(result.indexOf(' ') + 1)}
        </Table.Cell>
        <Table.Cell>
          <button className="text-[#FFF] bg-[#44AF58] font-bold p-3 rounded-full w-full flex items-center justify-center" type="button" 
            onClick={() => this.checkData(result)} value={result}>
            See more <AiOutlineDoubleRight className="pl-2" size={20} />
          </button>
        </Table.Cell>
        <input type="text" name="id" value={ncbiId} hidden />
        <input type="text" name="term" value={term} hidden />
      </Table.Row>
    ));
  };

  handlePaginationChange = (e, { activePage }) => {
    this.setState({ activePage }, () => {
      this.renderResults();
    });
  };

  render() {
    const { results, isLoading, activePage, itemsPerPage } = this.state;

    return (
        <div className="w-full h-full overflow-y-auto pt-16 bg-slate-600">
        <Fragment>
            <div className="grid grid-flow-col-dense p-10">
              <form className="flex items-center md:flex-row flex-col" action="/search">
                  <div className="relative w-full lg:w-96 lg:pr-5">
                    <select name="species" id="species"
                        className="bg-gray-50 border border-gray-300 text-gray-900 font-montserrat
                                          rounded-full focus:ring-blue-500 focus:border-blue-500 block
                                          w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                                          dark:placeholder-gray-400 dark:text-white font-thin text-xl
                                          dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option value="" defaultValue disabled>Choose a species</option>
                      <option value="">Any species</option>
                      {
                        this.species.map((species, index) => (
                          <option id={index} value={species}>{species}</option>
                        ))
                      }
                    </select>
                  </div>
                  <div className="relative w-full lg:pr-5">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <AiOutlineSearch size={4} className='text-[#ababab]'/>
                      </div>
                      <input type="text" id="simple-search" name="protein"
                              className="bg-gray-50 border border-gray-300 text-gray-900 font-montserrat
                                          rounded-full focus:ring-blue-500 focus:border-blue-500 block
                                          w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600
                                          dark:placeholder-gray-400 dark:text-white font-thin text-xl
                                          dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="What are you looking for today?" required />
                  </div>
                  <button type="submit" className="p-3 pl-8 pr-8 md:ml-2 text-white rounded-full focus:ring-4 
                                                    focus:outline-none focus:ring-[#3961AB] hover:border-white 
                                                    hover:text-white md:mt-0 mt-5 ml-0 md:w-fit w-full bg-[#2556A4] 
                                                    hover:bg-[#326CC9] border text-xl">
                      Search
                  </button>
                </form>
            </div>
            <div className="w-full h-full bg-slate-700 items-center p-3">
              <h1 className="text-4xl w-full text-center pt-5 text-white">
                { isLoading ? "You're searching" : "You searched" } for "{ this.speciesValue ? this.speciesValue + " " : "" }{ this.proteinValue }"
              </h1>
              <center className='pt-5'>
                { isLoading ? <ThreeDots strokeOpacity={.125} speed={.75} /> : null }
              </center>
              { results.length === 0 && !isLoading
              ? 
              <div className="w-full p-8 text-white">
                <center>
                  <AiOutlineFrown size={60}/>
                  <h1 className="text-4xl p-2">No Results Found</h1>
                  <p className="text-2xl pb-40">
                    We couldn't find any results for "{ this.proteinValue }".
                  </p>
                </center>
              </div>
              :
               <div className="w-full p-10 text-white">
                <Table celled className="m-5">
                  {/* Renderizar el encabezado de la tabla */}
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>ID</Table.HeaderCell>
                      <Table.HeaderCell>Term</Table.HeaderCell>
                      <Table.HeaderCell>More Information</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>

                  {/* Renderizar los resultados en la tabla */}
                  <Table.Body>
                    {this.renderResults()}
                  </Table.Body>
                  {/* Renderizar la paginación */}
                  <Table.Footer>
                    <Table.Row>
                      <Table.HeaderCell colSpan="3">
                        <Pagination
                          activePage={ activePage }
                          totalPages={ Math.ceil(results.length / itemsPerPage) }
                          onPageChange={ this.handlePaginationChange }
                        />
                      </Table.HeaderCell>
                    </Table.Row>
                  </Table.Footer>
                </Table>
              </div>
              }
            </div>
        <Modal 
          isVisible = { this.state.showModal } 
          onClose = { this.handleCloseModal } 
          matches = { this.state.matches } 
          selectedTerm = { this.state.selectedTerm } 
          selectedId = { this.state.selectedId } />
        </ Fragment>
      </div>
    );
  }
}

export default Search;
