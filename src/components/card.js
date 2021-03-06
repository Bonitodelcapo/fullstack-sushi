import {Component} from 'react'
import App from '../App';

class Card extends Component {
    render () {
        return(
            <div className="col">
                <div className="card" style={{ width: '18rem', textAlign: 'center'}}>
                    <button onClick={() => this.props.onIncrement(this.props.card)} className="btn btn-primary">
                        Aggiungi <span className='badge badge-light'>{this.props.card.quantità}</span></button>
                    <img src= {this.props.card.immagine} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.card.nome} Roll</h5>
                        <p className="card-text">€{this.props.card.prezzo}</p>
                        <button onClick={() => this.props.onDelete(this.props.card.id)} className="btn btn-outline-danger">
                            Elimina</button>
                    </div>
                </div> 
            </div>
        );
    }
}

export default Card;

// abbiamo cambiato l'oggetto card da function() a class perche solo in questo modo si possono passare dei parametri 
// per renderlo un oggetto riutilizzabile al 100%
// per poterlo fare abbiamo cambiato anche App.js da una function ad una class 

// props sono gli attributi che vengono passati da un componente padre ad un componente figlio
// this è semplicemente un prefisso che identifica l'istanza del componente Card 



