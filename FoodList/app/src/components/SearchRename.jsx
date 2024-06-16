import styled from "styled-components";
import { BASE_URL } from "../App";
import { Button } from "../App";
import { Container } from "../App";

function SearchResult({ data }) {
  return (
    <FoodContainer>
      <Container>
        <FoodCarts>
          {data?.map(({ name, image, text, price }) => (
            <FoodCart key={name}>
              <div className="image-part">
                <img src={BASE_URL + image} alt="images" />
              </div>

              <div className="food-info">
                <div className="info">
                  <h3>{name}</h3>
                  <p>{text}</p>
                </div>
                <Button>${price.toFixed(2)}</Button>
              </div>
            </FoodCart>
          ))}
        </FoodCarts>
      </Container>
    </FoodContainer>
  );
}

export default SearchResult;

const FoodContainer = styled.section`
  height: auto;
  background-image: url("/bg.png");
  background-size: cover;
  //   position:fixed;
`;

const FoodCarts = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 32px;
  column-gap: 20px;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
`;

const FoodCart = styled.div`
  width: 340px;
  heifgt: 147px;
  border: 0.66px solid;

  background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(78, 144, 213, 0) 100%
    );

  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);
  border-radius: 20px;
  display: flex;
  padding: 8px;

  .food-info {
    display: flex;
    justify-content: space-between;
    align-items: end;
    flex-direction: column;
    // margin-top:10px;

    h3 {
      font-weight: 500;
      font-size: 13px;
      margin-top: 8px;
    }
    p {
      font-size: 12px;
      margin-top: 4px;
    }
  }
`;
