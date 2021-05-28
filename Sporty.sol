//SPDX-License-Identifier: MIT
//SportySpot Game Pools
pragma solidity >0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "https://github.com/abdk-consulting/abdk-libraries-solidity/blob/master/ABDKMath64x64.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/IERC721.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/IERC721Receiver.sol";
//import nftcontract

// Game Pool Logic contract
// Game Pools- Playoffs and Winners

//need oracle to know game results

// Dai Itegration
interface DaiToken {
    function transfer(address recipient, uint256 amount) external returns(bool);
    function balanceOf(address account) external view returns(uint256);
    function allowance(address owner, address spender) external view returns (uint256);
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);

}

contract owned {
    DaiToken daitokenn;
    address payable public owner;
    //address tokenOwner;
    
    constructor() public{
        owner = msg.sender;
        daitokenn  = DaiToken(0x001b3b4d0f3714ca98ba10f6042daebf0b1b7b6f); // DAI on mumbai
    }
    
    modifier onlyOwner {
        require(msg.sender == owner,
        "Only the contract owner may access.");
        _;                          
    }
    
    //events & address tracking
    event Approval(address indexed tokenOwner, address indexed spender, uint tokens);
    event Transfer(address indexed from, address indexed to, uint tokens);


    mapping(address => uint256) balances;

    mapping(address => mapping (address => uint256)) allowed;
    
    function balanceOf(address tokenOwner) public override view returns (uint256) {
        return balances[tokenOwner];
    }
    function transfer(address owner, uint256 numTokens) public override returns (bool) {
        require(numTokens <= balances[msg.sender]);
        balances[msg.sender] = balances[msg.sender].sub(numTokens);
        balances[owner] = balances[owner].add(numTokens);
        emit Transfer(msg.sender, owner, numTokens);
        return true;
    }

    function approve(address delegate, uint256 numTokens) public override returns (bool) {
        allowed[msg.sender][delegate] = numTokens;
        emit Approval(msg.sender, delegate, numTokens);
        return true;
    }

    function allowance(address owner, address delegate) public override view returns (uint) {
        return allowed[owner][delegate];
    }

    function transferFrom(address owner, address winner, uint256 numTokens) public override returns (bool) { //tokens to winner. check
        require(numTokens <= balances[owner]);
        require(numTokens <= allowed[owner][msg.sender]);

        balances[owner] = balances[owner].sub(numTokens);
        allowed[owner][msg.sender] = allowed[owner][msg.sender].sub(numTokens);
        balances[winner] = balances[winner].add(numTokens);
        emit Transfer(owner, winner, numTokens);
        return true;                                            
    }
}
 
// starts pool construction
contract InitPool {
    //allows deposits & withdrawal to contract in eth
    uint pendingWithdraw;
    
    //address payable public owner;
    
    
    //---> check to make sure can only withdraw before deadline
    //withdraws all funds so must set specific function to only draw funds put in for address before deadline --> move this function
    function withdraw() public {
        uint amount = pendingWithdraw[msg.sender];
        pendingWithdraw[msg.sender] = 0;
        payable(msg.sender).transfer(amount);
    }
}

//sets deadline to enter game
contract TimeLimit {
    uint256 public deadline;
    
    modifier WhileOpen{
        require(block.timestamp <= deadline);
        _;
    }
    
    modifier Close {
        require(block.timestamp > deadline);
        _;
        
    }
}

