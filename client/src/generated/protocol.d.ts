import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace com. */
export namespace com {

    /** Namespace miti99. */
    namespace miti99 {

        /** Namespace gomoku. */
        namespace gomoku {

            /** Namespace proto. */
            namespace proto {

                /** Properties of a Request. */
                interface IRequest {

                    /** Request heartbeat */
                    heartbeat?: (com.miti99.gomoku.proto.IHeartbeatRequest|null);

                    /** Request setNickname */
                    setNickname?: (com.miti99.gomoku.proto.ISetNicknameRequest|null);

                    /** Request setClientInfo */
                    setClientInfo?: (com.miti99.gomoku.proto.ISetClientInfoRequest|null);

                    /** Request createRoom */
                    createRoom?: (com.miti99.gomoku.proto.ICreateRoomRequest|null);

                    /** Request createPveRoom */
                    createPveRoom?: (com.miti99.gomoku.proto.ICreatePveRoomRequest|null);

                    /** Request getRooms */
                    getRooms?: (com.miti99.gomoku.proto.IGetRoomsRequest|null);

                    /** Request joinRoom */
                    joinRoom?: (com.miti99.gomoku.proto.IJoinRoomRequest|null);

                    /** Request gameStarting */
                    gameStarting?: (com.miti99.gomoku.proto.IGameStartingRequest|null);

                    /** Request gameReady */
                    gameReady?: (com.miti99.gomoku.proto.IGameReadyRequest|null);

                    /** Request gameMove */
                    gameMove?: (com.miti99.gomoku.proto.IGameMoveRequest|null);

                    /** Request gameReset */
                    gameReset?: (com.miti99.gomoku.proto.IGameResetRequest|null);

                    /** Request watchGame */
                    watchGame?: (com.miti99.gomoku.proto.IWatchGameRequest|null);

                    /** Request watchGameExit */
                    watchGameExit?: (com.miti99.gomoku.proto.IWatchGameExitRequest|null);

                    /** Request clientExit */
                    clientExit?: (com.miti99.gomoku.proto.IClientExitRequest|null);
                }

                /** Represents a Request. */
                class Request implements IRequest {

                    /**
                     * Constructs a new Request.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.IRequest);

                    /** Request heartbeat. */
                    public heartbeat?: (com.miti99.gomoku.proto.IHeartbeatRequest|null);

                    /** Request setNickname. */
                    public setNickname?: (com.miti99.gomoku.proto.ISetNicknameRequest|null);

                    /** Request setClientInfo. */
                    public setClientInfo?: (com.miti99.gomoku.proto.ISetClientInfoRequest|null);

                    /** Request createRoom. */
                    public createRoom?: (com.miti99.gomoku.proto.ICreateRoomRequest|null);

                    /** Request createPveRoom. */
                    public createPveRoom?: (com.miti99.gomoku.proto.ICreatePveRoomRequest|null);

                    /** Request getRooms. */
                    public getRooms?: (com.miti99.gomoku.proto.IGetRoomsRequest|null);

                    /** Request joinRoom. */
                    public joinRoom?: (com.miti99.gomoku.proto.IJoinRoomRequest|null);

                    /** Request gameStarting. */
                    public gameStarting?: (com.miti99.gomoku.proto.IGameStartingRequest|null);

                    /** Request gameReady. */
                    public gameReady?: (com.miti99.gomoku.proto.IGameReadyRequest|null);

                    /** Request gameMove. */
                    public gameMove?: (com.miti99.gomoku.proto.IGameMoveRequest|null);

                    /** Request gameReset. */
                    public gameReset?: (com.miti99.gomoku.proto.IGameResetRequest|null);

                    /** Request watchGame. */
                    public watchGame?: (com.miti99.gomoku.proto.IWatchGameRequest|null);

                    /** Request watchGameExit. */
                    public watchGameExit?: (com.miti99.gomoku.proto.IWatchGameExitRequest|null);

                    /** Request clientExit. */
                    public clientExit?: (com.miti99.gomoku.proto.IClientExitRequest|null);

                    /** Request payload. */
                    public payload?: ("heartbeat"|"setNickname"|"setClientInfo"|"createRoom"|"createPveRoom"|"getRooms"|"joinRoom"|"gameStarting"|"gameReady"|"gameMove"|"gameReset"|"watchGame"|"watchGameExit"|"clientExit");

                    /**
                     * Creates a new Request instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Request instance
                     */
                    public static create(properties?: com.miti99.gomoku.proto.IRequest): com.miti99.gomoku.proto.Request;

                    /**
                     * Encodes the specified Request message. Does not implicitly {@link com.miti99.gomoku.proto.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.miti99.gomoku.proto.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Request message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.miti99.gomoku.proto.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Request message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.Request;

                    /**
                     * Decodes a Request message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.Request;

                    /**
                     * Verifies a Request message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Request message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Request
                     */
                    public static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.Request;

                    /**
                     * Creates a plain object from a Request message. Also converts values to other types if specified.
                     * @param message Request
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.miti99.gomoku.proto.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Request to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Request
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a HeartbeatRequest. */
                interface IHeartbeatRequest {
                }

                /** Represents a HeartbeatRequest. */
                class HeartbeatRequest implements IHeartbeatRequest {

                    /**
                     * Constructs a new HeartbeatRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.IHeartbeatRequest);

                    /**
                     * Creates a new HeartbeatRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns HeartbeatRequest instance
                     */
                    public static create(properties?: com.miti99.gomoku.proto.IHeartbeatRequest): com.miti99.gomoku.proto.HeartbeatRequest;

                    /**
                     * Encodes the specified HeartbeatRequest message. Does not implicitly {@link com.miti99.gomoku.proto.HeartbeatRequest.verify|verify} messages.
                     * @param message HeartbeatRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.miti99.gomoku.proto.IHeartbeatRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified HeartbeatRequest message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.HeartbeatRequest.verify|verify} messages.
                     * @param message HeartbeatRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.miti99.gomoku.proto.IHeartbeatRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a HeartbeatRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns HeartbeatRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.HeartbeatRequest;

                    /**
                     * Decodes a HeartbeatRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns HeartbeatRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.HeartbeatRequest;

                    /**
                     * Verifies a HeartbeatRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a HeartbeatRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns HeartbeatRequest
                     */
                    public static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.HeartbeatRequest;

                    /**
                     * Creates a plain object from a HeartbeatRequest message. Also converts values to other types if specified.
                     * @param message HeartbeatRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.miti99.gomoku.proto.HeartbeatRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this HeartbeatRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for HeartbeatRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SetNicknameRequest. */
                interface ISetNicknameRequest {

                    /** SetNicknameRequest nickname */
                    nickname?: (string|null);
                }

                /** Represents a SetNicknameRequest. */
                class SetNicknameRequest implements ISetNicknameRequest {

                    /**
                     * Constructs a new SetNicknameRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.ISetNicknameRequest);

                    /** SetNicknameRequest nickname. */
                    public nickname: string;

                    /**
                     * Creates a new SetNicknameRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SetNicknameRequest instance
                     */
                    public static create(properties?: com.miti99.gomoku.proto.ISetNicknameRequest): com.miti99.gomoku.proto.SetNicknameRequest;

                    /**
                     * Encodes the specified SetNicknameRequest message. Does not implicitly {@link com.miti99.gomoku.proto.SetNicknameRequest.verify|verify} messages.
                     * @param message SetNicknameRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.miti99.gomoku.proto.ISetNicknameRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SetNicknameRequest message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.SetNicknameRequest.verify|verify} messages.
                     * @param message SetNicknameRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.miti99.gomoku.proto.ISetNicknameRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SetNicknameRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SetNicknameRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.SetNicknameRequest;

                    /**
                     * Decodes a SetNicknameRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SetNicknameRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.SetNicknameRequest;

                    /**
                     * Verifies a SetNicknameRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SetNicknameRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SetNicknameRequest
                     */
                    public static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.SetNicknameRequest;

                    /**
                     * Creates a plain object from a SetNicknameRequest message. Also converts values to other types if specified.
                     * @param message SetNicknameRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.miti99.gomoku.proto.SetNicknameRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SetNicknameRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SetNicknameRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SetClientInfoRequest. */
                interface ISetClientInfoRequest {

                    /** SetClientInfoRequest version */
                    version?: (string|null);
                }

                /** Represents a SetClientInfoRequest. */
                class SetClientInfoRequest implements ISetClientInfoRequest {

                    /**
                     * Constructs a new SetClientInfoRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.ISetClientInfoRequest);

                    /** SetClientInfoRequest version. */
                    public version: string;

                    /**
                     * Creates a new SetClientInfoRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SetClientInfoRequest instance
                     */
                    public static create(properties?: com.miti99.gomoku.proto.ISetClientInfoRequest): com.miti99.gomoku.proto.SetClientInfoRequest;

                    /**
                     * Encodes the specified SetClientInfoRequest message. Does not implicitly {@link com.miti99.gomoku.proto.SetClientInfoRequest.verify|verify} messages.
                     * @param message SetClientInfoRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.miti99.gomoku.proto.ISetClientInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SetClientInfoRequest message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.SetClientInfoRequest.verify|verify} messages.
                     * @param message SetClientInfoRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.miti99.gomoku.proto.ISetClientInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SetClientInfoRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SetClientInfoRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.SetClientInfoRequest;

                    /**
                     * Decodes a SetClientInfoRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SetClientInfoRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.SetClientInfoRequest;

                    /**
                     * Verifies a SetClientInfoRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SetClientInfoRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SetClientInfoRequest
                     */
                    public static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.SetClientInfoRequest;

