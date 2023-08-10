import { useSelector } from 'react-redux';
import DeleteContactBtn from 'components/DeleteContactBtn/DeleteContactBtn';
import css from './PackageList.module.css';
import {
  getIsPackegesLoading,
  getPackages,
} from 'redux/selectors/packagesSelectors';

const PackageList = () => {
  const packages = useSelector(getPackages);
  const isLoading = useSelector(getIsPackegesLoading);

  // const tenderItems = items => {
  //   if (items.length === 0) return;
  //   const tenderItems = items.map((item, index) => {
  //     // In this example, we are generating a list item for each element in the dataArray
  //     return (
  //       <li key={index}>
  //         {item?.description} {item?.unit?.name} {item?.quantity}
  //       </li>
  //     );
  //   });
  //   return tenderItems;
  // };

  console.dir(packages);

  return isLoading ? (
    'Loading...'
  ) : packages.length ? (
    <ul className={css['list']}>
      {packages.map(pack => (
        <li key={'li' + pack.id} className={css['item']}>
          <div>
            <p>{pack._tracking_number}</p>
          </div>
          <DeleteContactBtn id={pack.id.toString()} />
        </li>
      ))}
    </ul>
  ) : packages.length === 0 ? (
    <p>Your package list is empty</p>
  ) : (
    <p>There aren't packages matching Your query</p>
  );
};

export default PackageList;
