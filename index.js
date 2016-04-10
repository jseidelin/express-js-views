"use strict";

const fs = require("fs");

module.exports = function(filePath, options, callback) {
    fs.exists(filePath, (exists) => {
        if (exists) {
            try {
                if (!options.cache) {
                    delete require.cache[require.resolve(filePath)];
                }
                const template = require(filePath);
                if (typeof template === "function") {
                    const content = template(options);
                    callback(null, String(content));
                } else {
                    callback(new TypeError("Template is not a function"));
                }
            } catch(e) {
                callback(new Error(e));
            }
        } else {
            callback(new Error("Template does not exists"));
        }
    });
};