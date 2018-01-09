module.exports = {
  path: '/listings/:id',

  /**
     * getComponent
     * @param location
     * @param cb {Function} callback
     */
	getComponent(location, cb) {
		cb(null, require('./ListingDetails').default);
	},
}
