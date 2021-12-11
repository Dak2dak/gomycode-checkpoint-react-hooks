import React from "react";
import MovieCard from "./MovieCard";
import { Row, Col, Container } from "react-bootstrap";

function MovieList (props) {

    const {movies, add} = props;
    return (
        <>
            <Container>
                <Row></Row>
            </Container>
        </>
    );
}

export default MovieList;