                    /**
                     * Creates a plain object from a SetClientInfoRequest message. Also converts values to other types if specified.
                     * @param message SetClientInfoRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.miti99.gomoku.proto.SetClientInfoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SetClientInfoRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SetClientInfoRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateRoomRequest. */
                interface ICreateRoomRequest {
                }

                /** Represents a CreateRoomRequest. */
                class CreateRoomRequest implements ICreateRoomRequest {

                    /**
                     * Constructs a new CreateRoomRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.ICreateRoomRequest);

                    /**
                     * Creates a new CreateRoomRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateRoomRequest instance
                     */
                    public static create(properties?: com.miti99.gomoku.proto.ICreateRoomRequest): com.miti99.gomoku.proto.CreateRoomRequest;

                    /**
                     * Encodes the specified CreateRoomRequest message. Does not implicitly {@link com.miti99.gomoku.proto.CreateRoomRequest.verify|verify} messages.
                     * @param message CreateRoomRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.miti99.gomoku.proto.ICreateRoomRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateRoomRequest message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.CreateRoomRequest.verify|verify} messages.
                     * @param message CreateRoomRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.miti99.gomoku.proto.ICreateRoomRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateRoomRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateRoomRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.CreateRoomRequest;

                    /**
                     * Decodes a CreateRoomRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateRoomRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.CreateRoomRequest;

                    /**
                     * Verifies a CreateRoomRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateRoomRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateRoomRequest
                     */
                    public static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.CreateRoomRequest;

                    /**
                     * Creates a plain object from a CreateRoomRequest message. Also converts values to other types if specified.
                     * @param message CreateRoomRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.miti99.gomoku.proto.CreateRoomRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateRoomRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateRoomRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreatePveRoomRequest. */
                interface ICreatePveRoomRequest {

                    /** CreatePveRoomRequest difficulty */
                    difficulty?: (number|null);
                }

                /** Represents a CreatePveRoomRequest. */
                class CreatePveRoomRequest implements ICreatePveRoomRequest {

                    /**
                     * Constructs a new CreatePveRoomRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.ICreatePveRoomRequest);

                    /** CreatePveRoomRequest difficulty. */
                    public difficulty: number;

                    /**
                     * Creates a new CreatePveRoomRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreatePveRoomRequest instance
                     */
                    public static create(properties?: com.miti99.gomoku.proto.ICreatePveRoomRequest): com.miti99.gomoku.proto.CreatePveRoomRequest;

                    /**
                     * Encodes the specified CreatePveRoomRequest message. Does not implicitly {@link com.miti99.gomoku.proto.CreatePveRoomRequest.verify|verify} messages.
                     * @param message CreatePveRoomRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.miti99.gomoku.proto.ICreatePveRoomRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreatePveRoomRequest message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.CreatePveRoomRequest.verify|verify} messages.
                     * @param message CreatePveRoomRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.miti99.gomoku.proto.ICreatePveRoomRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreatePveRoomRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreatePveRoomRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.CreatePveRoomRequest;

                    /**
                     * Decodes a CreatePveRoomRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreatePveRoomRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.CreatePveRoomRequest;

                    /**
                     * Verifies a CreatePveRoomRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreatePveRoomRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreatePveRoomRequest
                     */
                    public static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.CreatePveRoomRequest;

                    /**
                     * Creates a plain object from a CreatePveRoomRequest message. Also converts values to other types if specified.
                     * @param message CreatePveRoomRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.miti99.gomoku.proto.CreatePveRoomRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreatePveRoomRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreatePveRoomRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetRoomsRequest. */
                interface IGetRoomsRequest {
                }

                /** Represents a GetRoomsRequest. */
                class GetRoomsRequest implements IGetRoomsRequest {

                    /**
                     * Constructs a new GetRoomsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.IGetRoomsRequest);

                    /**
                     * Creates a new GetRoomsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetRoomsRequest instance
                     */
                    public static create(properties?: com.miti99.gomoku.proto.IGetRoomsRequest): com.miti99.gomoku.proto.GetRoomsRequest;

                    /**
                     * Encodes the specified GetRoomsRequest message. Does not implicitly {@link com.miti99.gomoku.proto.GetRoomsRequest.verify|verify} messages.
                     * @param message GetRoomsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.miti99.gomoku.proto.IGetRoomsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetRoomsRequest message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.GetRoomsRequest.verify|verify} messages.
                     * @param message GetRoomsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.miti99.gomoku.proto.IGetRoomsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetRoomsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetRoomsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.GetRoomsRequest;

                    /**
                     * Decodes a GetRoomsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetRoomsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.GetRoomsRequest;

                    /**
                     * Verifies a GetRoomsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetRoomsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetRoomsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.GetRoomsRequest;

                    /**
                     * Creates a plain object from a GetRoomsRequest message. Also converts values to other types if specified.
                     * @param message GetRoomsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.miti99.gomoku.proto.GetRoomsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetRoomsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetRoomsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a JoinRoomRequest. */
                interface IJoinRoomRequest {

                    /** JoinRoomRequest roomId */
                    roomId?: (number|null);
                }

                /** Represents a JoinRoomRequest. */
                class JoinRoomRequest implements IJoinRoomRequest {

                    /**
                     * Constructs a new JoinRoomRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.IJoinRoomRequest);

                    /** JoinRoomRequest roomId. */
                    public roomId: number;

                    /**
                     * Creates a new JoinRoomRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns JoinRoomRequest instance
                     */
                    public static create(properties?: com.miti99.gomoku.proto.IJoinRoomRequest): com.miti99.gomoku.proto.JoinRoomRequest;

                    /**
                     * Encodes the specified JoinRoomRequest message. Does not implicitly {@link com.miti99.gomoku.proto.JoinRoomRequest.verify|verify} messages.
                     * @param message JoinRoomRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.miti99.gomoku.proto.IJoinRoomRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified JoinRoomRequest message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.JoinRoomRequest.verify|verify} messages.
                     * @param message JoinRoomRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.miti99.gomoku.proto.IJoinRoomRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a JoinRoomRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns JoinRoomRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.JoinRoomRequest;

                    /**
                     * Decodes a JoinRoomRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns JoinRoomRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.JoinRoomRequest;

                    /**
                     * Verifies a JoinRoomRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a JoinRoomRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns JoinRoomRequest
                     */
                    public static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.JoinRoomRequest;

                    /**
                     * Creates a plain object from a JoinRoomRequest message. Also converts values to other types if specified.
                     * @param message JoinRoomRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.miti99.gomoku.proto.JoinRoomRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this JoinRoomRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for JoinRoomRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GameStartingRequest. */
                interface IGameStartingRequest {
                }

                /** Represents a GameStartingRequest. */
                class GameStartingRequest implements IGameStartingRequest {

                    /**
                     * Constructs a new GameStartingRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.IGameStartingRequest);

                    /**
                     * Creates a new GameStartingRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GameStartingRequest instance
                     */
                    public static create(properties?: com.miti99.gomoku.proto.IGameStartingRequest): com.miti99.gomoku.proto.GameStartingRequest;

                    /**
                     * Encodes the specified GameStartingRequest message. Does not implicitly {@link com.miti99.gomoku.proto.GameStartingRequest.verify|verify} messages.
                     * @param message GameStartingRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.miti99.gomoku.proto.IGameStartingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GameStartingRequest message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.GameStartingRequest.verify|verify} messages.
                     * @param message GameStartingRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.miti99.gomoku.proto.IGameStartingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GameStartingRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GameStartingRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.GameStartingRequest;

                    /**
                     * Decodes a GameStartingRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GameStartingRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.GameStartingRequest;

                    /**
                     * Verifies a GameStartingRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GameStartingRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GameStartingRequest
                     */
                    public static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.GameStartingRequest;

                    /**
                     * Creates a plain object from a GameStartingRequest message. Also converts values to other types if specified.
                     * @param message GameStartingRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.miti99.gomoku.proto.GameStartingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GameStartingRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GameStartingRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GameReadyRequest. */
                interface IGameReadyRequest {
                }

                /** Represents a GameReadyRequest. */
                class GameReadyRequest implements IGameReadyRequest {

                    /**
                     * Constructs a new GameReadyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.IGameReadyRequest);

                    /**
                     * Creates a new GameReadyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GameReadyRequest instance
                     */
                    public static create(properties?: com.miti99.gomoku.proto.IGameReadyRequest): com.miti99.gomoku.proto.GameReadyRequest;

                    /**
                     * Encodes the specified GameReadyRequest message. Does not implicitly {@link com.miti99.gomoku.proto.GameReadyRequest.verify|verify} messages.
                     * @param message GameReadyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.miti99.gomoku.proto.IGameReadyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GameReadyRequest message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.GameReadyRequest.verify|verify} messages.
                     * @param message GameReadyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.miti99.gomoku.proto.IGameReadyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GameReadyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GameReadyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.GameReadyRequest;

                    /**
                     * Decodes a GameReadyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GameReadyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.GameReadyRequest;

                    /**
                     * Verifies a GameReadyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GameReadyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GameReadyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.GameReadyRequest;

                    /**
                     * Creates a plain object from a GameReadyRequest message. Also converts values to other types if specified.
                     * @param message GameReadyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.miti99.gomoku.proto.GameReadyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GameReadyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GameReadyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GameMoveRequest. */
                interface IGameMoveRequest {

                    /** GameMoveRequest row */
                    row?: (number|null);

                    /** GameMoveRequest col */
                    col?: (number|null);
                }

                /** Represents a GameMoveRequest. */
                class GameMoveRequest implements IGameMoveRequest {

                    /**
                     * Constructs a new GameMoveRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.IGameMoveRequest);

                    /** GameMoveRequest row. */
                    public row: number;

                    /** GameMoveRequest col. */
                    public col: number;