//sets Dai as token for pool
contract sportPool is InitPool, TimeLimit, owned {
    string public name;
    address public token;
    uint256 public rate;
    bool PastDeadline;
    
    //event PastDeadline(bool deadlinePast);
    
    function Pool(string memory _name, uint256 _rate, uint256 _deadline) public {
        require(_rate > 0);
        require(_deadline > block.timestamp);
        name = _name;
        rate = _rate;
        deadline = _deadline;
        token = new daitokenn(_deadline); //double ceck to make sure calling right DaiToken/daitoken
    }
    
    function whileOpen() public payable {
       require(msg.value > 0);
       uint256 poolAmount = rate.mul(msg.value);
      require(daitokenn(token).issueTokens(msg.sender, poolAmount));
     
    
     if (block.timestamp <= deadline){
        //function withdraw() public 
        uint amount = pendingWithdraw[msg.sender];
        pendingWithdraw[msg.sender] = 0;
        payable(msg.sender).transfer(amount);
    }
    else {
       //return bool deadlinePast true;
    }
    
 }
}
    
 
//pass pool to contract
contract moreSporty is owned, sportPool {
  
    event JackpotWinners(uint256 amount); //emit how much winner won
    event TeamAWin(bool result); //check team A win
    event TeamBWin(bool result); //check team B win
    //other events?
    
    address payable[] public players;
    //uint256 public minimumBet; 
    uint256 public betTeamA; 
    uint256 public betTeamB;
    uint256 public totalNumberBets;
    uint256 public maxBetsInPool;
    uint16 teamChoice;
    
    struct Player {
        uint256 betAmount;
        uint16 teamChoice;
        
     }
    
    constructor() public{
        token = new owned();
        
        uint minimumBet = 20;
    }  // may need to change/split owned contract
    
    enum States { open, closed, complete, cancelled } // game state, open default
    States state = States.open;
    
    mapping(address => Player) public PlayerID;
    //mapping(address => mapping(uint256 => uint256)) public betAmount;
    
    
    function checkPlayerEntered(address payable player) public{
        //require(address != NULL_ADDRESS);
         for(uint256 i =0; i < players.length;i++){
             if(players[i] == player) return true;
             else {
                 return false;
             }
         }
    }
    
    function enterGame(){
        require(checkPlayerEntered == true);
        require(daitokenn(token).issueTokens(msg.sender, poolAmount));
        require(msg.value >= minimumBet, "Please enter a bet amount of at least 20!");
        require(daitokenn.balanceOf(address(msg.sender)) >= minimumBet, "Please deposit enough DAI to play!");
        
        PlayerID[msg.sender].betAmount = msg.value;
        PlayerID[msg.sender].teamChoice = teamChoice;
        
        //choose team A
        if (teamChoice == 1){
            betTeamA + msg.value;
        }
        else{
            betTeamB + msg.value;
        }
        
        //add player to array of players
        players.push(msg.sender);
        
    }
    
    function deadlineReached(){
        //closes game entry
        require(States.open);
        require(msg.sender == owner);
        
        //pass deadlineReached here
        //if deadlineReached (state == states.closed);
    }
    
    function gameResult(){
        require(States.open);
        require(msg.sender == owner);
        
        //checkgamereult
        //return winningTeam
        
         States.complete;
    }
    
    function gameCancelled(){
        require (States.open);
        require(msg.sender == owner);
        
        //check if game cancelled
        
        state = states.cancelled;
    }
    
    /// can combine checkWinner,sendJackpot, and sendNFT
    function youWon(){
        require(States.complete);
        require(msg.sender == owner);
        
        address payable[] memory winners;
        
        uint256 count = 0;
        uint256 losingGame = 0;
        uint256 winingGame = 0;
        address add;
        address betAmount;
        address payable PlayerAddress;
        
        //loop to add winning players to winner array
        for(uint256 i =0; i < players.length;i++){
            playerID = players[i];
            if (playerID[PlayerAddress].teamChoice == winningTeam){
                winners[count] = PlayerAddress;
                count++;
            }
            //else, there is no else. they just get left out of array
        }
        
        
        
        
        
        
    }
    
    function sendJackpot(){
        require(States.closed);
        require(msg.sender == owner);
        
        address payable PlayerAddress;
        
        
        
        //restart
        delete PlayerID[PlayerAddress];
        players.length = 0;
        
    }
    
    function sendNFT(){
        address payable PlayerAddress;
        //transfer ERC-721
        
        
        //restart
        
        
    }
    

}