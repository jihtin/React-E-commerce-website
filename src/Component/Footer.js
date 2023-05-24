import React from "react";
import { CDBBtn, CDBIcon, CDBContainer } from 'cdbreact';
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";






const  Footer=()=>{

  return (
    <div className="footer" >
      <MDBFooter
        bgColor="dark " 
        className="text-center text-lg-start text-muted p-4  "
      >
        <section className="p-2" >
          <MDBContainer className="text-center text-md-start mt-2">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h2 className="text-uppercase fw-bold mb-4">
                  <MDBIcon  className="me-2  "  />
                <Link to="/"   style={{textDecoration:'none',color:'lightyellow'}}  ><p className="ic fst-italic  "  >  PLASHOE </p>  </Link>
                </h2>
                <p>
                The increasing popularity of handmade shoes in india has opened the windows to the world of style. Now you could add your sense of style in the charming handmade leather shoes India.
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Customer Service
                </h6>
                <p>
                  <a href="#!" className="text-reset">
                    Contact Us
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help & FAQs
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Payment Method
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Delivery Information
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Categories</h6>
                <p>
                  <a href="#!" className="text-reset">
                    New Fashion
                  </a>
                </p>
                <p>
                  <Link to='/men' className="text-reset">
                    Men Shoe
                  </Link>
                </p>
                <p>
                  <Link  to='/Women'  className="text-reset">
                Women Shoe
                  </Link>
                </p>
                <p>
                  <Link to='/' className="text-reset">
                  New Arrivals
                  </Link>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <MDBIcon icon="home" className="me-2" />
                  New York, NY 10012, US
                </p>
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  jithin@369.com
                </p>
                <p>
                  <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
                </p>
                <p>
                  <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer> 
          <CDBContainer className="d-flex justify-content-center " style={{gap:'10px  '}} > 
          
        <CDBBtn color="secondary">
        <CDBIcon fab icon="facebook" />
        
      </CDBBtn>
      <CDBBtn color="success">
        <CDBIcon fab icon="reddit" />

      </CDBBtn>
      <CDBBtn color="danger">
        <CDBIcon fab icon="twitter" />
    
      </CDBBtn>
      <CDBBtn color="dark">
        <CDBIcon fab icon="instagram" />
   
      </CDBBtn>
      <CDBBtn color="warning">
        <CDBIcon fab icon="google" />
    
      </CDBBtn>


      </CDBContainer>
        </section>
         
        <div className="text-center p-2" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}> 
       <div>  © 2023 Copyright:</div> 
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/"> <br></br>
              Shoe Store | Powered by Shoe Store
          </a>
        </div>
      </MDBFooter>
    </div>
  );
}

export default Footer;