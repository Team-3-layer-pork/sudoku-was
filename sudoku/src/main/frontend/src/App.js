import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";

import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import Test from "./pages/Test";
import Test2 from "./pages/Test2";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/test1" element={<Test />} />
        <Route path="/test2" element={<Test2 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
