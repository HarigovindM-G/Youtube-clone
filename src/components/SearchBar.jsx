import React from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () =>{

  const [searchTerm,setSearchTerm]=useState("")
  const navigate = useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault()

    if(searchTerm){
      navigate(`search/${searchTerm}`)

      setSearchTerm('')
    }

  }
  
  return  (
  <Paper
    component="form"
    onSubmit={handleSubmit}
    sx={{
      borderRadius: 15,
      border: "1px solid #e3e3e3",
      pl: 2,
      rm: { sm: 5 },
      boxShadow: "none",
    }}
  >
    <input
      className="searchbar"
      type="text"
      value={searchTerm}
      placeholder="Search..."
      onChange={() => {}}
      style={{ border: "none", outline: "none" }}
      onChange={(e)=>setSearchTerm(e.target.value)} 
    />
    <IconButton type="sumbit" sx={{ p: "10px", color: "red" }}>
      <Search />
    </IconButton>
  </Paper>
)};

export default SearchBar;
