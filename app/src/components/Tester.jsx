import React, { Component } from 'react';

class Tester extends Component {

  render() {
    return (
      <div className="w-screen h-20">
        <button data-drawer-target="cta-button-sidebar" data-drawer-toggle="cta-button-sidebar" aria-controls="cta-button-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
          <span className="sr-only">Open sidebar</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
          </svg>
        </button>

        <aside id="cta-button-sidebar h-20" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
          <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
              <ul className="space-y-2 font-medium">
                <li>
                    <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                      <svg aria-hidden="true" className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                      <span className="ml-3">Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                      <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                      <span className="flex-1 ml-3 whitespace-nowrap">Kanban</span>
                      <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
                    </a>
                </li>
              </ul>
              <div id="dropdown-cta" className="p-4 mt-6 rounded-lg bg-blue-50 dark:bg-blue-900" role="alert">
                <div className="flex items-center mb-3">
                    <span className="bg-orange-100 text-orange-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">Beta</span>
                    <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 inline-flex h-6 w-6 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800" data-dismiss-target="#dropdown-cta" aria-label="Close">
                          <span className="sr-only">Close</span>
                          <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                <p className="mb-3 text-sm text-blue-800 dark:text-blue-400">
                    Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a limited time in your profile.
                </p>
                <a className="text-sm text-blue-800 underline font-medium hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300" href="#">Turn new navigation off</a>
              </div>
          </div>
        </aside>

        <div className="p-4 sm:ml-64">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                </div>
                <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                </div>
                <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                </div>
              </div>
              <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                </div>
                <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                </div>
                <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                </div>
                <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                </div>
              </div>
              <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                </div>
                <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                </div>
                <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                </div>
                <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tester;
