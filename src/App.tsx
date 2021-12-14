import cn from 'classnames';

import s from './App.module.scss';

const App = (props: { name?: string }) => {
  return (
    <div className={cn(s.header)}>
      This is App
      <img src="#" />
      {props.name}
    </div>
  );
};

export default App;
