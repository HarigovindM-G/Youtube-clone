import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => (
  <Paper
    component="form"
    onSubmit={() => {}}
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
      value=""
      placeholder="Search..."
      onChange={() => {}}
      style={{ border: "none", outline: "none" }}
    />
    <IconButton type="sumbit" sx={{ p: "10px", color: "red" }}>
      <Search />
    </IconButton>
  </Paper>
);

export default SearchBar;
