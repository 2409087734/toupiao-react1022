import React, { Component } from 'react';
import axios from "axios"
class Detail extends Component {
    state={detail:[],id:0,list:{},data:[],flag:false}
    componentDidMount(){
      this.get()
    }
    get=()=>{
        let {match:{params:{id}}}=this.props
        console.log(this.props.location.name,"123")
        this.setState({list:this.props.location.name})
        console.log(this.state.list)
        axios.post("/detail",{id}).then(({data})=>{
            this.setState({detail:data})
            console.log(data)
        })
    }
    tongji=()=>{
        let {history}=this.props
        history.push("/tongji")
    }
    jia=(id)=>{
        axios.post("/tou",{id}).then(({data})=>{
            console.log(111)
            this.setState({data})
            this.get()
        })

       
    }
   quan=(e)=>{
        this.setState({flag:e.target.checked});
       
    }
    render() {
        let {list,detail,flag}=this.state
        return (
            <div>
                 <header className='header'>
                    <span>&lt;</span>
                    <span>投票详情</span>
                    <span className="color" onClick={this.tongji.bind()}>统计</span>
               </header>
               <div className="piao">
                    {
                        list.con&&<div className="a1">
                          <img src={list.icon}/> 
                          <h5>{list.con}</h5>
                        <span>{list.time}</span>
                           </div>  
                    }
                    {
                        detail.map((item,index)=><div key={index}>
                           <div className="check" checked={flag} onChange={this.quan}> <input type="checkbox"/><span>{item.content}</span></div>
                           <div className="jia" onClick={this.jia.bind(this,item.id)}>{item.num}票</div>
                        </div>)
                    }
               </div>
            </div>
        );
    }
}

export default Detail;