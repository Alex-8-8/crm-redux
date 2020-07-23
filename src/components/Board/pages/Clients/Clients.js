import React from 'react';
import '../../../../App.css';
// import ClientsTableRow from './tableRow/ClientsTableRow';
// import FormNewClient from './formNewClient/FormNewClient';
// import state from '../../../../state/dataTest';
// import { addClient } from '../../../../state/dataTest';

const Clients = () => {

  return (
    <div className="wrap-board" >
      {/** <FormNewClient 
          appState={this.state.appState} 
          addClient={this.state.addClient} 
          infoToPopup={this.props.tableInfo} 
          isOpen={this.state.isOpen} 
          onClose={(e) => this.setState({ isOpen: false })}
        /> */}
      {/* edit block */}

      <div className="row">
        <div className="title-wrap">
          <h3 className="title">Clients</h3>
          {/* <h5 className="subtitle">Main parameters and sales</h5> */}
        </div>

        <div className="edit-block">
          <button
            type="button"
            className="button violet add-order"
            /** onClick={e => this.setState({ isOpen: true })} */
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 9.14286H9.14286V16H6.85714V9.14286H0V6.85714H6.85714V0H9.14286V6.85714H16V9.14286Z" fill="white" />
            </svg>
            New client
          </button>
        </div>
      </div>

      {/* table */}
      <div className="clients-table" >
        <div className="row-head">
          <div className="row-table">
            <div className="col-name">ID</div>
            <div className="col-name">№</div>
            <div className="col-name">Name</div>
            <div className="col-name">Company</div>
            <div className="col-name">E-mail</div>
            <div className="col-name">Skype</div>
            <div className="col-name">Telegram</div>
            <div className="col-name">WhatsApp</div>
            <div className="col-name">Tel</div>
          </div>
        </div>

        <div className="row-body">
          {/**
            this.state.appState.Clients.map((item, index) => {

              return (
                <ClientsTableRow
                  key={index}
                  id={item.id}
                  number={item.number}
                  name={item.name}
                  company={item.company}
                  mail={item.mail}
                  skype={item.skype}
                  telegram={item.telegram}
                  whatsapp={item.whatsapp}
                  phone={item.phone}
                />
              );
            }) */
          }
        </div>
      </div>

    </div>

  );
};

export default Clients;
