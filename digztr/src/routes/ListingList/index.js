module.exports = {
  path: '/listings',

  /**
     * getComponent
     * @param location
     * @param cb {Function} callback
     */
	getComponent(location, cb) {
		cb(null, require('./ListingList').default);
	},
}
