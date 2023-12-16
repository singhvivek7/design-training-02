import Image from 'next/image';
import first from '@/assets/img/1.png';
import sec from '@/assets/img/2.png';
import third from '@/assets/img/3.png';
import fourth from '@/assets/img/4.png';
import fifth from '@/assets/img/5.png';
import './styles/GridSection.scss';

export const GridSection = () => {
  return (
    <section className="grid-section-wrapper">
      <div className="grid-section">
        <Image
          className="img"
          src={first}
          width={300}
          height={600}
          alt="rooms"
        />
        <div className="four-img">
          <Image
            className="img"
            src={sec}
            width={300}
            height={300}
            alt="dining"
          />
          <Image
            className="img"
            src={third}
            width={300}
            height={300}
            alt="Conferences & Meetings"
          />
          <Image
            className="img"
            src={fourth}
            width={300}
            height={300}
            alt="Service & Facilities"
          />
          <Image
            className="img"
            src={fifth}
            width={300}
            height={300}
            alt="Wedding Package"
          />
        </div>
      </div>
    </section>
  );
};
