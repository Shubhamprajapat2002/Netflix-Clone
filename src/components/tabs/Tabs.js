import React from 'react';
import {tabLabels} from './Constant';
import { Link } from 'react-router-dom';
import './Tabs.css';

const Tabs = ({activeTabName, onClickTab}) => {
    const{CANCEL_AT_ANY_TIME,PICK_YOUR_PRICE,WATCH_ANYWHERE}= tabLabels;

    const renderTabTitle = (tabTitle, isActive, icon ,id) =>(
        <div onClick={()=> onClickTab(tabTitle)} id={id} className={`tab-item ${isActive && "tab-border"}`}>
                <i className={icon} ></i>
                <p>{tabTitle}</p>

        </div>
    )
  return (
    <>
        <section className="tabs">
            <div className="container">
                {renderTabTitle(CANCEL_AT_ANY_TIME, activeTabName === CANCEL_AT_ANY_TIME, "fas fa-door-open fa-3x", "tab-1")}
                {renderTabTitle(WATCH_ANYWHERE, activeTabName === WATCH_ANYWHERE, "fas fa-tablet-alt fa-3x", "tab-2")}
                {renderTabTitle(PICK_YOUR_PRICE, activeTabName === PICK_YOUR_PRICE, "fas fa-tags fa-3x", "tab-3")}
            </div>
        </section>
        {activeTabName === CANCEL_AT_ANY_TIME && (
            <section className="tab-content">
                <div className="container">
                    <div id='tab-1-content' className={`tab-content-item ${activeTabName === CANCEL_AT_ANY_TIME     && "show"} `}>
                        <div className="tab-1-content-inner">
                            <div>
                                <p className="text-lg">
                                    If you decide NetFlix is not for you - no problem. No commitment. Cancel online anytime
                                </p>
                                <Link to="/netflix-show" className='btn btn-lg' >
                                    Watch free for 30 Days
                                </Link>
                            </div>
                            <img src="https://i.ibb.co/J2xDJV7/tab-content-1.png" alt="" />
                        </div>

                    </div>
                </div>
            </section>
        )}
        {activeTabName === WATCH_ANYWHERE && (
            <section className="tab-content">
                <div className="container">
                <div id='tab-2-content' className={`tab-content-item ${activeTabName === WATCH_ANYWHERE     && "show"} `}>
                    <div className="tab-2-content-top">
                    <p className="text-lg">
                                 Watch TV shows and movies anytime, anywhere - personalized for you.
                                </p>
                                <Link to="/netflix-show" className='btn btn-lg' >
                                    Watch free for 30 Days
                                </Link>
                    </div>
                    <div className="tab-2-content-bottom">
                        <div>
                        <img src="https://i.ibb.co/DpdN7Gn/tab-content-2-1.png" alt="" />
                        <p className="text-md">Watch on your TV</p>
                        <p className="text-dark">
                            Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray player and more.
                        </p>
                        </div>
                        <div>
                            <img src="https://i.ibb.co/R3r1SPX/tab-content-2-2.png" alt="" />
                            <p className="text-md">
                                Watch instantly or download for later
                            </p>
                            <p className="text-dark">
                                Availbale on phone and tablet, wherever you go.
                            </p>
                        </div>
                        <div>
                        <img src="https://i.ibb.co/gDhnwWn/tab-content-2-3.png" alt="" />
                            <p className="text-md">
                              Use any computer
                            </p>
                            <p className="text-dark">
                               watch right on Netflix.com
                            </p>

                        </div>
                    </div>
                </div>
                </div>
            </section>
        )}
        {activeTabName === PICK_YOUR_PRICE &&(
            <section className='tab-content'>
                <div className="container">
                <div id='tab-3-content' className={`tab-content-item ${activeTabName === PICK_YOUR_PRICE    && "show"} `}> </div>
                <div className="text-center">
                    <p className="text-lg">
                        choose one plan and watch everthing on Netflix
                    </p>
                    <Link to="/netflix-show" className='btn btn-lg' >
                        Watch free for 30 Days
                    </Link>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                                <th>Basic</th>
                                <th>Standard</th>
                                <th>Premium</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Monthly price after free month end </td>
                            <td>$6.99</td>
                            <td>$11.99</td>
                            <td>$15.99</td>
                        </tr>
                        <tr>
                            <td>HD Available</td>
                            <td>
                                <i className='fas fa-times' ></i>
                            </td>
                            <td>
                                <i className='fas fa-check' ></i>
                            </td>
                            <td>
                                <i className='fas fa-check' ></i>
                            </td>
                        </tr>
                        <tr>
                            <td>Ultra HD Available</td>
                            <td>
                                <i className='fas fa-times' ></i>
                            </td>
                            <td>
                                <i className='fas fa-times' ></i>
                            </td>
                            <td>
                                <i className='fas fa-check' ></i>
                            </td>
                        </tr>

                        <tr>
                            <td>Screens you can watch at the same time</td>
                            <td>
                               1
                            </td>
                            <td>
                                2
                            </td>
                            <td>
                               4
                            </td>
                        </tr>

                        <tr>
                            <td>Watch on your TV, laptop, Phone anad Tablet</td>
                            <td>
                                <i className='fas fa-check' ></i>
                            </td>
                            <td>
                                <i className='fas fa-check' ></i>
                            </td>
                            <td>
                                <i className='fas fa-check' ></i>
                            </td>
                        </tr>

                        <tr>
                            <td>Ulimate TV and Movie shows</td>
                            <td>
                                <i className='fas fa-check' ></i>
                            </td>
                            <td>
                                <i className='fas fa-check' ></i>
                            </td>
                            <td>
                                <i className='fas fa-check' ></i>
                            </td>
                        </tr>

                        <tr>
                            <td>Cancel at any time</td>
                            <td>
                                <i className='fas fa-check' ></i>
                            </td>
                            <td>
                                <i className='fas fa-check' ></i>
                            </td>
                            <td>
                                <i className='fas fa-check' ></i>
                            </td>
                        </tr>

                        <tr>
                            <td>First month Free</td>
                            <td>
                                <i className='fas fa-check' ></i>
                            </td>
                            <td>
                                <i className='fas fa-check' ></i>
                            </td>
                            <td>
                                <i className='fas fa-check' ></i>
                            </td>
                        </tr>

                    </tbody>
                </table>
                </div>
            </section>
        )}
    </>
  )
}

export default Tabs