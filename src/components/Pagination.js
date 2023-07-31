import React from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({ getPage, pageCount }) => {
    const handlePageClick = (data) => {
        const page = data.selected + 1
        getPage(page)
    }

    return (
        <>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next"
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="previous"

                containerClassName={'pagination justify-content-center'}
                pageClassName='page-item'
                pageLinkClassName='page-link'
                previousClassName='page-item'
                previousLinkClassName='page-link'
                nextClassName='page-item'
                nextLinkClassName='page-link'
                breakClassName='page-item'
                breakLinkClassName='page-link'
                activeClassName="active"
            />
        </>
    )
}

export default Pagination