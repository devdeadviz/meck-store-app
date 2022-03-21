import "./CategoriesCard.css";

const CategoriesCard = ({ categoryName, image }) => {
  return (
    <div>
      <div className="vertical-card-wrapper m-5">
        <div className="vertical-card-image-wrapper pos-rel">
          <img className="responsive-image" src={image} alt={categoryName} />
          <div className="vertical-card-badge-wrapper py-1 px-4">New</div>
        </div>
        <div className="vertical-card-header">
          <h2 className="m-2 py-3">{categoryName}</h2>
        </div>
      </div>
    </div>
  );
};

export { CategoriesCard };
