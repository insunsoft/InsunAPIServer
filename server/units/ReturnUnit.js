'use strict';
module.exports = {

    returnSuccessJson: function ( msg, data) {
        return {
            code: 'Success',
            msg: msg,
            data: data
        };
    },
    returnErrorJson: function (msg) {
        return {
            code: 'Error',
            msg: msg
        };
    }
}


