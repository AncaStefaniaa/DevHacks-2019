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
import axios from 'axios'
// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

export default function Header(){
  const [tasks,setTasks]=React.useState([])
  const [update,setUpdate]=React.useState(["update"])
  React.useEffect(()=>{
    axios.get('http://192.168.87.237:9586/supervised/getAllTasks?id='+JSON.parse(sessionStorage.getItem('user')).id)
    .then((response)=>{
        setTasks(response.data)
        console.log(response.data)
    }).catch(()=>{})
  },[update])
  const finishTask = (task) =>{
    const headers = {
      'Content-Type': 'application/json',
    }
    axios.post(`http://192.168.87.237:9586/tasks/create`,{
      ...task, done:true
    },headers)
    .then(function(response){
      setUpdate(!update)
      
   }).catch((error) => {console.log(error)})
  
  }
    return (
      <>
        <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
          <Container fluid>
            <div className="header-body">
              {/* Card stats */}
              <Row>
              
                  {tasks.filter(task=>!task.done).slice(0,4).map(task=>{
                    return(
                      <Col lg="6" xl="3">
                      <Card onClick={()=>{finishTask(task)}} className="card-stats mb-4 mb-xl-0" style={{cursor:"pointer"}}>
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase "
                          >
                            {task.name}
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                            <i className="fas fa-chart-bar" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-success mr-2">
                          <i className="fa fa-arrow-up" /> {task.deadline.split("T")[0]}
                        </span>{" "}
                        <span className="text-nowrap">{task.description}</span>
                      </p>
                    </CardBody>
                  </Card>
                   </Col>
                    )
                  })}
               
                </Row>
            </div>
          </Container>
        </div>
      </>
    );
  
}

