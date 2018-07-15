import React from 'react'
import Typist from 'react-typist';

const AnimatedTyping = (props) => (
   <div className="positipnAnimateText">
      <Typist>
         <span className="chevron"> ~ $ </span>         
         <span className="bigFontSize animateColor">{props.animatedTextOne}</span>
         <Typist.Backspace count={32} delay={200} />
         <span className="bigFontSize animateColor">{props.animatedTextTwo}</span>
      </Typist>
   </div>
)

export default AnimatedTyping
