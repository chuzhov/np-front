import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { deletePackageOP } from 'redux/operations/packageOps';
import css from './DeleteContactBtn.module.css';
import sprite from '../../img/sprites.svg';

const DeleteContactBtn = ({ id }) => {
  const dispatch = useDispatch();
  return (
    <button
      className={css['del-btn']}
      onClick={() => dispatch(deletePackageOP(id))}
    >
      <svg className={css['svg-icon']} width="20" height="20">
        <use href={sprite + `#icon-delete`}></use>
      </svg>
    </button>
  );
};

DeleteContactBtn.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DeleteContactBtn;
