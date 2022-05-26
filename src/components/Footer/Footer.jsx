import { FaFacebookSquare, FaInstagramSquare, FaYoutube } from 'react-icons/fa';

import './footer.scss';

const Footer = () => (
  <div className="footerContainer">
    <div className="footerContainer__socialmedia">
      <div className="footerContainer__socialmedia__img">
        <img
          src="https://res.cloudinary.com/db3njhxi0/image/upload/v1651789469/Cat_bed_with_Blanket_-_Gray_Long_Plush___Large_a8o5hf.jpg"
          alt=""
        />
      </div>
      <div className="footerContainer__socialmedia__icons">
        <div className="footerContainer__socialmedia__icons__item">
          <FaFacebookSquare className="footerContainer__socialmedia__icons__item__icon" />
        </div>
        <div className="footerContainer__socialmedia__icons__item">
          <FaInstagramSquare className="footerContainer__socialmedia__icons__item__icon" />
        </div>
        <div className="footerContainer__socialmedia__icons__item">
          <FaYoutube className="footerContainer__socialmedia__icons__item__icon" />
        </div>
      </div>
    </div>
    <div className="footerContainer__about">
      <div className="footerContainer__about__title">About Adopt me</div>
      <ul>
        <li>About Adopt me</li>
        <li>Services</li>
        <li>Working with us</li>
      </ul>
    </div>
    <div className="footerContainer__linksInterests">
      <div className="footerContainer__linksInterests__title">Links interests</div>
      <ul>
        <li>Frecuente questions</li>
        <li>How to buy in Adopt me</li>
        <li>Privacy Policies</li>
      </ul>
    </div>
    <div className="footerContainer__information">
      <div className="footerContainer__information__title">Information</div>
      <ul>
        <li>Telephone 234 32 2333</li>
        <li>How to buy in Adopt me</li>
        <li>Privacy Policies</li>
      </ul>
    </div>
  </div>
);

export default Footer;
