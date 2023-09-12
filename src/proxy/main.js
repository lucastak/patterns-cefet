"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cliente_1 = require("./Cliente");
var ProxyBD_1 = require("./ProxyBD");
var proxy = new ProxyBD_1.ProxyBD();
var client = new Cliente_1.Cliente(proxy);
client.getVendas();
client.getVendas();
