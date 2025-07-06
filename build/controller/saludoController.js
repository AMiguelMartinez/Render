"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSaludo = exports.updateSaludo = exports.createSaludo = exports.getSaludoById = exports.getAllSaludos = void 0;
const pgDatabase_1 = __importDefault(require("../database/pgDatabase"));
const getAllSaludos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield pgDatabase_1.default.query('SELECT * FROM saludos');
        res.json(result.rows);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getAllSaludos = getAllSaludos;
const getSaludoById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield pgDatabase_1.default.query('SELECT * FROM saludos WHERE id = $1', [req.params.id]);
        res.json(result.rows);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getSaludoById = getSaludoById;
const createSaludo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { saludo } = req.body;
        const result = yield pgDatabase_1.default.query('INSERT INTO saludos (saludo) VALUES ($1)', [saludo]);
        res.json(result.rows);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.createSaludo = createSaludo;
const updateSaludo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const saludo = req.body;
        const result = yield pgDatabase_1.default.query('UPDATE saludos SET saludo = $1 WHERE id = $2', [saludo, req.params.id]);
        res.json(result.rows);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.updateSaludo = updateSaludo;
const deleteSaludo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield pgDatabase_1.default.query('DELETE FROM saludos WHERE id = $1', [req.params.id]);
        res.json(result.rows);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.deleteSaludo = deleteSaludo;
