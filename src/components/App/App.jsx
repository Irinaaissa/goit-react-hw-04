import { useEffect, useState } from 'react'
import css from "./App.module.css"
import Modal from 'react-modal';
import ImageGallery from '../ImageGallery/ImageGallery';
import ImageModal from '../ImageModal/ImageModal';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import SearchBar from '../SearchBar/SearchBar';
import { fetchData } from "../js/api-services";


function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [currPage, setCurrPage] = useState(0);
  const [hasMorePages, setHasMorePages] = useState(false);
  const [filter, setFilter] = useState('');

  const [selectedImage, setSelectedImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
      Modal.setAppElement('#root');
    }, []);

  const updateImages = async (strFilter, page) => {
    try {
      setError(false);
      setLoading(true);
      const data = await fetchData(strFilter, page);
      if (data.results.length > 0) {
        setItems(prevItems => [...prevItems, ...data.results]);
        setCurrPage(page);
        setHasMorePages(page >= data.total_pages ? false : true);
      } else {
        setError(true);
        setHasMorePages(false);
      }
    } catch (error) {
      setError(true);
      setHasMorePages(false);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = strFilter => {
    setFilter(strFilter);
    setItems([]);
    setCurrPage(0);
    setHasMorePages(false);
    updateImages(strFilter, 1);
  };

  const handleMore = () => updateImages(filter, currPage + 1);

  const openModal = image => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };


  return (
    <div className={css.container}>
      <SearchBar onSearch={handleSearch} />
      <div >
        <ErrorMessage isError={error}/>
        <ImageGallery images={items} openModal={openModal} />
        <Loader isLoading={loading}/>

        <LoadMoreBtn
        isVisible={hasMorePages && !loading}
        onClick={handleMore}
        ></LoadMoreBtn>
      </div>
      <ImageModal
        isOpen={modalIsOpen}
        image={selectedImage}
        onCloseClick={closeModal}
      />
    </div>
  );
}


export default App
