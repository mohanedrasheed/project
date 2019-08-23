import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class OurServices extends React.Component {
  render() {
    return (

            <div className="col-5 col-sm-4 col-md-2 clasOne">
                <div className="logo">
                    <FontAwesomeIcon icon={this.props.logoName} />
                </div>
                <label>{this.props.title}</label>
            </div> 
            
    )
  }
}

export default OurServices;
