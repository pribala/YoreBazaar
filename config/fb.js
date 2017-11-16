// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {
    
        'facebookAuth' : {
            'clientID'      : '143089296336287', // your App ID
            'clientSecret'  : '1f93464c878aa76b40c54a2c1cd66d69', // your App Secret
            'callbackURL'   : 'http://localhost:3030/auth/facebook/callback'
        }
    }  