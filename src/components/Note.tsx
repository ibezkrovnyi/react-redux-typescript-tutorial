import * as React from 'react';

interface OwnProps {
  text: string;
}

function onKeyUp(ev: React.KeyboardEvent<{}>) {
  if (ev.key === 'enter') {

  }
}

export const Note: React.SFC<OwnProps> = ({ text }) => (
  <div>
    <input type="text" placeholder={text} onKeyUp={onKeyUp}/>
  </div>
);
