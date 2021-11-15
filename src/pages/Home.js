import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Movies from "../Movies.json"
export default class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    {Movies.map((movie) => (
                        <Link
                            key={movie.id}
                            to={`/${movie.id}`}
                        >
                            <p>{movie.title}</p>
                        </Link>
                    ))}
                </div>
            </div>
        )
    }
}
