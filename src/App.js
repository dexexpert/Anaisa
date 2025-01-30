import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./Pages/Home";
import ProgressPage from "./Pages/Progress";
import NotFoundPage from "./Pages/404";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const NUM_ROWS = 50; // Number of rows
const SQUARES_PER_ROW = 40; // Maximum number of squares per row

const App = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    // Create an array of rows, each containing a random number of squares
    const initialRows = Array.from({ length: NUM_ROWS }, (_, rowIndex) => {
      return {
        id: rowIndex,
        squares: Array.from(
          { length: SQUARES_PER_ROW }, // Ensure we don't get too few squares
          (_, id) => ({
            id,
            isVisible: Math.random() > 0.55, // Random initial state
          })
        ),
      };
    });

    setRows(initialRows);

    // Set up a timer to update visibility randomly
    const interval = setInterval(() => {
      setRows((prevRows) =>
        prevRows.map((row) => ({
          ...row,
          squares: row.squares.map((square) => ({
            ...square,
            isVisible: Math.random() > 0.55, // Randomly toggle visibility
          })),
        }))
      );
    }, 1000); // Adjust blinking speed

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div className="relative">
      <ToastContainer />{" "}
      <div
        className="z-0 background overflow-hidden bg-no-repeat bg-fixed h-screen"
        style={{ backgroundImage: "url('/assets/img/5.jpg')", backgroundSize: '100% 100%'}}
      >
        {/* <div className="squares-container">
          {rows.map((row) => (
            <div key={row.id} className="square-row">
              {row.squares.map((square) => (
                <div
                  key={square.id}
                  className={`square ${square.isVisible ? "visible" : ""}`}
                ></div>
              ))}
            </div>
          ))}
        </div> */}
      </div>
      <div className="mainContainer flex px-[15px] py-[25px] lg:px-6 lg:py-12 gap-6 flex-col items-center backdrop-blur-sm z-100">
        <Header />
        <Router>
          <Routes>
            {/* Define the route for the homepage */}
            <Route path="/" element={<HomePage />} />

            {/* Define the route for the deposit page with dynamic depositID */}
            <Route path="/deposit/:depositID" element={<ProgressPage />} />
            {/* 404 Page: This will match any route that doesn't match above */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </div>
  );
};

export default App;
