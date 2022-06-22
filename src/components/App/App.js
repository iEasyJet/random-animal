import { Routes, Route } from 'react-router-dom';

import Main from '../Main/Main';
import CatPhoto from '../CatPhoto/CatPhoto';
import CatGif from '../CatGif/CatGif';
import Dog from '../Dog/Dog';
import Fox from '../Fox/Fox';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/cat-photo' element={<CatPhoto />} />
        <Route path='/cat-gif' element={<CatGif />} />
        <Route path='/dog' element={<Dog />} />
        <Route path='/fox' element={<Fox />} />
      </Routes>
    </div>
  );
}

export default App;
