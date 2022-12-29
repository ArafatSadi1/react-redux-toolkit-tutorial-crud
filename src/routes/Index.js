import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddBook from "../feature/AddBook";
import BookView from "../feature/BookView";
import EditBook from "../feature/EditBook";
import Navbar from "../layout/Navbar";
import Error from "../pages/Error";
import Home from "../pages/Home";

const Index = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/show-books" element={<BookView />} />
          <Route exact path="/edit-book" element={<EditBook />} />
          <Route exact path="/add-book" element={<AddBook />} />
          <Route exact path="*" element={<Error />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default Index;
