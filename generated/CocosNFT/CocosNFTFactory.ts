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

export class CocosNFTAdded extends ethereum.Event {
  get params(): CocosNFTAdded__Params {
    return new CocosNFTAdded__Params(this);
  }
}

export class CocosNFTAdded__Params {
  _event: CocosNFTAdded;

  constructor(event: CocosNFTAdded) {
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

  get amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get resBaseId(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get tLevel(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get ruleId(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get nftType(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }

  get author(): Address {
    return this._event.parameters[8].value.toAddress();
  }

  get erc20(): Address {
    return this._event.parameters[9].value.toAddress();
  }

  get createdTime(): BigInt {
    return this._event.parameters[10].value.toBigInt();
  }

  get blockNum(): BigInt {
    return this._event.parameters[11].value.toBigInt();
  }
}

export class CocosNFTBurn extends ethereum.Event {
  get params(): CocosNFTBurn__Params {
    return new CocosNFTBurn__Params(this);
  }
}

export class CocosNFTBurn__Params {
  _event: CocosNFTBurn;

  constructor(event: CocosNFTBurn) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get erc20(): Address {
    return this._event.parameters[2].value.toAddress();
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

export class CocosNFTFactory__getCocosNFTStructResultCocosNFTStruct extends ethereum.Tuple {
  get id(): BigInt {
    return this[0].toBigInt();
  }

  get grade(): BigInt {
    return this[1].toBigInt();
  }

  get quality(): BigInt {
    return this[2].toBigInt();
  }

  get amount(): BigInt {
    return this[3].toBigInt();
  }

  get resBaseId(): BigInt {
    return this[4].toBigInt();
  }

  get tLevel(): BigInt {
    return this[5].toBigInt();
  }

  get ruleId(): BigInt {
    return this[6].toBigInt();
  }

  get nftType(): BigInt {
    return this[7].toBigInt();
  }

  get author(): Address {
    return this[8].toAddress();
  }

  get erc20(): Address {
    return this[9].toAddress();
  }

  get createdTime(): BigInt {
    return this[10].toBigInt();
  }

  get blockNum(): BigInt {
    return this[11].toBigInt();
  }
}

export class CocosNFTFactory___cocosNFTsResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;
  value6: BigInt;
  value7: BigInt;
  value8: Address;
  value9: Address;
  value10: BigInt;
  value11: BigInt;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt,
    value6: BigInt,
    value7: BigInt,
    value8: Address,
    value9: Address,
    value10: BigInt,
    value11: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
    this.value9 = value9;
    this.value10 = value10;
    this.value11 = value11;
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
    map.set("value7", ethereum.Value.fromUnsignedBigInt(this.value7));
    map.set("value8", ethereum.Value.fromAddress(this.value8));
    map.set("value9", ethereum.Value.fromAddress(this.value9));
    map.set("value10", ethereum.Value.fromUnsignedBigInt(this.value10));
    map.set("value11", ethereum.Value.fromUnsignedBigInt(this.value11));
    return map;
  }
}

export class CocosNFTFactory__getCocosNFTResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;
  value6: BigInt;
  value7: Address;
  value8: Address;
  value9: BigInt;
  value10: BigInt;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt,
    value6: BigInt,
    value7: Address,
    value8: Address,
    value9: BigInt,
    value10: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
    this.value9 = value9;
    this.value10 = value10;
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
    map.set("value8", ethereum.Value.fromAddress(this.value8));
    map.set("value9", ethereum.Value.fromUnsignedBigInt(this.value9));
    map.set("value10", ethereum.Value.fromUnsignedBigInt(this.value10));
    return map;
  }
}

export class CocosNFTFactory extends ethereum.SmartContract {
  static bind(address: Address): CocosNFTFactory {
    return new CocosNFTFactory("CocosNFTFactory", address);
  }

  getCocosNFTStruct(
    tokenId: BigInt
  ): CocosNFTFactory__getCocosNFTStructResultCocosNFTStruct {
    let result = super.call(
      "getCocosNFTStruct",
      "getCocosNFTStruct(uint256):((uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address,address,uint256,uint256))",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );

    return result[0].toTuple() as CocosNFTFactory__getCocosNFTStructResultCocosNFTStruct;
  }

  try_getCocosNFTStruct(
    tokenId: BigInt
  ): ethereum.CallResult<
    CocosNFTFactory__getCocosNFTStructResultCocosNFTStruct
  > {
    let result = super.tryCall(
      "getCocosNFTStruct",
      "getCocosNFTStruct(uint256):((uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address,address,uint256,uint256))",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTuple() as CocosNFTFactory__getCocosNFTStructResultCocosNFTStruct
    );
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

  _ruleProxys(param0: BigInt): Address {
    let result = super.call("_ruleProxys", "_ruleProxys(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try__ruleProxys(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "_ruleProxys",
      "_ruleProxys(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  _maxCocosNFTId(): BigInt {
    let result = super.call("_maxCocosNFTId", "_maxCocosNFTId():(uint256)", []);

    return result[0].toBigInt();
  }

  try__maxCocosNFTId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "_maxCocosNFTId",
      "_maxCocosNFTId():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _cocosNFTs(param0: BigInt): CocosNFTFactory___cocosNFTsResult {
    let result = super.call(
      "_cocosNFTs",
      "_cocosNFTs(uint256):(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address,address,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new CocosNFTFactory___cocosNFTsResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toBigInt(),
      result[7].toBigInt(),
      result[8].toAddress(),
      result[9].toAddress(),
      result[10].toBigInt(),
      result[11].toBigInt()
    );
  }

  try__cocosNFTs(
    param0: BigInt
  ): ethereum.CallResult<CocosNFTFactory___cocosNFTsResult> {
    let result = super.tryCall(
      "_cocosNFTs",
      "_cocosNFTs(uint256):(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address,address,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new CocosNFTFactory___cocosNFTsResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toBigInt(),
        value[7].toBigInt(),
        value[8].toAddress(),
        value[9].toAddress(),
        value[10].toBigInt(),
        value[11].toBigInt()
      )
    );
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

  _ruleProxyFlags(param0: Address): boolean {
    let result = super.call(
      "_ruleProxyFlags",
      "_ruleProxyFlags(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBoolean();
  }

  try__ruleProxyFlags(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "_ruleProxyFlags",
      "_ruleProxyFlags(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isRulerProxyContract(proxy: Address): boolean {
    let result = super.call(
      "isRulerProxyContract",
      "isRulerProxyContract(address):(bool)",
      [ethereum.Value.fromAddress(proxy)]
    );

    return result[0].toBoolean();
  }

  try_isRulerProxyContract(proxy: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isRulerProxyContract",
      "isRulerProxyContract(address):(bool)",
      [ethereum.Value.fromAddress(proxy)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  _cocosNFTId(): BigInt {
    let result = super.call("_cocosNFTId", "_cocosNFTId():(uint256)", []);

    return result[0].toBigInt();
  }

  try__cocosNFTId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("_cocosNFTId", "_cocosNFTId():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _cocosNFT(): Address {
    let result = super.call("_cocosNFT", "_cocosNFT():(address)", []);

    return result[0].toAddress();
  }

  try__cocosNFT(): ethereum.CallResult<Address> {
    let result = super.tryCall("_cocosNFT", "_cocosNFT():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getCocosNFT(tokenId: BigInt): CocosNFTFactory__getCocosNFTResult {
    let result = super.call(
      "getCocosNFT",
      "getCocosNFT(uint256):(uint256,uint256,uint256,uint256,uint256,uint256,uint256,address,address,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );

    return new CocosNFTFactory__getCocosNFTResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toBigInt(),
      result[7].toAddress(),
      result[8].toAddress(),
      result[9].toBigInt(),
      result[10].toBigInt()
    );
  }

  try_getCocosNFT(
    tokenId: BigInt
  ): ethereum.CallResult<CocosNFTFactory__getCocosNFTResult> {
    let result = super.tryCall(
      "getCocosNFT",
      "getCocosNFT(uint256):(uint256,uint256,uint256,uint256,uint256,uint256,uint256,address,address,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new CocosNFTFactory__getCocosNFTResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toBigInt(),
        value[7].toAddress(),
        value[8].toAddress(),
        value[9].toBigInt(),
        value[10].toBigInt()
      )
    );
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

export class SetCurrentCocosNFTIdCall extends ethereum.Call {
  get inputs(): SetCurrentCocosNFTIdCall__Inputs {
    return new SetCurrentCocosNFTIdCall__Inputs(this);
  }

  get outputs(): SetCurrentCocosNFTIdCall__Outputs {
    return new SetCurrentCocosNFTIdCall__Outputs(this);
  }
}

export class SetCurrentCocosNFTIdCall__Inputs {
  _call: SetCurrentCocosNFTIdCall;

  constructor(call: SetCurrentCocosNFTIdCall) {
    this._call = call;
  }

  get id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetCurrentCocosNFTIdCall__Outputs {
  _call: SetCurrentCocosNFTIdCall;

  constructor(call: SetCurrentCocosNFTIdCall) {
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

export class SetCocosNFTContractCall extends ethereum.Call {
  get inputs(): SetCocosNFTContractCall__Inputs {
    return new SetCocosNFTContractCall__Inputs(this);
  }

  get outputs(): SetCocosNFTContractCall__Outputs {
    return new SetCocosNFTContractCall__Outputs(this);
  }
}

export class SetCocosNFTContractCall__Inputs {
  _call: SetCocosNFTContractCall;

  constructor(call: SetCocosNFTContractCall) {
    this._call = call;
  }

  get cocosNFT(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetCocosNFTContractCall__Outputs {
  _call: SetCocosNFTContractCall;

  constructor(call: SetCocosNFTContractCall) {
    this._call = call;
  }
}

export class AddCocosNFTRuleProxyCall extends ethereum.Call {
  get inputs(): AddCocosNFTRuleProxyCall__Inputs {
    return new AddCocosNFTRuleProxyCall__Inputs(this);
  }

  get outputs(): AddCocosNFTRuleProxyCall__Outputs {
    return new AddCocosNFTRuleProxyCall__Outputs(this);
  }
}

export class AddCocosNFTRuleProxyCall__Inputs {
  _call: AddCocosNFTRuleProxyCall;

  constructor(call: AddCocosNFTRuleProxyCall) {
    this._call = call;
  }

  get nftType(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get ruleProxy(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class AddCocosNFTRuleProxyCall__Outputs {
  _call: AddCocosNFTRuleProxyCall;

  constructor(call: AddCocosNFTRuleProxyCall) {
    this._call = call;
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

  get mintData(): MintCallMintDataStruct {
    return this._call.inputValues[0].value.toTuple() as MintCallMintDataStruct;
  }

  get costSet1(): MintCallCostSet1Struct {
    return this._call.inputValues[1].value.toTuple() as MintCallCostSet1Struct;
  }

  get costSet2(): MintCallCostSet2Struct {
    return this._call.inputValues[2].value.toTuple() as MintCallCostSet2Struct;
  }
}

export class MintCall__Outputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }
}

export class MintCallMintDataStruct extends ethereum.Tuple {
  get amount(): BigInt {
    return this[0].toBigInt();
  }

  get resBaseId(): BigInt {
    return this[1].toBigInt();
  }

  get nftType(): BigInt {
    return this[2].toBigInt();
  }

  get ruleId(): BigInt {
    return this[3].toBigInt();
  }

  get tLevel(): BigInt {
    return this[4].toBigInt();
  }
}

export class MintCallCostSet1Struct extends ethereum.Tuple {
  get costErc721Id1(): BigInt {
    return this[0].toBigInt();
  }

  get costErc721Id2(): BigInt {
    return this[1].toBigInt();
  }

  get costErc721Id3(): BigInt {
    return this[2].toBigInt();
  }

  get costErc721Origin(): Address {
    return this[3].toAddress();
  }
}

export class MintCallCostSet2Struct extends ethereum.Tuple {
  get costErc721Id1(): BigInt {
    return this[0].toBigInt();
  }

  get costErc721Id2(): BigInt {
    return this[1].toBigInt();
  }

  get costErc721Id3(): BigInt {
    return this[2].toBigInt();
  }

  get costErc721Origin(): Address {
    return this[3].toAddress();
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

export class GmMintCall extends ethereum.Call {
  get inputs(): GmMintCall__Inputs {
    return new GmMintCall__Inputs(this);
  }

  get outputs(): GmMintCall__Outputs {
    return new GmMintCall__Outputs(this);
  }
}

export class GmMintCall__Inputs {
  _call: GmMintCall;

  constructor(call: GmMintCall) {
    this._call = call;
  }

  get mintData(): GmMintCallMintDataStruct {
    return this._call.inputValues[0].value.toTuple() as GmMintCallMintDataStruct;
  }

  get extraData(): GmMintCallExtraDataStruct {
    return this._call.inputValues[1].value.toTuple() as GmMintCallExtraDataStruct;
  }
}

export class GmMintCall__Outputs {
  _call: GmMintCall;

  constructor(call: GmMintCall) {
    this._call = call;
  }
}

export class GmMintCallMintDataStruct extends ethereum.Tuple {
  get amount(): BigInt {
    return this[0].toBigInt();
  }

  get resBaseId(): BigInt {
    return this[1].toBigInt();
  }

  get nftType(): BigInt {
    return this[2].toBigInt();
  }

  get ruleId(): BigInt {
    return this[3].toBigInt();
  }

  get tLevel(): BigInt {
    return this[4].toBigInt();
  }
}

export class GmMintCallExtraDataStruct extends ethereum.Tuple {
  get cocosNFT_id(): BigInt {
    return this[0].toBigInt();
  }

  get grade(): BigInt {
    return this[1].toBigInt();
  }

  get quality(): BigInt {
    return this[2].toBigInt();
  }

  get author(): Address {
    return this[3].toAddress();
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

export class SetBaseResIdCall extends ethereum.Call {
  get inputs(): SetBaseResIdCall__Inputs {
    return new SetBaseResIdCall__Inputs(this);
  }

  get outputs(): SetBaseResIdCall__Outputs {
    return new SetBaseResIdCall__Outputs(this);
  }
}

export class SetBaseResIdCall__Inputs {
  _call: SetBaseResIdCall;

  constructor(call: SetBaseResIdCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get resBaseId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetBaseResIdCall__Outputs {
  _call: SetBaseResIdCall;

  constructor(call: SetBaseResIdCall) {
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

export class SeizeCall extends ethereum.Call {
  get inputs(): SeizeCall__Inputs {
    return new SeizeCall__Inputs(this);
  }

  get outputs(): SeizeCall__Outputs {
    return new SeizeCall__Outputs(this);
  }
}

export class SeizeCall__Inputs {
  _call: SeizeCall;

  constructor(call: SeizeCall) {
    this._call = call;
  }

  get asset(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get teamWallet(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class SeizeCall__Outputs {
  _call: SeizeCall;

  constructor(call: SeizeCall) {
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

  get cocosNFT(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}
