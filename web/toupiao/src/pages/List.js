import React, { Component } from 'react'
import axios from 'axios';
import {withRouter} from 'react-router-dom'

 class List extends Component {
    state={
        getList:[]
    }
   componentDidMount(){
      this.xuan()
   }

   xuan(){
    axios.get('/list').then(res=>{
        console.log(res.data)
        this.setState({
            getList:res.data
        })
    })
   }
   toudetail(item){
    //    console.log(item)
    //    console.log(this.props)
    this.props.history.push(`/toudetail/${item.id}`,item)
}
    render() {
        let {getList}=this.state;
        return (
            <div className="dls">
                {
                getList.map((item,index)=>{
                    return (
                       <dl key={index} onClick={()=>{this.toudetail(item)}}>
                           <dt>
                               <img src={item.icon}/>
                           </dt>
                           <dd>
                             <div className='one'>
                               <span>{item.userid}</span>
                             </div> 
                             <div className='two'>
                               <span>{item.con}</span>
                             </div> 
                           </dd>
                       </dl>
                    )
                })
            }
            </div>
        )
    }
}
export default withRouter(List)