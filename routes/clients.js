const mockClients = [
  { id: 1, name: 'Frank' },
  { id: 2, name: 'Albert' },
  { id: 4, name: 'Sweeney' },
  { id: 7, name: 'Donald' },
  { id: 9, name: 'Mickey' },
  { id: 5, name: 'Todd' },
];


module.exports = router => {
  router.route('/client')
    .get((req, res) => {
      res.json(mockClients);
    });
};

