import React, { Component } from 'react'
import {
	TouchableHighlight,
	StyleSheet,
	View,
	Text
} from 'react-native'

class Tank extends Component{
	render(){
		return(
			<View style={styles.section}>
				<Text style={styles.title}>{this.props.title}</Text>
				<View style={styles.row}>
					<View style={styles.tankWrapper}>
						<View style={styles.tank}>
							<View style={[styles.tankContent, {height: this.props.height}]}>
							</View>
							<Text style={styles.percentage}>{parseInt(this.props.percentage)}%</Text>
						</View>						
					</View>
					<View style={styles.column}>
						<Text>{this.props.volume} liters</Text>
						<TouchableHighlight overlay="#cccccc">
							<Text>Start Pumping</Text>
						</TouchableHighlight>
					</View>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	section: {
		flex: 1,
		padding: 20,
		borderWidth: 2,
		borderStyle: 'dashed',
		borderColor: '#cccccc'
	},
	percentage: {
  		fontSize: 25
  	},
	title: {
		textAlign: 'center',
		fontSize: 20,
		fontWeight: 'bold'
	},
	tank: {
		width: null,
		height: 130,
		borderWidth: 2,
		borderTopColor: 'transparent',
		borderLeftColor: '#0277BD',
		borderBottomColor: '#0277BD',
		borderRightColor: '#0277BD',
		borderBottomLeftRadius: 8,
		borderBottomRightRadius: 8,
		marginTop: 20,
		position: 'relative',
		alignItems: 'center',
		justifyContent: 'center'
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
	tankWrapper: {
		flex: 1
	},
	column: {
		flex: 1,
		padding: 20
	}
})

export default Tank