## ESERCIZIO 
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.  
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

1. il prezzo del biglietto è definito in base ai km (0.21 € al km)
2. va applicato uno sconto del 20% per i minorenni
3. va applicato uno sconto del 40% per gli over 65.  

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

## SOLUZIONE
### Raccolta dei dati

1. Chiedere all'utente il numero dei chilometri da percorrere;
2. Chiedere all'utente la sua età; 

### Logica del programma

1. Moltiplicare i chilometri inseriti per 0.21
2. SE l'utente è over 65 applicare lo sconto del 40%;  
   SE l'utente è minorenne applicare lo sconto del 20%;  
   ALTRIMENTI non applicare nessuno sconto
3. preparare il prezzo totale del viaggio arrotondato a due cifre decimali

## Output 

Stampa del prezzo finale nel file html