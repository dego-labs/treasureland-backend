import {
  BigInt,
  Address,
  ethereum,
  log
} from "@graphprotocol/graph-ts"
import {
  eveAuction
} from '../generated/Auction/Auction'
import {
  Auction
} from '../generated/schema'

import { 
  NFTTypeNumber,
  NFTTypeMoneyCount 
} from "./NFTClassCount"

export function handleAuction(event: eveAuction): void {
  let auction = new Auction(event.params.curTurns.toHex())
  auction.curPlayer = event.params.curPlayer;
  auction.curAuctionQuote = event.params.curAuctionQuote
  auction.save()
  NFTTypeNumber("auctionTimes")
  NFTTypeMoneyCount("auctionMoney",event.params.curAuctionQuote);
}