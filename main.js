const fastrand = require('fastrand');

/**
 * @param {number} length 
 * @returns 
 */

function generate(length) {
    var chars = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm0123456789-_";
    var id = "";
    length = length ? length : 6;

    for (var i = 0; i < length; i++) {
        var random = fastrand.int(chars.length-1,0);
        id += chars.charAt(random);
    }

    return id;
}

module.exports = { generate };