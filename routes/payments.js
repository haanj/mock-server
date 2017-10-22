const mockPayments = [
  {
    id: 1,
    clientId: 4,
    projectId: 5,
    amount: 4300,
  },
  {
    id: 2,
    clientId: 1,
    projectId: 17,
    amount: 100,
  },
];

module.exports = router => {
  router.route('/project')
    .get((req, res) => {
      res.json(mockPayments);
    });
};
