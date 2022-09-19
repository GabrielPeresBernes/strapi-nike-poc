'use strict';

/**
 * vitrine service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::vitrine.vitrine');
