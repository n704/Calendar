import React, { Component } from 'react'
import Modal from 'react-modal';
import { getApi, postApi, DateTime,API_URL } from '../commons'
export default class ClassName extends Component{
	constructor(props) {
		super(props)
		this.state = {}
	}
	componentWillMount() {
		getApi(API_URL.get_event_by_id(this.props.location.routeParam.id), res =>{
			if(res.error){
				console.log(res.error)
			}else{
				this.setState(res)
			}
		})
	}
}
