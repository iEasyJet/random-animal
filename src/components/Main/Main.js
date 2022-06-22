import { NavLink } from 'react-router-dom';
import './Main.css';
import defImg from '../../images/51LJ.gif';

function Main() {
  return (
    <div className='main'>
      <img
        src={defImg}
        alt='Гифка летающего котика'
        className='main__cat-gif1'
      />
      <nav className='main__nav'>
        <NavLink to='cat-photo' className='main__link'>
          Фото котиков
        </NavLink>
        <NavLink to='cat-gif' className='main__link'>
          Гифки котиков
        </NavLink>
        <NavLink to='dog' className='main__link'>
          Фото собачек
        </NavLink>
        <NavLink to='fox' className='main__link'>
          Фото лисичек
        </NavLink>
      </nav>
    </div>
  );
}

export default Main;
