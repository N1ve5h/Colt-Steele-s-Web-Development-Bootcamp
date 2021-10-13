import vehicles from "./Images";

export default function card({ car, color, title, info }) {
  return (
    <div style={{ backgroundColor: color }} >
      <div className={title.toLowerCase()} >
        <img src={vehicles[car]} alt="" />
        <h1>{title}</h1>
        <p>{info}</p>
        <button>Learn More</button>
      </div>
    </div>
  );
}
