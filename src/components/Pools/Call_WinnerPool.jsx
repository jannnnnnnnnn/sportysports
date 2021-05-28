import { useEthers } from '@usedapp/core'
import { CheckBalance } from './CheckBalance'
import React from 'react'

const DAI = '0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa' //DAI on kovan
const SportyContract = '' //address

export function JoinWinners() {
    const { activateBrowserWallet } = useEthers()
    //const abi = ['']
    //const contractInterface = new utils.Interface(abi)
    //const contract = new Contract(DAI, SportyContract, contractInterface)
    //const { } = useContractFunction(contract, joinWinPool)
    //const { what is returned by function } = useContractFunction(contract as any, 'JoinWinPool' )

    //call function from contract    

    //connect wallet and confirm bet

}

export default JoinWinners