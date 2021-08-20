import React, { useState, useEffect } from 'react';
import BillCollection from './components/BillCollection';
import BillsCast from './components/BillsCast';

export default function App() {
  
  const [billData, setBillData] = useState([])
  const API = "http://localhost:8002/bills"
  
  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(data => setBillData(data))
  }, [])

  let onClickHandler = (id) => {
    setBillData(billData.map(bill => bill.id === id ? {...bill, isWorking: true} : bill ))
  }
  let dismissHandler = (id) =>{
    setBillData(billData.map(bill => bill.id === id ? {...bill, isHidden: true} : bill ))
  }
  return (
    <div>
      <BillsCast billData={billData} setBillData={setBillData}  />
      <BillCollection billData={billData} onClickHandler={onClickHandler} dismissHandler={dismissHandler} />
    </div>
  );
}
