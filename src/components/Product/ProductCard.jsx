import { Rating } from "@mui/material";
import css from "./Product.module.css";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";

const ProductCard = ({ product, flex, renderDesc }) => {
  if (!product) return null;
  let { image, title, id, rating, price, description } = product;

  // console.log(product);
  return (
    <div
      className={`${css.card__container} ${flex ? css.product__flexed : ""}`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc && <div className={css.renderDesc}>{description}</div>}
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
