const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys')
const app = express();
const indexRoutes = require('./routes/index');

passport.use(
	new GoogleStrategy(
	{
		clientID: keys.googleClientID,
		clientSecret: keys.googleClientSecret,
		callbackURL: '/auth/google/callback'
	},
	(accessToken, refreshToken, profile, done) => {
		console.log(accessToken);
	})
);

app.use(indexRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT);