import React from 'react'
import CardSlider from './CardSlider'

export default React.memo(function Slider({movies}) {
  const getMovesFormRange = (from,to) =>{
      return movies.slice(from,to);
  }
  return (
    <div>
      <CardSlider data={getMovesFormRange(0,10)} title='Trending Now'/>
      <CardSlider data={getMovesFormRange(10,20)} title='New Realises'/>
      <CardSlider data={getMovesFormRange(20,30)} title='Blockbuster Movies'/>
      <CardSlider data={getMovesFormRange(30,40)} title='Netflix Popular'/>
      <CardSlider data={getMovesFormRange(40,50)} title='Movies Action'/>
      <CardSlider data={getMovesFormRange(50,60)} title='Epics'/>
    </div>  
  )
})