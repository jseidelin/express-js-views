module.exports = (data) => `
    <!DOCTYPE html>
    <html>
    <head>
        <title>${data.title}</title>
        <link rel='stylesheet' href='/stylesheets/style.css' />
    </head>
    <body>
        ${data.body}
    </body>
    </html>
`;
