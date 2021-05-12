import React, { Component } from 'react';
import styles from './App.module.css';

// import Cards from './components/Cards/Cards';
// import Charts from './components/Charts/Charts';
// import CountryPicker from './components/CountryPicker/CountryPicker';

// Neat Trick
// ..............................

import { Cards, Charts, CountryPicker } from './components';
import { fetchData } from './api';

// ..............................

class App extends Component {
	state = {
		data: {},
		country: '',
	};

	async componentDidMount() {
		const fetchedData = await fetchData();
		console.log(fetchedData)
		this.setState({ data: fetchedData });
	}

	handleCountryChange = async (country) => {
		const fetchedData = await fetchData(country)
		console.log(fetchedData)
		this.setState({ data: fetchedData, country: country });
	}

	render() {
		const { data, country } = this.state;
		return (
			<div className={styles.container}>
				<Cards data={data} />
				<CountryPicker handleCountryChange={this.handleCountryChange}/>
				<Charts data={data} country={country}/>
			</div>
		);
	}
}

export default App;
