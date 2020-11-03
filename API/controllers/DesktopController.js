const { validationResult } = require('express-validator');

const Desktop     = require('../models/desktop');
const Client      = require('../models/client');
const Attribution = require('../models/attribution');

// Define relation (needed if we don't use database.sync() in app.js)
Client.hasMany(Attribution);
Desktop.hasMany(Attribution);
Attribution.belongsTo(Client);
Attribution.belongsTo(Desktop);


/** Get all information about computers
 * @name getComputers
 * @function
 * @throws Will throw an error if one error occursed
 */ 
exports.getComputers = async (req, res, next) => {
    try {
        
        const desktopInfo = await Desktop.findAll({
            attributes: ['id', 'name'],
            include: [
                {
                    model: Attribution,
                    attributes: ['id', 'date', 'hours'],
                    include: [{
                        model: Client,
                        attributes: ['id', 'surname', 'name']
                    }]
                }
            ]
        });
        res.status(200).json({desktopInfo})
    } catch (error) {
        console.log('error to get computer', error);
    }
}

/** Post information about new desktop
 * @name postComputers
 * @function
 * @param {String} name
 * @throws Will throw an error if one error occursed
 */
exports.postComputers = async (req, res, next) => {
    const { name } = req.body;
    try {
        const desktop = new Desktop({name});
        const newDesktop = await desktop.save();

        const returnDesktop = {
            id: newDesktop.id,
            name: newDesktop.name,
        };

        res.status(200).json({ 
            success: true,
            message: 'Poste ajouté avec succès',
            content: returnDesktop
        });
        
    } catch (error) {
        return res.status(200).json({
            success: false,
            message: 'Poste ajouté existe déjà',
        })
    }
}

