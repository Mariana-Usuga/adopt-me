import './imgHeader.scss';

const ImgHeader = () => {
  console.log('eaornfce');
  return (
    <div className="containerImgHeader">
      <div className="containerImgHeader__itemDesc">
        Find everything for your pet
      </div>
      <div className="containerImgHeader__item">
        <button className="containerImgHeader__item__btn" type="button">
          Buy now
        </button>
      </div>
    </div>
  );
};

export default ImgHeader;
