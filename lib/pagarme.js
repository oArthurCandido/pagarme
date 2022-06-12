const axios = require('axios').default;

class Pagarme {
  static compra(params) {
    return axios.post('https://api.pagar.me/core/v5/orders/', params, {
      headers: {
        Accept: 'application/json',
        Authorization: 'Basic c2tfdGVzdF9OV3k4a0pWWGhqQzZrOXpQOg==',
        'Content-Type': 'application/json'
      }
    });
  }

  // Deixei comentado o trecho abaixo, pq ao invés de fazer o pedido e depois a captura, unifiquei o pedido com a captura alterando o body da requisição de compra.
  // static captura(paymentId) {
  //   return axios.post(
  //     `https://api.pagar.me/core/v5/charges/${paymentId}/capture`,
  //     {
  //       headers: {
  //         Accept: 'application/json',
  //         Authorization: 'Basic c2tfdGVzdF9OV3k4a0pWWGhqQzZrOXpQOg==',
  //         ContentType: 'application/json'
  //       }
  //     }
  //   );
  // }

  static consulta(order_id) {
    return axios.get(
      `https://api.pagar.me/core/v5/orders/${order_id}`,
      {},
      {
        headers: {
          Accept: 'application/json',
          Authorization: 'Basic c2tfdGVzdF9OV3k4a0pWWGhqQzZrOXpQOg=='
        }
      }
    );
  }
}

module.exports = Pagarme;
