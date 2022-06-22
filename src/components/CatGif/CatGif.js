import api from '../../utils/Api';
import Template from '../Template/Template';
import { useState } from 'react';
import defCat from '../../images/E1n.gif';

function CatGif() {
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
  function getRandomCatGif() {
    setIsLoading(true);
    api
      .randomCatGif()
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
      function={getRandomCatGif}
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

export default CatGif;