                    /**
                     * Creates a new GameMoveRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GameMoveRequest instance
                     */
                    public static create(properties?: com.miti99.gomoku.proto.IGameMoveRequest): com.miti99.gomoku.proto.GameMoveRequest;

                    /**
                     * Encodes the specified GameMoveRequest message. Does not implicitly {@link com.miti99.gomoku.proto.GameMoveRequest.verify|verify} messages.
                     * @param message GameMoveRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.miti99.gomoku.proto.IGameMoveRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GameMoveRequest message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.GameMoveRequest.verify|verify} messages.
                     * @param message GameMoveRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.miti99.gomoku.proto.IGameMoveRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GameMoveRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GameMoveRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.GameMoveRequest;

                    /**
                     * Decodes a GameMoveRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GameMoveRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.GameMoveRequest;

                    /**
                     * Verifies a GameMoveRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GameMoveRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GameMoveRequest
                     */
                    public static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.GameMoveRequest;

                    /**
                     * Creates a plain object from a GameMoveRequest message. Also converts values to other types if specified.
                     * @param message GameMoveRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.miti99.gomoku.proto.GameMoveRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GameMoveRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GameMoveRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GameResetRequest. */
                interface IGameResetRequest {
                }

                /** Represents a GameResetRequest. */
                class GameResetRequest implements IGameResetRequest {

                    /**
                     * Constructs a new GameResetRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.IGameResetRequest);

                    /**
                     * Creates a new GameResetRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GameResetRequest instance
                     */
                    public static create(properties?: com.miti99.gomoku.proto.IGameResetRequest): com.miti99.gomoku.proto.GameResetRequest;

                    /**
                     * Encodes the specified GameResetRequest message. Does not implicitly {@link com.miti99.gomoku.proto.GameResetRequest.verify|verify} messages.
                     * @param message GameResetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.miti99.gomoku.proto.IGameResetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GameResetRequest message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.GameResetRequest.verify|verify} messages.
                     * @param message GameResetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.miti99.gomoku.proto.IGameResetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GameResetRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GameResetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.GameResetRequest;

                    /**
                     * Decodes a GameResetRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GameResetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.GameResetRequest;

                    /**
                     * Verifies a GameResetRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GameResetRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GameResetRequest
                     */
                    public static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.GameResetRequest;

                    /**
                     * Creates a plain object from a GameResetRequest message. Also converts values to other types if specified.
                     * @param message GameResetRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.miti99.gomoku.proto.GameResetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GameResetRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GameResetRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a WatchGameRequest. */
                interface IWatchGameRequest {

                    /** WatchGameRequest roomId */
                    roomId?: (number|null);
                }

                /** Represents a WatchGameRequest. */
                class WatchGameRequest implements IWatchGameRequest {

                    /**
                     * Constructs a new WatchGameRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.IWatchGameRequest);

                    /** WatchGameRequest roomId. */
                    public roomId: number;

                    /**
                     * Creates a new WatchGameRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WatchGameRequest instance
                     */
                    public static create(properties?: com.miti99.gomoku.proto.IWatchGameRequest): com.miti99.gomoku.proto.WatchGameRequest;

                    /**
                     * Encodes the specified WatchGameRequest message. Does not implicitly {@link com.miti99.gomoku.proto.WatchGameRequest.verify|verify} messages.
                     * @param message WatchGameRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.miti99.gomoku.proto.IWatchGameRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified WatchGameRequest message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.WatchGameRequest.verify|verify} messages.
                     * @param message WatchGameRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.miti99.gomoku.proto.IWatchGameRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WatchGameRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns WatchGameRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.WatchGameRequest;

                    /**
                     * Decodes a WatchGameRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns WatchGameRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.WatchGameRequest;

                    /**
                     * Verifies a WatchGameRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a WatchGameRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns WatchGameRequest
                     */
                    public static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.WatchGameRequest;

                    /**
                     * Creates a plain object from a WatchGameRequest message. Also converts values to other types if specified.
                     * @param message WatchGameRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.miti99.gomoku.proto.WatchGameRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this WatchGameRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for WatchGameRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a WatchGameExitRequest. */
                interface IWatchGameExitRequest {
                }

                /** Represents a WatchGameExitRequest. */
                class WatchGameExitRequest implements IWatchGameExitRequest {

                    /**
                     * Constructs a new WatchGameExitRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.IWatchGameExitRequest);

                    /**
                     * Creates a new WatchGameExitRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WatchGameExitRequest instance
                     */
                    public static create(properties?: com.miti99.gomoku.proto.IWatchGameExitRequest): com.miti99.gomoku.proto.WatchGameExitRequest;

                    /**
                     * Encodes the specified WatchGameExitRequest message. Does not implicitly {@link com.miti99.gomoku.proto.WatchGameExitRequest.verify|verify} messages.
                     * @param message WatchGameExitRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.miti99.gomoku.proto.IWatchGameExitRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified WatchGameExitRequest message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.WatchGameExitRequest.verify|verify} messages.
                     * @param message WatchGameExitRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.miti99.gomoku.proto.IWatchGameExitRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WatchGameExitRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns WatchGameExitRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.WatchGameExitRequest;

                    /**
                     * Decodes a WatchGameExitRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns WatchGameExitRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.WatchGameExitRequest;

                    /**
                     * Verifies a WatchGameExitRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a WatchGameExitRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns WatchGameExitRequest
                     */
                    public static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.WatchGameExitRequest;

                    /**
                     * Creates a plain object from a WatchGameExitRequest message. Also converts values to other types if specified.
                     * @param message WatchGameExitRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.miti99.gomoku.proto.WatchGameExitRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this WatchGameExitRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for WatchGameExitRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ClientExitRequest. */
                interface IClientExitRequest {
                }

                /** Represents a ClientExitRequest. */
                class ClientExitRequest implements IClientExitRequest {

                    /**
                     * Constructs a new ClientExitRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.IClientExitRequest);

                    /**
                     * Creates a new ClientExitRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ClientExitRequest instance
                     */
                    public static create(properties?: com.miti99.gomoku.proto.IClientExitRequest): com.miti99.gomoku.proto.ClientExitRequest;

                    /**
                     * Encodes the specified ClientExitRequest message. Does not implicitly {@link com.miti99.gomoku.proto.ClientExitRequest.verify|verify} messages.
                     * @param message ClientExitRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.miti99.gomoku.proto.IClientExitRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ClientExitRequest message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.ClientExitRequest.verify|verify} messages.
                     * @param message ClientExitRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.miti99.gomoku.proto.IClientExitRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ClientExitRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ClientExitRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.ClientExitRequest;

                    /**
                     * Decodes a ClientExitRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ClientExitRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.ClientExitRequest;

                    /**
                     * Verifies a ClientExitRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ClientExitRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ClientExitRequest
                     */
                    public static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.ClientExitRequest;

                    /**
                     * Creates a plain object from a ClientExitRequest message. Also converts values to other types if specified.
                     * @param message ClientExitRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.miti99.gomoku.proto.ClientExitRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ClientExitRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ClientExitRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Response. */
                interface IResponse {

                    /** Response clientConnect */
                    clientConnect?: (com.miti99.gomoku.proto.IClientConnectResponse|null);

                    /** Response nicknameSet */
                    nicknameSet?: (com.miti99.gomoku.proto.INicknameSetResponse|null);

                    /** Response showOptions */
                    showOptions?: (com.miti99.gomoku.proto.IShowOptionsResponse|null);

                    /** Response showRooms */
                    showRooms?: (com.miti99.gomoku.proto.IShowRoomsResponse|null);

                    /** Response roomCreateSuccess */
                    roomCreateSuccess?: (com.miti99.gomoku.proto.IRoomCreateSuccessResponse|null);

                    /** Response roomJoinSuccess */
                    roomJoinSuccess?: (com.miti99.gomoku.proto.IRoomJoinSuccessResponse|null);

                    /** Response roomJoinFailFull */
                    roomJoinFailFull?: (com.miti99.gomoku.proto.IRoomJoinFailFullResponse|null);

                    /** Response roomJoinFailNotFound */
                    roomJoinFailNotFound?: (com.miti99.gomoku.proto.IRoomJoinFailNotFoundResponse|null);

                    /** Response roomPlayFailNotFound */
                    roomPlayFailNotFound?: (com.miti99.gomoku.proto.IRoomPlayFailNotFoundResponse|null);

                    /** Response gameStarting */
                    gameStarting?: (com.miti99.gomoku.proto.IGameStartingResponse|null);

                    /** Response gameReady */
                    gameReady?: (com.miti99.gomoku.proto.IGameReadyResponse|null);

                    /** Response gameMoveSuccess */
                    gameMoveSuccess?: (com.miti99.gomoku.proto.IGameMoveSuccessResponse|null);

                    /** Response gameMoveInvalid */
                    gameMoveInvalid?: (com.miti99.gomoku.proto.IGameMoveInvalidResponse|null);

                    /** Response gameMoveOccupied */
                    gameMoveOccupied?: (com.miti99.gomoku.proto.IGameMoveOccupiedResponse|null);

                    /** Response gameMoveOutOfBounds */
                    gameMoveOutOfBounds?: (com.miti99.gomoku.proto.IGameMoveOutOfBoundsResponse|null);

                    /** Response gameMoveNotYourTurn */
                    gameMoveNotYourTurn?: (com.miti99.gomoku.proto.IGameMoveNotYourTurnResponse|null);

                    /** Response gameOver */
                    gameOver?: (com.miti99.gomoku.proto.IGameOverResponse|null);

                    /** Response pveDifficultyNotSupport */
                    pveDifficultyNotSupport?: (com.miti99.gomoku.proto.IPveDifficultyNotSupportResponse|null);

