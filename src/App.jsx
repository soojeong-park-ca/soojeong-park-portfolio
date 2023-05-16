import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>{/* <Route path="/" element={<Home />}></Route> */}</Routes>
    </>
  );
}

export default App;
