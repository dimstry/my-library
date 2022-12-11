/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import style from "../../styles/Card.module.css";
import Modal from "./Modal";
export default function Card(datas: any) {
  const [show, setShow] = useState(false);
  const [bookItem, setBookItem] = useState();

  useEffect(() => {}, [show, bookItem]);
  return (
    <>
      {
        // cek datas ada atau tidak
        datas.datas.length > 0 &&
          // looping datas
          datas.datas.map((data: any, i: any) => {
            let img =
              data.volumeInfo.imageLinks &&
              data.volumeInfo.imageLinks.smallThumbnail;
            let title = data.volumeInfo && data.volumeInfo.title;
            let price =
              data.saleInfo.listPrice && data.saleInfo.listPrice.amount;
            if (img && title && price) {
              return (
                <>
                  <div
                    className={style.card}
                    onClick={() => {
                      setShow(true), setBookItem(data);
                    }}
                    key={i}
                  >
                    <img src={img} alt={""} />
                    <div className={style.bottom}>
                      <h3 className={style.title}>{title}</h3>
                      <p className={style.amour}>
                        {price.toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        })}
                      </p>
                    </div>
                  </div>
                  <Modal
                    show={show}
                    bookItem={bookItem}
                    onclose={() => setShow(false)}
                  />
                </>
              );
            }
          })
      }
    </>
  );
}
