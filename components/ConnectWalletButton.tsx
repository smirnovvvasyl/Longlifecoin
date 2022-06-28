import Web3Modal from 'web3modal';
import { providerOptions } from '../types/consts';
import { useCallback, useEffect } from 'react';
import { providers } from 'ethers';
import useGlobalState from '../hooks/useGlobalState';
import useDispatch from '../hooks/useDispatch';
import { DEFAULT_CHAIN_ID, DEFAULT_CHAIN_ID_HEX } from '../lib/chains';

let web3Modal;
if (typeof window !== 'undefined') {
  web3Modal = new Web3Modal({
    network: 'mainnet', // optional
    cacheProvider: true,
    providerOptions, // required
  });
}

function ConnectWalletButton() {
  const { provider, web3Provider, chainId } = useGlobalState()
  const dispatch = useDispatch()

  const connect = useCallback(async function () {
    // This is the initial `provider` that is returned when
    // using web3Modal to connect. Can be MetaMask or WalletConnect.
    const provider = await web3Modal.connect()

    // We plug the initial `provider` into ethers.js and get back
    // a Web3Provider. This will add on methods from ethers.js and
    // event listeners such as `.on()` will be different.
    const web3Provider = new providers.Web3Provider(provider)

    const signer = web3Provider.getSigner()
    const address = await signer.getAddress()

    // const coinContract = new Contract(Coin["token"].address, Coin["token"].abi, web3Provider.getSigner());
    // const presaleContract = new Contract(Coin["presale"].address, Coin["presale"].abi, web3Provider.getSigner());
    // var amountToken:any = await web3Provider.getBalance(address);
    // amountToken = ethers.utils.formatUnits(amountToken, 18);
    // console.log(amountToken);


    const network = await web3Provider.getNetwork()

    dispatch({
      type: 'SET_WEB3_PROVIDER',
      provider,
      web3Provider,
      address,
      chainId: network.chainId,
    })
  }, [dispatch])

  useEffect(() => {
    if (provider && chainId !== DEFAULT_CHAIN_ID) {
      if (window && window.ethereum) {
        window.ethereum.request({method: 'wallet_switchEthereumChain', params: [{ chainId: DEFAULT_CHAIN_ID_HEX }]});
      }
    }
  }, [chainId, provider])

  const disconnect = useCallback(
    async function () {
      await web3Modal.clearCachedProvider()
      if (provider?.disconnect && typeof provider.disconnect === 'function') {
        await provider.disconnect()
      }
      dispatch({
        type: 'RESET_WEB3_PROVIDER',
      })
    },
    [provider]
  )

  // Auto connect to the cached provider
  useEffect(() => {
    if (web3Modal.cachedProvider) {
      connect()
    }
  }, [connect])

  // A `provider` should come with EIP-1193 events. We'll listen for those events
  // here so that when a user switches accounts or networks, we can update the
  // local React state with that new information.
  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = (accounts: string[]) => {
        // eslint-disable-next-line no-console
        console.log('accountsChanged', accounts)
        dispatch({
          type: 'SET_ADDRESS',
          address: accounts[0],
        })
      }

      // https://docs.ethers.io/v5/concepts/best-practices/#best-practices--network-changes
      const handleChainChanged = (_hexChainId: string) => {
        window.location.reload()
      }

      const handleDisconnect = (error: { code: number; message: string }) => {
        // eslint-disable-next-line no-console
        console.log('disconnect', error)
        disconnect()
      }

      provider.on('accountsChanged', handleAccountsChanged)
      provider.on('chainChanged', handleChainChanged)
      provider.on('disconnect', handleDisconnect)

      // Subscription Cleanup
      return () => {
        if (provider.removeListener) {
          provider.removeListener('accountsChanged', handleAccountsChanged)
          provider.removeListener('chainChanged', handleChainChanged)
          provider.removeListener('disconnect', handleDisconnect)
        }
      }
    }
  }, [provider, disconnect, dispatch])

  return web3Provider ? (
    <button className="btn " onClick={disconnect}>Disconnect</button>
  ) : (
    <button className="btn " onClick={connect}>Connect</button>
  )
}

export default ConnectWalletButton;