                    /** Response watchGameSuccess */
                    watchGameSuccess?: (com.miti99.gomoku.proto.IWatchGameSuccessResponse|null);

                    /** Response clientExit */
                    clientExit?: (com.miti99.gomoku.proto.IClientExitResponse|null);

                    /** Response spectatorCannotAct */
                    spectatorCannotAct?: (com.miti99.gomoku.proto.ISpectatorCannotActResponse|null);
                }

                /** Represents a Response. */
                class Response implements IResponse {

                    /**
                     * Constructs a new Response.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.IResponse);

                    /** Response clientConnect. */
                    public clientConnect?: (com.miti99.gomoku.proto.IClientConnectResponse|null);

                    /** Response nicknameSet. */
                    public nicknameSet?: (com.miti99.gomoku.proto.INicknameSetResponse|null);

                    /** Response showOptions. */
                    public showOptions?: (com.miti99.gomoku.proto.IShowOptionsResponse|null);

                    /** Response showRooms. */
                    public showRooms?: (com.miti99.gomoku.proto.IShowRoomsResponse|null);

                    /** Response roomCreateSuccess. */
                    public roomCreateSuccess?: (com.miti99.gomoku.proto.IRoomCreateSuccessResponse|null);

                    /** Response roomJoinSuccess. */
                    public roomJoinSuccess?: (com.miti99.gomoku.proto.IRoomJoinSuccessResponse|null);

                    /** Response roomJoinFailFull. */
                    public roomJoinFailFull?: (com.miti99.gomoku.proto.IRoomJoinFailFullResponse|null);

                    /** Response roomJoinFailNotFound. */
                    public roomJoinFailNotFound?: (com.miti99.gomoku.proto.IRoomJoinFailNotFoundResponse|null);

                    /** Response roomPlayFailNotFound. */
                    public roomPlayFailNotFound?: (com.miti99.gomoku.proto.IRoomPlayFailNotFoundResponse|null);

                    /** Response gameStarting. */
                    public gameStarting?: (com.miti99.gomoku.proto.IGameStartingResponse|null);

                    /** Response gameReady. */
                    public gameReady?: (com.miti99.gomoku.proto.IGameReadyResponse|null);

                    /** Response gameMoveSuccess. */
                    public gameMoveSuccess?: (com.miti99.gomoku.proto.IGameMoveSuccessResponse|null);

                    /** Response gameMoveInvalid. */
                    public gameMoveInvalid?: (com.miti99.gomoku.proto.IGameMoveInvalidResponse|null);

                    /** Response gameMoveOccupied. */
                    public gameMoveOccupied?: (com.miti99.gomoku.proto.IGameMoveOccupiedResponse|null);

                    /** Response gameMoveOutOfBounds. */
                    public gameMoveOutOfBounds?: (com.miti99.gomoku.proto.IGameMoveOutOfBoundsResponse|null);

                    /** Response gameMoveNotYourTurn. */
                    public gameMoveNotYourTurn?: (com.miti99.gomoku.proto.IGameMoveNotYourTurnResponse|null);

                    /** Response gameOver. */
                    public gameOver?: (com.miti99.gomoku.proto.IGameOverResponse|null);

                    /** Response pveDifficultyNotSupport. */
                    public pveDifficultyNotSupport?: (com.miti99.gomoku.proto.IPveDifficultyNotSupportResponse|null);

                    /** Response watchGameSuccess. */
                    public watchGameSuccess?: (com.miti99.gomoku.proto.IWatchGameSuccessResponse|null);

                    /** Response clientExit. */
                    public clientExit?: (com.miti99.gomoku.proto.IClientExitResponse|null);

                    /** Response spectatorCannotAct. */
                    public spectatorCannotAct?: (com.miti99.gomoku.proto.ISpectatorCannotActResponse|null);

                    /** Response payload. */
                    public payload?: ("clientConnect"|"nicknameSet"|"showOptions"|"showRooms"|"roomCreateSuccess"|"roomJoinSuccess"|"roomJoinFailFull"|"roomJoinFailNotFound"|"roomPlayFailNotFound"|"gameStarting"|"gameReady"|"gameMoveSuccess"|"gameMoveInvalid"|"gameMoveOccupied"|"gameMoveOutOfBounds"|"gameMoveNotYourTurn"|"gameOver"|"pveDifficultyNotSupport"|"watchGameSuccess"|"clientExit"|"spectatorCannotAct");

                    /**
                     * Creates a new Response instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Response instance
                     */
                    public static create(properties?: com.miti99.gomoku.proto.IResponse): com.miti99.gomoku.proto.Response;

                    /**
                     * Encodes the specified Response message. Does not implicitly {@link com.miti99.gomoku.proto.Response.verify|verify} messages.
                     * @param message Response message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.miti99.gomoku.proto.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Response message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.Response.verify|verify} messages.
                     * @param message Response message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.miti99.gomoku.proto.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Response message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Response
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.Response;

                    /**
                     * Decodes a Response message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Response
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.Response;

                    /**
                     * Verifies a Response message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Response message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Response
                     */
                    public static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.Response;

                    /**
                     * Creates a plain object from a Response message. Also converts values to other types if specified.
                     * @param message Response
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.miti99.gomoku.proto.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Response to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Response
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ClientConnectResponse. */
                interface IClientConnectResponse {

                    /** ClientConnectResponse clientId */
                    clientId?: (number|null);
                }

                /** Represents a ClientConnectResponse. */
                class ClientConnectResponse implements IClientConnectResponse {

                    /**
                     * Constructs a new ClientConnectResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.IClientConnectResponse);

                    /** ClientConnectResponse clientId. */
                    public clientId: number;

                    /**
                     * Creates a new ClientConnectResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ClientConnectResponse instance
                     */
                    public static create(properties?: com.miti99.gomoku.proto.IClientConnectResponse): com.miti99.gomoku.proto.ClientConnectResponse;

                    /**
                     * Encodes the specified ClientConnectResponse message. Does not implicitly {@link com.miti99.gomoku.proto.ClientConnectResponse.verify|verify} messages.
                     * @param message ClientConnectResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.miti99.gomoku.proto.IClientConnectResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ClientConnectResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.ClientConnectResponse.verify|verify} messages.
                     * @param message ClientConnectResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.miti99.gomoku.proto.IClientConnectResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ClientConnectResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ClientConnectResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.ClientConnectResponse;

                    /**
                     * Decodes a ClientConnectResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ClientConnectResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.ClientConnectResponse;

                    /**
                     * Verifies a ClientConnectResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ClientConnectResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ClientConnectResponse
                     */
                    public static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.ClientConnectResponse;

                    /**
                     * Creates a plain object from a ClientConnectResponse message. Also converts values to other types if specified.
                     * @param message ClientConnectResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.miti99.gomoku.proto.ClientConnectResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ClientConnectResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ClientConnectResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a NicknameSetResponse. */
                interface INicknameSetResponse {

                    /** NicknameSetResponse invalidLength */
                    invalidLength?: (number|null);
                }

                /** Represents a NicknameSetResponse. */
                class NicknameSetResponse implements INicknameSetResponse {

                    /**
                     * Constructs a new NicknameSetResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.INicknameSetResponse);

                    /** NicknameSetResponse invalidLength. */
                    public invalidLength: number;

                    /**
                     * Creates a new NicknameSetResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NicknameSetResponse instance
                     */
                    public static create(properties?: com.miti99.gomoku.proto.INicknameSetResponse): com.miti99.gomoku.proto.NicknameSetResponse;

                    /**
                     * Encodes the specified NicknameSetResponse message. Does not implicitly {@link com.miti99.gomoku.proto.NicknameSetResponse.verify|verify} messages.
                     * @param message NicknameSetResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.miti99.gomoku.proto.INicknameSetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NicknameSetResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.NicknameSetResponse.verify|verify} messages.
                     * @param message NicknameSetResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.miti99.gomoku.proto.INicknameSetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NicknameSetResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NicknameSetResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.NicknameSetResponse;

                    /**
                     * Decodes a NicknameSetResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NicknameSetResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.NicknameSetResponse;

                    /**
                     * Verifies a NicknameSetResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NicknameSetResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NicknameSetResponse
                     */
                    public static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.NicknameSetResponse;

                    /**
                     * Creates a plain object from a NicknameSetResponse message. Also converts values to other types if specified.
                     * @param message NicknameSetResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.miti99.gomoku.proto.NicknameSetResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NicknameSetResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for NicknameSetResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ShowOptionsResponse. */
                interface IShowOptionsResponse {
                }

                /** Represents a ShowOptionsResponse. */
                class ShowOptionsResponse implements IShowOptionsResponse {

                    /**
                     * Constructs a new ShowOptionsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.IShowOptionsResponse);

                    /**
                     * Creates a new ShowOptionsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ShowOptionsResponse instance
                     */
                    public static create(properties?: com.miti99.gomoku.proto.IShowOptionsResponse): com.miti99.gomoku.proto.ShowOptionsResponse;

                    /**
                     * Encodes the specified ShowOptionsResponse message. Does not implicitly {@link com.miti99.gomoku.proto.ShowOptionsResponse.verify|verify} messages.
                     * @param message ShowOptionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.miti99.gomoku.proto.IShowOptionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ShowOptionsResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.ShowOptionsResponse.verify|verify} messages.
                     * @param message ShowOptionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.miti99.gomoku.proto.IShowOptionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ShowOptionsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ShowOptionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.ShowOptionsResponse;

                    /**
                     * Decodes a ShowOptionsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ShowOptionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.ShowOptionsResponse;

                    /**
                     * Verifies a ShowOptionsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ShowOptionsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ShowOptionsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.ShowOptionsResponse;

                    /**
                     * Creates a plain object from a ShowOptionsResponse message. Also converts values to other types if specified.
                     * @param message ShowOptionsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.miti99.gomoku.proto.ShowOptionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ShowOptionsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ShowOptionsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RoomSummary. */
                interface IRoomSummary {

