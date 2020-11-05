// import model
const Desktop = require('../models/desktop');
const Client = require('../models/client');
const Attribution = require('../models/attribution');

// set relations
Client.hasMany(Attribution);
Desktop.hasMany(Attribution);
Attribution.belongsTo(Client);
Attribution.belongsTo(Desktop);


/** Set attribution
 * @name postAttribution
 * @function
 * @throws Will throw an error if one error occursed
 */
exports.postAttribution = async (req, res, next) => {
    const {date, hours, clientId, desktopId} = req.body;

    try {
        const attribution = new Attribution({date, hours, clientId, desktopId});
        const nouvelleAttribution = await attribution.save();
        const user = await Client.findOne({
            attributes: ['id', 'surname', 'name'],
            where: {
                id: clientId
            }
        });

        const returnDate = {
            id: nouvelleAttribution.id,
            date: nouvelleAttribution.date,
            hours: nouvelleAttribution.hours,
            Client: user
        }

        return res.status(200).json({
            success: true,
            message: 'Attribution effectuée',
            content: returnDate
        })
    } catch (error) {
        return res.status(200).json({
            success: false,
            message: 'Ressource indisponible',
        })
    }
}