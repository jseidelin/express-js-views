
module.exports = (data) => `
    <ul>
        ${data.items.map(item => `
            <li>${item}
        `).join("")}
    </ul>
`;
