const Hapi = require('hapi');

const Settings = require('./settings');
const server = new Hapi.Server({ port: Settings.port });
const Routes = require('./lib/route');

server.route(Routes);

/*server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => 'Hello, World!'
});
*/
const init = async () => {
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};
process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});
init();