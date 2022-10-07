import React, { useState } from 'react';

const CreateListing = () => {
  const [formData, setFormData] = useState({
    type: 'rent',
    name: '',
    bedrooms: 1,
    bathrooms: 1,
    regularPrice: 0,
    discountedPrice: 0,
    parking: false,
    furnished: false,
    offer: true,
    address: '',
    description: '',
  });
  //   destructuring
  const {
    type,
    name,
    bedrooms,
    bathrooms,
    parking,
    furnished,
    offer,
    regularPrice,
    discountedPrice,
    address,
    description,
  } = formData;

  const onChange = () => {};
  return (
    <main className='max-w-md mx-auto px-2'>
      <h1 className='text-3xl text-center mt-6 font-bold'>Create a Listing</h1>
      <form>
        <p className='text-lg mt-6 font-semibold'>Sell / Rent</p>
        <div className='flex'>
          <button
            className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              type === 'rent'
                ? 'bg-white text-black'
                : 'bg-slate-600 text-white'
            }`}
            type='button'
            id='type'
            value='sale'
            onClick={onChange}
          >
            SELL
          </button>
          <button
            className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              type === 'sale'
                ? 'bg-white text-black'
                : 'bg-slate-600 text-white'
            }`}
            type='button'
            id='type'
            value='rent'
            onClick={onChange}
          >
            RENT
          </button>
        </div>
        <p className='text-lg mt-6 mb-1 font-semibold'>Name</p>
        <input
          className='w-full px-4 py-4 text-lg text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 outline-none mb-6'
          type='text'
          value={name}
          name='name'
          onChange={onChange}
          placeholder='Name of Property'
          maxLength='32'
          minLength='10'
          required
        />
        <div className='flex space-x-4 mb-6'>
          <div>
            <p className='text-lg font-semibold'>Beds</p>
            <input
              type='number'
              name='bedrooms'
              value={bedrooms}
              onChange={onChange}
              min='1'
              max='50'
              required
              className='w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 text-center rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600'
            />
          </div>
          <div>
            <p className='text-lg font-semibold'>Baths</p>
            <input
              type='number'
              name='bathrooms'
              value={bathrooms}
              onChange={onChange}
              min='1'
              max='10'
              required
              className='w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 text-center rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600'
            />
          </div>
        </div>

        <p className='text-lg mt-6 font-semibold'>Parking spot</p>
        <div className='flex'>
          <button
            className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              !parking ? 'bg-white text-black' : 'bg-slate-600 text-white'
            }`}
            type='button'
            name='parking'
            value={true}
            onClick={onChange}
          >
            YES
          </button>
          <button
            className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              parking ? 'bg-white text-black' : 'bg-slate-600 text-white'
            }`}
            type='button'
            name='parking'
            value={false}
            onClick={onChange}
          >
            NO
          </button>
        </div>

        <p className='text-lg mt-6 font-semibold'>Furnished</p>
        <div className='flex'>
          <button
            className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              !furnished ? 'bg-white text-black' : 'bg-slate-600 text-white'
            }`}
            type='button'
            name='furnished'
            value={true}
            onClick={onChange}
          >
            YES
          </button>
          <button
            className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              furnished ? 'bg-white text-black' : 'bg-slate-600 text-white'
            }`}
            type='button'
            name='furnished'
            value={false}
            onClick={onChange}
          >
            NO
          </button>
        </div>

        <p className='text-lg mt-6 mb-1 font-semibold'>Address</p>
        <textarea
          className='w-full px-4 py-4 text-lg text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 outline-none mb-6'
          type='text'
          value={address}
          name='address'
          onChange={onChange}
          placeholder='Address'
          required
        ></textarea>

        <p className='text-lg mb-1 font-semibold '>Description</p>
        <textarea
          className='w-full px-4 py-4 text-lg text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 outline-none mb-6'
          type='text'
          value={description}
          name='description'
          onChange={onChange}
          placeholder='Description'
          required
        ></textarea>

        <p className='text-lg  font-semibold'>Offer</p>
        <div className='flex'>
          <button
            className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              !offer ? 'bg-white text-black' : 'bg-slate-600 text-white'
            }`}
            type='button'
            name='offer'
            value={true}
            onClick={onChange}
          >
            YES
          </button>
          <button
            className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              offer ? 'bg-white text-black' : 'bg-slate-600 text-white'
            }`}
            type='button'
            name='offer'
            value={false}
            onClick={onChange}
          >
            NO
          </button>
        </div>

        {/* regular price */}
        <div className='flex items-center mb-6 mt-6'>
          <div className=''>
            <p className='text-lg font-semibold'>Regular Price</p>
            <div className='w-full justify-center flex items-center space-x-6'>
              <input
                type='number'
                name='regularPrice'
                value={regularPrice}
                onChange={onChange}
                required
                className='w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 text-center rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600'
              />

              {type === 'rent' && (
                <div>
                  <p className='text-md w-full whitespace-nowrap'>$ / Month</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* discounted price */}
        {offer && (
          <div className='flex items-center mb-6'>
            <div className=''>
              <p className='text-lg font-semibold'>Discounted price</p>
              <div className='flex w-full justify-center items-center space-x-6'>
                <input
                  type='number'
                  id='discountedPrice'
                  value={discountedPrice}
                  onChange={onChange}
                  min='50'
                  max='400000000'
                  required={offer}
                  className='w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center'
                />
                {type === 'rent' && (
                  <div className=''>
                    <p className='text-md w-full whitespace-nowrap'>
                      $ / Month
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* upload images */}
        <div className='mb-6'>
          <p className='text-lg font-semibold'>Images</p>
          <p className='text-gray-600'>
            The first image will be the cover (max 6)
          </p>
          <input
            type='file'
            name='images'
            onChange={onChange}
            accept='.jpg, .png, .jpeg'
            multiple
            required
            className='w-full px-3 py-1.5 text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:bg-white focus:border-slate-600'
          />
        </div>
        <button
          type='submit'
          className='mb-6 w-full px-7 py-3 bg-blue-600 text-white font-medium text-sm uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
        >
          Create Listing
        </button>
      </form>
    </main>
  );
};

export default CreateListing;
