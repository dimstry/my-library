import style from "../../styles/Benner.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
export default function Benner() {
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
            <input type="text" placeholder="Enter your book name" />
            <button>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
          <Image src="/bg2.png" width={250} height={250} alt={""} />
        </div>
      </div>
    </>
  );
}
