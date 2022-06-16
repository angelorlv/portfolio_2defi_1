import s from './TechSkills.module.scss';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiSass,
  DiAngularSimple,
  DiPhp,
  DiWordpress,
  DiPostgresql,
  DiMysql,
  DiSymfony,
  DiCodeigniter,
  DiJava,
  DiPhotoshop,
  DiDjango,
  DiPython,
  DiIllustrator,
} from 'react-icons/di';
import {
  SiTypescript,
  SiRedux,
  SiSocketDotIo,
  SiAmazonaws,
} from 'react-icons/si';
import { GoDeviceMobile } from 'react-icons/go';

const TechSkills = () => {
  return (
    <ul className={s.container}>
      <li className={s.techIcon}>
        <DiJavascript1 />
      </li>
      <li className={s.techIcon}>
        <SiTypescript />
      </li>
      <li className={s.techIcon}>
        <DiNodejs />
      </li>
      <li className={s.techIcon}>
        <DiReact />
      </li>
      <li className={s.techIcon}>
        <DiMongodb />
      </li>
      <li className={s.techIcon}>
        <DiSass />
      </li>
      <li className={s.techIcon}>
        <SiAmazonaws />
      </li>
      <li className={s.techIcon}>
        <SiRedux />
      </li>
      <li className={s.techIcon}>
        <DiGit />
      </li>
      <li className={s.techIcon}>
        <DiAngularSimple />
      </li>
      <li className={s.techIcon}>
        <DiPhp />
      </li>
      <li className={s.techIcon}>
        <DiWordpress />
      </li>
      <li className={s.techIcon}>
        <DiPostgresql />
      </li>
      <li className={s.techIcon}>
        <DiMysql />
      </li>
      <li className={s.techIcon}>
        <DiSymfony />
      </li>
      <li className={s.techIcon}>
        <DiCodeigniter />
      </li>
      <li className={s.techIcon}>
        <DiJava />
      </li>
      <li className={s.techIcon}>
        <GoDeviceMobile />
      </li>
      <li className={s.techIcon}>
        <DiPhotoshop />
      </li>
      <li className={s.techIcon}>
        <DiDjango />
      </li>
      <li className={s.techIcon}>
        <DiPython />
      </li>
      <li className={s.techIcon}>
        <DiIllustrator />
      </li>
    </ul>
  );
};

export default TechSkills;
