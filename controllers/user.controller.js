const User = require('../models/user.model');
const axios = require('axios');
const async = require('async');
const FB = require('fb');

/**
 * Get Listing list
 */
function post(req, res, next){
  // extract data from body
	let data = req.body || {};
	let fbUserId = data.fb_user_id;
	let accessToken = data.token;
	let options = {
		appId: '2040928639462492',
		xfbml: true,
		version: 'v2.6',
		status: true,
		cookie: true,
	};

  let fb = new FB.Facebook(options);
  fb.setAccessToken(accessToken);

  async.waterfall([
    cb => {
      // query the userdata from FB
      fb.api(
				'/me',
				'get',
				{ fields: 'id,name,email, first_name, last_name' },
				function(facebookUserData) {
					cb(null, facebookUserData);
				},
			);
    },
    (facebookUserData,cb) => {
      console.log(facebookUserData);
      // build the data we're going to insert
			let data = {};
			data.email = facebookUserData.email;
			data.fb_uid = facebookUserData.id;
			data.first_name = facebookUserData.first_name;
			data.last_name = facebookUserData.last_name;

      User.show(data.email)
        .then(response => {
          console.log(response);
          if (response) {
            res.json(response);
          }else{
            User.create(data)
              .then(user => {
                console.log(data)
                res.json(user);
              })
              .catch(e => {
                next(e);
              });
          }
        })
        .catch(e => {
          next(e);
        });
    }
  ]);
}

module.exports = {post};
