import { fetchImages } from './js/pixabay-api';
import {
  renderImageCards,
  clearGallery,
  appendImagesToGallery,
} from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const searchForm = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

let lightbox = new SimpleLightbox('.gallery a');
let query = '';
let page = 1;

const handleSearch = async event => {
  event.preventDefault();

  const input = searchForm.querySelector('input');
  query = input.value.trim();

  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query!',
    });
    return;
  }

  clearGallery();
  loader.style.display = 'block';

  try {
    const data = await fetchImages(query, page);
    loader.style.display = 'none';

    if (data.hits.length === 0) {
      iziToast.info({
        title: 'Sorry',
        message:
          'There are no images matching your search query. Please try again!',
      });
      return;
    }

    const markup = renderImageCards(data.hits);
    appendImagesToGallery(markup);
    lightbox.refresh();
  } catch (error) {
    loader.style.display = 'none';
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
    });
  }
};

searchForm.addEventListener('submit', handleSearch);
