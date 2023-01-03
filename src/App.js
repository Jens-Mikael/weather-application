import React, { useState, useEffect } from 'react' 

//own components
import SearchBar from "./components/SearchBar";
import AppToolBar from "./components/AppToolBar";

//MUI components
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";

//import useStyles from "./styles";

const App = () => {
  return (
    <>
      <CssBaseline />
      <main>
        <AppToolBar />
        <Typography variant="h3" align="center" sx={{mt: "2rem", mb: "2rem"}}>
          Weather app
        </Typography>
        <SearchBar />
      </main>
    </>
  );
};
export default App;
