import {useEthers} from '@usedapp/core'
import {Button} from "react-bootstrap";

function ConnectToWallet(){
  const {activateBrowserWallet} = useEthers()
  return <div><Button onClick={activateBrowserWallet}>Connect Wallet</Button></div>
}

export default ConnectToWallet