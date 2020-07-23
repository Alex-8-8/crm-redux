import React from 'react';
import '../../../../App.css';
// import UsersTableRow from './tableRow/UsersTableRow';
// import FormNewUser from './formNewUser/FormNewUser';
// import state from '../../../../state/dataTest';

const Users = () => {
  return (
    <div className="wrap-board">
      {/** <FormNewUser
        appState={this.state.appState}
        infoToPopup={this.props.tableInfo}
        isOpen={this.state.isOpen}
        onClose={(e) => this.setState({ isOpen: false })}
      /> */}
      {/* edit block */}
      <div className="row">
        <div className="title-wrap">
          <h3 className="title">Users</h3>
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
            New user
          </button>
        </div>
      </div>

      {/* table */}
      <div className="users-table">
        <div className="row-head">
          <div className="row-table">
            <div className="col-name">ID</div>
            <div className="col-name">Login</div>
            <div className="col-name">Name</div>
            <div className="col-name">Role</div>
            <div className="col-name">Team</div>
          </div>
        </div>

        <div className="row-body">
          {/**
                    this.state.appState.Users.map((item, index) => {
                        return <UsersTableRow
                            key={index}
                            id={item.id}
                            login={item.login}
                            name={item.name}
                            role={item.role}
                            team={item.team}
                        />
                    })
                */}
        </div>
      </div>

    </div>

  );
};

export default Users;
