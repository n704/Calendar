import React, { Component } from 'react'
import Modal from 'react-modal';
import { postApi, DateTime,API_URL } from '../commons'
export default class NewEvent extends Component {
	constructor(props){
		super(props);
		this.createEvent = this.createEvent.bind(this)
		this.returnHome = this.returnHome.bind(this)
		this.state = {
			start_time : new Date(),
			end_time: new Date(),
			location: "",
			description: ""
		};
	}
	createEvent(){
		postApi(API_URL.add_event,this.state, res => {
			if(res.error){
				this.setState({error:res.error})
			}else{
				this.returnHome()
			}
		})
	}
	returnHome(){
		this.props.history.push('/')
	}
	render(){
		return(
			<Modal
			isOpen
			contentLabel='New Event'>
			<div>
			<DateTime
					label='Start Time'
					value={this.state.start_time}
					onChange={date => this.setState({start_time : date})}
					/>
					<br/>
			<DateTime
					label='End Time'
					value={this.state.end_time}
					onChange={date => this.setState({end_time : date})}
					/><br/>
				Location: <input type="text" value={this.state.location} onChange={ e => this.setState({location :e.target.value})}/><br/>
				description: <input type="text" value={this.state.description} onChange={ e => this.setState({description :e.target.value})}/><br/>
				<button onClick={e => this.createEvent()}>Save</button>
				<button onClick={e => this.returnHome()}>Cancel</button>
			</div>
			</Modal>
		);
	}
}
