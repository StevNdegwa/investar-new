import React from "react";
import PropTypes from "prop-types";
import {MdSearch} from "react-icons/md";

import {Form} from "./styles";

export default function SearchBar({onSubmit, onChange, searchValue}){
  
  return (<Form onSubmit={onSubmit}>
    <div className="search">
      <div className="icon"><MdSearch/></div>
      <input type="search" placeholder="Search" value={searchValue} onChange={onChange}/>
    </div>
  </Form>);
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired
}