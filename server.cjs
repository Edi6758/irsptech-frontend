const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const db = router.db;

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Rota customizada para atualizar a ordem dos IDs dos usuários
server.put('/userOrder', (req, res) => {
  const userOrder = req.body;

  // Atualizar a ordem no objeto 'db'
  db.set('userOrder', userOrder).write();

  res.status(200).json(userOrder);
});

server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running');
});
