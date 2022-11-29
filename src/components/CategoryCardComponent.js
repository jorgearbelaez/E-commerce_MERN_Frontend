import { Button, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const CategoryCardComponent = ({ category, idx }) => {
  const images = [
    "/images/carousel/tablets-category.png",
    "/images/carousel/monitors-category.png",
    "/images/carousel/games-category.png",
    "/images/carousel/tablets-category.png",
    "/images/carousel/monitors-category.png",
    "/images/carousel/tablets-category.png",
    "/images/carousel/monitors-category.png",
    "/images/carousel/games-category.png",
  ];
  return (
    <Card>
      <Card.Img crossorigin="anonymous" variant="top" src={images[idx]} />
      <Card.Body>
        <Card.Title>{category}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <LinkContainer to="/product-list">
          <Button variant="primary">Go to the category</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
};

export default CategoryCardComponent;
