/* eslint-disable react/jsx-curly-newline */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { BooksObjectTypes, BookType } from "../store/types";
import Loading from "./Loading";
import Error from "./Error";
import Footer from "./Footer";

type RouteIDType = {
    id: string;
};

interface EditBookProps extends RouteComponentProps<RouteIDType> {
    book: BooksObjectTypes;
    loading: boolean;
    error: boolean;
    editBook: (data: BookType, id: number) => void;
    loadUpBook: (id: number) => void;
} // Types for props, also here is using Router props for match param

const EditBook = ({
    match,
    loading,
    error,
    editBook,
    book,
    loadUpBook,
}: EditBookProps) => {
    const [postData, setPostData] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);
    const [title, setTitle] = useState<string>("");
    const [titleError, setTitleError] = useState<boolean>(false);
    const [author, setAuthor] = useState<string>("");
    const [authorError, setAuthorError] = useState<boolean>(false);
    const [ISBN, setISBN] = useState<string>("");
    const [ISBNError, setISBNError] = useState<boolean>(false);

    useEffect(() => {
        loadUpBook(Number(match.params.id)); // We load book with special id, which we take from url | Router (match.params.id)
    }, [loadUpBook, match.params.id]);

    // The validation principle is based on checking a length of the text and that
    // have to be bigger 3 and not be the same like previous value
    // If you have a question about: "Why can I change only a full book?"
    // and "Why can`t I change only a one param of the book?"
    // I can explain that, it is created in this way for simpler function working
    // The main duty of this work is showing the basic principle of the PUT method working
    // And it can be modified without any problems
    // P. S. If you are reading this, have a good day ;)
    function validateForm(event: React.FormEvent) {
        const {
            data: { id },
        } = book; // Destructing

        if (title.length <= 3 || title === book.data.title) {
            setTitleError(true);
        }
        if (author.length <= 3 || author === book.data.author) {
            setAuthorError(true);
        }
        if (ISBN.length <= 3 || ISBN === book.data.ISBN) {
            setISBNError(true);
        }
        if (
            title.length >= 3 &&
            author.length >= 3 &&
            ISBN.length >= 3 &&
            title !== book.data.title &&
            author !== book.data.author &&
            ISBN !== book.data.ISBN
        ) {
            editBook(
                {
                    id,
                    title,
                    author,
                    ISBN,
                },
                id
            ); // Send data

            setPostData(true); // The form is confirmed

            setSuccess(true); // Show the success message

            setTimeout(() => {
                setSuccess(false);
            }, 3000); // Disapeare the success message
        }

        event.preventDefault(); // Don`t reload a page
    }
    return (
        <div className="edit-book-container">
            <div className="edit-book-link-box">
                <a href="/" className="edit-book-link-back">
                    <FontAwesomeIcon
                        icon={faArrowLeft}
                        className="edit-book-link-back-icon"
                    />
                    Back
                </a>
            </div>
            <div className="edit-book-header-title-box">
                <h2 className="edit-book-header-title">Edit Book</h2>
            </div>
            {book && loading && (
                <form
                    className="edit-book-form"
                    onSubmit={e => {
                        validateForm(e);
                    }}
                >
                    <div className="edit-book-title-box">
                        <input
                            type="text"
                            className={`edit-book-title ${
                                titleError ? "errorField" : ""
                            }`}
                            placeholder={book.data.title}
                            value={title}
                            onChange={e => {
                                setTitle(e.target.value);
                            }}
                        />
                    </div>
                    <div className="edit-book-author-box">
                        <input
                            type="text"
                            className={`edit-book-author ${
                                authorError ? "errorField" : ""
                            }`}
                            placeholder={book.data.author}
                            value={author}
                            onChange={e => {
                                setAuthor(e.target.value);
                            }}
                        />
                    </div>
                    <div className="edit-book-ISBN-box">
                        <input
                            type="text"
                            className={`edit-book-ISBN ${
                                ISBNError ? "errorField" : ""
                            }`}
                            placeholder={book.data.ISBN}
                            value={ISBN}
                            onChange={e => {
                                setISBN(e.target.value);
                            }}
                        />
                    </div>
                    <div className="edit-book-submit-box">
                        <input
                            type="submit"
                            className="edit-book-submit"
                            value="Edit"
                        />
                    </div>
                </form>
            )}
            {postData && loading && (
                <div
                    className={`edit-book-success-box ${
                        success ? "" : "hidden"
                    }`}
                >
                    <span className="edit-book-success">Success!</span>
                </div>
            )}
            {postData && !loading && (
                <div className="loading-box">
                    <Loading />
                </div>
            )}
            {postData && loading && error && <Error />}
            <Footer />
        </div>
    );
};

export default EditBook;
