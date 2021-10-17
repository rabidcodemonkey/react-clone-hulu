import React from 'react';
import Image from 'next/image';
import { ThumbUpIcon } from '@heroicons/react/outline';

const BASE_URL = 'https://image.tmdb.org/t/p/original';

function format(value) {
  return value && `${value} · `;
}

function Thumbnail({ result }) {
  const title = result.title || result.original_title || result.original_name;
  const mediaType = format(result.media_type);
  const airDate = format(result.release_date || result.first_air_date);

  function outputResult() {
    console.log('Result', result);
  }

  return (
    <div
      className='p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50'
      onClick={outputResult}
    >
      <Image
        layout='responsive'
        src={`${BASE_URL}${result.backdrop_path || result.poster_path}`}
        height={1080}
        width={1920}
      />

      <div className='p-2'>
        <p className='truncate max-w-md'>{result.overview}</p>
        <h2 className='mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold'>
          {title}
        </h2>
        <p className='flex items-center opacity-0 group-hover:opacity-100'>
          {mediaType}
          {airDate}
          <ThumbUpIcon className='h-5 mx-2' />
          {result.vote_count}
        </p>
      </div>
    </div>
  );
}

export default Thumbnail;
