const app = exress();
const { auth } = require('express-openid-connect');
require ('dotenv').config();

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.eventNames.SECRET,
  baseURL: process.eventNames.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.eventNames.ISSUER_BASE_URL,
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});
