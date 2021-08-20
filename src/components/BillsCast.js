import React from 'react';
import BillCard from './BillCard';

export default function BillsCast({billData, setBillData}) {
  // Your code here
  let onClickHandler = (id) => {
    setBillData(billData.map(bill => bill.id === id ? {...bill, isWorking: false} : bill ))
  }
  return (
    <div className="ui segment inverted blue bill-cast">
      <div className="ui five column grid">
        <div className="row bill-cast-row">
        {billData.map(bill => bill.isWorking === true ? <BillCard id={bill.id} bill={bill} onClickHandler={onClickHandler} /> : "")}
        </div>
      </div>
    </div>
  );
}

