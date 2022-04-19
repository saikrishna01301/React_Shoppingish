import "./Category.scss";

const Category = (props) => {
  //destructuring title & imageUrl from category object
  const { title, imageUrl } = props.category;

  //returning list of category items
  return (
    <div className="category-container">
      <div
        className="category__background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category__body">
        <h2>{title}</h2>
        <p>Shop here</p>
      </div>
    </div>
  );
};
export default Category;
