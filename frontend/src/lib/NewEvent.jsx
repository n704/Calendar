import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
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
			<Dialog
			modal
			open
			title='New Event'
			style={{ minHeight : '500px' }}>
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
				<TextField type="text" floatingLabelText="Location"value={this.state.location} onChange={ e => this.setState({location :e.target.value})}/><br/>
				<TextField type="text" floatingLabelText="Description"value={this.state.description} onChange={ e => this.setState({description :e.target.value})}/><br/>
				<RaisedButton label='SAVE' labelColor="white" backgroundColor="green" onTouchTap={e => this.createEvent()}/>
				<RaisedButton label='CANCEL' onTouchTap={e => this.returnHome()}/>
			</div>
			</Dialog>
		);
	}
}
