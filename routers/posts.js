import express from 'express';
import { postsList } from '../data/postsList.js';

export const posts = express.Router();

// Index che restituisce la lista di tutti gli articoli in formato JSON 
posts.get('/', (req, res) => {
    res.json(postsList);
});

// Show dell'articolo con specifico id
posts.get('/:id', (req, res) => {
    res.send(`Articolo del blog con id: ${req.params.id}`);
});

// Create 
posts.post('/', (req, res) => {
    res.send(`Creazione dell'articolo del blog`);
});

// Update totale
posts.put('/:id', (req, res) => {
    res.send(`Aggiornamento totale dell'articolo del blog con id: ${req.params.id}`);
});

// Update parziale
posts.patch('/:id', (req, res) => {
    res.send(`Aggiornamento parziale dell'articolo del blog con id: ${req.params.id}`);
});

// Delete
posts.delete('/:id', (req, res) => {
    res.send(`Eliminazione dell'articolo del blog con id: ${req.params.id}`);
});
