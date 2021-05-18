import {useEthers} from '@usedapp/core'

function ConnectToWallet(){
  const {activateBrowserWallet} = useEthers()
  return <div><button onClick={activateBrowserWallet}>Connect Wallet</button></div>
}

export default ConnectToWallet