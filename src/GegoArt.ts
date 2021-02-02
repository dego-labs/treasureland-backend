import {
  BigInt,
} from "@graphprotocol/graph-ts"
import {
  GegoArtAdded,
  GegoArtBurn,
} from '../generated/GegoArt/GegoArtFactory'
import {
  GegoArt
} from '../generated/schema'
import { NFTTypeNumber } from "./NFTClassCount"



export function handleArtAdded(event: GegoArtAdded): void {
  let gegoArtObj = new GegoArt(event.params.id.toHex())
  gegoArtObj.index = event.params.id
  gegoArtObj.createdTime = event.params.createdTime
  gegoArtObj.blockNum = event.params.blockNum
  gegoArtObj.tokenAmount = event.params.tokenAmount
  gegoArtObj.tokenAddress = event.params.tokenAddress
  gegoArtObj.author = event.params.author
  gegoArtObj.resName = event.params.resName
  gegoArtObj.isExist = true;
  gegoArtObj.save()

  NFTTypeNumber("gegoArt")
}

export function handleArtBurn(event: GegoArtBurn): void {
  let gegoArtObj = GegoArt.load(event.params.id.toHex())
  gegoArtObj.isExist = false;
  gegoArtObj.save()

  NFTTypeNumber("gegoArtBurn")
}