/** Routes to desktops
 * @module routers/desktop
 * @requires express express.Router()
 */

const { body } = require('express-validator');

const desktopController = require('../controllers/DesktopController');

const router = require('express').Router();


/**
* get the list of computers
* @name List GET
* @function
* @memberof module:routers/desktop
* @param {string} '/api/computers' - uri
* @param {function} desktopController.getComputers
* @return {JSON}
*/
router.get('/', desktopController.getComputers);



module.exports = router;