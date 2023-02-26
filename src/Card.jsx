export default function Card({ item }) {
  return (
    <div key={item.id} className="rick__cart">
      <h2 className="rick__cart-title">{item.name}</h2>
      <h5 className="rick__cart-sub-title">{item.species}</h5>
      <img className="rick__cart-img" src={item.image} alt="img" width="200" />
      <h5 className="rick__cart-gender">{item.gender}</h5>
    </div>
  );
}
