import React, { Component } from 'react'
import Operan from './Operan';

export default class StateProps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            makanan: 'Bakso',
        }
    }

    GantiMakanan = (baru) => {
        this.setState({ makanan: baru })
    }
    render() {
        return (
            <div>
                <h2>{this.state.makanan}</h2>
                <button onClick={() => this.GantiMakanan("Nasi")}>Ubah Makanan</button>
                <Operan makanan={this.state.makanan} GantiMakanan={this.GantiMakanan} />
            </div>
        )
    }
}
