import { ColorRing } from 'react-loader-spinner';

export const Loader = () => (
  <ColorRing
    visible={true}
    ariaLabel='blocks-loading'
    wrapperStyle={{}}
    wrapperClass='blocks-wrapper'
    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  />
);
