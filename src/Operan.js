import React, { Component } from 'react'

export default class Operan extends Component {
    // GantiMakanan = (baru) => {
    //     this.setState({ makanan: baru })
    // }
    render() {
        const { makanan, GantiMakanan } = this.props;
        return (
            <div>
                <h2>Operan State Yang Jadi Props : {makanan}</h2>
                <button onClick={() => GantiMakanan("Nasi")}>Ubah Makanan</button>
            </div>
        )
    }
}
