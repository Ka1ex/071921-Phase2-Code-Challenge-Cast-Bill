import React from 'react';
import BillCard from './BillCard'
export default function BillCollection({billData, onClickHandler}) {
  // Your code here

  return (
    <div className="ui four column grid">
      <div className="row">
        {billData.map(bill => <BillCard id={bill.id} bill={bill} onClickHandler={onClickHandler} />)}
      </div>
    </div>
  );
}
