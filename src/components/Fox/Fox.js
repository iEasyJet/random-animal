import { useState } from 'react';
import api from '../../utils/Api';
import defFox from '../../images/72ro.gif';
import Template from '../Template/Template';

function Fox() {
  const [fox, setFox] = useState(defFox);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function copyLink() {
    navigator.clipboard
      .writeText(fox)
      .then(() => {
        setIsOpen(true);
      })
      .finally(() => {
        setTimeout(() => {
          setIsOpen(false);
        }, 2000);
      });
  }

  function getRandomFox() {
    setIsLoading(true);
    api
      .randomFox()
      .then((res) => {
        setFox(res.image);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <Template
      img={fox}
      buttonText='Ряв!'
      isLoading={isLoading}
      function={getRandomFox}
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

export default Fox;
