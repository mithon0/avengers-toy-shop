import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const ShopCategory = () => {
  const [category1, setcategory1] = useState([])
  const [category2, setcategory2] = useState([])
  const [category3, setcategory3] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/toys/Avengers')
      .then(res => res.json())
      .then(data => setcategory1(data))
  }, [])
  useEffect(() => {
    fetch('http://localhost:5000/toys/Superman')
      .then(res => res.json())
      .then(data => setcategory2(data))
  }, [])
  useEffect(() => {
    fetch('http://localhost:5000/toys/Tranformar')
      .then(res => res.json())
      .then(data => setcategory3(data))
  }, [])

  return (
    <Tabs className="bg-slate-200 pb-10">
      <TabList className='flex gap-10 border  p-10 bg-slate-300 mx-auto justify-center'>
        <Tab className='btn w-36'>Avengers</Tab>
        <Tab className='btn w-36'>SuperMan</Tab>
        <Tab className='btn w-36'>Transformar</Tab>
      </TabList>

      <TabPanel>
        <h2 className='text-center text-5xl font-bold m-10'>Avengers Toys</h2>
        <div>
          {
            category1.map(c1 => <div className='mx-28 mb-5'>
              <div className="card card-side bg-base-100 shadow-xl">
                <figure className='w-72'><img className='w-full rounded-lg ml-4' src={c1.picture} alt="Movie" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{c1.name}</h2>
                  <p>{c1.description}</p>
                  <h1>price:${c1.price}</h1>
                  <h1>rating: {c1.rating}</h1>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Details</button>
                  </div>
                </div>
              </div>
            </div>)
          }
        </div>

      </TabPanel>
      <TabPanel>
        <h2 className='text-center text-5xl font-bold m-10'>SuperMan Toys</h2>
        {
          category2.map(c2=><div className='mx-28 mb-5'>
            <div className="card card-side bg-base-100 shadow-xl">
              <figure className='w-72'><img className='w-full rounded-lg ml-4' src={c2.picture} alt="Movie" /></figure>
              <div className="card-body">
                <h2 className="card-title">{c2.name}</h2>
                <p>{c2.description}</p>
                <h1>price:${c2.price}</h1>
                <h1>rating: {c2.rating}</h1>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            </div>
          </div>)
        }
      </TabPanel>
      <TabPanel>
        <h2 className='text-center text-5xl font-bold m-10'>TransFormar Toys</h2>
        {
          category3.map(c3=><div className='mx-28  pb-10'>
            <div className="card card-side bg-base-100 shadow-xl">
              <figure  className='w-72'><img className='w-full rounded-lg ml-4' src={c3.picture} alt="Movie" /></figure>
              <div className="card-body">
                <h2 className="card-title">{c3.name}</h2>
                <p>{c3.description}</p>
                <h1>price:${c3.price}</h1>
                <h1>rating: {c3.rating}</h1>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            </div>
          </div>)
        }
      </TabPanel>
    </Tabs>
  );
};

export default ShopCategory;