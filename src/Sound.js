import React from 'react';

function Sound1(props) {
  let audio = new Audio(props.audio)

  const start = () => {
    audio.play()
  }

  return (
    < div >
      <button onClick={start}> <div className="sound1"></div></button>
    </div >
  );
}

export default Sound1;