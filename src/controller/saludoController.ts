import pool from '../database/pgDatabase';
import { Request, Response } from 'express';
import { Saludo } from '../types/saludo.js';

export  const getAllSaludos = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM saludos');
        res.json(result.rows);
    }
    catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}
   
export const getSaludoById = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM saludos WHERE id = $1', [req.params.id]);
        res.json(result.rows);
    }
    catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export const createSaludo = async (req, res) => {
    try {
        const { saludo } = req.body;
        const result = await pool.query('INSERT INTO saludos (saludo) VALUES ($1)', [saludo]);
        res.json(result.rows);
    }
    catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export const updateSaludo = async (req, res) => {
    try {
        const saludo = req.body;
        const result = await pool.query('UPDATE saludos SET saludo = $1 WHERE id = $2', [saludo, req.params.id]);
        res.json(result.rows);
    }
    catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteSaludo = async (req, res) => {
    try {
        const result = await pool.query('DELETE FROM saludos WHERE id = $1', [req.params.id]);
        res.json(result.rows);
    }
    catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}
;