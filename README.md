# Outgunned — Localizzazione italiana per Foundry VTT

Localizzazione italiana del sistema **Outgunned** per Foundry Virtual Tabletop, curata da Serial Gamer Italia.

## Stato del progetto

La prima versione del dizionario italiano è stata creata e verificata rispetto al file inglese della versione 14.5 del sistema. Le 404 chiavi risultano presenti anche nella localizzazione italiana. La revisione terminologica è stata allineata al manuale italiano di Outgunned.

La localizzazione è distribuita come **modulo separato**: Foundry carica prima le traduzioni del sistema e poi quelle dei moduli attivi; in questo modo le stringhe italiane del modulo possono sostituire quelle inglesi del sistema Outgunned.

**Versione corrente:** 0.2.2 — prima versione tecnica del modulo, non ancora collaudata in un'istanza Foundry reale.

## Requisiti

- Foundry Virtual Tabletop 14.
- Sistema di gioco Outgunned installato e attivo (ID: `outgunned`).
- Modulo Outgunned — Localizzazione Italiana attivato nel mondo.

Il progetto è stato ricavato dal sistema upstream [cragstone/outgunned](https://github.com/cragstone/outgunned), la cui versione del manifest esaminata è 14.5 e dichiara compatibilità con Foundry 14.368.

## Installazione

1. Apri **Setup** in Foundry VTT.
2. Seleziona **Install Module**.
3. Nel campo **Manifest URL** incolla:

   `https://raw.githubusercontent.com/SerialGamerItalia/outgunned-italiano/main/module.json`

4. Installa **Outgunned — Localizzazione Italiana**.
5. Apri il mondo di gioco, vai in **Impostazioni → Gestione moduli** e attiva il modulo.
6. In **Impostazioni → Configura impostazioni → Generale → Lingua**, seleziona **Italiano** e ricarica il mondo.

Se il modulo è già installato, aggiorna il pacchetto dal menu di Setup e riavvia il mondo.

## Ambito della traduzione

- Dizionario dell'interfaccia: `lang/it.json`.
- Etichette e terminologia delle schede di Eroe, Nemico, Regista, Inseguimento, Missione, Supporto e Supereroe, per quanto gestite dalle chiavi di localizzazione del sistema.
- Tipi di Attori ed Elementi, impostazioni, finestre, messaggi e risultati di tiro che utilizzano le chiavi localizzate.
- Correzioni mirate per alcuni testi hard-coded del sistema (promemoria Tiro Pericoloso, placeholder dei nomi e avvisi di macro).

## Cosa non è ancora certificato

- Il collaudo in un'installazione reale di Foundry VTT 14.
- La copertura dei testi inseriti direttamente nel codice o nei template senza passare dal dizionario.
- La traduzione dei contenuti dei compendi ufficiali o di esempio: non vengono copiati né redistribuiti da questo progetto.
- L'eventuale differenza di comportamento nelle versioni future del sistema Outgunned.

Segnalazioni di stringhe rimaste in inglese o problemi di visualizzazione possono essere aperte nella sezione Issues di questa repository.

## Attribuzioni e diritti

Outgunned è © Two Little Mice. Questa è una localizzazione fan-made non ufficiale e non è approvata né supportata da Two Little Mice o dall'autore del sistema Foundry.

Il codice e le strutture del sistema di riferimento sono disponibili nel repository upstream. La licenza MIT del progetto originale non si estende ai contenuti dei compendi. Questa repository non include manuali, illustrazioni, schede editoriali o compendi ufficiali.

## Repository

- Localizzazione italiana: https://github.com/SerialGamerItalia/outgunned-italiano
- Sistema Foundry originale: https://github.com/cragstone/outgunned
