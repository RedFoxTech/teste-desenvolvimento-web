/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './style.css'

export default function Pagination({ postsPerPage, totalPosts, paginate, nextPage, prevPage, currentPage }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
  }

  return (
    <nav className='pagination-bar'>
        <ul className="pagination justify-content-center">
            <li className="page-item">
                <a className="page-link" onClick={() => prevPage()}>Previous</a>
            </li>
            {pageNumbers.map(num => (
                <li className="page-item" key={num}>
                    <a onClick={() => paginate(num)} className="page-link">{num}</a>
                </li>
            ))}
            <li className="page-item">
                <a className="page-link" onClick={() => nextPage()}>Next</a>
            </li>
        </ul>
    </nav>
  )
}
