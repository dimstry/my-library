/* eslint-disable @next/next/no-img-element */
import style from "../../styles/Modal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

interface Props {
  show: boolean;
  bookItem: any;
  onclose: any;
}

export default function Modal({ show, bookItem, onclose }: Props) {
  if (show === false) return null;

  let img =
    bookItem.volumeInfo.imageLinks &&
    bookItem.volumeInfo.imageLinks.smallThumbnail;
  let title = bookItem.volumeInfo && bookItem.volumeInfo.title;
  let book = bookItem.volumeInfo;

  console.log(book);
  return (
    <>
      <div className={style.overlay}>
        <div className={style.overlay_innier}>
          <button className={style.close} onClick={onclose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <div className={style.content}>
            <img src={img} alt="" className={style.images} />
            <div className={style.info}>
              <h1>{title}</h1>
              <h3> {book.authors}</h3>
              <h4>
                {" "}
                {book.publisher} <span> {book.punlishedDate}</span>
              </h4>
              <a href={book.previewLink} target="_blank" rel="noreferrer">
                {" "}
                <button>More</button>
              </a>
            </div>
          </div>
          <h4 className={style.description}>
            {book.description && book.description}
          </h4>
        </div>
      </div>
    </>
  );
}
