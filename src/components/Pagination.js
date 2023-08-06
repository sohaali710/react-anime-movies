import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { pageMovies, setLoading } from '../actions/moviesAction';

const Pagination = () => {
    const [pageCount, setPageCount] = useState(0)

    const dispatch = useDispatch()
    const pages = useSelector(state => state.pageCount)

    useEffect(() => {
        setPageCount(pages)
    }, [pages])

    const handlePageClick = (data) => {
        const currentPage = data.selected + 1
        dispatch(setLoading())
        dispatch(pageMovies(currentPage))
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