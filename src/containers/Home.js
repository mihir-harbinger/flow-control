import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
	ToolbarAndroid,
	StyleSheet,
	View,
	Text
} from 'react-native'

var Parse = require('parse/react-native').Parse;

import Tank from '../components/Tank'

class Home extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			overheadHeight: 60,
			basementHeight: 60
		}
		this.api = this.api.bind(this)
	}
	componentDidMount(){
		this.api()
		this.timer = setInterval(this.api, 5000)
	}
	api(){
		var that = this
		Parse.Cloud.run('getDataForAndroid', {}).then(
			function(result){
				for(let i=0;i<result.length;i++){
					if(result[i].toJSON().tank_id === "B4:21:8A:F0:0A:AE"){
						that.setState({
							overheadHeight: result[i].toJSON().height
						})
					}
					else if(result[i].toJSON().tank_id === "B4:21:8A:F0:02:AA"){
						that.setState({
							basementHeight: result[i].toJSON().height
						})
					}
				}
				// console.warn("[HOME API] Result: " + JSON.stringify(result, null, 2))
			},
			function(error){
				//console.warn("[HOME API] Error: " + JSON.stringify(error, null, 2))
			}
		)
	}
	render(){
		const  { overhead, basement } = this.props
		return(
			<View style={styles.container}>
				<View style={{flex: 1, paddingBottom: 5}}>
					<Tank 
						title="Overhead Tank"
						height={(overhead.height - this.state.overheadHeight) * (130/overhead.height)}
						percentage={(overhead.height - this.state.overheadHeight) / overhead.height * 100}
						volume={((overhead.height - this.state.overheadHeight) * overhead.width * overhead.length) / 1000000}
					/>
				</View>
				<View style={{flex: 1, paddingTop: 5}}>
					<Tank 
						title="Basement Tank"
						height={(basement.height - this.state.basementHeight) * (130/basement.height)}
						percentage={(basement.height - this.state.basementHeight) / basement.height * 100}
						volume={(basement.height * basement.width * basement.length) / 1000000}
					/>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10
	}
})

const mapStateToProps = state => {
	return {
		isPumping: state.isPumping,
		overhead: state.overhead,
		basement: state.basement
	}
}

export default connect(
	mapStateToProps
)(Home)