import React , { Component } from 'react'
import Calendar from './lib/Calendar'
export default class App extends Component {
   constructor(props){
     super(props)
   }
   render(){
     return(
       <div>
         <Calendar />
       </div>
     )
   }
}
