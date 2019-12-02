
import React from 'react'
import axios from 'axios'
import {
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Form,
    FormGroup,
    InputGroupAddon,
    InputGroupText,
    Input,
    InputGroup,
    Navbar,
    Nav,
    Container,
    Media
  } from "reactstrap";
  import ReactList from 'react-list';

export default function  Forms(props){
    const [user,setUser] = React.useState(JSON.parse(sessionStorage.getItem('user')))

    const [projects,setProjects]=React.useState([])
    const [projects1,setProjects1]=React.useState([])
    const [supervised,setSupervised]=React.useState([])

    const [supervised1,setSupervised1]=React.useState([])
    const [project,setProject] = React.useState("")
    const [supervisedUser,setSupervisedUser] = React.useState("")
    const [update,setUpdate]=React.useState(true)
    const [taskdesc,setTaskdesc]= React.useState("")
    const [taskname,setTaskname]= React.useState("")
    const [projectdesc,setProjectdesc]= React.useState("")
    const [projectname,setProjectname]= React.useState("")
    const [taskdate,setTaskdate]= React.useState(new Date())
    React.useEffect(()=>{
        axios.get('http://192.168.87.237:9586/project')
        .then((response)=>{
          axios.get('http://192.168.87.237:9586/supervised/getsupervised?id='+user.id)
          .then((second)=>{
            
              setProjects(response.data)
              setSupervised(second.data)
          }).catch(()=>{})
    
           
        }).catch(()=>{})
    },[update])
    const filter = (str) =>{
        console.log(projects)
        return projects.filter(p=>p.name.toLowerCase().includes(str.toLowerCase())).slice(0,10)
      }
      const superv = (str) =>{
        console.log(projects)
        return supervised.filter(p=>p.name.toLowerCase().includes(str.toLowerCase())).slice(0,10)
      }

      const renderItem = (index, key) => {
        return <div key={key} style={{cursor:"pointer"}} onClick={()=>{setProject(projects1[index].name)}}>{projects1[index].name}</div>;
      }
      const renderItem1 = (index, key) => {
        return <div key={key} style={{cursor:"pointer"}} onClick={()=>{setSupervisedUser(supervised1[index].name)}}>{supervised1[index].name}</div>;
      }
      const headers = {
        'Content-Type': 'application/json',
      }
      const task = () =>{
          
        axios.post(`http://192.168.87.237:9586/project/taskForProject?projectId=`+projects.find(p=>p.name===project).id,{
            name:taskname,
            description:taskdesc,
            deadline:taskdate
          },headers)
          .then(function(response){
         }).catch((error) => {console.log(error)})
      }
      const task1 = () =>{
          
        axios.post(`http://192.168.87.237:9586/supervised/addProject?supervisedId=`+supervised.find(p=>p.name===supervisedUser).id,{
            name:projectname,
            description:projectdesc
          },headers)
          .then(function(response){
         }).catch((error) => {console.log(error)})
      }
    return(
        <>
        <div style={{width:"25%"}}>
        <label style={{fontWeight:"bold",marginLeft:"10%",padding:"10px"}}>Add task to project</label>
        </div>
         <form>
      
        <Input placeholder="Project" style={{borderRadius:"20px",width:"25%",padding:"5px",marginLeft:"2%",marginBottom:"5px",borderBottom:"2px solid #187bcd"}} type="text" value={project} onChange={(e)=>{setProject(e.target.value); setProjects1(filter(project))}}/>
        <Input placeholder="TaskName" style={{borderRadius:"20px",width:"25%",padding:"5px",marginLeft:"2%",marginBottom:"5px",borderBottom:"2px solid #187bcd"}} type="text"  onChange={(e)=>{setTaskname(e.target.value)}}/>
        <Input placeholder="Description" style={{borderRadius:"20px",width:"25%",padding:"5px",marginLeft:"2%",marginBottom:"5px",borderBottom:"2px solid #187bcd"}} type="text"  onChange={(e)=>{setTaskdesc(e.target.value)}}/>
        <Input placeholder="Description" style={{borderRadius:"20px",width:"25%",padding:"5px",marginLeft:"2%",marginBottom:"5px",borderBottom:"2px solid #187bcd"}} type="date"  onChange={(e)=>{setTaskdate(e.target.value)}}/>

        
        
      </form>
      <ReactList
            itemRenderer={renderItem}
            length={projects1.length}
            type='uniform'
          />
      <div style={{width:"25%"}}>
      <button   style={{backgroundColor:"#187bcd",color:"white",fontWeight:"bold",border:"none",borderRadius:"20px",marginLeft:"40%",padding:"7px 15px"}}onClick={()=>{task()}} >SUBMIT</button>
      </div>
         <form>
         <div style={{width:"25%"}}>
      <label style={{marginTop:"1%",fontWeight:"bold",marginLeft:"10%",padding:"10px"}}>Add project to supervised</label>
        </div>
        <Input placeholder="Supervised kid" style={{borderRadius:"20px",width:"25%",padding:"5px",marginLeft:"2%",marginBottom:"5px",borderBottom:"2px solid #187bcd"}} type="text" value={supervisedUser} onChange={(e)=>{setSupervisedUser(e.target.value); setSupervised1(superv(project))}}/>
        <Input placeholder="Project name" style={{borderRadius:"20px",width:"25%",padding:"5px",marginLeft:"2%",marginBottom:"5px",borderBottom:"2px solid #187bcd"}} type="text"  onChange={(e)=>{setProjectname(e.target.value)}}/>
        <Input placeholder="Description" style={{borderRadius:"20px",width:"25%",padding:"5px",marginLeft:"2%",marginBottom:"5px",borderBottom:"2px solid #187bcd"}} type="text"  onChange={(e)=>{setProjectdesc(e.target.value)}}/>


        
        
      </form>
      <ReactList
            itemRenderer={renderItem1}
            length={supervised1.length}
            type='uniform'
          />
      <div style={{width:"25%"}}>    
      <button  style={{backgroundColor:"#187bcd",color:"white",fontWeight:"bold",border:"none",borderRadius:"20px",marginLeft:"40%",padding:"7px 15px"}} onClick={()=>{task1()}} >SUBMIT</button>
      </div>
        </>
    )
}