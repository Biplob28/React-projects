import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResult from "./components/SearchRename";

export const BASE_URL = "http://localhost:9000";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filterdata, setFilterData] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setData(json);
        setFilterData(json);
        setLoading(false);
      } catch (error) {
        setError("Unable to fetch the data ");
      }
    };

    fetchData();
  }, []);

  function searchfood(e) {
    const searchedfood = e.target.value;
    console.log(searchedfood);
    if (searchedfood === "") {
      setFilterData(null);
    }
    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchedfood.toLowerCase())
    );
    setFilterData(filter);
  }
  const filterfood = (type) => {
    if (type == "all") {
      setFilterData(data);
      setSelectedBtn("all");
      return;
    }

    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilterData(filter);
    setSelectedBtn(type);
  };
  const filterbtns = [
    {
      name: "ALL",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
  ];

  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading.........</div>;
  return (
    <>
      <Container>
        <TopContainer>
          <div className="logo">
            <img src="/FoodyZone.svg" alt="logo" />
          </div>

          <div className="search-bar">
            <input
              type="text"
              onChange={searchfood}
              placeholder="Search here"
            />
          </div>
        </TopContainer>

        <FilterContainer>
          {/* {filterbtns.map((value) => {
            <Button
              isSelected={selectedBtn === value.type}
              key={value.name}
              onClick={() => filterfood(value.type)}
            >
              {value.name}
            </Button>;
          })} */}
          <Button onClick={()=>filterfood("all")}>ALL</Button>
          <Button onClick={()=>filterfood("dinner")}>Dinner</Button>
          <Button onClick={()=>filterfood("lunch")}>Lunch</Button>
          <Button onClick={()=>filterfood("breakfast")}>Breakfast</Button>
        </FilterContainer>
      </Container>
      <SearchResult data={filterdata} />
    </>
  );
}

export default App;


export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const TopContainer = styled.section`
min-height:140px;
align-items:center;
display:flex;
justify-content: space-between;
padding:160x;

.search-bar{
  input{
  border:1px solid red;
    border-radius=5px;
    height:40px;
    font-size=16px;
    background-color:transparent;
    color: white;
   padding: 0 10px;
  }
}
`;
const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  // margin-bottom:10px;
`;

export const Button = styled.button`
  background: #f34343;
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;
`;
