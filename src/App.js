import './App.css';
import Input from './components/input';
import { useState, useEffect } from 'react';

function App() {

  // const inputDefault = {
  //   query: "react",
  //   qLength: 300,
  // }

  const [query, setQuery] = useState("react");

  // const inputQuery = function(event) {
  //   console.log(event.target.value)
  // }

  useEffect(() => {
    console.log(query)
  }, [query])
  
  return (
    <div className="App">
      {/* <Input data={inputDefault} /> */}
      {/* <Input query={inputDefault.query} qlength={inputDefault.qLength}/> */}
      {/* <input  onChange={inputQuery}/> */}
      <input value={query}  onChange={(e)=> setQuery(e.target.value)}/>
    </div>
  );
}

export default App;
