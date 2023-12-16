import { FaPerson } from 'react-icons/fa6';
import { FaChildReaching } from 'react-icons/fa6';

import './styles/BookARoom.scss';

export const BookARoom = () => {
  return (
    <section className="bar-wrapper">
      <div className="bar">
        <div className="heading">
          <h3 className="book">Book A Room</h3>
          <p className="para">Discover the perfect space for you!</p>
        </div>
        <div className="action">
          <div className="date">
            <label className="label" htmlFor="date">
              Date
            </label>
            <input type="date" name="date" id="date" />
          </div>
          <div className="person">
            <label className="label" htmlFor="person">
              Person
            </label>
            <div className="options">
              <div className="select-adult">
                <div className="adult">
                  <FaPerson />
                  <span>Adult</span>
                </div>
                <select name="person" id="person">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div className="select-child">
                <div className="children">
                  <FaChildReaching />
                  <span>Children</span>
                </div>
                <select name="child" id="child">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
          </div>
          <div className="book-btn">
            <button>Book Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};
