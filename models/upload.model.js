const  mongoose = require('mongoose');
const httpStatus = require('http-status');
const APIError = require('../helpers/APIError');

/**
 * Listing Schema
 */
const UploadSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  url: {
    type: String,
    require: true
  }
});

/**
 * Methods
 */
UploadSchema.method({
});

/**
 * Statics
 */
UploadSchema.statics = {
  /**
  * List all uploads
  */
  list() {
    return this.find()
    .exec();
  }

  /**
  * Post new Upload
  */
  create(data) {
    // generate unique filename using uuid and assign to object
    data.filename = uuid.v4();

    // initialize knox client
    var knoxClient = knox.createClient({
      key: config.s3.key,
      secret: config.s3.secret,
      bucket: config.s3.bucket,
    });

    knoxClient.putFile(
      file.image.path,
          'uploads/' + data.filename,
          {
            'Content-Type': file.image.type,
            'x-amz-acl': 'public-read',
          },
          function(err, result) {
            if (err || result.statusCode != 200) {
              cb(err);
            } else {
              cb(null);
            }
          },
    );

    return this.find()
    .exec();
  }
}

module.exports = mongoose.model('uploads', UploadSchema);
