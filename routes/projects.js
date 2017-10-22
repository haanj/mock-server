const mockProjects = [
  { id: 1, clientId: 4, name: 'Sweeny\'s Project' },
  { id: 2, clientId: 4, name: 'Sweeny\'s Project 2' },
  { id: 3, clientId: 7, name: 'Donald\'s Project' },
  { id: 4, clientId: 7, name: 'Donald\'s Project 2' },
  { id: 5, clientId: 4, name: 'Sweeny\'s Project 6' },
  { id: 6, clientId: 4, name: 'Sweeny\'s Project 7' },
  { id: 7, clientId: 9, name: 'Mickey\'s Project' },
  { id: 8, clientId: 9, name: 'Mickey\'s Project 2' },
  { id: 9, clientId: 9, name: 'Mickey\'s Project 3' },
  { id: 10, clientId: 5, name: 'Todd\'s Project' },
  { id: 11, clientId: 5, name: 'Todd\'s Project 2' },
  { id: 12, clientId: 4, name: 'Sweeny\'s Project 3' },
  { id: 13, clientId: 4, name: 'Sweeny\'s Project 4' },
  { id: 14, clientId: 2, name: 'Albert\'s Project' },
  { id: 15, clientId: 2, name: 'Albert\'s Project 2' },
  { id: 16, clientId: 4, name: 'Sweeny\'s Project 5' },
  { id: 17, clientId: 1, name: 'Frank\'s Project' },
  { id: 18, clientId: 1, name: 'Frank\'s Project 2' },
  { id: 19, clientId: 4, name: 'Sweeny\'s Project' },
  { id: 20, clientId: 7, name: 'Donald\'s Project 3' },
];

module.exports = router => {
  router.route('/project')
    .get((req, res) => {
      res.json(mockProjects);
    });
};
