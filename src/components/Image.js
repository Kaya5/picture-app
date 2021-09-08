import React from "react";

const Image = ({ image, id, tags, user, views, downloads }) => {
  return (
    <div className='id-image'>
      <img src={image} alt="" />
      <section className='text-data'>
      <div>
        <b>Total views: </b>
        <i>{views}</i>
      </div>
      <div>
        <b>Total downloads: </b>
        <i>{downloads}</i>
      </div>
      <div>
        <b>Image ID:</b> <i>"{id}"</i>
      </div>
      <div>
        <b>Credit:</b> <i className='credits'>"{user}"</i>
      </div>
      <i className='tags'>{tags}</i>
      </section>
    </div>
  );
};

export default Image;
