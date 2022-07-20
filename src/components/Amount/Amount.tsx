import './amount.scss';

const Amount = () => {
  console.log('working');
  return (
    <div className="amount">
      <div className="amount__title">
        <span>Cantidad</span>
      </div>
      <div className="amount__container">
        <div className="item__amount__less">
          <button type="button">-</button>
        </div>
        <div className="item__amount__number">
          1
        </div>
        <div className="item__amount__plus">
          <button type="button">+</button>
        </div>
      </div>
    </div>
  );
};

export default Amount;
