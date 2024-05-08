import React, { useEffect, useRef, useState } from 'react';
import MainLayout from '../main-layout';
import LinksSidebar from './links-sidebar';
import Accessibility from '../../molecules/accesibility';
import { LegalsLayoutContainer } from './styles';

interface Props {
  children: React.ReactNode;
}

const fontSizes = ['medium', 'large', 'x-large', 'xx-large'];

const LegalsLayout = ({ children }: Props) => {
  const [shouldBeNegative, setShouldBeNegative] = useState(false);
  const [fontSizeIndex, setFontSizeIndex] = useState(0);
  const layoutRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    return () => {
      document.body.style.filter = '';
      document.body.style.backgroundColor = '';
    };
  }, []);

  const incrementFontSize = () => {
    if (fontSizeIndex + 1 === fontSizes.length) return;
    setFontSizeIndex((prev) => prev + 1);
  };

  const decrementFontSize = () => {
    if (fontSizeIndex === 0) return;
    setFontSizeIndex((prev) => prev - 1);
  };

  const toggleNegative = () => {
    document.body.style.filter = `${!shouldBeNegative ? 'grayscale(100%)' : ''}`;
    document.body.style.backgroundColor = `${!shouldBeNegative ? 'black' : ''}`;
    layoutRef.current!.style.filter = `${!shouldBeNegative ? 'invert(1)' : ''}`;
    setShouldBeNegative((prev) => !prev);
  };

  return (
    <MainLayout>
      <LegalsLayoutContainer
        ref={layoutRef}
        fontSize={fontSizes[fontSizeIndex]}
        isNegative={shouldBeNegative}
      >
        <aside>
          <div>
            <Accessibility
              shouldBeNegative={shouldBeNegative}
              incrementFontSize={incrementFontSize}
              decrementFontSize={decrementFontSize}
              toggleNegative={toggleNegative}
              fontSize={fontSizes[fontSizeIndex]}
            />
            <LinksSidebar shouldBeNegative={shouldBeNegative} />
          </div>
        </aside>

        <div>{children}</div>
      </LegalsLayoutContainer>
    </MainLayout>
  );
};

export default LegalsLayout;
