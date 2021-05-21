//SPDX-License-Identifier: MIT
//SportySpot Game Pools
pragma solidity >0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

// Game Pool Logic contract
// Game Pools- Playoffs and Winners

//need oracle to know game results
//implement SafeERC20

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
    DaiToken daitoken;
    address owner;
    address tokenOwner;
    
    constructor() public{
        owner = msg.sender;
        daitoken  = DaiToken(0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa);
    }
    
    modifier onlyOwner {
        require(msg.sender == owner,
        "Only the contract owner may access.");
        _;                          //this modifier may need to be removed?
    }
    
    //events & address tracking
    event Approval(address indexed tokenOwner, address indexed spender, uint tokens);
    event Transfer(address indexed from, address indexed to, uint tokens);


    mapping(address => uint256) balances;

    mapping(address => mapping (address => uint256)) allowed;
    
    
    //functions of token, these need to be fixed
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
    
    address payable public owner;
    
    
    //---> check to make sure can only withdraw before deadline
    function withdraw() public {
        uint amount = pendingWithdraw[msg.sender];
        pendingWithdraw[msg.sender] = 0;
        payable(msg.sender).transfer(amount);
    }
}

//placeholders until time/match integration - can adapt to close pool before game start
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
contract sportPool is InitPool, TimeLimit {
    string public name;
    address public token;
    uint256 public rate;
    
    event PastDeadline(bool deadlinePast);
    
    function Pool(string memory _name, uint256 _rate, uint256 _deadline) public{
        require (_rate > 0);
        require (_deadline > block.timestamp);
        name = _name;
        rate = _rate;
        deadline = _deadline;
        token = new DaiToken(_deadline); //double ceck to make sure calling right DaiToken/daitoken
    }
    
    //fix parserError
    function () public payable WhileOpen {
        require(msg.value > 0);
        uint256 poolAmount = rate.mul(msg.value);
        require(DaiToken(token).issueTokens(msg.sender, poolAmount));
    }
    
    if (block.timestamp <= deadline){
        function withdraw() public 
        uint amount = pendingWithdraw[msg.sender];
        pendingWithdraw[msg.sender] = 0;
        payable(msg.sender).transfer(amount);
    }
    else {
        //emit boolean result for (block.timestamp>deadline), past deadline for withdrawal
    }
    
 }
 

contract moreSporty is owned {
    //allow deposits to contract
    //function() publc payable; //can receive eth
    
    event JackpotWinners(uint256 amount); //emit how much winner won
    event TeamAWin(bool result); //check team A win
    event TeamBWin(bool result); //check team B win
    //other events?
    
    address payable[] public players;
    uint256 public minimumBet; 
    uint256 public betTeamA; 
    uint256 public betTeamB;
    uint256 public totalNumberBets;
    uint256 public maxBetsInPool;
    
    DaiToken public token;
    
    constructor() public{
        token = new owned();
    }  // may need to change/split owned contract
    
    // set up players[], map player address and team choice
    // set game logic & give funds to winners
    
}