import {
  BigInt,
  Address,
  ethereum,
  log
} from "@graphprotocol/graph-ts"
import {
  eveSales,
  eveNewSales,
  eveCancelSales
} from '../generated/NFTMarket/NFTMarket'
import {
  GegoTokenV1,
  GegoTokenV2,
  GegoSaleObj,
  GegoSaleObjInfo,
  CocosNFT
} from '../generated/schema'

import {
  GEGOV1_ADD,
  GEGOV2_ADD,
  BCFToken_ADD,
  MATHCON2_ADD,
  BurgerNFT_ADD,
  PancakeBunnies_ADD,
  BinanceNFT_ADD,
  CocosNFT_ADD,
  GegoArt_ADD
} from "./Config"
import { 
  NFTTypeNumber,
  NFTTypeMoneyCount 
} from "./NFTClassCount"


export function handleNewSales(event: eveNewSales): void {
  let gegoSaleObj = new GegoSaleObj(event.params.id.toHex())
  gegoSaleObj.index = event.params.id;
  gegoSaleObj.saleTx = event.transaction.hash;
  gegoSaleObj.tokenId = event.params.tokenId
  gegoSaleObj.seller = event.params.seller
  gegoSaleObj.buyer = event.params.buyer
  gegoSaleObj.nft = event.params.nft
  gegoSaleObj.startTime = event.params.startTime
  gegoSaleObj.durationTime = event.params.durationTime
  gegoSaleObj.finalPrice = event.params.finalPrice
  gegoSaleObj.maxPrice = event.params.maxPrice
  gegoSaleObj.minPrice = event.params.minPrice
  gegoSaleObj.status = BigInt.fromI32(0)
  gegoSaleObj.tipsFee = BigInt.fromI32(0)
  gegoSaleObj.createdTime =event.block.timestamp;
  gegoSaleObj.save()
  
  let gegoSaleObjInfo =  new GegoSaleObjInfo(event.params.id.toHex())  
  if (event.params.nft.toString() == Address.fromString(GEGOV1_ADD).toString()) {
    let gegoTokenV1 = GegoTokenV1.load(event.params.tokenId.toHex());
    gegoSaleObjInfo.gegoTokenV1 = event.params.tokenId.toHex();
    gegoSaleObjInfo.amount = gegoTokenV1.amount;  
    gegoSaleObjInfo.grade = gegoTokenV1.grade; 
    NFTTypeNumber("saleV1");
  } else if (event.params.nft.toString() == Address.fromString(GEGOV2_ADD).toString()) {
    let gegoTokenV2 = GegoTokenV2.load(event.params.tokenId.toHex());    
    gegoSaleObjInfo.gegoTokenV2 = event.params.tokenId.toHex();
    gegoSaleObjInfo.amount = gegoTokenV2.amount;
    gegoSaleObjInfo.ruleId = gegoTokenV2.ruleId;      
    gegoSaleObjInfo.grade = gegoTokenV2.grade;
    NFTTypeNumber("saleV2");
  } else if (event.params.nft.toString() == Address.fromString(BCFToken_ADD).toString()) {
    gegoSaleObjInfo.bcfToken = event.params.tokenId.toHex();
    NFTTypeNumber("saleBCFToken");
  } else if (event.params.nft.toString() == Address.fromString(MATHCON2_ADD).toString()) {
    gegoSaleObjInfo.mathcon2 = event.params.tokenId.toHex();
    NFTTypeNumber("saleMATHCON2");
  } else if (event.params.nft.toString() == Address.fromString(BurgerNFT_ADD).toString()) {
    gegoSaleObjInfo.burgerNFT = event.params.tokenId.toHex();
    NFTTypeNumber("saleBurger");
  } else if (event.params.nft.toString() == Address.fromString(GegoArt_ADD).toString()) {
    gegoSaleObjInfo.gegoArt = event.params.tokenId.toHex();
    NFTTypeNumber("saleGegoArt");
  } else if (event.params.nft.toString() == Address.fromString(PancakeBunnies_ADD).toString()) {
    gegoSaleObjInfo.pancakeBunnie = event.params.tokenId.toHex();
    NFTTypeNumber("salePancake");
  } else if (event.params.nft.toString() == Address.fromString(BinanceNFT_ADD).toString()) {
    gegoSaleObjInfo.binanceNFT = event.params.tokenId.toHex();
    NFTTypeNumber("saleBinanceNFT");
  } else if (event.params.nft.toString() == Address.fromString(CocosNFT_ADD).toString()) {
    gegoSaleObjInfo.cocosNFT = event.params.tokenId.toHex();
    let gegoTokenV2 = CocosNFT.load(event.params.tokenId.toHex());    
    gegoSaleObjInfo.amount = gegoTokenV2.amount;
    gegoSaleObjInfo.ruleId = gegoTokenV2.ruleId;      
    gegoSaleObjInfo.grade = gegoTokenV2.grade;
    NFTTypeNumber("saleCocosNFT");
  }
  gegoSaleObjInfo.index = event.params.id;
  gegoSaleObjInfo.tokenId = gegoSaleObj.tokenId;
  gegoSaleObjInfo.seller = gegoSaleObj.seller;
  gegoSaleObjInfo.gegoSaleObj = event.params.id.toHex();
  gegoSaleObjInfo.status = gegoSaleObj.status;
  gegoSaleObjInfo.startTime = gegoSaleObj.startTime;
  gegoSaleObjInfo.maxPrice = gegoSaleObj.maxPrice;
  gegoSaleObjInfo.minPrice = gegoSaleObj.minPrice;
  gegoSaleObjInfo.createdTime =event.block.timestamp;
  gegoSaleObjInfo.save();
  NFTTypeNumber("saleObj")
}

