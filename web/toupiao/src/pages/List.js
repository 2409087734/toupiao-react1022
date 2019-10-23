import React, { Component } from 'react'
import axios from "axios"
export default class List extends Component {
    state ={list:[]}
    componentDidMount(){
        axios.get("/list").then(({data})=>{
            this.setState({list:data})
            console.log(data)
        })
    }
    render() {  
        let {list}=this.state
        return (
            <div className="quan"> 
              {
                list.map((item,index)=><div key={index} className="lquan">
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
