
import './App.css';
import { ThemeProvider } from "@mui/material";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from "./components/Header";
import theme from "./theme";
import Main from './pages/Main';
import Course from './pages/Course';
import Learn from './pages/Learn';

function App() {
  return (
    <div className='app'>
    <ThemeProvider theme={theme}>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/courses/:number" element={<Course/>} />
        <Route path="/courses/:number/:level" element={<Learn/>} />
      </Routes>
    </ThemeProvider>
    </div>
  );
}

export default App;
