// SPDX-License-Identifier: MIT

pragma solidity 0.8.7;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/utils/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";

/**
 * @dev Upgradeable implementation of the ERC721 Token 'BreakfastFoodsNFT'.
 */
contract BreakfastFoodsNFTUpgradeable is
    Initializable,
    OwnableUpgradeable,
    ERC721Upgradeable
{
    uint256 public tokenSupply = 0;
    uint256 public constant MAX_TOKEN_SUPPLY = 10;

    /**
     * @dev Initializes ERC721 token and ownable functionality.
     */
    function initialize() external initializer {
        __ERC721_init("BreakfastFoods", "BRKFST");

        __Ownable_init();
    }

    /**
     * @dev Overrides `_baseURI` to set NFT collection URI.
     *
     * Returns string ipfs directory URI.
     */
    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://QmaPrXV1mGXxNKyyuSjBKDAwwfmjYbkDn5wvDWMaKSWg9M/";
    }
}
