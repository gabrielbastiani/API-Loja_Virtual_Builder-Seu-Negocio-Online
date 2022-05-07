module.exports = {
    mode: process.env.NODE_ENV === 'production' ? "live" : 'sandbox',
    sandbox: process.env.NODE_ENV === 'production' ? false : true,
    sandbox_email: process.env.NODE_ENV === 'production' ? null : 'c03519777659762901091@sandbox.pagseguro.com.br',
    email: 'gabriel.bastiani@hotmail.com.br',
    token: '01E5B11FFD1F432E9C2179B867A71A5D',
    notificationURL: "https://apiloja.builderseunegocioonline.com.br/v1/api/pagamentos/notificacao",
};