import { useContext } from 'react';
import { StateContext } from '../components/Providers';
import { StateType } from '../types';

const useGlobalState = (): StateType => {
  const stateContext = useContext(StateContext);
  if (stateContext === undefined) {
    throw new Error('Global context undefined');
  }
  return stateContext.state;
}
  
export default useGlobalState;
