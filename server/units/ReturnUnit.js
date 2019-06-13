'use strict';
module.exports = {

    returnSuccessJson: function (msg, data) {
        return {
            code: 'Success',
            msg: msg,
            data: data
        };
    },
    returnErrorJson: function (msg, data) {
        return {
            code: 'Error',
            msg: msg,
            data: data
        };
    },
    returnInfoJson: function (msg, data) {
        return {
            code: 'Info',
            msg: msg,
            data: data
        };
    },
}


