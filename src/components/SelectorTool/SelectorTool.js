import React, { useState } from 'react';
import './SelectorToolStyle.css';
import SelectorToolChoices from './SelectorToolChoices';
import MatchResult2 from './MatchResult2';



function SelectorTool() {

  const [ count, setCount ] = useState(0)

  const handleCount = () => {
    setCount(count+1)
  }

  return (
    <>
    
        <SelectorToolChoices handleCount={handleCount} />
        {count >= 4 &&  <MatchResult2 /> }
    
    </>

  );
}

export default SelectorTool;