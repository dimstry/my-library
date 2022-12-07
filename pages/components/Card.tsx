import style from "../../styles/Card.module.css";
import Image from "next/image";
export default function Card() {
  return (
    <>
      <div className={style.card}>
        <Image src="/bg2.png" width={250} height={200} alt={""} />
        <div className={style.bottom}>
          <h3 className={style.title}>The Alchemist</h3>
          <p className={style.amour}>&#8377; 4000</p>
        </div>
      </div>
    </>
  );
}
