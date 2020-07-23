import React from 'react';
import '../../../../App.css';
// import DashBoardGrafik from "./DashBoardGrafik/DashBoardGrafik";
// import DashBoardBlock from "./DashBoardGrafik/DashBoardBlock";

const Dashboard = () => {
  return (
    <div className="wrap-board">

      <div className="row">
        <div className="title-wrap">
          <h3 className="title">Dashboard</h3>
          <h5 className="subtitle">Main parameters and sales</h5>
        </div>

        <div className="edit-block">
          <button type="button" className="button transparent">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.6667 5.00004L15 8.33338M15.3452 3.67855L16.3215 4.65487C16.9724 5.30574 16.9724 6.36101 16.3215 7.01189L6.66668 16.6667H3.33334V13.3334L12.9882 3.67855C13.639 3.02768 14.6943 3.02768 15.3452 3.67855Z" stroke="#6F52ED" strokeWidth="2" strokeLinecap="square" />
            </svg>
            Manage Dashboard
          </button>
          <button type="button" className="button violet">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 9.14286H9.14286V16H6.85714V9.14286H0V6.85714H6.85714V0H9.14286V6.85714H16V9.14286Z" fill="white" />
            </svg>
            Create new dashboard
          </button>
        </div>
      </div>

      <div className="row-grid-4">

        {/* {
                this.props.appState.DashBoardInfo.map((item, index) => {
                    return <DashBoardBlock
                        key={index}
                        title={item.title}
                        number={item.number}
                    />
                })
            } */}

      </div>

      <div className="row-grid-2">
        <div className="row-grid-2__block">
          <div className="chartHead">

            <div className="chartTitle">
              Sources of sales
            </div>
            <div className="chartLegend">
              <div className="violet-label">
                <span className="violet-circle" />
                Applied
              </div>
              <div className="orange-label">
                <span className="orange-circle" />
                Left
              </div>
            </div>

          </div>
          <div className="chartBody">

            <div className="chartRow">
              <span className="chartRow-value">25</span>
              <p className="chartRow-area" />
            </div>
            <div className="chartRow">
              <span className="chartRow-value">20</span>
              <p className="chartRow-area" />
            </div>
            <div className="chartRow">
              <span className="chartRow-value">15</span>
              <p className="chartRow-area" />
            </div>
            <div className="chartRow">
              <span className="chartRow-value">10</span>
              <p className="chartRow-area" />
            </div>
            <div className="chartRow">
              <span className="chartRow-value">5</span>
              <p className="chartRow-area" />
            </div>
            <div className="chartRow">

              <p className="chartRow-area" />
            </div>

            <div className="chartRow">
              <span className="chartRow-value" />


              <div className="chartRow-area">

                {/* {
                              this.props.appState.GraphikTest.map((item, index) => {
                                  return <DashBoardGrafik
                                      key={index}
                                      mounth={item.mounth}
                                      applied={item.applied}
                                      left={item.left}
                                  />
                              })
                          } */}

              </div>
            </div>
          </div>
        </div>
        <div className="row-grid-2__block">
          <div className="chartHead">

            <div className="chartTitle">
              Sales amounts by source
            </div>
            <div className="chartLegend">
              <div className="violet-label">
                <span className="violet-circle" />
                Applied
              </div>
              <div className="orange-label">
                <span className="orange-circle" />
                Left
              </div>
            </div>

          </div>

          <div className="chartBody">

            <div className="chartRow">
              <span className="chartRow-value">25</span>
              <p className="chartRow-area" />
            </div>
            <div className="chartRow">
              <span className="chartRow-value">20</span>
              <p className="chartRow-area" />
            </div>
            <div className="chartRow">
              <span className="chartRow-value">15</span>
              <p className="chartRow-area" />
            </div>
            <div className="chartRow">
              <span className="chartRow-value">10</span>
              <p className="chartRow-area" />
            </div>
            <div className="chartRow">
              <span className="chartRow-value">5</span>
              <p className="chartRow-area" />
            </div>
            <div className="chartRow">

              <p className="chartRow-area" />
            </div>

            <div className="chartRow">
              <span className="chartRow-value" />
              <div className="chartRow-area">
                <div className="chartRow-area">

                  {/* {
                                this.props.appState.GraphikTest2.map((item, index) => {
                                    return <DashBoardGrafik
                                        key={index}
                                        mounth={item.mounth}
                                        applied={item.applied}
                                        left={item.left}
                                    />
                                })
                            } */}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
