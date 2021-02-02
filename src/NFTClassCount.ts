import {
  BigInt,
} from "@graphprotocol/graph-ts"

import {
  EntityCount
} from '../generated/schema'

export function NFTTypeNumber(typeName:string): void {
  let count = EntityCount.load(typeName);
  if(count == null){
    count = new EntityCount(typeName)
    count.count = BigInt.fromI32(1)
  }else{
    count.count = count.count.plus(BigInt.fromI32(1))
  }  
  count.save()
}

export function NFTTypeMoneyCount(typeName:string, price:BigInt): void {
  let count = EntityCount.load(typeName);
  if(count == null){
    count = new EntityCount(typeName)
    count.count = BigInt.fromI32(0);
  }  
  count.count = count.count.plus(price)
  count.save()
}