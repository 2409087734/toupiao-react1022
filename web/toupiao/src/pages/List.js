import React, { Component } from 'react'
import axios from "axios"
import {withRouter} from 'react-router-dom'
class List extends Component {
    state ={list:[]}
    componentDidMount(){
       this.get()
    }
    get=()=>{
         axios.get("/list").then(({data})=>{
            this.setState({list:data})
            console.log(data)
        })
    }
    xiang=(id,item)=>{
        let {history}=this.props
        history.push({
            pathname:"/detail/"+id,
            name:item
        })
    }
    render() {  
        let {list}=this.state
        return (
            <div className="quan"> 
              {
                list.map((item,index)=><div key={index} className="lquan" onClick={this.xiang.bind(this,item.id,item)}>
                    <div className="list"><img src={item.icon}/></div>
                  <div className="title">
                  <h5>{item.userid}</h5>
                  <p>{item.con}</p>
                  </div>
                  <div className="data">
                    <span>{item.time}</span>

                  </div>
                </div>)  
              }
            </div>
        )
    }
}
export default withRouter(List)

