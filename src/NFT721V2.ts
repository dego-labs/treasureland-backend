import {
  BigInt,
  Address,
  ethereum,
  log
} from "@graphprotocol/graph-ts"
import {
  GegoAdded,
  GegoBurn
} from '../generated/GegoTokenV2/GegoFactoryV2'
import {
  CocosNFTAdded,
  CocosNFTBurn
} from '../generated/CocosNFT/CocosNFTFactory'
import {
  GegoTokenV2,
  CocosNFT
} from '../generated/schema'

import {
  GEGOV2_ADD,
  CocosNFT_ADD
} from "./Config"
import { NFTTypeNumber } from "./NFTClassCount"

export function handleGegoV2Added(event: GegoAdded): void {
  let gegoTokenV2 = new GegoTokenV2(event.params.id.toHex())
  gegoTokenV2.index = event.params.id;
  gegoTokenV2.grade = event.params.grade
  gegoTokenV2.quality = event.params.quality
  gegoTokenV2.amount = event.params.amount
  gegoTokenV2.resBaseId = event.params.resBaseId
  gegoTokenV2.tLevel = event.params.tLevel
  gegoTokenV2.ruleId = event.params.ruleId
  gegoTokenV2.nftType = event.params.nftType
  gegoTokenV2.author = event.params.author
  gegoTokenV2.erc20 = event.params.erc20
  gegoTokenV2.nftAddress = Address.fromString(GEGOV2_ADD)
  gegoTokenV2.createdTime = event.params.createdTime
  gegoTokenV2.blockNum = event.params.blockNum
  gegoTokenV2.version = BigInt.fromI32(2)
  gegoTokenV2.isExist = true;
  gegoTokenV2.save()

  NFTTypeNumber("gegoTokenV2")
  if (gegoTokenV2.ruleId == BigInt.fromI32(1001)) {
    NFTTypeNumber("GegoV2Math")
    if (gegoTokenV2.nftType == BigInt.fromI32(3)) {
      NFTTypeNumber("GegoV2MathMint")
    } else if (gegoTokenV2.nftType == BigInt.fromI32(4)) {
      NFTTypeNumber("GegoV2MathClaim")
    }
  } else if (gegoTokenV2.ruleId == BigInt.fromI32(1002)) {
    NFTTypeNumber("GegoV2Dego")
    if (gegoTokenV2.nftType == BigInt.fromI32(3)) {
      NFTTypeNumber("GegoV2DegoMint")
    } else if (gegoTokenV2.nftType == BigInt.fromI32(4)) {
      NFTTypeNumber("GegoV2DegoClaim")
    }
  } else if (gegoTokenV2.ruleId == BigInt.fromI32(1003)) {
    NFTTypeNumber("GegoV2Burger7Up")
    if (gegoTokenV2.nftType == BigInt.fromI32(3)) {
      NFTTypeNumber("GegoV2Burger7UpMint")
    } else if (gegoTokenV2.nftType == BigInt.fromI32(4)) {
      NFTTypeNumber("GegoV2Burger7UpClaim")
    }
  } else if (gegoTokenV2.ruleId == BigInt.fromI32(1004)) {
    NFTTypeNumber("GegoV2BurgerCoke")
    if (gegoTokenV2.nftType == BigInt.fromI32(3)) {
      NFTTypeNumber("GegoV2BurgerCokeMint")
    } else if (gegoTokenV2.nftType == BigInt.fromI32(4)) {
      NFTTypeNumber("GegoV2BurgerCokeClaim")
    }
  } else if (gegoTokenV2.ruleId == BigInt.fromI32(1005)) {
    NFTTypeNumber("GegoV2BurgerMint")
  } else if (gegoTokenV2.ruleId == BigInt.fromI32(1006)) {
    NFTTypeNumber("GegoV2QianKunMint")
  } else if (gegoTokenV2.ruleId == BigInt.fromI32(100)) {
    NFTTypeNumber("GegoV2BotMint")
  } else if (gegoTokenV2.ruleId == BigInt.fromI32(102)) {
    NFTTypeNumber("GegoV2AlpaMint")
  } else if (gegoTokenV2.ruleId == BigInt.fromI32(1012)) {
    NFTTypeNumber("GegoV2B1Mint")
  } else if (gegoTokenV2.ruleId == BigInt.fromI32(1013)) {
    NFTTypeNumber("GegoV2B2Mint")
  } else if (gegoTokenV2.ruleId == BigInt.fromI32(1014)) {
    NFTTypeNumber("GegoV2B3Mint")
  } else if (gegoTokenV2.ruleId == BigInt.fromI32(1015)) {
    NFTTypeNumber("GegoV2B4Mint")
  } else if (gegoTokenV2.ruleId == BigInt.fromI32(1016)) {
    NFTTypeNumber("GegoV2B5Mint")
  } else if (gegoTokenV2.ruleId == BigInt.fromI32(1017)) {
    NFTTypeNumber("GegoV2BDegoMint")
  } else if (gegoTokenV2.ruleId == BigInt.fromI32(1018)) {
    NFTTypeNumber("GegoV2BMarketMint")
  }
}

