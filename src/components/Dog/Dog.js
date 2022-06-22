import { useState } from 'react';
import api from '../../utils/Api';
import defDog from '../../images/2C8M.gif';
import Template from '../Template/Template';

function Dog() {
  const [dog, setDog] = useState(defDog);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function copyLink() {
    navigator.clipboard
      .writeText(dog)
      .then(() => {
        setIsOpen(true);
      })
      .finally(() => {
        setTimeout(() => {
          setIsOpen(false);
        }, 2000);
      });
  }

  function getRandomDog() {
    setIsLoading(true);
    api
      .randomDog()
      .then((res) => {
        if (res.url.includes('.mp4')) {
          getRandomDog();
        }
        setDog(res.url);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <Template
      img={dog}
      buttonText='Гав!'
      isLoading={isLoading}
      function={getRandomDog}
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

export default Dog;
