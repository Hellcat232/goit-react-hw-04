import { fetchApi } from "../API";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import toast, { Toaster } from "react-hot-toast";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader.jsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn.jsx";
import ImageModal from "../ImageModal/ImageModal.jsx";

const notify = () => toast("Please write something in the field!");

const App = () => {
  const [gallery, setGallery] = useState([]);
  const [query, setQuery] = useState("");
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPage] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [opening, setOpening] = useState({ link: "", description: "" });

  const handleSubmit = (query) => {
    setQuery(`${nanoid()}/${query}`);
    setPage(1);
    setTotalPage(0);
    setGallery([]);

    setModalIsOpen(false);
  };

  const handleOpenModal = (urls, alt) => {
    setOpening({ urls: urls, alt: alt });

    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    if (!query) return;

    const savePhotos = async (query, page) => {
      setLoader(true);

      try {
        const { results, total_pages } = await fetchApi(query, page);
        setGallery((prevGallery) => [...prevGallery, ...results]);
        setTotalPage(total_pages);
        setLoader(false);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };

    savePhotos(query, page);
  }, [query, page]);

  return (
    <>
      <SearchBar
        onEmpty={() => {
          notify();
        }}
        onSubmit={handleSubmit}
      />

      {gallery.length > 0 ? (
        <ImageGallery onOpenModal={handleOpenModal} photos={gallery} />
      ) : (
        <ErrorMessage message={error} />
      )}

      {loader && <Loader />}

      {gallery.length > 0 && !loader && page < totalPage && (
        <LoadMoreBtn
          more={() => {
            setPage(page + 1);
          }}
        />
      )}

      {gallery.length > 0 && (
        <ImageModal
          modalIsOpen={modalIsOpen}
          onClose={handleCloseModal}
          onOpen={handleOpenModal}
          links={opening}
        />
      )}

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
