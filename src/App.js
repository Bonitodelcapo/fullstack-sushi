import React, {Component} from 'react';

import Navbar from './components/navbar';
import Card from './components/card';

import california from './images/california.png';
import dragon from './images/dragon.png';
import dynamite from './images/dynamite.png';
import philadelphia from './images/philadelphia.png';
import rainbow from './images/rainbow.png';
import shrimp from './images/shrimp.png';

class App extends Component {
  state = {
    cards: [
      {id : 0, nome: "California", immagine: california, prezzo: 1.99},
      {id : 1, nome: "Dragon", immagine: dragon, prezzo: 1.99},
      {id : 2, nome: "Dynamite", immagine: dynamite, prezzo: 1.99},
      {id : 3, nome: "Philadelphia", immagine: philadelphia, prezzo: 1.99},
      {id : 4, nome: "Rainbow", immagine: rainbow, prezzo: 1.99},
      {id : 5, nome: "Shrimp", immagine: shrimp, prezzo: 1.99}

    ]
  }
  render() {
    return (
      <>
        <Navbar />
        <div className='container'>
          <h1>Cosa desideri ordinare?</h1>
          <hr />
          <div className='row'>
            {this.state.cards.map(card => (
              <Card
                key={card.id}
                card={card} />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default App;


// riga 35-38: a sinistra sono referenziati i props come definiti in card.js. a destra {card.props}
// abbiamo preso come riferimento la lista 'cards' contenuto nello state attuale. Per ogni oggetto card 
// presente in questa lista abbiamo creato un componente React "Card".
// poi abbiamo assegnato ai suoi prop (del component Card in card.js) i relativi valori dell'oggetto card (definito nella lista)