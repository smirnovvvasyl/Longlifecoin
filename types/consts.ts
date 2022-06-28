import WalletConnectProvider from '@walletconnect/web3-provider';
import WalletLink from 'walletlink';
import { TabOption, Traits, TraitType } from './index';
import { enumToLabel } from '../utils/enum.util';
import { BigNumber } from 'ethers';

const INFURA_ID = '460f40a260564ac4a4f4b3fffb032dad';

export const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: INFURA_ID, // required
    },
  },
  'custom-walletlink': {
    display: {
      logo: 'https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0',
      name: 'Coinbase',
      description: 'Connect to Coinbase Wallet (not Coinbase App)',
    },
    options: {
      appName: 'Coinbase', // Your app name
      networkUrl: `https://mainnet.infura.io/v3/${INFURA_ID}`,
      chainId: 1,
    },
    package: WalletLink,
    connector: async (_, options) => {
      const {appName, networkUrl, chainId} = options;
      const walletLink = new WalletLink({
        appName,
      });
      const provider = walletLink.makeWeb3Provider(networkUrl, chainId);
      await provider.enable();
      return provider;
    },
  },
};

export const traitOptions: TabOption[] = Object.keys(TraitType).map(key => ({ label: enumToLabel(key), value: TraitType[key] }));

export const traits: Traits = {
  [TraitType.Accessories]: [
    { name: 'blank', rarity: 20 },
    { name: 'gun', rarity: 20 },
    { name: 'stick', rarity: 20 },
  ],
  [TraitType.Background]: [
    { name: 'blue', rarity: 20 },
    { name: 'brown', rarity: 20 },
    { name: 'cream', rarity: 20 },
    { name: 'gray', rarity: 20 },
    { name: 'green', rarity: 20 },
    { name: 'light blue', rarity: 20 },
    { name: 'light green', rarity: 20 },
    { name: 'orange', rarity: 20 },
  ],
  [TraitType.Clothes]: [
    { name: 'army clothes', rarity: 20 },
    { name: 'black shirt', rarity: 20 },
    { name: 'black suit', rarity: 20 },
    { name: 'blank', rarity: 20 },
    { name: 'blue shirt casino uniform', rarity: 20 },
    { name: 'blue shirt', rarity: 20 },
    { name: 'blue suit', rarity: 20 },
    { name: 'brown suit', rarity: 20 },
    { name: 'casino uniform', rarity: 20 },
    { name: 'detective uniform', rarity: 20 },
    { name: 'Firefighter', rarity: 20 },
    { name: 'hawaii', rarity: 20 },
    { name: 'maid uniform', rarity: 20 },
    { name: 'orchestra conductor', rarity: 20 },
    { name: 'police biker', rarity: 20 },
    { name: 'police chief', rarity: 20 },
    { name: 'police nypd', rarity: 20 },
    { name: 'purple shirt casino uniform', rarity: 20 },
    { name: 'red shirt casino uniform', rarity: 20 },
    { name: 'security A', rarity: 20 },
    { name: 'security B', rarity: 20 },
    { name: 'white scurity guard', rarity: 20 },
    { name: 'white shirt', rarity: 20 },
  ],
  [TraitType.Eye]: [
    { name: 'angry eyes', rarity: 20 },
    { name: 'closed eyes', rarity: 20 },
    { name: 'cynical eyes', rarity: 20 },
    { name: 'normal eyes', rarity: 20 },
    { name: 'sad eyes', rarity: 20 },
  ],
  [TraitType.FaceWear]: [
    { name: 'black glasses', rarity: 20 },
    { name: 'blank', rarity: 20 },
    { name: 'metal mask', rarity: 20 },
    { name: 'mustache', rarity: 20 },
    { name: 'red glasses', rarity: 20 },
    { name: 'white glasses', rarity: 20 },
  ],
  [TraitType.Footwear]: [
    { name: 'blank', rarity: 20 },
    { name: 'shoes', rarity: 20 },
    { name: 'slippers', rarity: 20 },
  ],
  [TraitType.Headwear]: [
    { name: 'blank', rarity: 20 },
    { name: 'guard hat', rarity: 20 },
    { name: 'police hat', rarity: 20 },
    { name: 'sheriff\'s hat', rarity: 20 },
    { name: 'sleeping hat', rarity: 20 },
    { name: 'tribal hat', rarity: 20 },
  ],
  [TraitType.Mouth]: [
    { name: 'beard', rarity: 20 },
    { name: 'eat bones', rarity: 20 },
    { name: 'eat carrot', rarity: 20 },
    { name: 'golden teeth', rarity: 20 },
    { name: 'normal mouth', rarity: 20 },
    { name: 'tom\'s mouth', rarity: 20 },
    { name: 'vampire teeth', rarity: 20 },
  ],
  [TraitType.Neck]: [
    { name: 'blank', rarity: 20 },
    { name: 'blue scraf', rarity: 20 },
    { name: 'collar', rarity: 20 },
    { name: 'red scarf fashion', rarity: 20 },
    { name: 'red scraf', rarity: 20 },
    { name: 'yellow scraf', rarity: 20 },
  ],
  [TraitType.Skin]: [
    { name: 'Johnny Chiang', rarity: 20 },
    { name: 'Gang Cheng', rarity: 20 },
    { name: 'Bhargav Patel', rarity: 20 },
    { name: 'Morita Amaya', rarity: 20 },
  ],
};

