import { Rating } from "@mui/material";
import css from "./Product.module.css";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";

const ProductCard = ({ product }) => {
  let { image, title,  rating, price, description } = product;

  console.log(product);
  return (
    <div className={css.card__container}>
      <a href="">
        <img src={image} alt="" />
      </a>
      <div>
        <h3>{title}</h3>
        <div className={css.rating}>
          {/* Rating  */}
          <Rating value={rating?.rate} precision={0.1} />
          {/* Rating Counter  */}
          <small>{rating?.count}</small>
        </div>
        <div>
          {/* price  */}
          <CurrencyFormat amount={price} />
        </div>
        <button className={css.button}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