                    /** RoomSummary roomId */
                    roomId?: (number|null);

                    /** RoomSummary roomOwner */
                    roomOwner?: (string|null);

                    /** RoomSummary roomClientCount */
                    roomClientCount?: (number|null);

                    /** RoomSummary roomType */
                    roomType?: (string|null);
                }

                /** Represents a RoomSummary. */
                class RoomSummary implements IRoomSummary {

                    /**
                     * Constructs a new RoomSummary.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.IRoomSummary);

                    /** RoomSummary roomId. */
                    public roomId: number;

                    /** RoomSummary roomOwner. */
                    public roomOwner: string;

                    /** RoomSummary roomClientCount. */
                    public roomClientCount: number;

                    /** RoomSummary roomType. */
                    public roomType: string;

                    /**
                     * Creates a new RoomSummary instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RoomSummary instance
                     */
                    public static create(properties?: com.miti99.gomoku.proto.IRoomSummary): com.miti99.gomoku.proto.RoomSummary;

                    /**
                     * Encodes the specified RoomSummary message. Does not implicitly {@link com.miti99.gomoku.proto.RoomSummary.verify|verify} messages.
                     * @param message RoomSummary message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.miti99.gomoku.proto.IRoomSummary, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RoomSummary message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.RoomSummary.verify|verify} messages.
                     * @param message RoomSummary message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.miti99.gomoku.proto.IRoomSummary, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RoomSummary message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RoomSummary
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.RoomSummary;

                    /**
                     * Decodes a RoomSummary message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RoomSummary
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.RoomSummary;

                    /**
                     * Verifies a RoomSummary message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RoomSummary message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RoomSummary
                     */
                    public static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.RoomSummary;

                    /**
                     * Creates a plain object from a RoomSummary message. Also converts values to other types if specified.
                     * @param message RoomSummary
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.miti99.gomoku.proto.RoomSummary, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RoomSummary to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RoomSummary
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ShowRoomsResponse. */
                interface IShowRoomsResponse {

                    /** ShowRoomsResponse rooms */
                    rooms?: (com.miti99.gomoku.proto.IRoomSummary[]|null);
                }

                /** Represents a ShowRoomsResponse. */
                class ShowRoomsResponse implements IShowRoomsResponse {

                    /**
                     * Constructs a new ShowRoomsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.IShowRoomsResponse);

                    /** ShowRoomsResponse rooms. */
                    public rooms: com.miti99.gomoku.proto.IRoomSummary[];

                    /**
                     * Creates a new ShowRoomsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ShowRoomsResponse instance
                     */
                    public static create(properties?: com.miti99.gomoku.proto.IShowRoomsResponse): com.miti99.gomoku.proto.ShowRoomsResponse;

                    /**
                     * Encodes the specified ShowRoomsResponse message. Does not implicitly {@link com.miti99.gomoku.proto.ShowRoomsResponse.verify|verify} messages.
                     * @param message ShowRoomsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.miti99.gomoku.proto.IShowRoomsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ShowRoomsResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.ShowRoomsResponse.verify|verify} messages.
                     * @param message ShowRoomsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.miti99.gomoku.proto.IShowRoomsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ShowRoomsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ShowRoomsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.ShowRoomsResponse;

                    /**
                     * Decodes a ShowRoomsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ShowRoomsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.ShowRoomsResponse;

                    /**
                     * Verifies a ShowRoomsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ShowRoomsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ShowRoomsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.ShowRoomsResponse;

                    /**
                     * Creates a plain object from a ShowRoomsResponse message. Also converts values to other types if specified.
                     * @param message ShowRoomsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.miti99.gomoku.proto.ShowRoomsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ShowRoomsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ShowRoomsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RoomCreateSuccessResponse. */
                interface IRoomCreateSuccessResponse {

                    /** RoomCreateSuccessResponse id */
                    id?: (number|null);

                    /** RoomCreateSuccessResponse roomOwner */
                    roomOwner?: (string|null);

                    /** RoomCreateSuccessResponse roomType */
                    roomType?: (string|null);
                }

                /** Represents a RoomCreateSuccessResponse. */
                class RoomCreateSuccessResponse implements IRoomCreateSuccessResponse {

                    /**
                     * Constructs a new RoomCreateSuccessResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.IRoomCreateSuccessResponse);

                    /** RoomCreateSuccessResponse id. */
                    public id: number;

                    /** RoomCreateSuccessResponse roomOwner. */
                    public roomOwner: string;

                    /** RoomCreateSuccessResponse roomType. */
                    public roomType: string;

                    /**
                     * Creates a new RoomCreateSuccessResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RoomCreateSuccessResponse instance
                     */
                    public static create(properties?: com.miti99.gomoku.proto.IRoomCreateSuccessResponse): com.miti99.gomoku.proto.RoomCreateSuccessResponse;

                    /**
                     * Encodes the specified RoomCreateSuccessResponse message. Does not implicitly {@link com.miti99.gomoku.proto.RoomCreateSuccessResponse.verify|verify} messages.
                     * @param message RoomCreateSuccessResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.miti99.gomoku.proto.IRoomCreateSuccessResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RoomCreateSuccessResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.RoomCreateSuccessResponse.verify|verify} messages.
                     * @param message RoomCreateSuccessResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.miti99.gomoku.proto.IRoomCreateSuccessResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RoomCreateSuccessResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RoomCreateSuccessResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.RoomCreateSuccessResponse;

                    /**
                     * Decodes a RoomCreateSuccessResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RoomCreateSuccessResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.RoomCreateSuccessResponse;

                    /**
                     * Verifies a RoomCreateSuccessResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RoomCreateSuccessResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RoomCreateSuccessResponse
                     */
                    public static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.RoomCreateSuccessResponse;

                    /**
                     * Creates a plain object from a RoomCreateSuccessResponse message. Also converts values to other types if specified.
                     * @param message RoomCreateSuccessResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.miti99.gomoku.proto.RoomCreateSuccessResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RoomCreateSuccessResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RoomCreateSuccessResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RoomJoinSuccessResponse. */
                interface IRoomJoinSuccessResponse {

                    /** RoomJoinSuccessResponse clientId */
                    clientId?: (number|null);

                    /** RoomJoinSuccessResponse clientNickname */
                    clientNickname?: (string|null);

                    /** RoomJoinSuccessResponse roomId */
                    roomId?: (number|null);

                    /** RoomJoinSuccessResponse roomOwner */
                    roomOwner?: (string|null);

                    /** RoomJoinSuccessResponse roomClientCount */
                    roomClientCount?: (number|null);
                }

                /** Represents a RoomJoinSuccessResponse. */
                class RoomJoinSuccessResponse implements IRoomJoinSuccessResponse {

                    /**
                     * Constructs a new RoomJoinSuccessResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.IRoomJoinSuccessResponse);

                    /** RoomJoinSuccessResponse clientId. */
                    public clientId: number;

                    /** RoomJoinSuccessResponse clientNickname. */
                    public clientNickname: string;

                    /** RoomJoinSuccessResponse roomId. */
                    public roomId: number;

                    /** RoomJoinSuccessResponse roomOwner. */
                    public roomOwner: string;

                    /** RoomJoinSuccessResponse roomClientCount. */
                    public roomClientCount: number;

                    /**
                     * Creates a new RoomJoinSuccessResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RoomJoinSuccessResponse instance
                     */
                    public static create(properties?: com.miti99.gomoku.proto.IRoomJoinSuccessResponse): com.miti99.gomoku.proto.RoomJoinSuccessResponse;

                    /**
                     * Encodes the specified RoomJoinSuccessResponse message. Does not implicitly {@link com.miti99.gomoku.proto.RoomJoinSuccessResponse.verify|verify} messages.
                     * @param message RoomJoinSuccessResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.miti99.gomoku.proto.IRoomJoinSuccessResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RoomJoinSuccessResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.RoomJoinSuccessResponse.verify|verify} messages.
                     * @param message RoomJoinSuccessResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.miti99.gomoku.proto.IRoomJoinSuccessResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RoomJoinSuccessResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RoomJoinSuccessResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.RoomJoinSuccessResponse;

                    /**
                     * Decodes a RoomJoinSuccessResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RoomJoinSuccessResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.RoomJoinSuccessResponse;

                    /**
                     * Verifies a RoomJoinSuccessResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RoomJoinSuccessResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RoomJoinSuccessResponse
                     */
                    public static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.RoomJoinSuccessResponse;

                    /**
                     * Creates a plain object from a RoomJoinSuccessResponse message. Also converts values to other types if specified.
                     * @param message RoomJoinSuccessResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.miti99.gomoku.proto.RoomJoinSuccessResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RoomJoinSuccessResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RoomJoinSuccessResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RoomJoinFailFullResponse. */
                interface IRoomJoinFailFullResponse {

                    /** RoomJoinFailFullResponse roomId */
                    roomId?: (number|null);

                    /** RoomJoinFailFullResponse roomOwner */
                    roomOwner?: (string|null);
                }

                /** Represents a RoomJoinFailFullResponse. */
                class RoomJoinFailFullResponse implements IRoomJoinFailFullResponse {

                    /**
                     * Constructs a new RoomJoinFailFullResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.IRoomJoinFailFullResponse);

                    /** RoomJoinFailFullResponse roomId. */
                    public roomId: number;

