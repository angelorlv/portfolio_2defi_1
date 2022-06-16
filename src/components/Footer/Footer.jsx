import s from './Footer.module.scss';
import {  AiFillMail } from 'react-icons/ai';
import {
  FaFacebookSquare,
  FaLinkedinIn,
  FaTelegramPlane,
} from 'react-icons/fa';

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.copyright}>
          <h3>Designed and Developed by <b><i>2defi</i></b></h3>
        </div>

        <div className={s.copyright}>
          <h3>Copyright © {year} <b><i>2defi</i></b></h3>
        </div>

        <div className={s.body}>
          <ul className={s.socialIcons}>
            <li>
              <a
                href="https://www.facebook.com/2defi"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a
                href="mailto:contact@2defi.mg"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillMail />
              </a>
            </li>
            <li>
              <a
                href="https://t.me/2defi"
                target="_blank"
                rel="noreferrer"
              >
                <FaTelegramPlane />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/2defi"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
