export NODE_ENV=development
export JWT_SECRET=secret
export DB_USERNAME=dbuser
export DB_PASSWORD=dbpassword
export DB_URL=ds153501.mlab.com:53501/digztr
export STREAM_APP_ID=
export STREAM_KEY=
export STREAM_SECRET=
export API_URL=http://localhost:8000
export API_PORT=8000
export PORT=3000
export IMGIX_BASE_URL=https://digztr-temp.imgix.net
export FB_CLIENT_ID=305937243144090
export FB_CLIENT_SECRET=f475592e8673761976d679b0ea8d8ccd
export FB_PROFILE_URL=https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email
'facebookAuth' : {
        'clientID'      : 'your-secret-clientID-here', // your App ID
        'clientSecret'  : 'your-client-secret-here', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback',
        'profileURL'    : 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
        'profileFields' : ['id', 'email', 'name'] // For requesting permissions from Facebook API
    },
