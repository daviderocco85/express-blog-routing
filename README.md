# Express Blog Routing

Progetto backend in **Express.js** che gestisce un semplice blog tramite routing modulare. Include endpoint **RESTful** per operazioni **CRUD** sui post e un dataset statico restituito in formato JSON.

# Obiettivi

Il lavoro prevede la creazione di un router dedicato all’entità post, definito nel file `routers/posts.js`. 
Il router espone le rotte **RESTful** necessarie per le operazioni **CRUD**:

- **Index (GET /posts)** – restituisce la lista dei post.

- **Show (GET /posts/:id)** – restituisce un singolo post.

- **Create (POST /posts)** – crea un nuovo post.

- **Update (PUT/PATCH /posts/:id)** – aggiorna un post esistente.

- **Delete (DELETE /posts/:id)** – elimina un post.

Ogni endpoint risponde con un messaggio o con dati JSON che confermano l’operazione richiesta, seguendo le convenzioni **REST**.
Il router viene registrato all’interno dell’applicazione principale tramite `app.use('/posts', posts)` per associare tutte le rotte al prefisso `/posts`.

## Nota

Viene riutilizzato, da un precedente lavoro, un dataset statico (`data/postsList.js`) contenente una lista di post con campi strutturati (`id`, `title`, `content`, `image`, `tags`). Questo array viene usato come fonte dati per testare le rotte **RESTful** del router dei post.

## Bonus

- Restituire la lista dei post dalla rotta index, in formato JSON.
- Restituire un singolo post dalla rotta show, sempre in formato JSON.

## Test Postman

Cartella per visualizzare gli screenshot dei test Postman. 
[postman/images_test](/postman/images_test/)