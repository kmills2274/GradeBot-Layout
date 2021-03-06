import React from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};


const contactinfo = [
  {
    icon: 'fas fa-map-marker-alt',
    primary: 'Last Vegas, 120 Graphic Street, US',
    second: 'Califorinia, 88 Design Street, US'
  },
  {
    icon: 'fas fa-phone',
    primary: '(100) 3434 55666',
    second: '(20) 323 434 1323'
  },
  {
    icon: 'fas fa-envelope',
    primary: 'info@geniuscourse.com',
    second: 'mail@mail.com'
  }

];


const contactinfoList = contactinfo.map((item) =>
  <div className="contact-address-details" key={item.icon}>
    <div className="address-icon relative-position text-center float-left">
      <i className={item.icon} />
    </div>
    <div className="address-details ul-li-block">
      <ul>
        <li>
          <span>Primary: </span>{item.primary}
        </li>
        <li>
          <span>Second: </span>{item.second}
        </li>
      </ul>
    </div>
  </div>
);



export class ContactArea extends React.Component {
  
  render() {
    
    return (
      <section
        id="contact-area"
        className="contact-area-section backgroud-style"
      >
        <div className="container">
          <div className="contact-area-content">
            <div className="row">
              <div className="col-md-6">
                <div className="contact-left-content ">
                  <div className="section-title  mb45 headline text-left">
                    <span className="subtitle ml42  text-uppercase">
                      CONTACT US
                    </span>
                    <h2>
                      <span>Get in Touch</span>
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet ipsum
                      dolor sit amet, consectetuer adipiscing elit.
                    </p>
                  </div>
                  <div className="contact-address">
                    {contactinfoList}
                  </div>
                </div>
                <div className="genius-btn mt60 gradient-bg text-center text-uppercase ul-li-block bold-font ">
                  <a href="#">
                    Contact Us <i className="fas fa-caret-right" />
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div id="contact-map" className="contact-map-section">
                  <div id="google-map">
                    <Map
                      google={this.props.google}
                      zoom={14}
                      style={mapStyles}
                      initialCenter={{ lat: 47.444, lng: -122.176 }}
                    >
                      <Marker position={{ lat: 47.440, lng: -122.175 }} />
                    </Map>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC1vKxER7KD_3cih5p6n8921PRgzh1-nbA'
})(ContactArea);