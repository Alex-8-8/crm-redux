import React from 'react';
import { connect } from 'react-redux';
import '../../../../../App.css';
import '../../../../Login/Login.css';
import {
  addNewOrderCreator,
  removeOrderCreator,
  editOrderCreator,
} from '../../../../../redux/actionCreators';
import { Input } from './Input';
import { Select } from './Select';
import { addRow } from '../../../../../functions/functions';

class FormNewOrder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newOrder: {
        type_work: 'Front-end',
        source: 'Site',
        status: 'In progress',
        project_name: '',
        date_start: '',
        date_finish: '',
        cost: '',
        paid: '',
        commentary: '',
        client: '',
        payment: 'Sberbank',
      },
      type_work: ['Front-end', 'Back-end', 'Design'],
      source: ['Site', 'Friend', 'Client'],
      status: ['Complete', 'In progress'],
      payment: ['Sberbank', 'PrivatBank', 'Paypal'],
      error_name: '',
      error_date_start: '',
      error_date_finish: '',
      error_commentary: '',
      error_paid: '',
      error_cost: '',
      error_client: '',
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    // this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.addRowData = this.addRowData.bind(this);
    // this.updateRowData = this.updateRowData.bind(this);
  }

  validation() {
    let error_name = this.state.error_name = '';
    let error_date_start = this.state.error_date_start = '';
    let error_date_finish = this.state.error_date_finish = '';
    let error_commentary = this.state.error_commentary = '';
    let error_paid = this.state.error_paid = '';
    let error_cost = this.state.error_cost = '';
    let error_client = this.state.error_client = '';

    if (this.state.newOrder.project_name === '') {
      error_name = 'enter name project';
    }

    if (this.state.newOrder.date_start === '') {
      error_date_start = 'enter date start';
    }

    if (this.state.newOrder.date_finish === '') {
      error_date_finish = 'enter date finish';
    }

    if (this.state.newOrder.cost === '') {
      error_cost = 'enter cost';
    }

    if (this.state.newOrder.paid === '') {
      error_paid = 'enter paid';
    }

    if (this.state.newOrder.commentary === '') {
      error_commentary = 'enter commentaryary';
    }

    if (this.state.newOrder.client === '') {
      error_client = 'enter client';
    }

    if (error_name !== ''
    || error_date_start !== ''
    || error_date_finish !== ''
    || error_commentary !== ''
    || error_paid !== ''
    || error_cost !== ''
    || error_client !== '') {
      this.setState({
        error_name,
        error_date_start,
        error_date_finish,
        error_commentary,
        error_paid,
        error_cost,
        error_client,
      });

      return false;
    }

    return true;
  }

  handleInput(e) {
    const { value } = e.target;
    const { name } = e.target;

    const error_name = '';
    const error_date_start = '';
    const error_date_finish = '';
    const error_commentary = '';
    const error_paid = '';
    const error_cost = '';
    const error_client = '';

    this.setState({
      error_name,
      error_date_start,
      error_date_finish,
      error_commentary,
      error_paid,
      error_cost,
      error_client,
    });

    this.setState(
      prevState => ({
        newOrder: {
          ...prevState.newOrder,
          [name]: value,
        },
      }),
    );
  }

  addRowData() {
    const userData2 = this.state.newOrder;
    // const idRow = (this.props.sales.length).toString();
    // const numberRow = (this.props.sales.length + 1).toString();
    const idRow = (this.props.sales.length);
    const numberRow = (this.props.sales.length + 1);
    // console.log(userData2);

    userData2.number = numberRow;
    userData2.id = idRow;
    // addRow(this.props.sales, userData2);
    this.props.addNewOrder(userData2);
    this.props.onClose(false);
    this.state.newOrder = {};
  }

  updateRowData = () => {
    console.log({
      ...this.state.newOrder,
      id: this.props.edit.id,
    });

    this.props.editOrder({
      ...this.state.newOrder,
      id: this.props.edit.id,
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const isValid = this.validation();

    if (isValid && !this.props.isUpdated) {
      this.addRowData();

      this.props.onClose();

      this.setState({
        newOrder: {
          type_work: 'Front-end',
          source: 'Site',
          status: 'In progress',
          projecName: '',
          date_start: '',
          date_finish: '',
          cost: '',
          paid: '',
          commentary: '',
          client: '',
          payment: 'Sberbank',
        },
        error_name: '',
        error_date_start: '',
        error_date_finish: '',
        error_commentary: '',
        error_paid: '',
        error_cost: '',
        error_client: '',
      });
    } else if (isValid && this.props.isUpdated) {
      this.updateRowData();
      this.props.onClose();
    }
    // console.log(this.props.state.sales);
  }

  render() {
    return (
      <div className="wrap_popup">
        <div className="modalOverlay">
          <div className="login-form new-order-form">
            <button
              type="button"
              className="close-modal"
              onClick={() => this.props.onClose()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 0 329.26933 329"
                width="20px"
              >
                <path
                  d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0" 
                />
              </svg>
            </button>
  
            <h4>
              { this.props.isUpdated ? 'Update order' : 'Add new order' }
            </h4>
  
            <form onSubmit={this.handleFormSubmit}>
              <label>
                <p>Project Name</p>
                <Input
                  className={this.state.error_name && 'error-field'}
                  value={this.state.newOrder.project_name || ''}
                  onChange={this.handleInput}
                  type="text"
                  name="project_name"
                />
                <p className="new-order-error">
                  {this.state.error_name}
                </p>
              </label>
  
              <label>
                <p>Type of work</p>
                <Select
                  type="text"
                  name="type_work"
                  options={this.state.type_work}
                  value={this.state.newOrder.type_work || ''}
                  handleChange={this.handleInput}
                />
              </label>
  
              <label>
                <p>Date start</p>
                <Input
                  className={this.state.error_date_start && 'error-field'}
                  pattern="[0-9]{4}.[0-9]{2}.[0-9]{2}"
                  onChange={this.handleInput}
                  type="date"
                  name="date_start"
                />
                <p className="new-order-error">
                  {this.state.error_date_start}
                </p>
              </label>
  
              <label>
                <p>Date finish</p>
                <Input
                  className={this.state.error_date_finish && 'error-field'}
                  pattern="[0-9]{4}.[0-9]{2}.[0-9]{2}"
                  value={this.state.newOrder.finish}
                  onChange={this.handleInput}
                  type="date"
                  name="date_finish"
                />
                <p className="new-order-error">
                  {this.state.error_date_finish}
                </p>
              </label>
  
              <label className="commentLabel">
                <p>Commentary</p>
                <Input
                  className={this.state.error_commentary && 'error-field'}
                  value={this.state.newOrder.commentary || ''}
                  onChange={this.handleInput}
                  name="commentary"
                />
                <p className="new-order-error">
                  {this.state.error_commentary}
                </p>
              </label>
  
              <label>
                <p>Paid</p>
                <Input
                  className={this.state.error_paid && 'error-field'}
                  value={this.state.newOrder.paid || ''}
                  onChange={this.handleInput}
                  type="number"
                  name="paid"
                />
                <p className="new-order-error">
                  {this.state.error_paid}
                </p>
              </label>
  
              <label>
                <p>Cost</p>
                <Input
                  className={this.state.error_cost && 'error-field'}
                  value={this.state.newOrder.cost || ''}
                  onChange={this.handleInput}
                  type="number"
                  name="cost"
                />
                <p className="new-order-error">
                  {this.state.error_cost}
                </p>
              </label>
  
              <label>
                <p>Source</p>
                <Select
                  type="text"
                  name="source"
                  options={this.state.source}
                  value={this.state.newOrder.source || ''}
                  handleChange={this.handleInput}
                />
              </label>
  
              <label>
                <p>Status</p>
                <Select
                  type="text"
                  name="status"
                  options={this.state.status}
                  value={this.state.newOrder.status || ''}
                  handleChange={this.handleInput}
                />
              </label>
              <label>
                <p>Client</p>
                <Input
                  className={this.state.error_client && 'error-field'}
                  value={this.state.newOrder.client || ''}
                  onChange={this.handleInput}
                  name="client"
                />
                <p className="new-order-error">
                  {this.state.error_client}
                </p>
              </label>
              <label>
                <p>Payment</p>
                <Select
                  type="text"
                  name="payment"
                  options={this.state.payment}
                  value={this.state.newOrder.payment || ''}
                  handleChange={this.handleInput}
                />
              </label>
              <label>
                <p></p>
                <input
                  className="login-button"
                  type="submit"
                  value={this.props.isUpdated ? 'Update order' : 'Add order'}
                />
              </label>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  salesArr: state.mainReducer.sales,
  state: state.mainReducer,
});

const mapDispatchToProps = dispatch => ({
  addNewOrder: newOrder => dispatch(addNewOrderCreator(newOrder)),
  removeOrder: id => dispatch(removeOrderCreator(id)),
  editOrder: order => dispatch(editOrderCreator(order)),
});

const Enhanced = connect(mapStateToProps, mapDispatchToProps)(FormNewOrder);

export { Enhanced as FormNewOrder };
