/* eslint-disable react/jsx-curly-newline */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { BookType, BooksObjectTypes } from "./store/types";
import Loading from "./components/Loading";
import Error from "./components/Error";
import Footer from "./components/Footer";

export type BooksStoreProps = {
    books: BooksObjectTypes;
    loadUp: () => void;
    loading: boolean;
    error: boolean;
    deleteBook: (id: number) => void;
}; // Types for props

const BooksStore = ({
    books,
    loadUp,
    loading,
    error,
    deleteBook,
}: BooksStoreProps) => {
    useEffect(() => {
        loadUp();
    }, [loadUp]); // Load books before the component did mount

    return (
        <div className="books-store-container">
            {books && loading && (
                <div className="books-store-add-box">
                    <Link to="/add">
                        <span className="books-store-add">
                            Add
                            <FontAwesomeIcon
                                icon={faPlus}
                                className="books-store-add-icon"
                            />
                        </span>
                    </Link>
                </div>
            )}
            <div className="books-store-content">
                {books &&
                    loading &&
                    books.data.map((book: BookType) => (
                        <div
                            className="books-store-book"
                            key={`${book}_${book.id}`}
                        >
                            <h3 className="books-store-book-title">
                                {book.title}
                            </h3>
                            <p className="books-store-book-author">
                                {book.author}
                            </p>
                            <p className="books-store-book-ISBN">{book.ISBN}</p>
                            <div className="books-store-book-configure">
                                <div className="books-store-book-edit-box">
                                    <a href={`/edit/${book.id}`}>
                                        <span className="books-store-book-edit">
                                            Edit
                                        </span>
                                    </a>
                                </div>
                                <div className="books-store-book-delete-box">
                                    <span
                                        className="books-store-book-delete"
                                        onClick={() => {
                                            deleteBook(book.id);
                                        }}
                                    >
                                        Delete
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
            {!loading && (
                <div className="loading-box">
                    <Loading />
                </div>
            )}
            {loading && error && <Error />}
            <Footer />
        </div>
    );
};

export default BooksStore;
