import React, { Component } from 'react'
import Movies from "../Movies.json"


export default class catalog extends Component {
    render() {
        const film = Movies.find(movie => {
            return movie.id === Number(this.props.match.params.id)
        })
        return (
            <div>
                
                 <div>
                     <img src={film.image} alt=" "/>
                     <h2>Title :{film.title}</h2>
                     <p>{film.description}</p>
                     <p><strong>Director : </strong> {film.director}</p>
                     <div><strong>Stars : </strong>{film.stars}</div>
                 </div>
                
            </div>
        )
    }
}
