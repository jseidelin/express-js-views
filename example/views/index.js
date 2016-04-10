const layout = require("./layout");
const list = require("./components/list");
const _ = require("lodash");

module.exports = (data) => layout(_.merge({}, data, {
    body: `
        <h1>${data.title}</h1>
        <p>Welcome to ${_.escape(data.title)}</p>
        ${list({
            items: data.listofthings.map(x => `<i>${x}</i>`)
        })}
    `
}));
