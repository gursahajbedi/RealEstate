import { useState } from 'react';

const Filter= () => {
 const [home, setHome] = useState('All');

 const handleFilterChange = (e) => {
    setHome(e.target.value);
    //add a context call here
 };

 return (
    <div className='container'>
      <h2>Home</h2>
      <div>
        <select className='form-select' value={home} onChange={handleFilterChange}>
          <option value="All">All</option>
          <option value="apartment">Apartment</option>
          <option value="townhouse">Townhouse</option>
          <option value="house">House</option>
          <option value="condo">Condo</option>
        </select>
      </div>
    </div>
 );
};

export default Filter;