export function handleGegoV2Burn(event: GegoBurn): void {
  let gegoTokenV2 = GegoTokenV2.load(event.params.id.toHex())
  gegoTokenV2.isExist = false;
  gegoTokenV2.save()

  NFTTypeNumber("gegoTokenV2Burn")

  if (gegoTokenV2.ruleId == BigInt.fromI32(1001)) {
    NFTTypeNumber("GegoV2MathBurn")
  } else if (gegoTokenV2.ruleId == BigInt.fromI32(1002)) {
    NFTTypeNumber("GegoV2DegoBurn")
  } else if (gegoTokenV2.ruleId == BigInt.fromI32(1003)) {
    NFTTypeNumber("GegoV2Burger7UpBurn")
  } else if (gegoTokenV2.ruleId == BigInt.fromI32(1004)) {
    NFTTypeNumber("GegoV2BurgerCokeBurn")
  } else if (gegoTokenV2.ruleId == BigInt.fromI32(1005)) {
    NFTTypeNumber("GegoV2BurgerBurn")
  } else if (gegoTokenV2.ruleId == BigInt.fromI32(1006)) {
    NFTTypeNumber("GegoV2QianKunBurn")
  } else if (gegoTokenV2.ruleId == BigInt.fromI32(100)) {
    NFTTypeNumber("GegoV2BotBurn")
  } else if (gegoTokenV2.ruleId == BigInt.fromI32(102)) {
    NFTTypeNumber("GegoV2AlpaBurn")
  } else if (gegoTokenV2.ruleId == BigInt.fromI32(1012)) {
    NFTTypeNumber("GegoV2B1Burn")
  } else if (gegoTokenV2.ruleId == BigInt.fromI32(1013)) {
    NFTTypeNumber("GegoV2B2Burn")
  } else if (gegoTokenV2.ruleId == BigInt.fromI32(1014)) {
    NFTTypeNumber("GegoV2B3Burn")
  } else if (gegoTokenV2.ruleId == BigInt.fromI32(1015)) {
    NFTTypeNumber("GegoV2B4Burn")
  } else if (gegoTokenV2.ruleId == BigInt.fromI32(1016)) {
    NFTTypeNumber("GegoV2B5Burn")
  } else if (gegoTokenV2.ruleId == BigInt.fromI32(1017)) {
    NFTTypeNumber("GegoV2BDegoBurn")
  } else if (gegoTokenV2.ruleId == BigInt.fromI32(1018)) {
    NFTTypeNumber("GegoV2BMarketBurn")
  }
}

export function handleCocosNFTAdded(event: CocosNFTAdded): void {
  let cocosNFT = new CocosNFT(event.params.id.toHex())
  cocosNFT.index = event.params.id;
  cocosNFT.grade = event.params.grade
  cocosNFT.quality = event.params.quality
  cocosNFT.amount = event.params.amount
  cocosNFT.resBaseId = event.params.resBaseId
  cocosNFT.tLevel = event.params.tLevel
  cocosNFT.ruleId = event.params.ruleId
  cocosNFT.nftType = event.params.nftType
  cocosNFT.author = event.params.author
  cocosNFT.erc20 = event.params.erc20
  cocosNFT.nftAddress = Address.fromString(CocosNFT_ADD)
  cocosNFT.createdTime = event.params.createdTime
  cocosNFT.blockNum = event.params.blockNum
  cocosNFT.version = BigInt.fromI32(2)
  cocosNFT.isExist = true;
  cocosNFT.save()

  NFTTypeNumber("CocosNFT")
  if (cocosNFT.ruleId == BigInt.fromI32(2021)) {
    NFTTypeNumber("CocosNFTOx")
  } else if (cocosNFT.ruleId == BigInt.fromI32(502)) {
    NFTTypeNumber("CocosNFTHarmony")
  } else if (cocosNFT.ruleId == BigInt.fromI32(404)) {
    NFTTypeNumber("CocosNFTPatriotism")
  } else if (cocosNFT.ruleId == BigInt.fromI32(35)) {
    NFTTypeNumber("CocosNFTFriendliness")
  } else if (cocosNFT.ruleId == BigInt.fromI32(1024)) {
    NFTTypeNumber("CocosNFTProsperity")
  } else if (cocosNFT.ruleId == BigInt.fromI32(996)) {
    NFTTypeNumber("CocosNFTDedication")
  }
}

export function handleCocosNFTBurn(event: CocosNFTBurn): void {
  let cocosNFT = CocosNFT.load(event.params.id.toHex())
  cocosNFT.isExist = false;
  cocosNFT.save()

  NFTTypeNumber("CocosNFTBurn")
  if (cocosNFT.ruleId == BigInt.fromI32(2010)) {
    NFTTypeNumber("CocosNFTBurnOx")
  } else if (cocosNFT.ruleId == BigInt.fromI32(502)) {
    NFTTypeNumber("CocosNFTBurnHarmony")
  } else if (cocosNFT.ruleId == BigInt.fromI32(404)) {
    NFTTypeNumber("CocosNFTBurnPatriotism")
  } else if (cocosNFT.ruleId == BigInt.fromI32(35)) {
    NFTTypeNumber("CocosNFTBurnFriendliness")
  } else if (cocosNFT.ruleId == BigInt.fromI32(1024)) {
    NFTTypeNumber("CocosNFTBurnProsperity")
  } else if (cocosNFT.ruleId == BigInt.fromI32(996)) {
    NFTTypeNumber("CocosNFTBurnDedication")
  }
}