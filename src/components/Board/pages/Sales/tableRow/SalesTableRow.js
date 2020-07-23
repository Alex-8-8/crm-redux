import React from 'react';
import '../../../../../App.css';

export const SalesTableRow = ({
  number,
  order,
  remove,
  edit,
  sales,
}) => {
  const test = () => {
    console.log(sales);
  }

  // const testAddBtn = () => {
  //   console.log(sales)
  // }

  return (
    <div className="row-table" /* onDoubleClick={order.openModal} **/>
      <div className="col-value id">{order.id}</div>
      <div className="col-value">{number}</div>
      <div className="col-value">{order.project_name}</div>
      <div className="col-value">{order.type_work}</div>
      <div className="col-value">{order.commentary}</div>
      <div className="col-value">{order.client}</div>
      <div className="col-value">{order.source}</div>
      <div className="col-value">{order.date_start}</div>
      <div className="col-value">{order.date_finish}</div>
      <div className="col-value">{order.payment}</div>
      <div className="col-value">{order.paid}</div>
      <div className="col-value">{order.cost}</div>
      <div className="col-value">{order.status}</div>
      <button
        type="button"
        onClick={() => edit(order.id)
        }
        className="updateButton"
      >
        <i className="fas fa-sync-alt" />
      </button>
      <button
        type="button"
        onClick={() => {
          remove(order.id);
          test();
        }}
        className="removeButton"
      >
        <i className="fa fa-trash" aria-hidden="true" />
      </button>
    </div>

  );
}