import React, { useState, useEffect } from 'react';
import { IconContext } from 'react-icons';

import { FaAngleUp } from 'react-icons/fa';
import { ScrollBtn } from './ScrollUpBtn.styled';

export const ScrollUpBtn = () => {
  const [showUpBtn, setShowUpBtn] = useState(false);

  useEffect(() => {
    const onScroll = e => () => {
      if (window.scrollY > 400) {
        setShowUpBtn(true);
      } else {
        setShowUpBtn(false);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (showUpBtn)
    return (
      <ScrollBtn>
        <IconContext.Provider value={{ size: '2.5em' }}>
          <FaAngleUp onClick={handleScrollToTop} />
        </IconContext.Provider>
      </ScrollBtn>
    );
};
