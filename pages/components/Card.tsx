/* eslint-disable @next/next/no-img-element */
import style from "../../styles/Card.module.css";
export default function Card(datas: any) {
  console.log(datas);
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
                <div className={style.card} key={i}>
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
              );
            }
          })
      }
    </>
  );
}
