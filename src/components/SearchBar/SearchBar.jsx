import css from "./SearchBar.module.css"
import { Toaster } from 'react-hot-toast';
import { HiOutlineSearch } from 'react-icons/hi';

import { ERR_EMPTY_SEARCH } from '../js/constants';
import { errNotify } from '../js/error-notify';


export default function SearchBar({ onSearch }) {
    const handleSubmit = evt => {
        evt.preventDefault();
        const form = evt.target;
        console.log(form);
        const searchStr = form.elements.search.value;
        console.log('searchStr', searchStr);
        if (searchStr.trim() === '') {
          errNotify(ERR_EMPTY_SEARCH);
          return;
        }
        onSearch(searchStr);
        form.reset();
      };
    return (
        <header className={css.header}>
        <form className={css.form} onSubmit={handleSubmit}>
          <div>
            <input
              className={css.input}
              type="text"
              name="search"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
            <Toaster />
          </div>
  
          <button className={css.button} type="submit">
            <HiOutlineSearch />
          </button>
        </form>
      </header>
      );
}