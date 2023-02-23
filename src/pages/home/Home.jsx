import { useState } from 'react';
import styles from './Home.module.css';
import PlaidLink from 'react-plaid-link';

function Home() {

  const [plaidToken, setPlaidToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleOnSuccess = (token, metadata) => {
    setPlaidToken(token);
    setIsLoading(false);
    console.log('Plaid Link success:', token, metadata);
  };

  const handleOnExit = () => {
    setIsLoading(false);
    console.log('Plaid Link exited');
  };

  const handleOnLoad = () => {
    setIsLoading(true);
    console.log('Plaid Link loaded');
  };

  return (

    <div><PlaidLink
    clientName="Your App Name"
    env="sandbox"
    product={['auth', 'transactions']}
    publicKey="YOUR_PUBLIC_KEY"
    onExit={handleOnExit}
    onLoad={handleOnLoad}
    onSuccess={handleOnSuccess}
  >
    {isLoading ? 'Loading...' : 'Connect your bank account'}
  </PlaidLink>
  {plaidToken && <p>Plaid token: {plaidToken}</p>}</div>
  
  )
}

export default Home