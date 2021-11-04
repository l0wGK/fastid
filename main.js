/**
 * @param {number} length 
 * @returns 
 */

function generate(length) {
    var chars = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm0123456789-_";
    var id = "";
    length = length ? length : 6;

    for (var i = 0; i < length; i++) {
        var random = Math.floor(Math.random() * chars.length);
        id += chars.charAt(random);
    }

    console.log(id);
}

module.exports = { generate };