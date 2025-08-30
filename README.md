# Parole5 — Wordle in italiano (PWA, one‑folder)

Gioco tipo **Wordle** in una sola cartella: `index.html`, `manifest.json`, `sw.js`, `icons/`, `words-it-5.txt`.
- **100% client‑side**: funziona offline, nessun server richiesto.
- **Mobile‑first**: iPhone/Android/iPad + desktop (Windows/macOS/Linux) via browser.
- **Condivisione** stile Wordle (griglia emoji).
- **Dizionario estensibile**: carica migliaia di parole (IT, 5 lettere) via file `.txt`, incolla, o esporta/backup.

## Avvio rapido
1. Pubblica la cartella su GitHub Pages o su qualsiasi hosting statico.
2. Apri l'URL dal telefono e **Aggiungi alla Home** per l'app full‑screen.
3. (Opzionale) In `Dizionario` carica un `.txt` con 5‑lettere italiane per ampliare.
   - Formato: *una parola per riga*, solo lettere A–Z (maiusc./minus.).

## Struttura
```
Parole5_PWA/
  index.html
  manifest.json
  sw.js
  words-it-5.txt        # starter (dimostrativo)
  icons/
    favicon.png
    icon-16.png ... icon-512.png
```

## Note dizionario
Lo **starter** incluso è dimostrativo. Per ottenere il *massimo* set di parole, carica un file `.txt` con il tuo wordlist italiano di 5 lettere (migliaia di voci). Il gioco salva localmente la lista e la usa per:
- validare gli input
- estrarre la parola del giorno (seed deterministico)

## Personalizzazione rapida
- Cambia colori in `:root{...}` dentro `index.html`.
- Sostituisci l'icona in `icons/` per il tuo brand.
- Aggiungi una landing page o analytics, se serve.

---
**Autore:** PezzaliAPP · Open source, one‑folder PWA.


## Lista Estesa (bundled)
- File opzionale: `words-it-5-large.txt` (se presente e attivato dalla spunta **Usa lista estesa** nel menu Dizionario).
- Come usarla: sostituisci il file con un *wordlist italiano* di 5 lettere (migliaia di voci). L'app la userà al posto della lista starter.
- La preferenza viene salvata localmente e può essere cambiata in qualsiasi momento.

## Licenza lista estesa
Il file `words-it-5-large.txt` incluso in questo pacchetto è fornito **CC0 1.0 (Public Domain)** da PezzaliAPP/Il Quarto Attore, v2025-08-30. 
Uso libero, senza restrizioni. Puoi modificarlo, sostituirlo o redistribuirlo.

- Nota: la lista estesa (circa 6000 parole) è ora il dizionario predefinito.
