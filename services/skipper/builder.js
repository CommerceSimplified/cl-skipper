'use strict';

const _ = require('lodash');

module.exports = {
    name: 'skipper',
    config: {
        version: 'latest',
        supported: ['latest'],
        configFile: 'skipper.yaml',
    },
    parent: '_service',
    builder: (parent, config) => class LandoSkipper extends parent {
        constructor(id, options = {}) {
            options = _.merge({}, config, options);
            const skipper = {
                image: 'commercelabs/zephyr-skipper:latest',
                command: '/go/ws/bin/skipper -routes-file /app/routes/default.eskip',
                // Internal ports
                expose: ['9901'],
                ports: [
                    '9901',
                ],
                volumes: [],
            };

            // Send it downstream
            super(id, options, {services: _.set({}, options.name, skipper)});
        };
    },
};
