'use strict';

const _ = require('lodash');

const mapTrashbins = data => {
    return {
        count: data.totalFeatures,
        trashbins: _.map(data.features, feature => {
            return {
                id: feature.id,
                location: {
                    lat: feature.geometry.coordinates[0],
                    lng: feature.geometry.coordinates[1]
                },
                type: feature.properties.TYYPPI
            }
        })
    };
};

module.exports = {
    mapTrashbins
};
