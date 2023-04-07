/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    firstName: {
      type: 'string',
      columnName: 'first_name',
      required: true,
      minLength: 2
    },

    lastName: {
      type: 'string',
      columnName: 'last_name',
      allowNull: true
    },

    username: {
      type: 'string',
      isNotIn: ['admin', 'super-admin', 'user'],
      maxLength: 10
    },

    twitterURL: {
      type: 'string',
      columnName: 'twitter_url',
      isURL: true
    },

    email: {
      type: 'string',
      isEmail: true,
      allowNull: false,
      required: true
    },

    age: {
      type: 'number',
      isInteger: true,
      defaultsTo: 18,
      min: 16,
      max: 120
    },

    role: {
      type: 'string',
      isIn: ['user', 'admin', 'super-admin'],
      defaultsTo: 'user'
    },

    petName: {
      type: 'ref',
      isString: true,
      isNotEmptyString: true
    },

    favFrameworks: {
      type: 'json',
      isNumber: true
    },

    ip: {
      type: 'string',
      isIp: true
    },

    hasAgreedToTerms: {
      type: 'ref',
      isBoolean: true
    },

    themeColor: {
      type: 'string',
      isHexColor: true
    },

    uuid: {
      type: 'string',
      isUUID: true
    },

    creditCard: {
      type: 'string',
      isCreditCard: true
    },

    workEmail: {
      type: 'string',
      regex: /\W+@sailscasts\.com/L
    },

    country: {
      type: 'string',
      custom: function(country) {
        return ['Ghana', 'Nigeria', 'Kenya'].includes(country)
      }
    }
    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