                    /** RoomJoinFailFullResponse roomOwner. */
                    public roomOwner: string;

                    /**
                     * Creates a new RoomJoinFailFullResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RoomJoinFailFullResponse instance
                     */
                    public static create(properties?: com.miti99.gomoku.proto.IRoomJoinFailFullResponse): com.miti99.gomoku.proto.RoomJoinFailFullResponse;

                    /**
                     * Encodes the specified RoomJoinFailFullResponse message. Does not implicitly {@link com.miti99.gomoku.proto.RoomJoinFailFullResponse.verify|verify} messages.
                     * @param message RoomJoinFailFullResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.miti99.gomoku.proto.IRoomJoinFailFullResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RoomJoinFailFullResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.RoomJoinFailFullResponse.verify|verify} messages.
                     * @param message RoomJoinFailFullResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.miti99.gomoku.proto.IRoomJoinFailFullResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RoomJoinFailFullResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RoomJoinFailFullResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.RoomJoinFailFullResponse;

                    /**
                     * Decodes a RoomJoinFailFullResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RoomJoinFailFullResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.RoomJoinFailFullResponse;

                    /**
                     * Verifies a RoomJoinFailFullResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RoomJoinFailFullResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RoomJoinFailFullResponse
                     */
                    public static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.RoomJoinFailFullResponse;

                    /**
                     * Creates a plain object from a RoomJoinFailFullResponse message. Also converts values to other types if specified.
                     * @param message RoomJoinFailFullResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.miti99.gomoku.proto.RoomJoinFailFullResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RoomJoinFailFullResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RoomJoinFailFullResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RoomJoinFailNotFoundResponse. */
                interface IRoomJoinFailNotFoundResponse {

                    /** RoomJoinFailNotFoundResponse roomId */
                    roomId?: (number|null);
                }

                /** Represents a RoomJoinFailNotFoundResponse. */
                class RoomJoinFailNotFoundResponse implements IRoomJoinFailNotFoundResponse {

                    /**
                     * Constructs a new RoomJoinFailNotFoundResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.IRoomJoinFailNotFoundResponse);

                    /** RoomJoinFailNotFoundResponse roomId. */
                    public roomId: number;

                    /**
                     * Creates a new RoomJoinFailNotFoundResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RoomJoinFailNotFoundResponse instance
                     */
                    public static create(properties?: com.miti99.gomoku.proto.IRoomJoinFailNotFoundResponse): com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse;

                    /**
                     * Encodes the specified RoomJoinFailNotFoundResponse message. Does not implicitly {@link com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse.verify|verify} messages.
                     * @param message RoomJoinFailNotFoundResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.miti99.gomoku.proto.IRoomJoinFailNotFoundResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RoomJoinFailNotFoundResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse.verify|verify} messages.
                     * @param message RoomJoinFailNotFoundResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.miti99.gomoku.proto.IRoomJoinFailNotFoundResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RoomJoinFailNotFoundResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RoomJoinFailNotFoundResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse;

                    /**
                     * Decodes a RoomJoinFailNotFoundResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RoomJoinFailNotFoundResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse;

                    /**
                     * Verifies a RoomJoinFailNotFoundResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RoomJoinFailNotFoundResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RoomJoinFailNotFoundResponse
                     */
                    public static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse;

                    /**
                     * Creates a plain object from a RoomJoinFailNotFoundResponse message. Also converts values to other types if specified.
                     * @param message RoomJoinFailNotFoundResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RoomJoinFailNotFoundResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RoomJoinFailNotFoundResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RoomPlayFailNotFoundResponse. */
                interface IRoomPlayFailNotFoundResponse {
                }

                /** Represents a RoomPlayFailNotFoundResponse. */
                class RoomPlayFailNotFoundResponse implements IRoomPlayFailNotFoundResponse {

                    /**
                     * Constructs a new RoomPlayFailNotFoundResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.IRoomPlayFailNotFoundResponse);

                    /**
                     * Creates a new RoomPlayFailNotFoundResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RoomPlayFailNotFoundResponse instance
                     */
                    public static create(properties?: com.miti99.gomoku.proto.IRoomPlayFailNotFoundResponse): com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse;

                    /**
                     * Encodes the specified RoomPlayFailNotFoundResponse message. Does not implicitly {@link com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse.verify|verify} messages.
                     * @param message RoomPlayFailNotFoundResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.miti99.gomoku.proto.IRoomPlayFailNotFoundResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RoomPlayFailNotFoundResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse.verify|verify} messages.
                     * @param message RoomPlayFailNotFoundResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.miti99.gomoku.proto.IRoomPlayFailNotFoundResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RoomPlayFailNotFoundResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RoomPlayFailNotFoundResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse;

                    /**
                     * Decodes a RoomPlayFailNotFoundResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RoomPlayFailNotFoundResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse;

                    /**
                     * Verifies a RoomPlayFailNotFoundResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RoomPlayFailNotFoundResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RoomPlayFailNotFoundResponse
                     */
                    public static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse;

                    /**
                     * Creates a plain object from a RoomPlayFailNotFoundResponse message. Also converts values to other types if specified.
                     * @param message RoomPlayFailNotFoundResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RoomPlayFailNotFoundResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RoomPlayFailNotFoundResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GameStartingResponse. */
                interface IGameStartingResponse {

                    /** GameStartingResponse roomId */
                    roomId?: (number|null);

                    /** GameStartingResponse blackPlayerId */
                    blackPlayerId?: (number|null);

                    /** GameStartingResponse blackPlayerNickname */
                    blackPlayerNickname?: (string|null);

                    /** GameStartingResponse whitePlayerId */
                    whitePlayerId?: (number|null);

                    /** GameStartingResponse whitePlayerNickname */
                    whitePlayerNickname?: (string|null);

                    /** GameStartingResponse boardSize */
                    boardSize?: (number|null);
                }

                /** Represents a GameStartingResponse. */
                class GameStartingResponse implements IGameStartingResponse {

                    /**
                     * Constructs a new GameStartingResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.IGameStartingResponse);

                    /** GameStartingResponse roomId. */
                    public roomId: number;

                    /** GameStartingResponse blackPlayerId. */
                    public blackPlayerId: number;

                    /** GameStartingResponse blackPlayerNickname. */
                    public blackPlayerNickname: string;

                    /** GameStartingResponse whitePlayerId. */
                    public whitePlayerId: number;

                    /** GameStartingResponse whitePlayerNickname. */
                    public whitePlayerNickname: string;

                    /** GameStartingResponse boardSize. */
                    public boardSize: number;

                    /**
                     * Creates a new GameStartingResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GameStartingResponse instance
                     */
                    public static create(properties?: com.miti99.gomoku.proto.IGameStartingResponse): com.miti99.gomoku.proto.GameStartingResponse;

                    /**
                     * Encodes the specified GameStartingResponse message. Does not implicitly {@link com.miti99.gomoku.proto.GameStartingResponse.verify|verify} messages.
                     * @param message GameStartingResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.miti99.gomoku.proto.IGameStartingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GameStartingResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.GameStartingResponse.verify|verify} messages.
                     * @param message GameStartingResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.miti99.gomoku.proto.IGameStartingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GameStartingResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GameStartingResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.GameStartingResponse;

                    /**
                     * Decodes a GameStartingResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GameStartingResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.GameStartingResponse;

                    /**
                     * Verifies a GameStartingResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GameStartingResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GameStartingResponse
                     */
                    public static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.GameStartingResponse;

                    /**
                     * Creates a plain object from a GameStartingResponse message. Also converts values to other types if specified.
                     * @param message GameStartingResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.miti99.gomoku.proto.GameStartingResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GameStartingResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GameStartingResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GameReadyResponse. */
                interface IGameReadyResponse {

                    /** GameReadyResponse clientNickname */
                    clientNickname?: (string|null);

                    /** GameReadyResponse status */
                    status?: (string|null);

                    /** GameReadyResponse clientId */
                    clientId?: (number|null);
                }

                /** Represents a GameReadyResponse. */
                class GameReadyResponse implements IGameReadyResponse {

                    /**
                     * Constructs a new GameReadyResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.IGameReadyResponse);

                    /** GameReadyResponse clientNickname. */
                    public clientNickname: string;

                    /** GameReadyResponse status. */
                    public status: string;

                    /** GameReadyResponse clientId. */
                    public clientId: number;

                    /**
                     * Creates a new GameReadyResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GameReadyResponse instance
                     */
                    public static create(properties?: com.miti99.gomoku.proto.IGameReadyResponse): com.miti99.gomoku.proto.GameReadyResponse;

                    /**
                     * Encodes the specified GameReadyResponse message. Does not implicitly {@link com.miti99.gomoku.proto.GameReadyResponse.verify|verify} messages.
                     * @param message GameReadyResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.miti99.gomoku.proto.IGameReadyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GameReadyResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.GameReadyResponse.verify|verify} messages.
                     * @param message GameReadyResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.miti99.gomoku.proto.IGameReadyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GameReadyResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GameReadyResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.GameReadyResponse;

                    /**
                     * Decodes a GameReadyResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GameReadyResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.GameReadyResponse;

                    /**
                     * Verifies a GameReadyResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GameReadyResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GameReadyResponse
                     */
                    public static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.GameReadyResponse;

                    /**
                     * Creates a plain object from a GameReadyResponse message. Also converts values to other types if specified.
                     * @param message GameReadyResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.miti99.gomoku.proto.GameReadyResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GameReadyResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GameReadyResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GameMoveSuccessResponse. */
                interface IGameMoveSuccessResponse {

