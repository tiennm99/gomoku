/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-mixed-operators, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars, default-case, jsdoc/require-param*/
import $protobuf from "protobufjs/minimal.js";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
const $Object = $util.global.Object, $undefined = $util.global.undefined, $Error = $util.global.Error, $TypeError = $util.global.TypeError, $String = $util.global.String, $Number = $util.global.Number, $Array = $util.global.Array;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const com = $root.com = (() => {

    /**
     * Namespace com.
     * @exports com
     * @namespace
     */
    const com = {};

    com.miti99 = (function() {

        /**
         * Namespace miti99.
         * @memberof com
         * @namespace
         */
        const miti99 = {};

        miti99.gomoku = (function() {

            /**
             * Namespace gomoku.
             * @memberof com.miti99
             * @namespace
             */
            const gomoku = {};

            gomoku.proto = (function() {

                /**
                 * Namespace proto.
                 * @memberof com.miti99.gomoku
                 * @namespace
                 */
                const proto = {};

                proto.Request = (function() {

                    /**
                     * Properties of a Request.
                     * @typedef {Object} com.miti99.gomoku.proto.Request.$Properties
                     * @property {com.miti99.gomoku.proto.HeartbeatRequest.$Properties|null} [heartbeat] Request heartbeat
                     * @property {com.miti99.gomoku.proto.SetNicknameRequest.$Properties|null} [setNickname] Request setNickname
                     * @property {com.miti99.gomoku.proto.SetClientInfoRequest.$Properties|null} [setClientInfo] Request setClientInfo
                     * @property {com.miti99.gomoku.proto.CreateRoomRequest.$Properties|null} [createRoom] Request createRoom
                     * @property {com.miti99.gomoku.proto.CreatePveRoomRequest.$Properties|null} [createPveRoom] Request createPveRoom
                     * @property {com.miti99.gomoku.proto.GetRoomsRequest.$Properties|null} [getRooms] Request getRooms
                     * @property {com.miti99.gomoku.proto.JoinRoomRequest.$Properties|null} [joinRoom] Request joinRoom
                     * @property {com.miti99.gomoku.proto.GameMoveRequest.$Properties|null} [gameMove] Request gameMove
                     * @property {com.miti99.gomoku.proto.GameResetRequest.$Properties|null} [gameReset] Request gameReset
                     * @property {com.miti99.gomoku.proto.WatchGameRequest.$Properties|null} [watchGame] Request watchGame
                     * @property {com.miti99.gomoku.proto.WatchGameExitRequest.$Properties|null} [watchGameExit] Request watchGameExit
                     * @property {com.miti99.gomoku.proto.ClientExitRequest.$Properties|null} [clientExit] Request clientExit
                     * @property {"heartbeat"|"setNickname"|"setClientInfo"|"createRoom"|"createPveRoom"|"getRooms"|"joinRoom"|"gameMove"|"gameReset"|"watchGame"|"watchGameExit"|"clientExit"} [payload] Request payload
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */

                    /**
                     * Properties of a Request.
                     * @memberof com.miti99.gomoku.proto
                     * @interface IRequest
                     * @augments com.miti99.gomoku.proto.Request.$Properties
                     * @deprecated Use com.miti99.gomoku.proto.Request.$Properties instead.
                     */

                    /**
                     * Narrowed shape of a Request.
                     * @typedef {{
                     *   heartbeat?: com.miti99.gomoku.proto.HeartbeatRequest.$Shape|null;
                     *   setNickname?: com.miti99.gomoku.proto.SetNicknameRequest.$Shape|null;
                     *   setClientInfo?: com.miti99.gomoku.proto.SetClientInfoRequest.$Shape|null;
                     *   createRoom?: com.miti99.gomoku.proto.CreateRoomRequest.$Shape|null;
                     *   createPveRoom?: com.miti99.gomoku.proto.CreatePveRoomRequest.$Shape|null;
                     *   getRooms?: com.miti99.gomoku.proto.GetRoomsRequest.$Shape|null;
                     *   joinRoom?: com.miti99.gomoku.proto.JoinRoomRequest.$Shape|null;
                     *   gameMove?: com.miti99.gomoku.proto.GameMoveRequest.$Shape|null;
                     *   gameReset?: com.miti99.gomoku.proto.GameResetRequest.$Shape|null;
                     *   watchGame?: com.miti99.gomoku.proto.WatchGameRequest.$Shape|null;
                     *   watchGameExit?: com.miti99.gomoku.proto.WatchGameExitRequest.$Shape|null;
                     *   clientExit?: com.miti99.gomoku.proto.ClientExitRequest.$Shape|null;
                     *   $unknowns?: Array.<Uint8Array>;
                     * } & (
                     *   ({ payload?: undefined; heartbeat?: null; setNickname?: null; setClientInfo?: null; createRoom?: null; createPveRoom?: null; getRooms?: null; joinRoom?: null; gameMove?: null; gameReset?: null; watchGame?: null; watchGameExit?: null; clientExit?: null }|{ payload?: "heartbeat"; heartbeat: com.miti99.gomoku.proto.HeartbeatRequest.$Shape; setNickname?: null; setClientInfo?: null; createRoom?: null; createPveRoom?: null; getRooms?: null; joinRoom?: null; gameMove?: null; gameReset?: null; watchGame?: null; watchGameExit?: null; clientExit?: null }|{ payload?: "setNickname"; heartbeat?: null; setNickname: com.miti99.gomoku.proto.SetNicknameRequest.$Shape; setClientInfo?: null; createRoom?: null; createPveRoom?: null; getRooms?: null; joinRoom?: null; gameMove?: null; gameReset?: null; watchGame?: null; watchGameExit?: null; clientExit?: null }|{ payload?: "setClientInfo"; heartbeat?: null; setNickname?: null; setClientInfo: com.miti99.gomoku.proto.SetClientInfoRequest.$Shape; createRoom?: null; createPveRoom?: null; getRooms?: null; joinRoom?: null; gameMove?: null; gameReset?: null; watchGame?: null; watchGameExit?: null; clientExit?: null }|{ payload?: "createRoom"; heartbeat?: null; setNickname?: null; setClientInfo?: null; createRoom: com.miti99.gomoku.proto.CreateRoomRequest.$Shape; createPveRoom?: null; getRooms?: null; joinRoom?: null; gameMove?: null; gameReset?: null; watchGame?: null; watchGameExit?: null; clientExit?: null }|{ payload?: "createPveRoom"; heartbeat?: null; setNickname?: null; setClientInfo?: null; createRoom?: null; createPveRoom: com.miti99.gomoku.proto.CreatePveRoomRequest.$Shape; getRooms?: null; joinRoom?: null; gameMove?: null; gameReset?: null; watchGame?: null; watchGameExit?: null; clientExit?: null }|{ payload?: "getRooms"; heartbeat?: null; setNickname?: null; setClientInfo?: null; createRoom?: null; createPveRoom?: null; getRooms: com.miti99.gomoku.proto.GetRoomsRequest.$Shape; joinRoom?: null; gameMove?: null; gameReset?: null; watchGame?: null; watchGameExit?: null; clientExit?: null }|{ payload?: "joinRoom"; heartbeat?: null; setNickname?: null; setClientInfo?: null; createRoom?: null; createPveRoom?: null; getRooms?: null; joinRoom: com.miti99.gomoku.proto.JoinRoomRequest.$Shape; gameMove?: null; gameReset?: null; watchGame?: null; watchGameExit?: null; clientExit?: null }|{ payload?: "gameMove"; heartbeat?: null; setNickname?: null; setClientInfo?: null; createRoom?: null; createPveRoom?: null; getRooms?: null; joinRoom?: null; gameMove: com.miti99.gomoku.proto.GameMoveRequest.$Shape; gameReset?: null; watchGame?: null; watchGameExit?: null; clientExit?: null }|{ payload?: "gameReset"; heartbeat?: null; setNickname?: null; setClientInfo?: null; createRoom?: null; createPveRoom?: null; getRooms?: null; joinRoom?: null; gameMove?: null; gameReset: com.miti99.gomoku.proto.GameResetRequest.$Shape; watchGame?: null; watchGameExit?: null; clientExit?: null }|{ payload?: "watchGame"; heartbeat?: null; setNickname?: null; setClientInfo?: null; createRoom?: null; createPveRoom?: null; getRooms?: null; joinRoom?: null; gameMove?: null; gameReset?: null; watchGame: com.miti99.gomoku.proto.WatchGameRequest.$Shape; watchGameExit?: null; clientExit?: null }|{ payload?: "watchGameExit"; heartbeat?: null; setNickname?: null; setClientInfo?: null; createRoom?: null; createPveRoom?: null; getRooms?: null; joinRoom?: null; gameMove?: null; gameReset?: null; watchGame?: null; watchGameExit: com.miti99.gomoku.proto.WatchGameExitRequest.$Shape; clientExit?: null }|{ payload?: "clientExit"; heartbeat?: null; setNickname?: null; setClientInfo?: null; createRoom?: null; createPveRoom?: null; getRooms?: null; joinRoom?: null; gameMove?: null; gameReset?: null; watchGame?: null; watchGameExit?: null; clientExit: com.miti99.gomoku.proto.ClientExitRequest.$Shape })
                     * )} com.miti99.gomoku.proto.Request.$Shape
                     */

                    /**
                     * Constructs a new Request.
                     * @memberof com.miti99.gomoku.proto
                     * @classdesc Represents a Request.
                     * @constructor
                     * @param {com.miti99.gomoku.proto.Request.$Properties=} [properties] Properties to set
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */
                    const Request = function (properties) {
                        if (properties)
                            for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                    this[keys[i]] = properties[keys[i]];
                    };

                    /**
                     * Request heartbeat.
                     * @member {com.miti99.gomoku.proto.HeartbeatRequest.$Properties|null|undefined} heartbeat
                     * @memberof com.miti99.gomoku.proto.Request
                     * @instance
                     */
                    Request.prototype.heartbeat = null;

                    /**
                     * Request setNickname.
                     * @member {com.miti99.gomoku.proto.SetNicknameRequest.$Properties|null|undefined} setNickname
                     * @memberof com.miti99.gomoku.proto.Request
                     * @instance
                     */
                    Request.prototype.setNickname = null;

                    /**
                     * Request setClientInfo.
                     * @member {com.miti99.gomoku.proto.SetClientInfoRequest.$Properties|null|undefined} setClientInfo
                     * @memberof com.miti99.gomoku.proto.Request
                     * @instance
                     */
                    Request.prototype.setClientInfo = null;

                    /**
                     * Request createRoom.
                     * @member {com.miti99.gomoku.proto.CreateRoomRequest.$Properties|null|undefined} createRoom
                     * @memberof com.miti99.gomoku.proto.Request
                     * @instance
                     */
                    Request.prototype.createRoom = null;

                    /**
                     * Request createPveRoom.
                     * @member {com.miti99.gomoku.proto.CreatePveRoomRequest.$Properties|null|undefined} createPveRoom
                     * @memberof com.miti99.gomoku.proto.Request
                     * @instance
                     */
                    Request.prototype.createPveRoom = null;

                    /**
                     * Request getRooms.
                     * @member {com.miti99.gomoku.proto.GetRoomsRequest.$Properties|null|undefined} getRooms
                     * @memberof com.miti99.gomoku.proto.Request
                     * @instance
                     */
                    Request.prototype.getRooms = null;

                    /**
                     * Request joinRoom.
                     * @member {com.miti99.gomoku.proto.JoinRoomRequest.$Properties|null|undefined} joinRoom
                     * @memberof com.miti99.gomoku.proto.Request
                     * @instance
                     */
                    Request.prototype.joinRoom = null;

                    /**
                     * Request gameMove.
                     * @member {com.miti99.gomoku.proto.GameMoveRequest.$Properties|null|undefined} gameMove
                     * @memberof com.miti99.gomoku.proto.Request
                     * @instance
                     */
                    Request.prototype.gameMove = null;

                    /**
                     * Request gameReset.
                     * @member {com.miti99.gomoku.proto.GameResetRequest.$Properties|null|undefined} gameReset
                     * @memberof com.miti99.gomoku.proto.Request
                     * @instance
                     */
                    Request.prototype.gameReset = null;

                    /**
                     * Request watchGame.
                     * @member {com.miti99.gomoku.proto.WatchGameRequest.$Properties|null|undefined} watchGame
                     * @memberof com.miti99.gomoku.proto.Request
                     * @instance
                     */
                    Request.prototype.watchGame = null;

                    /**
                     * Request watchGameExit.
                     * @member {com.miti99.gomoku.proto.WatchGameExitRequest.$Properties|null|undefined} watchGameExit
                     * @memberof com.miti99.gomoku.proto.Request
                     * @instance
                     */
                    Request.prototype.watchGameExit = null;

                    /**
                     * Request clientExit.
                     * @member {com.miti99.gomoku.proto.ClientExitRequest.$Properties|null|undefined} clientExit
                     * @memberof com.miti99.gomoku.proto.Request
                     * @instance
                     */
                    Request.prototype.clientExit = null;

                    // OneOf field names bound to virtual getters and setters
                    let $oneOfFields;

                    /**
                     * Request payload.
                     * @member {"heartbeat"|"setNickname"|"setClientInfo"|"createRoom"|"createPveRoom"|"getRooms"|"joinRoom"|"gameMove"|"gameReset"|"watchGame"|"watchGameExit"|"clientExit"|undefined} payload
                     * @memberof com.miti99.gomoku.proto.Request
                     * @instance
                     */
                    $Object.defineProperty(Request.prototype, "payload", {
                        get: $util.oneOfGetter($oneOfFields = ["heartbeat", "setNickname", "setClientInfo", "createRoom", "createPveRoom", "getRooms", "joinRoom", "gameMove", "gameReset", "watchGame", "watchGameExit", "clientExit"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new Request instance using the specified properties.
                     * @function create
                     * @memberof com.miti99.gomoku.proto.Request
                     * @static
                     * @param {com.miti99.gomoku.proto.Request.$Properties=} [properties] Properties to set
                     * @returns {com.miti99.gomoku.proto.Request} Request instance
                     * @type {{
                     *   (properties: com.miti99.gomoku.proto.Request.$Shape): com.miti99.gomoku.proto.Request & com.miti99.gomoku.proto.Request.$Shape;
                     *   (properties?: com.miti99.gomoku.proto.Request.$Properties): com.miti99.gomoku.proto.Request;
                     * }}
                     */
                    Request.create = function(properties) {
                        return new Request(properties);
                    };

                    /**
                     * Encodes the specified Request message. Does not implicitly {@link com.miti99.gomoku.proto.Request.verify|verify} messages.
                     * @function encode
                     * @memberof com.miti99.gomoku.proto.Request
                     * @static
                     * @param {com.miti99.gomoku.proto.Request.$Properties} message Request message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Request.encode = function (message, writer, _depth) {
                        if (!writer)
                            writer = $Writer.create();
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        if (message.heartbeat != null && $Object.hasOwnProperty.call(message, "heartbeat"))
                            $root.com.miti99.gomoku.proto.HeartbeatRequest.encode(message.heartbeat, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                        if (message.setNickname != null && $Object.hasOwnProperty.call(message, "setNickname"))
                            $root.com.miti99.gomoku.proto.SetNicknameRequest.encode(message.setNickname, writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
                        if (message.setClientInfo != null && $Object.hasOwnProperty.call(message, "setClientInfo"))
                            $root.com.miti99.gomoku.proto.SetClientInfoRequest.encode(message.setClientInfo, writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
                        if (message.createRoom != null && $Object.hasOwnProperty.call(message, "createRoom"))
                            $root.com.miti99.gomoku.proto.CreateRoomRequest.encode(message.createRoom, writer.uint32(/* id 4, wireType 2 =*/34).fork(), _depth + 1).ldelim();
                        if (message.createPveRoom != null && $Object.hasOwnProperty.call(message, "createPveRoom"))
                            $root.com.miti99.gomoku.proto.CreatePveRoomRequest.encode(message.createPveRoom, writer.uint32(/* id 5, wireType 2 =*/42).fork(), _depth + 1).ldelim();
                        if (message.getRooms != null && $Object.hasOwnProperty.call(message, "getRooms"))
                            $root.com.miti99.gomoku.proto.GetRoomsRequest.encode(message.getRooms, writer.uint32(/* id 6, wireType 2 =*/50).fork(), _depth + 1).ldelim();
                        if (message.joinRoom != null && $Object.hasOwnProperty.call(message, "joinRoom"))
                            $root.com.miti99.gomoku.proto.JoinRoomRequest.encode(message.joinRoom, writer.uint32(/* id 7, wireType 2 =*/58).fork(), _depth + 1).ldelim();
                        if (message.gameMove != null && $Object.hasOwnProperty.call(message, "gameMove"))
                            $root.com.miti99.gomoku.proto.GameMoveRequest.encode(message.gameMove, writer.uint32(/* id 8, wireType 2 =*/66).fork(), _depth + 1).ldelim();
                        if (message.gameReset != null && $Object.hasOwnProperty.call(message, "gameReset"))
                            $root.com.miti99.gomoku.proto.GameResetRequest.encode(message.gameReset, writer.uint32(/* id 9, wireType 2 =*/74).fork(), _depth + 1).ldelim();
                        if (message.watchGame != null && $Object.hasOwnProperty.call(message, "watchGame"))
                            $root.com.miti99.gomoku.proto.WatchGameRequest.encode(message.watchGame, writer.uint32(/* id 10, wireType 2 =*/82).fork(), _depth + 1).ldelim();
                        if (message.watchGameExit != null && $Object.hasOwnProperty.call(message, "watchGameExit"))
                            $root.com.miti99.gomoku.proto.WatchGameExitRequest.encode(message.watchGameExit, writer.uint32(/* id 11, wireType 2 =*/90).fork(), _depth + 1).ldelim();
                        if (message.clientExit != null && $Object.hasOwnProperty.call(message, "clientExit"))
                            $root.com.miti99.gomoku.proto.ClientExitRequest.encode(message.clientExit, writer.uint32(/* id 12, wireType 2 =*/98).fork(), _depth + 1).ldelim();
                        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                            for (let i = 0; i < message.$unknowns.length; ++i)
                                writer.raw(message.$unknowns[i]);
                        return writer;
                    };

                    /**
                     * Encodes the specified Request message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.Request.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.miti99.gomoku.proto.Request
                     * @static
                     * @param {com.miti99.gomoku.proto.Request.$Properties} message Request message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Request.encodeDelimited = function(message, writer) {
                        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                    };

                    /**
                     * Decodes a Request message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.miti99.gomoku.proto.Request
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.Request & com.miti99.gomoku.proto.Request.$Shape} Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Request.decode = function (reader, length, _end, _depth, _target) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $Reader.recursionLimit)
                            throw $Error("max depth exceeded");
                        let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.com.miti99.gomoku.proto.Request();
                        while (reader.pos < end) {
                            let start = reader.pos;
                            let tag = reader.tag();
                            if (tag === _end) {
                                _end = $undefined;
                                break;
                            }
                            let wireType = tag & 7;
                            switch (tag >>>= 3) {
                            case 1: {
                                    if (wireType !== 2)
                                        break;
                                    message.heartbeat = $root.com.miti99.gomoku.proto.HeartbeatRequest.decode(reader, reader.uint32(), $undefined, _depth + 1, message.heartbeat);
                                    message.payload = "heartbeat";
                                    continue;
                                }
                            case 2: {
                                    if (wireType !== 2)
                                        break;
                                    message.setNickname = $root.com.miti99.gomoku.proto.SetNicknameRequest.decode(reader, reader.uint32(), $undefined, _depth + 1, message.setNickname);
                                    message.payload = "setNickname";
                                    continue;
                                }
                            case 3: {
                                    if (wireType !== 2)
                                        break;
                                    message.setClientInfo = $root.com.miti99.gomoku.proto.SetClientInfoRequest.decode(reader, reader.uint32(), $undefined, _depth + 1, message.setClientInfo);
                                    message.payload = "setClientInfo";
                                    continue;
                                }
                            case 4: {
                                    if (wireType !== 2)
                                        break;
                                    message.createRoom = $root.com.miti99.gomoku.proto.CreateRoomRequest.decode(reader, reader.uint32(), $undefined, _depth + 1, message.createRoom);
                                    message.payload = "createRoom";
                                    continue;
                                }
                            case 5: {
                                    if (wireType !== 2)
                                        break;
                                    message.createPveRoom = $root.com.miti99.gomoku.proto.CreatePveRoomRequest.decode(reader, reader.uint32(), $undefined, _depth + 1, message.createPveRoom);
                                    message.payload = "createPveRoom";
                                    continue;
                                }
                            case 6: {
                                    if (wireType !== 2)
                                        break;
                                    message.getRooms = $root.com.miti99.gomoku.proto.GetRoomsRequest.decode(reader, reader.uint32(), $undefined, _depth + 1, message.getRooms);
                                    message.payload = "getRooms";
                                    continue;
                                }
                            case 7: {
                                    if (wireType !== 2)
                                        break;
                                    message.joinRoom = $root.com.miti99.gomoku.proto.JoinRoomRequest.decode(reader, reader.uint32(), $undefined, _depth + 1, message.joinRoom);
                                    message.payload = "joinRoom";
                                    continue;
                                }
                            case 8: {
                                    if (wireType !== 2)
                                        break;
                                    message.gameMove = $root.com.miti99.gomoku.proto.GameMoveRequest.decode(reader, reader.uint32(), $undefined, _depth + 1, message.gameMove);
                                    message.payload = "gameMove";
                                    continue;
                                }
                            case 9: {
                                    if (wireType !== 2)
                                        break;
                                    message.gameReset = $root.com.miti99.gomoku.proto.GameResetRequest.decode(reader, reader.uint32(), $undefined, _depth + 1, message.gameReset);
                                    message.payload = "gameReset";
                                    continue;
                                }
                            case 10: {
                                    if (wireType !== 2)
                                        break;
                                    message.watchGame = $root.com.miti99.gomoku.proto.WatchGameRequest.decode(reader, reader.uint32(), $undefined, _depth + 1, message.watchGame);
                                    message.payload = "watchGame";
                                    continue;
                                }
                            case 11: {
                                    if (wireType !== 2)
                                        break;
                                    message.watchGameExit = $root.com.miti99.gomoku.proto.WatchGameExitRequest.decode(reader, reader.uint32(), $undefined, _depth + 1, message.watchGameExit);
                                    message.payload = "watchGameExit";
                                    continue;
                                }
                            case 12: {
                                    if (wireType !== 2)
                                        break;
                                    message.clientExit = $root.com.miti99.gomoku.proto.ClientExitRequest.decode(reader, reader.uint32(), $undefined, _depth + 1, message.clientExit);
                                    message.payload = "clientExit";
                                    continue;
                                }
                            }
                            reader.skipType(wireType, _depth, tag);
                            if (!reader.discardUnknown) {
                                $util.makeProp(message, "$unknowns", false);
                                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                            }
                        }
                        if (_end !== $undefined)
                            throw $Error("missing end group");
                        return message;
                    };

                    /**
                     * Decodes a Request message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.miti99.gomoku.proto.Request
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.Request & com.miti99.gomoku.proto.Request.$Shape} Request
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Request.decodeDelimited = function(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Request message.
                     * @function verify
                     * @memberof com.miti99.gomoku.proto.Request
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Request.verify = function (message, _depth) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            return "max depth exceeded";
                        let properties = {};
                        if (message.heartbeat != null && $Object.hasOwnProperty.call(message, "heartbeat")) {
                            properties.payload = 1;
                            {
                                let error = $root.com.miti99.gomoku.proto.HeartbeatRequest.verify(message.heartbeat, _depth + 1);
                                if (error)
                                    return "heartbeat." + error;
                            }
                        }
                        if (message.setNickname != null && $Object.hasOwnProperty.call(message, "setNickname")) {
                            if (properties.payload === 1)
                                return "payload: multiple values";
                            properties.payload = 1;
                            {
                                let error = $root.com.miti99.gomoku.proto.SetNicknameRequest.verify(message.setNickname, _depth + 1);
                                if (error)
                                    return "setNickname." + error;
                            }
                        }
                        if (message.setClientInfo != null && $Object.hasOwnProperty.call(message, "setClientInfo")) {
                            if (properties.payload === 1)
                                return "payload: multiple values";
                            properties.payload = 1;
                            {
                                let error = $root.com.miti99.gomoku.proto.SetClientInfoRequest.verify(message.setClientInfo, _depth + 1);
                                if (error)
                                    return "setClientInfo." + error;
                            }
                        }
                        if (message.createRoom != null && $Object.hasOwnProperty.call(message, "createRoom")) {
                            if (properties.payload === 1)
                                return "payload: multiple values";
                            properties.payload = 1;
                            {
                                let error = $root.com.miti99.gomoku.proto.CreateRoomRequest.verify(message.createRoom, _depth + 1);
                                if (error)
                                    return "createRoom." + error;
                            }
                        }
                        if (message.createPveRoom != null && $Object.hasOwnProperty.call(message, "createPveRoom")) {
                            if (properties.payload === 1)
                                return "payload: multiple values";
                            properties.payload = 1;
                            {
                                let error = $root.com.miti99.gomoku.proto.CreatePveRoomRequest.verify(message.createPveRoom, _depth + 1);
                                if (error)
                                    return "createPveRoom." + error;
                            }
                        }
                        if (message.getRooms != null && $Object.hasOwnProperty.call(message, "getRooms")) {
                            if (properties.payload === 1)
                                return "payload: multiple values";
                            properties.payload = 1;
                            {
                                let error = $root.com.miti99.gomoku.proto.GetRoomsRequest.verify(message.getRooms, _depth + 1);
                                if (error)
                                    return "getRooms." + error;
                            }
                        }
                        if (message.joinRoom != null && $Object.hasOwnProperty.call(message, "joinRoom")) {
                            if (properties.payload === 1)
                                return "payload: multiple values";
                            properties.payload = 1;
                            {
                                let error = $root.com.miti99.gomoku.proto.JoinRoomRequest.verify(message.joinRoom, _depth + 1);
                                if (error)
                                    return "joinRoom." + error;
                            }
                        }
                        if (message.gameMove != null && $Object.hasOwnProperty.call(message, "gameMove")) {
                            if (properties.payload === 1)
                                return "payload: multiple values";
                            properties.payload = 1;
                            {
                                let error = $root.com.miti99.gomoku.proto.GameMoveRequest.verify(message.gameMove, _depth + 1);
                                if (error)
                                    return "gameMove." + error;
                            }
                        }
                        if (message.gameReset != null && $Object.hasOwnProperty.call(message, "gameReset")) {
                            if (properties.payload === 1)
                                return "payload: multiple values";
                            properties.payload = 1;
                            {
                                let error = $root.com.miti99.gomoku.proto.GameResetRequest.verify(message.gameReset, _depth + 1);
                                if (error)
                                    return "gameReset." + error;
                            }
                        }
                        if (message.watchGame != null && $Object.hasOwnProperty.call(message, "watchGame")) {
                            if (properties.payload === 1)
                                return "payload: multiple values";
                            properties.payload = 1;
                            {
                                let error = $root.com.miti99.gomoku.proto.WatchGameRequest.verify(message.watchGame, _depth + 1);
                                if (error)
                                    return "watchGame." + error;
                            }
                        }
                        if (message.watchGameExit != null && $Object.hasOwnProperty.call(message, "watchGameExit")) {
                            if (properties.payload === 1)
                                return "payload: multiple values";
                            properties.payload = 1;
                            {
                                let error = $root.com.miti99.gomoku.proto.WatchGameExitRequest.verify(message.watchGameExit, _depth + 1);
                                if (error)
                                    return "watchGameExit." + error;
                            }
                        }
                        if (message.clientExit != null && $Object.hasOwnProperty.call(message, "clientExit")) {
                            if (properties.payload === 1)
                                return "payload: multiple values";
                            properties.payload = 1;
                            {
                                let error = $root.com.miti99.gomoku.proto.ClientExitRequest.verify(message.clientExit, _depth + 1);
                                if (error)
                                    return "clientExit." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a Request message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.miti99.gomoku.proto.Request
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.miti99.gomoku.proto.Request} Request
                     */
                    Request.fromObject = function (object, _depth) {
                        if (object instanceof $root.com.miti99.gomoku.proto.Request)
                            return object;
                        if (!$util.isObject(object))
                            throw $TypeError(".com.miti99.gomoku.proto.Request: object expected");
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        let message = new $root.com.miti99.gomoku.proto.Request();
                        if (object.heartbeat != null) {
                            if (!$util.isObject(object.heartbeat))
                                throw $TypeError(".com.miti99.gomoku.proto.Request.heartbeat: object expected");
                            message.heartbeat = $root.com.miti99.gomoku.proto.HeartbeatRequest.fromObject(object.heartbeat, _depth + 1);
                        }
                        if (object.setNickname != null) {
                            if (!$util.isObject(object.setNickname))
                                throw $TypeError(".com.miti99.gomoku.proto.Request.setNickname: object expected");
                            message.setNickname = $root.com.miti99.gomoku.proto.SetNicknameRequest.fromObject(object.setNickname, _depth + 1);
                        }
                        if (object.setClientInfo != null) {
                            if (!$util.isObject(object.setClientInfo))
                                throw $TypeError(".com.miti99.gomoku.proto.Request.setClientInfo: object expected");
                            message.setClientInfo = $root.com.miti99.gomoku.proto.SetClientInfoRequest.fromObject(object.setClientInfo, _depth + 1);
                        }
                        if (object.createRoom != null) {
                            if (!$util.isObject(object.createRoom))
                                throw $TypeError(".com.miti99.gomoku.proto.Request.createRoom: object expected");
                            message.createRoom = $root.com.miti99.gomoku.proto.CreateRoomRequest.fromObject(object.createRoom, _depth + 1);
                        }
                        if (object.createPveRoom != null) {
                            if (!$util.isObject(object.createPveRoom))
                                throw $TypeError(".com.miti99.gomoku.proto.Request.createPveRoom: object expected");
                            message.createPveRoom = $root.com.miti99.gomoku.proto.CreatePveRoomRequest.fromObject(object.createPveRoom, _depth + 1);
                        }
                        if (object.getRooms != null) {
                            if (!$util.isObject(object.getRooms))
                                throw $TypeError(".com.miti99.gomoku.proto.Request.getRooms: object expected");
                            message.getRooms = $root.com.miti99.gomoku.proto.GetRoomsRequest.fromObject(object.getRooms, _depth + 1);
                        }
                        if (object.joinRoom != null) {
                            if (!$util.isObject(object.joinRoom))
                                throw $TypeError(".com.miti99.gomoku.proto.Request.joinRoom: object expected");
                            message.joinRoom = $root.com.miti99.gomoku.proto.JoinRoomRequest.fromObject(object.joinRoom, _depth + 1);
                        }
                        if (object.gameMove != null) {
                            if (!$util.isObject(object.gameMove))
                                throw $TypeError(".com.miti99.gomoku.proto.Request.gameMove: object expected");
                            message.gameMove = $root.com.miti99.gomoku.proto.GameMoveRequest.fromObject(object.gameMove, _depth + 1);
                        }
                        if (object.gameReset != null) {
                            if (!$util.isObject(object.gameReset))
                                throw $TypeError(".com.miti99.gomoku.proto.Request.gameReset: object expected");
                            message.gameReset = $root.com.miti99.gomoku.proto.GameResetRequest.fromObject(object.gameReset, _depth + 1);
                        }
                        if (object.watchGame != null) {
                            if (!$util.isObject(object.watchGame))
                                throw $TypeError(".com.miti99.gomoku.proto.Request.watchGame: object expected");
                            message.watchGame = $root.com.miti99.gomoku.proto.WatchGameRequest.fromObject(object.watchGame, _depth + 1);
                        }
                        if (object.watchGameExit != null) {
                            if (!$util.isObject(object.watchGameExit))
                                throw $TypeError(".com.miti99.gomoku.proto.Request.watchGameExit: object expected");
                            message.watchGameExit = $root.com.miti99.gomoku.proto.WatchGameExitRequest.fromObject(object.watchGameExit, _depth + 1);
                        }
                        if (object.clientExit != null) {
                            if (!$util.isObject(object.clientExit))
                                throw $TypeError(".com.miti99.gomoku.proto.Request.clientExit: object expected");
                            message.clientExit = $root.com.miti99.gomoku.proto.ClientExitRequest.fromObject(object.clientExit, _depth + 1);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a Request message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.miti99.gomoku.proto.Request
                     * @static
                     * @param {com.miti99.gomoku.proto.Request} message Request
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Request.toObject = function (message, options, _depth) {
                        if (!options)
                            options = {};
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        let object = {};
                        if (message.heartbeat != null && $Object.hasOwnProperty.call(message, "heartbeat")) {
                            object.heartbeat = $root.com.miti99.gomoku.proto.HeartbeatRequest.toObject(message.heartbeat, options, _depth + 1);
                            if (options.oneofs)
                                object.payload = "heartbeat";
                        }
                        if (message.setNickname != null && $Object.hasOwnProperty.call(message, "setNickname")) {
                            object.setNickname = $root.com.miti99.gomoku.proto.SetNicknameRequest.toObject(message.setNickname, options, _depth + 1);
                            if (options.oneofs)
                                object.payload = "setNickname";
                        }
                        if (message.setClientInfo != null && $Object.hasOwnProperty.call(message, "setClientInfo")) {
                            object.setClientInfo = $root.com.miti99.gomoku.proto.SetClientInfoRequest.toObject(message.setClientInfo, options, _depth + 1);
                            if (options.oneofs)
                                object.payload = "setClientInfo";
                        }
                        if (message.createRoom != null && $Object.hasOwnProperty.call(message, "createRoom")) {
                            object.createRoom = $root.com.miti99.gomoku.proto.CreateRoomRequest.toObject(message.createRoom, options, _depth + 1);
                            if (options.oneofs)
                                object.payload = "createRoom";
                        }
                        if (message.createPveRoom != null && $Object.hasOwnProperty.call(message, "createPveRoom")) {
                            object.createPveRoom = $root.com.miti99.gomoku.proto.CreatePveRoomRequest.toObject(message.createPveRoom, options, _depth + 1);
                            if (options.oneofs)
                                object.payload = "createPveRoom";
                        }
                        if (message.getRooms != null && $Object.hasOwnProperty.call(message, "getRooms")) {
                            object.getRooms = $root.com.miti99.gomoku.proto.GetRoomsRequest.toObject(message.getRooms, options, _depth + 1);
                            if (options.oneofs)
                                object.payload = "getRooms";
                        }
                        if (message.joinRoom != null && $Object.hasOwnProperty.call(message, "joinRoom")) {
                            object.joinRoom = $root.com.miti99.gomoku.proto.JoinRoomRequest.toObject(message.joinRoom, options, _depth + 1);
                            if (options.oneofs)
                                object.payload = "joinRoom";
                        }
                        if (message.gameMove != null && $Object.hasOwnProperty.call(message, "gameMove")) {
                            object.gameMove = $root.com.miti99.gomoku.proto.GameMoveRequest.toObject(message.gameMove, options, _depth + 1);
                            if (options.oneofs)
                                object.payload = "gameMove";
                        }
                        if (message.gameReset != null && $Object.hasOwnProperty.call(message, "gameReset")) {
                            object.gameReset = $root.com.miti99.gomoku.proto.GameResetRequest.toObject(message.gameReset, options, _depth + 1);
                            if (options.oneofs)
                                object.payload = "gameReset";
                        }
                        if (message.watchGame != null && $Object.hasOwnProperty.call(message, "watchGame")) {
                            object.watchGame = $root.com.miti99.gomoku.proto.WatchGameRequest.toObject(message.watchGame, options, _depth + 1);
                            if (options.oneofs)
                                object.payload = "watchGame";
                        }
                        if (message.watchGameExit != null && $Object.hasOwnProperty.call(message, "watchGameExit")) {
                            object.watchGameExit = $root.com.miti99.gomoku.proto.WatchGameExitRequest.toObject(message.watchGameExit, options, _depth + 1);
                            if (options.oneofs)
                                object.payload = "watchGameExit";
                        }
                        if (message.clientExit != null && $Object.hasOwnProperty.call(message, "clientExit")) {
                            object.clientExit = $root.com.miti99.gomoku.proto.ClientExitRequest.toObject(message.clientExit, options, _depth + 1);
                            if (options.oneofs)
                                object.payload = "clientExit";
                        }
                        return object;
                    };

                    /**
                     * Converts this Request to JSON.
                     * @function toJSON
                     * @memberof com.miti99.gomoku.proto.Request
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Request.prototype.toJSON = function() {
                        return Request.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the type url for Request
                     * @function getTypeUrl
                     * @memberof com.miti99.gomoku.proto.Request
                     * @static
                     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns {string} The type url
                     */
                    Request.getTypeUrl = function(prefix) {
                        if (prefix === $undefined)
                            prefix = "type.googleapis.com";
                        return prefix + "/com.miti99.gomoku.proto.Request";
                    };

                    return Request;
                })();

                proto.HeartbeatRequest = (function() {

                    /**
                     * Properties of a HeartbeatRequest.
                     * @typedef {Object} com.miti99.gomoku.proto.HeartbeatRequest.$Properties
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */

                    /**
                     * Properties of a HeartbeatRequest.
                     * @memberof com.miti99.gomoku.proto
                     * @interface IHeartbeatRequest
                     * @augments com.miti99.gomoku.proto.HeartbeatRequest.$Properties
                     * @deprecated Use com.miti99.gomoku.proto.HeartbeatRequest.$Properties instead.
                     */

                    /**
                     * Shape of a HeartbeatRequest.
                     * @typedef {com.miti99.gomoku.proto.HeartbeatRequest.$Properties} com.miti99.gomoku.proto.HeartbeatRequest.$Shape
                     */

                    /**
                     * Constructs a new HeartbeatRequest.
                     * @memberof com.miti99.gomoku.proto
                     * @classdesc Represents a HeartbeatRequest.
                     * @constructor
                     * @param {com.miti99.gomoku.proto.HeartbeatRequest.$Properties=} [properties] Properties to set
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */
                    const HeartbeatRequest = function (properties) {
                        if (properties)
                            for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                    this[keys[i]] = properties[keys[i]];
                    };

                    /**
                     * Creates a new HeartbeatRequest instance using the specified properties.
                     * @function create
                     * @memberof com.miti99.gomoku.proto.HeartbeatRequest
                     * @static
                     * @param {com.miti99.gomoku.proto.HeartbeatRequest.$Properties=} [properties] Properties to set
                     * @returns {com.miti99.gomoku.proto.HeartbeatRequest} HeartbeatRequest instance
                     * @type {{
                     *   (properties: com.miti99.gomoku.proto.HeartbeatRequest.$Shape): com.miti99.gomoku.proto.HeartbeatRequest & com.miti99.gomoku.proto.HeartbeatRequest.$Shape;
                     *   (properties?: com.miti99.gomoku.proto.HeartbeatRequest.$Properties): com.miti99.gomoku.proto.HeartbeatRequest;
                     * }}
                     */
                    HeartbeatRequest.create = function(properties) {
                        return new HeartbeatRequest(properties);
                    };

                    /**
                     * Encodes the specified HeartbeatRequest message. Does not implicitly {@link com.miti99.gomoku.proto.HeartbeatRequest.verify|verify} messages.
                     * @function encode
                     * @memberof com.miti99.gomoku.proto.HeartbeatRequest
                     * @static
                     * @param {com.miti99.gomoku.proto.HeartbeatRequest.$Properties} message HeartbeatRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    HeartbeatRequest.encode = function (message, writer, _depth) {
                        if (!writer)
                            writer = $Writer.create();
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                            for (let i = 0; i < message.$unknowns.length; ++i)
                                writer.raw(message.$unknowns[i]);
                        return writer;
                    };

                    /**
                     * Encodes the specified HeartbeatRequest message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.HeartbeatRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.miti99.gomoku.proto.HeartbeatRequest
                     * @static
                     * @param {com.miti99.gomoku.proto.HeartbeatRequest.$Properties} message HeartbeatRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    HeartbeatRequest.encodeDelimited = function(message, writer) {
                        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                    };

                    /**
                     * Decodes a HeartbeatRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.miti99.gomoku.proto.HeartbeatRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.HeartbeatRequest & com.miti99.gomoku.proto.HeartbeatRequest.$Shape} HeartbeatRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    HeartbeatRequest.decode = function (reader, length, _end, _depth, _target) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $Reader.recursionLimit)
                            throw $Error("max depth exceeded");
                        let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.com.miti99.gomoku.proto.HeartbeatRequest();
                        while (reader.pos < end) {
                            let start = reader.pos;
                            let tag = reader.tag();
                            if (tag === _end) {
                                _end = $undefined;
                                break;
                            }
                            reader.skipType(tag & 7, _depth, tag);
                            if (!reader.discardUnknown) {
                                $util.makeProp(message, "$unknowns", false);
                                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                            }
                        }
                        if (_end !== $undefined)
                            throw $Error("missing end group");
                        return message;
                    };

                    /**
                     * Decodes a HeartbeatRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.miti99.gomoku.proto.HeartbeatRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.HeartbeatRequest & com.miti99.gomoku.proto.HeartbeatRequest.$Shape} HeartbeatRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    HeartbeatRequest.decodeDelimited = function(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a HeartbeatRequest message.
                     * @function verify
                     * @memberof com.miti99.gomoku.proto.HeartbeatRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    HeartbeatRequest.verify = function (message, _depth) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            return "max depth exceeded";
                        return null;
                    };

                    /**
                     * Creates a HeartbeatRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.miti99.gomoku.proto.HeartbeatRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.miti99.gomoku.proto.HeartbeatRequest} HeartbeatRequest
                     */
                    HeartbeatRequest.fromObject = function (object, _depth) {
                        if (object instanceof $root.com.miti99.gomoku.proto.HeartbeatRequest)
                            return object;
                        if (!$util.isObject(object))
                            throw $TypeError(".com.miti99.gomoku.proto.HeartbeatRequest: object expected");
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        return new $root.com.miti99.gomoku.proto.HeartbeatRequest();
                    };

                    /**
                     * Creates a plain object from a HeartbeatRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.miti99.gomoku.proto.HeartbeatRequest
                     * @static
                     * @param {com.miti99.gomoku.proto.HeartbeatRequest} message HeartbeatRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    HeartbeatRequest.toObject = function () {
                        return {};
                    };

                    /**
                     * Converts this HeartbeatRequest to JSON.
                     * @function toJSON
                     * @memberof com.miti99.gomoku.proto.HeartbeatRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    HeartbeatRequest.prototype.toJSON = function() {
                        return HeartbeatRequest.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the type url for HeartbeatRequest
                     * @function getTypeUrl
                     * @memberof com.miti99.gomoku.proto.HeartbeatRequest
                     * @static
                     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns {string} The type url
                     */
                    HeartbeatRequest.getTypeUrl = function(prefix) {
                        if (prefix === $undefined)
                            prefix = "type.googleapis.com";
                        return prefix + "/com.miti99.gomoku.proto.HeartbeatRequest";
                    };

                    return HeartbeatRequest;
                })();

                proto.SetNicknameRequest = (function() {

                    /**
                     * Properties of a SetNicknameRequest.
                     * @typedef {Object} com.miti99.gomoku.proto.SetNicknameRequest.$Properties
                     * @property {string|null} [nickname] SetNicknameRequest nickname
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */

                    /**
                     * Properties of a SetNicknameRequest.
                     * @memberof com.miti99.gomoku.proto
                     * @interface ISetNicknameRequest
                     * @augments com.miti99.gomoku.proto.SetNicknameRequest.$Properties
                     * @deprecated Use com.miti99.gomoku.proto.SetNicknameRequest.$Properties instead.
                     */

                    /**
                     * Shape of a SetNicknameRequest.
                     * @typedef {com.miti99.gomoku.proto.SetNicknameRequest.$Properties} com.miti99.gomoku.proto.SetNicknameRequest.$Shape
                     */

                    /**
                     * Constructs a new SetNicknameRequest.
                     * @memberof com.miti99.gomoku.proto
                     * @classdesc Represents a SetNicknameRequest.
                     * @constructor
                     * @param {com.miti99.gomoku.proto.SetNicknameRequest.$Properties=} [properties] Properties to set
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */
                    const SetNicknameRequest = function (properties) {
                        if (properties)
                            for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                    this[keys[i]] = properties[keys[i]];
                    };

                    /**
                     * SetNicknameRequest nickname.
                     * @member {string} nickname
                     * @memberof com.miti99.gomoku.proto.SetNicknameRequest
                     * @instance
                     */
                    SetNicknameRequest.prototype.nickname = "";

                    /**
                     * Creates a new SetNicknameRequest instance using the specified properties.
                     * @function create
                     * @memberof com.miti99.gomoku.proto.SetNicknameRequest
                     * @static
                     * @param {com.miti99.gomoku.proto.SetNicknameRequest.$Properties=} [properties] Properties to set
                     * @returns {com.miti99.gomoku.proto.SetNicknameRequest} SetNicknameRequest instance
                     * @type {{
                     *   (properties: com.miti99.gomoku.proto.SetNicknameRequest.$Shape): com.miti99.gomoku.proto.SetNicknameRequest & com.miti99.gomoku.proto.SetNicknameRequest.$Shape;
                     *   (properties?: com.miti99.gomoku.proto.SetNicknameRequest.$Properties): com.miti99.gomoku.proto.SetNicknameRequest;
                     * }}
                     */
                    SetNicknameRequest.create = function(properties) {
                        return new SetNicknameRequest(properties);
                    };

                    /**
                     * Encodes the specified SetNicknameRequest message. Does not implicitly {@link com.miti99.gomoku.proto.SetNicknameRequest.verify|verify} messages.
                     * @function encode
                     * @memberof com.miti99.gomoku.proto.SetNicknameRequest
                     * @static
                     * @param {com.miti99.gomoku.proto.SetNicknameRequest.$Properties} message SetNicknameRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    SetNicknameRequest.encode = function (message, writer, _depth) {
                        if (!writer)
                            writer = $Writer.create();
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        if (message.nickname != null && $Object.hasOwnProperty.call(message, "nickname") && message.nickname !== "")
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.nickname);
                        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                            for (let i = 0; i < message.$unknowns.length; ++i)
                                writer.raw(message.$unknowns[i]);
                        return writer;
                    };

                    /**
                     * Encodes the specified SetNicknameRequest message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.SetNicknameRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.miti99.gomoku.proto.SetNicknameRequest
                     * @static
                     * @param {com.miti99.gomoku.proto.SetNicknameRequest.$Properties} message SetNicknameRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    SetNicknameRequest.encodeDelimited = function(message, writer) {
                        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                    };

                    /**
                     * Decodes a SetNicknameRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.miti99.gomoku.proto.SetNicknameRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.SetNicknameRequest & com.miti99.gomoku.proto.SetNicknameRequest.$Shape} SetNicknameRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    SetNicknameRequest.decode = function (reader, length, _end, _depth, _target) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $Reader.recursionLimit)
                            throw $Error("max depth exceeded");
                        let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.com.miti99.gomoku.proto.SetNicknameRequest(), value;
                        while (reader.pos < end) {
                            let start = reader.pos;
                            let tag = reader.tag();
                            if (tag === _end) {
                                _end = $undefined;
                                break;
                            }
                            let wireType = tag & 7;
                            switch (tag >>>= 3) {
                            case 1: {
                                    if (wireType !== 2)
                                        break;
                                    if ((value = reader.stringVerify()).length)
                                        message.nickname = value;
                                    else
                                        delete message.nickname;
                                    continue;
                                }
                            }
                            reader.skipType(wireType, _depth, tag);
                            if (!reader.discardUnknown) {
                                $util.makeProp(message, "$unknowns", false);
                                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                            }
                        }
                        if (_end !== $undefined)
                            throw $Error("missing end group");
                        return message;
                    };

                    /**
                     * Decodes a SetNicknameRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.miti99.gomoku.proto.SetNicknameRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.SetNicknameRequest & com.miti99.gomoku.proto.SetNicknameRequest.$Shape} SetNicknameRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    SetNicknameRequest.decodeDelimited = function(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a SetNicknameRequest message.
                     * @function verify
                     * @memberof com.miti99.gomoku.proto.SetNicknameRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    SetNicknameRequest.verify = function (message, _depth) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            return "max depth exceeded";
                        if (message.nickname != null && $Object.hasOwnProperty.call(message, "nickname"))
                            if (!$util.isString(message.nickname))
                                return "nickname: string expected";
                        return null;
                    };

                    /**
                     * Creates a SetNicknameRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.miti99.gomoku.proto.SetNicknameRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.miti99.gomoku.proto.SetNicknameRequest} SetNicknameRequest
                     */
                    SetNicknameRequest.fromObject = function (object, _depth) {
                        if (object instanceof $root.com.miti99.gomoku.proto.SetNicknameRequest)
                            return object;
                        if (!$util.isObject(object))
                            throw $TypeError(".com.miti99.gomoku.proto.SetNicknameRequest: object expected");
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        let message = new $root.com.miti99.gomoku.proto.SetNicknameRequest();
                        if (object.nickname != null)
                            if (typeof object.nickname !== "string" || object.nickname.length)
                                message.nickname = $String(object.nickname);
                        return message;
                    };

                    /**
                     * Creates a plain object from a SetNicknameRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.miti99.gomoku.proto.SetNicknameRequest
                     * @static
                     * @param {com.miti99.gomoku.proto.SetNicknameRequest} message SetNicknameRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    SetNicknameRequest.toObject = function (message, options, _depth) {
                        if (!options)
                            options = {};
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        let object = {};
                        if (options.defaults)
                            object.nickname = "";
                        if (message.nickname != null && $Object.hasOwnProperty.call(message, "nickname"))
                            object.nickname = message.nickname;
                        return object;
                    };

                    /**
                     * Converts this SetNicknameRequest to JSON.
                     * @function toJSON
                     * @memberof com.miti99.gomoku.proto.SetNicknameRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    SetNicknameRequest.prototype.toJSON = function() {
                        return SetNicknameRequest.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the type url for SetNicknameRequest
                     * @function getTypeUrl
                     * @memberof com.miti99.gomoku.proto.SetNicknameRequest
                     * @static
                     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns {string} The type url
                     */
                    SetNicknameRequest.getTypeUrl = function(prefix) {
                        if (prefix === $undefined)
                            prefix = "type.googleapis.com";
                        return prefix + "/com.miti99.gomoku.proto.SetNicknameRequest";
                    };

                    return SetNicknameRequest;
                })();

                proto.SetClientInfoRequest = (function() {

                    /**
                     * Properties of a SetClientInfoRequest.
                     * @typedef {Object} com.miti99.gomoku.proto.SetClientInfoRequest.$Properties
                     * @property {string|null} [version] SetClientInfoRequest version
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */

                    /**
                     * Properties of a SetClientInfoRequest.
                     * @memberof com.miti99.gomoku.proto
                     * @interface ISetClientInfoRequest
                     * @augments com.miti99.gomoku.proto.SetClientInfoRequest.$Properties
                     * @deprecated Use com.miti99.gomoku.proto.SetClientInfoRequest.$Properties instead.
                     */

                    /**
                     * Shape of a SetClientInfoRequest.
                     * @typedef {com.miti99.gomoku.proto.SetClientInfoRequest.$Properties} com.miti99.gomoku.proto.SetClientInfoRequest.$Shape
                     */

                    /**
                     * Constructs a new SetClientInfoRequest.
                     * @memberof com.miti99.gomoku.proto
                     * @classdesc Represents a SetClientInfoRequest.
                     * @constructor
                     * @param {com.miti99.gomoku.proto.SetClientInfoRequest.$Properties=} [properties] Properties to set
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */
                    const SetClientInfoRequest = function (properties) {
                        if (properties)
                            for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                    this[keys[i]] = properties[keys[i]];
                    };

                    /**
                     * SetClientInfoRequest version.
                     * @member {string} version
                     * @memberof com.miti99.gomoku.proto.SetClientInfoRequest
                     * @instance
                     */
                    SetClientInfoRequest.prototype.version = "";

                    /**
                     * Creates a new SetClientInfoRequest instance using the specified properties.
                     * @function create
                     * @memberof com.miti99.gomoku.proto.SetClientInfoRequest
                     * @static
                     * @param {com.miti99.gomoku.proto.SetClientInfoRequest.$Properties=} [properties] Properties to set
                     * @returns {com.miti99.gomoku.proto.SetClientInfoRequest} SetClientInfoRequest instance
                     * @type {{
                     *   (properties: com.miti99.gomoku.proto.SetClientInfoRequest.$Shape): com.miti99.gomoku.proto.SetClientInfoRequest & com.miti99.gomoku.proto.SetClientInfoRequest.$Shape;
                     *   (properties?: com.miti99.gomoku.proto.SetClientInfoRequest.$Properties): com.miti99.gomoku.proto.SetClientInfoRequest;
                     * }}
                     */
                    SetClientInfoRequest.create = function(properties) {
                        return new SetClientInfoRequest(properties);
                    };

                    /**
                     * Encodes the specified SetClientInfoRequest message. Does not implicitly {@link com.miti99.gomoku.proto.SetClientInfoRequest.verify|verify} messages.
                     * @function encode
                     * @memberof com.miti99.gomoku.proto.SetClientInfoRequest
                     * @static
                     * @param {com.miti99.gomoku.proto.SetClientInfoRequest.$Properties} message SetClientInfoRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    SetClientInfoRequest.encode = function (message, writer, _depth) {
                        if (!writer)
                            writer = $Writer.create();
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        if (message.version != null && $Object.hasOwnProperty.call(message, "version") && message.version !== "")
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.version);
                        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                            for (let i = 0; i < message.$unknowns.length; ++i)
                                writer.raw(message.$unknowns[i]);
                        return writer;
                    };

                    /**
                     * Encodes the specified SetClientInfoRequest message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.SetClientInfoRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.miti99.gomoku.proto.SetClientInfoRequest
                     * @static
                     * @param {com.miti99.gomoku.proto.SetClientInfoRequest.$Properties} message SetClientInfoRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    SetClientInfoRequest.encodeDelimited = function(message, writer) {
                        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                    };

                    /**
                     * Decodes a SetClientInfoRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.miti99.gomoku.proto.SetClientInfoRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.SetClientInfoRequest & com.miti99.gomoku.proto.SetClientInfoRequest.$Shape} SetClientInfoRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    SetClientInfoRequest.decode = function (reader, length, _end, _depth, _target) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $Reader.recursionLimit)
                            throw $Error("max depth exceeded");
                        let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.com.miti99.gomoku.proto.SetClientInfoRequest(), value;
                        while (reader.pos < end) {
                            let start = reader.pos;
                            let tag = reader.tag();
                            if (tag === _end) {
                                _end = $undefined;
                                break;
                            }
                            let wireType = tag & 7;
                            switch (tag >>>= 3) {
                            case 1: {
                                    if (wireType !== 2)
                                        break;
                                    if ((value = reader.stringVerify()).length)
                                        message.version = value;
                                    else
                                        delete message.version;
                                    continue;
                                }
                            }
                            reader.skipType(wireType, _depth, tag);
                            if (!reader.discardUnknown) {
                                $util.makeProp(message, "$unknowns", false);
                                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                            }
                        }
                        if (_end !== $undefined)
                            throw $Error("missing end group");
                        return message;
                    };

                    /**
                     * Decodes a SetClientInfoRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.miti99.gomoku.proto.SetClientInfoRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.SetClientInfoRequest & com.miti99.gomoku.proto.SetClientInfoRequest.$Shape} SetClientInfoRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    SetClientInfoRequest.decodeDelimited = function(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a SetClientInfoRequest message.
                     * @function verify
                     * @memberof com.miti99.gomoku.proto.SetClientInfoRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    SetClientInfoRequest.verify = function (message, _depth) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            return "max depth exceeded";
                        if (message.version != null && $Object.hasOwnProperty.call(message, "version"))
                            if (!$util.isString(message.version))
                                return "version: string expected";
                        return null;
                    };

                    /**
                     * Creates a SetClientInfoRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.miti99.gomoku.proto.SetClientInfoRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.miti99.gomoku.proto.SetClientInfoRequest} SetClientInfoRequest
                     */
                    SetClientInfoRequest.fromObject = function (object, _depth) {
                        if (object instanceof $root.com.miti99.gomoku.proto.SetClientInfoRequest)
                            return object;
                        if (!$util.isObject(object))
                            throw $TypeError(".com.miti99.gomoku.proto.SetClientInfoRequest: object expected");
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        let message = new $root.com.miti99.gomoku.proto.SetClientInfoRequest();
                        if (object.version != null)
                            if (typeof object.version !== "string" || object.version.length)
                                message.version = $String(object.version);
                        return message;
                    };

                    /**
                     * Creates a plain object from a SetClientInfoRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.miti99.gomoku.proto.SetClientInfoRequest
                     * @static
                     * @param {com.miti99.gomoku.proto.SetClientInfoRequest} message SetClientInfoRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    SetClientInfoRequest.toObject = function (message, options, _depth) {
                        if (!options)
                            options = {};
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        let object = {};
                        if (options.defaults)
                            object.version = "";
                        if (message.version != null && $Object.hasOwnProperty.call(message, "version"))
                            object.version = message.version;
                        return object;
                    };

                    /**
                     * Converts this SetClientInfoRequest to JSON.
                     * @function toJSON
                     * @memberof com.miti99.gomoku.proto.SetClientInfoRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    SetClientInfoRequest.prototype.toJSON = function() {
                        return SetClientInfoRequest.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the type url for SetClientInfoRequest
                     * @function getTypeUrl
                     * @memberof com.miti99.gomoku.proto.SetClientInfoRequest
                     * @static
                     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns {string} The type url
                     */
                    SetClientInfoRequest.getTypeUrl = function(prefix) {
                        if (prefix === $undefined)
                            prefix = "type.googleapis.com";
                        return prefix + "/com.miti99.gomoku.proto.SetClientInfoRequest";
                    };

                    return SetClientInfoRequest;
                })();

                proto.CreateRoomRequest = (function() {

                    /**
                     * Properties of a CreateRoomRequest.
                     * @typedef {Object} com.miti99.gomoku.proto.CreateRoomRequest.$Properties
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */

                    /**
                     * Properties of a CreateRoomRequest.
                     * @memberof com.miti99.gomoku.proto
                     * @interface ICreateRoomRequest
                     * @augments com.miti99.gomoku.proto.CreateRoomRequest.$Properties
                     * @deprecated Use com.miti99.gomoku.proto.CreateRoomRequest.$Properties instead.
                     */

                    /**
                     * Shape of a CreateRoomRequest.
                     * @typedef {com.miti99.gomoku.proto.CreateRoomRequest.$Properties} com.miti99.gomoku.proto.CreateRoomRequest.$Shape
                     */

                    /**
                     * Constructs a new CreateRoomRequest.
                     * @memberof com.miti99.gomoku.proto
                     * @classdesc Represents a CreateRoomRequest.
                     * @constructor
                     * @param {com.miti99.gomoku.proto.CreateRoomRequest.$Properties=} [properties] Properties to set
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */
                    const CreateRoomRequest = function (properties) {
                        if (properties)
                            for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                    this[keys[i]] = properties[keys[i]];
                    };

                    /**
                     * Creates a new CreateRoomRequest instance using the specified properties.
                     * @function create
                     * @memberof com.miti99.gomoku.proto.CreateRoomRequest
                     * @static
                     * @param {com.miti99.gomoku.proto.CreateRoomRequest.$Properties=} [properties] Properties to set
                     * @returns {com.miti99.gomoku.proto.CreateRoomRequest} CreateRoomRequest instance
                     * @type {{
                     *   (properties: com.miti99.gomoku.proto.CreateRoomRequest.$Shape): com.miti99.gomoku.proto.CreateRoomRequest & com.miti99.gomoku.proto.CreateRoomRequest.$Shape;
                     *   (properties?: com.miti99.gomoku.proto.CreateRoomRequest.$Properties): com.miti99.gomoku.proto.CreateRoomRequest;
                     * }}
                     */
                    CreateRoomRequest.create = function(properties) {
                        return new CreateRoomRequest(properties);
                    };

                    /**
                     * Encodes the specified CreateRoomRequest message. Does not implicitly {@link com.miti99.gomoku.proto.CreateRoomRequest.verify|verify} messages.
                     * @function encode
                     * @memberof com.miti99.gomoku.proto.CreateRoomRequest
                     * @static
                     * @param {com.miti99.gomoku.proto.CreateRoomRequest.$Properties} message CreateRoomRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CreateRoomRequest.encode = function (message, writer, _depth) {
                        if (!writer)
                            writer = $Writer.create();
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                            for (let i = 0; i < message.$unknowns.length; ++i)
                                writer.raw(message.$unknowns[i]);
                        return writer;
                    };

                    /**
                     * Encodes the specified CreateRoomRequest message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.CreateRoomRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.miti99.gomoku.proto.CreateRoomRequest
                     * @static
                     * @param {com.miti99.gomoku.proto.CreateRoomRequest.$Properties} message CreateRoomRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CreateRoomRequest.encodeDelimited = function(message, writer) {
                        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                    };

                    /**
                     * Decodes a CreateRoomRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.miti99.gomoku.proto.CreateRoomRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.CreateRoomRequest & com.miti99.gomoku.proto.CreateRoomRequest.$Shape} CreateRoomRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CreateRoomRequest.decode = function (reader, length, _end, _depth, _target) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $Reader.recursionLimit)
                            throw $Error("max depth exceeded");
                        let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.com.miti99.gomoku.proto.CreateRoomRequest();
                        while (reader.pos < end) {
                            let start = reader.pos;
                            let tag = reader.tag();
                            if (tag === _end) {
                                _end = $undefined;
                                break;
                            }
                            reader.skipType(tag & 7, _depth, tag);
                            if (!reader.discardUnknown) {
                                $util.makeProp(message, "$unknowns", false);
                                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                            }
                        }
                        if (_end !== $undefined)
                            throw $Error("missing end group");
                        return message;
                    };

                    /**
                     * Decodes a CreateRoomRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.miti99.gomoku.proto.CreateRoomRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.CreateRoomRequest & com.miti99.gomoku.proto.CreateRoomRequest.$Shape} CreateRoomRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CreateRoomRequest.decodeDelimited = function(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a CreateRoomRequest message.
                     * @function verify
                     * @memberof com.miti99.gomoku.proto.CreateRoomRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    CreateRoomRequest.verify = function (message, _depth) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            return "max depth exceeded";
                        return null;
                    };

                    /**
                     * Creates a CreateRoomRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.miti99.gomoku.proto.CreateRoomRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.miti99.gomoku.proto.CreateRoomRequest} CreateRoomRequest
                     */
                    CreateRoomRequest.fromObject = function (object, _depth) {
                        if (object instanceof $root.com.miti99.gomoku.proto.CreateRoomRequest)
                            return object;
                        if (!$util.isObject(object))
                            throw $TypeError(".com.miti99.gomoku.proto.CreateRoomRequest: object expected");
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        return new $root.com.miti99.gomoku.proto.CreateRoomRequest();
                    };

                    /**
                     * Creates a plain object from a CreateRoomRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.miti99.gomoku.proto.CreateRoomRequest
                     * @static
                     * @param {com.miti99.gomoku.proto.CreateRoomRequest} message CreateRoomRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CreateRoomRequest.toObject = function () {
                        return {};
                    };

                    /**
                     * Converts this CreateRoomRequest to JSON.
                     * @function toJSON
                     * @memberof com.miti99.gomoku.proto.CreateRoomRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    CreateRoomRequest.prototype.toJSON = function() {
                        return CreateRoomRequest.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the type url for CreateRoomRequest
                     * @function getTypeUrl
                     * @memberof com.miti99.gomoku.proto.CreateRoomRequest
                     * @static
                     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns {string} The type url
                     */
                    CreateRoomRequest.getTypeUrl = function(prefix) {
                        if (prefix === $undefined)
                            prefix = "type.googleapis.com";
                        return prefix + "/com.miti99.gomoku.proto.CreateRoomRequest";
                    };

                    return CreateRoomRequest;
                })();

                proto.CreatePveRoomRequest = (function() {

                    /**
                     * Properties of a CreatePveRoomRequest.
                     * @typedef {Object} com.miti99.gomoku.proto.CreatePveRoomRequest.$Properties
                     * @property {number|null} [difficulty] CreatePveRoomRequest difficulty
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */

                    /**
                     * Properties of a CreatePveRoomRequest.
                     * @memberof com.miti99.gomoku.proto
                     * @interface ICreatePveRoomRequest
                     * @augments com.miti99.gomoku.proto.CreatePveRoomRequest.$Properties
                     * @deprecated Use com.miti99.gomoku.proto.CreatePveRoomRequest.$Properties instead.
                     */

                    /**
                     * Shape of a CreatePveRoomRequest.
                     * @typedef {com.miti99.gomoku.proto.CreatePveRoomRequest.$Properties} com.miti99.gomoku.proto.CreatePveRoomRequest.$Shape
                     */

                    /**
                     * Constructs a new CreatePveRoomRequest.
                     * @memberof com.miti99.gomoku.proto
                     * @classdesc Represents a CreatePveRoomRequest.
                     * @constructor
                     * @param {com.miti99.gomoku.proto.CreatePveRoomRequest.$Properties=} [properties] Properties to set
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */
                    const CreatePveRoomRequest = function (properties) {
                        if (properties)
                            for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                    this[keys[i]] = properties[keys[i]];
                    };

                    /**
                     * CreatePveRoomRequest difficulty.
                     * @member {number} difficulty
                     * @memberof com.miti99.gomoku.proto.CreatePveRoomRequest
                     * @instance
                     */
                    CreatePveRoomRequest.prototype.difficulty = 0;

                    /**
                     * Creates a new CreatePveRoomRequest instance using the specified properties.
                     * @function create
                     * @memberof com.miti99.gomoku.proto.CreatePveRoomRequest
                     * @static
                     * @param {com.miti99.gomoku.proto.CreatePveRoomRequest.$Properties=} [properties] Properties to set
                     * @returns {com.miti99.gomoku.proto.CreatePveRoomRequest} CreatePveRoomRequest instance
                     * @type {{
                     *   (properties: com.miti99.gomoku.proto.CreatePveRoomRequest.$Shape): com.miti99.gomoku.proto.CreatePveRoomRequest & com.miti99.gomoku.proto.CreatePveRoomRequest.$Shape;
                     *   (properties?: com.miti99.gomoku.proto.CreatePveRoomRequest.$Properties): com.miti99.gomoku.proto.CreatePveRoomRequest;
                     * }}
                     */
                    CreatePveRoomRequest.create = function(properties) {
                        return new CreatePveRoomRequest(properties);
                    };

                    /**
                     * Encodes the specified CreatePveRoomRequest message. Does not implicitly {@link com.miti99.gomoku.proto.CreatePveRoomRequest.verify|verify} messages.
                     * @function encode
                     * @memberof com.miti99.gomoku.proto.CreatePveRoomRequest
                     * @static
                     * @param {com.miti99.gomoku.proto.CreatePveRoomRequest.$Properties} message CreatePveRoomRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CreatePveRoomRequest.encode = function (message, writer, _depth) {
                        if (!writer)
                            writer = $Writer.create();
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        if (message.difficulty != null && $Object.hasOwnProperty.call(message, "difficulty") && message.difficulty !== 0)
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.difficulty);
                        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                            for (let i = 0; i < message.$unknowns.length; ++i)
                                writer.raw(message.$unknowns[i]);
                        return writer;
                    };

                    /**
                     * Encodes the specified CreatePveRoomRequest message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.CreatePveRoomRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.miti99.gomoku.proto.CreatePveRoomRequest
                     * @static
                     * @param {com.miti99.gomoku.proto.CreatePveRoomRequest.$Properties} message CreatePveRoomRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CreatePveRoomRequest.encodeDelimited = function(message, writer) {
                        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                    };

                    /**
                     * Decodes a CreatePveRoomRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.miti99.gomoku.proto.CreatePveRoomRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.CreatePveRoomRequest & com.miti99.gomoku.proto.CreatePveRoomRequest.$Shape} CreatePveRoomRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CreatePveRoomRequest.decode = function (reader, length, _end, _depth, _target) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $Reader.recursionLimit)
                            throw $Error("max depth exceeded");
                        let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.com.miti99.gomoku.proto.CreatePveRoomRequest(), value;
                        while (reader.pos < end) {
                            let start = reader.pos;
                            let tag = reader.tag();
                            if (tag === _end) {
                                _end = $undefined;
                                break;
                            }
                            let wireType = tag & 7;
                            switch (tag >>>= 3) {
                            case 1: {
                                    if (wireType !== 0)
                                        break;
                                    if (value = reader.int32())
                                        message.difficulty = value;
                                    else
                                        delete message.difficulty;
                                    continue;
                                }
                            }
                            reader.skipType(wireType, _depth, tag);
                            if (!reader.discardUnknown) {
                                $util.makeProp(message, "$unknowns", false);
                                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                            }
                        }
                        if (_end !== $undefined)
                            throw $Error("missing end group");
                        return message;
                    };

                    /**
                     * Decodes a CreatePveRoomRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.miti99.gomoku.proto.CreatePveRoomRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.CreatePveRoomRequest & com.miti99.gomoku.proto.CreatePveRoomRequest.$Shape} CreatePveRoomRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CreatePveRoomRequest.decodeDelimited = function(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a CreatePveRoomRequest message.
                     * @function verify
                     * @memberof com.miti99.gomoku.proto.CreatePveRoomRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    CreatePveRoomRequest.verify = function (message, _depth) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            return "max depth exceeded";
                        if (message.difficulty != null && $Object.hasOwnProperty.call(message, "difficulty"))
                            if (!$util.isInteger(message.difficulty))
                                return "difficulty: integer expected";
                        return null;
                    };

                    /**
                     * Creates a CreatePveRoomRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.miti99.gomoku.proto.CreatePveRoomRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.miti99.gomoku.proto.CreatePveRoomRequest} CreatePveRoomRequest
                     */
                    CreatePveRoomRequest.fromObject = function (object, _depth) {
                        if (object instanceof $root.com.miti99.gomoku.proto.CreatePveRoomRequest)
                            return object;
                        if (!$util.isObject(object))
                            throw $TypeError(".com.miti99.gomoku.proto.CreatePveRoomRequest: object expected");
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        let message = new $root.com.miti99.gomoku.proto.CreatePveRoomRequest();
                        if (object.difficulty != null)
                            if ($Number(object.difficulty) !== 0)
                                message.difficulty = object.difficulty | 0;
                        return message;
                    };

                    /**
                     * Creates a plain object from a CreatePveRoomRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.miti99.gomoku.proto.CreatePveRoomRequest
                     * @static
                     * @param {com.miti99.gomoku.proto.CreatePveRoomRequest} message CreatePveRoomRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CreatePveRoomRequest.toObject = function (message, options, _depth) {
                        if (!options)
                            options = {};
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        let object = {};
                        if (options.defaults)
                            object.difficulty = 0;
                        if (message.difficulty != null && $Object.hasOwnProperty.call(message, "difficulty"))
                            object.difficulty = message.difficulty;
                        return object;
                    };

                    /**
                     * Converts this CreatePveRoomRequest to JSON.
                     * @function toJSON
                     * @memberof com.miti99.gomoku.proto.CreatePveRoomRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    CreatePveRoomRequest.prototype.toJSON = function() {
                        return CreatePveRoomRequest.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the type url for CreatePveRoomRequest
                     * @function getTypeUrl
                     * @memberof com.miti99.gomoku.proto.CreatePveRoomRequest
                     * @static
                     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns {string} The type url
                     */
                    CreatePveRoomRequest.getTypeUrl = function(prefix) {
                        if (prefix === $undefined)
                            prefix = "type.googleapis.com";
                        return prefix + "/com.miti99.gomoku.proto.CreatePveRoomRequest";
                    };

                    return CreatePveRoomRequest;
                })();

                proto.GetRoomsRequest = (function() {

                    /**
                     * Properties of a GetRoomsRequest.
                     * @typedef {Object} com.miti99.gomoku.proto.GetRoomsRequest.$Properties
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */

                    /**
                     * Properties of a GetRoomsRequest.
                     * @memberof com.miti99.gomoku.proto
                     * @interface IGetRoomsRequest
                     * @augments com.miti99.gomoku.proto.GetRoomsRequest.$Properties
                     * @deprecated Use com.miti99.gomoku.proto.GetRoomsRequest.$Properties instead.
                     */

                    /**
                     * Shape of a GetRoomsRequest.
                     * @typedef {com.miti99.gomoku.proto.GetRoomsRequest.$Properties} com.miti99.gomoku.proto.GetRoomsRequest.$Shape
                     */

                    /**
                     * Constructs a new GetRoomsRequest.
                     * @memberof com.miti99.gomoku.proto
                     * @classdesc Represents a GetRoomsRequest.
                     * @constructor
                     * @param {com.miti99.gomoku.proto.GetRoomsRequest.$Properties=} [properties] Properties to set
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */
                    const GetRoomsRequest = function (properties) {
                        if (properties)
                            for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                    this[keys[i]] = properties[keys[i]];
                    };

                    /**
                     * Creates a new GetRoomsRequest instance using the specified properties.
                     * @function create
                     * @memberof com.miti99.gomoku.proto.GetRoomsRequest
                     * @static
                     * @param {com.miti99.gomoku.proto.GetRoomsRequest.$Properties=} [properties] Properties to set
                     * @returns {com.miti99.gomoku.proto.GetRoomsRequest} GetRoomsRequest instance
                     * @type {{
                     *   (properties: com.miti99.gomoku.proto.GetRoomsRequest.$Shape): com.miti99.gomoku.proto.GetRoomsRequest & com.miti99.gomoku.proto.GetRoomsRequest.$Shape;
                     *   (properties?: com.miti99.gomoku.proto.GetRoomsRequest.$Properties): com.miti99.gomoku.proto.GetRoomsRequest;
                     * }}
                     */
                    GetRoomsRequest.create = function(properties) {
                        return new GetRoomsRequest(properties);
                    };

                    /**
                     * Encodes the specified GetRoomsRequest message. Does not implicitly {@link com.miti99.gomoku.proto.GetRoomsRequest.verify|verify} messages.
                     * @function encode
                     * @memberof com.miti99.gomoku.proto.GetRoomsRequest
                     * @static
                     * @param {com.miti99.gomoku.proto.GetRoomsRequest.$Properties} message GetRoomsRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetRoomsRequest.encode = function (message, writer, _depth) {
                        if (!writer)
                            writer = $Writer.create();
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                            for (let i = 0; i < message.$unknowns.length; ++i)
                                writer.raw(message.$unknowns[i]);
                        return writer;
                    };

                    /**
                     * Encodes the specified GetRoomsRequest message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.GetRoomsRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.miti99.gomoku.proto.GetRoomsRequest
                     * @static
                     * @param {com.miti99.gomoku.proto.GetRoomsRequest.$Properties} message GetRoomsRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetRoomsRequest.encodeDelimited = function(message, writer) {
                        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                    };

                    /**
                     * Decodes a GetRoomsRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.miti99.gomoku.proto.GetRoomsRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.GetRoomsRequest & com.miti99.gomoku.proto.GetRoomsRequest.$Shape} GetRoomsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetRoomsRequest.decode = function (reader, length, _end, _depth, _target) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $Reader.recursionLimit)
                            throw $Error("max depth exceeded");
                        let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.com.miti99.gomoku.proto.GetRoomsRequest();
                        while (reader.pos < end) {
                            let start = reader.pos;
                            let tag = reader.tag();
                            if (tag === _end) {
                                _end = $undefined;
                                break;
                            }
                            reader.skipType(tag & 7, _depth, tag);
                            if (!reader.discardUnknown) {
                                $util.makeProp(message, "$unknowns", false);
                                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                            }
                        }
                        if (_end !== $undefined)
                            throw $Error("missing end group");
                        return message;
                    };

                    /**
                     * Decodes a GetRoomsRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.miti99.gomoku.proto.GetRoomsRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.GetRoomsRequest & com.miti99.gomoku.proto.GetRoomsRequest.$Shape} GetRoomsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetRoomsRequest.decodeDelimited = function(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a GetRoomsRequest message.
                     * @function verify
                     * @memberof com.miti99.gomoku.proto.GetRoomsRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GetRoomsRequest.verify = function (message, _depth) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            return "max depth exceeded";
                        return null;
                    };

                    /**
                     * Creates a GetRoomsRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.miti99.gomoku.proto.GetRoomsRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.miti99.gomoku.proto.GetRoomsRequest} GetRoomsRequest
                     */
                    GetRoomsRequest.fromObject = function (object, _depth) {
                        if (object instanceof $root.com.miti99.gomoku.proto.GetRoomsRequest)
                            return object;
                        if (!$util.isObject(object))
                            throw $TypeError(".com.miti99.gomoku.proto.GetRoomsRequest: object expected");
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        return new $root.com.miti99.gomoku.proto.GetRoomsRequest();
                    };

                    /**
                     * Creates a plain object from a GetRoomsRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.miti99.gomoku.proto.GetRoomsRequest
                     * @static
                     * @param {com.miti99.gomoku.proto.GetRoomsRequest} message GetRoomsRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GetRoomsRequest.toObject = function () {
                        return {};
                    };

                    /**
                     * Converts this GetRoomsRequest to JSON.
                     * @function toJSON
                     * @memberof com.miti99.gomoku.proto.GetRoomsRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GetRoomsRequest.prototype.toJSON = function() {
                        return GetRoomsRequest.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the type url for GetRoomsRequest
                     * @function getTypeUrl
                     * @memberof com.miti99.gomoku.proto.GetRoomsRequest
                     * @static
                     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns {string} The type url
                     */
                    GetRoomsRequest.getTypeUrl = function(prefix) {
                        if (prefix === $undefined)
                            prefix = "type.googleapis.com";
                        return prefix + "/com.miti99.gomoku.proto.GetRoomsRequest";
                    };

                    return GetRoomsRequest;
                })();

                proto.JoinRoomRequest = (function() {

                    /**
                     * Properties of a JoinRoomRequest.
                     * @typedef {Object} com.miti99.gomoku.proto.JoinRoomRequest.$Properties
                     * @property {number|null} [roomId] JoinRoomRequest roomId
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */

                    /**
                     * Properties of a JoinRoomRequest.
                     * @memberof com.miti99.gomoku.proto
                     * @interface IJoinRoomRequest
                     * @augments com.miti99.gomoku.proto.JoinRoomRequest.$Properties
                     * @deprecated Use com.miti99.gomoku.proto.JoinRoomRequest.$Properties instead.
                     */

                    /**
                     * Shape of a JoinRoomRequest.
                     * @typedef {com.miti99.gomoku.proto.JoinRoomRequest.$Properties} com.miti99.gomoku.proto.JoinRoomRequest.$Shape
                     */

                    /**
                     * Constructs a new JoinRoomRequest.
                     * @memberof com.miti99.gomoku.proto
                     * @classdesc Represents a JoinRoomRequest.
                     * @constructor
                     * @param {com.miti99.gomoku.proto.JoinRoomRequest.$Properties=} [properties] Properties to set
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */
                    const JoinRoomRequest = function (properties) {
                        if (properties)
                            for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                    this[keys[i]] = properties[keys[i]];
                    };

                    /**
                     * JoinRoomRequest roomId.
                     * @member {number} roomId
                     * @memberof com.miti99.gomoku.proto.JoinRoomRequest
                     * @instance
                     */
                    JoinRoomRequest.prototype.roomId = 0;

                    /**
                     * Creates a new JoinRoomRequest instance using the specified properties.
                     * @function create
                     * @memberof com.miti99.gomoku.proto.JoinRoomRequest
                     * @static
                     * @param {com.miti99.gomoku.proto.JoinRoomRequest.$Properties=} [properties] Properties to set
                     * @returns {com.miti99.gomoku.proto.JoinRoomRequest} JoinRoomRequest instance
                     * @type {{
                     *   (properties: com.miti99.gomoku.proto.JoinRoomRequest.$Shape): com.miti99.gomoku.proto.JoinRoomRequest & com.miti99.gomoku.proto.JoinRoomRequest.$Shape;
                     *   (properties?: com.miti99.gomoku.proto.JoinRoomRequest.$Properties): com.miti99.gomoku.proto.JoinRoomRequest;
                     * }}
                     */
                    JoinRoomRequest.create = function(properties) {
                        return new JoinRoomRequest(properties);
                    };

                    /**
                     * Encodes the specified JoinRoomRequest message. Does not implicitly {@link com.miti99.gomoku.proto.JoinRoomRequest.verify|verify} messages.
                     * @function encode
                     * @memberof com.miti99.gomoku.proto.JoinRoomRequest
                     * @static
                     * @param {com.miti99.gomoku.proto.JoinRoomRequest.$Properties} message JoinRoomRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    JoinRoomRequest.encode = function (message, writer, _depth) {
                        if (!writer)
                            writer = $Writer.create();
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        if (message.roomId != null && $Object.hasOwnProperty.call(message, "roomId") && message.roomId !== 0)
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roomId);
                        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                            for (let i = 0; i < message.$unknowns.length; ++i)
                                writer.raw(message.$unknowns[i]);
                        return writer;
                    };

                    /**
                     * Encodes the specified JoinRoomRequest message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.JoinRoomRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.miti99.gomoku.proto.JoinRoomRequest
                     * @static
                     * @param {com.miti99.gomoku.proto.JoinRoomRequest.$Properties} message JoinRoomRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    JoinRoomRequest.encodeDelimited = function(message, writer) {
                        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                    };

                    /**
                     * Decodes a JoinRoomRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.miti99.gomoku.proto.JoinRoomRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.JoinRoomRequest & com.miti99.gomoku.proto.JoinRoomRequest.$Shape} JoinRoomRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    JoinRoomRequest.decode = function (reader, length, _end, _depth, _target) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $Reader.recursionLimit)
                            throw $Error("max depth exceeded");
                        let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.com.miti99.gomoku.proto.JoinRoomRequest(), value;
                        while (reader.pos < end) {
                            let start = reader.pos;
                            let tag = reader.tag();
                            if (tag === _end) {
                                _end = $undefined;
                                break;
                            }
                            let wireType = tag & 7;
                            switch (tag >>>= 3) {
                            case 1: {
                                    if (wireType !== 0)
                                        break;
                                    if (value = reader.int32())
                                        message.roomId = value;
                                    else
                                        delete message.roomId;
                                    continue;
                                }
                            }
                            reader.skipType(wireType, _depth, tag);
                            if (!reader.discardUnknown) {
                                $util.makeProp(message, "$unknowns", false);
                                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                            }
                        }
                        if (_end !== $undefined)
                            throw $Error("missing end group");
                        return message;
                    };

                    /**
                     * Decodes a JoinRoomRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.miti99.gomoku.proto.JoinRoomRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.JoinRoomRequest & com.miti99.gomoku.proto.JoinRoomRequest.$Shape} JoinRoomRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    JoinRoomRequest.decodeDelimited = function(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a JoinRoomRequest message.
                     * @function verify
                     * @memberof com.miti99.gomoku.proto.JoinRoomRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    JoinRoomRequest.verify = function (message, _depth) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            return "max depth exceeded";
                        if (message.roomId != null && $Object.hasOwnProperty.call(message, "roomId"))
                            if (!$util.isInteger(message.roomId))
                                return "roomId: integer expected";
                        return null;
                    };

                    /**
                     * Creates a JoinRoomRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.miti99.gomoku.proto.JoinRoomRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.miti99.gomoku.proto.JoinRoomRequest} JoinRoomRequest
                     */
                    JoinRoomRequest.fromObject = function (object, _depth) {
                        if (object instanceof $root.com.miti99.gomoku.proto.JoinRoomRequest)
                            return object;
                        if (!$util.isObject(object))
                            throw $TypeError(".com.miti99.gomoku.proto.JoinRoomRequest: object expected");
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        let message = new $root.com.miti99.gomoku.proto.JoinRoomRequest();
                        if (object.roomId != null)
                            if ($Number(object.roomId) !== 0)
                                message.roomId = object.roomId | 0;
                        return message;
                    };

                    /**
                     * Creates a plain object from a JoinRoomRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.miti99.gomoku.proto.JoinRoomRequest
                     * @static
                     * @param {com.miti99.gomoku.proto.JoinRoomRequest} message JoinRoomRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    JoinRoomRequest.toObject = function (message, options, _depth) {
                        if (!options)
                            options = {};
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        let object = {};
                        if (options.defaults)
                            object.roomId = 0;
                        if (message.roomId != null && $Object.hasOwnProperty.call(message, "roomId"))
                            object.roomId = message.roomId;
                        return object;
                    };

                    /**
                     * Converts this JoinRoomRequest to JSON.
                     * @function toJSON
                     * @memberof com.miti99.gomoku.proto.JoinRoomRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    JoinRoomRequest.prototype.toJSON = function() {
                        return JoinRoomRequest.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the type url for JoinRoomRequest
                     * @function getTypeUrl
                     * @memberof com.miti99.gomoku.proto.JoinRoomRequest
                     * @static
                     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns {string} The type url
                     */
                    JoinRoomRequest.getTypeUrl = function(prefix) {
                        if (prefix === $undefined)
                            prefix = "type.googleapis.com";
                        return prefix + "/com.miti99.gomoku.proto.JoinRoomRequest";
                    };

                    return JoinRoomRequest;
                })();

                proto.GameMoveRequest = (function() {

                    /**
                     * Properties of a GameMoveRequest.
                     * @typedef {Object} com.miti99.gomoku.proto.GameMoveRequest.$Properties
                     * @property {number|null} [row] GameMoveRequest row
                     * @property {number|null} [col] GameMoveRequest col
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */

                    /**
                     * Properties of a GameMoveRequest.
                     * @memberof com.miti99.gomoku.proto
                     * @interface IGameMoveRequest
                     * @augments com.miti99.gomoku.proto.GameMoveRequest.$Properties
                     * @deprecated Use com.miti99.gomoku.proto.GameMoveRequest.$Properties instead.
                     */

                    /**
                     * Shape of a GameMoveRequest.
                     * @typedef {com.miti99.gomoku.proto.GameMoveRequest.$Properties} com.miti99.gomoku.proto.GameMoveRequest.$Shape
                     */

                    /**
                     * Constructs a new GameMoveRequest.
                     * @memberof com.miti99.gomoku.proto
                     * @classdesc Represents a GameMoveRequest.
                     * @constructor
                     * @param {com.miti99.gomoku.proto.GameMoveRequest.$Properties=} [properties] Properties to set
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */
                    const GameMoveRequest = function (properties) {
                        if (properties)
                            for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                    this[keys[i]] = properties[keys[i]];
                    };

                    /**
                     * GameMoveRequest row.
                     * @member {number} row
                     * @memberof com.miti99.gomoku.proto.GameMoveRequest
                     * @instance
                     */
                    GameMoveRequest.prototype.row = 0;

                    /**
                     * GameMoveRequest col.
                     * @member {number} col
                     * @memberof com.miti99.gomoku.proto.GameMoveRequest
                     * @instance
                     */
                    GameMoveRequest.prototype.col = 0;

                    /**
                     * Creates a new GameMoveRequest instance using the specified properties.
                     * @function create
                     * @memberof com.miti99.gomoku.proto.GameMoveRequest
                     * @static
                     * @param {com.miti99.gomoku.proto.GameMoveRequest.$Properties=} [properties] Properties to set
                     * @returns {com.miti99.gomoku.proto.GameMoveRequest} GameMoveRequest instance
                     * @type {{
                     *   (properties: com.miti99.gomoku.proto.GameMoveRequest.$Shape): com.miti99.gomoku.proto.GameMoveRequest & com.miti99.gomoku.proto.GameMoveRequest.$Shape;
                     *   (properties?: com.miti99.gomoku.proto.GameMoveRequest.$Properties): com.miti99.gomoku.proto.GameMoveRequest;
                     * }}
                     */
                    GameMoveRequest.create = function(properties) {
                        return new GameMoveRequest(properties);
                    };

                    /**
                     * Encodes the specified GameMoveRequest message. Does not implicitly {@link com.miti99.gomoku.proto.GameMoveRequest.verify|verify} messages.
                     * @function encode
                     * @memberof com.miti99.gomoku.proto.GameMoveRequest
                     * @static
                     * @param {com.miti99.gomoku.proto.GameMoveRequest.$Properties} message GameMoveRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GameMoveRequest.encode = function (message, writer, _depth) {
                        if (!writer)
                            writer = $Writer.create();
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        if (message.row != null && $Object.hasOwnProperty.call(message, "row") && message.row !== 0)
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.row);
                        if (message.col != null && $Object.hasOwnProperty.call(message, "col") && message.col !== 0)
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.col);
                        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                            for (let i = 0; i < message.$unknowns.length; ++i)
                                writer.raw(message.$unknowns[i]);
                        return writer;
                    };

                    /**
                     * Encodes the specified GameMoveRequest message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.GameMoveRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.miti99.gomoku.proto.GameMoveRequest
                     * @static
                     * @param {com.miti99.gomoku.proto.GameMoveRequest.$Properties} message GameMoveRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GameMoveRequest.encodeDelimited = function(message, writer) {
                        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                    };

                    /**
                     * Decodes a GameMoveRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.miti99.gomoku.proto.GameMoveRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.GameMoveRequest & com.miti99.gomoku.proto.GameMoveRequest.$Shape} GameMoveRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GameMoveRequest.decode = function (reader, length, _end, _depth, _target) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $Reader.recursionLimit)
                            throw $Error("max depth exceeded");
                        let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.com.miti99.gomoku.proto.GameMoveRequest(), value;
                        while (reader.pos < end) {
                            let start = reader.pos;
                            let tag = reader.tag();
                            if (tag === _end) {
                                _end = $undefined;
                                break;
                            }
                            let wireType = tag & 7;
                            switch (tag >>>= 3) {
                            case 1: {
                                    if (wireType !== 0)
                                        break;
                                    if (value = reader.int32())
                                        message.row = value;
                                    else
                                        delete message.row;
                                    continue;
                                }
                            case 2: {
                                    if (wireType !== 0)
                                        break;
                                    if (value = reader.int32())
                                        message.col = value;
                                    else
                                        delete message.col;
                                    continue;
                                }
                            }
                            reader.skipType(wireType, _depth, tag);
                            if (!reader.discardUnknown) {
                                $util.makeProp(message, "$unknowns", false);
                                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                            }
                        }
                        if (_end !== $undefined)
                            throw $Error("missing end group");
                        return message;
                    };

                    /**
                     * Decodes a GameMoveRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.miti99.gomoku.proto.GameMoveRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.GameMoveRequest & com.miti99.gomoku.proto.GameMoveRequest.$Shape} GameMoveRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GameMoveRequest.decodeDelimited = function(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a GameMoveRequest message.
                     * @function verify
                     * @memberof com.miti99.gomoku.proto.GameMoveRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GameMoveRequest.verify = function (message, _depth) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            return "max depth exceeded";
                        if (message.row != null && $Object.hasOwnProperty.call(message, "row"))
                            if (!$util.isInteger(message.row))
                                return "row: integer expected";
                        if (message.col != null && $Object.hasOwnProperty.call(message, "col"))
                            if (!$util.isInteger(message.col))
                                return "col: integer expected";
                        return null;
                    };

                    /**
                     * Creates a GameMoveRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.miti99.gomoku.proto.GameMoveRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.miti99.gomoku.proto.GameMoveRequest} GameMoveRequest
                     */
                    GameMoveRequest.fromObject = function (object, _depth) {
                        if (object instanceof $root.com.miti99.gomoku.proto.GameMoveRequest)
                            return object;
                        if (!$util.isObject(object))
                            throw $TypeError(".com.miti99.gomoku.proto.GameMoveRequest: object expected");
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        let message = new $root.com.miti99.gomoku.proto.GameMoveRequest();
                        if (object.row != null)
                            if ($Number(object.row) !== 0)
                                message.row = object.row | 0;
                        if (object.col != null)
                            if ($Number(object.col) !== 0)
                                message.col = object.col | 0;
                        return message;
                    };

                    /**
                     * Creates a plain object from a GameMoveRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.miti99.gomoku.proto.GameMoveRequest
                     * @static
                     * @param {com.miti99.gomoku.proto.GameMoveRequest} message GameMoveRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GameMoveRequest.toObject = function (message, options, _depth) {
                        if (!options)
                            options = {};
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        let object = {};
                        if (options.defaults) {
                            object.row = 0;
                            object.col = 0;
                        }
                        if (message.row != null && $Object.hasOwnProperty.call(message, "row"))
                            object.row = message.row;
                        if (message.col != null && $Object.hasOwnProperty.call(message, "col"))
                            object.col = message.col;
                        return object;
                    };

                    /**
                     * Converts this GameMoveRequest to JSON.
                     * @function toJSON
                     * @memberof com.miti99.gomoku.proto.GameMoveRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GameMoveRequest.prototype.toJSON = function() {
                        return GameMoveRequest.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the type url for GameMoveRequest
                     * @function getTypeUrl
                     * @memberof com.miti99.gomoku.proto.GameMoveRequest
                     * @static
                     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns {string} The type url
                     */
                    GameMoveRequest.getTypeUrl = function(prefix) {
                        if (prefix === $undefined)
                            prefix = "type.googleapis.com";
                        return prefix + "/com.miti99.gomoku.proto.GameMoveRequest";
                    };

                    return GameMoveRequest;
                })();

                proto.GameResetRequest = (function() {

                    /**
                     * Properties of a GameResetRequest.
                     * @typedef {Object} com.miti99.gomoku.proto.GameResetRequest.$Properties
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */

                    /**
                     * Properties of a GameResetRequest.
                     * @memberof com.miti99.gomoku.proto
                     * @interface IGameResetRequest
                     * @augments com.miti99.gomoku.proto.GameResetRequest.$Properties
                     * @deprecated Use com.miti99.gomoku.proto.GameResetRequest.$Properties instead.
                     */

                    /**
                     * Shape of a GameResetRequest.
                     * @typedef {com.miti99.gomoku.proto.GameResetRequest.$Properties} com.miti99.gomoku.proto.GameResetRequest.$Shape
                     */

                    /**
                     * Constructs a new GameResetRequest.
                     * @memberof com.miti99.gomoku.proto
                     * @classdesc Represents a GameResetRequest.
                     * @constructor
                     * @param {com.miti99.gomoku.proto.GameResetRequest.$Properties=} [properties] Properties to set
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */
                    const GameResetRequest = function (properties) {
                        if (properties)
                            for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                    this[keys[i]] = properties[keys[i]];
                    };

                    /**
                     * Creates a new GameResetRequest instance using the specified properties.
                     * @function create
                     * @memberof com.miti99.gomoku.proto.GameResetRequest
                     * @static
                     * @param {com.miti99.gomoku.proto.GameResetRequest.$Properties=} [properties] Properties to set
                     * @returns {com.miti99.gomoku.proto.GameResetRequest} GameResetRequest instance
                     * @type {{
                     *   (properties: com.miti99.gomoku.proto.GameResetRequest.$Shape): com.miti99.gomoku.proto.GameResetRequest & com.miti99.gomoku.proto.GameResetRequest.$Shape;
                     *   (properties?: com.miti99.gomoku.proto.GameResetRequest.$Properties): com.miti99.gomoku.proto.GameResetRequest;
                     * }}
                     */
                    GameResetRequest.create = function(properties) {
                        return new GameResetRequest(properties);
                    };

                    /**
                     * Encodes the specified GameResetRequest message. Does not implicitly {@link com.miti99.gomoku.proto.GameResetRequest.verify|verify} messages.
                     * @function encode
                     * @memberof com.miti99.gomoku.proto.GameResetRequest
                     * @static
                     * @param {com.miti99.gomoku.proto.GameResetRequest.$Properties} message GameResetRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GameResetRequest.encode = function (message, writer, _depth) {
                        if (!writer)
                            writer = $Writer.create();
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                            for (let i = 0; i < message.$unknowns.length; ++i)
                                writer.raw(message.$unknowns[i]);
                        return writer;
                    };

                    /**
                     * Encodes the specified GameResetRequest message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.GameResetRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.miti99.gomoku.proto.GameResetRequest
                     * @static
                     * @param {com.miti99.gomoku.proto.GameResetRequest.$Properties} message GameResetRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GameResetRequest.encodeDelimited = function(message, writer) {
                        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                    };

                    /**
                     * Decodes a GameResetRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.miti99.gomoku.proto.GameResetRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.GameResetRequest & com.miti99.gomoku.proto.GameResetRequest.$Shape} GameResetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GameResetRequest.decode = function (reader, length, _end, _depth, _target) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $Reader.recursionLimit)
                            throw $Error("max depth exceeded");
                        let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.com.miti99.gomoku.proto.GameResetRequest();
                        while (reader.pos < end) {
                            let start = reader.pos;
                            let tag = reader.tag();
                            if (tag === _end) {
                                _end = $undefined;
                                break;
                            }
                            reader.skipType(tag & 7, _depth, tag);
                            if (!reader.discardUnknown) {
                                $util.makeProp(message, "$unknowns", false);
                                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                            }
                        }
                        if (_end !== $undefined)
                            throw $Error("missing end group");
                        return message;
                    };

                    /**
                     * Decodes a GameResetRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.miti99.gomoku.proto.GameResetRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.GameResetRequest & com.miti99.gomoku.proto.GameResetRequest.$Shape} GameResetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GameResetRequest.decodeDelimited = function(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a GameResetRequest message.
                     * @function verify
                     * @memberof com.miti99.gomoku.proto.GameResetRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GameResetRequest.verify = function (message, _depth) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            return "max depth exceeded";
                        return null;
                    };

                    /**
                     * Creates a GameResetRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.miti99.gomoku.proto.GameResetRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.miti99.gomoku.proto.GameResetRequest} GameResetRequest
                     */
                    GameResetRequest.fromObject = function (object, _depth) {
                        if (object instanceof $root.com.miti99.gomoku.proto.GameResetRequest)
                            return object;
                        if (!$util.isObject(object))
                            throw $TypeError(".com.miti99.gomoku.proto.GameResetRequest: object expected");
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        return new $root.com.miti99.gomoku.proto.GameResetRequest();
                    };

                    /**
                     * Creates a plain object from a GameResetRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.miti99.gomoku.proto.GameResetRequest
                     * @static
                     * @param {com.miti99.gomoku.proto.GameResetRequest} message GameResetRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GameResetRequest.toObject = function () {
                        return {};
                    };

                    /**
                     * Converts this GameResetRequest to JSON.
                     * @function toJSON
                     * @memberof com.miti99.gomoku.proto.GameResetRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GameResetRequest.prototype.toJSON = function() {
                        return GameResetRequest.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the type url for GameResetRequest
                     * @function getTypeUrl
                     * @memberof com.miti99.gomoku.proto.GameResetRequest
                     * @static
                     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns {string} The type url
                     */
                    GameResetRequest.getTypeUrl = function(prefix) {
                        if (prefix === $undefined)
                            prefix = "type.googleapis.com";
                        return prefix + "/com.miti99.gomoku.proto.GameResetRequest";
                    };

                    return GameResetRequest;
                })();

                proto.WatchGameRequest = (function() {

                    /**
                     * Properties of a WatchGameRequest.
                     * @typedef {Object} com.miti99.gomoku.proto.WatchGameRequest.$Properties
                     * @property {number|null} [roomId] WatchGameRequest roomId
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */

                    /**
                     * Properties of a WatchGameRequest.
                     * @memberof com.miti99.gomoku.proto
                     * @interface IWatchGameRequest
                     * @augments com.miti99.gomoku.proto.WatchGameRequest.$Properties
                     * @deprecated Use com.miti99.gomoku.proto.WatchGameRequest.$Properties instead.
                     */

                    /**
                     * Shape of a WatchGameRequest.
                     * @typedef {com.miti99.gomoku.proto.WatchGameRequest.$Properties} com.miti99.gomoku.proto.WatchGameRequest.$Shape
                     */

                    /**
                     * Constructs a new WatchGameRequest.
                     * @memberof com.miti99.gomoku.proto
                     * @classdesc Represents a WatchGameRequest.
                     * @constructor
                     * @param {com.miti99.gomoku.proto.WatchGameRequest.$Properties=} [properties] Properties to set
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */
                    const WatchGameRequest = function (properties) {
                        if (properties)
                            for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                    this[keys[i]] = properties[keys[i]];
                    };

                    /**
                     * WatchGameRequest roomId.
                     * @member {number} roomId
                     * @memberof com.miti99.gomoku.proto.WatchGameRequest
                     * @instance
                     */
                    WatchGameRequest.prototype.roomId = 0;

                    /**
                     * Creates a new WatchGameRequest instance using the specified properties.
                     * @function create
                     * @memberof com.miti99.gomoku.proto.WatchGameRequest
                     * @static
                     * @param {com.miti99.gomoku.proto.WatchGameRequest.$Properties=} [properties] Properties to set
                     * @returns {com.miti99.gomoku.proto.WatchGameRequest} WatchGameRequest instance
                     * @type {{
                     *   (properties: com.miti99.gomoku.proto.WatchGameRequest.$Shape): com.miti99.gomoku.proto.WatchGameRequest & com.miti99.gomoku.proto.WatchGameRequest.$Shape;
                     *   (properties?: com.miti99.gomoku.proto.WatchGameRequest.$Properties): com.miti99.gomoku.proto.WatchGameRequest;
                     * }}
                     */
                    WatchGameRequest.create = function(properties) {
                        return new WatchGameRequest(properties);
                    };

                    /**
                     * Encodes the specified WatchGameRequest message. Does not implicitly {@link com.miti99.gomoku.proto.WatchGameRequest.verify|verify} messages.
                     * @function encode
                     * @memberof com.miti99.gomoku.proto.WatchGameRequest
                     * @static
                     * @param {com.miti99.gomoku.proto.WatchGameRequest.$Properties} message WatchGameRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    WatchGameRequest.encode = function (message, writer, _depth) {
                        if (!writer)
                            writer = $Writer.create();
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        if (message.roomId != null && $Object.hasOwnProperty.call(message, "roomId") && message.roomId !== 0)
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roomId);
                        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                            for (let i = 0; i < message.$unknowns.length; ++i)
                                writer.raw(message.$unknowns[i]);
                        return writer;
                    };

                    /**
                     * Encodes the specified WatchGameRequest message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.WatchGameRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.miti99.gomoku.proto.WatchGameRequest
                     * @static
                     * @param {com.miti99.gomoku.proto.WatchGameRequest.$Properties} message WatchGameRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    WatchGameRequest.encodeDelimited = function(message, writer) {
                        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                    };

                    /**
                     * Decodes a WatchGameRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.miti99.gomoku.proto.WatchGameRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.WatchGameRequest & com.miti99.gomoku.proto.WatchGameRequest.$Shape} WatchGameRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    WatchGameRequest.decode = function (reader, length, _end, _depth, _target) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $Reader.recursionLimit)
                            throw $Error("max depth exceeded");
                        let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.com.miti99.gomoku.proto.WatchGameRequest(), value;
                        while (reader.pos < end) {
                            let start = reader.pos;
                            let tag = reader.tag();
                            if (tag === _end) {
                                _end = $undefined;
                                break;
                            }
                            let wireType = tag & 7;
                            switch (tag >>>= 3) {
                            case 1: {
                                    if (wireType !== 0)
                                        break;
                                    if (value = reader.int32())
                                        message.roomId = value;
                                    else
                                        delete message.roomId;
                                    continue;
                                }
                            }
                            reader.skipType(wireType, _depth, tag);
                            if (!reader.discardUnknown) {
                                $util.makeProp(message, "$unknowns", false);
                                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                            }
                        }
                        if (_end !== $undefined)
                            throw $Error("missing end group");
                        return message;
                    };

                    /**
                     * Decodes a WatchGameRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.miti99.gomoku.proto.WatchGameRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.WatchGameRequest & com.miti99.gomoku.proto.WatchGameRequest.$Shape} WatchGameRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    WatchGameRequest.decodeDelimited = function(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a WatchGameRequest message.
                     * @function verify
                     * @memberof com.miti99.gomoku.proto.WatchGameRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    WatchGameRequest.verify = function (message, _depth) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            return "max depth exceeded";
                        if (message.roomId != null && $Object.hasOwnProperty.call(message, "roomId"))
                            if (!$util.isInteger(message.roomId))
                                return "roomId: integer expected";
                        return null;
                    };

                    /**
                     * Creates a WatchGameRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.miti99.gomoku.proto.WatchGameRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.miti99.gomoku.proto.WatchGameRequest} WatchGameRequest
                     */
                    WatchGameRequest.fromObject = function (object, _depth) {
                        if (object instanceof $root.com.miti99.gomoku.proto.WatchGameRequest)
                            return object;
                        if (!$util.isObject(object))
                            throw $TypeError(".com.miti99.gomoku.proto.WatchGameRequest: object expected");
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        let message = new $root.com.miti99.gomoku.proto.WatchGameRequest();
                        if (object.roomId != null)
                            if ($Number(object.roomId) !== 0)
                                message.roomId = object.roomId | 0;
                        return message;
                    };

                    /**
                     * Creates a plain object from a WatchGameRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.miti99.gomoku.proto.WatchGameRequest
                     * @static
                     * @param {com.miti99.gomoku.proto.WatchGameRequest} message WatchGameRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    WatchGameRequest.toObject = function (message, options, _depth) {
                        if (!options)
                            options = {};
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        let object = {};
                        if (options.defaults)
                            object.roomId = 0;
                        if (message.roomId != null && $Object.hasOwnProperty.call(message, "roomId"))
                            object.roomId = message.roomId;
                        return object;
                    };

                    /**
                     * Converts this WatchGameRequest to JSON.
                     * @function toJSON
                     * @memberof com.miti99.gomoku.proto.WatchGameRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    WatchGameRequest.prototype.toJSON = function() {
                        return WatchGameRequest.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the type url for WatchGameRequest
                     * @function getTypeUrl
                     * @memberof com.miti99.gomoku.proto.WatchGameRequest
                     * @static
                     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns {string} The type url
                     */
                    WatchGameRequest.getTypeUrl = function(prefix) {
                        if (prefix === $undefined)
                            prefix = "type.googleapis.com";
                        return prefix + "/com.miti99.gomoku.proto.WatchGameRequest";
                    };

                    return WatchGameRequest;
                })();

                proto.WatchGameExitRequest = (function() {

                    /**
                     * Properties of a WatchGameExitRequest.
                     * @typedef {Object} com.miti99.gomoku.proto.WatchGameExitRequest.$Properties
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */

                    /**
                     * Properties of a WatchGameExitRequest.
                     * @memberof com.miti99.gomoku.proto
                     * @interface IWatchGameExitRequest
                     * @augments com.miti99.gomoku.proto.WatchGameExitRequest.$Properties
                     * @deprecated Use com.miti99.gomoku.proto.WatchGameExitRequest.$Properties instead.
                     */

                    /**
                     * Shape of a WatchGameExitRequest.
                     * @typedef {com.miti99.gomoku.proto.WatchGameExitRequest.$Properties} com.miti99.gomoku.proto.WatchGameExitRequest.$Shape
                     */

                    /**
                     * Constructs a new WatchGameExitRequest.
                     * @memberof com.miti99.gomoku.proto
                     * @classdesc Represents a WatchGameExitRequest.
                     * @constructor
                     * @param {com.miti99.gomoku.proto.WatchGameExitRequest.$Properties=} [properties] Properties to set
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */
                    const WatchGameExitRequest = function (properties) {
                        if (properties)
                            for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                    this[keys[i]] = properties[keys[i]];
                    };

                    /**
                     * Creates a new WatchGameExitRequest instance using the specified properties.
                     * @function create
                     * @memberof com.miti99.gomoku.proto.WatchGameExitRequest
                     * @static
                     * @param {com.miti99.gomoku.proto.WatchGameExitRequest.$Properties=} [properties] Properties to set
                     * @returns {com.miti99.gomoku.proto.WatchGameExitRequest} WatchGameExitRequest instance
                     * @type {{
                     *   (properties: com.miti99.gomoku.proto.WatchGameExitRequest.$Shape): com.miti99.gomoku.proto.WatchGameExitRequest & com.miti99.gomoku.proto.WatchGameExitRequest.$Shape;
                     *   (properties?: com.miti99.gomoku.proto.WatchGameExitRequest.$Properties): com.miti99.gomoku.proto.WatchGameExitRequest;
                     * }}
                     */
                    WatchGameExitRequest.create = function(properties) {
                        return new WatchGameExitRequest(properties);
                    };

                    /**
                     * Encodes the specified WatchGameExitRequest message. Does not implicitly {@link com.miti99.gomoku.proto.WatchGameExitRequest.verify|verify} messages.
                     * @function encode
                     * @memberof com.miti99.gomoku.proto.WatchGameExitRequest
                     * @static
                     * @param {com.miti99.gomoku.proto.WatchGameExitRequest.$Properties} message WatchGameExitRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    WatchGameExitRequest.encode = function (message, writer, _depth) {
                        if (!writer)
                            writer = $Writer.create();
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                            for (let i = 0; i < message.$unknowns.length; ++i)
                                writer.raw(message.$unknowns[i]);
                        return writer;
                    };

                    /**
                     * Encodes the specified WatchGameExitRequest message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.WatchGameExitRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.miti99.gomoku.proto.WatchGameExitRequest
                     * @static
                     * @param {com.miti99.gomoku.proto.WatchGameExitRequest.$Properties} message WatchGameExitRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    WatchGameExitRequest.encodeDelimited = function(message, writer) {
                        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                    };

                    /**
                     * Decodes a WatchGameExitRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.miti99.gomoku.proto.WatchGameExitRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.WatchGameExitRequest & com.miti99.gomoku.proto.WatchGameExitRequest.$Shape} WatchGameExitRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    WatchGameExitRequest.decode = function (reader, length, _end, _depth, _target) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $Reader.recursionLimit)
                            throw $Error("max depth exceeded");
                        let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.com.miti99.gomoku.proto.WatchGameExitRequest();
                        while (reader.pos < end) {
                            let start = reader.pos;
                            let tag = reader.tag();
                            if (tag === _end) {
                                _end = $undefined;
                                break;
                            }
                            reader.skipType(tag & 7, _depth, tag);
                            if (!reader.discardUnknown) {
                                $util.makeProp(message, "$unknowns", false);
                                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                            }
                        }
                        if (_end !== $undefined)
                            throw $Error("missing end group");
                        return message;
                    };

                    /**
                     * Decodes a WatchGameExitRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.miti99.gomoku.proto.WatchGameExitRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.WatchGameExitRequest & com.miti99.gomoku.proto.WatchGameExitRequest.$Shape} WatchGameExitRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    WatchGameExitRequest.decodeDelimited = function(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a WatchGameExitRequest message.
                     * @function verify
                     * @memberof com.miti99.gomoku.proto.WatchGameExitRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    WatchGameExitRequest.verify = function (message, _depth) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            return "max depth exceeded";
                        return null;
                    };

                    /**
                     * Creates a WatchGameExitRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.miti99.gomoku.proto.WatchGameExitRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.miti99.gomoku.proto.WatchGameExitRequest} WatchGameExitRequest
                     */
                    WatchGameExitRequest.fromObject = function (object, _depth) {
                        if (object instanceof $root.com.miti99.gomoku.proto.WatchGameExitRequest)
                            return object;
                        if (!$util.isObject(object))
                            throw $TypeError(".com.miti99.gomoku.proto.WatchGameExitRequest: object expected");
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        return new $root.com.miti99.gomoku.proto.WatchGameExitRequest();
                    };

                    /**
                     * Creates a plain object from a WatchGameExitRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.miti99.gomoku.proto.WatchGameExitRequest
                     * @static
                     * @param {com.miti99.gomoku.proto.WatchGameExitRequest} message WatchGameExitRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    WatchGameExitRequest.toObject = function () {
                        return {};
                    };

                    /**
                     * Converts this WatchGameExitRequest to JSON.
                     * @function toJSON
                     * @memberof com.miti99.gomoku.proto.WatchGameExitRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    WatchGameExitRequest.prototype.toJSON = function() {
                        return WatchGameExitRequest.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the type url for WatchGameExitRequest
                     * @function getTypeUrl
                     * @memberof com.miti99.gomoku.proto.WatchGameExitRequest
                     * @static
                     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns {string} The type url
                     */
                    WatchGameExitRequest.getTypeUrl = function(prefix) {
                        if (prefix === $undefined)
                            prefix = "type.googleapis.com";
                        return prefix + "/com.miti99.gomoku.proto.WatchGameExitRequest";
                    };

                    return WatchGameExitRequest;
                })();

                proto.ClientExitRequest = (function() {

                    /**
                     * Properties of a ClientExitRequest.
                     * @typedef {Object} com.miti99.gomoku.proto.ClientExitRequest.$Properties
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */

                    /**
                     * Properties of a ClientExitRequest.
                     * @memberof com.miti99.gomoku.proto
                     * @interface IClientExitRequest
                     * @augments com.miti99.gomoku.proto.ClientExitRequest.$Properties
                     * @deprecated Use com.miti99.gomoku.proto.ClientExitRequest.$Properties instead.
                     */

                    /**
                     * Shape of a ClientExitRequest.
                     * @typedef {com.miti99.gomoku.proto.ClientExitRequest.$Properties} com.miti99.gomoku.proto.ClientExitRequest.$Shape
                     */

                    /**
                     * Constructs a new ClientExitRequest.
                     * @memberof com.miti99.gomoku.proto
                     * @classdesc Represents a ClientExitRequest.
                     * @constructor
                     * @param {com.miti99.gomoku.proto.ClientExitRequest.$Properties=} [properties] Properties to set
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */
                    const ClientExitRequest = function (properties) {
                        if (properties)
                            for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                    this[keys[i]] = properties[keys[i]];
                    };

                    /**
                     * Creates a new ClientExitRequest instance using the specified properties.
                     * @function create
                     * @memberof com.miti99.gomoku.proto.ClientExitRequest
                     * @static
                     * @param {com.miti99.gomoku.proto.ClientExitRequest.$Properties=} [properties] Properties to set
                     * @returns {com.miti99.gomoku.proto.ClientExitRequest} ClientExitRequest instance
                     * @type {{
                     *   (properties: com.miti99.gomoku.proto.ClientExitRequest.$Shape): com.miti99.gomoku.proto.ClientExitRequest & com.miti99.gomoku.proto.ClientExitRequest.$Shape;
                     *   (properties?: com.miti99.gomoku.proto.ClientExitRequest.$Properties): com.miti99.gomoku.proto.ClientExitRequest;
                     * }}
                     */
                    ClientExitRequest.create = function(properties) {
                        return new ClientExitRequest(properties);
                    };

                    /**
                     * Encodes the specified ClientExitRequest message. Does not implicitly {@link com.miti99.gomoku.proto.ClientExitRequest.verify|verify} messages.
                     * @function encode
                     * @memberof com.miti99.gomoku.proto.ClientExitRequest
                     * @static
                     * @param {com.miti99.gomoku.proto.ClientExitRequest.$Properties} message ClientExitRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ClientExitRequest.encode = function (message, writer, _depth) {
                        if (!writer)
                            writer = $Writer.create();
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                            for (let i = 0; i < message.$unknowns.length; ++i)
                                writer.raw(message.$unknowns[i]);
                        return writer;
                    };

                    /**
                     * Encodes the specified ClientExitRequest message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.ClientExitRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.miti99.gomoku.proto.ClientExitRequest
                     * @static
                     * @param {com.miti99.gomoku.proto.ClientExitRequest.$Properties} message ClientExitRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ClientExitRequest.encodeDelimited = function(message, writer) {
                        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                    };

                    /**
                     * Decodes a ClientExitRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.miti99.gomoku.proto.ClientExitRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.ClientExitRequest & com.miti99.gomoku.proto.ClientExitRequest.$Shape} ClientExitRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ClientExitRequest.decode = function (reader, length, _end, _depth, _target) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $Reader.recursionLimit)
                            throw $Error("max depth exceeded");
                        let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.com.miti99.gomoku.proto.ClientExitRequest();
                        while (reader.pos < end) {
                            let start = reader.pos;
                            let tag = reader.tag();
                            if (tag === _end) {
                                _end = $undefined;
                                break;
                            }
                            reader.skipType(tag & 7, _depth, tag);
                            if (!reader.discardUnknown) {
                                $util.makeProp(message, "$unknowns", false);
                                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                            }
                        }
                        if (_end !== $undefined)
                            throw $Error("missing end group");
                        return message;
                    };

                    /**
                     * Decodes a ClientExitRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.miti99.gomoku.proto.ClientExitRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.ClientExitRequest & com.miti99.gomoku.proto.ClientExitRequest.$Shape} ClientExitRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ClientExitRequest.decodeDelimited = function(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ClientExitRequest message.
                     * @function verify
                     * @memberof com.miti99.gomoku.proto.ClientExitRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ClientExitRequest.verify = function (message, _depth) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            return "max depth exceeded";
                        return null;
                    };

                    /**
                     * Creates a ClientExitRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.miti99.gomoku.proto.ClientExitRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.miti99.gomoku.proto.ClientExitRequest} ClientExitRequest
                     */
                    ClientExitRequest.fromObject = function (object, _depth) {
                        if (object instanceof $root.com.miti99.gomoku.proto.ClientExitRequest)
                            return object;
                        if (!$util.isObject(object))
                            throw $TypeError(".com.miti99.gomoku.proto.ClientExitRequest: object expected");
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        return new $root.com.miti99.gomoku.proto.ClientExitRequest();
                    };

                    /**
                     * Creates a plain object from a ClientExitRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.miti99.gomoku.proto.ClientExitRequest
                     * @static
                     * @param {com.miti99.gomoku.proto.ClientExitRequest} message ClientExitRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ClientExitRequest.toObject = function () {
                        return {};
                    };

                    /**
                     * Converts this ClientExitRequest to JSON.
                     * @function toJSON
                     * @memberof com.miti99.gomoku.proto.ClientExitRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ClientExitRequest.prototype.toJSON = function() {
                        return ClientExitRequest.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the type url for ClientExitRequest
                     * @function getTypeUrl
                     * @memberof com.miti99.gomoku.proto.ClientExitRequest
                     * @static
                     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns {string} The type url
                     */
                    ClientExitRequest.getTypeUrl = function(prefix) {
                        if (prefix === $undefined)
                            prefix = "type.googleapis.com";
                        return prefix + "/com.miti99.gomoku.proto.ClientExitRequest";
                    };

                    return ClientExitRequest;
                })();

                /**
                 * Piece enum.
                 * @name com.miti99.gomoku.proto.Piece
                 * @enum {number}
                 * @property {number} PIECE_UNSPECIFIED=0 PIECE_UNSPECIFIED value
                 * @property {number} BLACK=1 BLACK value
                 * @property {number} WHITE=2 WHITE value
                 */
                proto.Piece = (function() {
                    const valuesById = $Object.create(null), values = $Object.create(valuesById);
                    values[valuesById[0] = "PIECE_UNSPECIFIED"] = 0;
                    values[valuesById[1] = "BLACK"] = 1;
                    values[valuesById[2] = "WHITE"] = 2;
                    return values;
                })();

                /**
                 * GameResult enum.
                 * @name com.miti99.gomoku.proto.GameResult
                 * @enum {number}
                 * @property {number} GAME_RESULT_UNSPECIFIED=0 GAME_RESULT_UNSPECIFIED value
                 * @property {number} BLACK_WIN=1 BLACK_WIN value
                 * @property {number} WHITE_WIN=2 WHITE_WIN value
                 * @property {number} DRAW=3 DRAW value
                 */
                proto.GameResult = (function() {
                    const valuesById = $Object.create(null), values = $Object.create(valuesById);
                    values[valuesById[0] = "GAME_RESULT_UNSPECIFIED"] = 0;
                    values[valuesById[1] = "BLACK_WIN"] = 1;
                    values[valuesById[2] = "WHITE_WIN"] = 2;
                    values[valuesById[3] = "DRAW"] = 3;
                    return values;
                })();

                /**
                 * RoomType enum.
                 * @name com.miti99.gomoku.proto.RoomType
                 * @enum {number}
                 * @property {number} ROOM_TYPE_UNSPECIFIED=0 ROOM_TYPE_UNSPECIFIED value
                 * @property {number} PVP=1 PVP value
                 * @property {number} PVE=2 PVE value
                 */
                proto.RoomType = (function() {
                    const valuesById = $Object.create(null), values = $Object.create(valuesById);
                    values[valuesById[0] = "ROOM_TYPE_UNSPECIFIED"] = 0;
                    values[valuesById[1] = "PVP"] = 1;
                    values[valuesById[2] = "PVE"] = 2;
                    return values;
                })();

                /**
                 * RoomStatus enum.
                 * @name com.miti99.gomoku.proto.RoomStatus
                 * @enum {number}
                 * @property {number} ROOM_STATUS_UNSPECIFIED=0 ROOM_STATUS_UNSPECIFIED value
                 * @property {number} WAITING=1 WAITING value
                 * @property {number} PLAYING=2 PLAYING value
                 * @property {number} FINISHED=3 FINISHED value
                 */
                proto.RoomStatus = (function() {
                    const valuesById = $Object.create(null), values = $Object.create(valuesById);
                    values[valuesById[0] = "ROOM_STATUS_UNSPECIFIED"] = 0;
                    values[valuesById[1] = "WAITING"] = 1;
                    values[valuesById[2] = "PLAYING"] = 2;
                    values[valuesById[3] = "FINISHED"] = 3;
                    return values;
                })();

                proto.Response = (function() {

                    /**
                     * Properties of a Response.
                     * @typedef {Object} com.miti99.gomoku.proto.Response.$Properties
                     * @property {com.miti99.gomoku.proto.ClientConnectResponse.$Properties|null} [clientConnect] Response clientConnect
                     * @property {com.miti99.gomoku.proto.NicknameSetResponse.$Properties|null} [nicknameSet] Response nicknameSet
                     * @property {com.miti99.gomoku.proto.ShowOptionsResponse.$Properties|null} [showOptions] Response showOptions
                     * @property {com.miti99.gomoku.proto.ShowRoomsResponse.$Properties|null} [showRooms] Response showRooms
                     * @property {com.miti99.gomoku.proto.RoomCreateSuccessResponse.$Properties|null} [roomCreateSuccess] Response roomCreateSuccess
                     * @property {com.miti99.gomoku.proto.RoomJoinSuccessResponse.$Properties|null} [roomJoinSuccess] Response roomJoinSuccess
                     * @property {com.miti99.gomoku.proto.RoomJoinFailFullResponse.$Properties|null} [roomJoinFailFull] Response roomJoinFailFull
                     * @property {com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse.$Properties|null} [roomJoinFailNotFound] Response roomJoinFailNotFound
                     * @property {com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse.$Properties|null} [roomPlayFailNotFound] Response roomPlayFailNotFound
                     * @property {com.miti99.gomoku.proto.GameStartingResponse.$Properties|null} [gameStarting] Response gameStarting
                     * @property {com.miti99.gomoku.proto.GameMoveSuccessResponse.$Properties|null} [gameMoveSuccess] Response gameMoveSuccess
                     * @property {com.miti99.gomoku.proto.GameMoveInvalidResponse.$Properties|null} [gameMoveInvalid] Response gameMoveInvalid
                     * @property {com.miti99.gomoku.proto.GameMoveOccupiedResponse.$Properties|null} [gameMoveOccupied] Response gameMoveOccupied
                     * @property {com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse.$Properties|null} [gameMoveOutOfBounds] Response gameMoveOutOfBounds
                     * @property {com.miti99.gomoku.proto.GameMoveNotYourTurnResponse.$Properties|null} [gameMoveNotYourTurn] Response gameMoveNotYourTurn
                     * @property {com.miti99.gomoku.proto.GameOverResponse.$Properties|null} [gameOver] Response gameOver
                     * @property {com.miti99.gomoku.proto.PveDifficultyNotSupportResponse.$Properties|null} [pveDifficultyNotSupport] Response pveDifficultyNotSupport
                     * @property {com.miti99.gomoku.proto.WatchGameSuccessResponse.$Properties|null} [watchGameSuccess] Response watchGameSuccess
                     * @property {com.miti99.gomoku.proto.ClientExitResponse.$Properties|null} [clientExit] Response clientExit
                     * @property {com.miti99.gomoku.proto.SpectatorCannotActResponse.$Properties|null} [spectatorCannotAct] Response spectatorCannotAct
                     * @property {"clientConnect"|"nicknameSet"|"showOptions"|"showRooms"|"roomCreateSuccess"|"roomJoinSuccess"|"roomJoinFailFull"|"roomJoinFailNotFound"|"roomPlayFailNotFound"|"gameStarting"|"gameMoveSuccess"|"gameMoveInvalid"|"gameMoveOccupied"|"gameMoveOutOfBounds"|"gameMoveNotYourTurn"|"gameOver"|"pveDifficultyNotSupport"|"watchGameSuccess"|"clientExit"|"spectatorCannotAct"} [payload] Response payload
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */

                    /**
                     * Properties of a Response.
                     * @memberof com.miti99.gomoku.proto
                     * @interface IResponse
                     * @augments com.miti99.gomoku.proto.Response.$Properties
                     * @deprecated Use com.miti99.gomoku.proto.Response.$Properties instead.
                     */

                    /**
                     * Narrowed shape of a Response.
                     * @typedef {{
                     *   clientConnect?: com.miti99.gomoku.proto.ClientConnectResponse.$Shape|null;
                     *   nicknameSet?: com.miti99.gomoku.proto.NicknameSetResponse.$Shape|null;
                     *   showOptions?: com.miti99.gomoku.proto.ShowOptionsResponse.$Shape|null;
                     *   showRooms?: com.miti99.gomoku.proto.ShowRoomsResponse.$Shape|null;
                     *   roomCreateSuccess?: com.miti99.gomoku.proto.RoomCreateSuccessResponse.$Shape|null;
                     *   roomJoinSuccess?: com.miti99.gomoku.proto.RoomJoinSuccessResponse.$Shape|null;
                     *   roomJoinFailFull?: com.miti99.gomoku.proto.RoomJoinFailFullResponse.$Shape|null;
                     *   roomJoinFailNotFound?: com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse.$Shape|null;
                     *   roomPlayFailNotFound?: com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse.$Shape|null;
                     *   gameStarting?: com.miti99.gomoku.proto.GameStartingResponse.$Shape|null;
                     *   gameMoveSuccess?: com.miti99.gomoku.proto.GameMoveSuccessResponse.$Shape|null;
                     *   gameMoveInvalid?: com.miti99.gomoku.proto.GameMoveInvalidResponse.$Shape|null;
                     *   gameMoveOccupied?: com.miti99.gomoku.proto.GameMoveOccupiedResponse.$Shape|null;
                     *   gameMoveOutOfBounds?: com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse.$Shape|null;
                     *   gameMoveNotYourTurn?: com.miti99.gomoku.proto.GameMoveNotYourTurnResponse.$Shape|null;
                     *   gameOver?: com.miti99.gomoku.proto.GameOverResponse.$Shape|null;
                     *   pveDifficultyNotSupport?: com.miti99.gomoku.proto.PveDifficultyNotSupportResponse.$Shape|null;
                     *   watchGameSuccess?: com.miti99.gomoku.proto.WatchGameSuccessResponse.$Shape|null;
                     *   clientExit?: com.miti99.gomoku.proto.ClientExitResponse.$Shape|null;
                     *   spectatorCannotAct?: com.miti99.gomoku.proto.SpectatorCannotActResponse.$Shape|null;
                     *   $unknowns?: Array.<Uint8Array>;
                     * } & (
                     *   ({ payload?: undefined; clientConnect?: null; nicknameSet?: null; showOptions?: null; showRooms?: null; roomCreateSuccess?: null; roomJoinSuccess?: null; roomJoinFailFull?: null; roomJoinFailNotFound?: null; roomPlayFailNotFound?: null; gameStarting?: null; gameMoveSuccess?: null; gameMoveInvalid?: null; gameMoveOccupied?: null; gameMoveOutOfBounds?: null; gameMoveNotYourTurn?: null; gameOver?: null; pveDifficultyNotSupport?: null; watchGameSuccess?: null; clientExit?: null; spectatorCannotAct?: null }|{ payload?: "clientConnect"; clientConnect: com.miti99.gomoku.proto.ClientConnectResponse.$Shape; nicknameSet?: null; showOptions?: null; showRooms?: null; roomCreateSuccess?: null; roomJoinSuccess?: null; roomJoinFailFull?: null; roomJoinFailNotFound?: null; roomPlayFailNotFound?: null; gameStarting?: null; gameMoveSuccess?: null; gameMoveInvalid?: null; gameMoveOccupied?: null; gameMoveOutOfBounds?: null; gameMoveNotYourTurn?: null; gameOver?: null; pveDifficultyNotSupport?: null; watchGameSuccess?: null; clientExit?: null; spectatorCannotAct?: null }|{ payload?: "nicknameSet"; clientConnect?: null; nicknameSet: com.miti99.gomoku.proto.NicknameSetResponse.$Shape; showOptions?: null; showRooms?: null; roomCreateSuccess?: null; roomJoinSuccess?: null; roomJoinFailFull?: null; roomJoinFailNotFound?: null; roomPlayFailNotFound?: null; gameStarting?: null; gameMoveSuccess?: null; gameMoveInvalid?: null; gameMoveOccupied?: null; gameMoveOutOfBounds?: null; gameMoveNotYourTurn?: null; gameOver?: null; pveDifficultyNotSupport?: null; watchGameSuccess?: null; clientExit?: null; spectatorCannotAct?: null }|{ payload?: "showOptions"; clientConnect?: null; nicknameSet?: null; showOptions: com.miti99.gomoku.proto.ShowOptionsResponse.$Shape; showRooms?: null; roomCreateSuccess?: null; roomJoinSuccess?: null; roomJoinFailFull?: null; roomJoinFailNotFound?: null; roomPlayFailNotFound?: null; gameStarting?: null; gameMoveSuccess?: null; gameMoveInvalid?: null; gameMoveOccupied?: null; gameMoveOutOfBounds?: null; gameMoveNotYourTurn?: null; gameOver?: null; pveDifficultyNotSupport?: null; watchGameSuccess?: null; clientExit?: null; spectatorCannotAct?: null }|{ payload?: "showRooms"; clientConnect?: null; nicknameSet?: null; showOptions?: null; showRooms: com.miti99.gomoku.proto.ShowRoomsResponse.$Shape; roomCreateSuccess?: null; roomJoinSuccess?: null; roomJoinFailFull?: null; roomJoinFailNotFound?: null; roomPlayFailNotFound?: null; gameStarting?: null; gameMoveSuccess?: null; gameMoveInvalid?: null; gameMoveOccupied?: null; gameMoveOutOfBounds?: null; gameMoveNotYourTurn?: null; gameOver?: null; pveDifficultyNotSupport?: null; watchGameSuccess?: null; clientExit?: null; spectatorCannotAct?: null }|{ payload?: "roomCreateSuccess"; clientConnect?: null; nicknameSet?: null; showOptions?: null; showRooms?: null; roomCreateSuccess: com.miti99.gomoku.proto.RoomCreateSuccessResponse.$Shape; roomJoinSuccess?: null; roomJoinFailFull?: null; roomJoinFailNotFound?: null; roomPlayFailNotFound?: null; gameStarting?: null; gameMoveSuccess?: null; gameMoveInvalid?: null; gameMoveOccupied?: null; gameMoveOutOfBounds?: null; gameMoveNotYourTurn?: null; gameOver?: null; pveDifficultyNotSupport?: null; watchGameSuccess?: null; clientExit?: null; spectatorCannotAct?: null }|{ payload?: "roomJoinSuccess"; clientConnect?: null; nicknameSet?: null; showOptions?: null; showRooms?: null; roomCreateSuccess?: null; roomJoinSuccess: com.miti99.gomoku.proto.RoomJoinSuccessResponse.$Shape; roomJoinFailFull?: null; roomJoinFailNotFound?: null; roomPlayFailNotFound?: null; gameStarting?: null; gameMoveSuccess?: null; gameMoveInvalid?: null; gameMoveOccupied?: null; gameMoveOutOfBounds?: null; gameMoveNotYourTurn?: null; gameOver?: null; pveDifficultyNotSupport?: null; watchGameSuccess?: null; clientExit?: null; spectatorCannotAct?: null }|{ payload?: "roomJoinFailFull"; clientConnect?: null; nicknameSet?: null; showOptions?: null; showRooms?: null; roomCreateSuccess?: null; roomJoinSuccess?: null; roomJoinFailFull: com.miti99.gomoku.proto.RoomJoinFailFullResponse.$Shape; roomJoinFailNotFound?: null; roomPlayFailNotFound?: null; gameStarting?: null; gameMoveSuccess?: null; gameMoveInvalid?: null; gameMoveOccupied?: null; gameMoveOutOfBounds?: null; gameMoveNotYourTurn?: null; gameOver?: null; pveDifficultyNotSupport?: null; watchGameSuccess?: null; clientExit?: null; spectatorCannotAct?: null }|{ payload?: "roomJoinFailNotFound"; clientConnect?: null; nicknameSet?: null; showOptions?: null; showRooms?: null; roomCreateSuccess?: null; roomJoinSuccess?: null; roomJoinFailFull?: null; roomJoinFailNotFound: com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse.$Shape; roomPlayFailNotFound?: null; gameStarting?: null; gameMoveSuccess?: null; gameMoveInvalid?: null; gameMoveOccupied?: null; gameMoveOutOfBounds?: null; gameMoveNotYourTurn?: null; gameOver?: null; pveDifficultyNotSupport?: null; watchGameSuccess?: null; clientExit?: null; spectatorCannotAct?: null }|{ payload?: "roomPlayFailNotFound"; clientConnect?: null; nicknameSet?: null; showOptions?: null; showRooms?: null; roomCreateSuccess?: null; roomJoinSuccess?: null; roomJoinFailFull?: null; roomJoinFailNotFound?: null; roomPlayFailNotFound: com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse.$Shape; gameStarting?: null; gameMoveSuccess?: null; gameMoveInvalid?: null; gameMoveOccupied?: null; gameMoveOutOfBounds?: null; gameMoveNotYourTurn?: null; gameOver?: null; pveDifficultyNotSupport?: null; watchGameSuccess?: null; clientExit?: null; spectatorCannotAct?: null }|{ payload?: "gameStarting"; clientConnect?: null; nicknameSet?: null; showOptions?: null; showRooms?: null; roomCreateSuccess?: null; roomJoinSuccess?: null; roomJoinFailFull?: null; roomJoinFailNotFound?: null; roomPlayFailNotFound?: null; gameStarting: com.miti99.gomoku.proto.GameStartingResponse.$Shape; gameMoveSuccess?: null; gameMoveInvalid?: null; gameMoveOccupied?: null; gameMoveOutOfBounds?: null; gameMoveNotYourTurn?: null; gameOver?: null; pveDifficultyNotSupport?: null; watchGameSuccess?: null; clientExit?: null; spectatorCannotAct?: null }|{ payload?: "gameMoveSuccess"; clientConnect?: null; nicknameSet?: null; showOptions?: null; showRooms?: null; roomCreateSuccess?: null; roomJoinSuccess?: null; roomJoinFailFull?: null; roomJoinFailNotFound?: null; roomPlayFailNotFound?: null; gameStarting?: null; gameMoveSuccess: com.miti99.gomoku.proto.GameMoveSuccessResponse.$Shape; gameMoveInvalid?: null; gameMoveOccupied?: null; gameMoveOutOfBounds?: null; gameMoveNotYourTurn?: null; gameOver?: null; pveDifficultyNotSupport?: null; watchGameSuccess?: null; clientExit?: null; spectatorCannotAct?: null }|{ payload?: "gameMoveInvalid"; clientConnect?: null; nicknameSet?: null; showOptions?: null; showRooms?: null; roomCreateSuccess?: null; roomJoinSuccess?: null; roomJoinFailFull?: null; roomJoinFailNotFound?: null; roomPlayFailNotFound?: null; gameStarting?: null; gameMoveSuccess?: null; gameMoveInvalid: com.miti99.gomoku.proto.GameMoveInvalidResponse.$Shape; gameMoveOccupied?: null; gameMoveOutOfBounds?: null; gameMoveNotYourTurn?: null; gameOver?: null; pveDifficultyNotSupport?: null; watchGameSuccess?: null; clientExit?: null; spectatorCannotAct?: null }|{ payload?: "gameMoveOccupied"; clientConnect?: null; nicknameSet?: null; showOptions?: null; showRooms?: null; roomCreateSuccess?: null; roomJoinSuccess?: null; roomJoinFailFull?: null; roomJoinFailNotFound?: null; roomPlayFailNotFound?: null; gameStarting?: null; gameMoveSuccess?: null; gameMoveInvalid?: null; gameMoveOccupied: com.miti99.gomoku.proto.GameMoveOccupiedResponse.$Shape; gameMoveOutOfBounds?: null; gameMoveNotYourTurn?: null; gameOver?: null; pveDifficultyNotSupport?: null; watchGameSuccess?: null; clientExit?: null; spectatorCannotAct?: null }|{ payload?: "gameMoveOutOfBounds"; clientConnect?: null; nicknameSet?: null; showOptions?: null; showRooms?: null; roomCreateSuccess?: null; roomJoinSuccess?: null; roomJoinFailFull?: null; roomJoinFailNotFound?: null; roomPlayFailNotFound?: null; gameStarting?: null; gameMoveSuccess?: null; gameMoveInvalid?: null; gameMoveOccupied?: null; gameMoveOutOfBounds: com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse.$Shape; gameMoveNotYourTurn?: null; gameOver?: null; pveDifficultyNotSupport?: null; watchGameSuccess?: null; clientExit?: null; spectatorCannotAct?: null }|{ payload?: "gameMoveNotYourTurn"; clientConnect?: null; nicknameSet?: null; showOptions?: null; showRooms?: null; roomCreateSuccess?: null; roomJoinSuccess?: null; roomJoinFailFull?: null; roomJoinFailNotFound?: null; roomPlayFailNotFound?: null; gameStarting?: null; gameMoveSuccess?: null; gameMoveInvalid?: null; gameMoveOccupied?: null; gameMoveOutOfBounds?: null; gameMoveNotYourTurn: com.miti99.gomoku.proto.GameMoveNotYourTurnResponse.$Shape; gameOver?: null; pveDifficultyNotSupport?: null; watchGameSuccess?: null; clientExit?: null; spectatorCannotAct?: null }|{ payload?: "gameOver"; clientConnect?: null; nicknameSet?: null; showOptions?: null; showRooms?: null; roomCreateSuccess?: null; roomJoinSuccess?: null; roomJoinFailFull?: null; roomJoinFailNotFound?: null; roomPlayFailNotFound?: null; gameStarting?: null; gameMoveSuccess?: null; gameMoveInvalid?: null; gameMoveOccupied?: null; gameMoveOutOfBounds?: null; gameMoveNotYourTurn?: null; gameOver: com.miti99.gomoku.proto.GameOverResponse.$Shape; pveDifficultyNotSupport?: null; watchGameSuccess?: null; clientExit?: null; spectatorCannotAct?: null }|{ payload?: "pveDifficultyNotSupport"; clientConnect?: null; nicknameSet?: null; showOptions?: null; showRooms?: null; roomCreateSuccess?: null; roomJoinSuccess?: null; roomJoinFailFull?: null; roomJoinFailNotFound?: null; roomPlayFailNotFound?: null; gameStarting?: null; gameMoveSuccess?: null; gameMoveInvalid?: null; gameMoveOccupied?: null; gameMoveOutOfBounds?: null; gameMoveNotYourTurn?: null; gameOver?: null; pveDifficultyNotSupport: com.miti99.gomoku.proto.PveDifficultyNotSupportResponse.$Shape; watchGameSuccess?: null; clientExit?: null; spectatorCannotAct?: null }|{ payload?: "watchGameSuccess"; clientConnect?: null; nicknameSet?: null; showOptions?: null; showRooms?: null; roomCreateSuccess?: null; roomJoinSuccess?: null; roomJoinFailFull?: null; roomJoinFailNotFound?: null; roomPlayFailNotFound?: null; gameStarting?: null; gameMoveSuccess?: null; gameMoveInvalid?: null; gameMoveOccupied?: null; gameMoveOutOfBounds?: null; gameMoveNotYourTurn?: null; gameOver?: null; pveDifficultyNotSupport?: null; watchGameSuccess: com.miti99.gomoku.proto.WatchGameSuccessResponse.$Shape; clientExit?: null; spectatorCannotAct?: null }|{ payload?: "clientExit"; clientConnect?: null; nicknameSet?: null; showOptions?: null; showRooms?: null; roomCreateSuccess?: null; roomJoinSuccess?: null; roomJoinFailFull?: null; roomJoinFailNotFound?: null; roomPlayFailNotFound?: null; gameStarting?: null; gameMoveSuccess?: null; gameMoveInvalid?: null; gameMoveOccupied?: null; gameMoveOutOfBounds?: null; gameMoveNotYourTurn?: null; gameOver?: null; pveDifficultyNotSupport?: null; watchGameSuccess?: null; clientExit: com.miti99.gomoku.proto.ClientExitResponse.$Shape; spectatorCannotAct?: null }|{ payload?: "spectatorCannotAct"; clientConnect?: null; nicknameSet?: null; showOptions?: null; showRooms?: null; roomCreateSuccess?: null; roomJoinSuccess?: null; roomJoinFailFull?: null; roomJoinFailNotFound?: null; roomPlayFailNotFound?: null; gameStarting?: null; gameMoveSuccess?: null; gameMoveInvalid?: null; gameMoveOccupied?: null; gameMoveOutOfBounds?: null; gameMoveNotYourTurn?: null; gameOver?: null; pveDifficultyNotSupport?: null; watchGameSuccess?: null; clientExit?: null; spectatorCannotAct: com.miti99.gomoku.proto.SpectatorCannotActResponse.$Shape })
                     * )} com.miti99.gomoku.proto.Response.$Shape
                     */

                    /**
                     * Constructs a new Response.
                     * @memberof com.miti99.gomoku.proto
                     * @classdesc Represents a Response.
                     * @constructor
                     * @param {com.miti99.gomoku.proto.Response.$Properties=} [properties] Properties to set
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */
                    const Response = function (properties) {
                        if (properties)
                            for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                    this[keys[i]] = properties[keys[i]];
                    };

                    /**
                     * Response clientConnect.
                     * @member {com.miti99.gomoku.proto.ClientConnectResponse.$Properties|null|undefined} clientConnect
                     * @memberof com.miti99.gomoku.proto.Response
                     * @instance
                     */
                    Response.prototype.clientConnect = null;

                    /**
                     * Response nicknameSet.
                     * @member {com.miti99.gomoku.proto.NicknameSetResponse.$Properties|null|undefined} nicknameSet
                     * @memberof com.miti99.gomoku.proto.Response
                     * @instance
                     */
                    Response.prototype.nicknameSet = null;

                    /**
                     * Response showOptions.
                     * @member {com.miti99.gomoku.proto.ShowOptionsResponse.$Properties|null|undefined} showOptions
                     * @memberof com.miti99.gomoku.proto.Response
                     * @instance
                     */
                    Response.prototype.showOptions = null;

                    /**
                     * Response showRooms.
                     * @member {com.miti99.gomoku.proto.ShowRoomsResponse.$Properties|null|undefined} showRooms
                     * @memberof com.miti99.gomoku.proto.Response
                     * @instance
                     */
                    Response.prototype.showRooms = null;

                    /**
                     * Response roomCreateSuccess.
                     * @member {com.miti99.gomoku.proto.RoomCreateSuccessResponse.$Properties|null|undefined} roomCreateSuccess
                     * @memberof com.miti99.gomoku.proto.Response
                     * @instance
                     */
                    Response.prototype.roomCreateSuccess = null;

                    /**
                     * Response roomJoinSuccess.
                     * @member {com.miti99.gomoku.proto.RoomJoinSuccessResponse.$Properties|null|undefined} roomJoinSuccess
                     * @memberof com.miti99.gomoku.proto.Response
                     * @instance
                     */
                    Response.prototype.roomJoinSuccess = null;

                    /**
                     * Response roomJoinFailFull.
                     * @member {com.miti99.gomoku.proto.RoomJoinFailFullResponse.$Properties|null|undefined} roomJoinFailFull
                     * @memberof com.miti99.gomoku.proto.Response
                     * @instance
                     */
                    Response.prototype.roomJoinFailFull = null;

                    /**
                     * Response roomJoinFailNotFound.
                     * @member {com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse.$Properties|null|undefined} roomJoinFailNotFound
                     * @memberof com.miti99.gomoku.proto.Response
                     * @instance
                     */
                    Response.prototype.roomJoinFailNotFound = null;

                    /**
                     * Response roomPlayFailNotFound.
                     * @member {com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse.$Properties|null|undefined} roomPlayFailNotFound
                     * @memberof com.miti99.gomoku.proto.Response
                     * @instance
                     */
                    Response.prototype.roomPlayFailNotFound = null;

                    /**
                     * Response gameStarting.
                     * @member {com.miti99.gomoku.proto.GameStartingResponse.$Properties|null|undefined} gameStarting
                     * @memberof com.miti99.gomoku.proto.Response
                     * @instance
                     */
                    Response.prototype.gameStarting = null;

                    /**
                     * Response gameMoveSuccess.
                     * @member {com.miti99.gomoku.proto.GameMoveSuccessResponse.$Properties|null|undefined} gameMoveSuccess
                     * @memberof com.miti99.gomoku.proto.Response
                     * @instance
                     */
                    Response.prototype.gameMoveSuccess = null;

                    /**
                     * Response gameMoveInvalid.
                     * @member {com.miti99.gomoku.proto.GameMoveInvalidResponse.$Properties|null|undefined} gameMoveInvalid
                     * @memberof com.miti99.gomoku.proto.Response
                     * @instance
                     */
                    Response.prototype.gameMoveInvalid = null;

                    /**
                     * Response gameMoveOccupied.
                     * @member {com.miti99.gomoku.proto.GameMoveOccupiedResponse.$Properties|null|undefined} gameMoveOccupied
                     * @memberof com.miti99.gomoku.proto.Response
                     * @instance
                     */
                    Response.prototype.gameMoveOccupied = null;

                    /**
                     * Response gameMoveOutOfBounds.
                     * @member {com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse.$Properties|null|undefined} gameMoveOutOfBounds
                     * @memberof com.miti99.gomoku.proto.Response
                     * @instance
                     */
                    Response.prototype.gameMoveOutOfBounds = null;

                    /**
                     * Response gameMoveNotYourTurn.
                     * @member {com.miti99.gomoku.proto.GameMoveNotYourTurnResponse.$Properties|null|undefined} gameMoveNotYourTurn
                     * @memberof com.miti99.gomoku.proto.Response
                     * @instance
                     */
                    Response.prototype.gameMoveNotYourTurn = null;

                    /**
                     * Response gameOver.
                     * @member {com.miti99.gomoku.proto.GameOverResponse.$Properties|null|undefined} gameOver
                     * @memberof com.miti99.gomoku.proto.Response
                     * @instance
                     */
                    Response.prototype.gameOver = null;

                    /**
                     * Response pveDifficultyNotSupport.
                     * @member {com.miti99.gomoku.proto.PveDifficultyNotSupportResponse.$Properties|null|undefined} pveDifficultyNotSupport
                     * @memberof com.miti99.gomoku.proto.Response
                     * @instance
                     */
                    Response.prototype.pveDifficultyNotSupport = null;

                    /**
                     * Response watchGameSuccess.
                     * @member {com.miti99.gomoku.proto.WatchGameSuccessResponse.$Properties|null|undefined} watchGameSuccess
                     * @memberof com.miti99.gomoku.proto.Response
                     * @instance
                     */
                    Response.prototype.watchGameSuccess = null;

                    /**
                     * Response clientExit.
                     * @member {com.miti99.gomoku.proto.ClientExitResponse.$Properties|null|undefined} clientExit
                     * @memberof com.miti99.gomoku.proto.Response
                     * @instance
                     */
                    Response.prototype.clientExit = null;

                    /**
                     * Response spectatorCannotAct.
                     * @member {com.miti99.gomoku.proto.SpectatorCannotActResponse.$Properties|null|undefined} spectatorCannotAct
                     * @memberof com.miti99.gomoku.proto.Response
                     * @instance
                     */
                    Response.prototype.spectatorCannotAct = null;

                    // OneOf field names bound to virtual getters and setters
                    let $oneOfFields;

                    /**
                     * Response payload.
                     * @member {"clientConnect"|"nicknameSet"|"showOptions"|"showRooms"|"roomCreateSuccess"|"roomJoinSuccess"|"roomJoinFailFull"|"roomJoinFailNotFound"|"roomPlayFailNotFound"|"gameStarting"|"gameMoveSuccess"|"gameMoveInvalid"|"gameMoveOccupied"|"gameMoveOutOfBounds"|"gameMoveNotYourTurn"|"gameOver"|"pveDifficultyNotSupport"|"watchGameSuccess"|"clientExit"|"spectatorCannotAct"|undefined} payload
                     * @memberof com.miti99.gomoku.proto.Response
                     * @instance
                     */
                    $Object.defineProperty(Response.prototype, "payload", {
                        get: $util.oneOfGetter($oneOfFields = ["clientConnect", "nicknameSet", "showOptions", "showRooms", "roomCreateSuccess", "roomJoinSuccess", "roomJoinFailFull", "roomJoinFailNotFound", "roomPlayFailNotFound", "gameStarting", "gameMoveSuccess", "gameMoveInvalid", "gameMoveOccupied", "gameMoveOutOfBounds", "gameMoveNotYourTurn", "gameOver", "pveDifficultyNotSupport", "watchGameSuccess", "clientExit", "spectatorCannotAct"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new Response instance using the specified properties.
                     * @function create
                     * @memberof com.miti99.gomoku.proto.Response
                     * @static
                     * @param {com.miti99.gomoku.proto.Response.$Properties=} [properties] Properties to set
                     * @returns {com.miti99.gomoku.proto.Response} Response instance
                     * @type {{
                     *   (properties: com.miti99.gomoku.proto.Response.$Shape): com.miti99.gomoku.proto.Response & com.miti99.gomoku.proto.Response.$Shape;
                     *   (properties?: com.miti99.gomoku.proto.Response.$Properties): com.miti99.gomoku.proto.Response;
                     * }}
                     */
                    Response.create = function(properties) {
                        return new Response(properties);
                    };

                    /**
                     * Encodes the specified Response message. Does not implicitly {@link com.miti99.gomoku.proto.Response.verify|verify} messages.
                     * @function encode
                     * @memberof com.miti99.gomoku.proto.Response
                     * @static
                     * @param {com.miti99.gomoku.proto.Response.$Properties} message Response message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Response.encode = function (message, writer, _depth) {
                        if (!writer)
                            writer = $Writer.create();
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        if (message.clientConnect != null && $Object.hasOwnProperty.call(message, "clientConnect"))
                            $root.com.miti99.gomoku.proto.ClientConnectResponse.encode(message.clientConnect, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                        if (message.nicknameSet != null && $Object.hasOwnProperty.call(message, "nicknameSet"))
                            $root.com.miti99.gomoku.proto.NicknameSetResponse.encode(message.nicknameSet, writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
                        if (message.showOptions != null && $Object.hasOwnProperty.call(message, "showOptions"))
                            $root.com.miti99.gomoku.proto.ShowOptionsResponse.encode(message.showOptions, writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
                        if (message.showRooms != null && $Object.hasOwnProperty.call(message, "showRooms"))
                            $root.com.miti99.gomoku.proto.ShowRoomsResponse.encode(message.showRooms, writer.uint32(/* id 4, wireType 2 =*/34).fork(), _depth + 1).ldelim();
                        if (message.roomCreateSuccess != null && $Object.hasOwnProperty.call(message, "roomCreateSuccess"))
                            $root.com.miti99.gomoku.proto.RoomCreateSuccessResponse.encode(message.roomCreateSuccess, writer.uint32(/* id 5, wireType 2 =*/42).fork(), _depth + 1).ldelim();
                        if (message.roomJoinSuccess != null && $Object.hasOwnProperty.call(message, "roomJoinSuccess"))
                            $root.com.miti99.gomoku.proto.RoomJoinSuccessResponse.encode(message.roomJoinSuccess, writer.uint32(/* id 6, wireType 2 =*/50).fork(), _depth + 1).ldelim();
                        if (message.roomJoinFailFull != null && $Object.hasOwnProperty.call(message, "roomJoinFailFull"))
                            $root.com.miti99.gomoku.proto.RoomJoinFailFullResponse.encode(message.roomJoinFailFull, writer.uint32(/* id 7, wireType 2 =*/58).fork(), _depth + 1).ldelim();
                        if (message.roomJoinFailNotFound != null && $Object.hasOwnProperty.call(message, "roomJoinFailNotFound"))
                            $root.com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse.encode(message.roomJoinFailNotFound, writer.uint32(/* id 8, wireType 2 =*/66).fork(), _depth + 1).ldelim();
                        if (message.roomPlayFailNotFound != null && $Object.hasOwnProperty.call(message, "roomPlayFailNotFound"))
                            $root.com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse.encode(message.roomPlayFailNotFound, writer.uint32(/* id 9, wireType 2 =*/74).fork(), _depth + 1).ldelim();
                        if (message.gameStarting != null && $Object.hasOwnProperty.call(message, "gameStarting"))
                            $root.com.miti99.gomoku.proto.GameStartingResponse.encode(message.gameStarting, writer.uint32(/* id 10, wireType 2 =*/82).fork(), _depth + 1).ldelim();
                        if (message.gameMoveSuccess != null && $Object.hasOwnProperty.call(message, "gameMoveSuccess"))
                            $root.com.miti99.gomoku.proto.GameMoveSuccessResponse.encode(message.gameMoveSuccess, writer.uint32(/* id 11, wireType 2 =*/90).fork(), _depth + 1).ldelim();
                        if (message.gameMoveInvalid != null && $Object.hasOwnProperty.call(message, "gameMoveInvalid"))
                            $root.com.miti99.gomoku.proto.GameMoveInvalidResponse.encode(message.gameMoveInvalid, writer.uint32(/* id 12, wireType 2 =*/98).fork(), _depth + 1).ldelim();
                        if (message.gameMoveOccupied != null && $Object.hasOwnProperty.call(message, "gameMoveOccupied"))
                            $root.com.miti99.gomoku.proto.GameMoveOccupiedResponse.encode(message.gameMoveOccupied, writer.uint32(/* id 13, wireType 2 =*/106).fork(), _depth + 1).ldelim();
                        if (message.gameMoveOutOfBounds != null && $Object.hasOwnProperty.call(message, "gameMoveOutOfBounds"))
                            $root.com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse.encode(message.gameMoveOutOfBounds, writer.uint32(/* id 14, wireType 2 =*/114).fork(), _depth + 1).ldelim();
                        if (message.gameMoveNotYourTurn != null && $Object.hasOwnProperty.call(message, "gameMoveNotYourTurn"))
                            $root.com.miti99.gomoku.proto.GameMoveNotYourTurnResponse.encode(message.gameMoveNotYourTurn, writer.uint32(/* id 15, wireType 2 =*/122).fork(), _depth + 1).ldelim();
                        if (message.gameOver != null && $Object.hasOwnProperty.call(message, "gameOver"))
                            $root.com.miti99.gomoku.proto.GameOverResponse.encode(message.gameOver, writer.uint32(/* id 16, wireType 2 =*/130).fork(), _depth + 1).ldelim();
                        if (message.pveDifficultyNotSupport != null && $Object.hasOwnProperty.call(message, "pveDifficultyNotSupport"))
                            $root.com.miti99.gomoku.proto.PveDifficultyNotSupportResponse.encode(message.pveDifficultyNotSupport, writer.uint32(/* id 17, wireType 2 =*/138).fork(), _depth + 1).ldelim();
                        if (message.watchGameSuccess != null && $Object.hasOwnProperty.call(message, "watchGameSuccess"))
                            $root.com.miti99.gomoku.proto.WatchGameSuccessResponse.encode(message.watchGameSuccess, writer.uint32(/* id 18, wireType 2 =*/146).fork(), _depth + 1).ldelim();
                        if (message.clientExit != null && $Object.hasOwnProperty.call(message, "clientExit"))
                            $root.com.miti99.gomoku.proto.ClientExitResponse.encode(message.clientExit, writer.uint32(/* id 19, wireType 2 =*/154).fork(), _depth + 1).ldelim();
                        if (message.spectatorCannotAct != null && $Object.hasOwnProperty.call(message, "spectatorCannotAct"))
                            $root.com.miti99.gomoku.proto.SpectatorCannotActResponse.encode(message.spectatorCannotAct, writer.uint32(/* id 20, wireType 2 =*/162).fork(), _depth + 1).ldelim();
                        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                            for (let i = 0; i < message.$unknowns.length; ++i)
                                writer.raw(message.$unknowns[i]);
                        return writer;
                    };

                    /**
                     * Encodes the specified Response message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.Response.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.miti99.gomoku.proto.Response
                     * @static
                     * @param {com.miti99.gomoku.proto.Response.$Properties} message Response message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Response.encodeDelimited = function(message, writer) {
                        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                    };

                    /**
                     * Decodes a Response message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.miti99.gomoku.proto.Response
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.Response & com.miti99.gomoku.proto.Response.$Shape} Response
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Response.decode = function (reader, length, _end, _depth, _target) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $Reader.recursionLimit)
                            throw $Error("max depth exceeded");
                        let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.com.miti99.gomoku.proto.Response();
                        while (reader.pos < end) {
                            let start = reader.pos;
                            let tag = reader.tag();
                            if (tag === _end) {
                                _end = $undefined;
                                break;
                            }
                            let wireType = tag & 7;
                            switch (tag >>>= 3) {
                            case 1: {
                                    if (wireType !== 2)
                                        break;
                                    message.clientConnect = $root.com.miti99.gomoku.proto.ClientConnectResponse.decode(reader, reader.uint32(), $undefined, _depth + 1, message.clientConnect);
                                    message.payload = "clientConnect";
                                    continue;
                                }
                            case 2: {
                                    if (wireType !== 2)
                                        break;
                                    message.nicknameSet = $root.com.miti99.gomoku.proto.NicknameSetResponse.decode(reader, reader.uint32(), $undefined, _depth + 1, message.nicknameSet);
                                    message.payload = "nicknameSet";
                                    continue;
                                }
                            case 3: {
                                    if (wireType !== 2)
                                        break;
                                    message.showOptions = $root.com.miti99.gomoku.proto.ShowOptionsResponse.decode(reader, reader.uint32(), $undefined, _depth + 1, message.showOptions);
                                    message.payload = "showOptions";
                                    continue;
                                }
                            case 4: {
                                    if (wireType !== 2)
                                        break;
                                    message.showRooms = $root.com.miti99.gomoku.proto.ShowRoomsResponse.decode(reader, reader.uint32(), $undefined, _depth + 1, message.showRooms);
                                    message.payload = "showRooms";
                                    continue;
                                }
                            case 5: {
                                    if (wireType !== 2)
                                        break;
                                    message.roomCreateSuccess = $root.com.miti99.gomoku.proto.RoomCreateSuccessResponse.decode(reader, reader.uint32(), $undefined, _depth + 1, message.roomCreateSuccess);
                                    message.payload = "roomCreateSuccess";
                                    continue;
                                }
                            case 6: {
                                    if (wireType !== 2)
                                        break;
                                    message.roomJoinSuccess = $root.com.miti99.gomoku.proto.RoomJoinSuccessResponse.decode(reader, reader.uint32(), $undefined, _depth + 1, message.roomJoinSuccess);
                                    message.payload = "roomJoinSuccess";
                                    continue;
                                }
                            case 7: {
                                    if (wireType !== 2)
                                        break;
                                    message.roomJoinFailFull = $root.com.miti99.gomoku.proto.RoomJoinFailFullResponse.decode(reader, reader.uint32(), $undefined, _depth + 1, message.roomJoinFailFull);
                                    message.payload = "roomJoinFailFull";
                                    continue;
                                }
                            case 8: {
                                    if (wireType !== 2)
                                        break;
                                    message.roomJoinFailNotFound = $root.com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse.decode(reader, reader.uint32(), $undefined, _depth + 1, message.roomJoinFailNotFound);
                                    message.payload = "roomJoinFailNotFound";
                                    continue;
                                }
                            case 9: {
                                    if (wireType !== 2)
                                        break;
                                    message.roomPlayFailNotFound = $root.com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse.decode(reader, reader.uint32(), $undefined, _depth + 1, message.roomPlayFailNotFound);
                                    message.payload = "roomPlayFailNotFound";
                                    continue;
                                }
                            case 10: {
                                    if (wireType !== 2)
                                        break;
                                    message.gameStarting = $root.com.miti99.gomoku.proto.GameStartingResponse.decode(reader, reader.uint32(), $undefined, _depth + 1, message.gameStarting);
                                    message.payload = "gameStarting";
                                    continue;
                                }
                            case 11: {
                                    if (wireType !== 2)
                                        break;
                                    message.gameMoveSuccess = $root.com.miti99.gomoku.proto.GameMoveSuccessResponse.decode(reader, reader.uint32(), $undefined, _depth + 1, message.gameMoveSuccess);
                                    message.payload = "gameMoveSuccess";
                                    continue;
                                }
                            case 12: {
                                    if (wireType !== 2)
                                        break;
                                    message.gameMoveInvalid = $root.com.miti99.gomoku.proto.GameMoveInvalidResponse.decode(reader, reader.uint32(), $undefined, _depth + 1, message.gameMoveInvalid);
                                    message.payload = "gameMoveInvalid";
                                    continue;
                                }
                            case 13: {
                                    if (wireType !== 2)
                                        break;
                                    message.gameMoveOccupied = $root.com.miti99.gomoku.proto.GameMoveOccupiedResponse.decode(reader, reader.uint32(), $undefined, _depth + 1, message.gameMoveOccupied);
                                    message.payload = "gameMoveOccupied";
                                    continue;
                                }
                            case 14: {
                                    if (wireType !== 2)
                                        break;
                                    message.gameMoveOutOfBounds = $root.com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse.decode(reader, reader.uint32(), $undefined, _depth + 1, message.gameMoveOutOfBounds);
                                    message.payload = "gameMoveOutOfBounds";
                                    continue;
                                }
                            case 15: {
                                    if (wireType !== 2)
                                        break;
                                    message.gameMoveNotYourTurn = $root.com.miti99.gomoku.proto.GameMoveNotYourTurnResponse.decode(reader, reader.uint32(), $undefined, _depth + 1, message.gameMoveNotYourTurn);
                                    message.payload = "gameMoveNotYourTurn";
                                    continue;
                                }
                            case 16: {
                                    if (wireType !== 2)
                                        break;
                                    message.gameOver = $root.com.miti99.gomoku.proto.GameOverResponse.decode(reader, reader.uint32(), $undefined, _depth + 1, message.gameOver);
                                    message.payload = "gameOver";
                                    continue;
                                }
                            case 17: {
                                    if (wireType !== 2)
                                        break;
                                    message.pveDifficultyNotSupport = $root.com.miti99.gomoku.proto.PveDifficultyNotSupportResponse.decode(reader, reader.uint32(), $undefined, _depth + 1, message.pveDifficultyNotSupport);
                                    message.payload = "pveDifficultyNotSupport";
                                    continue;
                                }
                            case 18: {
                                    if (wireType !== 2)
                                        break;
                                    message.watchGameSuccess = $root.com.miti99.gomoku.proto.WatchGameSuccessResponse.decode(reader, reader.uint32(), $undefined, _depth + 1, message.watchGameSuccess);
                                    message.payload = "watchGameSuccess";
                                    continue;
                                }
                            case 19: {
                                    if (wireType !== 2)
                                        break;
                                    message.clientExit = $root.com.miti99.gomoku.proto.ClientExitResponse.decode(reader, reader.uint32(), $undefined, _depth + 1, message.clientExit);
                                    message.payload = "clientExit";
                                    continue;
                                }
                            case 20: {
                                    if (wireType !== 2)
                                        break;
                                    message.spectatorCannotAct = $root.com.miti99.gomoku.proto.SpectatorCannotActResponse.decode(reader, reader.uint32(), $undefined, _depth + 1, message.spectatorCannotAct);
                                    message.payload = "spectatorCannotAct";
                                    continue;
                                }
                            }
                            reader.skipType(wireType, _depth, tag);
                            if (!reader.discardUnknown) {
                                $util.makeProp(message, "$unknowns", false);
                                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                            }
                        }
                        if (_end !== $undefined)
                            throw $Error("missing end group");
                        return message;
                    };

                    /**
                     * Decodes a Response message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.miti99.gomoku.proto.Response
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.Response & com.miti99.gomoku.proto.Response.$Shape} Response
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Response.decodeDelimited = function(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Response message.
                     * @function verify
                     * @memberof com.miti99.gomoku.proto.Response
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Response.verify = function (message, _depth) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            return "max depth exceeded";
                        let properties = {};
                        if (message.clientConnect != null && $Object.hasOwnProperty.call(message, "clientConnect")) {
                            properties.payload = 1;
                            {
                                let error = $root.com.miti99.gomoku.proto.ClientConnectResponse.verify(message.clientConnect, _depth + 1);
                                if (error)
                                    return "clientConnect." + error;
                            }
                        }
                        if (message.nicknameSet != null && $Object.hasOwnProperty.call(message, "nicknameSet")) {
                            if (properties.payload === 1)
                                return "payload: multiple values";
                            properties.payload = 1;
                            {
                                let error = $root.com.miti99.gomoku.proto.NicknameSetResponse.verify(message.nicknameSet, _depth + 1);
                                if (error)
                                    return "nicknameSet." + error;
                            }
                        }
                        if (message.showOptions != null && $Object.hasOwnProperty.call(message, "showOptions")) {
                            if (properties.payload === 1)
                                return "payload: multiple values";
                            properties.payload = 1;
                            {
                                let error = $root.com.miti99.gomoku.proto.ShowOptionsResponse.verify(message.showOptions, _depth + 1);
                                if (error)
                                    return "showOptions." + error;
                            }
                        }
                        if (message.showRooms != null && $Object.hasOwnProperty.call(message, "showRooms")) {
                            if (properties.payload === 1)
                                return "payload: multiple values";
                            properties.payload = 1;
                            {
                                let error = $root.com.miti99.gomoku.proto.ShowRoomsResponse.verify(message.showRooms, _depth + 1);
                                if (error)
                                    return "showRooms." + error;
                            }
                        }
                        if (message.roomCreateSuccess != null && $Object.hasOwnProperty.call(message, "roomCreateSuccess")) {
                            if (properties.payload === 1)
                                return "payload: multiple values";
                            properties.payload = 1;
                            {
                                let error = $root.com.miti99.gomoku.proto.RoomCreateSuccessResponse.verify(message.roomCreateSuccess, _depth + 1);
                                if (error)
                                    return "roomCreateSuccess." + error;
                            }
                        }
                        if (message.roomJoinSuccess != null && $Object.hasOwnProperty.call(message, "roomJoinSuccess")) {
                            if (properties.payload === 1)
                                return "payload: multiple values";
                            properties.payload = 1;
                            {
                                let error = $root.com.miti99.gomoku.proto.RoomJoinSuccessResponse.verify(message.roomJoinSuccess, _depth + 1);
                                if (error)
                                    return "roomJoinSuccess." + error;
                            }
                        }
                        if (message.roomJoinFailFull != null && $Object.hasOwnProperty.call(message, "roomJoinFailFull")) {
                            if (properties.payload === 1)
                                return "payload: multiple values";
                            properties.payload = 1;
                            {
                                let error = $root.com.miti99.gomoku.proto.RoomJoinFailFullResponse.verify(message.roomJoinFailFull, _depth + 1);
                                if (error)
                                    return "roomJoinFailFull." + error;
                            }
                        }
                        if (message.roomJoinFailNotFound != null && $Object.hasOwnProperty.call(message, "roomJoinFailNotFound")) {
                            if (properties.payload === 1)
                                return "payload: multiple values";
                            properties.payload = 1;
                            {
                                let error = $root.com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse.verify(message.roomJoinFailNotFound, _depth + 1);
                                if (error)
                                    return "roomJoinFailNotFound." + error;
                            }
                        }
                        if (message.roomPlayFailNotFound != null && $Object.hasOwnProperty.call(message, "roomPlayFailNotFound")) {
                            if (properties.payload === 1)
                                return "payload: multiple values";
                            properties.payload = 1;
                            {
                                let error = $root.com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse.verify(message.roomPlayFailNotFound, _depth + 1);
                                if (error)
                                    return "roomPlayFailNotFound." + error;
                            }
                        }
                        if (message.gameStarting != null && $Object.hasOwnProperty.call(message, "gameStarting")) {
                            if (properties.payload === 1)
                                return "payload: multiple values";
                            properties.payload = 1;
                            {
                                let error = $root.com.miti99.gomoku.proto.GameStartingResponse.verify(message.gameStarting, _depth + 1);
                                if (error)
                                    return "gameStarting." + error;
                            }
                        }
                        if (message.gameMoveSuccess != null && $Object.hasOwnProperty.call(message, "gameMoveSuccess")) {
                            if (properties.payload === 1)
                                return "payload: multiple values";
                            properties.payload = 1;
                            {
                                let error = $root.com.miti99.gomoku.proto.GameMoveSuccessResponse.verify(message.gameMoveSuccess, _depth + 1);
                                if (error)
                                    return "gameMoveSuccess." + error;
                            }
                        }
                        if (message.gameMoveInvalid != null && $Object.hasOwnProperty.call(message, "gameMoveInvalid")) {
                            if (properties.payload === 1)
                                return "payload: multiple values";
                            properties.payload = 1;
                            {
                                let error = $root.com.miti99.gomoku.proto.GameMoveInvalidResponse.verify(message.gameMoveInvalid, _depth + 1);
                                if (error)
                                    return "gameMoveInvalid." + error;
                            }
                        }
                        if (message.gameMoveOccupied != null && $Object.hasOwnProperty.call(message, "gameMoveOccupied")) {
                            if (properties.payload === 1)
                                return "payload: multiple values";
                            properties.payload = 1;
                            {
                                let error = $root.com.miti99.gomoku.proto.GameMoveOccupiedResponse.verify(message.gameMoveOccupied, _depth + 1);
                                if (error)
                                    return "gameMoveOccupied." + error;
                            }
                        }
                        if (message.gameMoveOutOfBounds != null && $Object.hasOwnProperty.call(message, "gameMoveOutOfBounds")) {
                            if (properties.payload === 1)
                                return "payload: multiple values";
                            properties.payload = 1;
                            {
                                let error = $root.com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse.verify(message.gameMoveOutOfBounds, _depth + 1);
                                if (error)
                                    return "gameMoveOutOfBounds." + error;
                            }
                        }
                        if (message.gameMoveNotYourTurn != null && $Object.hasOwnProperty.call(message, "gameMoveNotYourTurn")) {
                            if (properties.payload === 1)
                                return "payload: multiple values";
                            properties.payload = 1;
                            {
                                let error = $root.com.miti99.gomoku.proto.GameMoveNotYourTurnResponse.verify(message.gameMoveNotYourTurn, _depth + 1);
                                if (error)
                                    return "gameMoveNotYourTurn." + error;
                            }
                        }
                        if (message.gameOver != null && $Object.hasOwnProperty.call(message, "gameOver")) {
                            if (properties.payload === 1)
                                return "payload: multiple values";
                            properties.payload = 1;
                            {
                                let error = $root.com.miti99.gomoku.proto.GameOverResponse.verify(message.gameOver, _depth + 1);
                                if (error)
                                    return "gameOver." + error;
                            }
                        }
                        if (message.pveDifficultyNotSupport != null && $Object.hasOwnProperty.call(message, "pveDifficultyNotSupport")) {
                            if (properties.payload === 1)
                                return "payload: multiple values";
                            properties.payload = 1;
                            {
                                let error = $root.com.miti99.gomoku.proto.PveDifficultyNotSupportResponse.verify(message.pveDifficultyNotSupport, _depth + 1);
                                if (error)
                                    return "pveDifficultyNotSupport." + error;
                            }
                        }
                        if (message.watchGameSuccess != null && $Object.hasOwnProperty.call(message, "watchGameSuccess")) {
                            if (properties.payload === 1)
                                return "payload: multiple values";
                            properties.payload = 1;
                            {
                                let error = $root.com.miti99.gomoku.proto.WatchGameSuccessResponse.verify(message.watchGameSuccess, _depth + 1);
                                if (error)
                                    return "watchGameSuccess." + error;
                            }
                        }
                        if (message.clientExit != null && $Object.hasOwnProperty.call(message, "clientExit")) {
                            if (properties.payload === 1)
                                return "payload: multiple values";
                            properties.payload = 1;
                            {
                                let error = $root.com.miti99.gomoku.proto.ClientExitResponse.verify(message.clientExit, _depth + 1);
                                if (error)
                                    return "clientExit." + error;
                            }
                        }
                        if (message.spectatorCannotAct != null && $Object.hasOwnProperty.call(message, "spectatorCannotAct")) {
                            if (properties.payload === 1)
                                return "payload: multiple values";
                            properties.payload = 1;
                            {
                                let error = $root.com.miti99.gomoku.proto.SpectatorCannotActResponse.verify(message.spectatorCannotAct, _depth + 1);
                                if (error)
                                    return "spectatorCannotAct." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a Response message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.miti99.gomoku.proto.Response
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.miti99.gomoku.proto.Response} Response
                     */
                    Response.fromObject = function (object, _depth) {
                        if (object instanceof $root.com.miti99.gomoku.proto.Response)
                            return object;
                        if (!$util.isObject(object))
                            throw $TypeError(".com.miti99.gomoku.proto.Response: object expected");
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        let message = new $root.com.miti99.gomoku.proto.Response();
                        if (object.clientConnect != null) {
                            if (!$util.isObject(object.clientConnect))
                                throw $TypeError(".com.miti99.gomoku.proto.Response.clientConnect: object expected");
                            message.clientConnect = $root.com.miti99.gomoku.proto.ClientConnectResponse.fromObject(object.clientConnect, _depth + 1);
                        }
                        if (object.nicknameSet != null) {
                            if (!$util.isObject(object.nicknameSet))
                                throw $TypeError(".com.miti99.gomoku.proto.Response.nicknameSet: object expected");
                            message.nicknameSet = $root.com.miti99.gomoku.proto.NicknameSetResponse.fromObject(object.nicknameSet, _depth + 1);
                        }
                        if (object.showOptions != null) {
                            if (!$util.isObject(object.showOptions))
                                throw $TypeError(".com.miti99.gomoku.proto.Response.showOptions: object expected");
                            message.showOptions = $root.com.miti99.gomoku.proto.ShowOptionsResponse.fromObject(object.showOptions, _depth + 1);
                        }
                        if (object.showRooms != null) {
                            if (!$util.isObject(object.showRooms))
                                throw $TypeError(".com.miti99.gomoku.proto.Response.showRooms: object expected");
                            message.showRooms = $root.com.miti99.gomoku.proto.ShowRoomsResponse.fromObject(object.showRooms, _depth + 1);
                        }
                        if (object.roomCreateSuccess != null) {
                            if (!$util.isObject(object.roomCreateSuccess))
                                throw $TypeError(".com.miti99.gomoku.proto.Response.roomCreateSuccess: object expected");
                            message.roomCreateSuccess = $root.com.miti99.gomoku.proto.RoomCreateSuccessResponse.fromObject(object.roomCreateSuccess, _depth + 1);
                        }
                        if (object.roomJoinSuccess != null) {
                            if (!$util.isObject(object.roomJoinSuccess))
                                throw $TypeError(".com.miti99.gomoku.proto.Response.roomJoinSuccess: object expected");
                            message.roomJoinSuccess = $root.com.miti99.gomoku.proto.RoomJoinSuccessResponse.fromObject(object.roomJoinSuccess, _depth + 1);
                        }
                        if (object.roomJoinFailFull != null) {
                            if (!$util.isObject(object.roomJoinFailFull))
                                throw $TypeError(".com.miti99.gomoku.proto.Response.roomJoinFailFull: object expected");
                            message.roomJoinFailFull = $root.com.miti99.gomoku.proto.RoomJoinFailFullResponse.fromObject(object.roomJoinFailFull, _depth + 1);
                        }
                        if (object.roomJoinFailNotFound != null) {
                            if (!$util.isObject(object.roomJoinFailNotFound))
                                throw $TypeError(".com.miti99.gomoku.proto.Response.roomJoinFailNotFound: object expected");
                            message.roomJoinFailNotFound = $root.com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse.fromObject(object.roomJoinFailNotFound, _depth + 1);
                        }
                        if (object.roomPlayFailNotFound != null) {
                            if (!$util.isObject(object.roomPlayFailNotFound))
                                throw $TypeError(".com.miti99.gomoku.proto.Response.roomPlayFailNotFound: object expected");
                            message.roomPlayFailNotFound = $root.com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse.fromObject(object.roomPlayFailNotFound, _depth + 1);
                        }
                        if (object.gameStarting != null) {
                            if (!$util.isObject(object.gameStarting))
                                throw $TypeError(".com.miti99.gomoku.proto.Response.gameStarting: object expected");
                            message.gameStarting = $root.com.miti99.gomoku.proto.GameStartingResponse.fromObject(object.gameStarting, _depth + 1);
                        }
                        if (object.gameMoveSuccess != null) {
                            if (!$util.isObject(object.gameMoveSuccess))
                                throw $TypeError(".com.miti99.gomoku.proto.Response.gameMoveSuccess: object expected");
                            message.gameMoveSuccess = $root.com.miti99.gomoku.proto.GameMoveSuccessResponse.fromObject(object.gameMoveSuccess, _depth + 1);
                        }
                        if (object.gameMoveInvalid != null) {
                            if (!$util.isObject(object.gameMoveInvalid))
                                throw $TypeError(".com.miti99.gomoku.proto.Response.gameMoveInvalid: object expected");
                            message.gameMoveInvalid = $root.com.miti99.gomoku.proto.GameMoveInvalidResponse.fromObject(object.gameMoveInvalid, _depth + 1);
                        }
                        if (object.gameMoveOccupied != null) {
                            if (!$util.isObject(object.gameMoveOccupied))
                                throw $TypeError(".com.miti99.gomoku.proto.Response.gameMoveOccupied: object expected");
                            message.gameMoveOccupied = $root.com.miti99.gomoku.proto.GameMoveOccupiedResponse.fromObject(object.gameMoveOccupied, _depth + 1);
                        }
                        if (object.gameMoveOutOfBounds != null) {
                            if (!$util.isObject(object.gameMoveOutOfBounds))
                                throw $TypeError(".com.miti99.gomoku.proto.Response.gameMoveOutOfBounds: object expected");
                            message.gameMoveOutOfBounds = $root.com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse.fromObject(object.gameMoveOutOfBounds, _depth + 1);
                        }
                        if (object.gameMoveNotYourTurn != null) {
                            if (!$util.isObject(object.gameMoveNotYourTurn))
                                throw $TypeError(".com.miti99.gomoku.proto.Response.gameMoveNotYourTurn: object expected");
                            message.gameMoveNotYourTurn = $root.com.miti99.gomoku.proto.GameMoveNotYourTurnResponse.fromObject(object.gameMoveNotYourTurn, _depth + 1);
                        }
                        if (object.gameOver != null) {
                            if (!$util.isObject(object.gameOver))
                                throw $TypeError(".com.miti99.gomoku.proto.Response.gameOver: object expected");
                            message.gameOver = $root.com.miti99.gomoku.proto.GameOverResponse.fromObject(object.gameOver, _depth + 1);
                        }
                        if (object.pveDifficultyNotSupport != null) {
                            if (!$util.isObject(object.pveDifficultyNotSupport))
                                throw $TypeError(".com.miti99.gomoku.proto.Response.pveDifficultyNotSupport: object expected");
                            message.pveDifficultyNotSupport = $root.com.miti99.gomoku.proto.PveDifficultyNotSupportResponse.fromObject(object.pveDifficultyNotSupport, _depth + 1);
                        }
                        if (object.watchGameSuccess != null) {
                            if (!$util.isObject(object.watchGameSuccess))
                                throw $TypeError(".com.miti99.gomoku.proto.Response.watchGameSuccess: object expected");
                            message.watchGameSuccess = $root.com.miti99.gomoku.proto.WatchGameSuccessResponse.fromObject(object.watchGameSuccess, _depth + 1);
                        }
                        if (object.clientExit != null) {
                            if (!$util.isObject(object.clientExit))
                                throw $TypeError(".com.miti99.gomoku.proto.Response.clientExit: object expected");
                            message.clientExit = $root.com.miti99.gomoku.proto.ClientExitResponse.fromObject(object.clientExit, _depth + 1);
                        }
                        if (object.spectatorCannotAct != null) {
                            if (!$util.isObject(object.spectatorCannotAct))
                                throw $TypeError(".com.miti99.gomoku.proto.Response.spectatorCannotAct: object expected");
                            message.spectatorCannotAct = $root.com.miti99.gomoku.proto.SpectatorCannotActResponse.fromObject(object.spectatorCannotAct, _depth + 1);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a Response message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.miti99.gomoku.proto.Response
                     * @static
                     * @param {com.miti99.gomoku.proto.Response} message Response
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Response.toObject = function (message, options, _depth) {
                        if (!options)
                            options = {};
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        let object = {};
                        if (message.clientConnect != null && $Object.hasOwnProperty.call(message, "clientConnect")) {
                            object.clientConnect = $root.com.miti99.gomoku.proto.ClientConnectResponse.toObject(message.clientConnect, options, _depth + 1);
                            if (options.oneofs)
                                object.payload = "clientConnect";
                        }
                        if (message.nicknameSet != null && $Object.hasOwnProperty.call(message, "nicknameSet")) {
                            object.nicknameSet = $root.com.miti99.gomoku.proto.NicknameSetResponse.toObject(message.nicknameSet, options, _depth + 1);
                            if (options.oneofs)
                                object.payload = "nicknameSet";
                        }
                        if (message.showOptions != null && $Object.hasOwnProperty.call(message, "showOptions")) {
                            object.showOptions = $root.com.miti99.gomoku.proto.ShowOptionsResponse.toObject(message.showOptions, options, _depth + 1);
                            if (options.oneofs)
                                object.payload = "showOptions";
                        }
                        if (message.showRooms != null && $Object.hasOwnProperty.call(message, "showRooms")) {
                            object.showRooms = $root.com.miti99.gomoku.proto.ShowRoomsResponse.toObject(message.showRooms, options, _depth + 1);
                            if (options.oneofs)
                                object.payload = "showRooms";
                        }
                        if (message.roomCreateSuccess != null && $Object.hasOwnProperty.call(message, "roomCreateSuccess")) {
                            object.roomCreateSuccess = $root.com.miti99.gomoku.proto.RoomCreateSuccessResponse.toObject(message.roomCreateSuccess, options, _depth + 1);
                            if (options.oneofs)
                                object.payload = "roomCreateSuccess";
                        }
                        if (message.roomJoinSuccess != null && $Object.hasOwnProperty.call(message, "roomJoinSuccess")) {
                            object.roomJoinSuccess = $root.com.miti99.gomoku.proto.RoomJoinSuccessResponse.toObject(message.roomJoinSuccess, options, _depth + 1);
                            if (options.oneofs)
                                object.payload = "roomJoinSuccess";
                        }
                        if (message.roomJoinFailFull != null && $Object.hasOwnProperty.call(message, "roomJoinFailFull")) {
                            object.roomJoinFailFull = $root.com.miti99.gomoku.proto.RoomJoinFailFullResponse.toObject(message.roomJoinFailFull, options, _depth + 1);
                            if (options.oneofs)
                                object.payload = "roomJoinFailFull";
                        }
                        if (message.roomJoinFailNotFound != null && $Object.hasOwnProperty.call(message, "roomJoinFailNotFound")) {
                            object.roomJoinFailNotFound = $root.com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse.toObject(message.roomJoinFailNotFound, options, _depth + 1);
                            if (options.oneofs)
                                object.payload = "roomJoinFailNotFound";
                        }
                        if (message.roomPlayFailNotFound != null && $Object.hasOwnProperty.call(message, "roomPlayFailNotFound")) {
                            object.roomPlayFailNotFound = $root.com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse.toObject(message.roomPlayFailNotFound, options, _depth + 1);
                            if (options.oneofs)
                                object.payload = "roomPlayFailNotFound";
                        }
                        if (message.gameStarting != null && $Object.hasOwnProperty.call(message, "gameStarting")) {
                            object.gameStarting = $root.com.miti99.gomoku.proto.GameStartingResponse.toObject(message.gameStarting, options, _depth + 1);
                            if (options.oneofs)
                                object.payload = "gameStarting";
                        }
                        if (message.gameMoveSuccess != null && $Object.hasOwnProperty.call(message, "gameMoveSuccess")) {
                            object.gameMoveSuccess = $root.com.miti99.gomoku.proto.GameMoveSuccessResponse.toObject(message.gameMoveSuccess, options, _depth + 1);
                            if (options.oneofs)
                                object.payload = "gameMoveSuccess";
                        }
                        if (message.gameMoveInvalid != null && $Object.hasOwnProperty.call(message, "gameMoveInvalid")) {
                            object.gameMoveInvalid = $root.com.miti99.gomoku.proto.GameMoveInvalidResponse.toObject(message.gameMoveInvalid, options, _depth + 1);
                            if (options.oneofs)
                                object.payload = "gameMoveInvalid";
                        }
                        if (message.gameMoveOccupied != null && $Object.hasOwnProperty.call(message, "gameMoveOccupied")) {
                            object.gameMoveOccupied = $root.com.miti99.gomoku.proto.GameMoveOccupiedResponse.toObject(message.gameMoveOccupied, options, _depth + 1);
                            if (options.oneofs)
                                object.payload = "gameMoveOccupied";
                        }
                        if (message.gameMoveOutOfBounds != null && $Object.hasOwnProperty.call(message, "gameMoveOutOfBounds")) {
                            object.gameMoveOutOfBounds = $root.com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse.toObject(message.gameMoveOutOfBounds, options, _depth + 1);
                            if (options.oneofs)
                                object.payload = "gameMoveOutOfBounds";
                        }
                        if (message.gameMoveNotYourTurn != null && $Object.hasOwnProperty.call(message, "gameMoveNotYourTurn")) {
                            object.gameMoveNotYourTurn = $root.com.miti99.gomoku.proto.GameMoveNotYourTurnResponse.toObject(message.gameMoveNotYourTurn, options, _depth + 1);
                            if (options.oneofs)
                                object.payload = "gameMoveNotYourTurn";
                        }
                        if (message.gameOver != null && $Object.hasOwnProperty.call(message, "gameOver")) {
                            object.gameOver = $root.com.miti99.gomoku.proto.GameOverResponse.toObject(message.gameOver, options, _depth + 1);
                            if (options.oneofs)
                                object.payload = "gameOver";
                        }
                        if (message.pveDifficultyNotSupport != null && $Object.hasOwnProperty.call(message, "pveDifficultyNotSupport")) {
                            object.pveDifficultyNotSupport = $root.com.miti99.gomoku.proto.PveDifficultyNotSupportResponse.toObject(message.pveDifficultyNotSupport, options, _depth + 1);
                            if (options.oneofs)
                                object.payload = "pveDifficultyNotSupport";
                        }
                        if (message.watchGameSuccess != null && $Object.hasOwnProperty.call(message, "watchGameSuccess")) {
                            object.watchGameSuccess = $root.com.miti99.gomoku.proto.WatchGameSuccessResponse.toObject(message.watchGameSuccess, options, _depth + 1);
                            if (options.oneofs)
                                object.payload = "watchGameSuccess";
                        }
                        if (message.clientExit != null && $Object.hasOwnProperty.call(message, "clientExit")) {
                            object.clientExit = $root.com.miti99.gomoku.proto.ClientExitResponse.toObject(message.clientExit, options, _depth + 1);
                            if (options.oneofs)
                                object.payload = "clientExit";
                        }
                        if (message.spectatorCannotAct != null && $Object.hasOwnProperty.call(message, "spectatorCannotAct")) {
                            object.spectatorCannotAct = $root.com.miti99.gomoku.proto.SpectatorCannotActResponse.toObject(message.spectatorCannotAct, options, _depth + 1);
                            if (options.oneofs)
                                object.payload = "spectatorCannotAct";
                        }
                        return object;
                    };

                    /**
                     * Converts this Response to JSON.
                     * @function toJSON
                     * @memberof com.miti99.gomoku.proto.Response
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Response.prototype.toJSON = function() {
                        return Response.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the type url for Response
                     * @function getTypeUrl
                     * @memberof com.miti99.gomoku.proto.Response
                     * @static
                     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns {string} The type url
                     */
                    Response.getTypeUrl = function(prefix) {
                        if (prefix === $undefined)
                            prefix = "type.googleapis.com";
                        return prefix + "/com.miti99.gomoku.proto.Response";
                    };

                    return Response;
                })();

                proto.ClientConnectResponse = (function() {

                    /**
                     * Properties of a ClientConnectResponse.
                     * @typedef {Object} com.miti99.gomoku.proto.ClientConnectResponse.$Properties
                     * @property {number|null} [clientId] ClientConnectResponse clientId
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */

                    /**
                     * Properties of a ClientConnectResponse.
                     * @memberof com.miti99.gomoku.proto
                     * @interface IClientConnectResponse
                     * @augments com.miti99.gomoku.proto.ClientConnectResponse.$Properties
                     * @deprecated Use com.miti99.gomoku.proto.ClientConnectResponse.$Properties instead.
                     */

                    /**
                     * Shape of a ClientConnectResponse.
                     * @typedef {com.miti99.gomoku.proto.ClientConnectResponse.$Properties} com.miti99.gomoku.proto.ClientConnectResponse.$Shape
                     */

                    /**
                     * Constructs a new ClientConnectResponse.
                     * @memberof com.miti99.gomoku.proto
                     * @classdesc Represents a ClientConnectResponse.
                     * @constructor
                     * @param {com.miti99.gomoku.proto.ClientConnectResponse.$Properties=} [properties] Properties to set
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */
                    const ClientConnectResponse = function (properties) {
                        if (properties)
                            for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                    this[keys[i]] = properties[keys[i]];
                    };

                    /**
                     * ClientConnectResponse clientId.
                     * @member {number} clientId
                     * @memberof com.miti99.gomoku.proto.ClientConnectResponse
                     * @instance
                     */
                    ClientConnectResponse.prototype.clientId = 0;

                    /**
                     * Creates a new ClientConnectResponse instance using the specified properties.
                     * @function create
                     * @memberof com.miti99.gomoku.proto.ClientConnectResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.ClientConnectResponse.$Properties=} [properties] Properties to set
                     * @returns {com.miti99.gomoku.proto.ClientConnectResponse} ClientConnectResponse instance
                     * @type {{
                     *   (properties: com.miti99.gomoku.proto.ClientConnectResponse.$Shape): com.miti99.gomoku.proto.ClientConnectResponse & com.miti99.gomoku.proto.ClientConnectResponse.$Shape;
                     *   (properties?: com.miti99.gomoku.proto.ClientConnectResponse.$Properties): com.miti99.gomoku.proto.ClientConnectResponse;
                     * }}
                     */
                    ClientConnectResponse.create = function(properties) {
                        return new ClientConnectResponse(properties);
                    };

                    /**
                     * Encodes the specified ClientConnectResponse message. Does not implicitly {@link com.miti99.gomoku.proto.ClientConnectResponse.verify|verify} messages.
                     * @function encode
                     * @memberof com.miti99.gomoku.proto.ClientConnectResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.ClientConnectResponse.$Properties} message ClientConnectResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ClientConnectResponse.encode = function (message, writer, _depth) {
                        if (!writer)
                            writer = $Writer.create();
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        if (message.clientId != null && $Object.hasOwnProperty.call(message, "clientId") && message.clientId !== 0)
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.clientId);
                        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                            for (let i = 0; i < message.$unknowns.length; ++i)
                                writer.raw(message.$unknowns[i]);
                        return writer;
                    };

                    /**
                     * Encodes the specified ClientConnectResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.ClientConnectResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.miti99.gomoku.proto.ClientConnectResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.ClientConnectResponse.$Properties} message ClientConnectResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ClientConnectResponse.encodeDelimited = function(message, writer) {
                        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                    };

                    /**
                     * Decodes a ClientConnectResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.miti99.gomoku.proto.ClientConnectResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.ClientConnectResponse & com.miti99.gomoku.proto.ClientConnectResponse.$Shape} ClientConnectResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ClientConnectResponse.decode = function (reader, length, _end, _depth, _target) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $Reader.recursionLimit)
                            throw $Error("max depth exceeded");
                        let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.com.miti99.gomoku.proto.ClientConnectResponse(), value;
                        while (reader.pos < end) {
                            let start = reader.pos;
                            let tag = reader.tag();
                            if (tag === _end) {
                                _end = $undefined;
                                break;
                            }
                            let wireType = tag & 7;
                            switch (tag >>>= 3) {
                            case 1: {
                                    if (wireType !== 0)
                                        break;
                                    if (value = reader.int32())
                                        message.clientId = value;
                                    else
                                        delete message.clientId;
                                    continue;
                                }
                            }
                            reader.skipType(wireType, _depth, tag);
                            if (!reader.discardUnknown) {
                                $util.makeProp(message, "$unknowns", false);
                                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                            }
                        }
                        if (_end !== $undefined)
                            throw $Error("missing end group");
                        return message;
                    };

                    /**
                     * Decodes a ClientConnectResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.miti99.gomoku.proto.ClientConnectResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.ClientConnectResponse & com.miti99.gomoku.proto.ClientConnectResponse.$Shape} ClientConnectResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ClientConnectResponse.decodeDelimited = function(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ClientConnectResponse message.
                     * @function verify
                     * @memberof com.miti99.gomoku.proto.ClientConnectResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ClientConnectResponse.verify = function (message, _depth) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            return "max depth exceeded";
                        if (message.clientId != null && $Object.hasOwnProperty.call(message, "clientId"))
                            if (!$util.isInteger(message.clientId))
                                return "clientId: integer expected";
                        return null;
                    };

                    /**
                     * Creates a ClientConnectResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.miti99.gomoku.proto.ClientConnectResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.miti99.gomoku.proto.ClientConnectResponse} ClientConnectResponse
                     */
                    ClientConnectResponse.fromObject = function (object, _depth) {
                        if (object instanceof $root.com.miti99.gomoku.proto.ClientConnectResponse)
                            return object;
                        if (!$util.isObject(object))
                            throw $TypeError(".com.miti99.gomoku.proto.ClientConnectResponse: object expected");
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        let message = new $root.com.miti99.gomoku.proto.ClientConnectResponse();
                        if (object.clientId != null)
                            if ($Number(object.clientId) !== 0)
                                message.clientId = object.clientId | 0;
                        return message;
                    };

                    /**
                     * Creates a plain object from a ClientConnectResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.miti99.gomoku.proto.ClientConnectResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.ClientConnectResponse} message ClientConnectResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ClientConnectResponse.toObject = function (message, options, _depth) {
                        if (!options)
                            options = {};
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        let object = {};
                        if (options.defaults)
                            object.clientId = 0;
                        if (message.clientId != null && $Object.hasOwnProperty.call(message, "clientId"))
                            object.clientId = message.clientId;
                        return object;
                    };

                    /**
                     * Converts this ClientConnectResponse to JSON.
                     * @function toJSON
                     * @memberof com.miti99.gomoku.proto.ClientConnectResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ClientConnectResponse.prototype.toJSON = function() {
                        return ClientConnectResponse.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the type url for ClientConnectResponse
                     * @function getTypeUrl
                     * @memberof com.miti99.gomoku.proto.ClientConnectResponse
                     * @static
                     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns {string} The type url
                     */
                    ClientConnectResponse.getTypeUrl = function(prefix) {
                        if (prefix === $undefined)
                            prefix = "type.googleapis.com";
                        return prefix + "/com.miti99.gomoku.proto.ClientConnectResponse";
                    };

                    return ClientConnectResponse;
                })();

                proto.NicknameSetResponse = (function() {

                    /**
                     * Properties of a NicknameSetResponse.
                     * @typedef {Object} com.miti99.gomoku.proto.NicknameSetResponse.$Properties
                     * @property {number|null} [invalidLength] NicknameSetResponse invalidLength
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */

                    /**
                     * Properties of a NicknameSetResponse.
                     * @memberof com.miti99.gomoku.proto
                     * @interface INicknameSetResponse
                     * @augments com.miti99.gomoku.proto.NicknameSetResponse.$Properties
                     * @deprecated Use com.miti99.gomoku.proto.NicknameSetResponse.$Properties instead.
                     */

                    /**
                     * Shape of a NicknameSetResponse.
                     * @typedef {com.miti99.gomoku.proto.NicknameSetResponse.$Properties} com.miti99.gomoku.proto.NicknameSetResponse.$Shape
                     */

                    /**
                     * Constructs a new NicknameSetResponse.
                     * @memberof com.miti99.gomoku.proto
                     * @classdesc Represents a NicknameSetResponse.
                     * @constructor
                     * @param {com.miti99.gomoku.proto.NicknameSetResponse.$Properties=} [properties] Properties to set
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */
                    const NicknameSetResponse = function (properties) {
                        if (properties)
                            for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                    this[keys[i]] = properties[keys[i]];
                    };

                    /**
                     * NicknameSetResponse invalidLength.
                     * @member {number} invalidLength
                     * @memberof com.miti99.gomoku.proto.NicknameSetResponse
                     * @instance
                     */
                    NicknameSetResponse.prototype.invalidLength = 0;

                    /**
                     * Creates a new NicknameSetResponse instance using the specified properties.
                     * @function create
                     * @memberof com.miti99.gomoku.proto.NicknameSetResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.NicknameSetResponse.$Properties=} [properties] Properties to set
                     * @returns {com.miti99.gomoku.proto.NicknameSetResponse} NicknameSetResponse instance
                     * @type {{
                     *   (properties: com.miti99.gomoku.proto.NicknameSetResponse.$Shape): com.miti99.gomoku.proto.NicknameSetResponse & com.miti99.gomoku.proto.NicknameSetResponse.$Shape;
                     *   (properties?: com.miti99.gomoku.proto.NicknameSetResponse.$Properties): com.miti99.gomoku.proto.NicknameSetResponse;
                     * }}
                     */
                    NicknameSetResponse.create = function(properties) {
                        return new NicknameSetResponse(properties);
                    };

                    /**
                     * Encodes the specified NicknameSetResponse message. Does not implicitly {@link com.miti99.gomoku.proto.NicknameSetResponse.verify|verify} messages.
                     * @function encode
                     * @memberof com.miti99.gomoku.proto.NicknameSetResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.NicknameSetResponse.$Properties} message NicknameSetResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    NicknameSetResponse.encode = function (message, writer, _depth) {
                        if (!writer)
                            writer = $Writer.create();
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        if (message.invalidLength != null && $Object.hasOwnProperty.call(message, "invalidLength") && message.invalidLength !== 0)
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.invalidLength);
                        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                            for (let i = 0; i < message.$unknowns.length; ++i)
                                writer.raw(message.$unknowns[i]);
                        return writer;
                    };

                    /**
                     * Encodes the specified NicknameSetResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.NicknameSetResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.miti99.gomoku.proto.NicknameSetResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.NicknameSetResponse.$Properties} message NicknameSetResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    NicknameSetResponse.encodeDelimited = function(message, writer) {
                        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                    };

                    /**
                     * Decodes a NicknameSetResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.miti99.gomoku.proto.NicknameSetResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.NicknameSetResponse & com.miti99.gomoku.proto.NicknameSetResponse.$Shape} NicknameSetResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    NicknameSetResponse.decode = function (reader, length, _end, _depth, _target) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $Reader.recursionLimit)
                            throw $Error("max depth exceeded");
                        let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.com.miti99.gomoku.proto.NicknameSetResponse(), value;
                        while (reader.pos < end) {
                            let start = reader.pos;
                            let tag = reader.tag();
                            if (tag === _end) {
                                _end = $undefined;
                                break;
                            }
                            let wireType = tag & 7;
                            switch (tag >>>= 3) {
                            case 1: {
                                    if (wireType !== 0)
                                        break;
                                    if (value = reader.int32())
                                        message.invalidLength = value;
                                    else
                                        delete message.invalidLength;
                                    continue;
                                }
                            }
                            reader.skipType(wireType, _depth, tag);
                            if (!reader.discardUnknown) {
                                $util.makeProp(message, "$unknowns", false);
                                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                            }
                        }
                        if (_end !== $undefined)
                            throw $Error("missing end group");
                        return message;
                    };

                    /**
                     * Decodes a NicknameSetResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.miti99.gomoku.proto.NicknameSetResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.NicknameSetResponse & com.miti99.gomoku.proto.NicknameSetResponse.$Shape} NicknameSetResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    NicknameSetResponse.decodeDelimited = function(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a NicknameSetResponse message.
                     * @function verify
                     * @memberof com.miti99.gomoku.proto.NicknameSetResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    NicknameSetResponse.verify = function (message, _depth) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            return "max depth exceeded";
                        if (message.invalidLength != null && $Object.hasOwnProperty.call(message, "invalidLength"))
                            if (!$util.isInteger(message.invalidLength))
                                return "invalidLength: integer expected";
                        return null;
                    };

                    /**
                     * Creates a NicknameSetResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.miti99.gomoku.proto.NicknameSetResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.miti99.gomoku.proto.NicknameSetResponse} NicknameSetResponse
                     */
                    NicknameSetResponse.fromObject = function (object, _depth) {
                        if (object instanceof $root.com.miti99.gomoku.proto.NicknameSetResponse)
                            return object;
                        if (!$util.isObject(object))
                            throw $TypeError(".com.miti99.gomoku.proto.NicknameSetResponse: object expected");
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        let message = new $root.com.miti99.gomoku.proto.NicknameSetResponse();
                        if (object.invalidLength != null)
                            if ($Number(object.invalidLength) !== 0)
                                message.invalidLength = object.invalidLength | 0;
                        return message;
                    };

                    /**
                     * Creates a plain object from a NicknameSetResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.miti99.gomoku.proto.NicknameSetResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.NicknameSetResponse} message NicknameSetResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    NicknameSetResponse.toObject = function (message, options, _depth) {
                        if (!options)
                            options = {};
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        let object = {};
                        if (options.defaults)
                            object.invalidLength = 0;
                        if (message.invalidLength != null && $Object.hasOwnProperty.call(message, "invalidLength"))
                            object.invalidLength = message.invalidLength;
                        return object;
                    };

                    /**
                     * Converts this NicknameSetResponse to JSON.
                     * @function toJSON
                     * @memberof com.miti99.gomoku.proto.NicknameSetResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    NicknameSetResponse.prototype.toJSON = function() {
                        return NicknameSetResponse.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the type url for NicknameSetResponse
                     * @function getTypeUrl
                     * @memberof com.miti99.gomoku.proto.NicknameSetResponse
                     * @static
                     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns {string} The type url
                     */
                    NicknameSetResponse.getTypeUrl = function(prefix) {
                        if (prefix === $undefined)
                            prefix = "type.googleapis.com";
                        return prefix + "/com.miti99.gomoku.proto.NicknameSetResponse";
                    };

                    return NicknameSetResponse;
                })();

                proto.ShowOptionsResponse = (function() {

                    /**
                     * Properties of a ShowOptionsResponse.
                     * @typedef {Object} com.miti99.gomoku.proto.ShowOptionsResponse.$Properties
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */

                    /**
                     * Properties of a ShowOptionsResponse.
                     * @memberof com.miti99.gomoku.proto
                     * @interface IShowOptionsResponse
                     * @augments com.miti99.gomoku.proto.ShowOptionsResponse.$Properties
                     * @deprecated Use com.miti99.gomoku.proto.ShowOptionsResponse.$Properties instead.
                     */

                    /**
                     * Shape of a ShowOptionsResponse.
                     * @typedef {com.miti99.gomoku.proto.ShowOptionsResponse.$Properties} com.miti99.gomoku.proto.ShowOptionsResponse.$Shape
                     */

                    /**
                     * Constructs a new ShowOptionsResponse.
                     * @memberof com.miti99.gomoku.proto
                     * @classdesc Represents a ShowOptionsResponse.
                     * @constructor
                     * @param {com.miti99.gomoku.proto.ShowOptionsResponse.$Properties=} [properties] Properties to set
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */
                    const ShowOptionsResponse = function (properties) {
                        if (properties)
                            for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                    this[keys[i]] = properties[keys[i]];
                    };

                    /**
                     * Creates a new ShowOptionsResponse instance using the specified properties.
                     * @function create
                     * @memberof com.miti99.gomoku.proto.ShowOptionsResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.ShowOptionsResponse.$Properties=} [properties] Properties to set
                     * @returns {com.miti99.gomoku.proto.ShowOptionsResponse} ShowOptionsResponse instance
                     * @type {{
                     *   (properties: com.miti99.gomoku.proto.ShowOptionsResponse.$Shape): com.miti99.gomoku.proto.ShowOptionsResponse & com.miti99.gomoku.proto.ShowOptionsResponse.$Shape;
                     *   (properties?: com.miti99.gomoku.proto.ShowOptionsResponse.$Properties): com.miti99.gomoku.proto.ShowOptionsResponse;
                     * }}
                     */
                    ShowOptionsResponse.create = function(properties) {
                        return new ShowOptionsResponse(properties);
                    };

                    /**
                     * Encodes the specified ShowOptionsResponse message. Does not implicitly {@link com.miti99.gomoku.proto.ShowOptionsResponse.verify|verify} messages.
                     * @function encode
                     * @memberof com.miti99.gomoku.proto.ShowOptionsResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.ShowOptionsResponse.$Properties} message ShowOptionsResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ShowOptionsResponse.encode = function (message, writer, _depth) {
                        if (!writer)
                            writer = $Writer.create();
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                            for (let i = 0; i < message.$unknowns.length; ++i)
                                writer.raw(message.$unknowns[i]);
                        return writer;
                    };

                    /**
                     * Encodes the specified ShowOptionsResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.ShowOptionsResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.miti99.gomoku.proto.ShowOptionsResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.ShowOptionsResponse.$Properties} message ShowOptionsResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ShowOptionsResponse.encodeDelimited = function(message, writer) {
                        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                    };

                    /**
                     * Decodes a ShowOptionsResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.miti99.gomoku.proto.ShowOptionsResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.ShowOptionsResponse & com.miti99.gomoku.proto.ShowOptionsResponse.$Shape} ShowOptionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ShowOptionsResponse.decode = function (reader, length, _end, _depth, _target) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $Reader.recursionLimit)
                            throw $Error("max depth exceeded");
                        let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.com.miti99.gomoku.proto.ShowOptionsResponse();
                        while (reader.pos < end) {
                            let start = reader.pos;
                            let tag = reader.tag();
                            if (tag === _end) {
                                _end = $undefined;
                                break;
                            }
                            reader.skipType(tag & 7, _depth, tag);
                            if (!reader.discardUnknown) {
                                $util.makeProp(message, "$unknowns", false);
                                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                            }
                        }
                        if (_end !== $undefined)
                            throw $Error("missing end group");
                        return message;
                    };

                    /**
                     * Decodes a ShowOptionsResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.miti99.gomoku.proto.ShowOptionsResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.ShowOptionsResponse & com.miti99.gomoku.proto.ShowOptionsResponse.$Shape} ShowOptionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ShowOptionsResponse.decodeDelimited = function(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ShowOptionsResponse message.
                     * @function verify
                     * @memberof com.miti99.gomoku.proto.ShowOptionsResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ShowOptionsResponse.verify = function (message, _depth) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            return "max depth exceeded";
                        return null;
                    };

                    /**
                     * Creates a ShowOptionsResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.miti99.gomoku.proto.ShowOptionsResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.miti99.gomoku.proto.ShowOptionsResponse} ShowOptionsResponse
                     */
                    ShowOptionsResponse.fromObject = function (object, _depth) {
                        if (object instanceof $root.com.miti99.gomoku.proto.ShowOptionsResponse)
                            return object;
                        if (!$util.isObject(object))
                            throw $TypeError(".com.miti99.gomoku.proto.ShowOptionsResponse: object expected");
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        return new $root.com.miti99.gomoku.proto.ShowOptionsResponse();
                    };

                    /**
                     * Creates a plain object from a ShowOptionsResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.miti99.gomoku.proto.ShowOptionsResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.ShowOptionsResponse} message ShowOptionsResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ShowOptionsResponse.toObject = function () {
                        return {};
                    };

                    /**
                     * Converts this ShowOptionsResponse to JSON.
                     * @function toJSON
                     * @memberof com.miti99.gomoku.proto.ShowOptionsResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ShowOptionsResponse.prototype.toJSON = function() {
                        return ShowOptionsResponse.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the type url for ShowOptionsResponse
                     * @function getTypeUrl
                     * @memberof com.miti99.gomoku.proto.ShowOptionsResponse
                     * @static
                     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns {string} The type url
                     */
                    ShowOptionsResponse.getTypeUrl = function(prefix) {
                        if (prefix === $undefined)
                            prefix = "type.googleapis.com";
                        return prefix + "/com.miti99.gomoku.proto.ShowOptionsResponse";
                    };

                    return ShowOptionsResponse;
                })();

                proto.RoomSummary = (function() {

                    /**
                     * Properties of a RoomSummary.
                     * @typedef {Object} com.miti99.gomoku.proto.RoomSummary.$Properties
                     * @property {number|null} [roomId] RoomSummary roomId
                     * @property {string|null} [roomOwner] RoomSummary roomOwner
                     * @property {number|null} [roomClientCount] RoomSummary roomClientCount
                     * @property {com.miti99.gomoku.proto.RoomType|null} [roomType] RoomSummary roomType
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */

                    /**
                     * Properties of a RoomSummary.
                     * @memberof com.miti99.gomoku.proto
                     * @interface IRoomSummary
                     * @augments com.miti99.gomoku.proto.RoomSummary.$Properties
                     * @deprecated Use com.miti99.gomoku.proto.RoomSummary.$Properties instead.
                     */

                    /**
                     * Shape of a RoomSummary.
                     * @typedef {com.miti99.gomoku.proto.RoomSummary.$Properties} com.miti99.gomoku.proto.RoomSummary.$Shape
                     */

                    /**
                     * Constructs a new RoomSummary.
                     * @memberof com.miti99.gomoku.proto
                     * @classdesc Represents a RoomSummary.
                     * @constructor
                     * @param {com.miti99.gomoku.proto.RoomSummary.$Properties=} [properties] Properties to set
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */
                    const RoomSummary = function (properties) {
                        if (properties)
                            for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                    this[keys[i]] = properties[keys[i]];
                    };

                    /**
                     * RoomSummary roomId.
                     * @member {number} roomId
                     * @memberof com.miti99.gomoku.proto.RoomSummary
                     * @instance
                     */
                    RoomSummary.prototype.roomId = 0;

                    /**
                     * RoomSummary roomOwner.
                     * @member {string} roomOwner
                     * @memberof com.miti99.gomoku.proto.RoomSummary
                     * @instance
                     */
                    RoomSummary.prototype.roomOwner = "";

                    /**
                     * RoomSummary roomClientCount.
                     * @member {number} roomClientCount
                     * @memberof com.miti99.gomoku.proto.RoomSummary
                     * @instance
                     */
                    RoomSummary.prototype.roomClientCount = 0;

                    /**
                     * RoomSummary roomType.
                     * @member {com.miti99.gomoku.proto.RoomType} roomType
                     * @memberof com.miti99.gomoku.proto.RoomSummary
                     * @instance
                     */
                    RoomSummary.prototype.roomType = 0;

                    /**
                     * Creates a new RoomSummary instance using the specified properties.
                     * @function create
                     * @memberof com.miti99.gomoku.proto.RoomSummary
                     * @static
                     * @param {com.miti99.gomoku.proto.RoomSummary.$Properties=} [properties] Properties to set
                     * @returns {com.miti99.gomoku.proto.RoomSummary} RoomSummary instance
                     * @type {{
                     *   (properties: com.miti99.gomoku.proto.RoomSummary.$Shape): com.miti99.gomoku.proto.RoomSummary & com.miti99.gomoku.proto.RoomSummary.$Shape;
                     *   (properties?: com.miti99.gomoku.proto.RoomSummary.$Properties): com.miti99.gomoku.proto.RoomSummary;
                     * }}
                     */
                    RoomSummary.create = function(properties) {
                        return new RoomSummary(properties);
                    };

                    /**
                     * Encodes the specified RoomSummary message. Does not implicitly {@link com.miti99.gomoku.proto.RoomSummary.verify|verify} messages.
                     * @function encode
                     * @memberof com.miti99.gomoku.proto.RoomSummary
                     * @static
                     * @param {com.miti99.gomoku.proto.RoomSummary.$Properties} message RoomSummary message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RoomSummary.encode = function (message, writer, _depth) {
                        if (!writer)
                            writer = $Writer.create();
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        if (message.roomId != null && $Object.hasOwnProperty.call(message, "roomId") && message.roomId !== 0)
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roomId);
                        if (message.roomOwner != null && $Object.hasOwnProperty.call(message, "roomOwner") && message.roomOwner !== "")
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.roomOwner);
                        if (message.roomClientCount != null && $Object.hasOwnProperty.call(message, "roomClientCount") && message.roomClientCount !== 0)
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.roomClientCount);
                        if (message.roomType != null && $Object.hasOwnProperty.call(message, "roomType") && message.roomType !== 0)
                            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.roomType);
                        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                            for (let i = 0; i < message.$unknowns.length; ++i)
                                writer.raw(message.$unknowns[i]);
                        return writer;
                    };

                    /**
                     * Encodes the specified RoomSummary message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.RoomSummary.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.miti99.gomoku.proto.RoomSummary
                     * @static
                     * @param {com.miti99.gomoku.proto.RoomSummary.$Properties} message RoomSummary message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RoomSummary.encodeDelimited = function(message, writer) {
                        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                    };

                    /**
                     * Decodes a RoomSummary message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.miti99.gomoku.proto.RoomSummary
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.RoomSummary & com.miti99.gomoku.proto.RoomSummary.$Shape} RoomSummary
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RoomSummary.decode = function (reader, length, _end, _depth, _target) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $Reader.recursionLimit)
                            throw $Error("max depth exceeded");
                        let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.com.miti99.gomoku.proto.RoomSummary(), value;
                        while (reader.pos < end) {
                            let start = reader.pos;
                            let tag = reader.tag();
                            if (tag === _end) {
                                _end = $undefined;
                                break;
                            }
                            let wireType = tag & 7;
                            switch (tag >>>= 3) {
                            case 1: {
                                    if (wireType !== 0)
                                        break;
                                    if (value = reader.int32())
                                        message.roomId = value;
                                    else
                                        delete message.roomId;
                                    continue;
                                }
                            case 2: {
                                    if (wireType !== 2)
                                        break;
                                    if ((value = reader.stringVerify()).length)
                                        message.roomOwner = value;
                                    else
                                        delete message.roomOwner;
                                    continue;
                                }
                            case 3: {
                                    if (wireType !== 0)
                                        break;
                                    if (value = reader.int32())
                                        message.roomClientCount = value;
                                    else
                                        delete message.roomClientCount;
                                    continue;
                                }
                            case 4: {
                                    if (wireType !== 0)
                                        break;
                                    if (value = reader.int32())
                                        message.roomType = value;
                                    else
                                        delete message.roomType;
                                    continue;
                                }
                            }
                            reader.skipType(wireType, _depth, tag);
                            if (!reader.discardUnknown) {
                                $util.makeProp(message, "$unknowns", false);
                                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                            }
                        }
                        if (_end !== $undefined)
                            throw $Error("missing end group");
                        return message;
                    };

                    /**
                     * Decodes a RoomSummary message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.miti99.gomoku.proto.RoomSummary
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.RoomSummary & com.miti99.gomoku.proto.RoomSummary.$Shape} RoomSummary
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RoomSummary.decodeDelimited = function(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a RoomSummary message.
                     * @function verify
                     * @memberof com.miti99.gomoku.proto.RoomSummary
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    RoomSummary.verify = function (message, _depth) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            return "max depth exceeded";
                        if (message.roomId != null && $Object.hasOwnProperty.call(message, "roomId"))
                            if (!$util.isInteger(message.roomId))
                                return "roomId: integer expected";
                        if (message.roomOwner != null && $Object.hasOwnProperty.call(message, "roomOwner"))
                            if (!$util.isString(message.roomOwner))
                                return "roomOwner: string expected";
                        if (message.roomClientCount != null && $Object.hasOwnProperty.call(message, "roomClientCount"))
                            if (!$util.isInteger(message.roomClientCount))
                                return "roomClientCount: integer expected";
                        if (message.roomType != null && $Object.hasOwnProperty.call(message, "roomType"))
                            if (typeof message.roomType !== "number" || (message.roomType | 0) !== message.roomType)
                                return "roomType: enum value expected";
                        return null;
                    };

                    /**
                     * Creates a RoomSummary message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.miti99.gomoku.proto.RoomSummary
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.miti99.gomoku.proto.RoomSummary} RoomSummary
                     */
                    RoomSummary.fromObject = function (object, _depth) {
                        if (object instanceof $root.com.miti99.gomoku.proto.RoomSummary)
                            return object;
                        if (!$util.isObject(object))
                            throw $TypeError(".com.miti99.gomoku.proto.RoomSummary: object expected");
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        let message = new $root.com.miti99.gomoku.proto.RoomSummary();
                        if (object.roomId != null)
                            if ($Number(object.roomId) !== 0)
                                message.roomId = object.roomId | 0;
                        if (object.roomOwner != null)
                            if (typeof object.roomOwner !== "string" || object.roomOwner.length)
                                message.roomOwner = $String(object.roomOwner);
                        if (object.roomClientCount != null)
                            if ($Number(object.roomClientCount) !== 0)
                                message.roomClientCount = object.roomClientCount | 0;
                        if (object.roomType !== 0 && (typeof object.roomType !== "string" || $root.com.miti99.gomoku.proto.RoomType[object.roomType] !== 0))
                            switch (object.roomType) {
                            case "ROOM_TYPE_UNSPECIFIED":
                            case 0:
                                message.roomType = 0;
                                break;
                            case "PVP":
                            case 1:
                                message.roomType = 1;
                                break;
                            case "PVE":
                            case 2:
                                message.roomType = 2;
                                break;
                            default:
                                if (typeof object.roomType === "number" && (object.roomType | 0) === object.roomType)
                                    message.roomType = object.roomType;
                            }
                        return message;
                    };

                    /**
                     * Creates a plain object from a RoomSummary message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.miti99.gomoku.proto.RoomSummary
                     * @static
                     * @param {com.miti99.gomoku.proto.RoomSummary} message RoomSummary
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    RoomSummary.toObject = function (message, options, _depth) {
                        if (!options)
                            options = {};
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        let object = {};
                        if (options.defaults) {
                            object.roomId = 0;
                            object.roomOwner = "";
                            object.roomClientCount = 0;
                            object.roomType = options.enums === $String ? "ROOM_TYPE_UNSPECIFIED" : 0;
                        }
                        if (message.roomId != null && $Object.hasOwnProperty.call(message, "roomId"))
                            object.roomId = message.roomId;
                        if (message.roomOwner != null && $Object.hasOwnProperty.call(message, "roomOwner"))
                            object.roomOwner = message.roomOwner;
                        if (message.roomClientCount != null && $Object.hasOwnProperty.call(message, "roomClientCount"))
                            object.roomClientCount = message.roomClientCount;
                        if (message.roomType != null && $Object.hasOwnProperty.call(message, "roomType"))
                            object.roomType = options.enums === $String ? $root.com.miti99.gomoku.proto.RoomType[message.roomType] === $undefined ? message.roomType : $root.com.miti99.gomoku.proto.RoomType[message.roomType] : message.roomType;
                        return object;
                    };

                    /**
                     * Converts this RoomSummary to JSON.
                     * @function toJSON
                     * @memberof com.miti99.gomoku.proto.RoomSummary
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    RoomSummary.prototype.toJSON = function() {
                        return RoomSummary.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the type url for RoomSummary
                     * @function getTypeUrl
                     * @memberof com.miti99.gomoku.proto.RoomSummary
                     * @static
                     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns {string} The type url
                     */
                    RoomSummary.getTypeUrl = function(prefix) {
                        if (prefix === $undefined)
                            prefix = "type.googleapis.com";
                        return prefix + "/com.miti99.gomoku.proto.RoomSummary";
                    };

                    return RoomSummary;
                })();

                proto.ShowRoomsResponse = (function() {

                    /**
                     * Properties of a ShowRoomsResponse.
                     * @typedef {Object} com.miti99.gomoku.proto.ShowRoomsResponse.$Properties
                     * @property {Array.<com.miti99.gomoku.proto.RoomSummary.$Properties>|null} [rooms] ShowRoomsResponse rooms
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */

                    /**
                     * Properties of a ShowRoomsResponse.
                     * @memberof com.miti99.gomoku.proto
                     * @interface IShowRoomsResponse
                     * @augments com.miti99.gomoku.proto.ShowRoomsResponse.$Properties
                     * @deprecated Use com.miti99.gomoku.proto.ShowRoomsResponse.$Properties instead.
                     */

                    /**
                     * Shape of a ShowRoomsResponse.
                     * @typedef {com.miti99.gomoku.proto.ShowRoomsResponse.$Properties} com.miti99.gomoku.proto.ShowRoomsResponse.$Shape
                     */

                    /**
                     * Constructs a new ShowRoomsResponse.
                     * @memberof com.miti99.gomoku.proto
                     * @classdesc Represents a ShowRoomsResponse.
                     * @constructor
                     * @param {com.miti99.gomoku.proto.ShowRoomsResponse.$Properties=} [properties] Properties to set
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */
                    const ShowRoomsResponse = function (properties) {
                        this.rooms = [];
                        if (properties)
                            for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                    this[keys[i]] = properties[keys[i]];
                    };

                    /**
                     * ShowRoomsResponse rooms.
                     * @member {Array.<com.miti99.gomoku.proto.RoomSummary.$Properties>} rooms
                     * @memberof com.miti99.gomoku.proto.ShowRoomsResponse
                     * @instance
                     */
                    ShowRoomsResponse.prototype.rooms = $util.emptyArray;

                    /**
                     * Creates a new ShowRoomsResponse instance using the specified properties.
                     * @function create
                     * @memberof com.miti99.gomoku.proto.ShowRoomsResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.ShowRoomsResponse.$Properties=} [properties] Properties to set
                     * @returns {com.miti99.gomoku.proto.ShowRoomsResponse} ShowRoomsResponse instance
                     * @type {{
                     *   (properties: com.miti99.gomoku.proto.ShowRoomsResponse.$Shape): com.miti99.gomoku.proto.ShowRoomsResponse & com.miti99.gomoku.proto.ShowRoomsResponse.$Shape;
                     *   (properties?: com.miti99.gomoku.proto.ShowRoomsResponse.$Properties): com.miti99.gomoku.proto.ShowRoomsResponse;
                     * }}
                     */
                    ShowRoomsResponse.create = function(properties) {
                        return new ShowRoomsResponse(properties);
                    };

                    /**
                     * Encodes the specified ShowRoomsResponse message. Does not implicitly {@link com.miti99.gomoku.proto.ShowRoomsResponse.verify|verify} messages.
                     * @function encode
                     * @memberof com.miti99.gomoku.proto.ShowRoomsResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.ShowRoomsResponse.$Properties} message ShowRoomsResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ShowRoomsResponse.encode = function (message, writer, _depth) {
                        if (!writer)
                            writer = $Writer.create();
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        if (message.rooms != null && message.rooms.length)
                            for (let i = 0; i < message.rooms.length; ++i)
                                $root.com.miti99.gomoku.proto.RoomSummary.encode(message.rooms[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                            for (let i = 0; i < message.$unknowns.length; ++i)
                                writer.raw(message.$unknowns[i]);
                        return writer;
                    };

                    /**
                     * Encodes the specified ShowRoomsResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.ShowRoomsResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.miti99.gomoku.proto.ShowRoomsResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.ShowRoomsResponse.$Properties} message ShowRoomsResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ShowRoomsResponse.encodeDelimited = function(message, writer) {
                        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                    };

                    /**
                     * Decodes a ShowRoomsResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.miti99.gomoku.proto.ShowRoomsResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.ShowRoomsResponse & com.miti99.gomoku.proto.ShowRoomsResponse.$Shape} ShowRoomsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ShowRoomsResponse.decode = function (reader, length, _end, _depth, _target) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $Reader.recursionLimit)
                            throw $Error("max depth exceeded");
                        let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.com.miti99.gomoku.proto.ShowRoomsResponse();
                        while (reader.pos < end) {
                            let start = reader.pos;
                            let tag = reader.tag();
                            if (tag === _end) {
                                _end = $undefined;
                                break;
                            }
                            let wireType = tag & 7;
                            switch (tag >>>= 3) {
                            case 1: {
                                    if (wireType !== 2)
                                        break;
                                    if (!(message.rooms && message.rooms.length))
                                        message.rooms = [];
                                    message.rooms.push($root.com.miti99.gomoku.proto.RoomSummary.decode(reader, reader.uint32(), $undefined, _depth + 1));
                                    continue;
                                }
                            }
                            reader.skipType(wireType, _depth, tag);
                            if (!reader.discardUnknown) {
                                $util.makeProp(message, "$unknowns", false);
                                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                            }
                        }
                        if (_end !== $undefined)
                            throw $Error("missing end group");
                        return message;
                    };

                    /**
                     * Decodes a ShowRoomsResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.miti99.gomoku.proto.ShowRoomsResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.ShowRoomsResponse & com.miti99.gomoku.proto.ShowRoomsResponse.$Shape} ShowRoomsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ShowRoomsResponse.decodeDelimited = function(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ShowRoomsResponse message.
                     * @function verify
                     * @memberof com.miti99.gomoku.proto.ShowRoomsResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ShowRoomsResponse.verify = function (message, _depth) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            return "max depth exceeded";
                        if (message.rooms != null && $Object.hasOwnProperty.call(message, "rooms")) {
                            if (!$Array.isArray(message.rooms))
                                return "rooms: array expected";
                            for (let i = 0; i < message.rooms.length; ++i) {
                                let error = $root.com.miti99.gomoku.proto.RoomSummary.verify(message.rooms[i], _depth + 1);
                                if (error)
                                    return "rooms." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a ShowRoomsResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.miti99.gomoku.proto.ShowRoomsResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.miti99.gomoku.proto.ShowRoomsResponse} ShowRoomsResponse
                     */
                    ShowRoomsResponse.fromObject = function (object, _depth) {
                        if (object instanceof $root.com.miti99.gomoku.proto.ShowRoomsResponse)
                            return object;
                        if (!$util.isObject(object))
                            throw $TypeError(".com.miti99.gomoku.proto.ShowRoomsResponse: object expected");
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        let message = new $root.com.miti99.gomoku.proto.ShowRoomsResponse();
                        if (object.rooms) {
                            if (!$Array.isArray(object.rooms))
                                throw $TypeError(".com.miti99.gomoku.proto.ShowRoomsResponse.rooms: array expected");
                            message.rooms = $Array(object.rooms.length);
                            for (let i = 0; i < object.rooms.length; ++i) {
                                if (!$util.isObject(object.rooms[i]))
                                    throw $TypeError(".com.miti99.gomoku.proto.ShowRoomsResponse.rooms: object expected");
                                message.rooms[i] = $root.com.miti99.gomoku.proto.RoomSummary.fromObject(object.rooms[i], _depth + 1);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a ShowRoomsResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.miti99.gomoku.proto.ShowRoomsResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.ShowRoomsResponse} message ShowRoomsResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ShowRoomsResponse.toObject = function (message, options, _depth) {
                        if (!options)
                            options = {};
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        let object = {};
                        if (options.arrays || options.defaults)
                            object.rooms = [];
                        if (message.rooms && message.rooms.length) {
                            object.rooms = $Array(message.rooms.length);
                            for (let j = 0; j < message.rooms.length; ++j)
                                object.rooms[j] = $root.com.miti99.gomoku.proto.RoomSummary.toObject(message.rooms[j], options, _depth + 1);
                        }
                        return object;
                    };

                    /**
                     * Converts this ShowRoomsResponse to JSON.
                     * @function toJSON
                     * @memberof com.miti99.gomoku.proto.ShowRoomsResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ShowRoomsResponse.prototype.toJSON = function() {
                        return ShowRoomsResponse.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the type url for ShowRoomsResponse
                     * @function getTypeUrl
                     * @memberof com.miti99.gomoku.proto.ShowRoomsResponse
                     * @static
                     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns {string} The type url
                     */
                    ShowRoomsResponse.getTypeUrl = function(prefix) {
                        if (prefix === $undefined)
                            prefix = "type.googleapis.com";
                        return prefix + "/com.miti99.gomoku.proto.ShowRoomsResponse";
                    };

                    return ShowRoomsResponse;
                })();

                proto.RoomCreateSuccessResponse = (function() {

                    /**
                     * Properties of a RoomCreateSuccessResponse.
                     * @typedef {Object} com.miti99.gomoku.proto.RoomCreateSuccessResponse.$Properties
                     * @property {number|null} [id] RoomCreateSuccessResponse id
                     * @property {string|null} [roomOwner] RoomCreateSuccessResponse roomOwner
                     * @property {com.miti99.gomoku.proto.RoomType|null} [roomType] RoomCreateSuccessResponse roomType
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */

                    /**
                     * Properties of a RoomCreateSuccessResponse.
                     * @memberof com.miti99.gomoku.proto
                     * @interface IRoomCreateSuccessResponse
                     * @augments com.miti99.gomoku.proto.RoomCreateSuccessResponse.$Properties
                     * @deprecated Use com.miti99.gomoku.proto.RoomCreateSuccessResponse.$Properties instead.
                     */

                    /**
                     * Shape of a RoomCreateSuccessResponse.
                     * @typedef {com.miti99.gomoku.proto.RoomCreateSuccessResponse.$Properties} com.miti99.gomoku.proto.RoomCreateSuccessResponse.$Shape
                     */

                    /**
                     * Constructs a new RoomCreateSuccessResponse.
                     * @memberof com.miti99.gomoku.proto
                     * @classdesc Represents a RoomCreateSuccessResponse.
                     * @constructor
                     * @param {com.miti99.gomoku.proto.RoomCreateSuccessResponse.$Properties=} [properties] Properties to set
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */
                    const RoomCreateSuccessResponse = function (properties) {
                        if (properties)
                            for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                    this[keys[i]] = properties[keys[i]];
                    };

                    /**
                     * RoomCreateSuccessResponse id.
                     * @member {number} id
                     * @memberof com.miti99.gomoku.proto.RoomCreateSuccessResponse
                     * @instance
                     */
                    RoomCreateSuccessResponse.prototype.id = 0;

                    /**
                     * RoomCreateSuccessResponse roomOwner.
                     * @member {string} roomOwner
                     * @memberof com.miti99.gomoku.proto.RoomCreateSuccessResponse
                     * @instance
                     */
                    RoomCreateSuccessResponse.prototype.roomOwner = "";

                    /**
                     * RoomCreateSuccessResponse roomType.
                     * @member {com.miti99.gomoku.proto.RoomType} roomType
                     * @memberof com.miti99.gomoku.proto.RoomCreateSuccessResponse
                     * @instance
                     */
                    RoomCreateSuccessResponse.prototype.roomType = 0;

                    /**
                     * Creates a new RoomCreateSuccessResponse instance using the specified properties.
                     * @function create
                     * @memberof com.miti99.gomoku.proto.RoomCreateSuccessResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.RoomCreateSuccessResponse.$Properties=} [properties] Properties to set
                     * @returns {com.miti99.gomoku.proto.RoomCreateSuccessResponse} RoomCreateSuccessResponse instance
                     * @type {{
                     *   (properties: com.miti99.gomoku.proto.RoomCreateSuccessResponse.$Shape): com.miti99.gomoku.proto.RoomCreateSuccessResponse & com.miti99.gomoku.proto.RoomCreateSuccessResponse.$Shape;
                     *   (properties?: com.miti99.gomoku.proto.RoomCreateSuccessResponse.$Properties): com.miti99.gomoku.proto.RoomCreateSuccessResponse;
                     * }}
                     */
                    RoomCreateSuccessResponse.create = function(properties) {
                        return new RoomCreateSuccessResponse(properties);
                    };

                    /**
                     * Encodes the specified RoomCreateSuccessResponse message. Does not implicitly {@link com.miti99.gomoku.proto.RoomCreateSuccessResponse.verify|verify} messages.
                     * @function encode
                     * @memberof com.miti99.gomoku.proto.RoomCreateSuccessResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.RoomCreateSuccessResponse.$Properties} message RoomCreateSuccessResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RoomCreateSuccessResponse.encode = function (message, writer, _depth) {
                        if (!writer)
                            writer = $Writer.create();
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        if (message.id != null && $Object.hasOwnProperty.call(message, "id") && message.id !== 0)
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                        if (message.roomOwner != null && $Object.hasOwnProperty.call(message, "roomOwner") && message.roomOwner !== "")
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.roomOwner);
                        if (message.roomType != null && $Object.hasOwnProperty.call(message, "roomType") && message.roomType !== 0)
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.roomType);
                        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                            for (let i = 0; i < message.$unknowns.length; ++i)
                                writer.raw(message.$unknowns[i]);
                        return writer;
                    };

                    /**
                     * Encodes the specified RoomCreateSuccessResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.RoomCreateSuccessResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.miti99.gomoku.proto.RoomCreateSuccessResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.RoomCreateSuccessResponse.$Properties} message RoomCreateSuccessResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RoomCreateSuccessResponse.encodeDelimited = function(message, writer) {
                        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                    };

                    /**
                     * Decodes a RoomCreateSuccessResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.miti99.gomoku.proto.RoomCreateSuccessResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.RoomCreateSuccessResponse & com.miti99.gomoku.proto.RoomCreateSuccessResponse.$Shape} RoomCreateSuccessResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RoomCreateSuccessResponse.decode = function (reader, length, _end, _depth, _target) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $Reader.recursionLimit)
                            throw $Error("max depth exceeded");
                        let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.com.miti99.gomoku.proto.RoomCreateSuccessResponse(), value;
                        while (reader.pos < end) {
                            let start = reader.pos;
                            let tag = reader.tag();
                            if (tag === _end) {
                                _end = $undefined;
                                break;
                            }
                            let wireType = tag & 7;
                            switch (tag >>>= 3) {
                            case 1: {
                                    if (wireType !== 0)
                                        break;
                                    if (value = reader.int32())
                                        message.id = value;
                                    else
                                        delete message.id;
                                    continue;
                                }
                            case 2: {
                                    if (wireType !== 2)
                                        break;
                                    if ((value = reader.stringVerify()).length)
                                        message.roomOwner = value;
                                    else
                                        delete message.roomOwner;
                                    continue;
                                }
                            case 3: {
                                    if (wireType !== 0)
                                        break;
                                    if (value = reader.int32())
                                        message.roomType = value;
                                    else
                                        delete message.roomType;
                                    continue;
                                }
                            }
                            reader.skipType(wireType, _depth, tag);
                            if (!reader.discardUnknown) {
                                $util.makeProp(message, "$unknowns", false);
                                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                            }
                        }
                        if (_end !== $undefined)
                            throw $Error("missing end group");
                        return message;
                    };

                    /**
                     * Decodes a RoomCreateSuccessResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.miti99.gomoku.proto.RoomCreateSuccessResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.RoomCreateSuccessResponse & com.miti99.gomoku.proto.RoomCreateSuccessResponse.$Shape} RoomCreateSuccessResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RoomCreateSuccessResponse.decodeDelimited = function(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a RoomCreateSuccessResponse message.
                     * @function verify
                     * @memberof com.miti99.gomoku.proto.RoomCreateSuccessResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    RoomCreateSuccessResponse.verify = function (message, _depth) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            return "max depth exceeded";
                        if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                            if (!$util.isInteger(message.id))
                                return "id: integer expected";
                        if (message.roomOwner != null && $Object.hasOwnProperty.call(message, "roomOwner"))
                            if (!$util.isString(message.roomOwner))
                                return "roomOwner: string expected";
                        if (message.roomType != null && $Object.hasOwnProperty.call(message, "roomType"))
                            if (typeof message.roomType !== "number" || (message.roomType | 0) !== message.roomType)
                                return "roomType: enum value expected";
                        return null;
                    };

                    /**
                     * Creates a RoomCreateSuccessResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.miti99.gomoku.proto.RoomCreateSuccessResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.miti99.gomoku.proto.RoomCreateSuccessResponse} RoomCreateSuccessResponse
                     */
                    RoomCreateSuccessResponse.fromObject = function (object, _depth) {
                        if (object instanceof $root.com.miti99.gomoku.proto.RoomCreateSuccessResponse)
                            return object;
                        if (!$util.isObject(object))
                            throw $TypeError(".com.miti99.gomoku.proto.RoomCreateSuccessResponse: object expected");
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        let message = new $root.com.miti99.gomoku.proto.RoomCreateSuccessResponse();
                        if (object.id != null)
                            if ($Number(object.id) !== 0)
                                message.id = object.id | 0;
                        if (object.roomOwner != null)
                            if (typeof object.roomOwner !== "string" || object.roomOwner.length)
                                message.roomOwner = $String(object.roomOwner);
                        if (object.roomType !== 0 && (typeof object.roomType !== "string" || $root.com.miti99.gomoku.proto.RoomType[object.roomType] !== 0))
                            switch (object.roomType) {
                            case "ROOM_TYPE_UNSPECIFIED":
                            case 0:
                                message.roomType = 0;
                                break;
                            case "PVP":
                            case 1:
                                message.roomType = 1;
                                break;
                            case "PVE":
                            case 2:
                                message.roomType = 2;
                                break;
                            default:
                                if (typeof object.roomType === "number" && (object.roomType | 0) === object.roomType)
                                    message.roomType = object.roomType;
                            }
                        return message;
                    };

                    /**
                     * Creates a plain object from a RoomCreateSuccessResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.miti99.gomoku.proto.RoomCreateSuccessResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.RoomCreateSuccessResponse} message RoomCreateSuccessResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    RoomCreateSuccessResponse.toObject = function (message, options, _depth) {
                        if (!options)
                            options = {};
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        let object = {};
                        if (options.defaults) {
                            object.id = 0;
                            object.roomOwner = "";
                            object.roomType = options.enums === $String ? "ROOM_TYPE_UNSPECIFIED" : 0;
                        }
                        if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                            object.id = message.id;
                        if (message.roomOwner != null && $Object.hasOwnProperty.call(message, "roomOwner"))
                            object.roomOwner = message.roomOwner;
                        if (message.roomType != null && $Object.hasOwnProperty.call(message, "roomType"))
                            object.roomType = options.enums === $String ? $root.com.miti99.gomoku.proto.RoomType[message.roomType] === $undefined ? message.roomType : $root.com.miti99.gomoku.proto.RoomType[message.roomType] : message.roomType;
                        return object;
                    };

                    /**
                     * Converts this RoomCreateSuccessResponse to JSON.
                     * @function toJSON
                     * @memberof com.miti99.gomoku.proto.RoomCreateSuccessResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    RoomCreateSuccessResponse.prototype.toJSON = function() {
                        return RoomCreateSuccessResponse.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the type url for RoomCreateSuccessResponse
                     * @function getTypeUrl
                     * @memberof com.miti99.gomoku.proto.RoomCreateSuccessResponse
                     * @static
                     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns {string} The type url
                     */
                    RoomCreateSuccessResponse.getTypeUrl = function(prefix) {
                        if (prefix === $undefined)
                            prefix = "type.googleapis.com";
                        return prefix + "/com.miti99.gomoku.proto.RoomCreateSuccessResponse";
                    };

                    return RoomCreateSuccessResponse;
                })();

                proto.RoomJoinSuccessResponse = (function() {

                    /**
                     * Properties of a RoomJoinSuccessResponse.
                     * @typedef {Object} com.miti99.gomoku.proto.RoomJoinSuccessResponse.$Properties
                     * @property {number|null} [clientId] RoomJoinSuccessResponse clientId
                     * @property {string|null} [clientNickname] RoomJoinSuccessResponse clientNickname
                     * @property {number|null} [roomId] RoomJoinSuccessResponse roomId
                     * @property {string|null} [roomOwner] RoomJoinSuccessResponse roomOwner
                     * @property {number|null} [roomClientCount] RoomJoinSuccessResponse roomClientCount
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */

                    /**
                     * Properties of a RoomJoinSuccessResponse.
                     * @memberof com.miti99.gomoku.proto
                     * @interface IRoomJoinSuccessResponse
                     * @augments com.miti99.gomoku.proto.RoomJoinSuccessResponse.$Properties
                     * @deprecated Use com.miti99.gomoku.proto.RoomJoinSuccessResponse.$Properties instead.
                     */

                    /**
                     * Shape of a RoomJoinSuccessResponse.
                     * @typedef {com.miti99.gomoku.proto.RoomJoinSuccessResponse.$Properties} com.miti99.gomoku.proto.RoomJoinSuccessResponse.$Shape
                     */

                    /**
                     * Constructs a new RoomJoinSuccessResponse.
                     * @memberof com.miti99.gomoku.proto
                     * @classdesc Represents a RoomJoinSuccessResponse.
                     * @constructor
                     * @param {com.miti99.gomoku.proto.RoomJoinSuccessResponse.$Properties=} [properties] Properties to set
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */
                    const RoomJoinSuccessResponse = function (properties) {
                        if (properties)
                            for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                    this[keys[i]] = properties[keys[i]];
                    };

                    /**
                     * RoomJoinSuccessResponse clientId.
                     * @member {number} clientId
                     * @memberof com.miti99.gomoku.proto.RoomJoinSuccessResponse
                     * @instance
                     */
                    RoomJoinSuccessResponse.prototype.clientId = 0;

                    /**
                     * RoomJoinSuccessResponse clientNickname.
                     * @member {string} clientNickname
                     * @memberof com.miti99.gomoku.proto.RoomJoinSuccessResponse
                     * @instance
                     */
                    RoomJoinSuccessResponse.prototype.clientNickname = "";

                    /**
                     * RoomJoinSuccessResponse roomId.
                     * @member {number} roomId
                     * @memberof com.miti99.gomoku.proto.RoomJoinSuccessResponse
                     * @instance
                     */
                    RoomJoinSuccessResponse.prototype.roomId = 0;

                    /**
                     * RoomJoinSuccessResponse roomOwner.
                     * @member {string} roomOwner
                     * @memberof com.miti99.gomoku.proto.RoomJoinSuccessResponse
                     * @instance
                     */
                    RoomJoinSuccessResponse.prototype.roomOwner = "";

                    /**
                     * RoomJoinSuccessResponse roomClientCount.
                     * @member {number} roomClientCount
                     * @memberof com.miti99.gomoku.proto.RoomJoinSuccessResponse
                     * @instance
                     */
                    RoomJoinSuccessResponse.prototype.roomClientCount = 0;

                    /**
                     * Creates a new RoomJoinSuccessResponse instance using the specified properties.
                     * @function create
                     * @memberof com.miti99.gomoku.proto.RoomJoinSuccessResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.RoomJoinSuccessResponse.$Properties=} [properties] Properties to set
                     * @returns {com.miti99.gomoku.proto.RoomJoinSuccessResponse} RoomJoinSuccessResponse instance
                     * @type {{
                     *   (properties: com.miti99.gomoku.proto.RoomJoinSuccessResponse.$Shape): com.miti99.gomoku.proto.RoomJoinSuccessResponse & com.miti99.gomoku.proto.RoomJoinSuccessResponse.$Shape;
                     *   (properties?: com.miti99.gomoku.proto.RoomJoinSuccessResponse.$Properties): com.miti99.gomoku.proto.RoomJoinSuccessResponse;
                     * }}
                     */
                    RoomJoinSuccessResponse.create = function(properties) {
                        return new RoomJoinSuccessResponse(properties);
                    };

                    /**
                     * Encodes the specified RoomJoinSuccessResponse message. Does not implicitly {@link com.miti99.gomoku.proto.RoomJoinSuccessResponse.verify|verify} messages.
                     * @function encode
                     * @memberof com.miti99.gomoku.proto.RoomJoinSuccessResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.RoomJoinSuccessResponse.$Properties} message RoomJoinSuccessResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RoomJoinSuccessResponse.encode = function (message, writer, _depth) {
                        if (!writer)
                            writer = $Writer.create();
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        if (message.clientId != null && $Object.hasOwnProperty.call(message, "clientId") && message.clientId !== 0)
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.clientId);
                        if (message.clientNickname != null && $Object.hasOwnProperty.call(message, "clientNickname") && message.clientNickname !== "")
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.clientNickname);
                        if (message.roomId != null && $Object.hasOwnProperty.call(message, "roomId") && message.roomId !== 0)
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.roomId);
                        if (message.roomOwner != null && $Object.hasOwnProperty.call(message, "roomOwner") && message.roomOwner !== "")
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.roomOwner);
                        if (message.roomClientCount != null && $Object.hasOwnProperty.call(message, "roomClientCount") && message.roomClientCount !== 0)
                            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.roomClientCount);
                        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                            for (let i = 0; i < message.$unknowns.length; ++i)
                                writer.raw(message.$unknowns[i]);
                        return writer;
                    };

                    /**
                     * Encodes the specified RoomJoinSuccessResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.RoomJoinSuccessResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.miti99.gomoku.proto.RoomJoinSuccessResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.RoomJoinSuccessResponse.$Properties} message RoomJoinSuccessResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RoomJoinSuccessResponse.encodeDelimited = function(message, writer) {
                        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                    };

                    /**
                     * Decodes a RoomJoinSuccessResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.miti99.gomoku.proto.RoomJoinSuccessResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.RoomJoinSuccessResponse & com.miti99.gomoku.proto.RoomJoinSuccessResponse.$Shape} RoomJoinSuccessResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RoomJoinSuccessResponse.decode = function (reader, length, _end, _depth, _target) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $Reader.recursionLimit)
                            throw $Error("max depth exceeded");
                        let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.com.miti99.gomoku.proto.RoomJoinSuccessResponse(), value;
                        while (reader.pos < end) {
                            let start = reader.pos;
                            let tag = reader.tag();
                            if (tag === _end) {
                                _end = $undefined;
                                break;
                            }
                            let wireType = tag & 7;
                            switch (tag >>>= 3) {
                            case 1: {
                                    if (wireType !== 0)
                                        break;
                                    if (value = reader.int32())
                                        message.clientId = value;
                                    else
                                        delete message.clientId;
                                    continue;
                                }
                            case 2: {
                                    if (wireType !== 2)
                                        break;
                                    if ((value = reader.stringVerify()).length)
                                        message.clientNickname = value;
                                    else
                                        delete message.clientNickname;
                                    continue;
                                }
                            case 3: {
                                    if (wireType !== 0)
                                        break;
                                    if (value = reader.int32())
                                        message.roomId = value;
                                    else
                                        delete message.roomId;
                                    continue;
                                }
                            case 4: {
                                    if (wireType !== 2)
                                        break;
                                    if ((value = reader.stringVerify()).length)
                                        message.roomOwner = value;
                                    else
                                        delete message.roomOwner;
                                    continue;
                                }
                            case 5: {
                                    if (wireType !== 0)
                                        break;
                                    if (value = reader.int32())
                                        message.roomClientCount = value;
                                    else
                                        delete message.roomClientCount;
                                    continue;
                                }
                            }
                            reader.skipType(wireType, _depth, tag);
                            if (!reader.discardUnknown) {
                                $util.makeProp(message, "$unknowns", false);
                                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                            }
                        }
                        if (_end !== $undefined)
                            throw $Error("missing end group");
                        return message;
                    };

                    /**
                     * Decodes a RoomJoinSuccessResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.miti99.gomoku.proto.RoomJoinSuccessResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.RoomJoinSuccessResponse & com.miti99.gomoku.proto.RoomJoinSuccessResponse.$Shape} RoomJoinSuccessResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RoomJoinSuccessResponse.decodeDelimited = function(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a RoomJoinSuccessResponse message.
                     * @function verify
                     * @memberof com.miti99.gomoku.proto.RoomJoinSuccessResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    RoomJoinSuccessResponse.verify = function (message, _depth) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            return "max depth exceeded";
                        if (message.clientId != null && $Object.hasOwnProperty.call(message, "clientId"))
                            if (!$util.isInteger(message.clientId))
                                return "clientId: integer expected";
                        if (message.clientNickname != null && $Object.hasOwnProperty.call(message, "clientNickname"))
                            if (!$util.isString(message.clientNickname))
                                return "clientNickname: string expected";
                        if (message.roomId != null && $Object.hasOwnProperty.call(message, "roomId"))
                            if (!$util.isInteger(message.roomId))
                                return "roomId: integer expected";
                        if (message.roomOwner != null && $Object.hasOwnProperty.call(message, "roomOwner"))
                            if (!$util.isString(message.roomOwner))
                                return "roomOwner: string expected";
                        if (message.roomClientCount != null && $Object.hasOwnProperty.call(message, "roomClientCount"))
                            if (!$util.isInteger(message.roomClientCount))
                                return "roomClientCount: integer expected";
                        return null;
                    };

                    /**
                     * Creates a RoomJoinSuccessResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.miti99.gomoku.proto.RoomJoinSuccessResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.miti99.gomoku.proto.RoomJoinSuccessResponse} RoomJoinSuccessResponse
                     */
                    RoomJoinSuccessResponse.fromObject = function (object, _depth) {
                        if (object instanceof $root.com.miti99.gomoku.proto.RoomJoinSuccessResponse)
                            return object;
                        if (!$util.isObject(object))
                            throw $TypeError(".com.miti99.gomoku.proto.RoomJoinSuccessResponse: object expected");
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        let message = new $root.com.miti99.gomoku.proto.RoomJoinSuccessResponse();
                        if (object.clientId != null)
                            if ($Number(object.clientId) !== 0)
                                message.clientId = object.clientId | 0;
                        if (object.clientNickname != null)
                            if (typeof object.clientNickname !== "string" || object.clientNickname.length)
                                message.clientNickname = $String(object.clientNickname);
                        if (object.roomId != null)
                            if ($Number(object.roomId) !== 0)
                                message.roomId = object.roomId | 0;
                        if (object.roomOwner != null)
                            if (typeof object.roomOwner !== "string" || object.roomOwner.length)
                                message.roomOwner = $String(object.roomOwner);
                        if (object.roomClientCount != null)
                            if ($Number(object.roomClientCount) !== 0)
                                message.roomClientCount = object.roomClientCount | 0;
                        return message;
                    };

                    /**
                     * Creates a plain object from a RoomJoinSuccessResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.miti99.gomoku.proto.RoomJoinSuccessResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.RoomJoinSuccessResponse} message RoomJoinSuccessResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    RoomJoinSuccessResponse.toObject = function (message, options, _depth) {
                        if (!options)
                            options = {};
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        let object = {};
                        if (options.defaults) {
                            object.clientId = 0;
                            object.clientNickname = "";
                            object.roomId = 0;
                            object.roomOwner = "";
                            object.roomClientCount = 0;
                        }
                        if (message.clientId != null && $Object.hasOwnProperty.call(message, "clientId"))
                            object.clientId = message.clientId;
                        if (message.clientNickname != null && $Object.hasOwnProperty.call(message, "clientNickname"))
                            object.clientNickname = message.clientNickname;
                        if (message.roomId != null && $Object.hasOwnProperty.call(message, "roomId"))
                            object.roomId = message.roomId;
                        if (message.roomOwner != null && $Object.hasOwnProperty.call(message, "roomOwner"))
                            object.roomOwner = message.roomOwner;
                        if (message.roomClientCount != null && $Object.hasOwnProperty.call(message, "roomClientCount"))
                            object.roomClientCount = message.roomClientCount;
                        return object;
                    };

                    /**
                     * Converts this RoomJoinSuccessResponse to JSON.
                     * @function toJSON
                     * @memberof com.miti99.gomoku.proto.RoomJoinSuccessResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    RoomJoinSuccessResponse.prototype.toJSON = function() {
                        return RoomJoinSuccessResponse.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the type url for RoomJoinSuccessResponse
                     * @function getTypeUrl
                     * @memberof com.miti99.gomoku.proto.RoomJoinSuccessResponse
                     * @static
                     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns {string} The type url
                     */
                    RoomJoinSuccessResponse.getTypeUrl = function(prefix) {
                        if (prefix === $undefined)
                            prefix = "type.googleapis.com";
                        return prefix + "/com.miti99.gomoku.proto.RoomJoinSuccessResponse";
                    };

                    return RoomJoinSuccessResponse;
                })();

                proto.RoomJoinFailFullResponse = (function() {

                    /**
                     * Properties of a RoomJoinFailFullResponse.
                     * @typedef {Object} com.miti99.gomoku.proto.RoomJoinFailFullResponse.$Properties
                     * @property {number|null} [roomId] RoomJoinFailFullResponse roomId
                     * @property {string|null} [roomOwner] RoomJoinFailFullResponse roomOwner
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */

                    /**
                     * Properties of a RoomJoinFailFullResponse.
                     * @memberof com.miti99.gomoku.proto
                     * @interface IRoomJoinFailFullResponse
                     * @augments com.miti99.gomoku.proto.RoomJoinFailFullResponse.$Properties
                     * @deprecated Use com.miti99.gomoku.proto.RoomJoinFailFullResponse.$Properties instead.
                     */

                    /**
                     * Shape of a RoomJoinFailFullResponse.
                     * @typedef {com.miti99.gomoku.proto.RoomJoinFailFullResponse.$Properties} com.miti99.gomoku.proto.RoomJoinFailFullResponse.$Shape
                     */

                    /**
                     * Constructs a new RoomJoinFailFullResponse.
                     * @memberof com.miti99.gomoku.proto
                     * @classdesc Represents a RoomJoinFailFullResponse.
                     * @constructor
                     * @param {com.miti99.gomoku.proto.RoomJoinFailFullResponse.$Properties=} [properties] Properties to set
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */
                    const RoomJoinFailFullResponse = function (properties) {
                        if (properties)
                            for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                    this[keys[i]] = properties[keys[i]];
                    };

                    /**
                     * RoomJoinFailFullResponse roomId.
                     * @member {number} roomId
                     * @memberof com.miti99.gomoku.proto.RoomJoinFailFullResponse
                     * @instance
                     */
                    RoomJoinFailFullResponse.prototype.roomId = 0;

                    /**
                     * RoomJoinFailFullResponse roomOwner.
                     * @member {string} roomOwner
                     * @memberof com.miti99.gomoku.proto.RoomJoinFailFullResponse
                     * @instance
                     */
                    RoomJoinFailFullResponse.prototype.roomOwner = "";

                    /**
                     * Creates a new RoomJoinFailFullResponse instance using the specified properties.
                     * @function create
                     * @memberof com.miti99.gomoku.proto.RoomJoinFailFullResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.RoomJoinFailFullResponse.$Properties=} [properties] Properties to set
                     * @returns {com.miti99.gomoku.proto.RoomJoinFailFullResponse} RoomJoinFailFullResponse instance
                     * @type {{
                     *   (properties: com.miti99.gomoku.proto.RoomJoinFailFullResponse.$Shape): com.miti99.gomoku.proto.RoomJoinFailFullResponse & com.miti99.gomoku.proto.RoomJoinFailFullResponse.$Shape;
                     *   (properties?: com.miti99.gomoku.proto.RoomJoinFailFullResponse.$Properties): com.miti99.gomoku.proto.RoomJoinFailFullResponse;
                     * }}
                     */
                    RoomJoinFailFullResponse.create = function(properties) {
                        return new RoomJoinFailFullResponse(properties);
                    };

                    /**
                     * Encodes the specified RoomJoinFailFullResponse message. Does not implicitly {@link com.miti99.gomoku.proto.RoomJoinFailFullResponse.verify|verify} messages.
                     * @function encode
                     * @memberof com.miti99.gomoku.proto.RoomJoinFailFullResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.RoomJoinFailFullResponse.$Properties} message RoomJoinFailFullResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RoomJoinFailFullResponse.encode = function (message, writer, _depth) {
                        if (!writer)
                            writer = $Writer.create();
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        if (message.roomId != null && $Object.hasOwnProperty.call(message, "roomId") && message.roomId !== 0)
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roomId);
                        if (message.roomOwner != null && $Object.hasOwnProperty.call(message, "roomOwner") && message.roomOwner !== "")
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.roomOwner);
                        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                            for (let i = 0; i < message.$unknowns.length; ++i)
                                writer.raw(message.$unknowns[i]);
                        return writer;
                    };

                    /**
                     * Encodes the specified RoomJoinFailFullResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.RoomJoinFailFullResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.miti99.gomoku.proto.RoomJoinFailFullResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.RoomJoinFailFullResponse.$Properties} message RoomJoinFailFullResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RoomJoinFailFullResponse.encodeDelimited = function(message, writer) {
                        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                    };

                    /**
                     * Decodes a RoomJoinFailFullResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.miti99.gomoku.proto.RoomJoinFailFullResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.RoomJoinFailFullResponse & com.miti99.gomoku.proto.RoomJoinFailFullResponse.$Shape} RoomJoinFailFullResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RoomJoinFailFullResponse.decode = function (reader, length, _end, _depth, _target) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $Reader.recursionLimit)
                            throw $Error("max depth exceeded");
                        let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.com.miti99.gomoku.proto.RoomJoinFailFullResponse(), value;
                        while (reader.pos < end) {
                            let start = reader.pos;
                            let tag = reader.tag();
                            if (tag === _end) {
                                _end = $undefined;
                                break;
                            }
                            let wireType = tag & 7;
                            switch (tag >>>= 3) {
                            case 1: {
                                    if (wireType !== 0)
                                        break;
                                    if (value = reader.int32())
                                        message.roomId = value;
                                    else
                                        delete message.roomId;
                                    continue;
                                }
                            case 2: {
                                    if (wireType !== 2)
                                        break;
                                    if ((value = reader.stringVerify()).length)
                                        message.roomOwner = value;
                                    else
                                        delete message.roomOwner;
                                    continue;
                                }
                            }
                            reader.skipType(wireType, _depth, tag);
                            if (!reader.discardUnknown) {
                                $util.makeProp(message, "$unknowns", false);
                                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                            }
                        }
                        if (_end !== $undefined)
                            throw $Error("missing end group");
                        return message;
                    };

                    /**
                     * Decodes a RoomJoinFailFullResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.miti99.gomoku.proto.RoomJoinFailFullResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.RoomJoinFailFullResponse & com.miti99.gomoku.proto.RoomJoinFailFullResponse.$Shape} RoomJoinFailFullResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RoomJoinFailFullResponse.decodeDelimited = function(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a RoomJoinFailFullResponse message.
                     * @function verify
                     * @memberof com.miti99.gomoku.proto.RoomJoinFailFullResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    RoomJoinFailFullResponse.verify = function (message, _depth) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            return "max depth exceeded";
                        if (message.roomId != null && $Object.hasOwnProperty.call(message, "roomId"))
                            if (!$util.isInteger(message.roomId))
                                return "roomId: integer expected";
                        if (message.roomOwner != null && $Object.hasOwnProperty.call(message, "roomOwner"))
                            if (!$util.isString(message.roomOwner))
                                return "roomOwner: string expected";
                        return null;
                    };

                    /**
                     * Creates a RoomJoinFailFullResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.miti99.gomoku.proto.RoomJoinFailFullResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.miti99.gomoku.proto.RoomJoinFailFullResponse} RoomJoinFailFullResponse
                     */
                    RoomJoinFailFullResponse.fromObject = function (object, _depth) {
                        if (object instanceof $root.com.miti99.gomoku.proto.RoomJoinFailFullResponse)
                            return object;
                        if (!$util.isObject(object))
                            throw $TypeError(".com.miti99.gomoku.proto.RoomJoinFailFullResponse: object expected");
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        let message = new $root.com.miti99.gomoku.proto.RoomJoinFailFullResponse();
                        if (object.roomId != null)
                            if ($Number(object.roomId) !== 0)
                                message.roomId = object.roomId | 0;
                        if (object.roomOwner != null)
                            if (typeof object.roomOwner !== "string" || object.roomOwner.length)
                                message.roomOwner = $String(object.roomOwner);
                        return message;
                    };

                    /**
                     * Creates a plain object from a RoomJoinFailFullResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.miti99.gomoku.proto.RoomJoinFailFullResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.RoomJoinFailFullResponse} message RoomJoinFailFullResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    RoomJoinFailFullResponse.toObject = function (message, options, _depth) {
                        if (!options)
                            options = {};
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        let object = {};
                        if (options.defaults) {
                            object.roomId = 0;
                            object.roomOwner = "";
                        }
                        if (message.roomId != null && $Object.hasOwnProperty.call(message, "roomId"))
                            object.roomId = message.roomId;
                        if (message.roomOwner != null && $Object.hasOwnProperty.call(message, "roomOwner"))
                            object.roomOwner = message.roomOwner;
                        return object;
                    };

                    /**
                     * Converts this RoomJoinFailFullResponse to JSON.
                     * @function toJSON
                     * @memberof com.miti99.gomoku.proto.RoomJoinFailFullResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    RoomJoinFailFullResponse.prototype.toJSON = function() {
                        return RoomJoinFailFullResponse.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the type url for RoomJoinFailFullResponse
                     * @function getTypeUrl
                     * @memberof com.miti99.gomoku.proto.RoomJoinFailFullResponse
                     * @static
                     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns {string} The type url
                     */
                    RoomJoinFailFullResponse.getTypeUrl = function(prefix) {
                        if (prefix === $undefined)
                            prefix = "type.googleapis.com";
                        return prefix + "/com.miti99.gomoku.proto.RoomJoinFailFullResponse";
                    };

                    return RoomJoinFailFullResponse;
                })();

                proto.RoomJoinFailNotFoundResponse = (function() {

                    /**
                     * Properties of a RoomJoinFailNotFoundResponse.
                     * @typedef {Object} com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse.$Properties
                     * @property {number|null} [roomId] RoomJoinFailNotFoundResponse roomId
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */

                    /**
                     * Properties of a RoomJoinFailNotFoundResponse.
                     * @memberof com.miti99.gomoku.proto
                     * @interface IRoomJoinFailNotFoundResponse
                     * @augments com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse.$Properties
                     * @deprecated Use com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse.$Properties instead.
                     */

                    /**
                     * Shape of a RoomJoinFailNotFoundResponse.
                     * @typedef {com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse.$Properties} com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse.$Shape
                     */

                    /**
                     * Constructs a new RoomJoinFailNotFoundResponse.
                     * @memberof com.miti99.gomoku.proto
                     * @classdesc Represents a RoomJoinFailNotFoundResponse.
                     * @constructor
                     * @param {com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse.$Properties=} [properties] Properties to set
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */
                    const RoomJoinFailNotFoundResponse = function (properties) {
                        if (properties)
                            for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                    this[keys[i]] = properties[keys[i]];
                    };

                    /**
                     * RoomJoinFailNotFoundResponse roomId.
                     * @member {number} roomId
                     * @memberof com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse
                     * @instance
                     */
                    RoomJoinFailNotFoundResponse.prototype.roomId = 0;

                    /**
                     * Creates a new RoomJoinFailNotFoundResponse instance using the specified properties.
                     * @function create
                     * @memberof com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse.$Properties=} [properties] Properties to set
                     * @returns {com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse} RoomJoinFailNotFoundResponse instance
                     * @type {{
                     *   (properties: com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse.$Shape): com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse & com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse.$Shape;
                     *   (properties?: com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse.$Properties): com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse;
                     * }}
                     */
                    RoomJoinFailNotFoundResponse.create = function(properties) {
                        return new RoomJoinFailNotFoundResponse(properties);
                    };

                    /**
                     * Encodes the specified RoomJoinFailNotFoundResponse message. Does not implicitly {@link com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse.verify|verify} messages.
                     * @function encode
                     * @memberof com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse.$Properties} message RoomJoinFailNotFoundResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RoomJoinFailNotFoundResponse.encode = function (message, writer, _depth) {
                        if (!writer)
                            writer = $Writer.create();
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        if (message.roomId != null && $Object.hasOwnProperty.call(message, "roomId") && message.roomId !== 0)
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roomId);
                        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                            for (let i = 0; i < message.$unknowns.length; ++i)
                                writer.raw(message.$unknowns[i]);
                        return writer;
                    };

                    /**
                     * Encodes the specified RoomJoinFailNotFoundResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse.$Properties} message RoomJoinFailNotFoundResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RoomJoinFailNotFoundResponse.encodeDelimited = function(message, writer) {
                        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                    };

                    /**
                     * Decodes a RoomJoinFailNotFoundResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse & com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse.$Shape} RoomJoinFailNotFoundResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RoomJoinFailNotFoundResponse.decode = function (reader, length, _end, _depth, _target) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $Reader.recursionLimit)
                            throw $Error("max depth exceeded");
                        let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse(), value;
                        while (reader.pos < end) {
                            let start = reader.pos;
                            let tag = reader.tag();
                            if (tag === _end) {
                                _end = $undefined;
                                break;
                            }
                            let wireType = tag & 7;
                            switch (tag >>>= 3) {
                            case 1: {
                                    if (wireType !== 0)
                                        break;
                                    if (value = reader.int32())
                                        message.roomId = value;
                                    else
                                        delete message.roomId;
                                    continue;
                                }
                            }
                            reader.skipType(wireType, _depth, tag);
                            if (!reader.discardUnknown) {
                                $util.makeProp(message, "$unknowns", false);
                                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                            }
                        }
                        if (_end !== $undefined)
                            throw $Error("missing end group");
                        return message;
                    };

                    /**
                     * Decodes a RoomJoinFailNotFoundResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse & com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse.$Shape} RoomJoinFailNotFoundResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RoomJoinFailNotFoundResponse.decodeDelimited = function(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a RoomJoinFailNotFoundResponse message.
                     * @function verify
                     * @memberof com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    RoomJoinFailNotFoundResponse.verify = function (message, _depth) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            return "max depth exceeded";
                        if (message.roomId != null && $Object.hasOwnProperty.call(message, "roomId"))
                            if (!$util.isInteger(message.roomId))
                                return "roomId: integer expected";
                        return null;
                    };

                    /**
                     * Creates a RoomJoinFailNotFoundResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse} RoomJoinFailNotFoundResponse
                     */
                    RoomJoinFailNotFoundResponse.fromObject = function (object, _depth) {
                        if (object instanceof $root.com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse)
                            return object;
                        if (!$util.isObject(object))
                            throw $TypeError(".com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse: object expected");
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        let message = new $root.com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse();
                        if (object.roomId != null)
                            if ($Number(object.roomId) !== 0)
                                message.roomId = object.roomId | 0;
                        return message;
                    };

                    /**
                     * Creates a plain object from a RoomJoinFailNotFoundResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse} message RoomJoinFailNotFoundResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    RoomJoinFailNotFoundResponse.toObject = function (message, options, _depth) {
                        if (!options)
                            options = {};
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        let object = {};
                        if (options.defaults)
                            object.roomId = 0;
                        if (message.roomId != null && $Object.hasOwnProperty.call(message, "roomId"))
                            object.roomId = message.roomId;
                        return object;
                    };

                    /**
                     * Converts this RoomJoinFailNotFoundResponse to JSON.
                     * @function toJSON
                     * @memberof com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    RoomJoinFailNotFoundResponse.prototype.toJSON = function() {
                        return RoomJoinFailNotFoundResponse.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the type url for RoomJoinFailNotFoundResponse
                     * @function getTypeUrl
                     * @memberof com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse
                     * @static
                     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns {string} The type url
                     */
                    RoomJoinFailNotFoundResponse.getTypeUrl = function(prefix) {
                        if (prefix === $undefined)
                            prefix = "type.googleapis.com";
                        return prefix + "/com.miti99.gomoku.proto.RoomJoinFailNotFoundResponse";
                    };

                    return RoomJoinFailNotFoundResponse;
                })();

                proto.RoomPlayFailNotFoundResponse = (function() {

                    /**
                     * Properties of a RoomPlayFailNotFoundResponse.
                     * @typedef {Object} com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse.$Properties
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */

                    /**
                     * Properties of a RoomPlayFailNotFoundResponse.
                     * @memberof com.miti99.gomoku.proto
                     * @interface IRoomPlayFailNotFoundResponse
                     * @augments com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse.$Properties
                     * @deprecated Use com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse.$Properties instead.
                     */

                    /**
                     * Shape of a RoomPlayFailNotFoundResponse.
                     * @typedef {com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse.$Properties} com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse.$Shape
                     */

                    /**
                     * Constructs a new RoomPlayFailNotFoundResponse.
                     * @memberof com.miti99.gomoku.proto
                     * @classdesc Represents a RoomPlayFailNotFoundResponse.
                     * @constructor
                     * @param {com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse.$Properties=} [properties] Properties to set
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */
                    const RoomPlayFailNotFoundResponse = function (properties) {
                        if (properties)
                            for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                    this[keys[i]] = properties[keys[i]];
                    };

                    /**
                     * Creates a new RoomPlayFailNotFoundResponse instance using the specified properties.
                     * @function create
                     * @memberof com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse.$Properties=} [properties] Properties to set
                     * @returns {com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse} RoomPlayFailNotFoundResponse instance
                     * @type {{
                     *   (properties: com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse.$Shape): com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse & com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse.$Shape;
                     *   (properties?: com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse.$Properties): com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse;
                     * }}
                     */
                    RoomPlayFailNotFoundResponse.create = function(properties) {
                        return new RoomPlayFailNotFoundResponse(properties);
                    };

                    /**
                     * Encodes the specified RoomPlayFailNotFoundResponse message. Does not implicitly {@link com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse.verify|verify} messages.
                     * @function encode
                     * @memberof com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse.$Properties} message RoomPlayFailNotFoundResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RoomPlayFailNotFoundResponse.encode = function (message, writer, _depth) {
                        if (!writer)
                            writer = $Writer.create();
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                            for (let i = 0; i < message.$unknowns.length; ++i)
                                writer.raw(message.$unknowns[i]);
                        return writer;
                    };

                    /**
                     * Encodes the specified RoomPlayFailNotFoundResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse.$Properties} message RoomPlayFailNotFoundResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RoomPlayFailNotFoundResponse.encodeDelimited = function(message, writer) {
                        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                    };

                    /**
                     * Decodes a RoomPlayFailNotFoundResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse & com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse.$Shape} RoomPlayFailNotFoundResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RoomPlayFailNotFoundResponse.decode = function (reader, length, _end, _depth, _target) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $Reader.recursionLimit)
                            throw $Error("max depth exceeded");
                        let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse();
                        while (reader.pos < end) {
                            let start = reader.pos;
                            let tag = reader.tag();
                            if (tag === _end) {
                                _end = $undefined;
                                break;
                            }
                            reader.skipType(tag & 7, _depth, tag);
                            if (!reader.discardUnknown) {
                                $util.makeProp(message, "$unknowns", false);
                                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                            }
                        }
                        if (_end !== $undefined)
                            throw $Error("missing end group");
                        return message;
                    };

                    /**
                     * Decodes a RoomPlayFailNotFoundResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse & com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse.$Shape} RoomPlayFailNotFoundResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RoomPlayFailNotFoundResponse.decodeDelimited = function(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a RoomPlayFailNotFoundResponse message.
                     * @function verify
                     * @memberof com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    RoomPlayFailNotFoundResponse.verify = function (message, _depth) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            return "max depth exceeded";
                        return null;
                    };

                    /**
                     * Creates a RoomPlayFailNotFoundResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse} RoomPlayFailNotFoundResponse
                     */
                    RoomPlayFailNotFoundResponse.fromObject = function (object, _depth) {
                        if (object instanceof $root.com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse)
                            return object;
                        if (!$util.isObject(object))
                            throw $TypeError(".com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse: object expected");
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        return new $root.com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse();
                    };

                    /**
                     * Creates a plain object from a RoomPlayFailNotFoundResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse} message RoomPlayFailNotFoundResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    RoomPlayFailNotFoundResponse.toObject = function () {
                        return {};
                    };

                    /**
                     * Converts this RoomPlayFailNotFoundResponse to JSON.
                     * @function toJSON
                     * @memberof com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    RoomPlayFailNotFoundResponse.prototype.toJSON = function() {
                        return RoomPlayFailNotFoundResponse.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the type url for RoomPlayFailNotFoundResponse
                     * @function getTypeUrl
                     * @memberof com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse
                     * @static
                     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns {string} The type url
                     */
                    RoomPlayFailNotFoundResponse.getTypeUrl = function(prefix) {
                        if (prefix === $undefined)
                            prefix = "type.googleapis.com";
                        return prefix + "/com.miti99.gomoku.proto.RoomPlayFailNotFoundResponse";
                    };

                    return RoomPlayFailNotFoundResponse;
                })();

                proto.GameStartingResponse = (function() {

                    /**
                     * Properties of a GameStartingResponse.
                     * @typedef {Object} com.miti99.gomoku.proto.GameStartingResponse.$Properties
                     * @property {number|null} [roomId] GameStartingResponse roomId
                     * @property {number|null} [blackPlayerId] GameStartingResponse blackPlayerId
                     * @property {string|null} [blackPlayerNickname] GameStartingResponse blackPlayerNickname
                     * @property {number|null} [whitePlayerId] GameStartingResponse whitePlayerId
                     * @property {string|null} [whitePlayerNickname] GameStartingResponse whitePlayerNickname
                     * @property {number|null} [boardSize] GameStartingResponse boardSize
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */

                    /**
                     * Properties of a GameStartingResponse.
                     * @memberof com.miti99.gomoku.proto
                     * @interface IGameStartingResponse
                     * @augments com.miti99.gomoku.proto.GameStartingResponse.$Properties
                     * @deprecated Use com.miti99.gomoku.proto.GameStartingResponse.$Properties instead.
                     */

                    /**
                     * Shape of a GameStartingResponse.
                     * @typedef {com.miti99.gomoku.proto.GameStartingResponse.$Properties} com.miti99.gomoku.proto.GameStartingResponse.$Shape
                     */

                    /**
                     * Constructs a new GameStartingResponse.
                     * @memberof com.miti99.gomoku.proto
                     * @classdesc Represents a GameStartingResponse.
                     * @constructor
                     * @param {com.miti99.gomoku.proto.GameStartingResponse.$Properties=} [properties] Properties to set
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */
                    const GameStartingResponse = function (properties) {
                        if (properties)
                            for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                    this[keys[i]] = properties[keys[i]];
                    };

                    /**
                     * GameStartingResponse roomId.
                     * @member {number} roomId
                     * @memberof com.miti99.gomoku.proto.GameStartingResponse
                     * @instance
                     */
                    GameStartingResponse.prototype.roomId = 0;

                    /**
                     * GameStartingResponse blackPlayerId.
                     * @member {number} blackPlayerId
                     * @memberof com.miti99.gomoku.proto.GameStartingResponse
                     * @instance
                     */
                    GameStartingResponse.prototype.blackPlayerId = 0;

                    /**
                     * GameStartingResponse blackPlayerNickname.
                     * @member {string} blackPlayerNickname
                     * @memberof com.miti99.gomoku.proto.GameStartingResponse
                     * @instance
                     */
                    GameStartingResponse.prototype.blackPlayerNickname = "";

                    /**
                     * GameStartingResponse whitePlayerId.
                     * @member {number} whitePlayerId
                     * @memberof com.miti99.gomoku.proto.GameStartingResponse
                     * @instance
                     */
                    GameStartingResponse.prototype.whitePlayerId = 0;

                    /**
                     * GameStartingResponse whitePlayerNickname.
                     * @member {string} whitePlayerNickname
                     * @memberof com.miti99.gomoku.proto.GameStartingResponse
                     * @instance
                     */
                    GameStartingResponse.prototype.whitePlayerNickname = "";

                    /**
                     * GameStartingResponse boardSize.
                     * @member {number} boardSize
                     * @memberof com.miti99.gomoku.proto.GameStartingResponse
                     * @instance
                     */
                    GameStartingResponse.prototype.boardSize = 0;

                    /**
                     * Creates a new GameStartingResponse instance using the specified properties.
                     * @function create
                     * @memberof com.miti99.gomoku.proto.GameStartingResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.GameStartingResponse.$Properties=} [properties] Properties to set
                     * @returns {com.miti99.gomoku.proto.GameStartingResponse} GameStartingResponse instance
                     * @type {{
                     *   (properties: com.miti99.gomoku.proto.GameStartingResponse.$Shape): com.miti99.gomoku.proto.GameStartingResponse & com.miti99.gomoku.proto.GameStartingResponse.$Shape;
                     *   (properties?: com.miti99.gomoku.proto.GameStartingResponse.$Properties): com.miti99.gomoku.proto.GameStartingResponse;
                     * }}
                     */
                    GameStartingResponse.create = function(properties) {
                        return new GameStartingResponse(properties);
                    };

                    /**
                     * Encodes the specified GameStartingResponse message. Does not implicitly {@link com.miti99.gomoku.proto.GameStartingResponse.verify|verify} messages.
                     * @function encode
                     * @memberof com.miti99.gomoku.proto.GameStartingResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.GameStartingResponse.$Properties} message GameStartingResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GameStartingResponse.encode = function (message, writer, _depth) {
                        if (!writer)
                            writer = $Writer.create();
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        if (message.roomId != null && $Object.hasOwnProperty.call(message, "roomId") && message.roomId !== 0)
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roomId);
                        if (message.blackPlayerId != null && $Object.hasOwnProperty.call(message, "blackPlayerId") && message.blackPlayerId !== 0)
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.blackPlayerId);
                        if (message.blackPlayerNickname != null && $Object.hasOwnProperty.call(message, "blackPlayerNickname") && message.blackPlayerNickname !== "")
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.blackPlayerNickname);
                        if (message.whitePlayerId != null && $Object.hasOwnProperty.call(message, "whitePlayerId") && message.whitePlayerId !== 0)
                            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.whitePlayerId);
                        if (message.whitePlayerNickname != null && $Object.hasOwnProperty.call(message, "whitePlayerNickname") && message.whitePlayerNickname !== "")
                            writer.uint32(/* id 5, wireType 2 =*/42).string(message.whitePlayerNickname);
                        if (message.boardSize != null && $Object.hasOwnProperty.call(message, "boardSize") && message.boardSize !== 0)
                            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.boardSize);
                        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                            for (let i = 0; i < message.$unknowns.length; ++i)
                                writer.raw(message.$unknowns[i]);
                        return writer;
                    };

                    /**
                     * Encodes the specified GameStartingResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.GameStartingResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.miti99.gomoku.proto.GameStartingResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.GameStartingResponse.$Properties} message GameStartingResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GameStartingResponse.encodeDelimited = function(message, writer) {
                        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                    };

                    /**
                     * Decodes a GameStartingResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.miti99.gomoku.proto.GameStartingResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.GameStartingResponse & com.miti99.gomoku.proto.GameStartingResponse.$Shape} GameStartingResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GameStartingResponse.decode = function (reader, length, _end, _depth, _target) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $Reader.recursionLimit)
                            throw $Error("max depth exceeded");
                        let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.com.miti99.gomoku.proto.GameStartingResponse(), value;
                        while (reader.pos < end) {
                            let start = reader.pos;
                            let tag = reader.tag();
                            if (tag === _end) {
                                _end = $undefined;
                                break;
                            }
                            let wireType = tag & 7;
                            switch (tag >>>= 3) {
                            case 1: {
                                    if (wireType !== 0)
                                        break;
                                    if (value = reader.int32())
                                        message.roomId = value;
                                    else
                                        delete message.roomId;
                                    continue;
                                }
                            case 2: {
                                    if (wireType !== 0)
                                        break;
                                    if (value = reader.int32())
                                        message.blackPlayerId = value;
                                    else
                                        delete message.blackPlayerId;
                                    continue;
                                }
                            case 3: {
                                    if (wireType !== 2)
                                        break;
                                    if ((value = reader.stringVerify()).length)
                                        message.blackPlayerNickname = value;
                                    else
                                        delete message.blackPlayerNickname;
                                    continue;
                                }
                            case 4: {
                                    if (wireType !== 0)
                                        break;
                                    if (value = reader.int32())
                                        message.whitePlayerId = value;
                                    else
                                        delete message.whitePlayerId;
                                    continue;
                                }
                            case 5: {
                                    if (wireType !== 2)
                                        break;
                                    if ((value = reader.stringVerify()).length)
                                        message.whitePlayerNickname = value;
                                    else
                                        delete message.whitePlayerNickname;
                                    continue;
                                }
                            case 6: {
                                    if (wireType !== 0)
                                        break;
                                    if (value = reader.int32())
                                        message.boardSize = value;
                                    else
                                        delete message.boardSize;
                                    continue;
                                }
                            }
                            reader.skipType(wireType, _depth, tag);
                            if (!reader.discardUnknown) {
                                $util.makeProp(message, "$unknowns", false);
                                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                            }
                        }
                        if (_end !== $undefined)
                            throw $Error("missing end group");
                        return message;
                    };

                    /**
                     * Decodes a GameStartingResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.miti99.gomoku.proto.GameStartingResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.GameStartingResponse & com.miti99.gomoku.proto.GameStartingResponse.$Shape} GameStartingResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GameStartingResponse.decodeDelimited = function(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a GameStartingResponse message.
                     * @function verify
                     * @memberof com.miti99.gomoku.proto.GameStartingResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GameStartingResponse.verify = function (message, _depth) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            return "max depth exceeded";
                        if (message.roomId != null && $Object.hasOwnProperty.call(message, "roomId"))
                            if (!$util.isInteger(message.roomId))
                                return "roomId: integer expected";
                        if (message.blackPlayerId != null && $Object.hasOwnProperty.call(message, "blackPlayerId"))
                            if (!$util.isInteger(message.blackPlayerId))
                                return "blackPlayerId: integer expected";
                        if (message.blackPlayerNickname != null && $Object.hasOwnProperty.call(message, "blackPlayerNickname"))
                            if (!$util.isString(message.blackPlayerNickname))
                                return "blackPlayerNickname: string expected";
                        if (message.whitePlayerId != null && $Object.hasOwnProperty.call(message, "whitePlayerId"))
                            if (!$util.isInteger(message.whitePlayerId))
                                return "whitePlayerId: integer expected";
                        if (message.whitePlayerNickname != null && $Object.hasOwnProperty.call(message, "whitePlayerNickname"))
                            if (!$util.isString(message.whitePlayerNickname))
                                return "whitePlayerNickname: string expected";
                        if (message.boardSize != null && $Object.hasOwnProperty.call(message, "boardSize"))
                            if (!$util.isInteger(message.boardSize))
                                return "boardSize: integer expected";
                        return null;
                    };

                    /**
                     * Creates a GameStartingResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.miti99.gomoku.proto.GameStartingResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.miti99.gomoku.proto.GameStartingResponse} GameStartingResponse
                     */
                    GameStartingResponse.fromObject = function (object, _depth) {
                        if (object instanceof $root.com.miti99.gomoku.proto.GameStartingResponse)
                            return object;
                        if (!$util.isObject(object))
                            throw $TypeError(".com.miti99.gomoku.proto.GameStartingResponse: object expected");
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        let message = new $root.com.miti99.gomoku.proto.GameStartingResponse();
                        if (object.roomId != null)
                            if ($Number(object.roomId) !== 0)
                                message.roomId = object.roomId | 0;
                        if (object.blackPlayerId != null)
                            if ($Number(object.blackPlayerId) !== 0)
                                message.blackPlayerId = object.blackPlayerId | 0;
                        if (object.blackPlayerNickname != null)
                            if (typeof object.blackPlayerNickname !== "string" || object.blackPlayerNickname.length)
                                message.blackPlayerNickname = $String(object.blackPlayerNickname);
                        if (object.whitePlayerId != null)
                            if ($Number(object.whitePlayerId) !== 0)
                                message.whitePlayerId = object.whitePlayerId | 0;
                        if (object.whitePlayerNickname != null)
                            if (typeof object.whitePlayerNickname !== "string" || object.whitePlayerNickname.length)
                                message.whitePlayerNickname = $String(object.whitePlayerNickname);
                        if (object.boardSize != null)
                            if ($Number(object.boardSize) !== 0)
                                message.boardSize = object.boardSize | 0;
                        return message;
                    };

                    /**
                     * Creates a plain object from a GameStartingResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.miti99.gomoku.proto.GameStartingResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.GameStartingResponse} message GameStartingResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GameStartingResponse.toObject = function (message, options, _depth) {
                        if (!options)
                            options = {};
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        let object = {};
                        if (options.defaults) {
                            object.roomId = 0;
                            object.blackPlayerId = 0;
                            object.blackPlayerNickname = "";
                            object.whitePlayerId = 0;
                            object.whitePlayerNickname = "";
                            object.boardSize = 0;
                        }
                        if (message.roomId != null && $Object.hasOwnProperty.call(message, "roomId"))
                            object.roomId = message.roomId;
                        if (message.blackPlayerId != null && $Object.hasOwnProperty.call(message, "blackPlayerId"))
                            object.blackPlayerId = message.blackPlayerId;
                        if (message.blackPlayerNickname != null && $Object.hasOwnProperty.call(message, "blackPlayerNickname"))
                            object.blackPlayerNickname = message.blackPlayerNickname;
                        if (message.whitePlayerId != null && $Object.hasOwnProperty.call(message, "whitePlayerId"))
                            object.whitePlayerId = message.whitePlayerId;
                        if (message.whitePlayerNickname != null && $Object.hasOwnProperty.call(message, "whitePlayerNickname"))
                            object.whitePlayerNickname = message.whitePlayerNickname;
                        if (message.boardSize != null && $Object.hasOwnProperty.call(message, "boardSize"))
                            object.boardSize = message.boardSize;
                        return object;
                    };

                    /**
                     * Converts this GameStartingResponse to JSON.
                     * @function toJSON
                     * @memberof com.miti99.gomoku.proto.GameStartingResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GameStartingResponse.prototype.toJSON = function() {
                        return GameStartingResponse.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the type url for GameStartingResponse
                     * @function getTypeUrl
                     * @memberof com.miti99.gomoku.proto.GameStartingResponse
                     * @static
                     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns {string} The type url
                     */
                    GameStartingResponse.getTypeUrl = function(prefix) {
                        if (prefix === $undefined)
                            prefix = "type.googleapis.com";
                        return prefix + "/com.miti99.gomoku.proto.GameStartingResponse";
                    };

                    return GameStartingResponse;
                })();

                proto.GameMoveSuccessResponse = (function() {

                    /**
                     * Properties of a GameMoveSuccessResponse.
                     * @typedef {Object} com.miti99.gomoku.proto.GameMoveSuccessResponse.$Properties
                     * @property {number|null} [row] GameMoveSuccessResponse row
                     * @property {number|null} [col] GameMoveSuccessResponse col
                     * @property {com.miti99.gomoku.proto.Piece|null} [piece] GameMoveSuccessResponse piece
                     * @property {string|null} [playerNickname] GameMoveSuccessResponse playerNickname
                     * @property {number|null} [playerId] GameMoveSuccessResponse playerId
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */

                    /**
                     * Properties of a GameMoveSuccessResponse.
                     * @memberof com.miti99.gomoku.proto
                     * @interface IGameMoveSuccessResponse
                     * @augments com.miti99.gomoku.proto.GameMoveSuccessResponse.$Properties
                     * @deprecated Use com.miti99.gomoku.proto.GameMoveSuccessResponse.$Properties instead.
                     */

                    /**
                     * Shape of a GameMoveSuccessResponse.
                     * @typedef {com.miti99.gomoku.proto.GameMoveSuccessResponse.$Properties} com.miti99.gomoku.proto.GameMoveSuccessResponse.$Shape
                     */

                    /**
                     * Constructs a new GameMoveSuccessResponse.
                     * @memberof com.miti99.gomoku.proto
                     * @classdesc Represents a GameMoveSuccessResponse.
                     * @constructor
                     * @param {com.miti99.gomoku.proto.GameMoveSuccessResponse.$Properties=} [properties] Properties to set
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */
                    const GameMoveSuccessResponse = function (properties) {
                        if (properties)
                            for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                    this[keys[i]] = properties[keys[i]];
                    };

                    /**
                     * GameMoveSuccessResponse row.
                     * @member {number} row
                     * @memberof com.miti99.gomoku.proto.GameMoveSuccessResponse
                     * @instance
                     */
                    GameMoveSuccessResponse.prototype.row = 0;

                    /**
                     * GameMoveSuccessResponse col.
                     * @member {number} col
                     * @memberof com.miti99.gomoku.proto.GameMoveSuccessResponse
                     * @instance
                     */
                    GameMoveSuccessResponse.prototype.col = 0;

                    /**
                     * GameMoveSuccessResponse piece.
                     * @member {com.miti99.gomoku.proto.Piece} piece
                     * @memberof com.miti99.gomoku.proto.GameMoveSuccessResponse
                     * @instance
                     */
                    GameMoveSuccessResponse.prototype.piece = 0;

                    /**
                     * GameMoveSuccessResponse playerNickname.
                     * @member {string} playerNickname
                     * @memberof com.miti99.gomoku.proto.GameMoveSuccessResponse
                     * @instance
                     */
                    GameMoveSuccessResponse.prototype.playerNickname = "";

                    /**
                     * GameMoveSuccessResponse playerId.
                     * @member {number} playerId
                     * @memberof com.miti99.gomoku.proto.GameMoveSuccessResponse
                     * @instance
                     */
                    GameMoveSuccessResponse.prototype.playerId = 0;

                    /**
                     * Creates a new GameMoveSuccessResponse instance using the specified properties.
                     * @function create
                     * @memberof com.miti99.gomoku.proto.GameMoveSuccessResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.GameMoveSuccessResponse.$Properties=} [properties] Properties to set
                     * @returns {com.miti99.gomoku.proto.GameMoveSuccessResponse} GameMoveSuccessResponse instance
                     * @type {{
                     *   (properties: com.miti99.gomoku.proto.GameMoveSuccessResponse.$Shape): com.miti99.gomoku.proto.GameMoveSuccessResponse & com.miti99.gomoku.proto.GameMoveSuccessResponse.$Shape;
                     *   (properties?: com.miti99.gomoku.proto.GameMoveSuccessResponse.$Properties): com.miti99.gomoku.proto.GameMoveSuccessResponse;
                     * }}
                     */
                    GameMoveSuccessResponse.create = function(properties) {
                        return new GameMoveSuccessResponse(properties);
                    };

                    /**
                     * Encodes the specified GameMoveSuccessResponse message. Does not implicitly {@link com.miti99.gomoku.proto.GameMoveSuccessResponse.verify|verify} messages.
                     * @function encode
                     * @memberof com.miti99.gomoku.proto.GameMoveSuccessResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.GameMoveSuccessResponse.$Properties} message GameMoveSuccessResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GameMoveSuccessResponse.encode = function (message, writer, _depth) {
                        if (!writer)
                            writer = $Writer.create();
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        if (message.row != null && $Object.hasOwnProperty.call(message, "row") && message.row !== 0)
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.row);
                        if (message.col != null && $Object.hasOwnProperty.call(message, "col") && message.col !== 0)
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.col);
                        if (message.piece != null && $Object.hasOwnProperty.call(message, "piece") && message.piece !== 0)
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.piece);
                        if (message.playerNickname != null && $Object.hasOwnProperty.call(message, "playerNickname") && message.playerNickname !== "")
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.playerNickname);
                        if (message.playerId != null && $Object.hasOwnProperty.call(message, "playerId") && message.playerId !== 0)
                            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.playerId);
                        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                            for (let i = 0; i < message.$unknowns.length; ++i)
                                writer.raw(message.$unknowns[i]);
                        return writer;
                    };

                    /**
                     * Encodes the specified GameMoveSuccessResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.GameMoveSuccessResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.miti99.gomoku.proto.GameMoveSuccessResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.GameMoveSuccessResponse.$Properties} message GameMoveSuccessResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GameMoveSuccessResponse.encodeDelimited = function(message, writer) {
                        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                    };

                    /**
                     * Decodes a GameMoveSuccessResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.miti99.gomoku.proto.GameMoveSuccessResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.GameMoveSuccessResponse & com.miti99.gomoku.proto.GameMoveSuccessResponse.$Shape} GameMoveSuccessResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GameMoveSuccessResponse.decode = function (reader, length, _end, _depth, _target) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $Reader.recursionLimit)
                            throw $Error("max depth exceeded");
                        let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.com.miti99.gomoku.proto.GameMoveSuccessResponse(), value;
                        while (reader.pos < end) {
                            let start = reader.pos;
                            let tag = reader.tag();
                            if (tag === _end) {
                                _end = $undefined;
                                break;
                            }
                            let wireType = tag & 7;
                            switch (tag >>>= 3) {
                            case 1: {
                                    if (wireType !== 0)
                                        break;
                                    if (value = reader.int32())
                                        message.row = value;
                                    else
                                        delete message.row;
                                    continue;
                                }
                            case 2: {
                                    if (wireType !== 0)
                                        break;
                                    if (value = reader.int32())
                                        message.col = value;
                                    else
                                        delete message.col;
                                    continue;
                                }
                            case 3: {
                                    if (wireType !== 0)
                                        break;
                                    if (value = reader.int32())
                                        message.piece = value;
                                    else
                                        delete message.piece;
                                    continue;
                                }
                            case 4: {
                                    if (wireType !== 2)
                                        break;
                                    if ((value = reader.stringVerify()).length)
                                        message.playerNickname = value;
                                    else
                                        delete message.playerNickname;
                                    continue;
                                }
                            case 5: {
                                    if (wireType !== 0)
                                        break;
                                    if (value = reader.int32())
                                        message.playerId = value;
                                    else
                                        delete message.playerId;
                                    continue;
                                }
                            }
                            reader.skipType(wireType, _depth, tag);
                            if (!reader.discardUnknown) {
                                $util.makeProp(message, "$unknowns", false);
                                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                            }
                        }
                        if (_end !== $undefined)
                            throw $Error("missing end group");
                        return message;
                    };

                    /**
                     * Decodes a GameMoveSuccessResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.miti99.gomoku.proto.GameMoveSuccessResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.GameMoveSuccessResponse & com.miti99.gomoku.proto.GameMoveSuccessResponse.$Shape} GameMoveSuccessResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GameMoveSuccessResponse.decodeDelimited = function(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a GameMoveSuccessResponse message.
                     * @function verify
                     * @memberof com.miti99.gomoku.proto.GameMoveSuccessResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GameMoveSuccessResponse.verify = function (message, _depth) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            return "max depth exceeded";
                        if (message.row != null && $Object.hasOwnProperty.call(message, "row"))
                            if (!$util.isInteger(message.row))
                                return "row: integer expected";
                        if (message.col != null && $Object.hasOwnProperty.call(message, "col"))
                            if (!$util.isInteger(message.col))
                                return "col: integer expected";
                        if (message.piece != null && $Object.hasOwnProperty.call(message, "piece"))
                            if (typeof message.piece !== "number" || (message.piece | 0) !== message.piece)
                                return "piece: enum value expected";
                        if (message.playerNickname != null && $Object.hasOwnProperty.call(message, "playerNickname"))
                            if (!$util.isString(message.playerNickname))
                                return "playerNickname: string expected";
                        if (message.playerId != null && $Object.hasOwnProperty.call(message, "playerId"))
                            if (!$util.isInteger(message.playerId))
                                return "playerId: integer expected";
                        return null;
                    };

                    /**
                     * Creates a GameMoveSuccessResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.miti99.gomoku.proto.GameMoveSuccessResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.miti99.gomoku.proto.GameMoveSuccessResponse} GameMoveSuccessResponse
                     */
                    GameMoveSuccessResponse.fromObject = function (object, _depth) {
                        if (object instanceof $root.com.miti99.gomoku.proto.GameMoveSuccessResponse)
                            return object;
                        if (!$util.isObject(object))
                            throw $TypeError(".com.miti99.gomoku.proto.GameMoveSuccessResponse: object expected");
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        let message = new $root.com.miti99.gomoku.proto.GameMoveSuccessResponse();
                        if (object.row != null)
                            if ($Number(object.row) !== 0)
                                message.row = object.row | 0;
                        if (object.col != null)
                            if ($Number(object.col) !== 0)
                                message.col = object.col | 0;
                        if (object.piece !== 0 && (typeof object.piece !== "string" || $root.com.miti99.gomoku.proto.Piece[object.piece] !== 0))
                            switch (object.piece) {
                            case "PIECE_UNSPECIFIED":
                            case 0:
                                message.piece = 0;
                                break;
                            case "BLACK":
                            case 1:
                                message.piece = 1;
                                break;
                            case "WHITE":
                            case 2:
                                message.piece = 2;
                                break;
                            default:
                                if (typeof object.piece === "number" && (object.piece | 0) === object.piece)
                                    message.piece = object.piece;
                            }
                        if (object.playerNickname != null)
                            if (typeof object.playerNickname !== "string" || object.playerNickname.length)
                                message.playerNickname = $String(object.playerNickname);
                        if (object.playerId != null)
                            if ($Number(object.playerId) !== 0)
                                message.playerId = object.playerId | 0;
                        return message;
                    };

                    /**
                     * Creates a plain object from a GameMoveSuccessResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.miti99.gomoku.proto.GameMoveSuccessResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.GameMoveSuccessResponse} message GameMoveSuccessResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GameMoveSuccessResponse.toObject = function (message, options, _depth) {
                        if (!options)
                            options = {};
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        let object = {};
                        if (options.defaults) {
                            object.row = 0;
                            object.col = 0;
                            object.piece = options.enums === $String ? "PIECE_UNSPECIFIED" : 0;
                            object.playerNickname = "";
                            object.playerId = 0;
                        }
                        if (message.row != null && $Object.hasOwnProperty.call(message, "row"))
                            object.row = message.row;
                        if (message.col != null && $Object.hasOwnProperty.call(message, "col"))
                            object.col = message.col;
                        if (message.piece != null && $Object.hasOwnProperty.call(message, "piece"))
                            object.piece = options.enums === $String ? $root.com.miti99.gomoku.proto.Piece[message.piece] === $undefined ? message.piece : $root.com.miti99.gomoku.proto.Piece[message.piece] : message.piece;
                        if (message.playerNickname != null && $Object.hasOwnProperty.call(message, "playerNickname"))
                            object.playerNickname = message.playerNickname;
                        if (message.playerId != null && $Object.hasOwnProperty.call(message, "playerId"))
                            object.playerId = message.playerId;
                        return object;
                    };

                    /**
                     * Converts this GameMoveSuccessResponse to JSON.
                     * @function toJSON
                     * @memberof com.miti99.gomoku.proto.GameMoveSuccessResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GameMoveSuccessResponse.prototype.toJSON = function() {
                        return GameMoveSuccessResponse.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the type url for GameMoveSuccessResponse
                     * @function getTypeUrl
                     * @memberof com.miti99.gomoku.proto.GameMoveSuccessResponse
                     * @static
                     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns {string} The type url
                     */
                    GameMoveSuccessResponse.getTypeUrl = function(prefix) {
                        if (prefix === $undefined)
                            prefix = "type.googleapis.com";
                        return prefix + "/com.miti99.gomoku.proto.GameMoveSuccessResponse";
                    };

                    return GameMoveSuccessResponse;
                })();

                proto.GameMoveInvalidResponse = (function() {

                    /**
                     * Properties of a GameMoveInvalidResponse.
                     * @typedef {Object} com.miti99.gomoku.proto.GameMoveInvalidResponse.$Properties
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */

                    /**
                     * Properties of a GameMoveInvalidResponse.
                     * @memberof com.miti99.gomoku.proto
                     * @interface IGameMoveInvalidResponse
                     * @augments com.miti99.gomoku.proto.GameMoveInvalidResponse.$Properties
                     * @deprecated Use com.miti99.gomoku.proto.GameMoveInvalidResponse.$Properties instead.
                     */

                    /**
                     * Shape of a GameMoveInvalidResponse.
                     * @typedef {com.miti99.gomoku.proto.GameMoveInvalidResponse.$Properties} com.miti99.gomoku.proto.GameMoveInvalidResponse.$Shape
                     */

                    /**
                     * Constructs a new GameMoveInvalidResponse.
                     * @memberof com.miti99.gomoku.proto
                     * @classdesc Represents a GameMoveInvalidResponse.
                     * @constructor
                     * @param {com.miti99.gomoku.proto.GameMoveInvalidResponse.$Properties=} [properties] Properties to set
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */
                    const GameMoveInvalidResponse = function (properties) {
                        if (properties)
                            for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                    this[keys[i]] = properties[keys[i]];
                    };

                    /**
                     * Creates a new GameMoveInvalidResponse instance using the specified properties.
                     * @function create
                     * @memberof com.miti99.gomoku.proto.GameMoveInvalidResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.GameMoveInvalidResponse.$Properties=} [properties] Properties to set
                     * @returns {com.miti99.gomoku.proto.GameMoveInvalidResponse} GameMoveInvalidResponse instance
                     * @type {{
                     *   (properties: com.miti99.gomoku.proto.GameMoveInvalidResponse.$Shape): com.miti99.gomoku.proto.GameMoveInvalidResponse & com.miti99.gomoku.proto.GameMoveInvalidResponse.$Shape;
                     *   (properties?: com.miti99.gomoku.proto.GameMoveInvalidResponse.$Properties): com.miti99.gomoku.proto.GameMoveInvalidResponse;
                     * }}
                     */
                    GameMoveInvalidResponse.create = function(properties) {
                        return new GameMoveInvalidResponse(properties);
                    };

                    /**
                     * Encodes the specified GameMoveInvalidResponse message. Does not implicitly {@link com.miti99.gomoku.proto.GameMoveInvalidResponse.verify|verify} messages.
                     * @function encode
                     * @memberof com.miti99.gomoku.proto.GameMoveInvalidResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.GameMoveInvalidResponse.$Properties} message GameMoveInvalidResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GameMoveInvalidResponse.encode = function (message, writer, _depth) {
                        if (!writer)
                            writer = $Writer.create();
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                            for (let i = 0; i < message.$unknowns.length; ++i)
                                writer.raw(message.$unknowns[i]);
                        return writer;
                    };

                    /**
                     * Encodes the specified GameMoveInvalidResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.GameMoveInvalidResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.miti99.gomoku.proto.GameMoveInvalidResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.GameMoveInvalidResponse.$Properties} message GameMoveInvalidResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GameMoveInvalidResponse.encodeDelimited = function(message, writer) {
                        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                    };

                    /**
                     * Decodes a GameMoveInvalidResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.miti99.gomoku.proto.GameMoveInvalidResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.GameMoveInvalidResponse & com.miti99.gomoku.proto.GameMoveInvalidResponse.$Shape} GameMoveInvalidResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GameMoveInvalidResponse.decode = function (reader, length, _end, _depth, _target) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $Reader.recursionLimit)
                            throw $Error("max depth exceeded");
                        let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.com.miti99.gomoku.proto.GameMoveInvalidResponse();
                        while (reader.pos < end) {
                            let start = reader.pos;
                            let tag = reader.tag();
                            if (tag === _end) {
                                _end = $undefined;
                                break;
                            }
                            reader.skipType(tag & 7, _depth, tag);
                            if (!reader.discardUnknown) {
                                $util.makeProp(message, "$unknowns", false);
                                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                            }
                        }
                        if (_end !== $undefined)
                            throw $Error("missing end group");
                        return message;
                    };

                    /**
                     * Decodes a GameMoveInvalidResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.miti99.gomoku.proto.GameMoveInvalidResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.GameMoveInvalidResponse & com.miti99.gomoku.proto.GameMoveInvalidResponse.$Shape} GameMoveInvalidResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GameMoveInvalidResponse.decodeDelimited = function(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a GameMoveInvalidResponse message.
                     * @function verify
                     * @memberof com.miti99.gomoku.proto.GameMoveInvalidResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GameMoveInvalidResponse.verify = function (message, _depth) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            return "max depth exceeded";
                        return null;
                    };

                    /**
                     * Creates a GameMoveInvalidResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.miti99.gomoku.proto.GameMoveInvalidResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.miti99.gomoku.proto.GameMoveInvalidResponse} GameMoveInvalidResponse
                     */
                    GameMoveInvalidResponse.fromObject = function (object, _depth) {
                        if (object instanceof $root.com.miti99.gomoku.proto.GameMoveInvalidResponse)
                            return object;
                        if (!$util.isObject(object))
                            throw $TypeError(".com.miti99.gomoku.proto.GameMoveInvalidResponse: object expected");
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        return new $root.com.miti99.gomoku.proto.GameMoveInvalidResponse();
                    };

                    /**
                     * Creates a plain object from a GameMoveInvalidResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.miti99.gomoku.proto.GameMoveInvalidResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.GameMoveInvalidResponse} message GameMoveInvalidResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GameMoveInvalidResponse.toObject = function () {
                        return {};
                    };

                    /**
                     * Converts this GameMoveInvalidResponse to JSON.
                     * @function toJSON
                     * @memberof com.miti99.gomoku.proto.GameMoveInvalidResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GameMoveInvalidResponse.prototype.toJSON = function() {
                        return GameMoveInvalidResponse.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the type url for GameMoveInvalidResponse
                     * @function getTypeUrl
                     * @memberof com.miti99.gomoku.proto.GameMoveInvalidResponse
                     * @static
                     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns {string} The type url
                     */
                    GameMoveInvalidResponse.getTypeUrl = function(prefix) {
                        if (prefix === $undefined)
                            prefix = "type.googleapis.com";
                        return prefix + "/com.miti99.gomoku.proto.GameMoveInvalidResponse";
                    };

                    return GameMoveInvalidResponse;
                })();

                proto.GameMoveOccupiedResponse = (function() {

                    /**
                     * Properties of a GameMoveOccupiedResponse.
                     * @typedef {Object} com.miti99.gomoku.proto.GameMoveOccupiedResponse.$Properties
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */

                    /**
                     * Properties of a GameMoveOccupiedResponse.
                     * @memberof com.miti99.gomoku.proto
                     * @interface IGameMoveOccupiedResponse
                     * @augments com.miti99.gomoku.proto.GameMoveOccupiedResponse.$Properties
                     * @deprecated Use com.miti99.gomoku.proto.GameMoveOccupiedResponse.$Properties instead.
                     */

                    /**
                     * Shape of a GameMoveOccupiedResponse.
                     * @typedef {com.miti99.gomoku.proto.GameMoveOccupiedResponse.$Properties} com.miti99.gomoku.proto.GameMoveOccupiedResponse.$Shape
                     */

                    /**
                     * Constructs a new GameMoveOccupiedResponse.
                     * @memberof com.miti99.gomoku.proto
                     * @classdesc Represents a GameMoveOccupiedResponse.
                     * @constructor
                     * @param {com.miti99.gomoku.proto.GameMoveOccupiedResponse.$Properties=} [properties] Properties to set
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */
                    const GameMoveOccupiedResponse = function (properties) {
                        if (properties)
                            for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                    this[keys[i]] = properties[keys[i]];
                    };

                    /**
                     * Creates a new GameMoveOccupiedResponse instance using the specified properties.
                     * @function create
                     * @memberof com.miti99.gomoku.proto.GameMoveOccupiedResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.GameMoveOccupiedResponse.$Properties=} [properties] Properties to set
                     * @returns {com.miti99.gomoku.proto.GameMoveOccupiedResponse} GameMoveOccupiedResponse instance
                     * @type {{
                     *   (properties: com.miti99.gomoku.proto.GameMoveOccupiedResponse.$Shape): com.miti99.gomoku.proto.GameMoveOccupiedResponse & com.miti99.gomoku.proto.GameMoveOccupiedResponse.$Shape;
                     *   (properties?: com.miti99.gomoku.proto.GameMoveOccupiedResponse.$Properties): com.miti99.gomoku.proto.GameMoveOccupiedResponse;
                     * }}
                     */
                    GameMoveOccupiedResponse.create = function(properties) {
                        return new GameMoveOccupiedResponse(properties);
                    };

                    /**
                     * Encodes the specified GameMoveOccupiedResponse message. Does not implicitly {@link com.miti99.gomoku.proto.GameMoveOccupiedResponse.verify|verify} messages.
                     * @function encode
                     * @memberof com.miti99.gomoku.proto.GameMoveOccupiedResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.GameMoveOccupiedResponse.$Properties} message GameMoveOccupiedResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GameMoveOccupiedResponse.encode = function (message, writer, _depth) {
                        if (!writer)
                            writer = $Writer.create();
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                            for (let i = 0; i < message.$unknowns.length; ++i)
                                writer.raw(message.$unknowns[i]);
                        return writer;
                    };

                    /**
                     * Encodes the specified GameMoveOccupiedResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.GameMoveOccupiedResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.miti99.gomoku.proto.GameMoveOccupiedResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.GameMoveOccupiedResponse.$Properties} message GameMoveOccupiedResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GameMoveOccupiedResponse.encodeDelimited = function(message, writer) {
                        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                    };

                    /**
                     * Decodes a GameMoveOccupiedResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.miti99.gomoku.proto.GameMoveOccupiedResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.GameMoveOccupiedResponse & com.miti99.gomoku.proto.GameMoveOccupiedResponse.$Shape} GameMoveOccupiedResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GameMoveOccupiedResponse.decode = function (reader, length, _end, _depth, _target) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $Reader.recursionLimit)
                            throw $Error("max depth exceeded");
                        let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.com.miti99.gomoku.proto.GameMoveOccupiedResponse();
                        while (reader.pos < end) {
                            let start = reader.pos;
                            let tag = reader.tag();
                            if (tag === _end) {
                                _end = $undefined;
                                break;
                            }
                            reader.skipType(tag & 7, _depth, tag);
                            if (!reader.discardUnknown) {
                                $util.makeProp(message, "$unknowns", false);
                                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                            }
                        }
                        if (_end !== $undefined)
                            throw $Error("missing end group");
                        return message;
                    };

                    /**
                     * Decodes a GameMoveOccupiedResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.miti99.gomoku.proto.GameMoveOccupiedResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.GameMoveOccupiedResponse & com.miti99.gomoku.proto.GameMoveOccupiedResponse.$Shape} GameMoveOccupiedResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GameMoveOccupiedResponse.decodeDelimited = function(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a GameMoveOccupiedResponse message.
                     * @function verify
                     * @memberof com.miti99.gomoku.proto.GameMoveOccupiedResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GameMoveOccupiedResponse.verify = function (message, _depth) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            return "max depth exceeded";
                        return null;
                    };

                    /**
                     * Creates a GameMoveOccupiedResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.miti99.gomoku.proto.GameMoveOccupiedResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.miti99.gomoku.proto.GameMoveOccupiedResponse} GameMoveOccupiedResponse
                     */
                    GameMoveOccupiedResponse.fromObject = function (object, _depth) {
                        if (object instanceof $root.com.miti99.gomoku.proto.GameMoveOccupiedResponse)
                            return object;
                        if (!$util.isObject(object))
                            throw $TypeError(".com.miti99.gomoku.proto.GameMoveOccupiedResponse: object expected");
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        return new $root.com.miti99.gomoku.proto.GameMoveOccupiedResponse();
                    };

                    /**
                     * Creates a plain object from a GameMoveOccupiedResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.miti99.gomoku.proto.GameMoveOccupiedResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.GameMoveOccupiedResponse} message GameMoveOccupiedResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GameMoveOccupiedResponse.toObject = function () {
                        return {};
                    };

                    /**
                     * Converts this GameMoveOccupiedResponse to JSON.
                     * @function toJSON
                     * @memberof com.miti99.gomoku.proto.GameMoveOccupiedResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GameMoveOccupiedResponse.prototype.toJSON = function() {
                        return GameMoveOccupiedResponse.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the type url for GameMoveOccupiedResponse
                     * @function getTypeUrl
                     * @memberof com.miti99.gomoku.proto.GameMoveOccupiedResponse
                     * @static
                     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns {string} The type url
                     */
                    GameMoveOccupiedResponse.getTypeUrl = function(prefix) {
                        if (prefix === $undefined)
                            prefix = "type.googleapis.com";
                        return prefix + "/com.miti99.gomoku.proto.GameMoveOccupiedResponse";
                    };

                    return GameMoveOccupiedResponse;
                })();

                proto.GameMoveOutOfBoundsResponse = (function() {

                    /**
                     * Properties of a GameMoveOutOfBoundsResponse.
                     * @typedef {Object} com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse.$Properties
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */

                    /**
                     * Properties of a GameMoveOutOfBoundsResponse.
                     * @memberof com.miti99.gomoku.proto
                     * @interface IGameMoveOutOfBoundsResponse
                     * @augments com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse.$Properties
                     * @deprecated Use com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse.$Properties instead.
                     */

                    /**
                     * Shape of a GameMoveOutOfBoundsResponse.
                     * @typedef {com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse.$Properties} com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse.$Shape
                     */

                    /**
                     * Constructs a new GameMoveOutOfBoundsResponse.
                     * @memberof com.miti99.gomoku.proto
                     * @classdesc Represents a GameMoveOutOfBoundsResponse.
                     * @constructor
                     * @param {com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse.$Properties=} [properties] Properties to set
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */
                    const GameMoveOutOfBoundsResponse = function (properties) {
                        if (properties)
                            for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                    this[keys[i]] = properties[keys[i]];
                    };

                    /**
                     * Creates a new GameMoveOutOfBoundsResponse instance using the specified properties.
                     * @function create
                     * @memberof com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse.$Properties=} [properties] Properties to set
                     * @returns {com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse} GameMoveOutOfBoundsResponse instance
                     * @type {{
                     *   (properties: com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse.$Shape): com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse & com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse.$Shape;
                     *   (properties?: com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse.$Properties): com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse;
                     * }}
                     */
                    GameMoveOutOfBoundsResponse.create = function(properties) {
                        return new GameMoveOutOfBoundsResponse(properties);
                    };

                    /**
                     * Encodes the specified GameMoveOutOfBoundsResponse message. Does not implicitly {@link com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse.verify|verify} messages.
                     * @function encode
                     * @memberof com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse.$Properties} message GameMoveOutOfBoundsResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GameMoveOutOfBoundsResponse.encode = function (message, writer, _depth) {
                        if (!writer)
                            writer = $Writer.create();
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                            for (let i = 0; i < message.$unknowns.length; ++i)
                                writer.raw(message.$unknowns[i]);
                        return writer;
                    };

                    /**
                     * Encodes the specified GameMoveOutOfBoundsResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse.$Properties} message GameMoveOutOfBoundsResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GameMoveOutOfBoundsResponse.encodeDelimited = function(message, writer) {
                        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                    };

                    /**
                     * Decodes a GameMoveOutOfBoundsResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse & com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse.$Shape} GameMoveOutOfBoundsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GameMoveOutOfBoundsResponse.decode = function (reader, length, _end, _depth, _target) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $Reader.recursionLimit)
                            throw $Error("max depth exceeded");
                        let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse();
                        while (reader.pos < end) {
                            let start = reader.pos;
                            let tag = reader.tag();
                            if (tag === _end) {
                                _end = $undefined;
                                break;
                            }
                            reader.skipType(tag & 7, _depth, tag);
                            if (!reader.discardUnknown) {
                                $util.makeProp(message, "$unknowns", false);
                                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                            }
                        }
                        if (_end !== $undefined)
                            throw $Error("missing end group");
                        return message;
                    };

                    /**
                     * Decodes a GameMoveOutOfBoundsResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse & com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse.$Shape} GameMoveOutOfBoundsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GameMoveOutOfBoundsResponse.decodeDelimited = function(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a GameMoveOutOfBoundsResponse message.
                     * @function verify
                     * @memberof com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GameMoveOutOfBoundsResponse.verify = function (message, _depth) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            return "max depth exceeded";
                        return null;
                    };

                    /**
                     * Creates a GameMoveOutOfBoundsResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse} GameMoveOutOfBoundsResponse
                     */
                    GameMoveOutOfBoundsResponse.fromObject = function (object, _depth) {
                        if (object instanceof $root.com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse)
                            return object;
                        if (!$util.isObject(object))
                            throw $TypeError(".com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse: object expected");
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        return new $root.com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse();
                    };

                    /**
                     * Creates a plain object from a GameMoveOutOfBoundsResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse} message GameMoveOutOfBoundsResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GameMoveOutOfBoundsResponse.toObject = function () {
                        return {};
                    };

                    /**
                     * Converts this GameMoveOutOfBoundsResponse to JSON.
                     * @function toJSON
                     * @memberof com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GameMoveOutOfBoundsResponse.prototype.toJSON = function() {
                        return GameMoveOutOfBoundsResponse.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the type url for GameMoveOutOfBoundsResponse
                     * @function getTypeUrl
                     * @memberof com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse
                     * @static
                     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns {string} The type url
                     */
                    GameMoveOutOfBoundsResponse.getTypeUrl = function(prefix) {
                        if (prefix === $undefined)
                            prefix = "type.googleapis.com";
                        return prefix + "/com.miti99.gomoku.proto.GameMoveOutOfBoundsResponse";
                    };

                    return GameMoveOutOfBoundsResponse;
                })();

                proto.GameMoveNotYourTurnResponse = (function() {

                    /**
                     * Properties of a GameMoveNotYourTurnResponse.
                     * @typedef {Object} com.miti99.gomoku.proto.GameMoveNotYourTurnResponse.$Properties
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */

                    /**
                     * Properties of a GameMoveNotYourTurnResponse.
                     * @memberof com.miti99.gomoku.proto
                     * @interface IGameMoveNotYourTurnResponse
                     * @augments com.miti99.gomoku.proto.GameMoveNotYourTurnResponse.$Properties
                     * @deprecated Use com.miti99.gomoku.proto.GameMoveNotYourTurnResponse.$Properties instead.
                     */

                    /**
                     * Shape of a GameMoveNotYourTurnResponse.
                     * @typedef {com.miti99.gomoku.proto.GameMoveNotYourTurnResponse.$Properties} com.miti99.gomoku.proto.GameMoveNotYourTurnResponse.$Shape
                     */

                    /**
                     * Constructs a new GameMoveNotYourTurnResponse.
                     * @memberof com.miti99.gomoku.proto
                     * @classdesc Represents a GameMoveNotYourTurnResponse.
                     * @constructor
                     * @param {com.miti99.gomoku.proto.GameMoveNotYourTurnResponse.$Properties=} [properties] Properties to set
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */
                    const GameMoveNotYourTurnResponse = function (properties) {
                        if (properties)
                            for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                    this[keys[i]] = properties[keys[i]];
                    };

                    /**
                     * Creates a new GameMoveNotYourTurnResponse instance using the specified properties.
                     * @function create
                     * @memberof com.miti99.gomoku.proto.GameMoveNotYourTurnResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.GameMoveNotYourTurnResponse.$Properties=} [properties] Properties to set
                     * @returns {com.miti99.gomoku.proto.GameMoveNotYourTurnResponse} GameMoveNotYourTurnResponse instance
                     * @type {{
                     *   (properties: com.miti99.gomoku.proto.GameMoveNotYourTurnResponse.$Shape): com.miti99.gomoku.proto.GameMoveNotYourTurnResponse & com.miti99.gomoku.proto.GameMoveNotYourTurnResponse.$Shape;
                     *   (properties?: com.miti99.gomoku.proto.GameMoveNotYourTurnResponse.$Properties): com.miti99.gomoku.proto.GameMoveNotYourTurnResponse;
                     * }}
                     */
                    GameMoveNotYourTurnResponse.create = function(properties) {
                        return new GameMoveNotYourTurnResponse(properties);
                    };

                    /**
                     * Encodes the specified GameMoveNotYourTurnResponse message. Does not implicitly {@link com.miti99.gomoku.proto.GameMoveNotYourTurnResponse.verify|verify} messages.
                     * @function encode
                     * @memberof com.miti99.gomoku.proto.GameMoveNotYourTurnResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.GameMoveNotYourTurnResponse.$Properties} message GameMoveNotYourTurnResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GameMoveNotYourTurnResponse.encode = function (message, writer, _depth) {
                        if (!writer)
                            writer = $Writer.create();
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                            for (let i = 0; i < message.$unknowns.length; ++i)
                                writer.raw(message.$unknowns[i]);
                        return writer;
                    };

                    /**
                     * Encodes the specified GameMoveNotYourTurnResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.GameMoveNotYourTurnResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.miti99.gomoku.proto.GameMoveNotYourTurnResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.GameMoveNotYourTurnResponse.$Properties} message GameMoveNotYourTurnResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GameMoveNotYourTurnResponse.encodeDelimited = function(message, writer) {
                        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                    };

                    /**
                     * Decodes a GameMoveNotYourTurnResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.miti99.gomoku.proto.GameMoveNotYourTurnResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.GameMoveNotYourTurnResponse & com.miti99.gomoku.proto.GameMoveNotYourTurnResponse.$Shape} GameMoveNotYourTurnResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GameMoveNotYourTurnResponse.decode = function (reader, length, _end, _depth, _target) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $Reader.recursionLimit)
                            throw $Error("max depth exceeded");
                        let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.com.miti99.gomoku.proto.GameMoveNotYourTurnResponse();
                        while (reader.pos < end) {
                            let start = reader.pos;
                            let tag = reader.tag();
                            if (tag === _end) {
                                _end = $undefined;
                                break;
                            }
                            reader.skipType(tag & 7, _depth, tag);
                            if (!reader.discardUnknown) {
                                $util.makeProp(message, "$unknowns", false);
                                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                            }
                        }
                        if (_end !== $undefined)
                            throw $Error("missing end group");
                        return message;
                    };

                    /**
                     * Decodes a GameMoveNotYourTurnResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.miti99.gomoku.proto.GameMoveNotYourTurnResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.GameMoveNotYourTurnResponse & com.miti99.gomoku.proto.GameMoveNotYourTurnResponse.$Shape} GameMoveNotYourTurnResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GameMoveNotYourTurnResponse.decodeDelimited = function(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a GameMoveNotYourTurnResponse message.
                     * @function verify
                     * @memberof com.miti99.gomoku.proto.GameMoveNotYourTurnResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GameMoveNotYourTurnResponse.verify = function (message, _depth) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            return "max depth exceeded";
                        return null;
                    };

                    /**
                     * Creates a GameMoveNotYourTurnResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.miti99.gomoku.proto.GameMoveNotYourTurnResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.miti99.gomoku.proto.GameMoveNotYourTurnResponse} GameMoveNotYourTurnResponse
                     */
                    GameMoveNotYourTurnResponse.fromObject = function (object, _depth) {
                        if (object instanceof $root.com.miti99.gomoku.proto.GameMoveNotYourTurnResponse)
                            return object;
                        if (!$util.isObject(object))
                            throw $TypeError(".com.miti99.gomoku.proto.GameMoveNotYourTurnResponse: object expected");
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        return new $root.com.miti99.gomoku.proto.GameMoveNotYourTurnResponse();
                    };

                    /**
                     * Creates a plain object from a GameMoveNotYourTurnResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.miti99.gomoku.proto.GameMoveNotYourTurnResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.GameMoveNotYourTurnResponse} message GameMoveNotYourTurnResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GameMoveNotYourTurnResponse.toObject = function () {
                        return {};
                    };

                    /**
                     * Converts this GameMoveNotYourTurnResponse to JSON.
                     * @function toJSON
                     * @memberof com.miti99.gomoku.proto.GameMoveNotYourTurnResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GameMoveNotYourTurnResponse.prototype.toJSON = function() {
                        return GameMoveNotYourTurnResponse.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the type url for GameMoveNotYourTurnResponse
                     * @function getTypeUrl
                     * @memberof com.miti99.gomoku.proto.GameMoveNotYourTurnResponse
                     * @static
                     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns {string} The type url
                     */
                    GameMoveNotYourTurnResponse.getTypeUrl = function(prefix) {
                        if (prefix === $undefined)
                            prefix = "type.googleapis.com";
                        return prefix + "/com.miti99.gomoku.proto.GameMoveNotYourTurnResponse";
                    };

                    return GameMoveNotYourTurnResponse;
                })();

                proto.GameOverResponse = (function() {

                    /**
                     * Properties of a GameOverResponse.
                     * @typedef {Object} com.miti99.gomoku.proto.GameOverResponse.$Properties
                     * @property {com.miti99.gomoku.proto.GameResult|null} [result] GameOverResponse result
                     * @property {string|null} [winnerNickname] GameOverResponse winnerNickname
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */

                    /**
                     * Properties of a GameOverResponse.
                     * @memberof com.miti99.gomoku.proto
                     * @interface IGameOverResponse
                     * @augments com.miti99.gomoku.proto.GameOverResponse.$Properties
                     * @deprecated Use com.miti99.gomoku.proto.GameOverResponse.$Properties instead.
                     */

                    /**
                     * Shape of a GameOverResponse.
                     * @typedef {com.miti99.gomoku.proto.GameOverResponse.$Properties} com.miti99.gomoku.proto.GameOverResponse.$Shape
                     */

                    /**
                     * Constructs a new GameOverResponse.
                     * @memberof com.miti99.gomoku.proto
                     * @classdesc Represents a GameOverResponse.
                     * @constructor
                     * @param {com.miti99.gomoku.proto.GameOverResponse.$Properties=} [properties] Properties to set
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */
                    const GameOverResponse = function (properties) {
                        if (properties)
                            for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                    this[keys[i]] = properties[keys[i]];
                    };

                    /**
                     * GameOverResponse result.
                     * @member {com.miti99.gomoku.proto.GameResult} result
                     * @memberof com.miti99.gomoku.proto.GameOverResponse
                     * @instance
                     */
                    GameOverResponse.prototype.result = 0;

                    /**
                     * GameOverResponse winnerNickname.
                     * @member {string} winnerNickname
                     * @memberof com.miti99.gomoku.proto.GameOverResponse
                     * @instance
                     */
                    GameOverResponse.prototype.winnerNickname = "";

                    /**
                     * Creates a new GameOverResponse instance using the specified properties.
                     * @function create
                     * @memberof com.miti99.gomoku.proto.GameOverResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.GameOverResponse.$Properties=} [properties] Properties to set
                     * @returns {com.miti99.gomoku.proto.GameOverResponse} GameOverResponse instance
                     * @type {{
                     *   (properties: com.miti99.gomoku.proto.GameOverResponse.$Shape): com.miti99.gomoku.proto.GameOverResponse & com.miti99.gomoku.proto.GameOverResponse.$Shape;
                     *   (properties?: com.miti99.gomoku.proto.GameOverResponse.$Properties): com.miti99.gomoku.proto.GameOverResponse;
                     * }}
                     */
                    GameOverResponse.create = function(properties) {
                        return new GameOverResponse(properties);
                    };

                    /**
                     * Encodes the specified GameOverResponse message. Does not implicitly {@link com.miti99.gomoku.proto.GameOverResponse.verify|verify} messages.
                     * @function encode
                     * @memberof com.miti99.gomoku.proto.GameOverResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.GameOverResponse.$Properties} message GameOverResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GameOverResponse.encode = function (message, writer, _depth) {
                        if (!writer)
                            writer = $Writer.create();
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        if (message.result != null && $Object.hasOwnProperty.call(message, "result") && message.result !== 0)
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
                        if (message.winnerNickname != null && $Object.hasOwnProperty.call(message, "winnerNickname") && message.winnerNickname !== "")
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.winnerNickname);
                        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                            for (let i = 0; i < message.$unknowns.length; ++i)
                                writer.raw(message.$unknowns[i]);
                        return writer;
                    };

                    /**
                     * Encodes the specified GameOverResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.GameOverResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.miti99.gomoku.proto.GameOverResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.GameOverResponse.$Properties} message GameOverResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GameOverResponse.encodeDelimited = function(message, writer) {
                        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                    };

                    /**
                     * Decodes a GameOverResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.miti99.gomoku.proto.GameOverResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.GameOverResponse & com.miti99.gomoku.proto.GameOverResponse.$Shape} GameOverResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GameOverResponse.decode = function (reader, length, _end, _depth, _target) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $Reader.recursionLimit)
                            throw $Error("max depth exceeded");
                        let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.com.miti99.gomoku.proto.GameOverResponse(), value;
                        while (reader.pos < end) {
                            let start = reader.pos;
                            let tag = reader.tag();
                            if (tag === _end) {
                                _end = $undefined;
                                break;
                            }
                            let wireType = tag & 7;
                            switch (tag >>>= 3) {
                            case 1: {
                                    if (wireType !== 0)
                                        break;
                                    if (value = reader.int32())
                                        message.result = value;
                                    else
                                        delete message.result;
                                    continue;
                                }
                            case 2: {
                                    if (wireType !== 2)
                                        break;
                                    if ((value = reader.stringVerify()).length)
                                        message.winnerNickname = value;
                                    else
                                        delete message.winnerNickname;
                                    continue;
                                }
                            }
                            reader.skipType(wireType, _depth, tag);
                            if (!reader.discardUnknown) {
                                $util.makeProp(message, "$unknowns", false);
                                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                            }
                        }
                        if (_end !== $undefined)
                            throw $Error("missing end group");
                        return message;
                    };

                    /**
                     * Decodes a GameOverResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.miti99.gomoku.proto.GameOverResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.GameOverResponse & com.miti99.gomoku.proto.GameOverResponse.$Shape} GameOverResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GameOverResponse.decodeDelimited = function(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a GameOverResponse message.
                     * @function verify
                     * @memberof com.miti99.gomoku.proto.GameOverResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GameOverResponse.verify = function (message, _depth) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            return "max depth exceeded";
                        if (message.result != null && $Object.hasOwnProperty.call(message, "result"))
                            if (typeof message.result !== "number" || (message.result | 0) !== message.result)
                                return "result: enum value expected";
                        if (message.winnerNickname != null && $Object.hasOwnProperty.call(message, "winnerNickname"))
                            if (!$util.isString(message.winnerNickname))
                                return "winnerNickname: string expected";
                        return null;
                    };

                    /**
                     * Creates a GameOverResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.miti99.gomoku.proto.GameOverResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.miti99.gomoku.proto.GameOverResponse} GameOverResponse
                     */
                    GameOverResponse.fromObject = function (object, _depth) {
                        if (object instanceof $root.com.miti99.gomoku.proto.GameOverResponse)
                            return object;
                        if (!$util.isObject(object))
                            throw $TypeError(".com.miti99.gomoku.proto.GameOverResponse: object expected");
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        let message = new $root.com.miti99.gomoku.proto.GameOverResponse();
                        if (object.result !== 0 && (typeof object.result !== "string" || $root.com.miti99.gomoku.proto.GameResult[object.result] !== 0))
                            switch (object.result) {
                            case "GAME_RESULT_UNSPECIFIED":
                            case 0:
                                message.result = 0;
                                break;
                            case "BLACK_WIN":
                            case 1:
                                message.result = 1;
                                break;
                            case "WHITE_WIN":
                            case 2:
                                message.result = 2;
                                break;
                            case "DRAW":
                            case 3:
                                message.result = 3;
                                break;
                            default:
                                if (typeof object.result === "number" && (object.result | 0) === object.result)
                                    message.result = object.result;
                            }
                        if (object.winnerNickname != null)
                            if (typeof object.winnerNickname !== "string" || object.winnerNickname.length)
                                message.winnerNickname = $String(object.winnerNickname);
                        return message;
                    };

                    /**
                     * Creates a plain object from a GameOverResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.miti99.gomoku.proto.GameOverResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.GameOverResponse} message GameOverResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GameOverResponse.toObject = function (message, options, _depth) {
                        if (!options)
                            options = {};
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        let object = {};
                        if (options.defaults) {
                            object.result = options.enums === $String ? "GAME_RESULT_UNSPECIFIED" : 0;
                            object.winnerNickname = "";
                        }
                        if (message.result != null && $Object.hasOwnProperty.call(message, "result"))
                            object.result = options.enums === $String ? $root.com.miti99.gomoku.proto.GameResult[message.result] === $undefined ? message.result : $root.com.miti99.gomoku.proto.GameResult[message.result] : message.result;
                        if (message.winnerNickname != null && $Object.hasOwnProperty.call(message, "winnerNickname"))
                            object.winnerNickname = message.winnerNickname;
                        return object;
                    };

                    /**
                     * Converts this GameOverResponse to JSON.
                     * @function toJSON
                     * @memberof com.miti99.gomoku.proto.GameOverResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GameOverResponse.prototype.toJSON = function() {
                        return GameOverResponse.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the type url for GameOverResponse
                     * @function getTypeUrl
                     * @memberof com.miti99.gomoku.proto.GameOverResponse
                     * @static
                     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns {string} The type url
                     */
                    GameOverResponse.getTypeUrl = function(prefix) {
                        if (prefix === $undefined)
                            prefix = "type.googleapis.com";
                        return prefix + "/com.miti99.gomoku.proto.GameOverResponse";
                    };

                    return GameOverResponse;
                })();

                proto.PveDifficultyNotSupportResponse = (function() {

                    /**
                     * Properties of a PveDifficultyNotSupportResponse.
                     * @typedef {Object} com.miti99.gomoku.proto.PveDifficultyNotSupportResponse.$Properties
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */

                    /**
                     * Properties of a PveDifficultyNotSupportResponse.
                     * @memberof com.miti99.gomoku.proto
                     * @interface IPveDifficultyNotSupportResponse
                     * @augments com.miti99.gomoku.proto.PveDifficultyNotSupportResponse.$Properties
                     * @deprecated Use com.miti99.gomoku.proto.PveDifficultyNotSupportResponse.$Properties instead.
                     */

                    /**
                     * Shape of a PveDifficultyNotSupportResponse.
                     * @typedef {com.miti99.gomoku.proto.PveDifficultyNotSupportResponse.$Properties} com.miti99.gomoku.proto.PveDifficultyNotSupportResponse.$Shape
                     */

                    /**
                     * Constructs a new PveDifficultyNotSupportResponse.
                     * @memberof com.miti99.gomoku.proto
                     * @classdesc Represents a PveDifficultyNotSupportResponse.
                     * @constructor
                     * @param {com.miti99.gomoku.proto.PveDifficultyNotSupportResponse.$Properties=} [properties] Properties to set
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */
                    const PveDifficultyNotSupportResponse = function (properties) {
                        if (properties)
                            for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                    this[keys[i]] = properties[keys[i]];
                    };

                    /**
                     * Creates a new PveDifficultyNotSupportResponse instance using the specified properties.
                     * @function create
                     * @memberof com.miti99.gomoku.proto.PveDifficultyNotSupportResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.PveDifficultyNotSupportResponse.$Properties=} [properties] Properties to set
                     * @returns {com.miti99.gomoku.proto.PveDifficultyNotSupportResponse} PveDifficultyNotSupportResponse instance
                     * @type {{
                     *   (properties: com.miti99.gomoku.proto.PveDifficultyNotSupportResponse.$Shape): com.miti99.gomoku.proto.PveDifficultyNotSupportResponse & com.miti99.gomoku.proto.PveDifficultyNotSupportResponse.$Shape;
                     *   (properties?: com.miti99.gomoku.proto.PveDifficultyNotSupportResponse.$Properties): com.miti99.gomoku.proto.PveDifficultyNotSupportResponse;
                     * }}
                     */
                    PveDifficultyNotSupportResponse.create = function(properties) {
                        return new PveDifficultyNotSupportResponse(properties);
                    };

                    /**
                     * Encodes the specified PveDifficultyNotSupportResponse message. Does not implicitly {@link com.miti99.gomoku.proto.PveDifficultyNotSupportResponse.verify|verify} messages.
                     * @function encode
                     * @memberof com.miti99.gomoku.proto.PveDifficultyNotSupportResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.PveDifficultyNotSupportResponse.$Properties} message PveDifficultyNotSupportResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PveDifficultyNotSupportResponse.encode = function (message, writer, _depth) {
                        if (!writer)
                            writer = $Writer.create();
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                            for (let i = 0; i < message.$unknowns.length; ++i)
                                writer.raw(message.$unknowns[i]);
                        return writer;
                    };

                    /**
                     * Encodes the specified PveDifficultyNotSupportResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.PveDifficultyNotSupportResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.miti99.gomoku.proto.PveDifficultyNotSupportResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.PveDifficultyNotSupportResponse.$Properties} message PveDifficultyNotSupportResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PveDifficultyNotSupportResponse.encodeDelimited = function(message, writer) {
                        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                    };

                    /**
                     * Decodes a PveDifficultyNotSupportResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.miti99.gomoku.proto.PveDifficultyNotSupportResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.PveDifficultyNotSupportResponse & com.miti99.gomoku.proto.PveDifficultyNotSupportResponse.$Shape} PveDifficultyNotSupportResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PveDifficultyNotSupportResponse.decode = function (reader, length, _end, _depth, _target) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $Reader.recursionLimit)
                            throw $Error("max depth exceeded");
                        let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.com.miti99.gomoku.proto.PveDifficultyNotSupportResponse();
                        while (reader.pos < end) {
                            let start = reader.pos;
                            let tag = reader.tag();
                            if (tag === _end) {
                                _end = $undefined;
                                break;
                            }
                            reader.skipType(tag & 7, _depth, tag);
                            if (!reader.discardUnknown) {
                                $util.makeProp(message, "$unknowns", false);
                                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                            }
                        }
                        if (_end !== $undefined)
                            throw $Error("missing end group");
                        return message;
                    };

                    /**
                     * Decodes a PveDifficultyNotSupportResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.miti99.gomoku.proto.PveDifficultyNotSupportResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.PveDifficultyNotSupportResponse & com.miti99.gomoku.proto.PveDifficultyNotSupportResponse.$Shape} PveDifficultyNotSupportResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PveDifficultyNotSupportResponse.decodeDelimited = function(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a PveDifficultyNotSupportResponse message.
                     * @function verify
                     * @memberof com.miti99.gomoku.proto.PveDifficultyNotSupportResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    PveDifficultyNotSupportResponse.verify = function (message, _depth) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            return "max depth exceeded";
                        return null;
                    };

                    /**
                     * Creates a PveDifficultyNotSupportResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.miti99.gomoku.proto.PveDifficultyNotSupportResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.miti99.gomoku.proto.PveDifficultyNotSupportResponse} PveDifficultyNotSupportResponse
                     */
                    PveDifficultyNotSupportResponse.fromObject = function (object, _depth) {
                        if (object instanceof $root.com.miti99.gomoku.proto.PveDifficultyNotSupportResponse)
                            return object;
                        if (!$util.isObject(object))
                            throw $TypeError(".com.miti99.gomoku.proto.PveDifficultyNotSupportResponse: object expected");
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        return new $root.com.miti99.gomoku.proto.PveDifficultyNotSupportResponse();
                    };

                    /**
                     * Creates a plain object from a PveDifficultyNotSupportResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.miti99.gomoku.proto.PveDifficultyNotSupportResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.PveDifficultyNotSupportResponse} message PveDifficultyNotSupportResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    PveDifficultyNotSupportResponse.toObject = function () {
                        return {};
                    };

                    /**
                     * Converts this PveDifficultyNotSupportResponse to JSON.
                     * @function toJSON
                     * @memberof com.miti99.gomoku.proto.PveDifficultyNotSupportResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    PveDifficultyNotSupportResponse.prototype.toJSON = function() {
                        return PveDifficultyNotSupportResponse.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the type url for PveDifficultyNotSupportResponse
                     * @function getTypeUrl
                     * @memberof com.miti99.gomoku.proto.PveDifficultyNotSupportResponse
                     * @static
                     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns {string} The type url
                     */
                    PveDifficultyNotSupportResponse.getTypeUrl = function(prefix) {
                        if (prefix === $undefined)
                            prefix = "type.googleapis.com";
                        return prefix + "/com.miti99.gomoku.proto.PveDifficultyNotSupportResponse";
                    };

                    return PveDifficultyNotSupportResponse;
                })();

                proto.WatchGameSuccessResponse = (function() {

                    /**
                     * Properties of a WatchGameSuccessResponse.
                     * @typedef {Object} com.miti99.gomoku.proto.WatchGameSuccessResponse.$Properties
                     * @property {string|null} [owner] WatchGameSuccessResponse owner
                     * @property {com.miti99.gomoku.proto.RoomStatus|null} [status] WatchGameSuccessResponse status
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */

                    /**
                     * Properties of a WatchGameSuccessResponse.
                     * @memberof com.miti99.gomoku.proto
                     * @interface IWatchGameSuccessResponse
                     * @augments com.miti99.gomoku.proto.WatchGameSuccessResponse.$Properties
                     * @deprecated Use com.miti99.gomoku.proto.WatchGameSuccessResponse.$Properties instead.
                     */

                    /**
                     * Shape of a WatchGameSuccessResponse.
                     * @typedef {com.miti99.gomoku.proto.WatchGameSuccessResponse.$Properties} com.miti99.gomoku.proto.WatchGameSuccessResponse.$Shape
                     */

                    /**
                     * Constructs a new WatchGameSuccessResponse.
                     * @memberof com.miti99.gomoku.proto
                     * @classdesc Represents a WatchGameSuccessResponse.
                     * @constructor
                     * @param {com.miti99.gomoku.proto.WatchGameSuccessResponse.$Properties=} [properties] Properties to set
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */
                    const WatchGameSuccessResponse = function (properties) {
                        if (properties)
                            for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                    this[keys[i]] = properties[keys[i]];
                    };

                    /**
                     * WatchGameSuccessResponse owner.
                     * @member {string} owner
                     * @memberof com.miti99.gomoku.proto.WatchGameSuccessResponse
                     * @instance
                     */
                    WatchGameSuccessResponse.prototype.owner = "";

                    /**
                     * WatchGameSuccessResponse status.
                     * @member {com.miti99.gomoku.proto.RoomStatus} status
                     * @memberof com.miti99.gomoku.proto.WatchGameSuccessResponse
                     * @instance
                     */
                    WatchGameSuccessResponse.prototype.status = 0;

                    /**
                     * Creates a new WatchGameSuccessResponse instance using the specified properties.
                     * @function create
                     * @memberof com.miti99.gomoku.proto.WatchGameSuccessResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.WatchGameSuccessResponse.$Properties=} [properties] Properties to set
                     * @returns {com.miti99.gomoku.proto.WatchGameSuccessResponse} WatchGameSuccessResponse instance
                     * @type {{
                     *   (properties: com.miti99.gomoku.proto.WatchGameSuccessResponse.$Shape): com.miti99.gomoku.proto.WatchGameSuccessResponse & com.miti99.gomoku.proto.WatchGameSuccessResponse.$Shape;
                     *   (properties?: com.miti99.gomoku.proto.WatchGameSuccessResponse.$Properties): com.miti99.gomoku.proto.WatchGameSuccessResponse;
                     * }}
                     */
                    WatchGameSuccessResponse.create = function(properties) {
                        return new WatchGameSuccessResponse(properties);
                    };

                    /**
                     * Encodes the specified WatchGameSuccessResponse message. Does not implicitly {@link com.miti99.gomoku.proto.WatchGameSuccessResponse.verify|verify} messages.
                     * @function encode
                     * @memberof com.miti99.gomoku.proto.WatchGameSuccessResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.WatchGameSuccessResponse.$Properties} message WatchGameSuccessResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    WatchGameSuccessResponse.encode = function (message, writer, _depth) {
                        if (!writer)
                            writer = $Writer.create();
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        if (message.owner != null && $Object.hasOwnProperty.call(message, "owner") && message.owner !== "")
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.owner);
                        if (message.status != null && $Object.hasOwnProperty.call(message, "status") && message.status !== 0)
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.status);
                        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                            for (let i = 0; i < message.$unknowns.length; ++i)
                                writer.raw(message.$unknowns[i]);
                        return writer;
                    };

                    /**
                     * Encodes the specified WatchGameSuccessResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.WatchGameSuccessResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.miti99.gomoku.proto.WatchGameSuccessResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.WatchGameSuccessResponse.$Properties} message WatchGameSuccessResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    WatchGameSuccessResponse.encodeDelimited = function(message, writer) {
                        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                    };

                    /**
                     * Decodes a WatchGameSuccessResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.miti99.gomoku.proto.WatchGameSuccessResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.WatchGameSuccessResponse & com.miti99.gomoku.proto.WatchGameSuccessResponse.$Shape} WatchGameSuccessResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    WatchGameSuccessResponse.decode = function (reader, length, _end, _depth, _target) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $Reader.recursionLimit)
                            throw $Error("max depth exceeded");
                        let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.com.miti99.gomoku.proto.WatchGameSuccessResponse(), value;
                        while (reader.pos < end) {
                            let start = reader.pos;
                            let tag = reader.tag();
                            if (tag === _end) {
                                _end = $undefined;
                                break;
                            }
                            let wireType = tag & 7;
                            switch (tag >>>= 3) {
                            case 1: {
                                    if (wireType !== 2)
                                        break;
                                    if ((value = reader.stringVerify()).length)
                                        message.owner = value;
                                    else
                                        delete message.owner;
                                    continue;
                                }
                            case 2: {
                                    if (wireType !== 0)
                                        break;
                                    if (value = reader.int32())
                                        message.status = value;
                                    else
                                        delete message.status;
                                    continue;
                                }
                            }
                            reader.skipType(wireType, _depth, tag);
                            if (!reader.discardUnknown) {
                                $util.makeProp(message, "$unknowns", false);
                                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                            }
                        }
                        if (_end !== $undefined)
                            throw $Error("missing end group");
                        return message;
                    };

                    /**
                     * Decodes a WatchGameSuccessResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.miti99.gomoku.proto.WatchGameSuccessResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.WatchGameSuccessResponse & com.miti99.gomoku.proto.WatchGameSuccessResponse.$Shape} WatchGameSuccessResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    WatchGameSuccessResponse.decodeDelimited = function(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a WatchGameSuccessResponse message.
                     * @function verify
                     * @memberof com.miti99.gomoku.proto.WatchGameSuccessResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    WatchGameSuccessResponse.verify = function (message, _depth) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            return "max depth exceeded";
                        if (message.owner != null && $Object.hasOwnProperty.call(message, "owner"))
                            if (!$util.isString(message.owner))
                                return "owner: string expected";
                        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
                            if (typeof message.status !== "number" || (message.status | 0) !== message.status)
                                return "status: enum value expected";
                        return null;
                    };

                    /**
                     * Creates a WatchGameSuccessResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.miti99.gomoku.proto.WatchGameSuccessResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.miti99.gomoku.proto.WatchGameSuccessResponse} WatchGameSuccessResponse
                     */
                    WatchGameSuccessResponse.fromObject = function (object, _depth) {
                        if (object instanceof $root.com.miti99.gomoku.proto.WatchGameSuccessResponse)
                            return object;
                        if (!$util.isObject(object))
                            throw $TypeError(".com.miti99.gomoku.proto.WatchGameSuccessResponse: object expected");
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        let message = new $root.com.miti99.gomoku.proto.WatchGameSuccessResponse();
                        if (object.owner != null)
                            if (typeof object.owner !== "string" || object.owner.length)
                                message.owner = $String(object.owner);
                        if (object.status !== 0 && (typeof object.status !== "string" || $root.com.miti99.gomoku.proto.RoomStatus[object.status] !== 0))
                            switch (object.status) {
                            case "ROOM_STATUS_UNSPECIFIED":
                            case 0:
                                message.status = 0;
                                break;
                            case "WAITING":
                            case 1:
                                message.status = 1;
                                break;
                            case "PLAYING":
                            case 2:
                                message.status = 2;
                                break;
                            case "FINISHED":
                            case 3:
                                message.status = 3;
                                break;
                            default:
                                if (typeof object.status === "number" && (object.status | 0) === object.status)
                                    message.status = object.status;
                            }
                        return message;
                    };

                    /**
                     * Creates a plain object from a WatchGameSuccessResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.miti99.gomoku.proto.WatchGameSuccessResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.WatchGameSuccessResponse} message WatchGameSuccessResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    WatchGameSuccessResponse.toObject = function (message, options, _depth) {
                        if (!options)
                            options = {};
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        let object = {};
                        if (options.defaults) {
                            object.owner = "";
                            object.status = options.enums === $String ? "ROOM_STATUS_UNSPECIFIED" : 0;
                        }
                        if (message.owner != null && $Object.hasOwnProperty.call(message, "owner"))
                            object.owner = message.owner;
                        if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
                            object.status = options.enums === $String ? $root.com.miti99.gomoku.proto.RoomStatus[message.status] === $undefined ? message.status : $root.com.miti99.gomoku.proto.RoomStatus[message.status] : message.status;
                        return object;
                    };

                    /**
                     * Converts this WatchGameSuccessResponse to JSON.
                     * @function toJSON
                     * @memberof com.miti99.gomoku.proto.WatchGameSuccessResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    WatchGameSuccessResponse.prototype.toJSON = function() {
                        return WatchGameSuccessResponse.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the type url for WatchGameSuccessResponse
                     * @function getTypeUrl
                     * @memberof com.miti99.gomoku.proto.WatchGameSuccessResponse
                     * @static
                     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns {string} The type url
                     */
                    WatchGameSuccessResponse.getTypeUrl = function(prefix) {
                        if (prefix === $undefined)
                            prefix = "type.googleapis.com";
                        return prefix + "/com.miti99.gomoku.proto.WatchGameSuccessResponse";
                    };

                    return WatchGameSuccessResponse;
                })();

                proto.ClientExitResponse = (function() {

                    /**
                     * Properties of a ClientExitResponse.
                     * @typedef {Object} com.miti99.gomoku.proto.ClientExitResponse.$Properties
                     * @property {number|null} [roomId] ClientExitResponse roomId
                     * @property {number|null} [exitClientId] ClientExitResponse exitClientId
                     * @property {string|null} [exitClientNickname] ClientExitResponse exitClientNickname
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */

                    /**
                     * Properties of a ClientExitResponse.
                     * @memberof com.miti99.gomoku.proto
                     * @interface IClientExitResponse
                     * @augments com.miti99.gomoku.proto.ClientExitResponse.$Properties
                     * @deprecated Use com.miti99.gomoku.proto.ClientExitResponse.$Properties instead.
                     */

                    /**
                     * Shape of a ClientExitResponse.
                     * @typedef {com.miti99.gomoku.proto.ClientExitResponse.$Properties} com.miti99.gomoku.proto.ClientExitResponse.$Shape
                     */

                    /**
                     * Constructs a new ClientExitResponse.
                     * @memberof com.miti99.gomoku.proto
                     * @classdesc Represents a ClientExitResponse.
                     * @constructor
                     * @param {com.miti99.gomoku.proto.ClientExitResponse.$Properties=} [properties] Properties to set
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */
                    const ClientExitResponse = function (properties) {
                        if (properties)
                            for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                    this[keys[i]] = properties[keys[i]];
                    };

                    /**
                     * ClientExitResponse roomId.
                     * @member {number} roomId
                     * @memberof com.miti99.gomoku.proto.ClientExitResponse
                     * @instance
                     */
                    ClientExitResponse.prototype.roomId = 0;

                    /**
                     * ClientExitResponse exitClientId.
                     * @member {number} exitClientId
                     * @memberof com.miti99.gomoku.proto.ClientExitResponse
                     * @instance
                     */
                    ClientExitResponse.prototype.exitClientId = 0;

                    /**
                     * ClientExitResponse exitClientNickname.
                     * @member {string} exitClientNickname
                     * @memberof com.miti99.gomoku.proto.ClientExitResponse
                     * @instance
                     */
                    ClientExitResponse.prototype.exitClientNickname = "";

                    /**
                     * Creates a new ClientExitResponse instance using the specified properties.
                     * @function create
                     * @memberof com.miti99.gomoku.proto.ClientExitResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.ClientExitResponse.$Properties=} [properties] Properties to set
                     * @returns {com.miti99.gomoku.proto.ClientExitResponse} ClientExitResponse instance
                     * @type {{
                     *   (properties: com.miti99.gomoku.proto.ClientExitResponse.$Shape): com.miti99.gomoku.proto.ClientExitResponse & com.miti99.gomoku.proto.ClientExitResponse.$Shape;
                     *   (properties?: com.miti99.gomoku.proto.ClientExitResponse.$Properties): com.miti99.gomoku.proto.ClientExitResponse;
                     * }}
                     */
                    ClientExitResponse.create = function(properties) {
                        return new ClientExitResponse(properties);
                    };

                    /**
                     * Encodes the specified ClientExitResponse message. Does not implicitly {@link com.miti99.gomoku.proto.ClientExitResponse.verify|verify} messages.
                     * @function encode
                     * @memberof com.miti99.gomoku.proto.ClientExitResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.ClientExitResponse.$Properties} message ClientExitResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ClientExitResponse.encode = function (message, writer, _depth) {
                        if (!writer)
                            writer = $Writer.create();
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        if (message.roomId != null && $Object.hasOwnProperty.call(message, "roomId") && message.roomId !== 0)
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roomId);
                        if (message.exitClientId != null && $Object.hasOwnProperty.call(message, "exitClientId") && message.exitClientId !== 0)
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.exitClientId);
                        if (message.exitClientNickname != null && $Object.hasOwnProperty.call(message, "exitClientNickname") && message.exitClientNickname !== "")
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.exitClientNickname);
                        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                            for (let i = 0; i < message.$unknowns.length; ++i)
                                writer.raw(message.$unknowns[i]);
                        return writer;
                    };

                    /**
                     * Encodes the specified ClientExitResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.ClientExitResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.miti99.gomoku.proto.ClientExitResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.ClientExitResponse.$Properties} message ClientExitResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ClientExitResponse.encodeDelimited = function(message, writer) {
                        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                    };

                    /**
                     * Decodes a ClientExitResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.miti99.gomoku.proto.ClientExitResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.ClientExitResponse & com.miti99.gomoku.proto.ClientExitResponse.$Shape} ClientExitResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ClientExitResponse.decode = function (reader, length, _end, _depth, _target) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $Reader.recursionLimit)
                            throw $Error("max depth exceeded");
                        let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.com.miti99.gomoku.proto.ClientExitResponse(), value;
                        while (reader.pos < end) {
                            let start = reader.pos;
                            let tag = reader.tag();
                            if (tag === _end) {
                                _end = $undefined;
                                break;
                            }
                            let wireType = tag & 7;
                            switch (tag >>>= 3) {
                            case 1: {
                                    if (wireType !== 0)
                                        break;
                                    if (value = reader.int32())
                                        message.roomId = value;
                                    else
                                        delete message.roomId;
                                    continue;
                                }
                            case 2: {
                                    if (wireType !== 0)
                                        break;
                                    if (value = reader.int32())
                                        message.exitClientId = value;
                                    else
                                        delete message.exitClientId;
                                    continue;
                                }
                            case 3: {
                                    if (wireType !== 2)
                                        break;
                                    if ((value = reader.stringVerify()).length)
                                        message.exitClientNickname = value;
                                    else
                                        delete message.exitClientNickname;
                                    continue;
                                }
                            }
                            reader.skipType(wireType, _depth, tag);
                            if (!reader.discardUnknown) {
                                $util.makeProp(message, "$unknowns", false);
                                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                            }
                        }
                        if (_end !== $undefined)
                            throw $Error("missing end group");
                        return message;
                    };

                    /**
                     * Decodes a ClientExitResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.miti99.gomoku.proto.ClientExitResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.ClientExitResponse & com.miti99.gomoku.proto.ClientExitResponse.$Shape} ClientExitResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ClientExitResponse.decodeDelimited = function(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ClientExitResponse message.
                     * @function verify
                     * @memberof com.miti99.gomoku.proto.ClientExitResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ClientExitResponse.verify = function (message, _depth) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            return "max depth exceeded";
                        if (message.roomId != null && $Object.hasOwnProperty.call(message, "roomId"))
                            if (!$util.isInteger(message.roomId))
                                return "roomId: integer expected";
                        if (message.exitClientId != null && $Object.hasOwnProperty.call(message, "exitClientId"))
                            if (!$util.isInteger(message.exitClientId))
                                return "exitClientId: integer expected";
                        if (message.exitClientNickname != null && $Object.hasOwnProperty.call(message, "exitClientNickname"))
                            if (!$util.isString(message.exitClientNickname))
                                return "exitClientNickname: string expected";
                        return null;
                    };

                    /**
                     * Creates a ClientExitResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.miti99.gomoku.proto.ClientExitResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.miti99.gomoku.proto.ClientExitResponse} ClientExitResponse
                     */
                    ClientExitResponse.fromObject = function (object, _depth) {
                        if (object instanceof $root.com.miti99.gomoku.proto.ClientExitResponse)
                            return object;
                        if (!$util.isObject(object))
                            throw $TypeError(".com.miti99.gomoku.proto.ClientExitResponse: object expected");
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        let message = new $root.com.miti99.gomoku.proto.ClientExitResponse();
                        if (object.roomId != null)
                            if ($Number(object.roomId) !== 0)
                                message.roomId = object.roomId | 0;
                        if (object.exitClientId != null)
                            if ($Number(object.exitClientId) !== 0)
                                message.exitClientId = object.exitClientId | 0;
                        if (object.exitClientNickname != null)
                            if (typeof object.exitClientNickname !== "string" || object.exitClientNickname.length)
                                message.exitClientNickname = $String(object.exitClientNickname);
                        return message;
                    };

                    /**
                     * Creates a plain object from a ClientExitResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.miti99.gomoku.proto.ClientExitResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.ClientExitResponse} message ClientExitResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ClientExitResponse.toObject = function (message, options, _depth) {
                        if (!options)
                            options = {};
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        let object = {};
                        if (options.defaults) {
                            object.roomId = 0;
                            object.exitClientId = 0;
                            object.exitClientNickname = "";
                        }
                        if (message.roomId != null && $Object.hasOwnProperty.call(message, "roomId"))
                            object.roomId = message.roomId;
                        if (message.exitClientId != null && $Object.hasOwnProperty.call(message, "exitClientId"))
                            object.exitClientId = message.exitClientId;
                        if (message.exitClientNickname != null && $Object.hasOwnProperty.call(message, "exitClientNickname"))
                            object.exitClientNickname = message.exitClientNickname;
                        return object;
                    };

                    /**
                     * Converts this ClientExitResponse to JSON.
                     * @function toJSON
                     * @memberof com.miti99.gomoku.proto.ClientExitResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ClientExitResponse.prototype.toJSON = function() {
                        return ClientExitResponse.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the type url for ClientExitResponse
                     * @function getTypeUrl
                     * @memberof com.miti99.gomoku.proto.ClientExitResponse
                     * @static
                     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns {string} The type url
                     */
                    ClientExitResponse.getTypeUrl = function(prefix) {
                        if (prefix === $undefined)
                            prefix = "type.googleapis.com";
                        return prefix + "/com.miti99.gomoku.proto.ClientExitResponse";
                    };

                    return ClientExitResponse;
                })();

                proto.SpectatorCannotActResponse = (function() {

                    /**
                     * Properties of a SpectatorCannotActResponse.
                     * @typedef {Object} com.miti99.gomoku.proto.SpectatorCannotActResponse.$Properties
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */

                    /**
                     * Properties of a SpectatorCannotActResponse.
                     * @memberof com.miti99.gomoku.proto
                     * @interface ISpectatorCannotActResponse
                     * @augments com.miti99.gomoku.proto.SpectatorCannotActResponse.$Properties
                     * @deprecated Use com.miti99.gomoku.proto.SpectatorCannotActResponse.$Properties instead.
                     */

                    /**
                     * Shape of a SpectatorCannotActResponse.
                     * @typedef {com.miti99.gomoku.proto.SpectatorCannotActResponse.$Properties} com.miti99.gomoku.proto.SpectatorCannotActResponse.$Shape
                     */

                    /**
                     * Constructs a new SpectatorCannotActResponse.
                     * @memberof com.miti99.gomoku.proto
                     * @classdesc Represents a SpectatorCannotActResponse.
                     * @constructor
                     * @param {com.miti99.gomoku.proto.SpectatorCannotActResponse.$Properties=} [properties] Properties to set
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */
                    const SpectatorCannotActResponse = function (properties) {
                        if (properties)
                            for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                    this[keys[i]] = properties[keys[i]];
                    };

                    /**
                     * Creates a new SpectatorCannotActResponse instance using the specified properties.
                     * @function create
                     * @memberof com.miti99.gomoku.proto.SpectatorCannotActResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.SpectatorCannotActResponse.$Properties=} [properties] Properties to set
                     * @returns {com.miti99.gomoku.proto.SpectatorCannotActResponse} SpectatorCannotActResponse instance
                     * @type {{
                     *   (properties: com.miti99.gomoku.proto.SpectatorCannotActResponse.$Shape): com.miti99.gomoku.proto.SpectatorCannotActResponse & com.miti99.gomoku.proto.SpectatorCannotActResponse.$Shape;
                     *   (properties?: com.miti99.gomoku.proto.SpectatorCannotActResponse.$Properties): com.miti99.gomoku.proto.SpectatorCannotActResponse;
                     * }}
                     */
                    SpectatorCannotActResponse.create = function(properties) {
                        return new SpectatorCannotActResponse(properties);
                    };

                    /**
                     * Encodes the specified SpectatorCannotActResponse message. Does not implicitly {@link com.miti99.gomoku.proto.SpectatorCannotActResponse.verify|verify} messages.
                     * @function encode
                     * @memberof com.miti99.gomoku.proto.SpectatorCannotActResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.SpectatorCannotActResponse.$Properties} message SpectatorCannotActResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    SpectatorCannotActResponse.encode = function (message, writer, _depth) {
                        if (!writer)
                            writer = $Writer.create();
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                            for (let i = 0; i < message.$unknowns.length; ++i)
                                writer.raw(message.$unknowns[i]);
                        return writer;
                    };

                    /**
                     * Encodes the specified SpectatorCannotActResponse message, length delimited. Does not implicitly {@link com.miti99.gomoku.proto.SpectatorCannotActResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.miti99.gomoku.proto.SpectatorCannotActResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.SpectatorCannotActResponse.$Properties} message SpectatorCannotActResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    SpectatorCannotActResponse.encodeDelimited = function(message, writer) {
                        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                    };

                    /**
                     * Decodes a SpectatorCannotActResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.miti99.gomoku.proto.SpectatorCannotActResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.miti99.gomoku.proto.SpectatorCannotActResponse & com.miti99.gomoku.proto.SpectatorCannotActResponse.$Shape} SpectatorCannotActResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    SpectatorCannotActResponse.decode = function (reader, length, _end, _depth, _target) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $Reader.recursionLimit)
                            throw $Error("max depth exceeded");
                        let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.com.miti99.gomoku.proto.SpectatorCannotActResponse();
                        while (reader.pos < end) {
                            let start = reader.pos;
                            let tag = reader.tag();
                            if (tag === _end) {
                                _end = $undefined;
                                break;
                            }
                            reader.skipType(tag & 7, _depth, tag);
                            if (!reader.discardUnknown) {
                                $util.makeProp(message, "$unknowns", false);
                                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                            }
                        }
                        if (_end !== $undefined)
                            throw $Error("missing end group");
                        return message;
                    };

                    /**
                     * Decodes a SpectatorCannotActResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.miti99.gomoku.proto.SpectatorCannotActResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.miti99.gomoku.proto.SpectatorCannotActResponse & com.miti99.gomoku.proto.SpectatorCannotActResponse.$Shape} SpectatorCannotActResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    SpectatorCannotActResponse.decodeDelimited = function(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a SpectatorCannotActResponse message.
                     * @function verify
                     * @memberof com.miti99.gomoku.proto.SpectatorCannotActResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    SpectatorCannotActResponse.verify = function (message, _depth) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            return "max depth exceeded";
                        return null;
                    };

                    /**
                     * Creates a SpectatorCannotActResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.miti99.gomoku.proto.SpectatorCannotActResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.miti99.gomoku.proto.SpectatorCannotActResponse} SpectatorCannotActResponse
                     */
                    SpectatorCannotActResponse.fromObject = function (object, _depth) {
                        if (object instanceof $root.com.miti99.gomoku.proto.SpectatorCannotActResponse)
                            return object;
                        if (!$util.isObject(object))
                            throw $TypeError(".com.miti99.gomoku.proto.SpectatorCannotActResponse: object expected");
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        return new $root.com.miti99.gomoku.proto.SpectatorCannotActResponse();
                    };

                    /**
                     * Creates a plain object from a SpectatorCannotActResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.miti99.gomoku.proto.SpectatorCannotActResponse
                     * @static
                     * @param {com.miti99.gomoku.proto.SpectatorCannotActResponse} message SpectatorCannotActResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    SpectatorCannotActResponse.toObject = function () {
                        return {};
                    };

                    /**
                     * Converts this SpectatorCannotActResponse to JSON.
                     * @function toJSON
                     * @memberof com.miti99.gomoku.proto.SpectatorCannotActResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    SpectatorCannotActResponse.prototype.toJSON = function() {
                        return SpectatorCannotActResponse.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the type url for SpectatorCannotActResponse
                     * @function getTypeUrl
                     * @memberof com.miti99.gomoku.proto.SpectatorCannotActResponse
                     * @static
                     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns {string} The type url
                     */
                    SpectatorCannotActResponse.getTypeUrl = function(prefix) {
                        if (prefix === $undefined)
                            prefix = "type.googleapis.com";
                        return prefix + "/com.miti99.gomoku.proto.SpectatorCannotActResponse";
                    };

                    return SpectatorCannotActResponse;
                })();

                return proto;
            })();

            return gomoku;
        })();

        return miti99;
    })();

    return com;
})();

export {
  $root as default
};
