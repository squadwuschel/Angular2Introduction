switch (process.env.NODE_ENV) {
    case 'prod':
    case 'production':
        module.exports = require('./Config/webpack.prod')({ env: 'production' });
        break;
    case 'dev':
    case 'development':
    default:
        module.exports = require('./Config/webpack.dev')({ env: 'development' });
}