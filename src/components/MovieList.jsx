import React from "react";
import MovieCard from "./MovieCard";
import { Row, Col, Container } from "react-bootstrap";

function MovieList (props) {

        const {movies, add} = props;
    return (
        <>
            <Container>
                <Row>
                    {movies.map( movie => (
                        <Col sm={12} md={6} lg={3}>
                            <MovieCard movie = {movie} add = {add}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}

export default MovieList;