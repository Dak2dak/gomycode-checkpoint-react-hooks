import React from 'react';
import MovieList from './MovieList';
import { FaSearch } from 'react-icons/fa';
import { FormControl, Button, Form, Container } from 'react-bootstrap';



const SearchBar = () => {
    return (
        <Form className="d-flex">
            <FormControl
                type="search"
                placeholder="Search for a movie"
                className="me-2"
                aria-label="Search"
            />
            <Button variant="outline-success">
                <FaSearch />
            </Button>
        </Form>
    );
};



export default function Index(props) {
    return (
        <>
            <Container>
                <div className="m-6" style={{width: "500px", backgroundColor: "blue"}}>
                    <SearchBar/>
                </div>
                <MovieList movies = {props.movies}  />
            </Container>
        </>
    )
}
