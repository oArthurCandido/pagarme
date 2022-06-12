var express = require('express');
var router = express.Router();
var pagarme = require('../lib/pagarme');
/* POST criação de compras. */
router.post('/', function (req, res, next) {
  pagarme
    .compra(req.body)
    .then(result => {
      const order_id = result.data.id;
      if (result.data.status == 'paid') {
        res.status(201).send({
          Status: 'Ok ',
          Message: 'Compra realizada com sucesso!',
          Id: order_id
        });
      } else {
        res.status(402).send({
          Status: 'Falhou',
          Message:
            'Compra não realizada, problema na cobrança com cartão de crédito =('
        });
      }
    })
    .catch(err => {
      console.error(err);
    });
});

/* GET status de compras. */
router.get('/:compra_id/status/', function (req, res, next) {
  pagarme
    .consulta(req.params.compra_id)
    .then(result => {
      const order_id = result.data.id;
      console.log(order_id);
      console.log(result);
      let message = {};
      console.log();

      switch (result.data.status) {
        case 'authorized':
          message = {
            Status: 'Código ' + result.data.status + ' - Pagamento autorizado!'
          };
          break;
        case 'paid':
          message = {
            Status:
              'Código ' +
              result.data.status +
              ' - Pagamento concluído com sucesso!'
          };
          break;
        case 'processing':
          message = {
            Status: 'Código ' + result.data.status + ' - Pagamento pendente.'
          };
          break;
        default:
          message = {
            Status: 'Código ' + result.data.status + ' - Pagamento falhou.'
          };
      }
      res.send(message);
    })
    .catch(err => {
      console.error(err);
    });
});

module.exports = router;
