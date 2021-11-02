import React from 'react';

function ImageComponent({img, ratio}){
  //"ratio-2-3"
  //"ratio-2-2"
  const divStyle = {
    backgroundImage: 'url(' + img + ')',
  };

  return (
    <div className={ratio + ' uk-background-cover'} style={divStyle}>

    </div>
  );

}
export default ImageComponent;