// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import {setToLocalStorage} from '@org/utils';
import PositionedMenu from '../components/menu';

const menu = <PositionedMenu></PositionedMenu>

export function App() {
  setToLocalStorage('test', 1)
  return (
    <>
      {menu}
    </>
  );
}

export default App;
