import _ from "lodash";
const Pagination = ({ pages, setPage, activePage }) => {
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPag = oldPage - 1;
      if (prevPag < 1) {
        prevPag = pages;
      }
      return prevPag;
    });
  };
  const nextPage = () => {
    setPage((oldPage) => {
      let nextPag = oldPage + 1;
      if (nextPag > pages) {
        nextPag = 1;
      }
      return nextPag;
    });
  };
  return (
    <nav className="pagination d-flex justify-content-center mt-5 " dir="rtl">
      <li className="page-item" onClick={prevPage}>
        <a href="#" className="page-link">
          قبلی
        </a>
      </li>
      {_.times(pages, (index) => (
        <li
          key={`pagination` + index}
          className={`page-item ${index + 1 === activePage ? "active" : ""}`}
          onClick={() => setPage(index + 1)}
        >
          <a className="page-link" href="#">
            {index + 1}
          </a>
        </li>
      ))}

      <li className="page-item" onClick={nextPage}>
        <a href="#" className="page-link">
          بعدی
        </a>
      </li>
    </nav>
  );
};
export default Pagination;
