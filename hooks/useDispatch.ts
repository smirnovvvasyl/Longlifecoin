import { useContext } from 'react';
import { StateContext } from '../components/Providers';

const useDispatch = () => {
  const stateContext = useContext(StateContext);
  if (stateContext === undefined) {
    throw new Error('Global context undefined');
  }
  return stateContext.dispatch;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
}

export default useDispatch;
