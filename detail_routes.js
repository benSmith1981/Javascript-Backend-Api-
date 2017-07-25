var detailController = require('./detail_controller') 

module.exports = function(routes) {
// Creates endpoint handlers for /users
	routes.route('/gettree/:patientID?')
	  .get(detailController.gettree)

	routes.route('/edithuman/:id?')
	  .put(detailController.edithuman)

	routes.route('/adddiseaseforhuman/:id?')
	  .post(detailController.adddiseaseforhuman)

	routes.route('/getdiseases/:id?')
	  .get(detailController.getdiseases)

	// routes.route('/savetree/:treeid?/:treedata?')
	routes.route('/savetree/')
	  .post(detailController.savetree)

	  	// routes.route('/savetree/:treeid?/:treedata?')
	routes.route('/deletetree/:patientID?')
	  .get(detailController.deletetree)
}