import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import '../../../../App.css';
import {
  handleLoadSales,
  removeOrderCreator,
} from '../../../../redux/actionCreators';
import { SalesTableRow } from './tableRow/SalesTableRow';
import{ FormNewOrder } from './FormNewOrder/FormNewOrder';

const Sales = ({
  sales,
  isSalesLoaded,
  isSalesLoading,
  loadSales,
  removeOrder,
}) => {
  const [isFormOpen, setFormOpen] = useState(false);
  const [currentId, setCurrentId] = useState('');
  const [editingRow, setEditingRow] = useState(null);
  const [isOrderUpdated, setOrderUpdated] = useState(false);

  useEffect(() => {
    loadSales();
  }, []);

  const openForm = () => {
    setFormOpen(true);
  };

  const closeForm = () => {
    setFormOpen(false);
    setOrderUpdated(false);
  };

  const handleEdit = (id) => {
    // const remainder = sales.filter((order) => {
    //   if (order.id === id) {
    //     return order;
    //   }
    // });
    console.log(id);

    setEditingRow(sales[id]);
    setFormOpen(true);
    setOrderUpdated(true);
    setCurrentId((id + 1));
    // this.setState({ editRow: remainder[0], isOpen: true, updateOrder: true, currentId: (id + 1) });
}

  const testAdd = () => {
    console.log(sales);
  }

  return (
    <div className="wrap-board">
      {/* edit block */}
      {isFormOpen && (
        <FormNewOrder
          sales={sales}
          currentId={currentId}
          edit={editingRow}
          isUpdated={isOrderUpdated}
          isOpen={isFormOpen}
          onClose={closeForm}
        />
      ) }

      <div className="row" >
        <div className="title-wrap">
          <h3 className="title">Sales</h3>

        </div>

        <div className="edit-block">
          <button 
            type="button" 
            className="button violet add-order"
            onClick={() => {
              openForm();
              testAdd();
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 9.14286H9.14286V16H6.85714V9.14286H0V6.85714H6.85714V0H9.14286V6.85714H16V9.14286Z" fill="white" />
            </svg>
            New order
          </button>
        </div>
      </div>

      {/* table */}
      <div className="sales-table" >
        <div className="row-head">
          <div className="row-table">
            <div className="col-name">ID</div>
            <div className="col-name">№</div>
            <div className="col-name">Project name</div>
            <div className="col-name">Type of work</div>
            <div className="col-name">Commentary</div>
            <div className="col-name">Client</div>
            <div className="col-name">Source</div>
            <div className="col-name">Date start</div>
            <div className="col-name">Date finish</div>
            <div className="col-name">Payment</div>
            <div className="col-name">Paid</div>
            <div className="col-name">Cost</div>
            <div className="col-name">Status</div>
          </div>
        </div>

        <div className="row-body">
          {
            sales.map((item, index) => {
              return (
                <SalesTableRow
                  key={item.id}
                  number={index + 1}
                  order={item}
                  /* updateOrder={this.state.updateOrder} **/
                  /* openModal={(e) => this.setState({ isOpen: true, updateOrder: true })} **/
                  remove={removeOrder}
                  edit={handleEdit}
                  sales={sales}
                />
              );
            })
          }

        </div>
      </div>

    </div>

  );
};

const mapStateToProps = state => ({
  sales: state.mainReducer.sales,
  isSalesLoaded: state.mainReducer.isSalesLoaded,
  isSalesLoading: state.mainReducer.isSalesLoading,
});

const mapDispatchToProps = dispatch => ({
  loadSales: () => dispatch(handleLoadSales()),
  removeOrder: id => dispatch(removeOrderCreator(id)),
});

const Enhanced = connect(mapStateToProps, mapDispatchToProps)(Sales);

export { Enhanced as Sales };
