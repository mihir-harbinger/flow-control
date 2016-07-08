import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import BackgroundImage from '../../assets/glyph-city.png'

import { 
	StyleSheet,
	Image,
	View, 
	Text 
} from 'react-native'

class Splash extends React.Component{
	componentDidMount(){
		this.timer = setTimeout(
			() => this.props.navigator.replace({name: 'home'}), 
		1500)
	}
	render(){
		return(
			<View style={styles.container}>
				<View style={styles.section}>
					<Icon name="tune" size={50} color="#000000"></Icon>
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

export default Splash