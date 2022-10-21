import { useNavigate } from "react-router-dom";
import { BackgroundImage, Body, DirectoryItemContainer } from "./category-item.styles.jsx";

function CategoryItem({ category }) {
  const navigate = useNavigate();

  function onNavigateHandler() {
    navigate(category.route);
  }
  return (
    <DirectoryItemContainer key={category.id} onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={category.imageUrl} />
      <Body>
        <h2>{category.title}</h2>
        <p>Show Now</p>
      </Body>
    </DirectoryItemContainer>
  );
}

export default CategoryItem;
