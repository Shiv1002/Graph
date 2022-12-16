import logo from './logo.svg';
import { useState, useEffect } from 'react'
import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import './App.css';

function App() {

  const initValue = { easy: 0, medium: 0, hard: 0 }
  const [level, setLevel] = useState(initValue)
  const [graphLevel, setGraph] = useState(initValue)

  const reset = () => {
    setLevel(initValue)
    setGraph(initValue)

    document.getElementById('warning').className = "text-warning"

  }
  const handleLevel = (e) => {
    let x = e.target.value
    if (x > 100 || x < 0) {
      console.log(e.target)
      document.getElementById('warning').className = "text-danger"
      return
    }
    setLevel({ ...level, [e.target.name]: e.target.value })
  }


  const labels = ["Easy", "Medium", "Hard"];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Levels",
        base: 0,
        backgroundColor: "azure",
        borderColor: "black",
        borderWidth: 3,
        data: [graphLevel.easy, graphLevel.medium, graphLevel.hard],
      },
    ],
  };
  const options = {
    scales: {
      y: {
        beginsAtZero: true,
        suggestedMax: 100,
      }
    }
  }
  return (
    <>
      <div className="App">
        <form className='row g-2 p-2'>
          <input type="number" className='form-control form-control-xl' name="easy" value={level.easy} onChange={handleLevel} placeholder="Easy" />
          <input type="number" className='form-control form-control-sm' name="medium" value={level.medium} onChange={handleLevel} placeholder="Medium" />
          <input type="number" className='form-control form-control-sm' name="hard" value={level.hard} onChange={handleLevel} placeholder="Hard" />
          <label id='warning' className='text-warning'><strong>Add value in range 0-100</strong></label>

        </form>
 
        <button className='btn btn-primary  me-3' onClick={() => {
          setGraph(level)
          console.log(level)
        }}>Refresh</button>
        <button className='btn btn-secondary ' onClick={() => reset()}>Reset</button>
        <div className="chart-container" >
          <Bar data={data} options={options}></Bar>
        </div>
      </div>

    </>

  );
}

export default App;
