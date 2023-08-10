import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import css from './AddPackage.module.css';
import sprite from '../../img/sprites.svg';
import { addPackageOp } from 'redux/operations/packageOps';
import { getPackages } from 'redux/selectors/packagesSelectors';

const AddPackage = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const packages = useSelector(getPackages);

  const dispatch = useDispatch();

  const onSubmitHandler = event => {
    event.preventDefault();

    if (packages.find(pack => pack._tracking_number === trackingNumber)) {
      alert('This package is already exist in your contact list');
      return null;
    }

    dispatch(addPackageOp({ trackingNumber, phoneNumber }));

    setTrackingNumber('');
    setPhoneNumber('');
  };

  return (
    <form className={css['form']} onSubmit={onSubmitHandler}>
      <label className={css['label']}>
        <span> Tracking Number: </span>
        <div className={css['input-wrapper']}>
          <input
            className={css['input']}
            name="name"
            type="text"
            value={trackingNumber}
            onChange={e => setTrackingNumber(e.target.value)}
            // pattern=/^\d{10,}$/
            title="Tracking number may contain only digits"
            required
            // autoComplete="off"
          />
          {trackingNumber && (
            <button
              type="button"
              className={css['inline-btn']}
              onClick={() => setTrackingNumber('')}
            >
              <svg className={css['svg-icon']} width="20" height="20">
                <use href={sprite + `#icon-close`}></use>
              </svg>
            </button>
          )}
        </div>
      </label>
      <label className={css['label']}>
        <span> Phone number: </span>
        <div className={css['input-wrapper']}>
          <input
            className={css['input']}
            type="tel"
            name="number"
            value={phoneNumber}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={e => setPhoneNumber(e.target.value)}
          />
          {phoneNumber && (
            <button
              type="button"
              className={css['inline-btn']}
              onClick={() => setPhoneNumber('')}
            >
              <svg className={css['svg-icon']} width="20" height="20">
                <use href={sprite + `#icon-close`}></use>
              </svg>
            </button>
          )}
        </div>
      </label>
      <button className={css['btn']} type="submit">
        <svg className={css['svg-icon']} width="24" height="24">
          <use href={sprite + `#icon-person_add`}></use>
        </svg>
      </button>
    </form>
  );
};

export default AddPackage;
