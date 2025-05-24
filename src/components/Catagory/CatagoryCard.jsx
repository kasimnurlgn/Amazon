import { Link } from "@mui/material";
import css from "./Catagory.module.css";
const CategoryCard = ({ data }) => {
  console.log(data);
  return (
    <div className={css.catagory}>
      <Link to={`/category/${data.name}`}>
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imgLink} alt={data.name} />
        <p>Shop now</p>
      </Link>
    </div>
  );
};

export default CategoryCard;
