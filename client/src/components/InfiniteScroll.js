import React, { useEffect, useRef } from "react";
import { Button } from '../pages/Home/HomeStyles';

const InfiniteScroll = ({ children, isLoading, list, loadMore, page, showLoadingBtn }) => {

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
      setTimeout(() => loadMore(), 500)
    }
  };

  return (
    <React.Fragment>
      {children}
      <div ref={loadingPoint}></div>
      {!showLoadingBtn && (
        <Button onClick={() => loadMore()}>Loading</Button>
      )}
    </React.Fragment>
  )
}

export default InfiniteScroll;
