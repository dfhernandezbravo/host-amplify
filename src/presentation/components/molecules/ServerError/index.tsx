import Image from 'next/image';
import { useRouter } from 'next/router';
import Button from '@/presentation/components/atoms/button';
import useDevice from '@/presentation/hooks/useDevice';
import {
  InfoContainer,
  ButtonContainer,
  Title,
  Description,
  MainContainer,
  BackgroundContainer,
  ErrorBox,
  ImageContainer,
} from './styles';

const ServerError = () => {
  const { device } = useDevice();
  const router = useRouter();

  return (
    <MainContainer>
      <ErrorBox>
        Error<span>500</span>
      </ErrorBox>
      <ImageContainer isMobile={device === 'Phone' || device === 'Tablet'}>
        <Image
          src={
            device === 'Desktop'
              ? '/images/silla-mesa.svg'
              : '/images/silla-mesa-mobile.svg'
          }
          alt="silla-mesa"
          width={430}
          height={340}
        />
      </ImageContainer>

      <InfoContainer>
        <Title>
          Lo sentimos, <span>hubo un error inesperado.</span>
        </Title>
        <Description>Estamos trabajando para resolverlo. </Description>
        <Description>
          Por favor, vuelve a intentarlo en unos segundos
        </Description>
        <ButtonContainer>
          <Button
            label="Reintentar"
            variant="primary"
            size="compact"
            onClick={() => {
              router.reload();
            }}
          />
          <Button
            label="Volver al inicio"
            variant="secondary"
            size="compact"
            onClick={() => {
              router.push('/');
            }}
          />
        </ButtonContainer>
      </InfoContainer>
      <BackgroundContainer></BackgroundContainer>
    </MainContainer>
  );
};

export default ServerError;
