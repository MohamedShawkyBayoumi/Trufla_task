import React, { useEffect, useRef } from "react";

const InfiniteScroll = ({ children, isLoading, list, loadMore, page }) => {

  const loadingPoint = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, false);

    return () => {
      window.removeEventListener("scroll", onScroll, false);
    }
  }, [page]);

  const onScroll = () => {
    let check = (loadingPoint.current.getBoundingClientRect().bottom - window.innerHeight <= 0) ? true : false;
    if (check) {
      loadMore();
    }
  };

  return (
    <React.Fragment>
      {children}
      {/* {isLoading && (
        <div className="infinite-loader-container">
          {`Loading....`}
        </div>
      )} */}
      <div ref={loadingPoint}></div>
      <button onClick={() => loadMore()}>Loading</button>
    </React.Fragment>
  )
}

export default InfiniteScroll;
