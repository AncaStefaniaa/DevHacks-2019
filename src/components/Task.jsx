import React from 'react'
// reactstrap components
import {
    Badge,
    Card,
    CardHeader,
    CardFooter,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
    Pagination,
    PaginationItem,
    PaginationLink,
    Progress,
    Table,
    Container,
    Row,
    UncontrolledTooltip
  } from "reactstrap";
  // core components
  import Header from "components/Headers/Header.jsx";
export default function TableSupervised(props){
    const [len, setLen] = React.useState(0)
React.useEffect(()=>{
    setLen(0);
},[])
const onClick = ()=>{setLen(props.project.projects.length - len);console.log(props.project.projects.length - len)}
return(
    <>
 <tr style={{backgroundColor:"green"}} onClick={onClick}>
                <th scope="row" >
                  <Media className="align-items-center" o>
                    <a
                      className="avatar rounded-circle mr-3"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        src={"data:image/png;base64,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"}
                      />
                    </a>
                    <Media>
                      <span className="mb-0 text-sm">
                          {props.project.name}
                      </span>
                    </Media>
                  </Media>
                </th>
                <td>{props.project.description}</td>
                <td>
                  <Badge color="" className="badge-dot mr-4">
                    <i className="bg-warning" />
                    {props.project.done?"Completed":"Pending"}
                  </Badge>
                </td>
                <td>
                 
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <span className="mr-2">{props.project.completion}%</span>
                    <div>
                      <Progress
                        max="100"
                        value={props.project.completion}
                        barClassName="bg-warning"
                      />
                    </div>
                  </div>
                </td>
                <td className="text-right">

                </td>
              </tr>
              {
                  props.project.projects.slice(0,len).map(task=>{
                      return(<tr style={{backgroundColor:"black"}}>
                      <th scope="row" >
                        <Media className="align-items-center" o>
                          <a
                            className="avatar rounded-circle mr-3"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              src={"data:image/jpeg;base64,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"}
                            />
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">
                                {task.name}
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>{props.project.description}</td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-warning" />
                          {task.done?"Completed":"Pending"}
                        </Badge>
                      </td>
                      <td>
                       
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">{props.project.description}</span>
                          <div>
                   
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
      
                      </td>
                    </tr>)
                  })
              }
    </>
)
}