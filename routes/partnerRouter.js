const express = require('express');
const partnerRouter = express.Router();

partnerRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

.get((req, res) => {
    res.end('Will send all the partners to you');
})

.post((req, res) => {
    res.end(`Will add the partner: ${req.body.name} with description: ${req.body.description}`);
})

.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /partners');
})

.delete((req, res) => {
    res.end('Deleting all campsites');
});

partnerRouter.route('/:partnerId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

.get((req, res) => {
    res.end('Will get partner with that id');
})

.post((req, res) => {
    res.end(`Will add partner with that id: ${req.params.partnerId}`);
})

.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /partnerId');
})

.delete((req, res) => {
    res.end('Deleting the partner with the id');
});

;



module.exports = partnerRouter;