// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class GegoAdded extends ethereum.Event {
  get params(): GegoAdded__Params {
    return new GegoAdded__Params(this);
  }
}

export class GegoAdded__Params {
  _event: GegoAdded;

  constructor(event: GegoAdded) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get grade(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get quality(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get degoAmount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get createdTime(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get blockNum(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get resId(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get author(): Address {
    return this._event.parameters[7].value.toAddress();
  }
}

export class GegoBurn extends ethereum.Event {
  get params(): GegoBurn__Params {
    return new GegoBurn__Params(this);
  }
}

export class GegoBurn__Params {
  _event: GegoBurn;

  constructor(event: GegoBurn) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get degoAmount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class NFTReceived extends ethereum.Event {
  get params(): NFTReceived__Params {
    return new NFTReceived__Params(this);
  }
}

export class NFTReceived__Params {
  _event: NFTReceived;

  constructor(event: NFTReceived) {
    this._event = event;
  }

  get operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get data(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }
}

export class GovernanceTransferred extends ethereum.Event {
  get params(): GovernanceTransferred__Params {
    return new GovernanceTransferred__Params(this);
  }
}

export class GovernanceTransferred__Params {
  _event: GovernanceTransferred;

  constructor(event: GovernanceTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class GegoFactoryV1___gegoesResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;
  value6: BigInt;
  value7: Address;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt,
    value6: BigInt,
    value7: Address
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigInt(this.value6));
    map.set("value7", ethereum.Value.fromAddress(this.value7));
    return map;
  }
}

export class GegoFactoryV1__getGegoResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;
  value6: Address;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt,
    value6: Address
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromAddress(this.value6));
    return map;
  }
}

export class GegoFactoryV1 extends ethereum.SmartContract {
  static bind(address: Address): GegoFactoryV1 {
    return new GegoFactoryV1("GegoFactoryV1", address);
  }

  onERC721Received(
    operator: Address,
    from: Address,
    tokenId: BigInt,
    data: Bytes
  ): Bytes {
    let result = super.call(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(operator),
        ethereum.Value.fromAddress(from),
        ethereum.Value.fromUnsignedBigInt(tokenId),
        ethereum.Value.fromBytes(data)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC721Received(
    operator: Address,
    from: Address,
    tokenId: BigInt,
    data: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(operator),
        ethereum.Value.fromAddress(from),
        ethereum.Value.fromUnsignedBigInt(tokenId),
        ethereum.Value.fromBytes(data)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  mint(degoAmount: BigInt, resId: BigInt): BigInt {
    let result = super.call("mint", "mint(uint256,uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(degoAmount),
      ethereum.Value.fromUnsignedBigInt(resId)
    ]);

    return result[0].toBigInt();
  }

  try_mint(degoAmount: BigInt, resId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("mint", "mint(uint256,uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(degoAmount),
      ethereum.Value.fromUnsignedBigInt(resId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _governance(): Address {
    let result = super.call("_governance", "_governance():(address)", []);

    return result[0].toAddress();
  }

  try__governance(): ethereum.CallResult<Address> {
    let result = super.tryCall("_governance", "_governance():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  _currentClaimKryptonite(): BigInt {
    let result = super.call(
      "_currentClaimKryptonite",
      "_currentClaimKryptonite():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try__currentClaimKryptonite(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "_currentClaimKryptonite",
      "_currentClaimKryptonite():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _minters(param0: Address): boolean {
    let result = super.call("_minters", "_minters(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try__minters(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("_minters", "_minters(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  _isUserStart(): boolean {
    let result = super.call("_isUserStart", "_isUserStart():(bool)", []);

    return result[0].toBoolean();
  }

  try__isUserStart(): ethereum.CallResult<boolean> {
    let result = super.tryCall("_isUserStart", "_isUserStart():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  burn(tokenId: BigInt): boolean {
    let result = super.call("burn", "burn(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toBoolean();
  }

  try_burn(tokenId: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("burn", "burn(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  _gegoes(param0: BigInt): GegoFactoryV1___gegoesResult {
    let result = super.call(
      "_gegoes",
      "_gegoes(uint256):(uint256,uint256,uint256,uint256,uint256,uint256,uint256,address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new GegoFactoryV1___gegoesResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toBigInt(),
      result[7].toAddress()
    );
  }

  try__gegoes(
    param0: BigInt
  ): ethereum.CallResult<GegoFactoryV1___gegoesResult> {
    let result = super.tryCall(
      "_gegoes",
      "_gegoes(uint256):(uint256,uint256,uint256,uint256,uint256,uint256,uint256,address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new GegoFactoryV1___gegoesResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toBigInt(),
        value[7].toAddress()
      )
    );
  }

  _dandyMintAmount(): BigInt {
    let result = super.call(
      "_dandyMintAmount",
      "_dandyMintAmount():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try__dandyMintAmount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "_dandyMintAmount",
      "_dandyMintAmount():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  claim(): BigInt {
    let result = super.call("claim", "claim():(uint256)", []);

    return result[0].toBigInt();
  }

  try_claim(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("claim", "claim():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _gego(): Address {
    let result = super.call("_gego", "_gego():(address)", []);

    return result[0].toAddress();
  }

  try__gego(): ethereum.CallResult<Address> {
    let result = super.tryCall("_gego", "_gego():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  _airdropDegoAmount(): BigInt {
    let result = super.call(
      "_airdropDegoAmount",
      "_airdropDegoAmount():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try__airdropDegoAmount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "_airdropDegoAmount",
      "_airdropDegoAmount():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getGego(tokenId: BigInt): GegoFactoryV1__getGegoResult {
    let result = super.call(
      "getGego",
      "getGego(uint256):(uint256,uint256,uint256,uint256,uint256,uint256,address)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );

    return new GegoFactoryV1__getGegoResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toAddress()
    );
  }

  try_getGego(
    tokenId: BigInt
  ): ethereum.CallResult<GegoFactoryV1__getGegoResult> {
    let result = super.tryCall(
      "getGego",
      "getGego(uint256):(uint256,uint256,uint256,uint256,uint256,uint256,address)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new GegoFactoryV1__getGegoResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toAddress()
      )
    );
  }

  _dego(): Address {
    let result = super.call("_dego", "_dego():(address)", []);

    return result[0].toAddress();
  }

  try__dego(): ethereum.CallResult<Address> {
    let result = super.tryCall("_dego", "_dego():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  addAirdropDego(degoAmount: BigInt): boolean {
    let result = super.call(
      "addAirdropDego",
      "addAirdropDego(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(degoAmount)]
    );

    return result[0].toBoolean();
  }

  try_addAirdropDego(degoAmount: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "addAirdropDego",
      "addAirdropDego(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(degoAmount)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  _gegoId(): BigInt {
    let result = super.call("_gegoId", "_gegoId():(uint32)", []);

    return result[0].toBigInt();
  }

  try__gegoId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("_gegoId", "_gegoId():(uint32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _stakeDegoForKryptonite(): BigInt {
    let result = super.call(
      "_stakeDegoForKryptonite",
      "_stakeDegoForKryptonite():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try__stakeDegoForKryptonite(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "_stakeDegoForKryptonite",
      "_stakeDegoForKryptonite():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _isClaimStart(): boolean {
    let result = super.call("_isClaimStart", "_isClaimStart():(bool)", []);

    return result[0].toBoolean();
  }

  try__isClaimStart(): ethereum.CallResult<boolean> {
    let result = super.tryCall("_isClaimStart", "_isClaimStart():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  _minMintAmount(): BigInt {
    let result = super.call("_minMintAmount", "_minMintAmount():(uint256)", []);

    return result[0].toBigInt();
  }

  try__minMintAmount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "_minMintAmount",
      "_minMintAmount():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getQualityBase(): BigInt {
    let result = super.call("getQualityBase", "getQualityBase():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getQualityBase(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getQualityBase",
      "getQualityBase():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _canMintDandy(): boolean {
    let result = super.call("_canMintDandy", "_canMintDandy():(bool)", []);

    return result[0].toBoolean();
  }

  try__canMintDandy(): ethereum.CallResult<boolean> {
    let result = super.tryCall("_canMintDandy", "_canMintDandy():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  _claimMembers(param0: Address): boolean {
    let result = super.call("_claimMembers", "_claimMembers(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try__claimMembers(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "_claimMembers",
      "_claimMembers(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  _maxClaimKryptonite(): BigInt {
    let result = super.call(
      "_maxClaimKryptonite",
      "_maxClaimKryptonite():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try__maxClaimKryptonite(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "_maxClaimKryptonite",
      "_maxClaimKryptonite():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _minBurnTime(): BigInt {
    let result = super.call("_minBurnTime", "_minBurnTime():(uint256)", []);

    return result[0].toBigInt();
  }

  try__minBurnTime(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("_minBurnTime", "_minBurnTime():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _topMembers(param0: Address): boolean {
    let result = super.call("_topMembers", "_topMembers(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try__topMembers(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("_topMembers", "_topMembers(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  _qualityBase(): BigInt {
    let result = super.call("_qualityBase", "_qualityBase():(uint256)", []);

    return result[0].toBigInt();
  }

  try__qualityBase(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("_qualityBase", "_qualityBase():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getGrade(quality: BigInt): BigInt {
    let result = super.call("getGrade", "getGrade(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(quality)
    ]);

    return result[0].toBigInt();
  }

  try_getGrade(quality: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getGrade", "getGrade(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(quality)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _dandy(): Address {
    let result = super.call("_dandy", "_dandy():(address)", []);

    return result[0].toAddress();
  }

  try__dandy(): ethereum.CallResult<Address> {
    let result = super.tryCall("_dandy", "_dandy():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  _maxGradeLong(): BigInt {
    let result = super.call("_maxGradeLong", "_maxGradeLong():(uint256)", []);

    return result[0].toBigInt();
  }

  try__maxGradeLong(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "_maxGradeLong",
      "_maxGradeLong():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _maxGrade(): BigInt {
    let result = super.call("_maxGrade", "_maxGrade():(uint256)", []);

    return result[0].toBigInt();
  }

  try__maxGrade(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("_maxGrade", "_maxGrade():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class OnERC721ReceivedCall extends ethereum.Call {
  get inputs(): OnERC721ReceivedCall__Inputs {
    return new OnERC721ReceivedCall__Inputs(this);
  }

  get outputs(): OnERC721ReceivedCall__Outputs {
    return new OnERC721ReceivedCall__Outputs(this);
  }
}

export class OnERC721ReceivedCall__Inputs {
  _call: OnERC721ReceivedCall;

  constructor(call: OnERC721ReceivedCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get from(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class OnERC721ReceivedCall__Outputs {
  _call: OnERC721ReceivedCall;

  constructor(call: OnERC721ReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class MintCall extends ethereum.Call {
  get inputs(): MintCall__Inputs {
    return new MintCall__Inputs(this);
  }

  get outputs(): MintCall__Outputs {
    return new MintCall__Outputs(this);
  }
}

export class MintCall__Inputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get degoAmount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get resId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class MintCall__Outputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class SetMinMintAmountCall extends ethereum.Call {
  get inputs(): SetMinMintAmountCall__Inputs {
    return new SetMinMintAmountCall__Inputs(this);
  }

  get outputs(): SetMinMintAmountCall__Outputs {
    return new SetMinMintAmountCall__Outputs(this);
  }
}

export class SetMinMintAmountCall__Inputs {
  _call: SetMinMintAmountCall;

  constructor(call: SetMinMintAmountCall) {
    this._call = call;
  }

  get value(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetMinMintAmountCall__Outputs {
  _call: SetMinMintAmountCall;

  constructor(call: SetMinMintAmountCall) {
    this._call = call;
  }
}

export class SetMintDandyCall extends ethereum.Call {
  get inputs(): SetMintDandyCall__Inputs {
    return new SetMintDandyCall__Inputs(this);
  }

  get outputs(): SetMintDandyCall__Outputs {
    return new SetMintDandyCall__Outputs(this);
  }
}

export class SetMintDandyCall__Inputs {
  _call: SetMintDandyCall;

  constructor(call: SetMintDandyCall) {
    this._call = call;
  }

  get b(): boolean {
    return this._call.inputValues[0].value.toBoolean();
  }
}

export class SetMintDandyCall__Outputs {
  _call: SetMintDandyCall;

  constructor(call: SetMintDandyCall) {
    this._call = call;
  }
}

export class RemoveMinterCall extends ethereum.Call {
  get inputs(): RemoveMinterCall__Inputs {
    return new RemoveMinterCall__Inputs(this);
  }

  get outputs(): RemoveMinterCall__Outputs {
    return new RemoveMinterCall__Outputs(this);
  }
}

export class RemoveMinterCall__Inputs {
  _call: RemoveMinterCall;

  constructor(call: RemoveMinterCall) {
    this._call = call;
  }

  get minter(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RemoveMinterCall__Outputs {
  _call: RemoveMinterCall;

  constructor(call: RemoveMinterCall) {
    this._call = call;
  }
}

export class BurnCall extends ethereum.Call {
  get inputs(): BurnCall__Inputs {
    return new BurnCall__Inputs(this);
  }

  get outputs(): BurnCall__Outputs {
    return new BurnCall__Outputs(this);
  }
}

export class BurnCall__Inputs {
  _call: BurnCall;

  constructor(call: BurnCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class BurnCall__Outputs {
  _call: BurnCall;

  constructor(call: BurnCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class ClaimCall extends ethereum.Call {
  get inputs(): ClaimCall__Inputs {
    return new ClaimCall__Inputs(this);
  }

  get outputs(): ClaimCall__Outputs {
    return new ClaimCall__Outputs(this);
  }
}

export class ClaimCall__Inputs {
  _call: ClaimCall;

  constructor(call: ClaimCall) {
    this._call = call;
  }
}

export class ClaimCall__Outputs {
  _call: ClaimCall;

  constructor(call: ClaimCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class SetDandyMintAmountCall extends ethereum.Call {
  get inputs(): SetDandyMintAmountCall__Inputs {
    return new SetDandyMintAmountCall__Inputs(this);
  }

  get outputs(): SetDandyMintAmountCall__Outputs {
    return new SetDandyMintAmountCall__Outputs(this);
  }
}

export class SetDandyMintAmountCall__Inputs {
  _call: SetDandyMintAmountCall;

  constructor(call: SetDandyMintAmountCall) {
    this._call = call;
  }

  get value(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetDandyMintAmountCall__Outputs {
  _call: SetDandyMintAmountCall;

  constructor(call: SetDandyMintAmountCall) {
    this._call = call;
  }
}

export class SetDandyContractCall extends ethereum.Call {
  get inputs(): SetDandyContractCall__Inputs {
    return new SetDandyContractCall__Inputs(this);
  }

  get outputs(): SetDandyContractCall__Outputs {
    return new SetDandyContractCall__Outputs(this);
  }
}

export class SetDandyContractCall__Inputs {
  _call: SetDandyContractCall;

  constructor(call: SetDandyContractCall) {
    this._call = call;
  }

  get dandy(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetDandyContractCall__Outputs {
  _call: SetDandyContractCall;

  constructor(call: SetDandyContractCall) {
    this._call = call;
  }
}

export class AddAirdropDegoCall extends ethereum.Call {
  get inputs(): AddAirdropDegoCall__Inputs {
    return new AddAirdropDegoCall__Inputs(this);
  }

  get outputs(): AddAirdropDegoCall__Outputs {
    return new AddAirdropDegoCall__Outputs(this);
  }
}

export class AddAirdropDegoCall__Inputs {
  _call: AddAirdropDegoCall;

  constructor(call: AddAirdropDegoCall) {
    this._call = call;
  }

  get degoAmount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class AddAirdropDegoCall__Outputs {
  _call: AddAirdropDegoCall;

  constructor(call: AddAirdropDegoCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class SetMaxClaimKryptoniteCall extends ethereum.Call {
  get inputs(): SetMaxClaimKryptoniteCall__Inputs {
    return new SetMaxClaimKryptoniteCall__Inputs(this);
  }

  get outputs(): SetMaxClaimKryptoniteCall__Outputs {
    return new SetMaxClaimKryptoniteCall__Outputs(this);
  }
}

export class SetMaxClaimKryptoniteCall__Inputs {
  _call: SetMaxClaimKryptoniteCall;

  constructor(call: SetMaxClaimKryptoniteCall) {
    this._call = call;
  }

  get value(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetMaxClaimKryptoniteCall__Outputs {
  _call: SetMaxClaimKryptoniteCall;

  constructor(call: SetMaxClaimKryptoniteCall) {
    this._call = call;
  }
}

export class AddMinterCall extends ethereum.Call {
  get inputs(): AddMinterCall__Inputs {
    return new AddMinterCall__Inputs(this);
  }

  get outputs(): AddMinterCall__Outputs {
    return new AddMinterCall__Outputs(this);
  }
}

export class AddMinterCall__Inputs {
  _call: AddMinterCall;

  constructor(call: AddMinterCall) {
    this._call = call;
  }

  get minter(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddMinterCall__Outputs {
  _call: AddMinterCall;

  constructor(call: AddMinterCall) {
    this._call = call;
  }
}

export class SetClaimStartCall extends ethereum.Call {
  get inputs(): SetClaimStartCall__Inputs {
    return new SetClaimStartCall__Inputs(this);
  }

  get outputs(): SetClaimStartCall__Outputs {
    return new SetClaimStartCall__Outputs(this);
  }
}

export class SetClaimStartCall__Inputs {
  _call: SetClaimStartCall;

  constructor(call: SetClaimStartCall) {
    this._call = call;
  }

  get start(): boolean {
    return this._call.inputValues[0].value.toBoolean();
  }
}

export class SetClaimStartCall__Outputs {
  _call: SetClaimStartCall;

  constructor(call: SetClaimStartCall) {
    this._call = call;
  }
}

export class SetGovernanceCall extends ethereum.Call {
  get inputs(): SetGovernanceCall__Inputs {
    return new SetGovernanceCall__Inputs(this);
  }

  get outputs(): SetGovernanceCall__Outputs {
    return new SetGovernanceCall__Outputs(this);
  }
}

export class SetGovernanceCall__Inputs {
  _call: SetGovernanceCall;

  constructor(call: SetGovernanceCall) {
    this._call = call;
  }

  get governance(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetGovernanceCall__Outputs {
  _call: SetGovernanceCall;

  constructor(call: SetGovernanceCall) {
    this._call = call;
  }
}

export class SetResIdCall extends ethereum.Call {
  get inputs(): SetResIdCall__Inputs {
    return new SetResIdCall__Inputs(this);
  }

  get outputs(): SetResIdCall__Outputs {
    return new SetResIdCall__Outputs(this);
  }
}

export class SetResIdCall__Inputs {
  _call: SetResIdCall;

  constructor(call: SetResIdCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get resId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetResIdCall__Outputs {
  _call: SetResIdCall;

  constructor(call: SetResIdCall) {
    this._call = call;
  }
}

export class RemoveTopMemberCall extends ethereum.Call {
  get inputs(): RemoveTopMemberCall__Inputs {
    return new RemoveTopMemberCall__Inputs(this);
  }

  get outputs(): RemoveTopMemberCall__Outputs {
    return new RemoveTopMemberCall__Outputs(this);
  }
}

export class RemoveTopMemberCall__Inputs {
  _call: RemoveTopMemberCall;

  constructor(call: RemoveTopMemberCall) {
    this._call = call;
  }

  get member(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RemoveTopMemberCall__Outputs {
  _call: RemoveTopMemberCall;

  constructor(call: RemoveTopMemberCall) {
    this._call = call;
  }
}

export class SetTopMemberCall extends ethereum.Call {
  get inputs(): SetTopMemberCall__Inputs {
    return new SetTopMemberCall__Inputs(this);
  }

  get outputs(): SetTopMemberCall__Outputs {
    return new SetTopMemberCall__Outputs(this);
  }
}

export class SetTopMemberCall__Inputs {
  _call: SetTopMemberCall;

  constructor(call: SetTopMemberCall) {
    this._call = call;
  }

  get users(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get openTag(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetTopMemberCall__Outputs {
  _call: SetTopMemberCall;

  constructor(call: SetTopMemberCall) {
    this._call = call;
  }
}

export class SetUserStartCall extends ethereum.Call {
  get inputs(): SetUserStartCall__Inputs {
    return new SetUserStartCall__Inputs(this);
  }

  get outputs(): SetUserStartCall__Outputs {
    return new SetUserStartCall__Outputs(this);
  }
}

export class SetUserStartCall__Inputs {
  _call: SetUserStartCall;

  constructor(call: SetUserStartCall) {
    this._call = call;
  }

  get start(): boolean {
    return this._call.inputValues[0].value.toBoolean();
  }
}

export class SetUserStartCall__Outputs {
  _call: SetUserStartCall;

  constructor(call: SetUserStartCall) {
    this._call = call;
  }
}

export class SetGegoContractCall extends ethereum.Call {
  get inputs(): SetGegoContractCall__Inputs {
    return new SetGegoContractCall__Inputs(this);
  }

  get outputs(): SetGegoContractCall__Outputs {
    return new SetGegoContractCall__Outputs(this);
  }
}

export class SetGegoContractCall__Inputs {
  _call: SetGegoContractCall;

  constructor(call: SetGegoContractCall) {
    this._call = call;
  }

  get gego(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetGegoContractCall__Outputs {
  _call: SetGegoContractCall;

  constructor(call: SetGegoContractCall) {
    this._call = call;
  }
}

export class SetMinBurnTimeCall extends ethereum.Call {
  get inputs(): SetMinBurnTimeCall__Inputs {
    return new SetMinBurnTimeCall__Inputs(this);
  }

  get outputs(): SetMinBurnTimeCall__Outputs {
    return new SetMinBurnTimeCall__Outputs(this);
  }
}

export class SetMinBurnTimeCall__Inputs {
  _call: SetMinBurnTimeCall;

  constructor(call: SetMinBurnTimeCall) {
    this._call = call;
  }

  get minBurnTime(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetMinBurnTimeCall__Outputs {
  _call: SetMinBurnTimeCall;

  constructor(call: SetMinBurnTimeCall) {
    this._call = call;
  }
}

export class AddTopMemberCall extends ethereum.Call {
  get inputs(): AddTopMemberCall__Inputs {
    return new AddTopMemberCall__Inputs(this);
  }

  get outputs(): AddTopMemberCall__Outputs {
    return new AddTopMemberCall__Outputs(this);
  }
}

export class AddTopMemberCall__Inputs {
  _call: AddTopMemberCall;

  constructor(call: AddTopMemberCall) {
    this._call = call;
  }

  get member(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddTopMemberCall__Outputs {
  _call: AddTopMemberCall;

  constructor(call: AddTopMemberCall) {
    this._call = call;
  }
}

export class SetDegoContractCall extends ethereum.Call {
  get inputs(): SetDegoContractCall__Inputs {
    return new SetDegoContractCall__Inputs(this);
  }

  get outputs(): SetDegoContractCall__Outputs {
    return new SetDegoContractCall__Outputs(this);
  }
}

export class SetDegoContractCall__Inputs {
  _call: SetDegoContractCall;

  constructor(call: SetDegoContractCall) {
    this._call = call;
  }

  get dego(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetDegoContractCall__Outputs {
  _call: SetDegoContractCall;

  constructor(call: SetDegoContractCall) {
    this._call = call;
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get dego(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get gego(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get dandy(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}
