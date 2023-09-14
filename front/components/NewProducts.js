  import styled from "styled-components";
  import Center from "./Center";
  import ProductsGrid from "./ProductsGrid";
  import Input from "./Input";
  import { useState } from "react";
  import SortSelect from "./SortSelect";
  import SearchInput from "./SearchInput";

  const Title = styled.h2`
    font-size: 2rem;
    margin: 20px 0 20px;
    font-weight: normal;
  `;
  const Wrapper = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  `
  export default function NewProducts({ products, onQuerySearch, onSortChange }) {
    const [query, setQuery] = useState("");
    const handleQuerySearch = (e) => {
      const dataSearch = e.target.value;
      setQuery(dataSearch);
      onQuerySearch(dataSearch);
    };
    const handleSort = (e) => {
      const selectedSort = e.target.value;
      onSortChange(selectedSort);
    };
    return (
      <Center>
        <Wrapper>
        <Title>New Arrivals</Title>
        <SortSelect onChange={handleSort} />
        </Wrapper>
        <SearchInput value={query} onChange={handleQuerySearch} />
        <ProductsGrid products={products} />
      </Center>
    );
  }
