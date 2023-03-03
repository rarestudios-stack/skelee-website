// SPDX-License-Identifier: MIT
pragma solidity >=0.8.9; 

import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

contract Skelee is ERC721A, Ownable, ReentrancyGuard {
  using Strings for uint256;

  string public baseURI;
  string public baseExtension = ".json";
  string public notRevealedUri; //set when ready deploy

  uint256 public EarlyAccessCost = 0.125 ether; 
  uint256 public wlCost = 0 ether;
  uint256 public maxSupply = 7777;
  uint256 public FreeMintSupply = 10;  /// change value on mainnet deployment
  uint256 public MaxperWallet = 5;
  uint256 public MaxperWalletWL = 1;
  uint256 public MaxperWalletFreeMint = 1;
  

  bool public paused = false; /// change state on mainnet deployment
  bool public revealed = false;
  bool public wlMint = false;
  bool public EarlyAccess_Live = true; 
  bool public FreeMint_Live = true; 

  bytes32 public merkleRoot = 0;

  constructor(
    string memory _initBaseURI
  ) ERC721A("Skelee", "Skelee") {
    setBaseURI(_initBaseURI);
    
  }

  // internal
  function _baseURI() internal view virtual override returns (string memory) {
    return baseURI;
  }
      function _startTokenId() internal view virtual override returns (uint256) {
        return 1;
    }

  // public-mint(EarlyAccess)
  function EarlyAccessMint(uint256 tokens) public payable nonReentrant {
    require(!paused, "oops contract is paused");
    require(EarlyAccess_Live, "Sale Hasn't started yet");
    uint256 supply = totalSupply();
    require(supply >= FreeMintSupply ,"This mint phase will start after FreeMint phase");
    require(tokens > 0, "need to mint at least 1 NFT");
    require(tokens <= MaxperWallet, "max mint amount per tx exceeded");
    require(supply + tokens <= maxSupply, "We Soldout");
    require(_numberMinted(_msgSender()) + tokens <= MaxperWallet, " Max NFTs Per Wallet exceeded");
    require(msg.value >= EarlyAccessCost * tokens, "insufficient funds");

      _safeMint(_msgSender(), tokens);
    
  }

// FreeMint
function FreeMint(uint256 tokens) public nonReentrant {
    require(!paused, "oops contract is paused");
    require(FreeMint_Live, "Sale Hasn't started yet");
    uint256 supply = totalSupply();
    require(tokens > 0, "need to mint at least 1 NFT");
    require(tokens <= MaxperWallet, "max mint amount per tx exceeded");
    require(supply + tokens <= maxSupply, "We Soldout");
    require(supply + tokens <= FreeMintSupply, "We Soldout");
    require(_numberMinted(_msgSender()) + tokens <= MaxperWalletFreeMint, " Max NFTs Per Wallet exceeded");


      _safeMint(_msgSender(), tokens);
    
  }

/// @dev White-listed mint
    function WlMint(uint256 tokens, bytes32[] calldata merkleProof) public payable nonReentrant {
    require(!paused, "oops contract is paused");
    require(wlMint, "wl mint Hasn't started yet");
    require(MerkleProof.verify(merkleProof, merkleRoot, keccak256(abi.encodePacked(msg.sender))), " You are not in the whitelist");
    uint256 supply = totalSupply();
    require(_numberMinted(_msgSender()) + tokens <= MaxperWalletWL, "Max NFT Per Wallet exceeded");
    require(tokens > 0, "need to mint at least 1 NFT");
    require(supply + tokens <= maxSupply, "We Soldout");
    require(tokens <= MaxperWalletWL, "max mint per Tx exceeded");
    require(msg.value >= wlCost * tokens, "not enough eth");

      _safeMint(_msgSender(), tokens);
    
  }




  /// @dev use it for giveaway and mint for yourself
     function gift(uint256 _mintAmount, address destination) public onlyOwner nonReentrant {
    require(_mintAmount > 0, "need to mint at least 1 NFT");
    uint256 supply = totalSupply();
    require(supply + _mintAmount <= maxSupply, "max NFT limit exceeded");

      _safeMint(destination, _mintAmount);
    
  }

  


  function tokenURI(uint256 tokenId)
    public
    view
    virtual
    override
    returns (string memory)
  {
    require(
      _exists(tokenId),
      "ERC721AMetadata: URI query for nonexistent token"
    );
    
    if(revealed == false) {
        return notRevealedUri;
    }

    string memory currentBaseURI = _baseURI();
    return bytes(currentBaseURI).length > 0
        ? string(abi.encodePacked(currentBaseURI, tokenId.toString(), baseExtension))
        : "";
  }

    function numberMinted(address owner) public view returns (uint256) {
    return _numberMinted(owner);
  }

  //only owner
  function reveal(bool _state) public onlyOwner {
      revealed = _state;
  }

  function setMerkleRoot(bytes32 _merkleRoot) external onlyOwner {
        merkleRoot = _merkleRoot;
    }
  
  function setMaxPerWallet(uint256 _limit) public onlyOwner {
    MaxperWallet = _limit;
  }

    function setMaxperWalletWL(uint256 _limit) public onlyOwner {
    MaxperWalletWL = _limit;
  }

   function setMaxperWalletFreeMint(uint256 _limit) public onlyOwner {
    MaxperWalletFreeMint = _limit;
  }
  
  function setEarlyAccessCost(uint256 _newCost) public onlyOwner {
    EarlyAccessCost = _newCost;
  }
  
  function setwlCost(uint256 _newCost) public onlyOwner {
    wlCost = _newCost;
  }


    function setMaxsupply(uint256 _newsupply) public onlyOwner {
    maxSupply = _newsupply;
  }

  function setFreeMintSupply(uint256 _newsupply) public onlyOwner {
    FreeMintSupply = _newsupply;
  }

  function setBaseURI(string memory _newBaseURI) public onlyOwner {
    baseURI = _newBaseURI;
  }

  function setBaseExtension(string memory _newBaseExtension) public onlyOwner {
    baseExtension = _newBaseExtension;
  }
  
  function setNotRevealedURI(string memory _notRevealedURI) public onlyOwner {
    notRevealedUri = _notRevealedURI;
  }

  function pause(bool _state) public onlyOwner {
    paused = _state;
  }

    function toggleWlMint(bool _state) external onlyOwner {
        wlMint = _state;
    }

    function toggle_EarlyAccess_Live(bool _state) external onlyOwner {
        EarlyAccess_Live = _state;
    }

    function toggle_FreeMint_Live(bool _state) external onlyOwner {
        FreeMint_Live = _state;
    }
  
 
  function withdraw() public payable onlyOwner nonReentrant {
    (bool success, ) = payable(msg.sender).call{value: address(this).balance}("");
    require(success);
  }
}