export function handleCancelSales(event: eveCancelSales): void {
  let id = event.params.id.toHex()
  let gegoSaleObj = GegoSaleObj.load(id)
  gegoSaleObj.cancelTx = event.transaction.hash;
  gegoSaleObj.startTime = BigInt.fromI32(0)
  gegoSaleObj.durationTime = BigInt.fromI32(0)
  gegoSaleObj.finalPrice = BigInt.fromI32(0)
  gegoSaleObj.maxPrice = BigInt.fromI32(0)
  gegoSaleObj.minPrice = BigInt.fromI32(0)
  gegoSaleObj.status = BigInt.fromI32(2)
  gegoSaleObj.save()

  let gegoSaleObjInfo  = GegoSaleObjInfo.load(id);
  gegoSaleObjInfo.gegoSaleObj = id;
  gegoSaleObjInfo.maxPrice = gegoSaleObj.maxPrice;
  gegoSaleObjInfo.minPrice = gegoSaleObj.minPrice;   
  gegoSaleObjInfo.status = gegoSaleObj.status;
  gegoSaleObjInfo.save();

  if (gegoSaleObj.nft.toString() == Address.fromString(GEGOV1_ADD).toString()) {
    NFTTypeNumber("saleV1Cancel");
  } else if (gegoSaleObj.nft.toString() == Address.fromString(GEGOV2_ADD).toString()) {
    NFTTypeNumber("saleV2Cancel");
  } else if (gegoSaleObj.nft.toString() == Address.fromString(BCFToken_ADD).toString()) {
    NFTTypeNumber("saleBCFTokenCancel");
  } else if (gegoSaleObj.nft.toString() == Address.fromString(MATHCON2_ADD).toString()) {
    NFTTypeNumber("saleMATHCON2Cancel");
  } else if (gegoSaleObj.nft.toString() == Address.fromString(BurgerNFT_ADD).toString()) {
    NFTTypeNumber("saleBurgerCancel");
  } else if (gegoSaleObj.nft.toString() == Address.fromString(GegoArt_ADD).toString()) {
    NFTTypeNumber("saleGegoArtCancel");
  } else if (gegoSaleObj.nft.toString() == Address.fromString(PancakeBunnies_ADD).toString()) {
    NFTTypeNumber("salePancakeCancel");
  } else if (gegoSaleObj.nft.toString() == Address.fromString(BinanceNFT_ADD).toString()) {
    NFTTypeNumber("saleBinanceNFTCancel");
  } else if (gegoSaleObj.nft.toString() == Address.fromString(CocosNFT_ADD).toString()) {
    NFTTypeNumber("saleCocosNFTCancel");
  }

  NFTTypeNumber("saleObjCancel")
}

