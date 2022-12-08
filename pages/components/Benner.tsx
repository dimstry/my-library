import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import style from "../../styles/Benner.module.css";
import Image from "next/image";
import axios from "axios";
import Card from "./Card";

export default function Benner() {
  const [search, setSearch] = useState("");
  const [datas, setDatas] = useState([]);

  const getDatas = async (val: any) => {
    await axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${val}&key=${process.env.API_Key}&maxResults=40`
      )
      .then((res: any) => {
        return setDatas(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const searchBox = (e: any) => {
    if (e.key === "Enter") {
      getDatas(search);
    } else if (e.type === "click") {
      getDatas(search);
    }
  };

  useEffect(() => {
    getDatas("React js");
  }, []);

  return (
    <>
      <div className={style.header}>
        <div className={style.header_left}>
          <h1>
            A room without books is like <br /> a body without soul.
          </h1>
        </div>
        <div className={style.header_right}>
          <h2>Find Your books</h2>
          <div className={style.search}>
            <input
              type="text"
              placeholder="Enter your book name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={searchBox}
            />
            <button onClick={searchBox}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
          <Image src="/bg2.png" width={250} height={250} alt={""} />
        </div>
      </div>
      <div className={style.main}>
        <div className={style.container}>
          {/* kirim datas ke component card */}
          <Card datas={datas} />
        </div>
      </div>
    </>
  );
}
