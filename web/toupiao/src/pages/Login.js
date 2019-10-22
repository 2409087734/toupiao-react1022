import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div className="box-login">
                <header>欢迎来到沐恩之家</header>
                <input className='inp' placeholder="用户名"/>
                <input className='inp' placeholder="密码"/>
                <button className='btn'>登录</button>
            </div>
        )
    }
}
