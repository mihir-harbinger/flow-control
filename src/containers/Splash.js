import React from 'react'
import { 
	StyleSheet,
	Image,
	View, 
	Text 
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Icon from 'react-native-vector-icons/MaterialIcons'
import BackgroundImage from '../../assets/glyph-city.png'

import { fetchDimensions } from '../actions'


class Splash extends React.Component{
	componentDidMount(){
		this.props.actions.fetchDimensions()
		this.timer = setTimeout(
			() => this.props.navigator.replace({name: 'home'}), 
		1500)
	}
	render(){
		const { isFetching } = this.props
		return(
			<View style={styles.container}>
				<View style={styles.section}>
					<Icon name="tune" size={50}></Icon>
					<Text style={styles.title}>Flow Control</Text>
					<Text>Smart City Makers' Fest</Text>
				</View>
				<View style={styles.imageWrapper}>
					<Image source={BackgroundImage} style={styles.canvas} resizeMode="contain" />
				</View>
			</View>			
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff'
	},
	title: {
		fontSize: 35,
		color: '#000000',
		fontWeight: 'bold'
	},
	section: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	imageWrapper: {
		flex: 1
	},
	canvas: {
		flex: 1,
		width: null, 
		height: null
	}
})

const mapStateToProps = state => {
	return {
		isFetching: state.isFetching
	}
}

const mapDispatchToProps = dispatch => {
	return {
		actions: bindActionCreators({fetchDimensions}, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Splash)