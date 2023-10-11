function Pagination({ itemsPerPage, totalItems, currentPage, onPageChange }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      {pageNumbers.map((number) => (
        <li key={number} className="page-item">
          <a
            onClick={() => onPageChange(number)}
            href="#"
            className={`page-link ${number === currentPage ? "active" : ""}`}
          >
            {number}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Pagination;
