import{useEtherBalance, useTokenBalance} from '@usedapp/core'
import {formatUnits} from '@ethersproject/units'
import styles from './CheckBalance.module.css'
const DAI = '0x6b175474e89094c44da98b954eedeac495271d0f'

console.log("My account address =",process.env.REACT_APP_MYACCOUNT_ADDRESS)

function CheckBalance(props){
  const ethBalance = useEtherBalance(process.env.REACT_APP_MYACCOUNT_ADDRESS)
  console.log("ethBalance = ", ethBalance)
  //Janet need to add dai address in constants folder
  const daiBalance = useTokenBalance(DAI,process.env.REACT_APP_MYACCOUNT_ADDRESS)
  console.log("daiBalance = ", daiBalance)
  return <div className={styles.container}>
    <p>ETH balance: {ethBalance && ethBalance.toString()} ETH</p>
    <p>ETH balance: {ethBalance && formatUnits(ethBalance)} ETH</p>
    <p>DAI balance: {daiBalance && daiBalance.toString()} DAI</p>
  </div>
} 

export default CheckBalance