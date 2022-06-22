import './Template.css';
import { useNavigate } from 'react-router-dom';
import back from '../../images/back.png';
import load from '../../images/ZKZx.gif';

function Template(props) {
  const navigate = useNavigate();

  function goToBack() {
    navigate('/');
  }

  return (
    <div className='photo'>
      <img src={props.img} alt='Картинка котика' className='photo__img' />
      <img
        src={back}
        alt='Стрелка назад'
        className='photo__back'
        onClick={goToBack}
      />
      <button type='button' onClick={props.function} className='photo__button'>
        {props.isLoading ? (
          <>
            <img
              src={load}
              alt='Загрузка'
              className='photo__loading'
            />
          </>
        ) : (
          props.buttonText
        )}
      </button>
      <button
        type='button'
        className='photo__button-copy'
        onClick={props.copyLink}
      />
      {props.children}
    </div>
  );
}

export default Template;
