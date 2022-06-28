
import Head from 'next/head';
import NavBar from '../components/NavBar';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import {
  faqs,
  MAX_PER_WALLET,
  purchaseSteps,
} from '../types/consts';
import PurchaseStepCard from '../components/PurchaseStepCard';
import { Accordion } from '../components/accordion';
import useGlobalState from '../hooks/useGlobalState';
import ConnectWalletButton from '../components/ConnectWalletButton';


export const Home = (): JSX.Element => {
  const [message, setMessage] = useState('');
  const {web3Provider, address } = useGlobalState()
  const [isMinting, setIsMinting] = useState(false);
  const [amount, setAmount] = useState(0);
  const [ethPrice, setETHPrice] = useState();
  const [bnbPrice, setBNBPrice] = useState();
  const [payCurrency, setPayCurrency] = useState(0);
 const ethPath =
    "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd";
  const bnbPath =
    "https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd";

     useEffect(() => {
    axios.get(ethPath).then((response) => {
      setETHPrice(response.data.ethereum.usd);
   
    });
    axios.get(bnbPath).then((response) => {
      setBNBPrice(response.data.binancecoin.usd);
   
    });
  }, [ethPath, bnbPath]);
  

  const handleCurrency =(e) => {
    // handleNetworkSwitch(e.target.value);
      setPayCurrency(e.target.value === "97" ? bnbPrice:ethPrice);    
  }
    
  const onMint = useCallback(async () => {
    if (amount === 0 || amount > MAX_PER_WALLET) {
      setMessage('Please put a valid mint amount.');
      return;
    }
    try {
      setIsMinting(true);
      setMessage('');
      alert(`You need ${payCurrency}  for buying our LLC. \n Do you agree?`)
      // const mintTx = await contract.mint(address, amount, { value: owner === address ? 0 : payAmount });
      // await mintTx.wait();
      // setMessage('Mint successful.');
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
      setMessage(e.reason || e.message || 'Contract interaction error');
    } finally {
      setIsMinting(false);
    }
  }, [address, amount, web3Provider]);
  return (
    <div className="bg-gray-900 text-white">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <NavBar/>
      </header>

      <main className="container mt-16 mx-auto px-3 md:px-4">
        <section id="mint">
          {/* <p className="text-center text-4xl font-bold text-orange-400 uppercase">Presale is Live</p> */}
          <div className="max-w-full md:max-w-screen-2xl mx-auto mt-4 flex flex-col items-center justify-between md:flex-row">
            <div className="w-full md:w-1/2 mt-6 md:mt-0 flex flex-col px-4">
              <div className="text-4xl font-bold uppercase">Why people wanna purchase this <span className="text-yellow-600">LLC</span></div>
              <p className="py-2 mb-2">You can get one of the world &lsquo; s most valuable health knowledge for Free. </p>
                <p className="py-2 mb-2"> For the benefit of mankind! </p>
                <p>{ethPrice} vs {bnbPrice}</p> 
                <button className="blue_btn capitalize w-7/12">download whitepaper</button>
            </div>
            <div className="w-full md:w-1/2 mt-6 md:mt-0 flex flex-col px-4">
              <p className="text-4xl font-bold mt-4">1 LLC = $1.5 USD</p>
              <div className="mt-6">
                <p className="mb-2">Input the amount of LLC you would like to purchase.</p>
                <div className=''>
                  <div className="flex items-center mb-6 pd-3 w-3/4">
                  <button className="bg-white hover:bg-gray-100 active:bg-gray-200 text-xl font-bold pl-4 pr-2 py-2 text-gray-900 rounded-l-full h-12" onClick={() => setAmount(Math.max(0, amount - 1))}>-</button>
                  <input type="number" className="w-20 h-12 outline-0 text-gray-900 text-center" placeholder="1" value={amount} onChange={evt => setAmount(Number(evt.target.value))}/>
                  <button className="bg-white hover:bg-gray-100 active:bg-gray-200 text-xl font-bold pl-2 pr-4 py-2 text-gray-900 rounded-r-full h-12" onClick={() => setAmount(Math.min(MAX_PER_WALLET, amount + 1))}>+</button>
                  <div className='px-4'>LLC: {}</div>
                  </div>
                  
                </div>
                
                <div className='flex items-center'>
                  
                {web3Provider ? <button className="btn " onClick={onMint} disabled={isMinting}>{isMinting ? 'BUYING...' : ' B U Y '}</button> : <ConnectWalletButton/>}
                <div className=' text-white pl-4'>
                  <select id="currencies" className="btn outline-0"  onChange={handleCurrency}>
                    <option value="4">ETH</option>
                    <option selected value="97">BNB</option>
                    {/* <option value="CA"></option>
                    <option value="FR"></option> */}
s                </select>
                {/* <input type="number" className='bg-slate-900 border-0 outline-none pl-4'/> */}
                </div>
                </div>
                <p className="text-red-300" dangerouslySetInnerHTML={{ __html: message || '&nbsp;' }}/>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-20">
        
          <div className="mt-12 flex flex-col items-center md:flex-row">
            <div className="w-full md:w-1/2 px-0 md:px-4">
              <img src="/assets/logo.svg" alt="Coin" placeholder="blur"/>
            </div>
            <div className="w-full md:w-1/2 mt-6 md:mt-0 flex flex-col px-4">
              <p className="text-sky-500 font-medium">ABOUT</p>
              <p className="text-3xl font-bold font-semibold mr-0 xl:mr-20">A compelling value proposition.</p>
              <p className="mt-10 text-lg font-medium">LongLifeCoin (LLC) is an open source, Bitcoin-like digital currency which uses a proof of work script algorithm.
The genesis block was mined on March 1st, 2014. </p>
              <p className="mt-6 text-lg font-medium">The total number of mineable LLC is 1,000,000,000. The mining of LLC is divided into Epochs: each Epoch mines 36000 blocks of coins and is targeted to last approximately 25 days.</p>
            </div>
          </div>
        </section>

        <section className="mt-20">
          <p className="text-center text-4xl font-semibold text-sky-500">TEAM MEMBERS</p>
          {/* <div className="w-full flex justify-center">
            <Tabs options={traitOptions} selected={traitSelected} onChange={setTraitSelected}/>
          </div> */}
          <div className="py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            
          </div>
        </section>

        <section className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-4">
          {purchaseSteps.map(step => <PurchaseStepCard
            key={step.title}
            image={step.image}
            title={step.title}
            content={step.content}
            label={step.label}
            link={step.link}
            padding={step.padding}
          />)}
        </section>

        <section className="mt-20">
          <p className="text-4xl mb-10 text-sky-500 text-center font-bold">FREQUENTLY ASKED QUESTIONS</p>
          <div className="px-0 md:px-20">
            {faqs.map(faq => <Accordion content={faq.content} name={faq.title.toUpperCase()} key={faq.title} />)}
          </div>
        </section>

        <section className="mt-20">
          <p className="text-2xl text-sky-500 font-semibold text-center">What are you waiting for?</p>
          <p className="text-4xl font-bold text-center mt-6">BECOME AN LLC TOKEN HOLDER!</p>
        </section>

        <section className="mt-20">
          <div className="flex justify-center mb-2">
            Above Information is not guaranteed. And subject to change without notice.
          </div>
          <p className="text-sky-500 text-center font-semibold pb-4">&copy;2022 LongLife Coin - Bitcoin and Cryptocurrency ICO System</p>
        </section>
      </main>
    </div>
  )
}

export default Home
