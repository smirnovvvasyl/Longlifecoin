import Image from 'next/image';
import ConnectWalletButton from './ConnectWalletButton';

export default function NavBar() {
  return <div className="flex justify-between p-6">
    <Image src="/assets/logo-with-text.svg" alt="logo with text" width="300" height="31"/>
    <ConnectWalletButton/>
  </div>
}
