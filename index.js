'use strict';

module.exports = lando => {
    lando.events.on('post-bootstrap-config', () => {
        lando.log.info('Skipper plugin loaded');
    });
};
