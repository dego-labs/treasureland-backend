import {
  BigInt,
  Address,
  ethereum,
  log
} from "@graphprotocol/graph-ts"
import {
  GegoAdded
} from '../generated/GegoTokenV1/GegoFactoryV1'
import {
  GegoTokenV1
} from '../generated/schema'

import {
  DEGOV1_ADD,
  GEGOV1_ADD
} from "./Config"
import { NFTTypeNumber } from "./NFTClassCount"

export function handleGegoV1Added(event: GegoAdded): void {
  let gegoTokenV1 = new GegoTokenV1(event.params.id.toHex())
  gegoTokenV1.index = event.params.id;
  gegoTokenV1.grade = event.params.grade
  gegoTokenV1.quality = event.params.quality
  gegoTokenV1.amount = event.params.degoAmount
  gegoTokenV1.resBaseId = event.params.resId
  gegoTokenV1.author = event.params.author
  gegoTokenV1.createdTime = event.params.createdTime
  gegoTokenV1.blockNum = event.params.blockNum
  gegoTokenV1.tLevel = BigInt.fromI32(0)
  gegoTokenV1.ruleId = BigInt.fromI32(0)
  gegoTokenV1.nftType = BigInt.fromI32(0)
  gegoTokenV1.erc20 = Address.fromString(DEGOV1_ADD)
  gegoTokenV1.nftAddress = Address.fromString(GEGOV1_ADD)
  gegoTokenV1.version = BigInt.fromI32(1)
  gegoTokenV1.isExist = true
  gegoTokenV1.save()

  NFTTypeNumber("gegoTokenV1")
}

export function handleGegoV1Burn(event: GegoAdded): void {
  let gegoTokenV1 = GegoTokenV1.load(event.params.id.toHex())
  gegoTokenV1.isExist = false;
  gegoTokenV1.save()

  NFTTypeNumber("gegoTokenV1Burn")
}