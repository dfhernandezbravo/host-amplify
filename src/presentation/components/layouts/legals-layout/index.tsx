import React, { useState } from 'react';
import MainLayout from '../main-layout';
import LinksSidebar from './links-sidebar';
import Accessibility from '../../molecules/accesibility';
import Modal from '../../atoms/modal';

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
  const [isOpen, setIsOpen] = useState(false);
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
        className={`flex flex-row gap-16 justify-center p-4 [&>div]:border ${shouldBeNegative ? '[&>div]:border-black [&_h2>button]:border-black' : ''}`}
      >
        <LinksSidebar shouldBeNegative={shouldBeNegative} />
        <div
          style={{
            filter: shouldBeNegative ? 'invert(1)' : '',
          }}
          className="md:w-[956px] bg-white rounded-md p-2 w-full"
        >
          {children}
        </div>
        <Accessibility
          shouldBeNegative={shouldBeNegative}
          incrementFontSize={incrementFontSize}
          decrementFontSize={decrementFontSize}
          toggleNegative={toggleNegative}
          openModal={() => setIsOpen(true)}
        />
      </div>
      <Modal
        title="Accesabilidad"
        isOpen={isOpen}
        setIsOpen={() => setIsOpen((prev) => !prev)}
      >
        Hello there!!!
      </Modal>
    </MainLayout>
  );
};

export default LegalsLayout;
