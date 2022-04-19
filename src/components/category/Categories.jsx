import "./Categories.scss";
import Category from "./Category";

const Categories = (props) => {
  return (
    <div className="categories-container">
      {props.categories.map((category) => {
        return <Category key={category.id} category={category} />;
      })}
    </div>
  );
};

export default Categories;
