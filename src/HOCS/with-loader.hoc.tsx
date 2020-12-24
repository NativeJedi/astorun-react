import React, { useState } from 'react';
import Spinner from '../components/spinner/spinner.component';

export interface IWithLoaderProps {
  isLoading: boolean;
  setLoading: (isLoading: boolean) => void;
}

const withLoader = <P,>(
  Inner: React.ComponentType<P>
): React.FC<P & IWithLoaderProps> => {
  // eslint-disable-next-line no-param-reassign
  Inner.displayName = `withLoader(${Inner.displayName || Inner.name})`;

  return (props) => {
    const [isLoading, setLoading] = useState<boolean>(false);

    return (
      <>
        {isLoading && <Spinner />}
        <div style={isLoading ? { display: 'none' } : {}}>
          <Inner {...props} isLoading={isLoading} setLoading={setLoading} />
        </div>
      </>
    );
  };
};

export default withLoader;
