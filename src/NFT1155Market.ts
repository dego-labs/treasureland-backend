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
} from '../generated/NFT1155Market/NFT1155Market'
import {
  Bondly,
  GegoSaleObj1155,
  GegoSaleObj1155Info,
  BuyLog
} from '../generated/schema'

import {
  Bondly_ADD
} from "./Config"
import { NFTTypeNumber } from "./NFTClassCount"

export function handleNewSales(event: eveNewSales): void {
  let gegoSaleObj1155 = new GegoSaleObj1155(event.params.id.toHex())
  gegoSaleObj1155.index = event.params.id;
  gegoSaleObj1155.saleTx = event.transaction.hash;
  gegoSaleObj1155.tokenId = event.params.tokenId;
  gegoSaleObj1155.seller = event.params.seller;
  // gegoSaleObj1155.buyer = [];
  // gegoSaleObj1155.buyTx = [];
  // gegoSaleObj1155.tipsFee = [];
  gegoSaleObj1155.buyLogs = [];

  gegoSaleObj1155.nft = event.params.nft;
  gegoSaleObj1155.unitPrice = event.params.unitPrice;
  gegoSaleObj1155.status = BigInt.fromI32(0);
  gegoSaleObj1155.createdTime = event.block.timestamp;
  gegoSaleObj1155.amount = event.params.amount;
  gegoSaleObj1155.currency = event.params.currency;
  gegoSaleObj1155.save()
  
  let gegoSaleObj1155Info =  new GegoSaleObj1155Info(event.params.id.toHex())
  if (event.params.nft.toString() == Address.fromString(Bondly_ADD).toString()) {
    gegoSaleObj1155Info.bondly = event.params.tokenId.toHex();
  }
  gegoSaleObj1155Info.gegoSaleObj1155 = event.params.id.toHex();
  gegoSaleObj1155Info.index = event.params.id;
  gegoSaleObj1155Info.tokenId = gegoSaleObj1155.tokenId;
  gegoSaleObj1155Info.seller = gegoSaleObj1155.seller;
  gegoSaleObj1155Info.status = gegoSaleObj1155.status;
  gegoSaleObj1155Info.unitPrice = gegoSaleObj1155.unitPrice;
  gegoSaleObj1155Info.createdTime =event.block.timestamp;
  gegoSaleObj1155Info.save();
}

export function handleCancelSales(event: eveCancelSales): void {
  let id = event.params.id.toHex();
  let gegoSaleObj1155 = GegoSaleObj1155.load(id);
  gegoSaleObj1155.cancelTx = event.transaction.hash;
  gegoSaleObj1155.status = BigInt.fromI32(2);
  gegoSaleObj1155.unitPrice = BigInt.fromI32(0);
  gegoSaleObj1155.amount = BigInt.fromI32(0);
  gegoSaleObj1155.save();

  let gegoSaleObj1155Info  = GegoSaleObj1155Info.load(id);
  gegoSaleObj1155Info.status = gegoSaleObj1155.status;
  gegoSaleObj1155Info.save();
}

export function handleBuy(event: eveSales): void {
  let id = event.params.id.toHex();
  let gegoSaleObj1155 = GegoSaleObj1155.load(id);
  let buyLogs = gegoSaleObj1155.buyLogs;
  let buyLog: BuyLog;
  buyLog = new BuyLog(event.transaction.hash.toHex());
  buyLog.buyer = event.params.buyer;
  buyLog.tipsFee = event.params.tipsFee;
  buyLog.save();
  buyLogs.push(buyLog.id);
  gegoSaleObj1155.buyLogs = buyLogs;
  gegoSaleObj1155.amount = event.params.surplusAmount;
  gegoSaleObj1155.status = BigInt.fromI32(3);
  if (event.params.surplusAmount == BigInt.fromI32(0)) {
    gegoSaleObj1155.status = BigInt.fromI32(1);
  } 
  gegoSaleObj1155.save();

  let gegoSaleObj1155Info = GegoSaleObj1155Info.load(id); 
  gegoSaleObj1155Info.status = gegoSaleObj1155.status;
  gegoSaleObj1155Info.save();

}