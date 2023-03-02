import { Oval } from 'react-loader-spinner';

export const PageLoader = () => {
  return (
    <div
      className="page-loader"
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <Oval
        height={80}
        width={80}
        color="#313237"
        wrapperStyle={{}}
        wrapperClass=""
        visible
        ariaLabel="oval-loading"
        secondaryColor="white"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};
