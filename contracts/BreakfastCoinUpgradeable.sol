// SPDX-License-Identifier: MIT

pragma solidity 0.8.7;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";

/**
 * @dev Upgradeable implementation of the ERC20 Token 'BreakfastCoin'.
 */
contract BreakfastCoinUpgradeable is Initializable, ERC20Upgradeable {
    mapping(address => bool) private _mintingAddresses;

    /**
     * @dev Initializes ERC20 token and adds `msg.sender` to `_mintingAddress`.
     */
    function initialize() external initializer {
        __ERC20_init("BreakfastCoin", "BRKFST");

        _mintingAddresses[msg.sender] = true;
    }

    /**
     * @dev Requires `minter` address is an approved minter.
     */
    modifier canMint(address minter) {
        require(
            _mintingAddresses[msg.sender],
            "BreakfastCoinStaking: Feature only available to minting addresses"
        );
        _;
    }

    /**
     * @dev Adds `minter` to approved minting addresses.
     *
     * Requirements:
     *
     * - `canMint` modifier
     */
    function addMintingAddress(address minter) external canMint(msg.sender) {
        _mintingAddresses[minter] = true;
    }

    /**
     * @dev Mints `amount` tokens to address `to`.
     *
     * Requirements:
     *
     * - `canMint` modifier
     */
    function mintToAddress(uint amount, address to)
        public
        virtual
        canMint(msg.sender)
    {
        _mint(to, amount);
    }
}
