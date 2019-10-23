import React, { Component } from 'react'
import List from './List'
// import addToupiao from './AddToupiao'
import {withRouter} from 'react-router-dom'


 class Home extends Component {

    addlist(){
        this.props.history.push('/addToupiao')
        // console.log(11)
    }
    render() {
        return (
            <div className='box-home'>
               <header className='header'>
                    <span>返回</span>
                    <span>投票</span>
                    <span className="color" onClick={()=>{this.addlist()}}>发起投票</span>
               </header>
               <div className="tit">
                  <p className="ps">全部</p>
                  <p>已结束</p>
                  <p>正在进行</p>
               </div>
               <List />
            </div>
        )
    }
}
export default withRouter(Home)