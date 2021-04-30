import React from 'react';
import GoogleLogin from 'react-google-login';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Divider from '@material-ui/core/Divider';
import { db } from '../../components/firebase';

const styles = (theme) => ({
	root: {
		height: '100vh',
	},
	image: {
		backgroundImage: 'url(https://source.unsplash.com/1600x900/?building-monochrome)',
		backgroundRepeat: 'no-repeat',
		backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
		backgroundSize: 'cover',
		backgroundPosition: 'center'
	},
	paper: {
		margin: theme.spacing(20, 6),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'left'
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(2)
	},
	submit: {
		margin: theme.spacing(3, 0, 3),
		padding: theme.spacing(1.5, 1.5)
	},
	select: {
		margin: theme.spacing(2, 0)
	},
	drop: {
		padding: theme.spacing(2, 2)
	}
});

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
		this.postData = this.postData.bind(this);
	}; //end constructor

	componentDidMount() {}

	async postData() {
            const { email, password } = this.state;
            db.collection('logincredentials').add({
				email: email,
				password: password,
            })
            .then(()=>{
                alert('Hello there! Hope you are doing well')
            })
            .catch(error=>{
                alert(error.message)
            })
            this.setState({
                email: '',
                password: ''
            });
            this.props.history.push('/');
		}

	change = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}; //end change

	onSubmit = (e) => {
		e.preventDefault();
		this.postData();
	};

    responseGoogle = (response) =>{
        console.log(response)
        console.log(response.profileObj)
    }


	render() {
		const { classes } = this.props;
		return (
			<Grid container component="main" className={classes.root}>
				<CssBaseline />
				<Grid item xs={false} sm={4} md={7} className={classes.image} />
				<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
					<div className={classes.paper}>
						<Typography component="h1" variant="h2">
							Sign in
						</Typography>
						<form className={classes.form} noValidate>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								id="email"
								label="Email"
								name="email"
								placeholder="Email"
								value={this.state.email}
								onChange={(e) => this.change(e)}
								autoComplete="email"
								autoFocus
							/>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								placeholder="Password"
								value={this.state.password}
								onChange={(e) => this.change(e)}
								autoComplete="current-password"
							/>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								color="primary"
								onClick={(e) => this.onSubmit(e)}
								className={classes.submit}
							>
								Sign In
							</Button>
                            <Divider variant="middle"/>
                            <Grid style={{ margin: 20, paddingLeft: '33%' }}>
                                <GoogleLogin
                                    clientId="612949862331-7g9n54abfh6mqshf9tqatpn617u7vgnr.apps.googleusercontent.com"
                                    buttonText="Log in with Google"
                                    onSuccess={this.responseGoogle}
                                    onFailure={this.responseGoogle}
                                    cookiePolicy={'single_host_origin'}
                                />
                            </Grid>
                            <Grid container spacing={3}>
							    <Grid item xs={12}>
							    	<Link href="/signup" variant="body2">
							    		{"Don't have an account? Sign Up"}
							    	</Link>
							    </Grid>
                            </Grid>
							<Box mt={5} />
						</form>
					</div>
				</Grid>
			</Grid>
		);
	}
}

Login.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Login);
