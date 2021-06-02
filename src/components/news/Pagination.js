import React from 'react';

function Pagination() {

    return (
        <div>
            <nav aria-label="Page navigation example">
                    <ul className="pagination pagination-md">
                      <li className="page-item active" aria-current="page">
                        <span className="page-link">
                          1
                          <span className="sr-only">(current)</span>
                        </span>
                      </li>
                      <li className="page-item"><a className="page-link" href="/">2</a></li>
                      <li className="page-item"><a className="page-link" href="/">3</a></li>
                      <li className="page-item"><a className="page-link" href="/">4</a></li>
                    </ul>
                </nav>
        </div>
    )
}

export default Pagination
