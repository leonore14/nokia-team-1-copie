import React, { useState } from 'react';
import './SelectorToolStyle.css';
import SelectorToolChoices from './SelectorToolChoices';
import MatchResult from './MatchResult';



function SelectorTool() {

  const [ count, setCount ] = useState(0)

  const handleCount = () => {
    setCount(count+1)
  }

  return (
    <>
    
        <SelectorToolChoices handleCount={handleCount} />
        {count >= 4 &&  <MatchResult /> }
    
    </>

  );
}

export default SelectorTool;