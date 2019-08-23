import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faMoneyBill, faPlusCircle } from '@fortawesome/free-solid-svg-icons';


class Header extends React.Component {
  render() {
    return (
        <div id="content">
            <nav className="navbar">
                <div className= "container-fluid d-flex justify-content-between mb-4">
                    <button type="button" id="sidebarCollapse" className="btn btn-danger">
                        <FontAwesomeIcon icon={faBars} />
                    </button>

                    <div>
                        <label>InstaPlus</label>
                    </div>
                    
                    <div className="hom-logo">
                        <FontAwesomeIcon icon={faHome} />
                    </div>
                </div>
                
                <div className="container-fluid d-flex justify-content-around text-center">
                    <div className="dolar p-2">
                        <FontAwesomeIcon icon={faMoneyBill} />
                        <p>125 USD</p>
                        <FontAwesomeIcon icon={faPlusCircle} className="plus-btn" />
                    </div>
                    
                    <div>
                        <p>Karam_hakeem</p>
                        <button className="btn Membership-btn px-5">ترقية العضوية</button>
                    </div>
                </div>
            </nav>
        </div>
    )
  }
}

export default Header;
