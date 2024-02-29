import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

const data= 
[

    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" }

]



function App() {
  // const [data1, setSort]=useState();
  const [data2, setData2]=useState([...data]);

  const dateSort = () => {
    const sortedData = [...data].sort((a, b) => a.date.localeCompare(b.date));
    setData2(sortedData);
  };

  const viewSort = () => {
    const sortedData = [...data].sort((a, b) => a.views - b.views);
    setData2(sortedData);
  }

  


  return (
    <div className="App">
      <h1>Date and Views Table</h1>
      <button onClick={dateSort}>Sort by Date</button>
      <button onClick={viewSort}>Sort by Views</button>
      <div>
      <table>
        <thead>
          <tr>
            <td>Date</td>
            <td>Views</td>
            <td>Article</td>
          </tr>
        </thead>
        <tbody>
          {data2.map((item, index)=>
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.views}</td>
              <td>{item.article}</td>
            </tr>
          )}
        </tbody>
      </table>
      </div>

    </div>
  );
}

export default App;
