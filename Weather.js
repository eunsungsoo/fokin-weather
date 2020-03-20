import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
	Clear: {
		iconName: 'weather-hail',
		gradient: [ '#67B26F', '#4ca2cd' ],
		title: "title",
		subtitle: "subtitle"
	},
	Thunderstorm: {
		iconName: 'weather-hail',
		gradient: [ '#67B26F', '#4ca2cd' ],
		title: "title",
		subtitle: "subtitle"
	},
	Mist: {
		iconName: 'weather-hail',
		gradient: [ '#67B26F', '#4ca2cd' ],
		title: "title",
		subtitle: "subtitle"
	},
	Dust: {
		iconName: 'weather-hail',
		gradient: [ '#67B26F', '#4ca2cd' ],
		title: "title",
		subtitle: "subtitle"
	},
	Drizzle: {
		iconName: 'weather-hail',
		gradient: [ '#67B26F', '#4ca2cd' ],
		title: "title",
		subtitle: "subtitle"
	},
	Haze: {
		iconName: 'weather-hail',
		gradient: [ '#67B26F', '#4ca2cd' ],
		title: "title",
		subtitle: "subtitle"
	},
	Rain: {
		iconName: 'weather-hail',
		gradient: [ '#67B26F', '#4ca2cd' ],
		title: "title",
		subtitle: "subtitle"
	},
	Snow: {
		iconName: 'weather-hail',
		gradient: [ '#67B26F', '#4ca2cd' ],
		title: "title",
		subtitle: "subtitle"
	},
	Clouds: {
		iconName: 'weather-hail',
		gradient: [ '#67B26F', '#4ca2cd' ],
		title: "title",
		subtitle: "subtitle"
	},
	Atmosphere: {
		iconName: 'weather-hail',
		gradient: [ '#67B26F', '#4ca2cd' ],
		title: "title",
		subtitle: "subtitle"
	}
};
export default function Weather({ temp, condition }) {
	return (
		<LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
			<StatusBar barStyle="light-content" />
			<View style={styles.halfContainer}>
				<MaterialCommunityIcons
					size={96}
					color="white"
					name={weatherOptions[condition].iconName || 'weather-sunset'}
				/>
				<Text style={styles.temp}>{temp}o</Text>
			</View>
			<View style={styles.halfContainer}>
				<View style={{...styles.halfContainer, ...styles.textContainer}}>
					<Text style={styles.title}>{weatherOptions[condition].title}</Text>
					<Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
				</View>
			</View>
		</LinearGradient>
	);
}

Weather.propTypes = {
	temp: PropTypes.number.isRequired,
	condition: PropTypes.oneOf([
		'Thunderstorm',
		'Mist',
		'Dust',
		'Drizzle',
		'Haze',
		'Rain',
		'Snow',
		'Clouds',
		'Atmosphere',
		'Clear'
	]).isRequired
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	temp: {
		fontSize: 42,
		color: 'white'
	},
	halfContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	title: {
		fontSize: 44,
		fontWeight: '300',
		marginBottom: 10,
		color: 'white'
	},
	subtitle: {
		fontSize: 24,
		fontWeight: '600',
		color: 'white'
	},
	textContainer: {
		paddingHorizontal: 20,
		alignItems: "flex-start"
	}
});
