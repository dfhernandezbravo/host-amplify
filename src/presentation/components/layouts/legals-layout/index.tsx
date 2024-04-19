import React, { useState } from 'react';
import MainLayout from '../main-layout';
import LinksSidebar from './links-sidebar';
import Accessibility from '../../molecules/accesibility';

interface Props {
  children: React.ReactNode;
}

const fontSizes = [
  'xx-small',
  'x-small',
  'small',
  'medium',
  'large',
  'x-large',
  'xx-large',
];

const LegalsLayout = ({ children }: Props) => {
  const [shouldBeNegative, setShouldBeNegative] = useState(false);
  const [fontSizeIndex, setFontSizeIndex] = useState(3);

  const incrementFontSize = () => {
    if (fontSizeIndex + 1 === fontSizes.length) return;
    setFontSizeIndex((prev) => prev + 1);
  };

  const decrementFontSize = () => {
    if (fontSizeIndex === 0) return;
    setFontSizeIndex((prev) => prev - 1);
  };

  const toggleNegative = () => {
    if (!shouldBeNegative) {
      document.body.style.filter = 'grayscale(100%)';
      document.body.style.backgroundColor = 'black';
    } else {
      document.body.style.filter = '';
      document.body.style.backgroundColor = '';
    }
    setShouldBeNegative((prev) => !prev);
  };

  return (
    <MainLayout>
      <div
        style={{ fontSize: fontSizes[fontSizeIndex] }}
        className={`flex flex-col lg:flex-row gap-3 justify-center p-4 [&>div]:border ${shouldBeNegative ? '[&>div]:border-black [&_h2>button]:border-black' : ''}`}
      >
        <aside>
          <div className="flex flex-col gap-3 sticky top-36 h-fit">
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

        <div
          style={{
            filter: shouldBeNegative ? 'invert(1)' : '',
          }}
          className="bg-white rounded-md p-2 w-full"
        >
          {children}
        </div>
      </div>
    </MainLayout>
  );
};

export default LegalsLayout;
