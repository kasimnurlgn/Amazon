import css from "./Catagory.module.css";
const CategoryCard = ({ data }) => {
  console.log(data);
  return (
    <div className={css.catagory}>
      <a href="">
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imgLink} alt={data.name} />
        <p>Shop now</p>
      </a>
    </div>
  );
};

export default CategoryCard;