export const purchaseSteps = [
  {
    image: '/assets/steps/metamask.gif',
    title: 'DOWNLOAD METAMASK',
    content: 'The Chrome Metamask extension will allow you to make purchases with Ethereum. If you are on mobile, please use the Metamask app.',
    label: 'METAMASK',
    link: 'https://metamask.io',
  },
  {
    image: '/assets/steps/ethereum.gif',
    title: 'ADD SOME ETH',
    content: 'You can purhcase Ethereum through your Metamask wallet using Wyre or send Ethereum from an exchange like Coinbase.',
    label: 'COINBASE',
    link: 'https://coinbase.com',
  },
  {
    image: '/assets/logo.svg',
    title: 'PURCHASE OUR LLC',
    content: 'Connect your Metamask to our website. Once connected, you will be able to purchase our LLC and approve the transaction.',
    label: 'PURCHASE',
    link: '#mint',
    padding: 2,
  },
];

export const faqs = [
  {
    title: ' What are the benefits of digital currenct?',
    content: ' As payments in digital currencies are made directly between the transacting parties without the need for any intermediaries, the transactions are usually instantaneous and low-cost. This fares better compared to traditional payment methods that involve banks or clearinghouses.',
  },
  {
    title: 'How long has digital currenct existed?',
    content: 'In 2009, the first decentralized cryptocurrency, Bitcoin, was created by presumably pseudonymous developer Satoshi Nakamoto. It used SHA-256, a cryptographic hash function, in its proof-of-work scheme.',
  },
  {
    title: 'How will digital currency affect daily life in the US and around the world?',
    content: 'Using digital currency, targeted social assistance will also become truly targeted, and commercial banks and payment systems will not be able to receive their percentage from such payments. Digital currencies offer even more opportunities if they are freely convertible.',
  },
  {
    title: 'Why should I use LLC currency and how is it different from other currencies?',
    content: 'Our tokens are not meant to make money like other tokens. Our tokens are designed to help people live longer and enjoy life. As everyone knows, without life, what do you need money for? Above all, life is the most precious thing. Let	&sbquo; s enjoy our life.',
  },
  {
    title: 'How is LLC helping entrepreneurs?',
    content: 'Long Life Coin attracts the attention of entrepreneurs, philanthropists and investors because of its ideas and vitality. They keep in contact with owner to become the owner of this token. The owner is 76 years old Gentleman, he do not want to show of to public, but all idea is from him. There is no doubt that LongLifeCoin will become a global token.',
  },
  {
    title: 'How do I convert my LLC currency into US dollars or other currencies?',
    content: 'How do you convert one currency to another on crypto? Here &sbquo; s how to swap tokens: Open DeFi Wallet and go to the &lsquo Swap &rsquo; tab. Acknowledge that you are not a resident/citizen of a geo-restricted region.Select the &lsquo From/To &rsquo; networks and tokens to view the estimated exchange price. Enter either the &lsquo From &rsquo; or &lsquo; To &rsquo; token amount and tap &lsquo; Swap &rsquo;',
  },
];

// export const NFT_CONTRACT_ADDRESS = '0xd8a984a2d4887721dedf0ffb59fd8432fa60243b'; // ETH mainnet
export const NFT_CONTRACT_ADDRESS = '0x0E6377E923CCEC60b778F59A6F99F0C0d6fA0459'; // BSC Testnet
export const MINT_COST = BigNumber.from('80000000000000000'); // 0.08 ether
export const MAX_PER_WALLET = 2000;

