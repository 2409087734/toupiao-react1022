import React, { Component } from 'react'
import axios from 'axios'
export default class Login extends Component {
    state={
        username:"",
        psw:""
    }
    deng(){
        axios.post('/login',{
            username:this.state.username,
            psw:this.state.psw
        }).then(res=>{
            if(res.data.code){
                this.props.history.push('/home')
            }
        })
    }
    render() {
        return (
            <div className="box-login">
                <header className='head'>欢迎来到沐恩之家</header>
                <input className='inp' placeholder="用户名" onChange={(e)=>{
                  let name=this.state.username=e.target.value
                   this.setState({username:name})}}/>
               <input className='inp' placeholder="密码" onChange={(e)=>{
                    let name=this.state.psw=e.target.value
                    this.setState({psw:name})}}/>
                <button className='btn' onClick={()=>{this.deng()}}>登录</button>
            </div>
        )
    }
}
