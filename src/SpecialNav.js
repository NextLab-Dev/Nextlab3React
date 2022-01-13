// import { useSelector } from 'react-redux';

const SpecialNav = () => {
  // const language = useSelector((state) => state.language);
  return (
    <div className="specialNavContainer">
      <ul>
        <li><a href="/" className="specName">Nextlab 3</a></li>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/teams">Teams</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default SpecialNav;
