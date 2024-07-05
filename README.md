# Progetto Settimanale Quizzone - Build Week 1

Questo repository contiene l'implementazione del progetto "Quizzone", il test settimanale del corso Epicode. L'obiettivo è replicare la pagina benchmark che la piattaforma di Epicode utilizzata nei nostri test teorici settimanali, creando un sito web completamente funzionale con quattro pagine distinte.

## Indice
- [Panoramica del Progetto](#panoramica-del-progetto)
- [Tecnologie Utilizzate](#tecnologie-utilizzate)
- [Installazione](#installazione)
- [Utilizzo](#utilizzo)
- [Descrizione delle Pagine](#descrizione-delle-pagine)
- [Features interessanti](#Features-interessanti)
- [Contributi](#contributi)
- [Licenza](#licenza)

## Panoramica del Progetto

Il "Quizzone" è il nostro progetto di ricreare la pagina di benchmark, dedicata all'informatica, della piattaforma EPICODE include:
1. Una pagina di benvenuto con un paragrafo che spiega le regole del quiz.
2. La pagina del quiz dove gli utenti devono selezionare la risposta corretta entro un tempo prestabilito.
3. Una pagina dei risultati che mostra la performance dell'utente con un grafico.
4. Una pagina di feedback dove gli utenti possono lasciare una valutazione e una recesnione del corso.

## Tecnologie Utilizzate

- **HTML**: Struttura delle pagine web.
- **CSS**: Stile delle pagine web.
- **JavaScript**: Interattività e funzionalità.
- **D3.js**: Libreria utilizzata per creare il grafico dei risultati e animare il timer.
- **html2pdf.js**: Libreria utilizzata stampare il certificato del quiz

## Installazione

Per configurare questo progetto localmente, segui questi passaggi:

1. Clona il repository:
    ```sh
    git clone https://github.com/antoniocostantin/Building-Week-1.git
    ```

2. Naviga nella directory del progetto:
    ```sh
    cd quizzone
    ```

3. Utilizzare il comando `npm i` da terminale per implementare i pacchetti del progetto;


4. Apri `index.html` nel tuo browser preferito per iniziare.


## Utilizzo

1. Apri `index.html` per visualizzare la pagina di benvenuto e le regole del quiz.
2. Spunta la casella e clicca il tasto `proced` per accedere alla pagina del quiz.
3. Seleziona la risposta giusta entro il tempo stabilito.
4. Dopo aver completato il quiz, i risultati verrano automaticamente visualizzati nella pagina.
5. Clicca su `rate us` lascia una valutazione del corso nella pagina di feedback.
6. Se possibile puoi premere su `Print Certificate` per stampare il tuo certificato

## Descrizione delle Pagine

1. **Index**: Pagina di benvenuto con una spiegazione delle regole del quiz.
2. **Quiz**: Pagina del quiz con domande a scelta multipla e un timer animato.
3. **Risultati**: Pagina dei risultati con un grafico delle performance creato con D3.js.
4. **Feedback**: Pagina per lasciare una valutazione e un commento sul corso.

## Features interessanti

Per l'ottimizzazione della selezione casuale delle domande si è scelto un algoritmo particolare:
Viene utilizzato un array che contiene tutti gli indici disponibili `indexAvailable` che in prima battuta conterrà tutti gli indici dell'array delle domande che verrà fornito.
Per la selezione casuale della domanda viene utilizzta la funzione `ShowNewQuestion` la quale sceglierà un l'indice casuale della domanda da visualizzare tramite `getRandomIndex`.
`getRandomIndex` genera un valore causale da 0 all'ultimo indice del array fornito e lo utilizza come indice per estrarne il dato (in questo caso uno degli indici disponibili) e successivamente per rimuoverlo dall'array che lo conteneva.

Questo algoritmo apporta una eccellente ottimizzazione in caso di pochi indici rimasti in quanto non si cicla la generazione del numero casuale ma bensì si fa la scelta casuale dei soli indici disponibili.

```javascript
function ShowNewQuestion() {
    const randomIndex = getRandomIndex(indexAvailable);
    const randomQuestion = questions[randomIndex];
    ...
}
```

```javascript
function getRandomIndex(arr) {
    let randomNum = RandomNumberGenerator(0, arr.length - 1);
    let randomIndex = arr[randomNum];
    arr.splice(randomNum, 1);
    return randomIndex
}
```



## Contributi

I contributi sono benvenuti! Sentiti libero di fare un fork del progetto, aprire una issue o creare una pull request.

## Licenza

Questo progetto è distribuito sotto la licenza MIT. Vedi il file [LICENSE](LICENSE) per ulteriori dettagli.
