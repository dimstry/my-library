import style from "../../styles/Main.module.css";
import Card from "./Card";

export default function Main() {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
