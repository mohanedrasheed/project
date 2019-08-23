import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


class Sidebar extends React.Component {
  render() {
    return (
          <nav id="sidebar">

            <div id="dismiss">
                <FontAwesomeIcon icon={faArrowRight} />
            </div>
            <div className="sidebar-header text-right">
                <h3>القائمة</h3>
            </div>

            <ul className="list-unstyled components text-right">
                <li className="active">
                    <a href="#">الرئيسية</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Pages</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
            
          </nav>
    )
  }
}

export default Sidebar;