export function handleBuy(event: eveSales): void {
  let id = event.params.id.toHex()
  let gegoSaleObj = GegoSaleObj.load(id)
  gegoSaleObj.buyTx = event.transaction.hash;
  gegoSaleObj.buyer = event.params.buyer
  gegoSaleObj.finalPrice = event.params.finalPrice
  gegoSaleObj.tipsFee = event.params.tipsFee
  gegoSaleObj.status = BigInt.fromI32(1)
  gegoSaleObj.save()

  let gegoSaleObjInfo  = GegoSaleObjInfo.load(id);
  gegoSaleObjInfo.gegoSaleObj = id; 
  gegoSaleObjInfo.status = gegoSaleObj.status;
  gegoSaleObjInfo.save();

  if (gegoSaleObj.nft.toString() == Address.fromString(GEGOV1_ADD).toString()) {
    NFTTypeNumber("saleV1Success");
    NFTTypeMoneyCount("saleV1Money",gegoSaleObj.finalPrice);
  } else if (gegoSaleObj.nft.toString() == Address.fromString(GEGOV2_ADD).toString()) {
    NFTTypeNumber("saleV2Success");
    NFTTypeMoneyCount("saleV2Money",gegoSaleObj.finalPrice);
  } else if (gegoSaleObj.nft.toString() == Address.fromString(BCFToken_ADD).toString()) {
    NFTTypeNumber("saleBCFTokenSuccess");
    NFTTypeMoneyCount("saleBCFTokenMoney",gegoSaleObj.finalPrice);
  } else if (gegoSaleObj.nft.toString() == Address.fromString(MATHCON2_ADD).toString()) {
    NFTTypeNumber("saleMATHCON2Success");
    NFTTypeMoneyCount("saleMATHCON2Money",gegoSaleObj.finalPrice);
  } else if (gegoSaleObj.nft.toString() == Address.fromString(BurgerNFT_ADD).toString()) {
    NFTTypeNumber("saleBurgerSuccess");
    NFTTypeMoneyCount("saleBurgerMoney",gegoSaleObj.finalPrice);
  } else if (gegoSaleObj.nft.toString() == Address.fromString(GegoArt_ADD).toString()) {
    NFTTypeNumber("saleGegoArtSuccess");
    NFTTypeMoneyCount("saleGegoArtMoney",gegoSaleObj.finalPrice);
  } else if (gegoSaleObj.nft.toString() == Address.fromString(PancakeBunnies_ADD).toString()) {
    NFTTypeNumber("salePancakeSuccess");
    NFTTypeMoneyCount("salePancakeMoney",gegoSaleObj.finalPrice);
  } else if (gegoSaleObj.nft.toString() == Address.fromString(BinanceNFT_ADD).toString()) {
    NFTTypeNumber("saleBinanceNFTSuccess");
    NFTTypeMoneyCount("saleBinanceNFTMoney",gegoSaleObj.finalPrice);
  } else if (gegoSaleObj.nft.toString() == Address.fromString(CocosNFT_ADD).toString()) {
    NFTTypeNumber("saleCocosNFTSuccess");
    NFTTypeMoneyCount("saleCocosNFTMoney",gegoSaleObj.finalPrice);
  }

  NFTTypeNumber("saleObjSuccess")
}