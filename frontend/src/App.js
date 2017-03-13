import React , { Component } from 'react'
import Calendar from './lib/Calendar'
export default class App extends Component {
   constructor(props){
     super(props)
   }
   render(){
     console.log(this.props)
     return(
       <div>
         <Calendar history={this.props.history}/>
       </div>
     )
   }
}
