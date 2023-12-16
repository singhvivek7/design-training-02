import { specialOffersCards } from '@/utils/constant';
import './styles/SpecialOffers.scss';
import { Card } from '../components/Card';

export const SpecialOffers = () => {
  return (
    <section className="special-offers-wrapper">
      <div className="special-offers">
        <p className="text-teal-500 text-2xl mb-2">Special Offers</p>
        <div className="flex justify-between items-center my-2">
          <h3 className="text-4xl font-semibold">Best offer of the month</h3>
          <span className="text-teal-500 text-2xl font-semibold cursor-pointer">
            View all
          </span>
        </div>
        <p className="text-lg w-1/2 mt-5">
          Experience Fantastic Benefits and Obtain Better Rates When You Make a
          Direct Booking on Our Official Website
        </p>
        <div className="flex justify-center items-center gap-5 flex-wrap my-8">
          {specialOffersCards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
      </div>
    </section>
  );
};
