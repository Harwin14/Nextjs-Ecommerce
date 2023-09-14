import { styled } from "styled-components";

const StyledLabel = styled.label`
font-size:18px;
`;
const StyledSelect = styled.select`
padding:5px;
border-radius:5px;
margin-left:10px;
font-weight:bold;
font-size:14px;
cursor:pointer;
`;


export default function SortSelect({ onChange }) {
  return (
    <div>
      <StyledLabel htmlFor="sortSelect">Sort by:</StyledLabel>
      <StyledSelect id="sortSelect" onChange={onChange}>
        <option value="price">Price (Low to High)</option>
        <option value="price-desc">Price (High to Low)</option>
        <option value="title">Title (A to Z)</option>
        <option value="title-desc">Title (Z to A)</option>
      </StyledSelect>
    </div>
  );
}
