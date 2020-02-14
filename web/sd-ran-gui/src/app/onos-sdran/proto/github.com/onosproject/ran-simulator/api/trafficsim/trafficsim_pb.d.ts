import * as jspb from "google-protobuf"

import * as github_com_onosproject_ran$simulator_api_types_types_pb from '../../../../../github.com/onosproject/ran-simulator/api/types/types_pb';

export class MapLayoutRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MapLayoutRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MapLayoutRequest): MapLayoutRequest.AsObject;
  static serializeBinaryToWriter(message: MapLayoutRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MapLayoutRequest;
  static deserializeBinaryFromReader(message: MapLayoutRequest, reader: jspb.BinaryReader): MapLayoutRequest;
}

export namespace MapLayoutRequest {
  export type AsObject = {
  }
}

export class ListTowersRequest extends jspb.Message {
  getSubscribe(): boolean;
  setSubscribe(value: boolean): void;

  getWithoutreplay(): boolean;
  setWithoutreplay(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTowersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTowersRequest): ListTowersRequest.AsObject;
  static serializeBinaryToWriter(message: ListTowersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTowersRequest;
  static deserializeBinaryFromReader(message: ListTowersRequest, reader: jspb.BinaryReader): ListTowersRequest;
}

export namespace ListTowersRequest {
  export type AsObject = {
    subscribe: boolean,
    withoutreplay: boolean,
  }
}

export class ListTowersResponse extends jspb.Message {
  getTower(): github_com_onosproject_ran$simulator_api_types_types_pb.Tower | undefined;
  setTower(value?: github_com_onosproject_ran$simulator_api_types_types_pb.Tower): void;
  hasTower(): boolean;
  clearTower(): void;

  getType(): Type;
  setType(value: Type): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTowersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListTowersResponse): ListTowersResponse.AsObject;
  static serializeBinaryToWriter(message: ListTowersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTowersResponse;
  static deserializeBinaryFromReader(message: ListTowersResponse, reader: jspb.BinaryReader): ListTowersResponse;
}

export namespace ListTowersResponse {
  export type AsObject = {
    tower?: github_com_onosproject_ran$simulator_api_types_types_pb.Tower.AsObject,
    type: Type,
  }
}

export class ListRoutesRequest extends jspb.Message {
  getSubscribe(): boolean;
  setSubscribe(value: boolean): void;

  getWithoutreplay(): boolean;
  setWithoutreplay(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRoutesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRoutesRequest): ListRoutesRequest.AsObject;
  static serializeBinaryToWriter(message: ListRoutesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRoutesRequest;
  static deserializeBinaryFromReader(message: ListRoutesRequest, reader: jspb.BinaryReader): ListRoutesRequest;
}

export namespace ListRoutesRequest {
  export type AsObject = {
    subscribe: boolean,
    withoutreplay: boolean,
  }
}

export class ListRoutesResponse extends jspb.Message {
  getRoute(): github_com_onosproject_ran$simulator_api_types_types_pb.Route | undefined;
  setRoute(value?: github_com_onosproject_ran$simulator_api_types_types_pb.Route): void;
  hasRoute(): boolean;
  clearRoute(): void;

  getType(): Type;
  setType(value: Type): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRoutesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListRoutesResponse): ListRoutesResponse.AsObject;
  static serializeBinaryToWriter(message: ListRoutesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRoutesResponse;
  static deserializeBinaryFromReader(message: ListRoutesResponse, reader: jspb.BinaryReader): ListRoutesResponse;
}

export namespace ListRoutesResponse {
  export type AsObject = {
    route?: github_com_onosproject_ran$simulator_api_types_types_pb.Route.AsObject,
    type: Type,
  }
}

export class ListUesRequest extends jspb.Message {
  getSubscribe(): boolean;
  setSubscribe(value: boolean): void;

  getWithoutreplay(): boolean;
  setWithoutreplay(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListUesRequest): ListUesRequest.AsObject;
  static serializeBinaryToWriter(message: ListUesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUesRequest;
  static deserializeBinaryFromReader(message: ListUesRequest, reader: jspb.BinaryReader): ListUesRequest;
}

export namespace ListUesRequest {
  export type AsObject = {
    subscribe: boolean,
    withoutreplay: boolean,
  }
}

export class ListUesResponse extends jspb.Message {
  getUe(): github_com_onosproject_ran$simulator_api_types_types_pb.Ue | undefined;
  setUe(value?: github_com_onosproject_ran$simulator_api_types_types_pb.Ue): void;
  hasUe(): boolean;
  clearUe(): void;

  getType(): Type;
  setType(value: Type): void;

  getUpdateType(): UpdateType;
  setUpdateType(value: UpdateType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListUesResponse): ListUesResponse.AsObject;
  static serializeBinaryToWriter(message: ListUesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUesResponse;
  static deserializeBinaryFromReader(message: ListUesResponse, reader: jspb.BinaryReader): ListUesResponse;
}

export namespace ListUesResponse {
  export type AsObject = {
    ue?: github_com_onosproject_ran$simulator_api_types_types_pb.Ue.AsObject,
    type: Type,
    updateType: UpdateType,
  }
}

export enum Type { 
  NONE = 0,
  ADDED = 1,
  UPDATED = 2,
  REMOVED = 3,
}
export enum UpdateType { 
  NOUPDATETYPE = 0,
  POSITION = 1,
  TOWER = 2,
  HANDOVER = 3,
}
