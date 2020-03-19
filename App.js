import React from 'react';
import { Alert } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';
import aios from 'axios';
import Axios from 'axios';

const API_KEY = 'd83bdf2f366cda25283d10172511010d';

export default class extends React.Component {
	state = {
		isLoading: true
	};

	getWeather = async (latitude, longitude) => {
		const { data } = await Axios.get(
			`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    console.log(data);
	};

	getLocation = async () => {
		try {
			//throw Error();
			const response = await Location.requestPermissionsAsync();
			//console.log(response);
			//const location = await Location.getCurrentPositionAsync();
			//console.log(location);
			const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
			//console.log( coords.latitude, coords.longitude);
			// Send to API and get weather
			this.getWeather(latitude, longitude);

			this.setState({ isLoading: false });
		} catch (error) {
			Alert.alert("Can't find you.", 'So sad.');
		}
	};

	componentDidMount() {
		this.getLocation();
	}

	render() {
		const { isLoading } = this.state;

		return isLoading ? <Loading /> : null;
	}
}
