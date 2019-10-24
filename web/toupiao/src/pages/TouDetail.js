import React, { Component } from 'react'

export default class TouDetail extends Component {

    // tongji(){
    //   this.props.history.push('/tongji')
    // }
    render() {
        let it=this.props.history.location.state
        return (
            <div className="box-xiang">
                 <header>
                     <span>返回</span>
                     <span>投票详情</span>
                     <span className="tongji">统计</span>
                 </header>
                 <div className="xiang">
                    <img src={it.icon}/>
                    <span >{it.userid}</span>
                    <span className="time">截止到{it.time}</span>
                 </div>
            </div>
        )
    }
}
