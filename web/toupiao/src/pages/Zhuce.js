import React, { Component } from 'react'
import axios from 'axios'

export default class Zhuce extends Component {
state={
    username:"",
    psw:""
}
    zhu(){
        console.log(this.state.username,this.state.psw)
        axios.post('/zc',{
            username:this.state.username,
            psw:this.state.psw
        }).then(res=>{
            console.log(res)
            if(res.data.code==1){
                this.props.history.push('/login')
            }else{
                alert('注册失败')
            }
        })
        
    }
    render() {
        return (
            <div className="box-login">
            <header className="head">欢迎来到沐恩之家</header>

            <input className='inp' placeholder="用户名" onChange={(e)=>{
                let name=this.state.username=e.target.value
                this.setState({username:name})}}/>
            <input className='inp' placeholder="密码" onChange={(e)=>{
                let name=this.state.psw=e.target.value
                
                this.setState({psw:name})}}/>
            <button className='btn' onClick={()=>{this.zhu()}}>注册</button>

        </div>
        )
    }
}
