import React from 'react';

import SearchForm from './components/SearchForm'
import PatientTable from './components/PatientTable'

class Manage extends React.Component{
  render(){
    return (
      <div>
        <SearchForm />
        <h2>患者列表</h2>
        <PatientTable />
      </div>
    )
  }
}

export default Manage; 