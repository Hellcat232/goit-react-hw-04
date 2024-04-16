import { fetchApi } from "../API";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader.jsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";
import LoadMore from "../LoadMore/LoadMore.jsx";
import Modal from "../Modal/Modal.jsx";
const notify = () => toast("Please write something in the field!");

const App = () => {
  const [gallery, setGallery] = useState([]);
  const [query, setQuery] = useState("");
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPage] = useState(1);

  const hendleSubmit = (query) => {
    setQuery(query);
    setPage(1);
    setTotalPage(0);
    setGallery([]);
  };

  useEffect(() => {
    if (!query) return;

    const savePhotos = async (query, page) => {
      setLoader(true);
      setError(false);

      try {
        const { results, total_pages } = await fetchApi(query, page);
        setGallery((prevGallery) => [...prevGallery, ...results]);

        if (total_pages !== totalPage) {
          setTotalPage(total_pages);
        }

        setLoader(false);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };

    savePhotos(query, page);
  }, [query, page, totalPage]);

  return (
    <>
      <SearchBar
        onEmpty={() => {
          notify();
        }}
        onSubmit={hendleSubmit}
      />

      {gallery.length > 0 ? (
        <ImageGallery photos={gallery} />
      ) : (
        <ErrorMessage message={error} />
      )}

      {loader && <Loader />}

      {<LoadMore /> ? (
        gallery.length > 0 && (
          <LoadMore
            more={() => {
              setPage(page + 1);
            }}
          />
        )
      ) : (
        totalPage === page
      )}

      <Modal />

      <Toaster
        toastOptions={{
          className: "",
          style: {
            border: "1px solid #713200",
            padding: "16px",
            color: "#713200",
          },
        }}
      />
    </>
  );
};

export default App;
