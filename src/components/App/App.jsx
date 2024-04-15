import { fetchApi } from "../API";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
const notify = () => toast("Please write something in the field!");

const App = () => {
  const [gallery, setGallery] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!query) return;

    const savePhotos = async (query) => {
      try {
        const data = await fetchApi(query);
        console.log(data);
        setGallery((prevGallery) => [...prevGallery, ...data.results]);
      } catch (error) {
        console.log(error.message);
      }
    };

    savePhotos(query);
  }, [query]);

  const hendleSubmit = (query) => {
    setQuery(query);
    setGallery([]);
  };

  return (
    <>
      <SearchBar
        onEmpty={() => {
          notify();
        }}
        onSubmit={hendleSubmit}
      />

      {gallery.length > 0 && <ImageGallery photos={gallery} />}

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
