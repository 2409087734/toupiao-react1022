import React, { Component } from 'react'
import axios from 'axios'

export default class AddToupiao extends Component {
    state={
        userid:"",
        con:"",
        
    }

    xuan(){
        axios.get('/list').then(res=>{
            console.log(res.data)
            this.setState({
                getList:res.data
            })
        })
    }

    add(){
        // let today=new Date();
      axios.post('/addlist',{
          userid:this.state.userid,
          con:this.state.con,
          icon:"http://img0.imgtn.bdimg.com/it/u=1552858618,522520412&fm=26&gp=0.jpg",
          time:"2019.10.23"
      }).then(res=>{
          console.log(res.data)
      })
      this.xuan();

      this.props.history.push('/home')
    //   console.log(this.state.userid,this.state.con)
    }


    fanhui(){
        this.props.history.push('/home')
    }
    render() {
        return (
            <div>
               <header className='header'>
                   <span onClick={()=>{this.fanhui()}}>返回</span>
                   <span>发起投票</span>
                   <span></span>
               </header>

              <div className='box-input'>
                  <div>标题  <input className='input' placeholder='输入标题' onChange={(e)=>{this.setState({userid:e.target.value})}}/></div>
                  <div>描述  <input className='inputs' placeholder="输入内容" onChange={(e)=>{this.setState({con:e.target.value})}}/></div>
                  <button onClick={()=>{this.add()}}>发布</button>
              </div>
            </div>
        )
    }
}
