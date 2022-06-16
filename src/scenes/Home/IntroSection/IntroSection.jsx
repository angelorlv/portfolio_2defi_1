import s from './IntroSection.module.scss';
import avatar from '../../../assets/avatar.svg';
import { AiFillMail } from 'react-icons/ai';
import {
  FaFacebookSquare,
  FaLinkedinIn,
  FaTelegramPlane,
} from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const IntroSection = () => {
  return (
    <section className={s.content}>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          <h1 className={s.title}>
            LET ME <span className={s.purple}> INTRODUCE </span>{' '}
            MYSELF
          </h1>

          <div className={s.description}>
            <p>
              I fell in love with programming and I have at least
              learnt something, I think… 🤷‍♂️
            </p>

            <p>
              My field of Interest's are building new
              <i>
                <b className={s.purple}>
                  {' '}
                  Web Technologies and Products
                </b>
              </i>
            </p>

            <p>
              A passionate Full Stack Software Developer 🚀 <br />I
              have an experience of building{' '}
              <i>
                <b className={s.purple}>Web and Mobile</b>
              </i>{' '}
              applications with
              <br />
              <i>
                <b className={s.purple}>
                  JavaScript, Reactjs, Nodejs, React Native
                </b>
              </i>{' '}
              and some other cool libraries
            </p>
          </div>
        </div>

        <Tilt trackOnWindow={true}>
          <LazyLoadImage alt="avatar" effect="blur" src={avatar} />
        </Tilt>
      </div>

      <div className={s.introSocial}>
        <h1>Nous contacter</h1>
        <ul className={s.socialLinks}>
          <li className={s.socialLink}>
            <a
              href="mailto:contact@2defi.mg"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <AiFillMail />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.facebook.com/2defi"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <FaFacebookSquare />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://t.me/2defi"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <FaTelegramPlane />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.linkedin.com/in/2defi"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
