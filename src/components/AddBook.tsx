/* eslint-disable react/jsx-curly-newline */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { BookType, BooksObjectTypes } from "../store/types";
import Loading from "./Loading";
import Error from "./Error";
import Footer from "./Footer";

export type AddBookProps = {
    loading: boolean;
    error: boolean;
    addBook: (data: BookType) => void;
    loadUp: () => void;
    books: BooksObjectTypes;
}; // Types for props

function getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
}

const AddBook = ({ loading, error, addBook, loadUp, books }: AddBookProps) => {
    const [postData, setPostData] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);
    const [title, setTitle] = useState<string>("");
    const [titleError, setTitleError] = useState<boolean>(false);
    const [author, setAuthor] = useState<string>("");
    const [authorError, setAuthorError] = useState<boolean>(false);
    const [ISBN, setISBN] = useState<string>("");
    const [ISBNError, setISBNError] = useState<boolean>(false);

    useEffect(() => {
        loadUp();
    }, [loadUp]);

    function validateForm(event: React.FormEvent) {
        let id: number = 0;

        if (title.length <= 3) {
            setTitleError(true);
        }
        if (author.length <= 3) {
            setAuthorError(true);
        }
        if (ISBN.length <= 3) {
            setISBNError(true);
        }
        if (title.length >= 3 && author.length >= 3 && ISBN.length >= 3) {
            if (books) {
                books.data.forEach((book: BookType) => {
                    if (id <= book.id) {
                        id = book.id;
                    }
                });
            } else {
                id = getRandomInt(99999);
            }

            addBook({
                id: id + 1,
                title,
                author,
                ISBN,
            });

            setPostData(true);

            setSuccess(true);

            setTimeout(() => {
                setSuccess(false);
            }, 3000);

            setTitle("");
            setAuthor("");
            setISBN("");
            setTitleError(false);
            setAuthorError(false);
            setISBNError(false);

            loadUp();
        }

        event.preventDefault();
    }
    return (
        <div className="add-book-container">
            <div className="add-book-link-box">
                <a href="/" className="add-book-link-back">
                    <FontAwesomeIcon
                        icon={faArrowLeft}
                        className="add-book-link-back-icon"
                    />
                    Back
                </a>
            </div>
            <div className="add-book-header-title-box">
                <h2 className="add-book-header-title">Add Book</h2>
            </div>
            <form
                className="add-book-form"
                onSubmit={e => {
                    validateForm(e);
                }}
            >
                <div className="add-book-title-box">
                    <input
                        type="text"
                        className={`add-book-title ${
                            titleError ? "errorField" : ""
                        }`}
                        placeholder="A title"
                        value={title}
                        onChange={e => {
                            setTitle(e.target.value);
                        }}
                    />
                </div>
                <div className="add-book-author-box">
                    <input
                        type="text"
                        className={`add-book-author ${
                            authorError ? "errorField" : ""
                        }`}
                        placeholder="An author"
                        value={author}
                        onChange={e => {
                            setAuthor(e.target.value);
                        }}
                    />
                </div>
                <div className="add-book-ISBN-box">
                    <input
                        type="text"
                        className={`add-book-ISBN ${
                            ISBNError ? "errorField" : ""
                        }`}
                        placeholder="ISBN"
                        value={ISBN}
                        onChange={e => {
                            setISBN(e.target.value);
                        }}
                    />
                </div>
                <div className="add-book-submit-box">
                    <input
                        type="submit"
                        className="add-book-submit"
                        value="Add"
                    />
                </div>
            </form>
            {postData && !loading && (
                <div className="loading-box">
                    <Loading />
                </div>
            )}
            {postData && loading && (
                <div
                    className={`add-book-success-box ${
                        success ? "" : "hidden"
                    }`}
                >
                    <span className="add-book-success">Success!</span>
                </div>
            )}
            {postData && loading && error && <Error />}
            <Footer />
        </div>
    );
};

export default AddBook;
