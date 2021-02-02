import {
  BigInt,
  Address
} from "@graphprotocol/graph-ts"
import {
  TransferSingle,
  TransferBatch
} from '../generated/Bondly/NFT1155'
import {
  Bondly
} from '../generated/schema'
import {
  Bondly_ADD
} from "./Config"
import { NFTTypeNumber } from "./NFTClassCount"


export function handleBondlySingle(event: TransferSingle): void {
  
  let nft1155Token = Bondly.load(event.params._id.toHex())
  if (nft1155Token == null) {
    nft1155Token = new Bondly(event.params._id.toHex());
    nft1155Token.createdTime = event.block.timestamp;
    nft1155Token.index = event.params._id;
    nft1155Token.isExist = true;
    nft1155Token.blockNum = event.block.number;
    nft1155Token.nftAddress = Address.fromString(Bondly_ADD)
  }
  nft1155Token.save();  
}

export function handleBondlyBatch(event: TransferBatch): void {
  let tokenIds = event.params._ids;
  for (let index = 0; index < tokenIds.length; index++) {
    let element = tokenIds[index];
    let nft1155Token = Bondly.load(element.toHex())
    if (nft1155Token == null) {
      nft1155Token = new Bondly(element.toHex());
      nft1155Token.createdTime = event.block.timestamp;
      nft1155Token.index = element;
      nft1155Token.isExist = true;
      nft1155Token.blockNum = event.block.number;
      nft1155Token.nftAddress = Address.fromString(Bondly_ADD)
    }
    nft1155Token.save();  
  }
}
