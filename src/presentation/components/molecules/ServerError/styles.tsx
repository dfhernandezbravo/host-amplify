import styled from 'styled-components';

type InfoContainerProps = {
  isMobile: boolean;
};

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoContainer = styled.div`
  padding-left: 33px;
  position: absolute;

  @media (max-width: 1024px) {
    padding: 33px;
    position: static;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  padding-top: 32px;

  button {
    &:first-child {
      max-width: 134px;
    }

    &:last-child {
      max-width: 164px;
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column;

    button {
      &:first-child,
      &:last-child {
        max-width: 100%;
        height: 44px;
      }
    }
  }
`;

export const Title = styled.h1`
  color: #333;
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
  margin: 160px 0 16px 0;

  @media (max-width: 1024px) {
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    display: flex;
    flex-direction: column;
    margin: 30px 0 16px 0;
  }
`;

export const Description = styled.p`
  color: #626262;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;

  @media (max-width: 1024px) {
    font-size: 14px;
    line-height: 18px;
    text-align: center;
  }
`;

export const BackgroundContainer = styled.div`
  background-color: #f1f3f4;
  height: 100px;
`;

export const ErrorBox = styled.div`
  background-image: url('/images/error-box.svg');
  background-repeat: no-repeat;
  background-size: contain;
  color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-size: 22px;
  width: 140px;
  height: 220px;
  position: absolute;
  top: 200px;
  right: 45px;

  @media (max-width: 767px) {
    width: 53px;
    height: 78px;
    font-size: 10px;
    top: 135px;
    right: 15px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 77px;
    height: 114px;
    font-size: 12px;
    top: 145px;
    right: 40px;
  }
`;

export const ImageContainer = styled.div<InfoContainerProps>`
  background-image: ${(props) =>
    props.isMobile
      ? `url('/images/escalera-mobile.svg')`
      : `url('/images/escalera.svg')`};
  background-size: 96%;
  background-position: -20px 0px;
  background-repeat: no-repeat;
  background-color: #b4c2cb;

  img {
    margin: 320px 0 0 200px;
    position: relative;
    top: 22px;
  }

  @media (max-width: 767px) {
    min-height: 293px;

    img {
      margin: 134px 0 0 20px;
      top: 20px;
      width: 60%;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    background-position: left top;
    min-height: 400px;

    img {
      margin: 120px 0 0 20px;
      top: 59px;
      width: 40%;
    }
  }
`;
