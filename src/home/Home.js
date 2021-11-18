import React from 'react';
import ListItems from './ListItems';
import Loading from '../helper/Loading';
import { useSelector } from 'react-redux';
import { productsSelector } from '../store/products';
import FilterHeader from '../filters/FilterHeader';

const Home = () => {
  const { status } = useSelector(productsSelector);

  if (status === 'loading') return <Loading />;

  return (
    <div>
      <FilterHeader />
      <ListItems />
    </div>
  );
};

export default Home;
