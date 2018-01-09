module.exports = {
  path: '/listings/rets/:id',

  /**
     * getComponent
     * @param location
     * @param cb {Function} callback
     */
	getComponent(location, cb) {
		cb(null, require('./ListingDetails').default);
	},
}