                    /** GameMoveSuccessResponse row */
                    row?: (number|null);

                    /** GameMoveSuccessResponse col */
                    col?: (number|null);

                    /** GameMoveSuccessResponse piece */
                    piece?: (string|null);

                    /** GameMoveSuccessResponse playerNickname */
                    playerNickname?: (string|null);

                    /** GameMoveSuccessResponse playerId */
                    playerId?: (number|null);
                }

                /** Represents a GameMoveSuccessResponse. */
                class GameMoveSuccessResponse implements IGameMoveSuccessResponse {

                    /**
                     * Constructs a new GameMoveSuccessResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.IGameMoveSuccessResponse);

                    /** GameMoveSuccessResponse row. */
                    public row: number;

                    /** GameMoveSuccessResponse col. */
                    public col: number;

                    /** GameMoveSuccessResponse piece. */
                    public piece: string;

                    /** GameMoveSuccessResponse playerNickname. */
                    public playerNickname: string;

                    /** GameMoveSuccessResponse playerId. */
                    public playerId: number;

                    /**
                     * Creates a new GameMoveSuccessResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GameMoveSuccessResponse instance
                     */
                    public static create(properties?: com.miti99.gomoku.proto.IGameMoveSuccessResponse): com.miti99.gomoku.proto.GameMoveSuccessResponse;

                    /**
                     * Encodes the specified GameMoveSuccessResponse message. Does not implicitly {@link com.miti99.gomoku.proto.GameMoveSuccessResponse.verify|verify} messages.
                     * @param message GameMoveSuccessResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.miti99.gomoku.proto.IGameMoveSuccessResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GameMoveSuccessResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.GameMoveSuccessResponse.verify|verify} messages.
                     * @param message GameMoveSuccessResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.miti99.gomoku.proto.IGameMoveSuccessResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GameMoveSuccessResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GameMoveSuccessResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.GameMoveSuccessResponse;

                    /**
                     * Decodes a GameMoveSuccessResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GameMoveSuccessResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.GameMoveSuccessResponse;

                    /**
                     * Verifies a GameMoveSuccessResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GameMoveSuccessResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GameMoveSuccessResponse
                     */
                    public static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.GameMoveSuccessResponse;

                    /**
                     * Creates a plain object from a GameMoveSuccessResponse message. Also converts values to other types if specified.
                     * @param message GameMoveSuccessResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.miti99.gomoku.proto.GameMoveSuccessResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GameMoveSuccessResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GameMoveSuccessResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GameMoveInvalidResponse. */
                interface IGameMoveInvalidResponse {
                }

                /** Represents a GameMoveInvalidResponse. */
                class GameMoveInvalidResponse implements IGameMoveInvalidResponse {

                    /**
                     * Constructs a new GameMoveInvalidResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.IGameMoveInvalidResponse);

                    /**
                     * Creates a new GameMoveInvalidResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GameMoveInvalidResponse instance
                     */
                    public static create(properties?: com.miti99.gomoku.proto.IGameMoveInvalidResponse): com.miti99.gomoku.proto.GameMoveInvalidResponse;

                    /**
                     * Encodes the specified GameMoveInvalidResponse message. Does not implicitly {@link com.miti99.gomoku.proto.GameMoveInvalidResponse.verify|verify} messages.
                     * @param message GameMoveInvalidResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.miti99.gomoku.proto.IGameMoveInvalidResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GameMoveInvalidResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.GameMoveInvalidResponse.verify|verify} messages.
                     * @param message GameMoveInvalidResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.miti99.gomoku.proto.IGameMoveInvalidResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GameMoveInvalidResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GameMoveInvalidResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.GameMoveInvalidResponse;

                    /**
                     * Decodes a GameMoveInvalidResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GameMoveInvalidResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.GameMoveInvalidResponse;

                    /**
                     * Verifies a GameMoveInvalidResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GameMoveInvalidResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GameMoveInvalidResponse
                     */
                    public static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.GameMoveInvalidResponse;

                    /**
                     * Creates a plain object from a GameMoveInvalidResponse message. Also converts values to other types if specified.
                     * @param message GameMoveInvalidResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.miti99.gomoku.proto.GameMoveInvalidResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GameMoveInvalidResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GameMoveInvalidResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GameMoveOccupiedResponse. */
                interface IGameMoveOccupiedResponse {
                }

                /** Represents a GameMoveOccupiedResponse. */
                class GameMoveOccupiedResponse implements IGameMoveOccupiedResponse {

                    /**
                     * Constructs a new GameMoveOccupiedResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.IGameMoveOccupiedResponse);

                    /**
                     * Creates a new GameMoveOccupiedResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GameMoveOccupiedResponse instance
                     */
                    public static create(properties?: com.miti99.gomoku.proto.IGameMoveOccupiedResponse): com.miti99.gomoku.proto.GameMoveOccupiedResponse;

                    /**
                     * Encodes the specified GameMoveOccupiedResponse message. Does not implicitly {@link com.miti99.gomoku.proto.GameMoveOccupiedResponse.verify|verify} messages.
                     * @param message GameMoveOccupiedResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.miti99.gomoku.proto.IGameMoveOccupiedResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GameMoveOccupiedResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.GameMoveOccupiedResponse.verify|verify} messages.
                     * @param message GameMoveOccupiedResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.miti99.gomoku.proto.IGameMoveOccupiedResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GameMoveOccupiedResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GameMoveOccupiedResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.GameMoveOccupiedResponse;

                    /**
                     * Decodes a GameMoveOccupiedResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GameMoveOccupiedResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.GameMoveOccupiedResponse;

                    /**
                     * Verifies a GameMoveOccupiedResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GameMoveOccupiedResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GameMoveOccupiedResponse
                     */
                    public static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.GameMoveOccupiedResponse;

                    /**
                     * Creates a plain object from a GameMoveOccupiedResponse message. Also converts values to other types if specified.
                     * @param message GameMoveOccupiedResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.miti99.gomoku.proto.GameMoveOccupiedResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GameMoveOccupiedResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GameMoveOccupiedResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GameMoveOutOfBoundsResponse. */
                interface IGameMoveOutOfBoundsResponse {
                }

                /** Represents a GameMoveOutOfBoundsResponse. */
                class GameMoveOutOfBoundsResponse implements IGameMoveOutOfBoundsResponse {

                    /**
                     * Constructs a new GameMoveOutOfBoundsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.IGameMoveOutOfBoundsResponse);

                    /**
                     * Creates a new GameMoveOutOfBoundsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GameMoveOutOfBoundsResponse instance
                     */
                    public static create(properties?: com.miti99.gomoku.proto.IGameMoveOutOfBoundsResponse): com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse;

                    /**
                     * Encodes the specified GameMoveOutOfBoundsResponse message. Does not implicitly {@link com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse.verify|verify} messages.
                     * @param message GameMoveOutOfBoundsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.miti99.gomoku.proto.IGameMoveOutOfBoundsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GameMoveOutOfBoundsResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse.verify|verify} messages.
                     * @param message GameMoveOutOfBoundsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.miti99.gomoku.proto.IGameMoveOutOfBoundsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GameMoveOutOfBoundsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GameMoveOutOfBoundsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse;

                    /**
                     * Decodes a GameMoveOutOfBoundsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GameMoveOutOfBoundsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse;

                    /**
                     * Verifies a GameMoveOutOfBoundsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GameMoveOutOfBoundsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GameMoveOutOfBoundsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse;

                    /**
                     * Creates a plain object from a GameMoveOutOfBoundsResponse message. Also converts values to other types if specified.
                     * @param message GameMoveOutOfBoundsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GameMoveOutOfBoundsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GameMoveOutOfBoundsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GameMoveNotYourTurnResponse. */
                interface IGameMoveNotYourTurnResponse {
                }

                /** Represents a GameMoveNotYourTurnResponse. */
                class GameMoveNotYourTurnResponse implements IGameMoveNotYourTurnResponse {

                    /**
                     * Constructs a new GameMoveNotYourTurnResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.IGameMoveNotYourTurnResponse);

                    /**
                     * Creates a new GameMoveNotYourTurnResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GameMoveNotYourTurnResponse instance
                     */
                    public static create(properties?: com.miti99.gomoku.proto.IGameMoveNotYourTurnResponse): com.miti99.gomoku.proto.GameMoveNotYourTurnResponse;

                    /**
                     * Encodes the specified GameMoveNotYourTurnResponse message. Does not implicitly {@link com.miti99.gomoku.proto.GameMoveNotYourTurnResponse.verify|verify} messages.
                     * @param message GameMoveNotYourTurnResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.miti99.gomoku.proto.IGameMoveNotYourTurnResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GameMoveNotYourTurnResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.GameMoveNotYourTurnResponse.verify|verify} messages.
                     * @param message GameMoveNotYourTurnResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.miti99.gomoku.proto.IGameMoveNotYourTurnResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GameMoveNotYourTurnResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GameMoveNotYourTurnResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.GameMoveNotYourTurnResponse;

                    /**
                     * Decodes a GameMoveNotYourTurnResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GameMoveNotYourTurnResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.GameMoveNotYourTurnResponse;

                    /**
                     * Verifies a GameMoveNotYourTurnResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GameMoveNotYourTurnResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GameMoveNotYourTurnResponse
                     */
                    public static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.GameMoveNotYourTurnResponse;

