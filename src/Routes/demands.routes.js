const DemandController = require('../Controllers/DemandController');
const { verifyJWT } = require('../Utils/functionsJWT');

const DemandsRoutes = (routes) => {
  routes.get('/demand', verifyJWT, DemandController.demandGet);
  routes.get('/demand/newest-four', verifyJWT, DemandController.newestFourDemandsGet);
  routes.get('/demand/:id', verifyJWT, DemandController.demandId);
  routes.post('/demand/create', verifyJWT, DemandController.demandCreate);
  routes.put('/demand/update/:id', verifyJWT, DemandController.demandUpdate);
  routes.put('/demand/sectorupdate/:id', verifyJWT, DemandController.updateSectorDemand);
  routes.put('/demand/forward/:id', verifyJWT, DemandController.forwardDemand);
  routes.put('/demand/toggle/:id', verifyJWT, DemandController.toggleDemand);
  routes.get('/clientsNames', verifyJWT, DemandController.demandGetWithClientsNames);
  routes.put('/demand/create-demand-update/:id', verifyJWT, DemandController.createDemandUpdate);
  routes.put('/demand/update-demand-update/:id', verifyJWT, DemandController.updateDemandUpdate);
  routes.put('/demand/delete-demand-update/:id', verifyJWT, DemandController.deleteDemandUpdate);
  routes.get('/demand/history/:id', verifyJWT, DemandController.history);
  routes.get('/statistic/category', verifyJWT, DemandController.demandsCategoriesStatistic);
  routes.get('/statistic/sector', verifyJWT, DemandController.demandsSectorsStatistic);
};

module.exports = { DemandsRoutes };