import s from './AboutUsPage.module.css';
import image from '../../images/task.png';

const AboutUsPage = () => {
  return (
    <div className={s.wrap}>
      <img src={image} className={s.image} alt="task" />
    </div>
  );
};

export default AboutUsPage;
