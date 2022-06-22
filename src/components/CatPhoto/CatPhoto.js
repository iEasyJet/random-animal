import { useState } from 'react';
import api from '../../utils/Api';
import defCat from '../../images/defCat.png';
import Template from '../Template/Template';

function CatPhoto() {
  const [cat, setCat] = useState(defCat);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function copyLink() {
    navigator.clipboard
      .writeText(cat)
      .then(() => {
        setIsOpen(true);
      })
      .finally(() => {
        setTimeout(() => {
          setIsOpen(false);
        }, 2000);
      });
  }

  function getRandomCat() {
    setIsLoading(true);
    api
      .randomCatPhoto()
      .then((res) => {
        setCat(`https://cataas.com${res.url}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <Template
      img={cat}
      buttonText='Кусь!'
      isLoading={isLoading}
      function={getRandomCat}
      copyLink={copyLink}
      children={
        <div
          className={`photo__copied ${isOpen ? 'photo__copied_active' : ''}`}
        >
          Ссылка скопирована!
        </div>
      }
    />
  );
}

export default CatPhoto;
