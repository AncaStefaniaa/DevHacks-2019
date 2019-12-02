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
  import Task from './Task.jsx'
  // core components
  import Header from "components/Headers/Header.jsx";
export default function TableSupervised(props){
const [len, setLen] = React.useState(0)
React.useEffect(()=>{
    setLen(0);
},[])
const onClick = ()=>{setLen(props.child.projects.length - len);console.log(props.child.projects.length - len)}
    return(
        <>
        {
                <tr >
            <th scope="row">
              <Media onClick={onClick} className="align-items-center"  o>
                <a
                  className="avatar rounded-circle mr-3"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <img
                    alt="..."
                    src={require("assets/img/theme/bootstrap.jpg")}
                  />
                </a>
                <Media>
                  <span className="mb-0 text-sm">
                      {props.child.name}
                  </span>
                </Media>
              </Media>
            </th>
            <td>{props.child.password}</td>
            <td>
              <Badge color="" className="badge-dot mr-4">
                <i className="bg-warning" />
                pending
              </Badge>
            </td>
            <td>
              <div className="avatar-group">
                <a
                  className="avatar avatar-sm"
                  href="#pablo"
                  id="tooltip731399078"
                  onClick={e => e.preventDefault()}
                >
                  <img
                    alt="..."
                    className="rounded-circle"
                    src={require("assets/img/theme/team-1-800x800.jpg")}
                  />
                </a>
                <UncontrolledTooltip
                  delay={0}
                  target="tooltip731399078"
                >
                  Ryan Tompson
                </UncontrolledTooltip>
                <a
                  className="avatar avatar-sm"
                  href="#pablo"
                  id="tooltip491083084"
                  onClick={e => e.preventDefault()}
                >
                  <img
                    alt="..."
                    className="rounded-circle"
                    src={require("assets/img/theme/team-2-800x800.jpg")}
                  />
                </a>
                <UncontrolledTooltip
                  delay={0}
                  target="tooltip491083084"
                >
                  Romina Hadid
                </UncontrolledTooltip>
                <a
                  className="avatar avatar-sm"
                  href="#pablo"
                  id="tooltip528540780"
                  onClick={e => e.preventDefault()}
                >
                  <img
                    alt="..."
                    className="rounded-circle"
                    src={require("assets/img/theme/team-3-800x800.jpg")}
                  />
                </a>
                <UncontrolledTooltip
                  delay={0}
                  target="tooltip528540780"
                >
                  Alexander Smith
                </UncontrolledTooltip>
                <a
                  className="avatar avatar-sm"
                  href="#pablo"
                  id="tooltip237898869"
                  onClick={e => e.preventDefault()}
                >
                  <img
                    alt="..."
                    className="rounded-circle"
                    src={require("assets/img/theme/team-4-800x800.jpg")}
                  />
                </a>
                <UncontrolledTooltip
                  delay={0}
                  target="tooltip237898869"
                >
                  Jessica Doe
                </UncontrolledTooltip>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <span className="mr-2">60%</span>
                <div>
                  <Progress
                    max="100"
                    value="60"
                    barClassName="bg-warning"
                  />
                </div>
              </div>
            </td>
            <td className="text-right">
              <UncontrolledDropdown>
                <DropdownToggle
                  className="btn-icon-only text-light"
                  href="#pablo"
                  role="button"
                  size="sm"
                  color=""
                  onClick={e => e.preventDefault()}
                >
                  <i className="fas fa-ellipsis-v" />
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-arrow" right>
                  <DropdownItem
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Action
                  </DropdownItem>
                  <DropdownItem
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Another action
                  </DropdownItem>
                  <DropdownItem
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Something else here
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </td>
          </tr>}
         { props.child.projects.slice(0,len).map(project =>{
              return(
              <Task project={project}/>
              )
              
            })
          }
          </>
    )
}