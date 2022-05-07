module.exports = {
    secret: process.env.NODE_ENV === "production" ? process.env.SECRET : "secret",
    api: process.env.NODE_ENV === "production" ? "https://apiloja.builderseunegocioonline.com.br" : "http://localhost:3000",
    loja: process.env.NODE_ENV === "production" ? "https://loja.builderseunegocioonline.com.br" : "http://localhost:8000"
};