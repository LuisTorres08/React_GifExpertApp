import React, { Fragment, useEffect, useState } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

const {data, loading} = useFetchGifs(category);
  
  return (
      <Fragment>
          <h3 className='animate__animated animate__fadeIn'> {category} </h3>

          {loading && <p card animate__animated animate__flash>Loading</p>}

          <div className='card-grid'>

            {
                data.map(img => (
                   <GifGridItem
                       key={img.id}
                       {...img}
                  />
                ))
            }
                     

          </div>

      </Fragment>
    
  )
}
