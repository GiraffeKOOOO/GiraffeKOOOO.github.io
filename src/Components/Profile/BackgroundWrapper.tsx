import transparentImage from '../../assets/pbs-transparent.png';

type BackgroundWrapperProps = {
  children: JSX.Element[];
};

const BackgroundWrapper = ({ children }: BackgroundWrapperProps) => {
  return (
    <div
      style={{
        height: '600px',
        width: '100%',
        backgroundImage: `url(${transparentImage})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
      }}
    >
      {children}
    </div>
  );
};

export default BackgroundWrapper;
