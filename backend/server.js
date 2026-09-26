// Start the server in this file.
// here name app doesn't require to same as app file.
// because we are declaring it in a new variable.
const app = require("./src/app");

app.listen(3000, '0.0.0.0', () => {
    console.log("server start on the port 3000");
})