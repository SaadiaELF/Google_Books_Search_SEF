import React, { useContext } from "react";
import BookDescription from "../BookDescription";
import BookHeader from "../BookHeader";
import BtnGroup from "../BtnGroup";
import Col from "../Col";
import Container from "../Container";
import Image from "../Image";
import Row from "../Row";
import BookContext from "../../utils/BookContext"

function Favorites(props) {
    const [savedBooks] = useContext(BookContext);
    return (
        <Container>
            <h3>Saved Books</h3>
            {savedBooks.map(book => (
                <Container key={book.id}>
                    <Row padding="" border="">
                        <Col size="md-9">
                            <BookHeader
                                title={book.title}
                                subtitle={book.subtitle}
                                authors={book.authors}
                            />
                        </Col>
                        <Col size="md-3">
                            <BtnGroup>
                                <a href={book.link} role="button" className="btn btn-secondary" target="_blank" rel="noopener noreferrer" > <i className="far fa-eye"></i> View</a>
                                <button {...props} type="button" className="btn btn-danger" value={book._id} ><i className="fas fa-trash-alt"></i> Delete {props.children}</button>
                            </BtnGroup>
                        </Col>
                    </Row>
                    <Row padding="p-2" border="border">
                        <Col size="md-2">
                            <Image
                                title={book.title}
                                image={book.image}
                            />
                        </Col>
                        <Col size="md-10">
                            <BookDescription
                                description={book.description}
                            />
                        </Col>
                    </Row>
                </Container >
            ))}
        </Container>
    );
}

export default Favorites;