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

                /**
                 * Properties of a Request.
                 * @deprecated Use com.miti99.gomoku.proto.Request.$Properties instead.
                 */
                interface IRequest extends com.miti99.gomoku.proto.Request.$Properties {
                }

                /** Represents a Request. */
                class Request {

                    /**
                     * Constructs a new Request.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.Request.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** Request heartbeat. */
                    heartbeat?: (com.miti99.gomoku.proto.HeartbeatRequest.$Properties|null);

                    /** Request setNickname. */
                    setNickname?: (com.miti99.gomoku.proto.SetNicknameRequest.$Properties|null);

                    /** Request setClientInfo. */
                    setClientInfo?: (com.miti99.gomoku.proto.SetClientInfoRequest.$Properties|null);

                    /** Request createRoom. */
                    createRoom?: (com.miti99.gomoku.proto.CreateRoomRequest.$Properties|null);

                    /** Request createPveRoom. */
                    createPveRoom?: (com.miti99.gomoku.proto.CreatePveRoomRequest.$Properties|null);

                    /** Request getRooms. */
                    getRooms?: (com.miti99.gomoku.proto.GetRoomsRequest.$Properties|null);

                    /** Request joinRoom. */
                    joinRoom?: (com.miti99.gomoku.proto.JoinRoomRequest.$Properties|null);

                    /** Request gameMove. */
                    gameMove?: (com.miti99.gomoku.proto.GameMoveRequest.$Properties|null);

                    /** Request gameReset. */
                    gameReset?: (com.miti99.gomoku.proto.GameResetRequest.$Properties|null);

                    /** Request watchGame. */
                    watchGame?: (com.miti99.gomoku.proto.WatchGameRequest.$Properties|null);

                    /** Request watchGameExit. */
                    watchGameExit?: (com.miti99.gomoku.proto.WatchGameExitRequest.$Properties|null);

                    /** Request clientExit. */
                    clientExit?: (com.miti99.gomoku.proto.ClientExitRequest.$Properties|null);

                    /** Request payload. */
                    payload?: ("heartbeat"|"setNickname"|"setClientInfo"|"createRoom"|"createPveRoom"|"getRooms"|"joinRoom"|"gameMove"|"gameReset"|"watchGame"|"watchGameExit"|"clientExit");

                    /**
                     * Creates a new Request instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Request instance
                     */
                    static create(properties: com.miti99.gomoku.proto.Request.$Shape): com.miti99.gomoku.proto.Request & com.miti99.gomoku.proto.Request.$Shape;
                    static create(properties?: com.miti99.gomoku.proto.Request.$Properties): com.miti99.gomoku.proto.Request;

                    /**
                     * Encodes the specified Request message. Does not implicitly {@link com.miti99.gomoku.proto.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: com.miti99.gomoku.proto.Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Request message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.Request.verify|verify} messages.
                     * @param message Request message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: com.miti99.gomoku.proto.Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Request message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.Request & com.miti99.gomoku.proto.Request.$Shape} Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.Request & com.miti99.gomoku.proto.Request.$Shape;

                    /**
                     * Decodes a Request message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.Request & com.miti99.gomoku.proto.Request.$Shape} Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.Request & com.miti99.gomoku.proto.Request.$Shape;

                    /**
                     * Verifies a Request message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Request message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Request
                     */
                    static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.Request;

                    /**
                     * Creates a plain object from a Request message. Also converts values to other types if specified.
                     * @param message Request
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: com.miti99.gomoku.proto.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Request to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for Request
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace Request {

                    /** Properties of a Request. */
                    interface $Properties {

                        /** Request heartbeat */
                        heartbeat?: (com.miti99.gomoku.proto.HeartbeatRequest.$Properties|null);

                        /** Request setNickname */
                        setNickname?: (com.miti99.gomoku.proto.SetNicknameRequest.$Properties|null);

                        /** Request setClientInfo */
                        setClientInfo?: (com.miti99.gomoku.proto.SetClientInfoRequest.$Properties|null);

                        /** Request createRoom */
                        createRoom?: (com.miti99.gomoku.proto.CreateRoomRequest.$Properties|null);

                        /** Request createPveRoom */
                        createPveRoom?: (com.miti99.gomoku.proto.CreatePveRoomRequest.$Properties|null);

                        /** Request getRooms */
                        getRooms?: (com.miti99.gomoku.proto.GetRoomsRequest.$Properties|null);

                        /** Request joinRoom */
                        joinRoom?: (com.miti99.gomoku.proto.JoinRoomRequest.$Properties|null);

                        /** Request gameMove */
                        gameMove?: (com.miti99.gomoku.proto.GameMoveRequest.$Properties|null);

                        /** Request gameReset */
                        gameReset?: (com.miti99.gomoku.proto.GameResetRequest.$Properties|null);

                        /** Request watchGame */
                        watchGame?: (com.miti99.gomoku.proto.WatchGameRequest.$Properties|null);

                        /** Request watchGameExit */
                        watchGameExit?: (com.miti99.gomoku.proto.WatchGameExitRequest.$Properties|null);

                        /** Request clientExit */
                        clientExit?: (com.miti99.gomoku.proto.ClientExitRequest.$Properties|null);

                        /** Request payload */
                        payload?: ("heartbeat"|"setNickname"|"setClientInfo"|"createRoom"|"createPveRoom"|"getRooms"|"joinRoom"|"gameMove"|"gameReset"|"watchGame"|"watchGameExit"|"clientExit");

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Narrowed shape of a Request. */
                    type $Shape = {
                      heartbeat?: com.miti99.gomoku.proto.HeartbeatRequest.$Shape|null;
                      setNickname?: com.miti99.gomoku.proto.SetNicknameRequest.$Shape|null;
                      setClientInfo?: com.miti99.gomoku.proto.SetClientInfoRequest.$Shape|null;
                      createRoom?: com.miti99.gomoku.proto.CreateRoomRequest.$Shape|null;
                      createPveRoom?: com.miti99.gomoku.proto.CreatePveRoomRequest.$Shape|null;
                      getRooms?: com.miti99.gomoku.proto.GetRoomsRequest.$Shape|null;
                      joinRoom?: com.miti99.gomoku.proto.JoinRoomRequest.$Shape|null;
                      gameMove?: com.miti99.gomoku.proto.GameMoveRequest.$Shape|null;
                      gameReset?: com.miti99.gomoku.proto.GameResetRequest.$Shape|null;
                      watchGame?: com.miti99.gomoku.proto.WatchGameRequest.$Shape|null;
                      watchGameExit?: com.miti99.gomoku.proto.WatchGameExitRequest.$Shape|null;
                      clientExit?: com.miti99.gomoku.proto.ClientExitRequest.$Shape|null;
                      $unknowns?: Uint8Array[];
                    } & (
                      ({ payload?: undefined; heartbeat?: null; setNickname?: null; setClientInfo?: null; createRoom?: null; createPveRoom?: null; getRooms?: null; joinRoom?: null; gameMove?: null; gameReset?: null; watchGame?: null; watchGameExit?: null; clientExit?: null }|{ payload?: "heartbeat"; heartbeat: com.miti99.gomoku.proto.HeartbeatRequest.$Shape; setNickname?: null; setClientInfo?: null; createRoom?: null; createPveRoom?: null; getRooms?: null; joinRoom?: null; gameMove?: null; gameReset?: null; watchGame?: null; watchGameExit?: null; clientExit?: null }|{ payload?: "setNickname"; heartbeat?: null; setNickname: com.miti99.gomoku.proto.SetNicknameRequest.$Shape; setClientInfo?: null; createRoom?: null; createPveRoom?: null; getRooms?: null; joinRoom?: null; gameMove?: null; gameReset?: null; watchGame?: null; watchGameExit?: null; clientExit?: null }|{ payload?: "setClientInfo"; heartbeat?: null; setNickname?: null; setClientInfo: com.miti99.gomoku.proto.SetClientInfoRequest.$Shape; createRoom?: null; createPveRoom?: null; getRooms?: null; joinRoom?: null; gameMove?: null; gameReset?: null; watchGame?: null; watchGameExit?: null; clientExit?: null }|{ payload?: "createRoom"; heartbeat?: null; setNickname?: null; setClientInfo?: null; createRoom: com.miti99.gomoku.proto.CreateRoomRequest.$Shape; createPveRoom?: null; getRooms?: null; joinRoom?: null; gameMove?: null; gameReset?: null; watchGame?: null; watchGameExit?: null; clientExit?: null }|{ payload?: "createPveRoom"; heartbeat?: null; setNickname?: null; setClientInfo?: null; createRoom?: null; createPveRoom: com.miti99.gomoku.proto.CreatePveRoomRequest.$Shape; getRooms?: null; joinRoom?: null; gameMove?: null; gameReset?: null; watchGame?: null; watchGameExit?: null; clientExit?: null }|{ payload?: "getRooms"; heartbeat?: null; setNickname?: null; setClientInfo?: null; createRoom?: null; createPveRoom?: null; getRooms: com.miti99.gomoku.proto.GetRoomsRequest.$Shape; joinRoom?: null; gameMove?: null; gameReset?: null; watchGame?: null; watchGameExit?: null; clientExit?: null }|{ payload?: "joinRoom"; heartbeat?: null; setNickname?: null; setClientInfo?: null; createRoom?: null; createPveRoom?: null; getRooms?: null; joinRoom: com.miti99.gomoku.proto.JoinRoomRequest.$Shape; gameMove?: null; gameReset?: null; watchGame?: null; watchGameExit?: null; clientExit?: null }|{ payload?: "gameMove"; heartbeat?: null; setNickname?: null; setClientInfo?: null; createRoom?: null; createPveRoom?: null; getRooms?: null; joinRoom?: null; gameMove: com.miti99.gomoku.proto.GameMoveRequest.$Shape; gameReset?: null; watchGame?: null; watchGameExit?: null; clientExit?: null }|{ payload?: "gameReset"; heartbeat?: null; setNickname?: null; setClientInfo?: null; createRoom?: null; createPveRoom?: null; getRooms?: null; joinRoom?: null; gameMove?: null; gameReset: com.miti99.gomoku.proto.GameResetRequest.$Shape; watchGame?: null; watchGameExit?: null; clientExit?: null }|{ payload?: "watchGame"; heartbeat?: null; setNickname?: null; setClientInfo?: null; createRoom?: null; createPveRoom?: null; getRooms?: null; joinRoom?: null; gameMove?: null; gameReset?: null; watchGame: com.miti99.gomoku.proto.WatchGameRequest.$Shape; watchGameExit?: null; clientExit?: null }|{ payload?: "watchGameExit"; heartbeat?: null; setNickname?: null; setClientInfo?: null; createRoom?: null; createPveRoom?: null; getRooms?: null; joinRoom?: null; gameMove?: null; gameReset?: null; watchGame?: null; watchGameExit: com.miti99.gomoku.proto.WatchGameExitRequest.$Shape; clientExit?: null }|{ payload?: "clientExit"; heartbeat?: null; setNickname?: null; setClientInfo?: null; createRoom?: null; createPveRoom?: null; getRooms?: null; joinRoom?: null; gameMove?: null; gameReset?: null; watchGame?: null; watchGameExit?: null; clientExit: com.miti99.gomoku.proto.ClientExitRequest.$Shape })
                    );
                }

                /**
                 * Properties of a HeartbeatRequest.
                 * @deprecated Use com.miti99.gomoku.proto.HeartbeatRequest.$Properties instead.
                 */
                interface IHeartbeatRequest extends com.miti99.gomoku.proto.HeartbeatRequest.$Properties {
                }

                /** Represents a HeartbeatRequest. */
                class HeartbeatRequest {

                    /**
                     * Constructs a new HeartbeatRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.HeartbeatRequest.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /**
                     * Creates a new HeartbeatRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns HeartbeatRequest instance
                     */
                    static create(properties: com.miti99.gomoku.proto.HeartbeatRequest.$Shape): com.miti99.gomoku.proto.HeartbeatRequest & com.miti99.gomoku.proto.HeartbeatRequest.$Shape;
                    static create(properties?: com.miti99.gomoku.proto.HeartbeatRequest.$Properties): com.miti99.gomoku.proto.HeartbeatRequest;

                    /**
                     * Encodes the specified HeartbeatRequest message. Does not implicitly {@link com.miti99.gomoku.proto.HeartbeatRequest.verify|verify} messages.
                     * @param message HeartbeatRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: com.miti99.gomoku.proto.HeartbeatRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified HeartbeatRequest message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.HeartbeatRequest.verify|verify} messages.
                     * @param message HeartbeatRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: com.miti99.gomoku.proto.HeartbeatRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a HeartbeatRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.HeartbeatRequest & com.miti99.gomoku.proto.HeartbeatRequest.$Shape} HeartbeatRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.HeartbeatRequest & com.miti99.gomoku.proto.HeartbeatRequest.$Shape;

                    /**
                     * Decodes a HeartbeatRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.HeartbeatRequest & com.miti99.gomoku.proto.HeartbeatRequest.$Shape} HeartbeatRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.HeartbeatRequest & com.miti99.gomoku.proto.HeartbeatRequest.$Shape;

                    /**
                     * Verifies a HeartbeatRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a HeartbeatRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns HeartbeatRequest
                     */
                    static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.HeartbeatRequest;

                    /**
                     * Creates a plain object from a HeartbeatRequest message. Also converts values to other types if specified.
                     * @param message HeartbeatRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: com.miti99.gomoku.proto.HeartbeatRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this HeartbeatRequest to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for HeartbeatRequest
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace HeartbeatRequest {

                    /** Properties of a HeartbeatRequest. */
                    interface $Properties {

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a HeartbeatRequest. */
                    type $Shape = com.miti99.gomoku.proto.HeartbeatRequest.$Properties;
                }

                /**
                 * Properties of a SetNicknameRequest.
                 * @deprecated Use com.miti99.gomoku.proto.SetNicknameRequest.$Properties instead.
                 */
                interface ISetNicknameRequest extends com.miti99.gomoku.proto.SetNicknameRequest.$Properties {
                }

                /** Represents a SetNicknameRequest. */
                class SetNicknameRequest {

                    /**
                     * Constructs a new SetNicknameRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.SetNicknameRequest.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** SetNicknameRequest nickname. */
                    nickname: string;

                    /**
                     * Creates a new SetNicknameRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SetNicknameRequest instance
                     */
                    static create(properties: com.miti99.gomoku.proto.SetNicknameRequest.$Shape): com.miti99.gomoku.proto.SetNicknameRequest & com.miti99.gomoku.proto.SetNicknameRequest.$Shape;
                    static create(properties?: com.miti99.gomoku.proto.SetNicknameRequest.$Properties): com.miti99.gomoku.proto.SetNicknameRequest;

                    /**
                     * Encodes the specified SetNicknameRequest message. Does not implicitly {@link com.miti99.gomoku.proto.SetNicknameRequest.verify|verify} messages.
                     * @param message SetNicknameRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: com.miti99.gomoku.proto.SetNicknameRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SetNicknameRequest message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.SetNicknameRequest.verify|verify} messages.
                     * @param message SetNicknameRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: com.miti99.gomoku.proto.SetNicknameRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SetNicknameRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.SetNicknameRequest & com.miti99.gomoku.proto.SetNicknameRequest.$Shape} SetNicknameRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.SetNicknameRequest & com.miti99.gomoku.proto.SetNicknameRequest.$Shape;

                    /**
                     * Decodes a SetNicknameRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.SetNicknameRequest & com.miti99.gomoku.proto.SetNicknameRequest.$Shape} SetNicknameRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.SetNicknameRequest & com.miti99.gomoku.proto.SetNicknameRequest.$Shape;

                    /**
                     * Verifies a SetNicknameRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SetNicknameRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SetNicknameRequest
                     */
                    static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.SetNicknameRequest;

                    /**
                     * Creates a plain object from a SetNicknameRequest message. Also converts values to other types if specified.
                     * @param message SetNicknameRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: com.miti99.gomoku.proto.SetNicknameRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SetNicknameRequest to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for SetNicknameRequest
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace SetNicknameRequest {

                    /** Properties of a SetNicknameRequest. */
                    interface $Properties {

                        /** SetNicknameRequest nickname */
                        nickname?: (string|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a SetNicknameRequest. */
                    type $Shape = com.miti99.gomoku.proto.SetNicknameRequest.$Properties;
                }

                /**
                 * Properties of a SetClientInfoRequest.
                 * @deprecated Use com.miti99.gomoku.proto.SetClientInfoRequest.$Properties instead.
                 */
                interface ISetClientInfoRequest extends com.miti99.gomoku.proto.SetClientInfoRequest.$Properties {
                }

                /** Represents a SetClientInfoRequest. */
                class SetClientInfoRequest {

                    /**
                     * Constructs a new SetClientInfoRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.SetClientInfoRequest.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** SetClientInfoRequest version. */
                    version: string;

                    /**
                     * Creates a new SetClientInfoRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SetClientInfoRequest instance
                     */
                    static create(properties: com.miti99.gomoku.proto.SetClientInfoRequest.$Shape): com.miti99.gomoku.proto.SetClientInfoRequest & com.miti99.gomoku.proto.SetClientInfoRequest.$Shape;
                    static create(properties?: com.miti99.gomoku.proto.SetClientInfoRequest.$Properties): com.miti99.gomoku.proto.SetClientInfoRequest;

                    /**
                     * Encodes the specified SetClientInfoRequest message. Does not implicitly {@link com.miti99.gomoku.proto.SetClientInfoRequest.verify|verify} messages.
                     * @param message SetClientInfoRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: com.miti99.gomoku.proto.SetClientInfoRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SetClientInfoRequest message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.SetClientInfoRequest.verify|verify} messages.
                     * @param message SetClientInfoRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: com.miti99.gomoku.proto.SetClientInfoRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SetClientInfoRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.SetClientInfoRequest & com.miti99.gomoku.proto.SetClientInfoRequest.$Shape} SetClientInfoRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.SetClientInfoRequest & com.miti99.gomoku.proto.SetClientInfoRequest.$Shape;

                    /**
                     * Decodes a SetClientInfoRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.SetClientInfoRequest & com.miti99.gomoku.proto.SetClientInfoRequest.$Shape} SetClientInfoRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.SetClientInfoRequest & com.miti99.gomoku.proto.SetClientInfoRequest.$Shape;

                    /**
                     * Verifies a SetClientInfoRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SetClientInfoRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SetClientInfoRequest
                     */
                    static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.SetClientInfoRequest;

                    /**
                     * Creates a plain object from a SetClientInfoRequest message. Also converts values to other types if specified.
                     * @param message SetClientInfoRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: com.miti99.gomoku.proto.SetClientInfoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SetClientInfoRequest to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for SetClientInfoRequest
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace SetClientInfoRequest {

                    /** Properties of a SetClientInfoRequest. */
                    interface $Properties {

                        /** SetClientInfoRequest version */
                        version?: (string|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a SetClientInfoRequest. */
                    type $Shape = com.miti99.gomoku.proto.SetClientInfoRequest.$Properties;
                }

                /**
                 * Properties of a CreateRoomRequest.
                 * @deprecated Use com.miti99.gomoku.proto.CreateRoomRequest.$Properties instead.
                 */
                interface ICreateRoomRequest extends com.miti99.gomoku.proto.CreateRoomRequest.$Properties {
                }

                /** Represents a CreateRoomRequest. */
                class CreateRoomRequest {

                    /**
                     * Constructs a new CreateRoomRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.CreateRoomRequest.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /**
                     * Creates a new CreateRoomRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateRoomRequest instance
                     */
                    static create(properties: com.miti99.gomoku.proto.CreateRoomRequest.$Shape): com.miti99.gomoku.proto.CreateRoomRequest & com.miti99.gomoku.proto.CreateRoomRequest.$Shape;
                    static create(properties?: com.miti99.gomoku.proto.CreateRoomRequest.$Properties): com.miti99.gomoku.proto.CreateRoomRequest;

                    /**
                     * Encodes the specified CreateRoomRequest message. Does not implicitly {@link com.miti99.gomoku.proto.CreateRoomRequest.verify|verify} messages.
                     * @param message CreateRoomRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: com.miti99.gomoku.proto.CreateRoomRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateRoomRequest message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.CreateRoomRequest.verify|verify} messages.
                     * @param message CreateRoomRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: com.miti99.gomoku.proto.CreateRoomRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateRoomRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.CreateRoomRequest & com.miti99.gomoku.proto.CreateRoomRequest.$Shape} CreateRoomRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.CreateRoomRequest & com.miti99.gomoku.proto.CreateRoomRequest.$Shape;

                    /**
                     * Decodes a CreateRoomRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.CreateRoomRequest & com.miti99.gomoku.proto.CreateRoomRequest.$Shape} CreateRoomRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.CreateRoomRequest & com.miti99.gomoku.proto.CreateRoomRequest.$Shape;

                    /**
                     * Verifies a CreateRoomRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateRoomRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateRoomRequest
                     */
                    static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.CreateRoomRequest;

                    /**
                     * Creates a plain object from a CreateRoomRequest message. Also converts values to other types if specified.
                     * @param message CreateRoomRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: com.miti99.gomoku.proto.CreateRoomRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateRoomRequest to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for CreateRoomRequest
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace CreateRoomRequest {

                    /** Properties of a CreateRoomRequest. */
                    interface $Properties {

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a CreateRoomRequest. */
                    type $Shape = com.miti99.gomoku.proto.CreateRoomRequest.$Properties;
                }

                /**
                 * Properties of a CreatePveRoomRequest.
                 * @deprecated Use com.miti99.gomoku.proto.CreatePveRoomRequest.$Properties instead.
                 */
                interface ICreatePveRoomRequest extends com.miti99.gomoku.proto.CreatePveRoomRequest.$Properties {
                }

                /** Represents a CreatePveRoomRequest. */
                class CreatePveRoomRequest {

                    /**
                     * Constructs a new CreatePveRoomRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.CreatePveRoomRequest.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** CreatePveRoomRequest difficulty. */
                    difficulty: number;

                    /**
                     * Creates a new CreatePveRoomRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreatePveRoomRequest instance
                     */
                    static create(properties: com.miti99.gomoku.proto.CreatePveRoomRequest.$Shape): com.miti99.gomoku.proto.CreatePveRoomRequest & com.miti99.gomoku.proto.CreatePveRoomRequest.$Shape;
                    static create(properties?: com.miti99.gomoku.proto.CreatePveRoomRequest.$Properties): com.miti99.gomoku.proto.CreatePveRoomRequest;

                    /**
                     * Encodes the specified CreatePveRoomRequest message. Does not implicitly {@link com.miti99.gomoku.proto.CreatePveRoomRequest.verify|verify} messages.
                     * @param message CreatePveRoomRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: com.miti99.gomoku.proto.CreatePveRoomRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreatePveRoomRequest message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.CreatePveRoomRequest.verify|verify} messages.
                     * @param message CreatePveRoomRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: com.miti99.gomoku.proto.CreatePveRoomRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreatePveRoomRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.CreatePveRoomRequest & com.miti99.gomoku.proto.CreatePveRoomRequest.$Shape} CreatePveRoomRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.CreatePveRoomRequest & com.miti99.gomoku.proto.CreatePveRoomRequest.$Shape;

                    /**
                     * Decodes a CreatePveRoomRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.CreatePveRoomRequest & com.miti99.gomoku.proto.CreatePveRoomRequest.$Shape} CreatePveRoomRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.CreatePveRoomRequest & com.miti99.gomoku.proto.CreatePveRoomRequest.$Shape;

                    /**
                     * Verifies a CreatePveRoomRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreatePveRoomRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreatePveRoomRequest
                     */
                    static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.CreatePveRoomRequest;

                    /**
                     * Creates a plain object from a CreatePveRoomRequest message. Also converts values to other types if specified.
                     * @param message CreatePveRoomRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: com.miti99.gomoku.proto.CreatePveRoomRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreatePveRoomRequest to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for CreatePveRoomRequest
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace CreatePveRoomRequest {

                    /** Properties of a CreatePveRoomRequest. */
                    interface $Properties {

                        /** CreatePveRoomRequest difficulty */
                        difficulty?: (number|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a CreatePveRoomRequest. */
                    type $Shape = com.miti99.gomoku.proto.CreatePveRoomRequest.$Properties;
                }

                /**
                 * Properties of a GetRoomsRequest.
                 * @deprecated Use com.miti99.gomoku.proto.GetRoomsRequest.$Properties instead.
                 */
                interface IGetRoomsRequest extends com.miti99.gomoku.proto.GetRoomsRequest.$Properties {
                }

                /** Represents a GetRoomsRequest. */
                class GetRoomsRequest {

                    /**
                     * Constructs a new GetRoomsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.GetRoomsRequest.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /**
                     * Creates a new GetRoomsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetRoomsRequest instance
                     */
                    static create(properties: com.miti99.gomoku.proto.GetRoomsRequest.$Shape): com.miti99.gomoku.proto.GetRoomsRequest & com.miti99.gomoku.proto.GetRoomsRequest.$Shape;
                    static create(properties?: com.miti99.gomoku.proto.GetRoomsRequest.$Properties): com.miti99.gomoku.proto.GetRoomsRequest;

                    /**
                     * Encodes the specified GetRoomsRequest message. Does not implicitly {@link com.miti99.gomoku.proto.GetRoomsRequest.verify|verify} messages.
                     * @param message GetRoomsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: com.miti99.gomoku.proto.GetRoomsRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetRoomsRequest message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.GetRoomsRequest.verify|verify} messages.
                     * @param message GetRoomsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: com.miti99.gomoku.proto.GetRoomsRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetRoomsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.GetRoomsRequest & com.miti99.gomoku.proto.GetRoomsRequest.$Shape} GetRoomsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.GetRoomsRequest & com.miti99.gomoku.proto.GetRoomsRequest.$Shape;

                    /**
                     * Decodes a GetRoomsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.GetRoomsRequest & com.miti99.gomoku.proto.GetRoomsRequest.$Shape} GetRoomsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.GetRoomsRequest & com.miti99.gomoku.proto.GetRoomsRequest.$Shape;

                    /**
                     * Verifies a GetRoomsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetRoomsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetRoomsRequest
                     */
                    static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.GetRoomsRequest;

                    /**
                     * Creates a plain object from a GetRoomsRequest message. Also converts values to other types if specified.
                     * @param message GetRoomsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: com.miti99.gomoku.proto.GetRoomsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetRoomsRequest to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for GetRoomsRequest
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace GetRoomsRequest {

                    /** Properties of a GetRoomsRequest. */
                    interface $Properties {

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a GetRoomsRequest. */
                    type $Shape = com.miti99.gomoku.proto.GetRoomsRequest.$Properties;
                }

                /**
                 * Properties of a JoinRoomRequest.
                 * @deprecated Use com.miti99.gomoku.proto.JoinRoomRequest.$Properties instead.
                 */
                interface IJoinRoomRequest extends com.miti99.gomoku.proto.JoinRoomRequest.$Properties {
                }

                /** Represents a JoinRoomRequest. */
                class JoinRoomRequest {

                    /**
                     * Constructs a new JoinRoomRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.JoinRoomRequest.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** JoinRoomRequest roomId. */
                    roomId: number;

                    /**
                     * Creates a new JoinRoomRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns JoinRoomRequest instance
                     */
                    static create(properties: com.miti99.gomoku.proto.JoinRoomRequest.$Shape): com.miti99.gomoku.proto.JoinRoomRequest & com.miti99.gomoku.proto.JoinRoomRequest.$Shape;
                    static create(properties?: com.miti99.gomoku.proto.JoinRoomRequest.$Properties): com.miti99.gomoku.proto.JoinRoomRequest;

                    /**
                     * Encodes the specified JoinRoomRequest message. Does not implicitly {@link com.miti99.gomoku.proto.JoinRoomRequest.verify|verify} messages.
                     * @param message JoinRoomRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: com.miti99.gomoku.proto.JoinRoomRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified JoinRoomRequest message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.JoinRoomRequest.verify|verify} messages.
                     * @param message JoinRoomRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: com.miti99.gomoku.proto.JoinRoomRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a JoinRoomRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.JoinRoomRequest & com.miti99.gomoku.proto.JoinRoomRequest.$Shape} JoinRoomRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.JoinRoomRequest & com.miti99.gomoku.proto.JoinRoomRequest.$Shape;

                    /**
                     * Decodes a JoinRoomRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.JoinRoomRequest & com.miti99.gomoku.proto.JoinRoomRequest.$Shape} JoinRoomRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.JoinRoomRequest & com.miti99.gomoku.proto.JoinRoomRequest.$Shape;

                    /**
                     * Verifies a JoinRoomRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a JoinRoomRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns JoinRoomRequest
                     */
                    static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.JoinRoomRequest;

                    /**
                     * Creates a plain object from a JoinRoomRequest message. Also converts values to other types if specified.
                     * @param message JoinRoomRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: com.miti99.gomoku.proto.JoinRoomRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this JoinRoomRequest to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for JoinRoomRequest
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace JoinRoomRequest {

                    /** Properties of a JoinRoomRequest. */
                    interface $Properties {

                        /** JoinRoomRequest roomId */
                        roomId?: (number|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a JoinRoomRequest. */
                    type $Shape = com.miti99.gomoku.proto.JoinRoomRequest.$Properties;
                }

                /**
                 * Properties of a GameMoveRequest.
                 * @deprecated Use com.miti99.gomoku.proto.GameMoveRequest.$Properties instead.
                 */
                interface IGameMoveRequest extends com.miti99.gomoku.proto.GameMoveRequest.$Properties {
                }

                /** Represents a GameMoveRequest. */
                class GameMoveRequest {

                    /**
                     * Constructs a new GameMoveRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.GameMoveRequest.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** GameMoveRequest row. */
                    row: number;

                    /** GameMoveRequest col. */
                    col: number;

                    /**
                     * Creates a new GameMoveRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GameMoveRequest instance
                     */
                    static create(properties: com.miti99.gomoku.proto.GameMoveRequest.$Shape): com.miti99.gomoku.proto.GameMoveRequest & com.miti99.gomoku.proto.GameMoveRequest.$Shape;
                    static create(properties?: com.miti99.gomoku.proto.GameMoveRequest.$Properties): com.miti99.gomoku.proto.GameMoveRequest;

                    /**
                     * Encodes the specified GameMoveRequest message. Does not implicitly {@link com.miti99.gomoku.proto.GameMoveRequest.verify|verify} messages.
                     * @param message GameMoveRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: com.miti99.gomoku.proto.GameMoveRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GameMoveRequest message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.GameMoveRequest.verify|verify} messages.
                     * @param message GameMoveRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: com.miti99.gomoku.proto.GameMoveRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GameMoveRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.GameMoveRequest & com.miti99.gomoku.proto.GameMoveRequest.$Shape} GameMoveRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.GameMoveRequest & com.miti99.gomoku.proto.GameMoveRequest.$Shape;

                    /**
                     * Decodes a GameMoveRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.GameMoveRequest & com.miti99.gomoku.proto.GameMoveRequest.$Shape} GameMoveRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.GameMoveRequest & com.miti99.gomoku.proto.GameMoveRequest.$Shape;

                    /**
                     * Verifies a GameMoveRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GameMoveRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GameMoveRequest
                     */
                    static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.GameMoveRequest;

                    /**
                     * Creates a plain object from a GameMoveRequest message. Also converts values to other types if specified.
                     * @param message GameMoveRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: com.miti99.gomoku.proto.GameMoveRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GameMoveRequest to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for GameMoveRequest
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace GameMoveRequest {

                    /** Properties of a GameMoveRequest. */
                    interface $Properties {

                        /** GameMoveRequest row */
                        row?: (number|null);

                        /** GameMoveRequest col */
                        col?: (number|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a GameMoveRequest. */
                    type $Shape = com.miti99.gomoku.proto.GameMoveRequest.$Properties;
                }

                /**
                 * Properties of a GameResetRequest.
                 * @deprecated Use com.miti99.gomoku.proto.GameResetRequest.$Properties instead.
                 */
                interface IGameResetRequest extends com.miti99.gomoku.proto.GameResetRequest.$Properties {
                }

                /** Represents a GameResetRequest. */
                class GameResetRequest {

                    /**
                     * Constructs a new GameResetRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.GameResetRequest.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /**
                     * Creates a new GameResetRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GameResetRequest instance
                     */
                    static create(properties: com.miti99.gomoku.proto.GameResetRequest.$Shape): com.miti99.gomoku.proto.GameResetRequest & com.miti99.gomoku.proto.GameResetRequest.$Shape;
                    static create(properties?: com.miti99.gomoku.proto.GameResetRequest.$Properties): com.miti99.gomoku.proto.GameResetRequest;

                    /**
                     * Encodes the specified GameResetRequest message. Does not implicitly {@link com.miti99.gomoku.proto.GameResetRequest.verify|verify} messages.
                     * @param message GameResetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: com.miti99.gomoku.proto.GameResetRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GameResetRequest message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.GameResetRequest.verify|verify} messages.
                     * @param message GameResetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: com.miti99.gomoku.proto.GameResetRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GameResetRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.GameResetRequest & com.miti99.gomoku.proto.GameResetRequest.$Shape} GameResetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.GameResetRequest & com.miti99.gomoku.proto.GameResetRequest.$Shape;

                    /**
                     * Decodes a GameResetRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.GameResetRequest & com.miti99.gomoku.proto.GameResetRequest.$Shape} GameResetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.GameResetRequest & com.miti99.gomoku.proto.GameResetRequest.$Shape;

                    /**
                     * Verifies a GameResetRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GameResetRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GameResetRequest
                     */
                    static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.GameResetRequest;

                    /**
                     * Creates a plain object from a GameResetRequest message. Also converts values to other types if specified.
                     * @param message GameResetRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: com.miti99.gomoku.proto.GameResetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GameResetRequest to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for GameResetRequest
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace GameResetRequest {

                    /** Properties of a GameResetRequest. */
                    interface $Properties {

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a GameResetRequest. */
                    type $Shape = com.miti99.gomoku.proto.GameResetRequest.$Properties;
                }

                /**
                 * Properties of a WatchGameRequest.
                 * @deprecated Use com.miti99.gomoku.proto.WatchGameRequest.$Properties instead.
                 */
                interface IWatchGameRequest extends com.miti99.gomoku.proto.WatchGameRequest.$Properties {
                }

                /** Represents a WatchGameRequest. */
                class WatchGameRequest {

                    /**
                     * Constructs a new WatchGameRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.WatchGameRequest.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** WatchGameRequest roomId. */
                    roomId: number;

                    /**
                     * Creates a new WatchGameRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WatchGameRequest instance
                     */
                    static create(properties: com.miti99.gomoku.proto.WatchGameRequest.$Shape): com.miti99.gomoku.proto.WatchGameRequest & com.miti99.gomoku.proto.WatchGameRequest.$Shape;
                    static create(properties?: com.miti99.gomoku.proto.WatchGameRequest.$Properties): com.miti99.gomoku.proto.WatchGameRequest;

                    /**
                     * Encodes the specified WatchGameRequest message. Does not implicitly {@link com.miti99.gomoku.proto.WatchGameRequest.verify|verify} messages.
                     * @param message WatchGameRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: com.miti99.gomoku.proto.WatchGameRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified WatchGameRequest message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.WatchGameRequest.verify|verify} messages.
                     * @param message WatchGameRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: com.miti99.gomoku.proto.WatchGameRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WatchGameRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.WatchGameRequest & com.miti99.gomoku.proto.WatchGameRequest.$Shape} WatchGameRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.WatchGameRequest & com.miti99.gomoku.proto.WatchGameRequest.$Shape;

                    /**
                     * Decodes a WatchGameRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.WatchGameRequest & com.miti99.gomoku.proto.WatchGameRequest.$Shape} WatchGameRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.WatchGameRequest & com.miti99.gomoku.proto.WatchGameRequest.$Shape;

                    /**
                     * Verifies a WatchGameRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a WatchGameRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns WatchGameRequest
                     */
                    static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.WatchGameRequest;

                    /**
                     * Creates a plain object from a WatchGameRequest message. Also converts values to other types if specified.
                     * @param message WatchGameRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: com.miti99.gomoku.proto.WatchGameRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this WatchGameRequest to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for WatchGameRequest
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace WatchGameRequest {

                    /** Properties of a WatchGameRequest. */
                    interface $Properties {

                        /** WatchGameRequest roomId */
                        roomId?: (number|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a WatchGameRequest. */
                    type $Shape = com.miti99.gomoku.proto.WatchGameRequest.$Properties;
                }

                /**
                 * Properties of a WatchGameExitRequest.
                 * @deprecated Use com.miti99.gomoku.proto.WatchGameExitRequest.$Properties instead.
                 */
                interface IWatchGameExitRequest extends com.miti99.gomoku.proto.WatchGameExitRequest.$Properties {
                }

                /** Represents a WatchGameExitRequest. */
                class WatchGameExitRequest {

                    /**
                     * Constructs a new WatchGameExitRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.WatchGameExitRequest.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /**
                     * Creates a new WatchGameExitRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WatchGameExitRequest instance
                     */
                    static create(properties: com.miti99.gomoku.proto.WatchGameExitRequest.$Shape): com.miti99.gomoku.proto.WatchGameExitRequest & com.miti99.gomoku.proto.WatchGameExitRequest.$Shape;
                    static create(properties?: com.miti99.gomoku.proto.WatchGameExitRequest.$Properties): com.miti99.gomoku.proto.WatchGameExitRequest;

                    /**
                     * Encodes the specified WatchGameExitRequest message. Does not implicitly {@link com.miti99.gomoku.proto.WatchGameExitRequest.verify|verify} messages.
                     * @param message WatchGameExitRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: com.miti99.gomoku.proto.WatchGameExitRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified WatchGameExitRequest message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.WatchGameExitRequest.verify|verify} messages.
                     * @param message WatchGameExitRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: com.miti99.gomoku.proto.WatchGameExitRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WatchGameExitRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.WatchGameExitRequest & com.miti99.gomoku.proto.WatchGameExitRequest.$Shape} WatchGameExitRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.WatchGameExitRequest & com.miti99.gomoku.proto.WatchGameExitRequest.$Shape;

                    /**
                     * Decodes a WatchGameExitRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.WatchGameExitRequest & com.miti99.gomoku.proto.WatchGameExitRequest.$Shape} WatchGameExitRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.WatchGameExitRequest & com.miti99.gomoku.proto.WatchGameExitRequest.$Shape;

                    /**
                     * Verifies a WatchGameExitRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a WatchGameExitRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns WatchGameExitRequest
                     */
                    static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.WatchGameExitRequest;

                    /**
                     * Creates a plain object from a WatchGameExitRequest message. Also converts values to other types if specified.
                     * @param message WatchGameExitRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: com.miti99.gomoku.proto.WatchGameExitRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this WatchGameExitRequest to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for WatchGameExitRequest
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace WatchGameExitRequest {

                    /** Properties of a WatchGameExitRequest. */
                    interface $Properties {

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a WatchGameExitRequest. */
                    type $Shape = com.miti99.gomoku.proto.WatchGameExitRequest.$Properties;
                }

                /**
                 * Properties of a ClientExitRequest.
                 * @deprecated Use com.miti99.gomoku.proto.ClientExitRequest.$Properties instead.
                 */
                interface IClientExitRequest extends com.miti99.gomoku.proto.ClientExitRequest.$Properties {
                }

                /** Represents a ClientExitRequest. */
                class ClientExitRequest {

                    /**
                     * Constructs a new ClientExitRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.ClientExitRequest.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /**
                     * Creates a new ClientExitRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ClientExitRequest instance
                     */
                    static create(properties: com.miti99.gomoku.proto.ClientExitRequest.$Shape): com.miti99.gomoku.proto.ClientExitRequest & com.miti99.gomoku.proto.ClientExitRequest.$Shape;
                    static create(properties?: com.miti99.gomoku.proto.ClientExitRequest.$Properties): com.miti99.gomoku.proto.ClientExitRequest;

                    /**
                     * Encodes the specified ClientExitRequest message. Does not implicitly {@link com.miti99.gomoku.proto.ClientExitRequest.verify|verify} messages.
                     * @param message ClientExitRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: com.miti99.gomoku.proto.ClientExitRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ClientExitRequest message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.ClientExitRequest.verify|verify} messages.
                     * @param message ClientExitRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: com.miti99.gomoku.proto.ClientExitRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ClientExitRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.ClientExitRequest & com.miti99.gomoku.proto.ClientExitRequest.$Shape} ClientExitRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.ClientExitRequest & com.miti99.gomoku.proto.ClientExitRequest.$Shape;

                    /**
                     * Decodes a ClientExitRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.ClientExitRequest & com.miti99.gomoku.proto.ClientExitRequest.$Shape} ClientExitRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.ClientExitRequest & com.miti99.gomoku.proto.ClientExitRequest.$Shape;

                    /**
                     * Verifies a ClientExitRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ClientExitRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ClientExitRequest
                     */
                    static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.ClientExitRequest;

                    /**
                     * Creates a plain object from a ClientExitRequest message. Also converts values to other types if specified.
                     * @param message ClientExitRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: com.miti99.gomoku.proto.ClientExitRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ClientExitRequest to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for ClientExitRequest
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace ClientExitRequest {

                    /** Properties of a ClientExitRequest. */
                    interface $Properties {

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a ClientExitRequest. */
                    type $Shape = com.miti99.gomoku.proto.ClientExitRequest.$Properties;
                }

                /** Piece enum. */
                enum Piece {

                    /** PIECE_UNSPECIFIED value */
                    PIECE_UNSPECIFIED = 0,

                    /** BLACK value */
                    BLACK = 1,

                    /** WHITE value */
                    WHITE = 2
                }

                /** GameResult enum. */
                enum GameResult {

                    /** GAME_RESULT_UNSPECIFIED value */
                    GAME_RESULT_UNSPECIFIED = 0,

                    /** BLACK_WIN value */
                    BLACK_WIN = 1,

                    /** WHITE_WIN value */
                    WHITE_WIN = 2,

                    /** DRAW value */
                    DRAW = 3
                }

                /** RoomType enum. */
                enum RoomType {

                    /** ROOM_TYPE_UNSPECIFIED value */
                    ROOM_TYPE_UNSPECIFIED = 0,

                    /** PVP value */
                    PVP = 1,

                    /** PVE value */
                    PVE = 2
                }

                /** RoomStatus enum. */
                enum RoomStatus {

                    /** ROOM_STATUS_UNSPECIFIED value */
                    ROOM_STATUS_UNSPECIFIED = 0,

                    /** WAITING value */
                    WAITING = 1,

                    /** PLAYING value */
                    PLAYING = 2,

                    /** FINISHED value */
                    FINISHED = 3
                }

                /**
                 * Properties of a Response.
                 * @deprecated Use com.miti99.gomoku.proto.Response.$Properties instead.
                 */
                interface IResponse extends com.miti99.gomoku.proto.Response.$Properties {
                }

                /** Represents a Response. */
                class Response {

                    /**
                     * Constructs a new Response.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.Response.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** Response clientConnect. */
                    clientConnect?: (com.miti99.gomoku.proto.ClientConnectResponse.$Properties|null);

                    /** Response nicknameSet. */
                    nicknameSet?: (com.miti99.gomoku.proto.NicknameSetResponse.$Properties|null);

                    /** Response showOptions. */
                    showOptions?: (com.miti99.gomoku.proto.ShowOptionsResponse.$Properties|null);

                    /** Response showRooms. */
                    showRooms?: (com.miti99.gomoku.proto.ShowRoomsResponse.$Properties|null);

                    /** Response roomCreateSuccess. */
                    roomCreateSuccess?: (com.miti99.gomoku.proto.RoomCreateSuccessResponse.$Properties|null);

                    /** Response roomJoinSuccess. */
                    roomJoinSuccess?: (com.miti99.gomoku.proto.RoomJoinSuccessResponse.$Properties|null);

                    /** Response roomJoinFailFull. */
                    roomJoinFailFull?: (com.miti99.gomoku.proto.RoomJoinFailFullResponse.$Properties|null);

                    /** Response roomJoinFailNotFound. */
                    roomJoinFailNotFound?: (com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse.$Properties|null);

                    /** Response roomPlayFailNotFound. */
                    roomPlayFailNotFound?: (com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse.$Properties|null);

                    /** Response gameStarting. */
                    gameStarting?: (com.miti99.gomoku.proto.GameStartingResponse.$Properties|null);

                    /** Response gameMoveSuccess. */
                    gameMoveSuccess?: (com.miti99.gomoku.proto.GameMoveSuccessResponse.$Properties|null);

                    /** Response gameMoveInvalid. */
                    gameMoveInvalid?: (com.miti99.gomoku.proto.GameMoveInvalidResponse.$Properties|null);

                    /** Response gameMoveOccupied. */
                    gameMoveOccupied?: (com.miti99.gomoku.proto.GameMoveOccupiedResponse.$Properties|null);

                    /** Response gameMoveOutOfBounds. */
                    gameMoveOutOfBounds?: (com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse.$Properties|null);

                    /** Response gameMoveNotYourTurn. */
                    gameMoveNotYourTurn?: (com.miti99.gomoku.proto.GameMoveNotYourTurnResponse.$Properties|null);

                    /** Response gameOver. */
                    gameOver?: (com.miti99.gomoku.proto.GameOverResponse.$Properties|null);

                    /** Response pveDifficultyNotSupport. */
                    pveDifficultyNotSupport?: (com.miti99.gomoku.proto.PveDifficultyNotSupportResponse.$Properties|null);

                    /** Response watchGameSuccess. */
                    watchGameSuccess?: (com.miti99.gomoku.proto.WatchGameSuccessResponse.$Properties|null);

                    /** Response clientExit. */
                    clientExit?: (com.miti99.gomoku.proto.ClientExitResponse.$Properties|null);

                    /** Response spectatorCannotAct. */
                    spectatorCannotAct?: (com.miti99.gomoku.proto.SpectatorCannotActResponse.$Properties|null);

                    /** Response payload. */
                    payload?: ("clientConnect"|"nicknameSet"|"showOptions"|"showRooms"|"roomCreateSuccess"|"roomJoinSuccess"|"roomJoinFailFull"|"roomJoinFailNotFound"|"roomPlayFailNotFound"|"gameStarting"|"gameMoveSuccess"|"gameMoveInvalid"|"gameMoveOccupied"|"gameMoveOutOfBounds"|"gameMoveNotYourTurn"|"gameOver"|"pveDifficultyNotSupport"|"watchGameSuccess"|"clientExit"|"spectatorCannotAct");

                    /**
                     * Creates a new Response instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Response instance
                     */
                    static create(properties: com.miti99.gomoku.proto.Response.$Shape): com.miti99.gomoku.proto.Response & com.miti99.gomoku.proto.Response.$Shape;
                    static create(properties?: com.miti99.gomoku.proto.Response.$Properties): com.miti99.gomoku.proto.Response;

                    /**
                     * Encodes the specified Response message. Does not implicitly {@link com.miti99.gomoku.proto.Response.verify|verify} messages.
                     * @param message Response message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: com.miti99.gomoku.proto.Response.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Response message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.Response.verify|verify} messages.
                     * @param message Response message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: com.miti99.gomoku.proto.Response.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Response message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.Response & com.miti99.gomoku.proto.Response.$Shape} Response
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.Response & com.miti99.gomoku.proto.Response.$Shape;

                    /**
                     * Decodes a Response message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.Response & com.miti99.gomoku.proto.Response.$Shape} Response
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.Response & com.miti99.gomoku.proto.Response.$Shape;

                    /**
                     * Verifies a Response message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Response message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Response
                     */
                    static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.Response;

                    /**
                     * Creates a plain object from a Response message. Also converts values to other types if specified.
                     * @param message Response
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: com.miti99.gomoku.proto.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Response to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for Response
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace Response {

                    /** Properties of a Response. */
                    interface $Properties {

                        /** Response clientConnect */
                        clientConnect?: (com.miti99.gomoku.proto.ClientConnectResponse.$Properties|null);

                        /** Response nicknameSet */
                        nicknameSet?: (com.miti99.gomoku.proto.NicknameSetResponse.$Properties|null);

                        /** Response showOptions */
                        showOptions?: (com.miti99.gomoku.proto.ShowOptionsResponse.$Properties|null);

                        /** Response showRooms */
                        showRooms?: (com.miti99.gomoku.proto.ShowRoomsResponse.$Properties|null);

                        /** Response roomCreateSuccess */
                        roomCreateSuccess?: (com.miti99.gomoku.proto.RoomCreateSuccessResponse.$Properties|null);

                        /** Response roomJoinSuccess */
                        roomJoinSuccess?: (com.miti99.gomoku.proto.RoomJoinSuccessResponse.$Properties|null);

                        /** Response roomJoinFailFull */
                        roomJoinFailFull?: (com.miti99.gomoku.proto.RoomJoinFailFullResponse.$Properties|null);

                        /** Response roomJoinFailNotFound */
                        roomJoinFailNotFound?: (com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse.$Properties|null);

                        /** Response roomPlayFailNotFound */
                        roomPlayFailNotFound?: (com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse.$Properties|null);

                        /** Response gameStarting */
                        gameStarting?: (com.miti99.gomoku.proto.GameStartingResponse.$Properties|null);

                        /** Response gameMoveSuccess */
                        gameMoveSuccess?: (com.miti99.gomoku.proto.GameMoveSuccessResponse.$Properties|null);

                        /** Response gameMoveInvalid */
                        gameMoveInvalid?: (com.miti99.gomoku.proto.GameMoveInvalidResponse.$Properties|null);

                        /** Response gameMoveOccupied */
                        gameMoveOccupied?: (com.miti99.gomoku.proto.GameMoveOccupiedResponse.$Properties|null);

                        /** Response gameMoveOutOfBounds */
                        gameMoveOutOfBounds?: (com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse.$Properties|null);

                        /** Response gameMoveNotYourTurn */
                        gameMoveNotYourTurn?: (com.miti99.gomoku.proto.GameMoveNotYourTurnResponse.$Properties|null);

                        /** Response gameOver */
                        gameOver?: (com.miti99.gomoku.proto.GameOverResponse.$Properties|null);

                        /** Response pveDifficultyNotSupport */
                        pveDifficultyNotSupport?: (com.miti99.gomoku.proto.PveDifficultyNotSupportResponse.$Properties|null);

                        /** Response watchGameSuccess */
                        watchGameSuccess?: (com.miti99.gomoku.proto.WatchGameSuccessResponse.$Properties|null);

                        /** Response clientExit */
                        clientExit?: (com.miti99.gomoku.proto.ClientExitResponse.$Properties|null);

                        /** Response spectatorCannotAct */
                        spectatorCannotAct?: (com.miti99.gomoku.proto.SpectatorCannotActResponse.$Properties|null);

                        /** Response payload */
                        payload?: ("clientConnect"|"nicknameSet"|"showOptions"|"showRooms"|"roomCreateSuccess"|"roomJoinSuccess"|"roomJoinFailFull"|"roomJoinFailNotFound"|"roomPlayFailNotFound"|"gameStarting"|"gameMoveSuccess"|"gameMoveInvalid"|"gameMoveOccupied"|"gameMoveOutOfBounds"|"gameMoveNotYourTurn"|"gameOver"|"pveDifficultyNotSupport"|"watchGameSuccess"|"clientExit"|"spectatorCannotAct");

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Narrowed shape of a Response. */
                    type $Shape = {
                      clientConnect?: com.miti99.gomoku.proto.ClientConnectResponse.$Shape|null;
                      nicknameSet?: com.miti99.gomoku.proto.NicknameSetResponse.$Shape|null;
                      showOptions?: com.miti99.gomoku.proto.ShowOptionsResponse.$Shape|null;
                      showRooms?: com.miti99.gomoku.proto.ShowRoomsResponse.$Shape|null;
                      roomCreateSuccess?: com.miti99.gomoku.proto.RoomCreateSuccessResponse.$Shape|null;
                      roomJoinSuccess?: com.miti99.gomoku.proto.RoomJoinSuccessResponse.$Shape|null;
                      roomJoinFailFull?: com.miti99.gomoku.proto.RoomJoinFailFullResponse.$Shape|null;
                      roomJoinFailNotFound?: com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse.$Shape|null;
                      roomPlayFailNotFound?: com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse.$Shape|null;
                      gameStarting?: com.miti99.gomoku.proto.GameStartingResponse.$Shape|null;
                      gameMoveSuccess?: com.miti99.gomoku.proto.GameMoveSuccessResponse.$Shape|null;
                      gameMoveInvalid?: com.miti99.gomoku.proto.GameMoveInvalidResponse.$Shape|null;
                      gameMoveOccupied?: com.miti99.gomoku.proto.GameMoveOccupiedResponse.$Shape|null;
                      gameMoveOutOfBounds?: com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse.$Shape|null;
                      gameMoveNotYourTurn?: com.miti99.gomoku.proto.GameMoveNotYourTurnResponse.$Shape|null;
                      gameOver?: com.miti99.gomoku.proto.GameOverResponse.$Shape|null;
                      pveDifficultyNotSupport?: com.miti99.gomoku.proto.PveDifficultyNotSupportResponse.$Shape|null;
                      watchGameSuccess?: com.miti99.gomoku.proto.WatchGameSuccessResponse.$Shape|null;
                      clientExit?: com.miti99.gomoku.proto.ClientExitResponse.$Shape|null;
                      spectatorCannotAct?: com.miti99.gomoku.proto.SpectatorCannotActResponse.$Shape|null;
                      $unknowns?: Uint8Array[];
                    } & (
                      ({ payload?: undefined; clientConnect?: null; nicknameSet?: null; showOptions?: null; showRooms?: null; roomCreateSuccess?: null; roomJoinSuccess?: null; roomJoinFailFull?: null; roomJoinFailNotFound?: null; roomPlayFailNotFound?: null; gameStarting?: null; gameMoveSuccess?: null; gameMoveInvalid?: null; gameMoveOccupied?: null; gameMoveOutOfBounds?: null; gameMoveNotYourTurn?: null; gameOver?: null; pveDifficultyNotSupport?: null; watchGameSuccess?: null; clientExit?: null; spectatorCannotAct?: null }|{ payload?: "clientConnect"; clientConnect: com.miti99.gomoku.proto.ClientConnectResponse.$Shape; nicknameSet?: null; showOptions?: null; showRooms?: null; roomCreateSuccess?: null; roomJoinSuccess?: null; roomJoinFailFull?: null; roomJoinFailNotFound?: null; roomPlayFailNotFound?: null; gameStarting?: null; gameMoveSuccess?: null; gameMoveInvalid?: null; gameMoveOccupied?: null; gameMoveOutOfBounds?: null; gameMoveNotYourTurn?: null; gameOver?: null; pveDifficultyNotSupport?: null; watchGameSuccess?: null; clientExit?: null; spectatorCannotAct?: null }|{ payload?: "nicknameSet"; clientConnect?: null; nicknameSet: com.miti99.gomoku.proto.NicknameSetResponse.$Shape; showOptions?: null; showRooms?: null; roomCreateSuccess?: null; roomJoinSuccess?: null; roomJoinFailFull?: null; roomJoinFailNotFound?: null; roomPlayFailNotFound?: null; gameStarting?: null; gameMoveSuccess?: null; gameMoveInvalid?: null; gameMoveOccupied?: null; gameMoveOutOfBounds?: null; gameMoveNotYourTurn?: null; gameOver?: null; pveDifficultyNotSupport?: null; watchGameSuccess?: null; clientExit?: null; spectatorCannotAct?: null }|{ payload?: "showOptions"; clientConnect?: null; nicknameSet?: null; showOptions: com.miti99.gomoku.proto.ShowOptionsResponse.$Shape; showRooms?: null; roomCreateSuccess?: null; roomJoinSuccess?: null; roomJoinFailFull?: null; roomJoinFailNotFound?: null; roomPlayFailNotFound?: null; gameStarting?: null; gameMoveSuccess?: null; gameMoveInvalid?: null; gameMoveOccupied?: null; gameMoveOutOfBounds?: null; gameMoveNotYourTurn?: null; gameOver?: null; pveDifficultyNotSupport?: null; watchGameSuccess?: null; clientExit?: null; spectatorCannotAct?: null }|{ payload?: "showRooms"; clientConnect?: null; nicknameSet?: null; showOptions?: null; showRooms: com.miti99.gomoku.proto.ShowRoomsResponse.$Shape; roomCreateSuccess?: null; roomJoinSuccess?: null; roomJoinFailFull?: null; roomJoinFailNotFound?: null; roomPlayFailNotFound?: null; gameStarting?: null; gameMoveSuccess?: null; gameMoveInvalid?: null; gameMoveOccupied?: null; gameMoveOutOfBounds?: null; gameMoveNotYourTurn?: null; gameOver?: null; pveDifficultyNotSupport?: null; watchGameSuccess?: null; clientExit?: null; spectatorCannotAct?: null }|{ payload?: "roomCreateSuccess"; clientConnect?: null; nicknameSet?: null; showOptions?: null; showRooms?: null; roomCreateSuccess: com.miti99.gomoku.proto.RoomCreateSuccessResponse.$Shape; roomJoinSuccess?: null; roomJoinFailFull?: null; roomJoinFailNotFound?: null; roomPlayFailNotFound?: null; gameStarting?: null; gameMoveSuccess?: null; gameMoveInvalid?: null; gameMoveOccupied?: null; gameMoveOutOfBounds?: null; gameMoveNotYourTurn?: null; gameOver?: null; pveDifficultyNotSupport?: null; watchGameSuccess?: null; clientExit?: null; spectatorCannotAct?: null }|{ payload?: "roomJoinSuccess"; clientConnect?: null; nicknameSet?: null; showOptions?: null; showRooms?: null; roomCreateSuccess?: null; roomJoinSuccess: com.miti99.gomoku.proto.RoomJoinSuccessResponse.$Shape; roomJoinFailFull?: null; roomJoinFailNotFound?: null; roomPlayFailNotFound?: null; gameStarting?: null; gameMoveSuccess?: null; gameMoveInvalid?: null; gameMoveOccupied?: null; gameMoveOutOfBounds?: null; gameMoveNotYourTurn?: null; gameOver?: null; pveDifficultyNotSupport?: null; watchGameSuccess?: null; clientExit?: null; spectatorCannotAct?: null }|{ payload?: "roomJoinFailFull"; clientConnect?: null; nicknameSet?: null; showOptions?: null; showRooms?: null; roomCreateSuccess?: null; roomJoinSuccess?: null; roomJoinFailFull: com.miti99.gomoku.proto.RoomJoinFailFullResponse.$Shape; roomJoinFailNotFound?: null; roomPlayFailNotFound?: null; gameStarting?: null; gameMoveSuccess?: null; gameMoveInvalid?: null; gameMoveOccupied?: null; gameMoveOutOfBounds?: null; gameMoveNotYourTurn?: null; gameOver?: null; pveDifficultyNotSupport?: null; watchGameSuccess?: null; clientExit?: null; spectatorCannotAct?: null }|{ payload?: "roomJoinFailNotFound"; clientConnect?: null; nicknameSet?: null; showOptions?: null; showRooms?: null; roomCreateSuccess?: null; roomJoinSuccess?: null; roomJoinFailFull?: null; roomJoinFailNotFound: com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse.$Shape; roomPlayFailNotFound?: null; gameStarting?: null; gameMoveSuccess?: null; gameMoveInvalid?: null; gameMoveOccupied?: null; gameMoveOutOfBounds?: null; gameMoveNotYourTurn?: null; gameOver?: null; pveDifficultyNotSupport?: null; watchGameSuccess?: null; clientExit?: null; spectatorCannotAct?: null }|{ payload?: "roomPlayFailNotFound"; clientConnect?: null; nicknameSet?: null; showOptions?: null; showRooms?: null; roomCreateSuccess?: null; roomJoinSuccess?: null; roomJoinFailFull?: null; roomJoinFailNotFound?: null; roomPlayFailNotFound: com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse.$Shape; gameStarting?: null; gameMoveSuccess?: null; gameMoveInvalid?: null; gameMoveOccupied?: null; gameMoveOutOfBounds?: null; gameMoveNotYourTurn?: null; gameOver?: null; pveDifficultyNotSupport?: null; watchGameSuccess?: null; clientExit?: null; spectatorCannotAct?: null }|{ payload?: "gameStarting"; clientConnect?: null; nicknameSet?: null; showOptions?: null; showRooms?: null; roomCreateSuccess?: null; roomJoinSuccess?: null; roomJoinFailFull?: null; roomJoinFailNotFound?: null; roomPlayFailNotFound?: null; gameStarting: com.miti99.gomoku.proto.GameStartingResponse.$Shape; gameMoveSuccess?: null; gameMoveInvalid?: null; gameMoveOccupied?: null; gameMoveOutOfBounds?: null; gameMoveNotYourTurn?: null; gameOver?: null; pveDifficultyNotSupport?: null; watchGameSuccess?: null; clientExit?: null; spectatorCannotAct?: null }|{ payload?: "gameMoveSuccess"; clientConnect?: null; nicknameSet?: null; showOptions?: null; showRooms?: null; roomCreateSuccess?: null; roomJoinSuccess?: null; roomJoinFailFull?: null; roomJoinFailNotFound?: null; roomPlayFailNotFound?: null; gameStarting?: null; gameMoveSuccess: com.miti99.gomoku.proto.GameMoveSuccessResponse.$Shape; gameMoveInvalid?: null; gameMoveOccupied?: null; gameMoveOutOfBounds?: null; gameMoveNotYourTurn?: null; gameOver?: null; pveDifficultyNotSupport?: null; watchGameSuccess?: null; clientExit?: null; spectatorCannotAct?: null }|{ payload?: "gameMoveInvalid"; clientConnect?: null; nicknameSet?: null; showOptions?: null; showRooms?: null; roomCreateSuccess?: null; roomJoinSuccess?: null; roomJoinFailFull?: null; roomJoinFailNotFound?: null; roomPlayFailNotFound?: null; gameStarting?: null; gameMoveSuccess?: null; gameMoveInvalid: com.miti99.gomoku.proto.GameMoveInvalidResponse.$Shape; gameMoveOccupied?: null; gameMoveOutOfBounds?: null; gameMoveNotYourTurn?: null; gameOver?: null; pveDifficultyNotSupport?: null; watchGameSuccess?: null; clientExit?: null; spectatorCannotAct?: null }|{ payload?: "gameMoveOccupied"; clientConnect?: null; nicknameSet?: null; showOptions?: null; showRooms?: null; roomCreateSuccess?: null; roomJoinSuccess?: null; roomJoinFailFull?: null; roomJoinFailNotFound?: null; roomPlayFailNotFound?: null; gameStarting?: null; gameMoveSuccess?: null; gameMoveInvalid?: null; gameMoveOccupied: com.miti99.gomoku.proto.GameMoveOccupiedResponse.$Shape; gameMoveOutOfBounds?: null; gameMoveNotYourTurn?: null; gameOver?: null; pveDifficultyNotSupport?: null; watchGameSuccess?: null; clientExit?: null; spectatorCannotAct?: null }|{ payload?: "gameMoveOutOfBounds"; clientConnect?: null; nicknameSet?: null; showOptions?: null; showRooms?: null; roomCreateSuccess?: null; roomJoinSuccess?: null; roomJoinFailFull?: null; roomJoinFailNotFound?: null; roomPlayFailNotFound?: null; gameStarting?: null; gameMoveSuccess?: null; gameMoveInvalid?: null; gameMoveOccupied?: null; gameMoveOutOfBounds: com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse.$Shape; gameMoveNotYourTurn?: null; gameOver?: null; pveDifficultyNotSupport?: null; watchGameSuccess?: null; clientExit?: null; spectatorCannotAct?: null }|{ payload?: "gameMoveNotYourTurn"; clientConnect?: null; nicknameSet?: null; showOptions?: null; showRooms?: null; roomCreateSuccess?: null; roomJoinSuccess?: null; roomJoinFailFull?: null; roomJoinFailNotFound?: null; roomPlayFailNotFound?: null; gameStarting?: null; gameMoveSuccess?: null; gameMoveInvalid?: null; gameMoveOccupied?: null; gameMoveOutOfBounds?: null; gameMoveNotYourTurn: com.miti99.gomoku.proto.GameMoveNotYourTurnResponse.$Shape; gameOver?: null; pveDifficultyNotSupport?: null; watchGameSuccess?: null; clientExit?: null; spectatorCannotAct?: null }|{ payload?: "gameOver"; clientConnect?: null; nicknameSet?: null; showOptions?: null; showRooms?: null; roomCreateSuccess?: null; roomJoinSuccess?: null; roomJoinFailFull?: null; roomJoinFailNotFound?: null; roomPlayFailNotFound?: null; gameStarting?: null; gameMoveSuccess?: null; gameMoveInvalid?: null; gameMoveOccupied?: null; gameMoveOutOfBounds?: null; gameMoveNotYourTurn?: null; gameOver: com.miti99.gomoku.proto.GameOverResponse.$Shape; pveDifficultyNotSupport?: null; watchGameSuccess?: null; clientExit?: null; spectatorCannotAct?: null }|{ payload?: "pveDifficultyNotSupport"; clientConnect?: null; nicknameSet?: null; showOptions?: null; showRooms?: null; roomCreateSuccess?: null; roomJoinSuccess?: null; roomJoinFailFull?: null; roomJoinFailNotFound?: null; roomPlayFailNotFound?: null; gameStarting?: null; gameMoveSuccess?: null; gameMoveInvalid?: null; gameMoveOccupied?: null; gameMoveOutOfBounds?: null; gameMoveNotYourTurn?: null; gameOver?: null; pveDifficultyNotSupport: com.miti99.gomoku.proto.PveDifficultyNotSupportResponse.$Shape; watchGameSuccess?: null; clientExit?: null; spectatorCannotAct?: null }|{ payload?: "watchGameSuccess"; clientConnect?: null; nicknameSet?: null; showOptions?: null; showRooms?: null; roomCreateSuccess?: null; roomJoinSuccess?: null; roomJoinFailFull?: null; roomJoinFailNotFound?: null; roomPlayFailNotFound?: null; gameStarting?: null; gameMoveSuccess?: null; gameMoveInvalid?: null; gameMoveOccupied?: null; gameMoveOutOfBounds?: null; gameMoveNotYourTurn?: null; gameOver?: null; pveDifficultyNotSupport?: null; watchGameSuccess: com.miti99.gomoku.proto.WatchGameSuccessResponse.$Shape; clientExit?: null; spectatorCannotAct?: null }|{ payload?: "clientExit"; clientConnect?: null; nicknameSet?: null; showOptions?: null; showRooms?: null; roomCreateSuccess?: null; roomJoinSuccess?: null; roomJoinFailFull?: null; roomJoinFailNotFound?: null; roomPlayFailNotFound?: null; gameStarting?: null; gameMoveSuccess?: null; gameMoveInvalid?: null; gameMoveOccupied?: null; gameMoveOutOfBounds?: null; gameMoveNotYourTurn?: null; gameOver?: null; pveDifficultyNotSupport?: null; watchGameSuccess?: null; clientExit: com.miti99.gomoku.proto.ClientExitResponse.$Shape; spectatorCannotAct?: null }|{ payload?: "spectatorCannotAct"; clientConnect?: null; nicknameSet?: null; showOptions?: null; showRooms?: null; roomCreateSuccess?: null; roomJoinSuccess?: null; roomJoinFailFull?: null; roomJoinFailNotFound?: null; roomPlayFailNotFound?: null; gameStarting?: null; gameMoveSuccess?: null; gameMoveInvalid?: null; gameMoveOccupied?: null; gameMoveOutOfBounds?: null; gameMoveNotYourTurn?: null; gameOver?: null; pveDifficultyNotSupport?: null; watchGameSuccess?: null; clientExit?: null; spectatorCannotAct: com.miti99.gomoku.proto.SpectatorCannotActResponse.$Shape })
                    );
                }

                /**
                 * Properties of a ClientConnectResponse.
                 * @deprecated Use com.miti99.gomoku.proto.ClientConnectResponse.$Properties instead.
                 */
                interface IClientConnectResponse extends com.miti99.gomoku.proto.ClientConnectResponse.$Properties {
                }

                /** Represents a ClientConnectResponse. */
                class ClientConnectResponse {

                    /**
                     * Constructs a new ClientConnectResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.ClientConnectResponse.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** ClientConnectResponse clientId. */
                    clientId: number;

                    /**
                     * Creates a new ClientConnectResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ClientConnectResponse instance
                     */
                    static create(properties: com.miti99.gomoku.proto.ClientConnectResponse.$Shape): com.miti99.gomoku.proto.ClientConnectResponse & com.miti99.gomoku.proto.ClientConnectResponse.$Shape;
                    static create(properties?: com.miti99.gomoku.proto.ClientConnectResponse.$Properties): com.miti99.gomoku.proto.ClientConnectResponse;

                    /**
                     * Encodes the specified ClientConnectResponse message. Does not implicitly {@link com.miti99.gomoku.proto.ClientConnectResponse.verify|verify} messages.
                     * @param message ClientConnectResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: com.miti99.gomoku.proto.ClientConnectResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ClientConnectResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.ClientConnectResponse.verify|verify} messages.
                     * @param message ClientConnectResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: com.miti99.gomoku.proto.ClientConnectResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ClientConnectResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.ClientConnectResponse & com.miti99.gomoku.proto.ClientConnectResponse.$Shape} ClientConnectResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.ClientConnectResponse & com.miti99.gomoku.proto.ClientConnectResponse.$Shape;

                    /**
                     * Decodes a ClientConnectResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.ClientConnectResponse & com.miti99.gomoku.proto.ClientConnectResponse.$Shape} ClientConnectResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.ClientConnectResponse & com.miti99.gomoku.proto.ClientConnectResponse.$Shape;

                    /**
                     * Verifies a ClientConnectResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ClientConnectResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ClientConnectResponse
                     */
                    static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.ClientConnectResponse;

                    /**
                     * Creates a plain object from a ClientConnectResponse message. Also converts values to other types if specified.
                     * @param message ClientConnectResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: com.miti99.gomoku.proto.ClientConnectResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ClientConnectResponse to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for ClientConnectResponse
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace ClientConnectResponse {

                    /** Properties of a ClientConnectResponse. */
                    interface $Properties {

                        /** ClientConnectResponse clientId */
                        clientId?: (number|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a ClientConnectResponse. */
                    type $Shape = com.miti99.gomoku.proto.ClientConnectResponse.$Properties;
                }

                /**
                 * Properties of a NicknameSetResponse.
                 * @deprecated Use com.miti99.gomoku.proto.NicknameSetResponse.$Properties instead.
                 */
                interface INicknameSetResponse extends com.miti99.gomoku.proto.NicknameSetResponse.$Properties {
                }

                /** Represents a NicknameSetResponse. */
                class NicknameSetResponse {

                    /**
                     * Constructs a new NicknameSetResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.NicknameSetResponse.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** NicknameSetResponse invalidLength. */
                    invalidLength: number;

                    /**
                     * Creates a new NicknameSetResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NicknameSetResponse instance
                     */
                    static create(properties: com.miti99.gomoku.proto.NicknameSetResponse.$Shape): com.miti99.gomoku.proto.NicknameSetResponse & com.miti99.gomoku.proto.NicknameSetResponse.$Shape;
                    static create(properties?: com.miti99.gomoku.proto.NicknameSetResponse.$Properties): com.miti99.gomoku.proto.NicknameSetResponse;

                    /**
                     * Encodes the specified NicknameSetResponse message. Does not implicitly {@link com.miti99.gomoku.proto.NicknameSetResponse.verify|verify} messages.
                     * @param message NicknameSetResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: com.miti99.gomoku.proto.NicknameSetResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NicknameSetResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.NicknameSetResponse.verify|verify} messages.
                     * @param message NicknameSetResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: com.miti99.gomoku.proto.NicknameSetResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NicknameSetResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.NicknameSetResponse & com.miti99.gomoku.proto.NicknameSetResponse.$Shape} NicknameSetResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.NicknameSetResponse & com.miti99.gomoku.proto.NicknameSetResponse.$Shape;

                    /**
                     * Decodes a NicknameSetResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.NicknameSetResponse & com.miti99.gomoku.proto.NicknameSetResponse.$Shape} NicknameSetResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.NicknameSetResponse & com.miti99.gomoku.proto.NicknameSetResponse.$Shape;

                    /**
                     * Verifies a NicknameSetResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NicknameSetResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NicknameSetResponse
                     */
                    static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.NicknameSetResponse;

                    /**
                     * Creates a plain object from a NicknameSetResponse message. Also converts values to other types if specified.
                     * @param message NicknameSetResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: com.miti99.gomoku.proto.NicknameSetResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NicknameSetResponse to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for NicknameSetResponse
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace NicknameSetResponse {

                    /** Properties of a NicknameSetResponse. */
                    interface $Properties {

                        /** NicknameSetResponse invalidLength */
                        invalidLength?: (number|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a NicknameSetResponse. */
                    type $Shape = com.miti99.gomoku.proto.NicknameSetResponse.$Properties;
                }

                /**
                 * Properties of a ShowOptionsResponse.
                 * @deprecated Use com.miti99.gomoku.proto.ShowOptionsResponse.$Properties instead.
                 */
                interface IShowOptionsResponse extends com.miti99.gomoku.proto.ShowOptionsResponse.$Properties {
                }

                /** Represents a ShowOptionsResponse. */
                class ShowOptionsResponse {

                    /**
                     * Constructs a new ShowOptionsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.ShowOptionsResponse.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /**
                     * Creates a new ShowOptionsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ShowOptionsResponse instance
                     */
                    static create(properties: com.miti99.gomoku.proto.ShowOptionsResponse.$Shape): com.miti99.gomoku.proto.ShowOptionsResponse & com.miti99.gomoku.proto.ShowOptionsResponse.$Shape;
                    static create(properties?: com.miti99.gomoku.proto.ShowOptionsResponse.$Properties): com.miti99.gomoku.proto.ShowOptionsResponse;

                    /**
                     * Encodes the specified ShowOptionsResponse message. Does not implicitly {@link com.miti99.gomoku.proto.ShowOptionsResponse.verify|verify} messages.
                     * @param message ShowOptionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: com.miti99.gomoku.proto.ShowOptionsResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ShowOptionsResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.ShowOptionsResponse.verify|verify} messages.
                     * @param message ShowOptionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: com.miti99.gomoku.proto.ShowOptionsResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ShowOptionsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.ShowOptionsResponse & com.miti99.gomoku.proto.ShowOptionsResponse.$Shape} ShowOptionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.ShowOptionsResponse & com.miti99.gomoku.proto.ShowOptionsResponse.$Shape;

                    /**
                     * Decodes a ShowOptionsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.ShowOptionsResponse & com.miti99.gomoku.proto.ShowOptionsResponse.$Shape} ShowOptionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.ShowOptionsResponse & com.miti99.gomoku.proto.ShowOptionsResponse.$Shape;

                    /**
                     * Verifies a ShowOptionsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ShowOptionsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ShowOptionsResponse
                     */
                    static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.ShowOptionsResponse;

                    /**
                     * Creates a plain object from a ShowOptionsResponse message. Also converts values to other types if specified.
                     * @param message ShowOptionsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: com.miti99.gomoku.proto.ShowOptionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ShowOptionsResponse to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for ShowOptionsResponse
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace ShowOptionsResponse {

                    /** Properties of a ShowOptionsResponse. */
                    interface $Properties {

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a ShowOptionsResponse. */
                    type $Shape = com.miti99.gomoku.proto.ShowOptionsResponse.$Properties;
                }

                /**
                 * Properties of a RoomSummary.
                 * @deprecated Use com.miti99.gomoku.proto.RoomSummary.$Properties instead.
                 */
                interface IRoomSummary extends com.miti99.gomoku.proto.RoomSummary.$Properties {
                }

                /** Represents a RoomSummary. */
                class RoomSummary {

                    /**
                     * Constructs a new RoomSummary.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.RoomSummary.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** RoomSummary roomId. */
                    roomId: number;

                    /** RoomSummary roomOwner. */
                    roomOwner: string;

                    /** RoomSummary roomClientCount. */
                    roomClientCount: number;

                    /** RoomSummary roomType. */
                    roomType: com.miti99.gomoku.proto.RoomType;

                    /**
                     * Creates a new RoomSummary instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RoomSummary instance
                     */
                    static create(properties: com.miti99.gomoku.proto.RoomSummary.$Shape): com.miti99.gomoku.proto.RoomSummary & com.miti99.gomoku.proto.RoomSummary.$Shape;
                    static create(properties?: com.miti99.gomoku.proto.RoomSummary.$Properties): com.miti99.gomoku.proto.RoomSummary;

                    /**
                     * Encodes the specified RoomSummary message. Does not implicitly {@link com.miti99.gomoku.proto.RoomSummary.verify|verify} messages.
                     * @param message RoomSummary message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: com.miti99.gomoku.proto.RoomSummary.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RoomSummary message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.RoomSummary.verify|verify} messages.
                     * @param message RoomSummary message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: com.miti99.gomoku.proto.RoomSummary.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RoomSummary message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.RoomSummary & com.miti99.gomoku.proto.RoomSummary.$Shape} RoomSummary
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.RoomSummary & com.miti99.gomoku.proto.RoomSummary.$Shape;

                    /**
                     * Decodes a RoomSummary message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.RoomSummary & com.miti99.gomoku.proto.RoomSummary.$Shape} RoomSummary
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.RoomSummary & com.miti99.gomoku.proto.RoomSummary.$Shape;

                    /**
                     * Verifies a RoomSummary message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RoomSummary message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RoomSummary
                     */
                    static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.RoomSummary;

                    /**
                     * Creates a plain object from a RoomSummary message. Also converts values to other types if specified.
                     * @param message RoomSummary
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: com.miti99.gomoku.proto.RoomSummary, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RoomSummary to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for RoomSummary
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace RoomSummary {

                    /** Properties of a RoomSummary. */
                    interface $Properties {

                        /** RoomSummary roomId */
                        roomId?: (number|null);

                        /** RoomSummary roomOwner */
                        roomOwner?: (string|null);

                        /** RoomSummary roomClientCount */
                        roomClientCount?: (number|null);

                        /** RoomSummary roomType */
                        roomType?: (com.miti99.gomoku.proto.RoomType|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a RoomSummary. */
                    type $Shape = com.miti99.gomoku.proto.RoomSummary.$Properties;
                }

                /**
                 * Properties of a ShowRoomsResponse.
                 * @deprecated Use com.miti99.gomoku.proto.ShowRoomsResponse.$Properties instead.
                 */
                interface IShowRoomsResponse extends com.miti99.gomoku.proto.ShowRoomsResponse.$Properties {
                }

                /** Represents a ShowRoomsResponse. */
                class ShowRoomsResponse {

                    /**
                     * Constructs a new ShowRoomsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.ShowRoomsResponse.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** ShowRoomsResponse rooms. */
                    rooms: com.miti99.gomoku.proto.RoomSummary.$Properties[];

                    /**
                     * Creates a new ShowRoomsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ShowRoomsResponse instance
                     */
                    static create(properties: com.miti99.gomoku.proto.ShowRoomsResponse.$Shape): com.miti99.gomoku.proto.ShowRoomsResponse & com.miti99.gomoku.proto.ShowRoomsResponse.$Shape;
                    static create(properties?: com.miti99.gomoku.proto.ShowRoomsResponse.$Properties): com.miti99.gomoku.proto.ShowRoomsResponse;

                    /**
                     * Encodes the specified ShowRoomsResponse message. Does not implicitly {@link com.miti99.gomoku.proto.ShowRoomsResponse.verify|verify} messages.
                     * @param message ShowRoomsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: com.miti99.gomoku.proto.ShowRoomsResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ShowRoomsResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.ShowRoomsResponse.verify|verify} messages.
                     * @param message ShowRoomsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: com.miti99.gomoku.proto.ShowRoomsResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ShowRoomsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.ShowRoomsResponse & com.miti99.gomoku.proto.ShowRoomsResponse.$Shape} ShowRoomsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.ShowRoomsResponse & com.miti99.gomoku.proto.ShowRoomsResponse.$Shape;

                    /**
                     * Decodes a ShowRoomsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.ShowRoomsResponse & com.miti99.gomoku.proto.ShowRoomsResponse.$Shape} ShowRoomsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.ShowRoomsResponse & com.miti99.gomoku.proto.ShowRoomsResponse.$Shape;

                    /**
                     * Verifies a ShowRoomsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ShowRoomsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ShowRoomsResponse
                     */
                    static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.ShowRoomsResponse;

                    /**
                     * Creates a plain object from a ShowRoomsResponse message. Also converts values to other types if specified.
                     * @param message ShowRoomsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: com.miti99.gomoku.proto.ShowRoomsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ShowRoomsResponse to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for ShowRoomsResponse
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace ShowRoomsResponse {

                    /** Properties of a ShowRoomsResponse. */
                    interface $Properties {

                        /** ShowRoomsResponse rooms */
                        rooms?: (com.miti99.gomoku.proto.RoomSummary.$Properties[]|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a ShowRoomsResponse. */
                    type $Shape = com.miti99.gomoku.proto.ShowRoomsResponse.$Properties;
                }

                /**
                 * Properties of a RoomCreateSuccessResponse.
                 * @deprecated Use com.miti99.gomoku.proto.RoomCreateSuccessResponse.$Properties instead.
                 */
                interface IRoomCreateSuccessResponse extends com.miti99.gomoku.proto.RoomCreateSuccessResponse.$Properties {
                }

                /** Represents a RoomCreateSuccessResponse. */
                class RoomCreateSuccessResponse {

                    /**
                     * Constructs a new RoomCreateSuccessResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.RoomCreateSuccessResponse.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** RoomCreateSuccessResponse id. */
                    id: number;

                    /** RoomCreateSuccessResponse roomOwner. */
                    roomOwner: string;

                    /** RoomCreateSuccessResponse roomType. */
                    roomType: com.miti99.gomoku.proto.RoomType;

                    /**
                     * Creates a new RoomCreateSuccessResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RoomCreateSuccessResponse instance
                     */
                    static create(properties: com.miti99.gomoku.proto.RoomCreateSuccessResponse.$Shape): com.miti99.gomoku.proto.RoomCreateSuccessResponse & com.miti99.gomoku.proto.RoomCreateSuccessResponse.$Shape;
                    static create(properties?: com.miti99.gomoku.proto.RoomCreateSuccessResponse.$Properties): com.miti99.gomoku.proto.RoomCreateSuccessResponse;

                    /**
                     * Encodes the specified RoomCreateSuccessResponse message. Does not implicitly {@link com.miti99.gomoku.proto.RoomCreateSuccessResponse.verify|verify} messages.
                     * @param message RoomCreateSuccessResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: com.miti99.gomoku.proto.RoomCreateSuccessResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RoomCreateSuccessResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.RoomCreateSuccessResponse.verify|verify} messages.
                     * @param message RoomCreateSuccessResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: com.miti99.gomoku.proto.RoomCreateSuccessResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RoomCreateSuccessResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.RoomCreateSuccessResponse & com.miti99.gomoku.proto.RoomCreateSuccessResponse.$Shape} RoomCreateSuccessResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.RoomCreateSuccessResponse & com.miti99.gomoku.proto.RoomCreateSuccessResponse.$Shape;

                    /**
                     * Decodes a RoomCreateSuccessResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.RoomCreateSuccessResponse & com.miti99.gomoku.proto.RoomCreateSuccessResponse.$Shape} RoomCreateSuccessResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.RoomCreateSuccessResponse & com.miti99.gomoku.proto.RoomCreateSuccessResponse.$Shape;

                    /**
                     * Verifies a RoomCreateSuccessResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RoomCreateSuccessResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RoomCreateSuccessResponse
                     */
                    static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.RoomCreateSuccessResponse;

                    /**
                     * Creates a plain object from a RoomCreateSuccessResponse message. Also converts values to other types if specified.
                     * @param message RoomCreateSuccessResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: com.miti99.gomoku.proto.RoomCreateSuccessResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RoomCreateSuccessResponse to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for RoomCreateSuccessResponse
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace RoomCreateSuccessResponse {

                    /** Properties of a RoomCreateSuccessResponse. */
                    interface $Properties {

                        /** RoomCreateSuccessResponse id */
                        id?: (number|null);

                        /** RoomCreateSuccessResponse roomOwner */
                        roomOwner?: (string|null);

                        /** RoomCreateSuccessResponse roomType */
                        roomType?: (com.miti99.gomoku.proto.RoomType|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a RoomCreateSuccessResponse. */
                    type $Shape = com.miti99.gomoku.proto.RoomCreateSuccessResponse.$Properties;
                }

                /**
                 * Properties of a RoomJoinSuccessResponse.
                 * @deprecated Use com.miti99.gomoku.proto.RoomJoinSuccessResponse.$Properties instead.
                 */
                interface IRoomJoinSuccessResponse extends com.miti99.gomoku.proto.RoomJoinSuccessResponse.$Properties {
                }

                /** Represents a RoomJoinSuccessResponse. */
                class RoomJoinSuccessResponse {

                    /**
                     * Constructs a new RoomJoinSuccessResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.RoomJoinSuccessResponse.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** RoomJoinSuccessResponse clientId. */
                    clientId: number;

                    /** RoomJoinSuccessResponse clientNickname. */
                    clientNickname: string;

                    /** RoomJoinSuccessResponse roomId. */
                    roomId: number;

                    /** RoomJoinSuccessResponse roomOwner. */
                    roomOwner: string;

                    /** RoomJoinSuccessResponse roomClientCount. */
                    roomClientCount: number;

                    /**
                     * Creates a new RoomJoinSuccessResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RoomJoinSuccessResponse instance
                     */
                    static create(properties: com.miti99.gomoku.proto.RoomJoinSuccessResponse.$Shape): com.miti99.gomoku.proto.RoomJoinSuccessResponse & com.miti99.gomoku.proto.RoomJoinSuccessResponse.$Shape;
                    static create(properties?: com.miti99.gomoku.proto.RoomJoinSuccessResponse.$Properties): com.miti99.gomoku.proto.RoomJoinSuccessResponse;

                    /**
                     * Encodes the specified RoomJoinSuccessResponse message. Does not implicitly {@link com.miti99.gomoku.proto.RoomJoinSuccessResponse.verify|verify} messages.
                     * @param message RoomJoinSuccessResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: com.miti99.gomoku.proto.RoomJoinSuccessResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RoomJoinSuccessResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.RoomJoinSuccessResponse.verify|verify} messages.
                     * @param message RoomJoinSuccessResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: com.miti99.gomoku.proto.RoomJoinSuccessResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RoomJoinSuccessResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.RoomJoinSuccessResponse & com.miti99.gomoku.proto.RoomJoinSuccessResponse.$Shape} RoomJoinSuccessResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.RoomJoinSuccessResponse & com.miti99.gomoku.proto.RoomJoinSuccessResponse.$Shape;

                    /**
                     * Decodes a RoomJoinSuccessResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.RoomJoinSuccessResponse & com.miti99.gomoku.proto.RoomJoinSuccessResponse.$Shape} RoomJoinSuccessResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.RoomJoinSuccessResponse & com.miti99.gomoku.proto.RoomJoinSuccessResponse.$Shape;

                    /**
                     * Verifies a RoomJoinSuccessResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RoomJoinSuccessResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RoomJoinSuccessResponse
                     */
                    static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.RoomJoinSuccessResponse;

                    /**
                     * Creates a plain object from a RoomJoinSuccessResponse message. Also converts values to other types if specified.
                     * @param message RoomJoinSuccessResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: com.miti99.gomoku.proto.RoomJoinSuccessResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RoomJoinSuccessResponse to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for RoomJoinSuccessResponse
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace RoomJoinSuccessResponse {

                    /** Properties of a RoomJoinSuccessResponse. */
                    interface $Properties {

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

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a RoomJoinSuccessResponse. */
                    type $Shape = com.miti99.gomoku.proto.RoomJoinSuccessResponse.$Properties;
                }

                /**
                 * Properties of a RoomJoinFailFullResponse.
                 * @deprecated Use com.miti99.gomoku.proto.RoomJoinFailFullResponse.$Properties instead.
                 */
                interface IRoomJoinFailFullResponse extends com.miti99.gomoku.proto.RoomJoinFailFullResponse.$Properties {
                }

                /** Represents a RoomJoinFailFullResponse. */
                class RoomJoinFailFullResponse {

                    /**
                     * Constructs a new RoomJoinFailFullResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.RoomJoinFailFullResponse.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** RoomJoinFailFullResponse roomId. */
                    roomId: number;

                    /** RoomJoinFailFullResponse roomOwner. */
                    roomOwner: string;

                    /**
                     * Creates a new RoomJoinFailFullResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RoomJoinFailFullResponse instance
                     */
                    static create(properties: com.miti99.gomoku.proto.RoomJoinFailFullResponse.$Shape): com.miti99.gomoku.proto.RoomJoinFailFullResponse & com.miti99.gomoku.proto.RoomJoinFailFullResponse.$Shape;
                    static create(properties?: com.miti99.gomoku.proto.RoomJoinFailFullResponse.$Properties): com.miti99.gomoku.proto.RoomJoinFailFullResponse;

                    /**
                     * Encodes the specified RoomJoinFailFullResponse message. Does not implicitly {@link com.miti99.gomoku.proto.RoomJoinFailFullResponse.verify|verify} messages.
                     * @param message RoomJoinFailFullResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: com.miti99.gomoku.proto.RoomJoinFailFullResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RoomJoinFailFullResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.RoomJoinFailFullResponse.verify|verify} messages.
                     * @param message RoomJoinFailFullResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: com.miti99.gomoku.proto.RoomJoinFailFullResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RoomJoinFailFullResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.RoomJoinFailFullResponse & com.miti99.gomoku.proto.RoomJoinFailFullResponse.$Shape} RoomJoinFailFullResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.RoomJoinFailFullResponse & com.miti99.gomoku.proto.RoomJoinFailFullResponse.$Shape;

                    /**
                     * Decodes a RoomJoinFailFullResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.RoomJoinFailFullResponse & com.miti99.gomoku.proto.RoomJoinFailFullResponse.$Shape} RoomJoinFailFullResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.RoomJoinFailFullResponse & com.miti99.gomoku.proto.RoomJoinFailFullResponse.$Shape;

                    /**
                     * Verifies a RoomJoinFailFullResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RoomJoinFailFullResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RoomJoinFailFullResponse
                     */
                    static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.RoomJoinFailFullResponse;

                    /**
                     * Creates a plain object from a RoomJoinFailFullResponse message. Also converts values to other types if specified.
                     * @param message RoomJoinFailFullResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: com.miti99.gomoku.proto.RoomJoinFailFullResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RoomJoinFailFullResponse to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for RoomJoinFailFullResponse
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace RoomJoinFailFullResponse {

                    /** Properties of a RoomJoinFailFullResponse. */
                    interface $Properties {

                        /** RoomJoinFailFullResponse roomId */
                        roomId?: (number|null);

                        /** RoomJoinFailFullResponse roomOwner */
                        roomOwner?: (string|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a RoomJoinFailFullResponse. */
                    type $Shape = com.miti99.gomoku.proto.RoomJoinFailFullResponse.$Properties;
                }

                /**
                 * Properties of a RoomJoinFailNotFoundResponse.
                 * @deprecated Use com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse.$Properties instead.
                 */
                interface IRoomJoinFailNotFoundResponse extends com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse.$Properties {
                }

                /** Represents a RoomJoinFailNotFoundResponse. */
                class RoomJoinFailNotFoundResponse {

                    /**
                     * Constructs a new RoomJoinFailNotFoundResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** RoomJoinFailNotFoundResponse roomId. */
                    roomId: number;

                    /**
                     * Creates a new RoomJoinFailNotFoundResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RoomJoinFailNotFoundResponse instance
                     */
                    static create(properties: com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse.$Shape): com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse & com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse.$Shape;
                    static create(properties?: com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse.$Properties): com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse;

                    /**
                     * Encodes the specified RoomJoinFailNotFoundResponse message. Does not implicitly {@link com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse.verify|verify} messages.
                     * @param message RoomJoinFailNotFoundResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RoomJoinFailNotFoundResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse.verify|verify} messages.
                     * @param message RoomJoinFailNotFoundResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RoomJoinFailNotFoundResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse & com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse.$Shape} RoomJoinFailNotFoundResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse & com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse.$Shape;

                    /**
                     * Decodes a RoomJoinFailNotFoundResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse & com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse.$Shape} RoomJoinFailNotFoundResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse & com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse.$Shape;

                    /**
                     * Verifies a RoomJoinFailNotFoundResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RoomJoinFailNotFoundResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RoomJoinFailNotFoundResponse
                     */
                    static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse;

                    /**
                     * Creates a plain object from a RoomJoinFailNotFoundResponse message. Also converts values to other types if specified.
                     * @param message RoomJoinFailNotFoundResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RoomJoinFailNotFoundResponse to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for RoomJoinFailNotFoundResponse
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace RoomJoinFailNotFoundResponse {

                    /** Properties of a RoomJoinFailNotFoundResponse. */
                    interface $Properties {

                        /** RoomJoinFailNotFoundResponse roomId */
                        roomId?: (number|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a RoomJoinFailNotFoundResponse. */
                    type $Shape = com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse.$Properties;
                }

                /**
                 * Properties of a RoomPlayFailNotFoundResponse.
                 * @deprecated Use com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse.$Properties instead.
                 */
                interface IRoomPlayFailNotFoundResponse extends com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse.$Properties {
                }

                /** Represents a RoomPlayFailNotFoundResponse. */
                class RoomPlayFailNotFoundResponse {

                    /**
                     * Constructs a new RoomPlayFailNotFoundResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /**
                     * Creates a new RoomPlayFailNotFoundResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RoomPlayFailNotFoundResponse instance
                     */
                    static create(properties: com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse.$Shape): com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse & com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse.$Shape;
                    static create(properties?: com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse.$Properties): com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse;

                    /**
                     * Encodes the specified RoomPlayFailNotFoundResponse message. Does not implicitly {@link com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse.verify|verify} messages.
                     * @param message RoomPlayFailNotFoundResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RoomPlayFailNotFoundResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse.verify|verify} messages.
                     * @param message RoomPlayFailNotFoundResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RoomPlayFailNotFoundResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse & com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse.$Shape} RoomPlayFailNotFoundResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse & com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse.$Shape;

                    /**
                     * Decodes a RoomPlayFailNotFoundResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse & com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse.$Shape} RoomPlayFailNotFoundResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse & com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse.$Shape;

                    /**
                     * Verifies a RoomPlayFailNotFoundResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RoomPlayFailNotFoundResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RoomPlayFailNotFoundResponse
                     */
                    static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse;

                    /**
                     * Creates a plain object from a RoomPlayFailNotFoundResponse message. Also converts values to other types if specified.
                     * @param message RoomPlayFailNotFoundResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RoomPlayFailNotFoundResponse to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for RoomPlayFailNotFoundResponse
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace RoomPlayFailNotFoundResponse {

                    /** Properties of a RoomPlayFailNotFoundResponse. */
                    interface $Properties {

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a RoomPlayFailNotFoundResponse. */
                    type $Shape = com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse.$Properties;
                }

                /**
                 * Properties of a GameStartingResponse.
                 * @deprecated Use com.miti99.gomoku.proto.GameStartingResponse.$Properties instead.
                 */
                interface IGameStartingResponse extends com.miti99.gomoku.proto.GameStartingResponse.$Properties {
                }

                /** Represents a GameStartingResponse. */
                class GameStartingResponse {

                    /**
                     * Constructs a new GameStartingResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.GameStartingResponse.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** GameStartingResponse roomId. */
                    roomId: number;

                    /** GameStartingResponse blackPlayerId. */
                    blackPlayerId: number;

                    /** GameStartingResponse blackPlayerNickname. */
                    blackPlayerNickname: string;

                    /** GameStartingResponse whitePlayerId. */
                    whitePlayerId: number;

                    /** GameStartingResponse whitePlayerNickname. */
                    whitePlayerNickname: string;

                    /** GameStartingResponse boardSize. */
                    boardSize: number;

                    /**
                     * Creates a new GameStartingResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GameStartingResponse instance
                     */
                    static create(properties: com.miti99.gomoku.proto.GameStartingResponse.$Shape): com.miti99.gomoku.proto.GameStartingResponse & com.miti99.gomoku.proto.GameStartingResponse.$Shape;
                    static create(properties?: com.miti99.gomoku.proto.GameStartingResponse.$Properties): com.miti99.gomoku.proto.GameStartingResponse;

                    /**
                     * Encodes the specified GameStartingResponse message. Does not implicitly {@link com.miti99.gomoku.proto.GameStartingResponse.verify|verify} messages.
                     * @param message GameStartingResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: com.miti99.gomoku.proto.GameStartingResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GameStartingResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.GameStartingResponse.verify|verify} messages.
                     * @param message GameStartingResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: com.miti99.gomoku.proto.GameStartingResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GameStartingResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.GameStartingResponse & com.miti99.gomoku.proto.GameStartingResponse.$Shape} GameStartingResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.GameStartingResponse & com.miti99.gomoku.proto.GameStartingResponse.$Shape;

                    /**
                     * Decodes a GameStartingResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.GameStartingResponse & com.miti99.gomoku.proto.GameStartingResponse.$Shape} GameStartingResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.GameStartingResponse & com.miti99.gomoku.proto.GameStartingResponse.$Shape;

                    /**
                     * Verifies a GameStartingResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GameStartingResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GameStartingResponse
                     */
                    static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.GameStartingResponse;

                    /**
                     * Creates a plain object from a GameStartingResponse message. Also converts values to other types if specified.
                     * @param message GameStartingResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: com.miti99.gomoku.proto.GameStartingResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GameStartingResponse to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for GameStartingResponse
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace GameStartingResponse {

                    /** Properties of a GameStartingResponse. */
                    interface $Properties {

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

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a GameStartingResponse. */
                    type $Shape = com.miti99.gomoku.proto.GameStartingResponse.$Properties;
                }

                /**
                 * Properties of a GameMoveSuccessResponse.
                 * @deprecated Use com.miti99.gomoku.proto.GameMoveSuccessResponse.$Properties instead.
                 */
                interface IGameMoveSuccessResponse extends com.miti99.gomoku.proto.GameMoveSuccessResponse.$Properties {
                }

                /** Represents a GameMoveSuccessResponse. */
                class GameMoveSuccessResponse {

                    /**
                     * Constructs a new GameMoveSuccessResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.GameMoveSuccessResponse.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** GameMoveSuccessResponse row. */
                    row: number;

                    /** GameMoveSuccessResponse col. */
                    col: number;

                    /** GameMoveSuccessResponse piece. */
                    piece: com.miti99.gomoku.proto.Piece;

                    /** GameMoveSuccessResponse playerNickname. */
                    playerNickname: string;

                    /** GameMoveSuccessResponse playerId. */
                    playerId: number;

                    /**
                     * Creates a new GameMoveSuccessResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GameMoveSuccessResponse instance
                     */
                    static create(properties: com.miti99.gomoku.proto.GameMoveSuccessResponse.$Shape): com.miti99.gomoku.proto.GameMoveSuccessResponse & com.miti99.gomoku.proto.GameMoveSuccessResponse.$Shape;
                    static create(properties?: com.miti99.gomoku.proto.GameMoveSuccessResponse.$Properties): com.miti99.gomoku.proto.GameMoveSuccessResponse;

                    /**
                     * Encodes the specified GameMoveSuccessResponse message. Does not implicitly {@link com.miti99.gomoku.proto.GameMoveSuccessResponse.verify|verify} messages.
                     * @param message GameMoveSuccessResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: com.miti99.gomoku.proto.GameMoveSuccessResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GameMoveSuccessResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.GameMoveSuccessResponse.verify|verify} messages.
                     * @param message GameMoveSuccessResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: com.miti99.gomoku.proto.GameMoveSuccessResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GameMoveSuccessResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.GameMoveSuccessResponse & com.miti99.gomoku.proto.GameMoveSuccessResponse.$Shape} GameMoveSuccessResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.GameMoveSuccessResponse & com.miti99.gomoku.proto.GameMoveSuccessResponse.$Shape;

                    /**
                     * Decodes a GameMoveSuccessResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.GameMoveSuccessResponse & com.miti99.gomoku.proto.GameMoveSuccessResponse.$Shape} GameMoveSuccessResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.GameMoveSuccessResponse & com.miti99.gomoku.proto.GameMoveSuccessResponse.$Shape;

                    /**
                     * Verifies a GameMoveSuccessResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GameMoveSuccessResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GameMoveSuccessResponse
                     */
                    static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.GameMoveSuccessResponse;

                    /**
                     * Creates a plain object from a GameMoveSuccessResponse message. Also converts values to other types if specified.
                     * @param message GameMoveSuccessResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: com.miti99.gomoku.proto.GameMoveSuccessResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GameMoveSuccessResponse to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for GameMoveSuccessResponse
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace GameMoveSuccessResponse {

                    /** Properties of a GameMoveSuccessResponse. */
                    interface $Properties {

                        /** GameMoveSuccessResponse row */
                        row?: (number|null);

                        /** GameMoveSuccessResponse col */
                        col?: (number|null);

                        /** GameMoveSuccessResponse piece */
                        piece?: (com.miti99.gomoku.proto.Piece|null);

                        /** GameMoveSuccessResponse playerNickname */
                        playerNickname?: (string|null);

                        /** GameMoveSuccessResponse playerId */
                        playerId?: (number|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a GameMoveSuccessResponse. */
                    type $Shape = com.miti99.gomoku.proto.GameMoveSuccessResponse.$Properties;
                }

                /**
                 * Properties of a GameMoveInvalidResponse.
                 * @deprecated Use com.miti99.gomoku.proto.GameMoveInvalidResponse.$Properties instead.
                 */
                interface IGameMoveInvalidResponse extends com.miti99.gomoku.proto.GameMoveInvalidResponse.$Properties {
                }

                /** Represents a GameMoveInvalidResponse. */
                class GameMoveInvalidResponse {

                    /**
                     * Constructs a new GameMoveInvalidResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.GameMoveInvalidResponse.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /**
                     * Creates a new GameMoveInvalidResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GameMoveInvalidResponse instance
                     */
                    static create(properties: com.miti99.gomoku.proto.GameMoveInvalidResponse.$Shape): com.miti99.gomoku.proto.GameMoveInvalidResponse & com.miti99.gomoku.proto.GameMoveInvalidResponse.$Shape;
                    static create(properties?: com.miti99.gomoku.proto.GameMoveInvalidResponse.$Properties): com.miti99.gomoku.proto.GameMoveInvalidResponse;

                    /**
                     * Encodes the specified GameMoveInvalidResponse message. Does not implicitly {@link com.miti99.gomoku.proto.GameMoveInvalidResponse.verify|verify} messages.
                     * @param message GameMoveInvalidResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: com.miti99.gomoku.proto.GameMoveInvalidResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GameMoveInvalidResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.GameMoveInvalidResponse.verify|verify} messages.
                     * @param message GameMoveInvalidResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: com.miti99.gomoku.proto.GameMoveInvalidResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GameMoveInvalidResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.GameMoveInvalidResponse & com.miti99.gomoku.proto.GameMoveInvalidResponse.$Shape} GameMoveInvalidResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.GameMoveInvalidResponse & com.miti99.gomoku.proto.GameMoveInvalidResponse.$Shape;

                    /**
                     * Decodes a GameMoveInvalidResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.GameMoveInvalidResponse & com.miti99.gomoku.proto.GameMoveInvalidResponse.$Shape} GameMoveInvalidResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.GameMoveInvalidResponse & com.miti99.gomoku.proto.GameMoveInvalidResponse.$Shape;

                    /**
                     * Verifies a GameMoveInvalidResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GameMoveInvalidResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GameMoveInvalidResponse
                     */
                    static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.GameMoveInvalidResponse;

                    /**
                     * Creates a plain object from a GameMoveInvalidResponse message. Also converts values to other types if specified.
                     * @param message GameMoveInvalidResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: com.miti99.gomoku.proto.GameMoveInvalidResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GameMoveInvalidResponse to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for GameMoveInvalidResponse
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace GameMoveInvalidResponse {

                    /** Properties of a GameMoveInvalidResponse. */
                    interface $Properties {

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a GameMoveInvalidResponse. */
                    type $Shape = com.miti99.gomoku.proto.GameMoveInvalidResponse.$Properties;
                }

                /**
                 * Properties of a GameMoveOccupiedResponse.
                 * @deprecated Use com.miti99.gomoku.proto.GameMoveOccupiedResponse.$Properties instead.
                 */
                interface IGameMoveOccupiedResponse extends com.miti99.gomoku.proto.GameMoveOccupiedResponse.$Properties {
                }

                /** Represents a GameMoveOccupiedResponse. */
                class GameMoveOccupiedResponse {

                    /**
                     * Constructs a new GameMoveOccupiedResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.GameMoveOccupiedResponse.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /**
                     * Creates a new GameMoveOccupiedResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GameMoveOccupiedResponse instance
                     */
                    static create(properties: com.miti99.gomoku.proto.GameMoveOccupiedResponse.$Shape): com.miti99.gomoku.proto.GameMoveOccupiedResponse & com.miti99.gomoku.proto.GameMoveOccupiedResponse.$Shape;
                    static create(properties?: com.miti99.gomoku.proto.GameMoveOccupiedResponse.$Properties): com.miti99.gomoku.proto.GameMoveOccupiedResponse;

                    /**
                     * Encodes the specified GameMoveOccupiedResponse message. Does not implicitly {@link com.miti99.gomoku.proto.GameMoveOccupiedResponse.verify|verify} messages.
                     * @param message GameMoveOccupiedResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: com.miti99.gomoku.proto.GameMoveOccupiedResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GameMoveOccupiedResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.GameMoveOccupiedResponse.verify|verify} messages.
                     * @param message GameMoveOccupiedResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: com.miti99.gomoku.proto.GameMoveOccupiedResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GameMoveOccupiedResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.GameMoveOccupiedResponse & com.miti99.gomoku.proto.GameMoveOccupiedResponse.$Shape} GameMoveOccupiedResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.GameMoveOccupiedResponse & com.miti99.gomoku.proto.GameMoveOccupiedResponse.$Shape;

                    /**
                     * Decodes a GameMoveOccupiedResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.GameMoveOccupiedResponse & com.miti99.gomoku.proto.GameMoveOccupiedResponse.$Shape} GameMoveOccupiedResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.GameMoveOccupiedResponse & com.miti99.gomoku.proto.GameMoveOccupiedResponse.$Shape;

                    /**
                     * Verifies a GameMoveOccupiedResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GameMoveOccupiedResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GameMoveOccupiedResponse
                     */
                    static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.GameMoveOccupiedResponse;

                    /**
                     * Creates a plain object from a GameMoveOccupiedResponse message. Also converts values to other types if specified.
                     * @param message GameMoveOccupiedResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: com.miti99.gomoku.proto.GameMoveOccupiedResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GameMoveOccupiedResponse to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for GameMoveOccupiedResponse
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace GameMoveOccupiedResponse {

                    /** Properties of a GameMoveOccupiedResponse. */
                    interface $Properties {

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a GameMoveOccupiedResponse. */
                    type $Shape = com.miti99.gomoku.proto.GameMoveOccupiedResponse.$Properties;
                }

                /**
                 * Properties of a GameMoveOutOfBoundsResponse.
                 * @deprecated Use com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse.$Properties instead.
                 */
                interface IGameMoveOutOfBoundsResponse extends com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse.$Properties {
                }

                /** Represents a GameMoveOutOfBoundsResponse. */
                class GameMoveOutOfBoundsResponse {

                    /**
                     * Constructs a new GameMoveOutOfBoundsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /**
                     * Creates a new GameMoveOutOfBoundsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GameMoveOutOfBoundsResponse instance
                     */
                    static create(properties: com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse.$Shape): com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse & com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse.$Shape;
                    static create(properties?: com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse.$Properties): com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse;

                    /**
                     * Encodes the specified GameMoveOutOfBoundsResponse message. Does not implicitly {@link com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse.verify|verify} messages.
                     * @param message GameMoveOutOfBoundsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GameMoveOutOfBoundsResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse.verify|verify} messages.
                     * @param message GameMoveOutOfBoundsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GameMoveOutOfBoundsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse & com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse.$Shape} GameMoveOutOfBoundsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse & com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse.$Shape;

                    /**
                     * Decodes a GameMoveOutOfBoundsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse & com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse.$Shape} GameMoveOutOfBoundsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse & com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse.$Shape;

                    /**
                     * Verifies a GameMoveOutOfBoundsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GameMoveOutOfBoundsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GameMoveOutOfBoundsResponse
                     */
                    static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse;

                    /**
                     * Creates a plain object from a GameMoveOutOfBoundsResponse message. Also converts values to other types if specified.
                     * @param message GameMoveOutOfBoundsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GameMoveOutOfBoundsResponse to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for GameMoveOutOfBoundsResponse
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace GameMoveOutOfBoundsResponse {

                    /** Properties of a GameMoveOutOfBoundsResponse. */
                    interface $Properties {

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a GameMoveOutOfBoundsResponse. */
                    type $Shape = com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse.$Properties;
                }

                /**
                 * Properties of a GameMoveNotYourTurnResponse.
                 * @deprecated Use com.miti99.gomoku.proto.GameMoveNotYourTurnResponse.$Properties instead.
                 */
                interface IGameMoveNotYourTurnResponse extends com.miti99.gomoku.proto.GameMoveNotYourTurnResponse.$Properties {
                }

                /** Represents a GameMoveNotYourTurnResponse. */
                class GameMoveNotYourTurnResponse {

                    /**
                     * Constructs a new GameMoveNotYourTurnResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.GameMoveNotYourTurnResponse.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /**
                     * Creates a new GameMoveNotYourTurnResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GameMoveNotYourTurnResponse instance
                     */
                    static create(properties: com.miti99.gomoku.proto.GameMoveNotYourTurnResponse.$Shape): com.miti99.gomoku.proto.GameMoveNotYourTurnResponse & com.miti99.gomoku.proto.GameMoveNotYourTurnResponse.$Shape;
                    static create(properties?: com.miti99.gomoku.proto.GameMoveNotYourTurnResponse.$Properties): com.miti99.gomoku.proto.GameMoveNotYourTurnResponse;

                    /**
                     * Encodes the specified GameMoveNotYourTurnResponse message. Does not implicitly {@link com.miti99.gomoku.proto.GameMoveNotYourTurnResponse.verify|verify} messages.
                     * @param message GameMoveNotYourTurnResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: com.miti99.gomoku.proto.GameMoveNotYourTurnResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GameMoveNotYourTurnResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.GameMoveNotYourTurnResponse.verify|verify} messages.
                     * @param message GameMoveNotYourTurnResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: com.miti99.gomoku.proto.GameMoveNotYourTurnResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GameMoveNotYourTurnResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.GameMoveNotYourTurnResponse & com.miti99.gomoku.proto.GameMoveNotYourTurnResponse.$Shape} GameMoveNotYourTurnResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.GameMoveNotYourTurnResponse & com.miti99.gomoku.proto.GameMoveNotYourTurnResponse.$Shape;

                    /**
                     * Decodes a GameMoveNotYourTurnResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.GameMoveNotYourTurnResponse & com.miti99.gomoku.proto.GameMoveNotYourTurnResponse.$Shape} GameMoveNotYourTurnResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.GameMoveNotYourTurnResponse & com.miti99.gomoku.proto.GameMoveNotYourTurnResponse.$Shape;

                    /**
                     * Verifies a GameMoveNotYourTurnResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GameMoveNotYourTurnResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GameMoveNotYourTurnResponse
                     */
                    static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.GameMoveNotYourTurnResponse;

                    /**
                     * Creates a plain object from a GameMoveNotYourTurnResponse message. Also converts values to other types if specified.
                     * @param message GameMoveNotYourTurnResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: com.miti99.gomoku.proto.GameMoveNotYourTurnResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GameMoveNotYourTurnResponse to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for GameMoveNotYourTurnResponse
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace GameMoveNotYourTurnResponse {

                    /** Properties of a GameMoveNotYourTurnResponse. */
                    interface $Properties {

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a GameMoveNotYourTurnResponse. */
                    type $Shape = com.miti99.gomoku.proto.GameMoveNotYourTurnResponse.$Properties;
                }

                /**
                 * Properties of a GameOverResponse.
                 * @deprecated Use com.miti99.gomoku.proto.GameOverResponse.$Properties instead.
                 */
                interface IGameOverResponse extends com.miti99.gomoku.proto.GameOverResponse.$Properties {
                }

                /** Represents a GameOverResponse. */
                class GameOverResponse {

                    /**
                     * Constructs a new GameOverResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.GameOverResponse.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** GameOverResponse result. */
                    result: com.miti99.gomoku.proto.GameResult;

                    /** GameOverResponse winnerNickname. */
                    winnerNickname: string;

                    /**
                     * Creates a new GameOverResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GameOverResponse instance
                     */
                    static create(properties: com.miti99.gomoku.proto.GameOverResponse.$Shape): com.miti99.gomoku.proto.GameOverResponse & com.miti99.gomoku.proto.GameOverResponse.$Shape;
                    static create(properties?: com.miti99.gomoku.proto.GameOverResponse.$Properties): com.miti99.gomoku.proto.GameOverResponse;

                    /**
                     * Encodes the specified GameOverResponse message. Does not implicitly {@link com.miti99.gomoku.proto.GameOverResponse.verify|verify} messages.
                     * @param message GameOverResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: com.miti99.gomoku.proto.GameOverResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GameOverResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.GameOverResponse.verify|verify} messages.
                     * @param message GameOverResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: com.miti99.gomoku.proto.GameOverResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GameOverResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.GameOverResponse & com.miti99.gomoku.proto.GameOverResponse.$Shape} GameOverResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.GameOverResponse & com.miti99.gomoku.proto.GameOverResponse.$Shape;

                    /**
                     * Decodes a GameOverResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.GameOverResponse & com.miti99.gomoku.proto.GameOverResponse.$Shape} GameOverResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.GameOverResponse & com.miti99.gomoku.proto.GameOverResponse.$Shape;

                    /**
                     * Verifies a GameOverResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GameOverResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GameOverResponse
                     */
                    static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.GameOverResponse;

                    /**
                     * Creates a plain object from a GameOverResponse message. Also converts values to other types if specified.
                     * @param message GameOverResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: com.miti99.gomoku.proto.GameOverResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GameOverResponse to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for GameOverResponse
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace GameOverResponse {

                    /** Properties of a GameOverResponse. */
                    interface $Properties {

                        /** GameOverResponse result */
                        result?: (com.miti99.gomoku.proto.GameResult|null);

                        /** GameOverResponse winnerNickname */
                        winnerNickname?: (string|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a GameOverResponse. */
                    type $Shape = com.miti99.gomoku.proto.GameOverResponse.$Properties;
                }

                /**
                 * Properties of a PveDifficultyNotSupportResponse.
                 * @deprecated Use com.miti99.gomoku.proto.PveDifficultyNotSupportResponse.$Properties instead.
                 */
                interface IPveDifficultyNotSupportResponse extends com.miti99.gomoku.proto.PveDifficultyNotSupportResponse.$Properties {
                }

                /** Represents a PveDifficultyNotSupportResponse. */
                class PveDifficultyNotSupportResponse {

                    /**
                     * Constructs a new PveDifficultyNotSupportResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.PveDifficultyNotSupportResponse.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /**
                     * Creates a new PveDifficultyNotSupportResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PveDifficultyNotSupportResponse instance
                     */
                    static create(properties: com.miti99.gomoku.proto.PveDifficultyNotSupportResponse.$Shape): com.miti99.gomoku.proto.PveDifficultyNotSupportResponse & com.miti99.gomoku.proto.PveDifficultyNotSupportResponse.$Shape;
                    static create(properties?: com.miti99.gomoku.proto.PveDifficultyNotSupportResponse.$Properties): com.miti99.gomoku.proto.PveDifficultyNotSupportResponse;

                    /**
                     * Encodes the specified PveDifficultyNotSupportResponse message. Does not implicitly {@link com.miti99.gomoku.proto.PveDifficultyNotSupportResponse.verify|verify} messages.
                     * @param message PveDifficultyNotSupportResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: com.miti99.gomoku.proto.PveDifficultyNotSupportResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PveDifficultyNotSupportResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.PveDifficultyNotSupportResponse.verify|verify} messages.
                     * @param message PveDifficultyNotSupportResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: com.miti99.gomoku.proto.PveDifficultyNotSupportResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PveDifficultyNotSupportResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.PveDifficultyNotSupportResponse & com.miti99.gomoku.proto.PveDifficultyNotSupportResponse.$Shape} PveDifficultyNotSupportResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.PveDifficultyNotSupportResponse & com.miti99.gomoku.proto.PveDifficultyNotSupportResponse.$Shape;

                    /**
                     * Decodes a PveDifficultyNotSupportResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.PveDifficultyNotSupportResponse & com.miti99.gomoku.proto.PveDifficultyNotSupportResponse.$Shape} PveDifficultyNotSupportResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.PveDifficultyNotSupportResponse & com.miti99.gomoku.proto.PveDifficultyNotSupportResponse.$Shape;

                    /**
                     * Verifies a PveDifficultyNotSupportResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PveDifficultyNotSupportResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PveDifficultyNotSupportResponse
                     */
                    static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.PveDifficultyNotSupportResponse;

                    /**
                     * Creates a plain object from a PveDifficultyNotSupportResponse message. Also converts values to other types if specified.
                     * @param message PveDifficultyNotSupportResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: com.miti99.gomoku.proto.PveDifficultyNotSupportResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PveDifficultyNotSupportResponse to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for PveDifficultyNotSupportResponse
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace PveDifficultyNotSupportResponse {

                    /** Properties of a PveDifficultyNotSupportResponse. */
                    interface $Properties {

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a PveDifficultyNotSupportResponse. */
                    type $Shape = com.miti99.gomoku.proto.PveDifficultyNotSupportResponse.$Properties;
                }

                /**
                 * Properties of a WatchGameSuccessResponse.
                 * @deprecated Use com.miti99.gomoku.proto.WatchGameSuccessResponse.$Properties instead.
                 */
                interface IWatchGameSuccessResponse extends com.miti99.gomoku.proto.WatchGameSuccessResponse.$Properties {
                }

                /** Represents a WatchGameSuccessResponse. */
                class WatchGameSuccessResponse {

                    /**
                     * Constructs a new WatchGameSuccessResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.WatchGameSuccessResponse.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** WatchGameSuccessResponse owner. */
                    owner: string;

                    /** WatchGameSuccessResponse status. */
                    status: com.miti99.gomoku.proto.RoomStatus;

                    /**
                     * Creates a new WatchGameSuccessResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WatchGameSuccessResponse instance
                     */
                    static create(properties: com.miti99.gomoku.proto.WatchGameSuccessResponse.$Shape): com.miti99.gomoku.proto.WatchGameSuccessResponse & com.miti99.gomoku.proto.WatchGameSuccessResponse.$Shape;
                    static create(properties?: com.miti99.gomoku.proto.WatchGameSuccessResponse.$Properties): com.miti99.gomoku.proto.WatchGameSuccessResponse;

                    /**
                     * Encodes the specified WatchGameSuccessResponse message. Does not implicitly {@link com.miti99.gomoku.proto.WatchGameSuccessResponse.verify|verify} messages.
                     * @param message WatchGameSuccessResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: com.miti99.gomoku.proto.WatchGameSuccessResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified WatchGameSuccessResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.WatchGameSuccessResponse.verify|verify} messages.
                     * @param message WatchGameSuccessResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: com.miti99.gomoku.proto.WatchGameSuccessResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WatchGameSuccessResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.WatchGameSuccessResponse & com.miti99.gomoku.proto.WatchGameSuccessResponse.$Shape} WatchGameSuccessResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.WatchGameSuccessResponse & com.miti99.gomoku.proto.WatchGameSuccessResponse.$Shape;

                    /**
                     * Decodes a WatchGameSuccessResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.WatchGameSuccessResponse & com.miti99.gomoku.proto.WatchGameSuccessResponse.$Shape} WatchGameSuccessResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.WatchGameSuccessResponse & com.miti99.gomoku.proto.WatchGameSuccessResponse.$Shape;

                    /**
                     * Verifies a WatchGameSuccessResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a WatchGameSuccessResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns WatchGameSuccessResponse
                     */
                    static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.WatchGameSuccessResponse;

                    /**
                     * Creates a plain object from a WatchGameSuccessResponse message. Also converts values to other types if specified.
                     * @param message WatchGameSuccessResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: com.miti99.gomoku.proto.WatchGameSuccessResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this WatchGameSuccessResponse to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for WatchGameSuccessResponse
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace WatchGameSuccessResponse {

                    /** Properties of a WatchGameSuccessResponse. */
                    interface $Properties {

                        /** WatchGameSuccessResponse owner */
                        owner?: (string|null);

                        /** WatchGameSuccessResponse status */
                        status?: (com.miti99.gomoku.proto.RoomStatus|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a WatchGameSuccessResponse. */
                    type $Shape = com.miti99.gomoku.proto.WatchGameSuccessResponse.$Properties;
                }

                /**
                 * Properties of a ClientExitResponse.
                 * @deprecated Use com.miti99.gomoku.proto.ClientExitResponse.$Properties instead.
                 */
                interface IClientExitResponse extends com.miti99.gomoku.proto.ClientExitResponse.$Properties {
                }

                /** Represents a ClientExitResponse. */
                class ClientExitResponse {

                    /**
                     * Constructs a new ClientExitResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.ClientExitResponse.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** ClientExitResponse roomId. */
                    roomId: number;

                    /** ClientExitResponse exitClientId. */
                    exitClientId: number;

                    /** ClientExitResponse exitClientNickname. */
                    exitClientNickname: string;

                    /**
                     * Creates a new ClientExitResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ClientExitResponse instance
                     */
                    static create(properties: com.miti99.gomoku.proto.ClientExitResponse.$Shape): com.miti99.gomoku.proto.ClientExitResponse & com.miti99.gomoku.proto.ClientExitResponse.$Shape;
                    static create(properties?: com.miti99.gomoku.proto.ClientExitResponse.$Properties): com.miti99.gomoku.proto.ClientExitResponse;

                    /**
                     * Encodes the specified ClientExitResponse message. Does not implicitly {@link com.miti99.gomoku.proto.ClientExitResponse.verify|verify} messages.
                     * @param message ClientExitResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: com.miti99.gomoku.proto.ClientExitResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ClientExitResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.ClientExitResponse.verify|verify} messages.
                     * @param message ClientExitResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: com.miti99.gomoku.proto.ClientExitResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ClientExitResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.ClientExitResponse & com.miti99.gomoku.proto.ClientExitResponse.$Shape} ClientExitResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.ClientExitResponse & com.miti99.gomoku.proto.ClientExitResponse.$Shape;

                    /**
                     * Decodes a ClientExitResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.ClientExitResponse & com.miti99.gomoku.proto.ClientExitResponse.$Shape} ClientExitResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.ClientExitResponse & com.miti99.gomoku.proto.ClientExitResponse.$Shape;

                    /**
                     * Verifies a ClientExitResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ClientExitResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ClientExitResponse
                     */
                    static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.ClientExitResponse;

                    /**
                     * Creates a plain object from a ClientExitResponse message. Also converts values to other types if specified.
                     * @param message ClientExitResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: com.miti99.gomoku.proto.ClientExitResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ClientExitResponse to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for ClientExitResponse
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace ClientExitResponse {

                    /** Properties of a ClientExitResponse. */
                    interface $Properties {

                        /** ClientExitResponse roomId */
                        roomId?: (number|null);

                        /** ClientExitResponse exitClientId */
                        exitClientId?: (number|null);

                        /** ClientExitResponse exitClientNickname */
                        exitClientNickname?: (string|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a ClientExitResponse. */
                    type $Shape = com.miti99.gomoku.proto.ClientExitResponse.$Properties;
                }

                /**
                 * Properties of a SpectatorCannotActResponse.
                 * @deprecated Use com.miti99.gomoku.proto.SpectatorCannotActResponse.$Properties instead.
                 */
                interface ISpectatorCannotActResponse extends com.miti99.gomoku.proto.SpectatorCannotActResponse.$Properties {
                }

                /** Represents a SpectatorCannotActResponse. */
                class SpectatorCannotActResponse {

                    /**
                     * Constructs a new SpectatorCannotActResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.miti99.gomoku.proto.SpectatorCannotActResponse.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /**
                     * Creates a new SpectatorCannotActResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SpectatorCannotActResponse instance
                     */
                    static create(properties: com.miti99.gomoku.proto.SpectatorCannotActResponse.$Shape): com.miti99.gomoku.proto.SpectatorCannotActResponse & com.miti99.gomoku.proto.SpectatorCannotActResponse.$Shape;
                    static create(properties?: com.miti99.gomoku.proto.SpectatorCannotActResponse.$Properties): com.miti99.gomoku.proto.SpectatorCannotActResponse;

                    /**
                     * Encodes the specified SpectatorCannotActResponse message. Does not implicitly {@link com.miti99.gomoku.proto.SpectatorCannotActResponse.verify|verify} messages.
                     * @param message SpectatorCannotActResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: com.miti99.gomoku.proto.SpectatorCannotActResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SpectatorCannotActResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.SpectatorCannotActResponse.verify|verify} messages.
                     * @param message SpectatorCannotActResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: com.miti99.gomoku.proto.SpectatorCannotActResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SpectatorCannotActResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.SpectatorCannotActResponse & com.miti99.gomoku.proto.SpectatorCannotActResponse.$Shape} SpectatorCannotActResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.miti99.gomoku.proto.SpectatorCannotActResponse & com.miti99.gomoku.proto.SpectatorCannotActResponse.$Shape;

                    /**
                     * Decodes a SpectatorCannotActResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.SpectatorCannotActResponse & com.miti99.gomoku.proto.SpectatorCannotActResponse.$Shape} SpectatorCannotActResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.miti99.gomoku.proto.SpectatorCannotActResponse & com.miti99.gomoku.proto.SpectatorCannotActResponse.$Shape;

                    /**
                     * Verifies a SpectatorCannotActResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SpectatorCannotActResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SpectatorCannotActResponse
                     */
                    static fromObject(object: { [k: string]: any }): com.miti99.gomoku.proto.SpectatorCannotActResponse;

                    /**
                     * Creates a plain object from a SpectatorCannotActResponse message. Also converts values to other types if specified.
                     * @param message SpectatorCannotActResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: com.miti99.gomoku.proto.SpectatorCannotActResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SpectatorCannotActResponse to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for SpectatorCannotActResponse
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace SpectatorCannotActResponse {

                    /** Properties of a SpectatorCannotActResponse. */
                    interface $Properties {

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a SpectatorCannotActResponse. */
                    type $Shape = com.miti99.gomoku.proto.SpectatorCannotActResponse.$Properties;
                }
            }
        }
    }
}
