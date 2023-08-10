import Init from './Init/Init';
//import AddContact from './AddContact/AddContact';
import PackageList from './SuspectedTenderList/PackageList';
//import Filter from './Filter/Filter';

const App = () => {
  return (
    <div
      style={{
        padding: '1rem',
      }}
    >
      <Init />
      <h1>Package list</h1>
      {/* <AddContact /> */}
      {/* <Filter /> */}
      <PackageList />
    </div>
  );
};

export default App;
