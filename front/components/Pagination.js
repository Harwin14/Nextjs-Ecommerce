import { useState } from "react";
import styled from "styled-components";
import NewProducts from "@/components/NewProducts";
import Input from "./Input";

const StyledPagination = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  gap: 10px;
  margin: 3rem;
`;
const StyledPaginationLi = styled.button`
  width: 20px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  padding: 15px;
  border: none;
  background-color: ${(props) =>
    props.currentPage ? "rgb(17, 17, 17);" : "rgb(34, 34, 34);"};
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgb(17, 17, 17);
  }
`;
const StyledPrevButton = styled.button`
  display: block;
  text-decoration: none;
  color: rgb(107 114 128);
  padding: 12px;
  justify-content: center;
  background-color: rgb(34, 34, 34);
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  border: 2px solid rgb(34, 34, 34);
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 16px;
  &:hover {
    background-color: rgb(17, 17, 17); /* Warna latar belakang saat di-hover */
  }
`;
const StyledNextButton = styled.button`
  display: block;
  text-decoration: none;
  color: rgb(107 114 128);
  padding: 12px;
  justify-content: center;
  background-color: rgb(34, 34, 34);
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  border: 2px solid rgb(34, 34, 34);
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 16px;
  &:hover {
    background-color: rgb(17, 17, 17); /* Warna latar belakang saat di-hover */
  }
`;
const StyledButtonPagination = styled.a`
  font-size: 16px;
  text-decoration: none;
  color: ${(props) =>
    props.currentPage ? " rgb(255 255 255)" : "rgb(107 114 128)"};
`;

function Pagination({ products }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");
  const [sortType, setSortType] = useState("price");
  const [sortOrder, setSortOrder] = useState("asc");

  const keys = ["title", "desc", "price"];

  const handleQuerySearch = (dataSearch) => {
    setQuery(dataSearch);
  };

  const handleSortChange = (selectedSort) => {
    // Anda dapat melakukan apa pun yang diperlukan dengan jenis pengurutan yang dipilih di sini
    // Misalnya, Anda bisa langsung memanggil fungsi handleSort yang ada di sini.
    handleSort(selectedSort);
  };
 
  const handleSort = (type) => {
    if (type === sortType) {
      // Jika jenis pengurutan saat ini sama dengan yang dipilih, toggle arah pengurutan
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      // Jika jenis pengurutan berbeda, setel jenis pengurutan baru
      setSortType(type);
  
      if (type === "price-desc") {
        setSortType("price");
        setSortOrder("desc");
      } else if (type === "title-desc") {
        setSortType("title");
        setSortOrder("desc");
      } else {
        setSortType(type);
        setSortOrder("asc");
      }
    }
  };

// Urutkan produk berdasarkan sortType dan sortOrder
const sortedProducts = [...products].sort((a, b) => {
  if (sortType === "title") {
    const valueA = a.title.toLowerCase();
    const valueB = b.title.toLowerCase();
    return sortOrder === "asc" ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
  } else if (sortType === "price") {
    const valueA = a.price;
    const valueB = b.price;
    return sortOrder === "asc" ? valueA - valueB : valueB - valueA;
  } else if (sortType === "title-desc") { // Perubahan di sini
    const valueA = a.title.toLowerCase();
    const valueB = b.title.toLowerCase();
    return sortOrder === "asc" ? valueB.localeCompare(valueA) : valueA.localeCompare(valueB);
  }
  // Jika Anda ingin mengurutkan berdasarkan "price high to low" atau "title z-a"
  if (sortType === "price-desc" || sortType === "title-desc") {
    const valueA = a[sortType.replace("-desc", "")];
    const valueB = b[sortType.replace("-desc", "")];
    // Balik urutan perbandingan jika sortOrder adalah "desc"
    return sortOrder === "asc" ? valueA - valueB : valueB - valueA;
  }

  // Fallback: jika tidak ada yang cocok, tidak ada pengurutan
  return 0;
});
  const search = (sortedProducts) => {
    return sortedProducts.filter((item) =>
      keys.some((key) => {
        const value = item[key];
        return (
          typeof value === "string" &&
          value.toLowerCase().includes(query.toLowerCase())
        );
      })
    );
  };

  const datas = search(sortedProducts);

  const productsPerPage = 4;
  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;
  let newProducts = datas.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(datas.length / productsPerPage);
  const numbers = [...Array(totalPages + 1).keys()].slice(1);
  const changePage = (id) => setCurrentPage(id);
  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const nextPage = () => {
    if (currentPage !== totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <NewProducts
        products={newProducts}
        onQuerySearch={handleQuerySearch}
        onSortChange={handleSortChange}
      />

      <StyledPagination>
        <li>
          <StyledPrevButton onClick={prevPage} href="#">
            <span>Previous</span>
          </StyledPrevButton>
        </li>
        {numbers.map((number) => (
          <StyledPaginationLi
            key={number}
            currentPage={currentPage === number}
            onClick={() => changePage(number)}
          >
            <StyledButtonPagination
              onClick={() => changePage(number)}
              href="#"
              currentPage={currentPage === number}
            >
              {number}
            </StyledButtonPagination>
          </StyledPaginationLi>
        ))}
        <li>
          <StyledNextButton href="#" onClick={nextPage}>
            <span>Next</span>
          </StyledNextButton>
        </li>
      </StyledPagination>
    </>
  );
}

export default Pagination;
