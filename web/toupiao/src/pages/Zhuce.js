import React, { Component } from 'react'

export default class Zhuce extends Component {
    render() {
        return (
            <div className="box-login">
            <header className="head">欢迎来到沐恩之家</header>
            <input className='inp' placeholder="用户名"/>
            <input className='inp' placeholder="密码"/>
            <div className="zc"><span>立即注册</span><span>忘记密码</span></div>
            <button className='btn'>注册</button>
        </div>
        )
    }
}