const fs = require('fs');
const routeDir = `${__dirname}/`;

module.exports = router => {
  fs.readdirSync(routeDir).forEach(routeFile => {
    if (routeFile === 'loader.js') return;
    if (routeFile.includes('swp')) return;
    if (!routeFile.includes('js')) return;

    try {
      require(routeDir + routeFile)(router);
    } catch (error) {
      console.log(`Route ${routeFile} could not be loaded`);
    }
  });
};
