import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
	StyleSheet,
	View,
	Text
} from 'react-native'

var Parse = require('parse/react-native').Parse;

class Home extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			height: 0
		}
		this.api = this.api.bind(this)
	}
	componentDidMount(){
		this.api()
		//this.timer = setInterval(this.api, 15000)
	}
	api(){
		var that = this
		Parse.Cloud.run('getDataForAndroid', {}).then(
			function(result){
				console.warn("[HOME API] Result: " + JSON.stringify(result, null, 2))
			},
			function(error){
				console.warn("[HOME API] Error: " + JSON.stringify(error, null, 2))
			}
		)		
	}
	render(){
		return(
			<View style={styles.container}>
				<View style={styles.section}>
					<View>
						<Text style={styles.center}>Overhead Tank</Text>
						<View style={styles.row}>
							<View style={styles.column}>
								<View style={styles.tankWrapper}>
									<View style={[styles.tankContent, {height: this.state.height}]}>
									</View>
								</View>						
							</View>
							<View style={styles.column}>
							</View>
						</View>
					</View>
				</View>
				<View style={styles.section}>
					<View>
						<Text style={styles.center}>Basement Tank</Text>
						<View style={styles.row}>
							<View style={styles.column}>
								<View style={styles.tankWrapper}>
									<View style={[styles.tankContent, {height: 60}]}>
									</View>
								</View>						
							</View>
							<View style={styles.column}>
							</View>
						</View>
					</View>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	section: {
		flex: 1,
		padding: 20,
		justifyContent: 'center'
	},
	center: {
		alignSelf: 'center'
	},
	tankWrapper: {
		width: null,
		height: 120,
		borderWidth: 2,
		borderTopColor: 'transparent',
		borderLeftColor: '#0277BD',
		borderBottomColor: '#0277BD',
		borderRightColor: '#0277BD',
		borderBottomLeftRadius: 8,
		borderBottomRightRadius: 8,
		marginTop: 20,
		position: 'relative'
	},
	tankContent: {
		width: null,
		backgroundColor: '#B3E5FC',
		borderBottomLeftRadius: 8,
		borderBottomRightRadius: 8,		
		position: 'absolute',
		bottom: 2,
		left: 0,
		right: 0
	},
	row: {
		flex: 1,
		flexDirection: 'row'
	},
	column: {
		flex: 1
	}
})

const mapStateToProps = state => {
	return {
		isPumping: state.isPumping
	}
}

export default connect(
	mapStateToProps
)(Home)