const { Op } = require('sequelize');
 
const Client = require('../models/client');

/** Get clients list for autocomplete
 * @name getClients
 * @function
 * @throws Will throw an error if one error occursed
 */
exports.getClients = async (req, res, next) => {
    const client = req.query.client;
    try {
        const clientList = await Client.findAll({
            attributes: ['id', 'surname', 'name'],
            where: {
                [Op.or]: [
                    {
                        surname: {
                            [Op.substring]: client
                        }
                    }, 
                    {
                        name: {
                            [Op.substring]: client
                        }
                    }
                ]
            }
        });

        return res.status(200).json({
            clientList
        })
    } catch (error) {
        return res.status(200).json({
            success: false,
            message: 'Ressource indisponible',
        })
    }
}