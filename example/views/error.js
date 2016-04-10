const layout = require("./layout");
const merge = require("lodash/merge");

module.exports = (data) => layout(merge({}, data, {
    title: data.message,
    body: `
        <h1>${data.message}</h1>
        <h2>${data.error.status}</h2>
        <pre>${data.error.stack}</pre>
    `
}));
