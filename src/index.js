import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import OurServices from './Components/OurServices';
import $ from 'jquery';
import { faCogs, faVolumeUp, faPaste, faUser } from '@fortawesome/free-solid-svg-icons';

class App extends React.Component {

    componentDidMount = () => {
        
        $('#dismiss, .overlay').on('click', function () {
            $('#sidebar').removeClass('active');
            $('.overlay').addClass('d-none');
        });

        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').addClass('active');
            $('.overlay').removeClass('d-none');
        });
    }


    render () {
        return(  

                <div>

                    <div className="overlay d-none"></div>

                    {/*  Sidebar  */}
                    <div>
                        <Sidebar />
                    </div>

                    {/*  Header  */}
                    <div>
                        <Header />
                    </div>

                    {/* PageContent */}
                    <div className="container text-center">
                        <div className="row d-flex justify-content-around">
                            
                        <OurServices logoName = {faCogs} title = "خدماتنا" />
                        <OurServices logoName = {faVolumeUp} title = "ما الجديد" />
                        <OurServices logoName = {faPaste} title = "تقرير الطلبات" />
                        <OurServices logoName = {faUser} title = "الدعم الفني" />

                        </div>
                    </div>

                </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