                    /**
                     * Creates a plain object from a GameMoveNotYourTurnResponse message. Also converts values to other types if specified.
                     * @param message GameMoveNotYourTurnResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.miti99.gomoku.proto.GameMoveNotYourTurnResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GameMoveNotYourTurnResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GameMoveNotYourTurnResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GameOverResponse. */
                interface IGameOverResponse {

                    /** GameOverResponse result */
                    result?: (string|null);

                    /** GameOverResponse winnerNickname */
                    winnerNickname?: (string|null);
                }

                /** Represents a GameOverResponse. */
                class GameOverResponse implements IGameOverResponse {

                    /**
                     * Constructs a new GameOverResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.IGameOverResponse);

                    /** GameOverResponse result. */
                    public result: string;

                    /** GameOverResponse winnerNickname. */
                    public winnerNickname: string;

                    /**
                     * Creates a new GameOverResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GameOverResponse instance
                     */
                    public static create(properties?: com.miti99.gomoku.proto.IGameOverResponse): com.miti99.gomoku.proto.GameOverResponse;

                    /**
                     * Encodes the specified GameOverResponse message. Does not implicitly {@link com.miti99.gomoku.proto.GameOverResponse.verify|verify} messages.
                     * @param message GameOverResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.miti99.gomoku.proto.IGameOverResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GameOverResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.GameOverResponse.verify|verify} messages.
                     * @param message GameOverResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.miti99.gomoku.proto.IGameOverResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GameOverResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GameOverResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.GameOverResponse;

                    /**
                     * Decodes a GameOverResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GameOverResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.GameOverResponse;

                    /**
                     * Verifies a GameOverResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GameOverResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GameOverResponse
                     */
                    public static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.GameOverResponse;

                    /**
                     * Creates a plain object from a GameOverResponse message. Also converts values to other types if specified.
                     * @param message GameOverResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.miti99.gomoku.proto.GameOverResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GameOverResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GameOverResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a PveDifficultyNotSupportResponse. */
                interface IPveDifficultyNotSupportResponse {
                }

                /** Represents a PveDifficultyNotSupportResponse. */
                class PveDifficultyNotSupportResponse implements IPveDifficultyNotSupportResponse {

                    /**
                     * Constructs a new PveDifficultyNotSupportResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.IPveDifficultyNotSupportResponse);

                    /**
                     * Creates a new PveDifficultyNotSupportResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PveDifficultyNotSupportResponse instance
                     */
                    public static create(properties?: com.miti99.gomoku.proto.IPveDifficultyNotSupportResponse): com.miti99.gomoku.proto.PveDifficultyNotSupportResponse;

                    /**
                     * Encodes the specified PveDifficultyNotSupportResponse message. Does not implicitly {@link com.miti99.gomoku.proto.PveDifficultyNotSupportResponse.verify|verify} messages.
                     * @param message PveDifficultyNotSupportResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.miti99.gomoku.proto.IPveDifficultyNotSupportResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PveDifficultyNotSupportResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.PveDifficultyNotSupportResponse.verify|verify} messages.
                     * @param message PveDifficultyNotSupportResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.miti99.gomoku.proto.IPveDifficultyNotSupportResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PveDifficultyNotSupportResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PveDifficultyNotSupportResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.PveDifficultyNotSupportResponse;

                    /**
                     * Decodes a PveDifficultyNotSupportResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PveDifficultyNotSupportResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.PveDifficultyNotSupportResponse;

                    /**
                     * Verifies a PveDifficultyNotSupportResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PveDifficultyNotSupportResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PveDifficultyNotSupportResponse
                     */
                    public static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.PveDifficultyNotSupportResponse;

                    /**
                     * Creates a plain object from a PveDifficultyNotSupportResponse message. Also converts values to other types if specified.
                     * @param message PveDifficultyNotSupportResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.miti99.gomoku.proto.PveDifficultyNotSupportResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PveDifficultyNotSupportResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PveDifficultyNotSupportResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a WatchGameSuccessResponse. */
                interface IWatchGameSuccessResponse {

                    /** WatchGameSuccessResponse owner */
                    owner?: (string|null);

                    /** WatchGameSuccessResponse status */
                    status?: (string|null);
                }

                /** Represents a WatchGameSuccessResponse. */
                class WatchGameSuccessResponse implements IWatchGameSuccessResponse {

                    /**
                     * Constructs a new WatchGameSuccessResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.IWatchGameSuccessResponse);

                    /** WatchGameSuccessResponse owner. */
                    public owner: string;

                    /** WatchGameSuccessResponse status. */
                    public status: string;

                    /**
                     * Creates a new WatchGameSuccessResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WatchGameSuccessResponse instance
                     */
                    public static create(properties?: com.miti99.gomoku.proto.IWatchGameSuccessResponse): com.miti99.gomoku.proto.WatchGameSuccessResponse;

                    /**
                     * Encodes the specified WatchGameSuccessResponse message. Does not implicitly {@link com.miti99.gomoku.proto.WatchGameSuccessResponse.verify|verify} messages.
                     * @param message WatchGameSuccessResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.miti99.gomoku.proto.IWatchGameSuccessResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified WatchGameSuccessResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.WatchGameSuccessResponse.verify|verify} messages.
                     * @param message WatchGameSuccessResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.miti99.gomoku.proto.IWatchGameSuccessResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WatchGameSuccessResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns WatchGameSuccessResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.WatchGameSuccessResponse;

                    /**
                     * Decodes a WatchGameSuccessResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns WatchGameSuccessResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.WatchGameSuccessResponse;

                    /**
                     * Verifies a WatchGameSuccessResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a WatchGameSuccessResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns WatchGameSuccessResponse
                     */
                    public static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.WatchGameSuccessResponse;

                    /**
                     * Creates a plain object from a WatchGameSuccessResponse message. Also converts values to other types if specified.
                     * @param message WatchGameSuccessResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.miti99.gomoku.proto.WatchGameSuccessResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this WatchGameSuccessResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for WatchGameSuccessResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ClientExitResponse. */
                interface IClientExitResponse {

                    /** ClientExitResponse roomId */
                    roomId?: (number|null);

                    /** ClientExitResponse exitClientId */
                    exitClientId?: (number|null);

                    /** ClientExitResponse exitClientNickname */
                    exitClientNickname?: (string|null);
                }

                /** Represents a ClientExitResponse. */
                class ClientExitResponse implements IClientExitResponse {

                    /**
                     * Constructs a new ClientExitResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.IClientExitResponse);

                    /** ClientExitResponse roomId. */
                    public roomId: number;

                    /** ClientExitResponse exitClientId. */
                    public exitClientId: number;

                    /** ClientExitResponse exitClientNickname. */
                    public exitClientNickname: string;

                    /**
                     * Creates a new ClientExitResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ClientExitResponse instance
                     */
                    public static create(properties?: com.miti99.gomoku.proto.IClientExitResponse): com.miti99.gomoku.proto.ClientExitResponse;

                    /**
                     * Encodes the specified ClientExitResponse message. Does not implicitly {@link com.miti99.gomoku.proto.ClientExitResponse.verify|verify} messages.
                     * @param message ClientExitResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.miti99.gomoku.proto.IClientExitResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ClientExitResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.ClientExitResponse.verify|verify} messages.
                     * @param message ClientExitResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.miti99.gomoku.proto.IClientExitResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ClientExitResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ClientExitResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.ClientExitResponse;

                    /**
                     * Decodes a ClientExitResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ClientExitResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.ClientExitResponse;

                    /**
                     * Verifies a ClientExitResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ClientExitResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ClientExitResponse
                     */
                    public static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.ClientExitResponse;

                    /**
                     * Creates a plain object from a ClientExitResponse message. Also converts values to other types if specified.
                     * @param message ClientExitResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.miti99.gomoku.proto.ClientExitResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ClientExitResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ClientExitResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SpectatorCannotActResponse. */
                interface ISpectatorCannotActResponse {
                }

                /** Represents a SpectatorCannotActResponse. */
                class SpectatorCannotActResponse implements ISpectatorCannotActResponse {

                    /**
                     * Constructs a new SpectatorCannotActResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.ISpectatorCannotActResponse);

                    /**
                     * Creates a new SpectatorCannotActResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SpectatorCannotActResponse instance
                     */
                    public static create(properties?: com.miti99.gomoku.proto.ISpectatorCannotActResponse): com.miti99.gomoku.proto.SpectatorCannotActResponse;

                    /**
                     * Encodes the specified SpectatorCannotActResponse message. Does not implicitly {@link com.miti99.gomoku.proto.SpectatorCannotActResponse.verify|verify} messages.
                     * @param message SpectatorCannotActResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.miti99.gomoku.proto.ISpectatorCannotActResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SpectatorCannotActResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.SpectatorCannotActResponse.verify|verify} messages.
                     * @param message SpectatorCannotActResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.miti99.gomoku.proto.ISpectatorCannotActResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SpectatorCannotActResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SpectatorCannotActResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.SpectatorCannotActResponse;

                    /**
                     * Decodes a SpectatorCannotActResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SpectatorCannotActResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.SpectatorCannotActResponse;

                    /**
                     * Verifies a SpectatorCannotActResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SpectatorCannotActResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SpectatorCannotActResponse
                     */
                    public static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.SpectatorCannotActResponse;

                    /**
                     * Creates a plain object from a SpectatorCannotActResponse message. Also converts values to other types if specified.
                     * @param message SpectatorCannotActResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.miti99.gomoku.proto.SpectatorCannotActResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SpectatorCannotActResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SpectatorCannotActResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }
        }
    }
}
