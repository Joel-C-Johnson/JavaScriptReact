import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import 'materialize-css/dist/css/materialize.min.css';

import Grid from '@material-ui/core/Grid';
import './components/css/style.css';
import Header from './components/Header';
import MenuBar from './components/MenuBar';

const styles = theme => ({
	root: {
		flexGrow: 1,
	},
	body: {
		backgroundColor: 'black',
	},
	h1: {
		padding: '10px 0px 20px 0px',
		margin: '0px',
		textAlign: 'center',
		color: '#fff',
		backgroundColor: 'black',
	},
	paper: {
		padding: theme.spacing.unit * 2,
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
	textDisplay: {
		padding: theme.spacing.unit,
		textAlign: 'center',
		color: theme.palette.text.secondary,
		marginBottom: '10px',
		height: 140,
		overflow: 'auto',
		textAlign: 'justify',
		lineHeight: '25px',
	},
	tokenList: {
		// padding: theme.spacing.unit * 2,
		textAlign: 'center',
		color: theme.palette.text.secondary,
		// marginBottom:'20px',
		height: 320,
		overflowX: 'hidden',
		overflowY: 'auto',
		backgroundColor: '#fff',
	},
	selectButtonPaper: {
		padding: theme.spacing.unit,
		// padding: '2px',
		textAlign: 'center',
		color: theme.palette.text.secondary,
		marginLeft: '0px',
		marginTop: '0%',
		marginBottom: '10px',
	},
	spanning: {
		color: 'blue',
	},
	mainGrid: {
		// backgroundColor:"blue",
		width: '100%',
		// marginLeft:'auto',
		// marginRight:'auto',
		// backgroundColor:'blue',
		// paddingLeft:'20px',
		// paddingRight:'20px',
		paddingTop: '0',
		marginTop: '0',
		height: 'auto',
		// backgroundImage: `url(${Image})`,
		// backgroundSize: 'cover',
		// backgroundRepeat: 'no-repeat'
	},
	selectTwo: {
		padding: theme.spacing.unit,
		// padding: '2px',
		textAlign: 'center',
		color: theme.palette.text.secondary,
		marginLeft: '0px',
		position: 'fixed',
		// top:'20%',
		// marginBottom:'10%',
		width: '29%',
	},
	inputLabel: {
		padding: '2px',
		width: '20px',
		marginBottom: '10px',
		marginRight: '10%',
		backgroundColor: 'blue',
	},
	ul: {
		marginRight: '-10%',
		marginTop: '20%',
	},
	li: {
		width: '100%',
		float: 'left',
		listStyle: 'none',
		border: '1px solid grey',
		padding: '5px',
	},
	ulDiv: {
		overflow: 'auto',
		height: 100,
		borderBottom: '1px solid black',
	},
	selectMenu: {
		width: '120px',
		// backgroundColor:'blue'
	},
	highlightToken: {
		color: 'blue',
		backgroundColor: 'yellow',
	},
});

function App(props) {
	// console.log(props)
	const { classes } = props;
	// console.log(classes)
	return (
		// <div className="mainGrid9">
		// <Grid className={classes.mainGrid}>
		//   <Grid item xs={12}>
		//     <Header classes={classes}/>
		//   </Grid>
		//   <MenuBar classes={classes} />
		// </Grid>
		<div>
			<nav className="nav-extended">
				<div className="nav-wrapper">
					<a href="#" className="brand-logo">
						AGMT
					</a>
					<a href="#" data-activates="mobile-demo" className="button-collapse">
						<i className="material-icons">menu</i>
					</a>
					<ul id="nav-mobile" className="right hide-on-med-and-down">
						<li>
							<a href="#">About</a>
						</li>
						<li>
							<a href="#">Contact Us</a>
						</li>
						<li>
							<a href="Logout">Logout</a>
						</li>
					</ul>
					{/* <ul className="side-nav" id="mobile-demo">
							<li className="active">
								<a href="https://www.jquery-az.com/jquery-tips/">jQuery</a>
							</li>
							
						</ul> */}
				</div>
				<div className="nav-content container">
					<ul className="tabs center tabs-transparent">
						<li className="tab">
							<a href="#tab1">Available Source</a>
						</li>
						<li className="tab">
							<a href="#tab2">Translation</a>
						</li>
						<li className="tab">
							<a href="#tab3">Download Draft</a>
						</li>
					</ul>
				</div>
			</nav>
			<div id="tab1" className="col s12">
				Content for Tab 1
			</div>
			<div id="tab2" className="col s12">
				<MenuBar classes={classes} />
			</div>
			<div id="tab3" className="col s12">
				Content for Tab 3
			</div>
		</div>
		// </div>
	);
}

App.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
