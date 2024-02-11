const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');

const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

module.exports = {
  AuthenticationError: new GraphQLError('Could not authenticate user.', {
    extensions: {
      code: 'UNAUTHENTICATED',
    },
  }),
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;
  
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }
  
    if (!token) {
      return req; // No token provided, proceed with unauthenticated request
    }
  
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data; // Token is valid, add decoded user data to the request
    } catch (error) {
      // Token verification failed
      console.error('Failed to verify token:', error.message);
      throw new AuthenticationError('Failed to authenticate user. Please provide a valid token.');
    }
  
    return req; // Return the modified request object
  },
  signToken: function ({ email, name, _id }) {
    const payload = { email, name, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
