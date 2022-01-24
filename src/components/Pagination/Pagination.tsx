import { ProductCard } from "components";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import { AppState } from "store";
import { ProductType } from "types/productType";
import * as S from "./styles";

const Pagination = () => {
  const products = useSelector((state: AppState) => state.products.filteredData);
  const [currentItems, setCurrentItems] = useState<ProductType[]>();
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * 16) % products.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    const endOffset = itemOffset + 16;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(products.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(products.length / 16));
  }, [itemOffset, products]);

  return (
    <S.PaginationProductWrapper>
      <S.ProductsWrapper>
        {currentItems &&
          currentItems.map((product, key) => (
            <React.Fragment key={key}>
              <ProductCard product={product} />
            </React.Fragment>
          ))}
      </S.ProductsWrapper>

      <>
        <ReactPaginate
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="< previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
        />
      </>
    </S.PaginationProductWrapper>
  );
};

export default Pagination;
