/*!

=========================================================
* Argon Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
// core components
import Header from "components/Headers/Header.jsx";
import axios from "axios"
export default function Icon(props) {
  const [invite,setInvite]=React.useState([])
  const [pers,setPers]=React.useState([])
  const [update,setUpdate]=React.useState(true)
  React.useEffect(()=>{
    axios.get('http://192.168.87.237:9586/invite')
    .then((response)=>{
        setInvite(response.data.filter(i=>{
            return i.idUser === JSON.parse(sessionStorage.getItem('user')).id && i.status === 'pending'
        }))
    }).catch(()=>{})
    // axios.get('http://192.168.87.237:9586/all?id='+JSON.parse(sessionStorage.getItem('user')).id)
    // .then((response)=>{
    //   console.log(response.data)
    //     setPers(response.data)
    // }).catch(()=>{})
  },[])
  const onClick=(id)=>{
    axios.get('http://192.168.87.237:9586/invite/accept?idInvitation='+id)
    .then((response)=>{
        console.log(response)
        setUpdate(!update)
    }).catch(()=>{})
  }
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className=" mt--7" fluid>
          {/* Table */}
          <Row>
            {invite.map((p,index)=>{
              return(  <div className=" col">
              <Card className=" shadow" onClick={()=>{onClick(p.id)}}>
                <CardHeader className=" bg-transparent">
                  <h3 className=" mb-0">{p.idSuper}</h3>
                </CardHeader>
                <CardBody>
                  <Row className=" icon-examples">
                    <Col lg="3" md="6">
                
                        <button
                          className=" btn-icon-clipboard"
                          id="tooltip982655500"
                          type="button"
                        >
                          <div>
                            <i className=" ni ni-active-40" />
                            <span>{p.idSuper}</span>
                          </div>
                        </button>
                
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </div>)
            })}
            </Row>
          
        </Container>
      </>
    );
  }


