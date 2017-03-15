import React, { Component } from 'react'
import Modal from 'react-modal';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { getApi, postApi, deleteApi, DateTime,API_URL } from '../commons'
export default class ClassName extends Component{
	constructor(props) {
		super(props)
		this.updateEvent = this.updateEvent.bind(this)
		this.returnHome = this.returnHome.bind(this)
		this.deleteEvent - this.deleteEvent.bind(this)
		this.state = {}
	}
	componentWillMount() {
		console.log(this.props,"componentWillMount")
		getApi(API_URL.get_event(this.props.match.params.id),{},  res =>{
			if(res.error){
				console.log(res.error)
			}else{
				this.setState(res)
			}
		})
	}
	updateEvent(){
		const resquestBody = {
			start_time : new Date(this.state.start_time).toISOString(),
			end_time : new Date(this.state.end_time).toISOString(),
			location : this.state.location,
			description : this.state.description,
			title : this.state.title
		}
		postApi(API_URL.update_event(this.props.match.params.id),resquestBody, res => {
			if(res.error){
				this.setState({error:res.error})
			}else{
				this.returnHome()
			}
		})
	}
	deleteEvent(){
		deleteApi(API_URL.delete_event(this.props.match.params.id),res => {
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
		return (
			<Dialog
			modal
			open
			title='Update Event'
			style={{ minHeight : '500px' }}>
			<div>
			<DateTime
					label='Start Time'
					value={new Date(this.state.start_time)}
					onChange={date => this.setState({start_time : new Date(date)})}
					/>
					<br/>
			<DateTime
					label='End Time'
					value={new Date(this.state.end_time)}
					onChange={date => this.setState({end_time : new Date(date)})}
					/><br/>
				<TextField type="text" floatingLabelText="Location"value={this.state.location} onChange={ e => this.setState({location :e.target.value})}/><br/>
				<TextField type="text" floatingLabelText="Description"value={this.state.description} onChange={ e => this.setState({description :e.target.value})}/><br/>
				<TextField type="text" floatingLabelText="Title"value={this.state.title} onChange={ e => this.setState({title :e.target.value})}/>
				<RaisedButton label='SAVE' labelColor="white" backgroundColor="green" onTouchTap={e => this.updateEvent()}/>
				<RaisedButton label='CANCEL' onTouchTap={e => this.returnHome()}/>
				<RaisedButton label='DELETE' labelColor="#FFFFFF" backgroundColor="red" onTouchTap={e => this.deleteEvent()}/>
			</div>
			</Dialog>
		)
	}
}
