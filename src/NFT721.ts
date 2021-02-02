import {
  BigInt,
  Address
} from "@graphprotocol/graph-ts"
import {
  Transfer
} from '../generated/BCFToken/NFT721'
import {
  BCFToken,
  MATHCON2,
  BurgerNFT,
  PancakeBunnie,
  BinanceNFT,
  // CocosNFT
} from '../generated/schema'

import {
  BCFToken_ADD,
  MATHCON2_ADD,
  BurgerNFT_ADD,
  PancakeBunnies_ADD,
  BinanceNFT_ADD,
  // CocosNFT_ADD
} from "./Config"
import { NFTTypeNumber } from "./NFTClassCount"


export function handleBCFToken(event: Transfer): void {
  
  let otherToken = BCFToken.load(event.params.tokenId.toHex())
  if (otherToken == null) { 
    otherToken = new BCFToken(event.params.tokenId.toHex())
    otherToken.index = event.params.tokenId;
    otherToken.createdTime = event.block.timestamp;
    otherToken.blockNum = event.block.number;
    otherToken.isExist = true;
    NFTTypeNumber("bCFToken")

  } else {
    otherToken.createdTime = otherToken.createdTime;
    otherToken.blockNum = otherToken.blockNum;
    if (event.params.to == Address.fromString("0x0000000000000000000000000000000000000000")) {
        otherToken.isExist = false; 
        NFTTypeNumber("bCFTokenBurn")
    }
  }
  otherToken.owner = event.params.to;
  otherToken.nftAddress = Address.fromString(BCFToken_ADD)
  otherToken.save();  
}

export function handleMATHCON2(event: Transfer): void {
  let otherToken = MATHCON2.load(event.params.tokenId.toHex())
  if (otherToken == null) { 
    otherToken = new MATHCON2(event.params.tokenId.toHex())
    otherToken.index = event.params.tokenId;
    otherToken.createdTime = event.block.timestamp;
    otherToken.blockNum = event.block.number;
    otherToken.isExist = true;
    NFTTypeNumber("mATHCON2")

  } else {
    otherToken.createdTime = otherToken.createdTime;
    otherToken.blockNum = otherToken.blockNum;
    if (event.params.to == Address.fromString("0x0000000000000000000000000000000000000000")) {
        otherToken.isExist = false; 
        NFTTypeNumber("mATHCON2Burn")
    }
  }
  otherToken.owner = event.params.to;
  otherToken.nftAddress = Address.fromString(MATHCON2_ADD)
  otherToken.save();
  
}


export function handleBurgerNFT(event: Transfer): void {
  let otherToken = BurgerNFT.load(event.params.tokenId.toHex())
  if (otherToken == null) { 
    otherToken = new BurgerNFT(event.params.tokenId.toHex())
    otherToken.index = event.params.tokenId;
    otherToken.createdTime = event.block.timestamp;
    otherToken.blockNum = event.block.number;
    otherToken.isExist = true;
    
    NFTTypeNumber("burgerNFT")

  } else {
    otherToken.createdTime = otherToken.createdTime;
    otherToken.blockNum = otherToken.blockNum;
    if (event.params.to == Address.fromString("0x0000000000000000000000000000000000000000")) {
        otherToken.isExist = false; 
        NFTTypeNumber("burgerNFTBurn")
    }
  }
  otherToken.owner = event.params.to;
  otherToken.nftAddress = Address.fromString(BurgerNFT_ADD)
  otherToken.save();
}

export function handlePancakeBunnie(event: Transfer): void {
  let otherToken = PancakeBunnie.load(event.params.tokenId.toHex())
  if (otherToken == null) { 
    otherToken = new PancakeBunnie(event.params.tokenId.toHex())
    otherToken.index = event.params.tokenId;
    otherToken.createdTime = event.block.timestamp;
    otherToken.blockNum = event.block.number;
    otherToken.isExist = true;

    NFTTypeNumber("PancakeBunnie")

  } else {
    otherToken.createdTime = otherToken.createdTime;
    otherToken.blockNum = otherToken.blockNum;
    if (event.params.to == Address.fromString("0x0000000000000000000000000000000000000000")) {
        otherToken.isExist = false; 
        NFTTypeNumber("PancakeBunnieBurn")
    }
  }
  otherToken.owner = event.params.to;
  otherToken.nftAddress = Address.fromString(PancakeBunnies_ADD)
  otherToken.save();
}

export function handleBinanceNFT(event: Transfer): void {
  let otherToken = BinanceNFT.load(event.params.tokenId.toHex())
  if (otherToken == null) { 
    otherToken = new BinanceNFT(event.params.tokenId.toHex())
    otherToken.index = event.params.tokenId;
    otherToken.createdTime = event.block.timestamp;
    otherToken.blockNum = event.block.number;
    otherToken.isExist = true;

    NFTTypeNumber("BinanceNFT")

  } else {
    otherToken.createdTime = otherToken.createdTime;
    otherToken.blockNum = otherToken.blockNum;
    if (event.params.to == Address.fromString("0x0000000000000000000000000000000000000000")) {
        otherToken.isExist = false; 
        NFTTypeNumber("BinanceNFTBurn")
    }
  }
  otherToken.owner = event.params.to;
  otherToken.nftAddress = Address.fromString(BinanceNFT_ADD)
  otherToken.save();
}
