module.exports = router => {
  router.route('/hello')
    .get((req, res) => res.send('Hello World'));
};
