// source: cs3/auth/provider/v1beta1/provider_api.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

goog.provide('proto.cs3.auth.provider.v1beta1.AuthenticateResponse');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Map');
goog.require('jspb.Message');
goog.require('proto.cs3.auth.provider.v1beta1.Scope');
goog.require('proto.cs3.identity.user.v1beta1.User');
goog.require('proto.cs3.rpc.v1beta1.Status');

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cs3.auth.provider.v1beta1.AuthenticateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.auth.provider.v1beta1.AuthenticateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.auth.provider.v1beta1.AuthenticateResponse.displayName = 'proto.cs3.auth.provider.v1beta1.AuthenticateResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cs3.auth.provider.v1beta1.AuthenticateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.auth.provider.v1beta1.AuthenticateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.auth.provider.v1beta1.AuthenticateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.auth.provider.v1beta1.AuthenticateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && proto.cs3.rpc.v1beta1.Status.toObject(includeInstance, f),
    user: (f = msg.getUser()) && proto.cs3.identity.user.v1beta1.User.toObject(includeInstance, f),
    tokenScopeMap: (f = msg.getTokenScopeMap()) ? f.toObject(includeInstance, proto.cs3.auth.provider.v1beta1.Scope.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cs3.auth.provider.v1beta1.AuthenticateResponse}
 */
proto.cs3.auth.provider.v1beta1.AuthenticateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.auth.provider.v1beta1.AuthenticateResponse;
  return proto.cs3.auth.provider.v1beta1.AuthenticateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.auth.provider.v1beta1.AuthenticateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.auth.provider.v1beta1.AuthenticateResponse}
 */
proto.cs3.auth.provider.v1beta1.AuthenticateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cs3.rpc.v1beta1.Status;
      reader.readMessage(value,proto.cs3.rpc.v1beta1.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 2:
      var value = new proto.cs3.identity.user.v1beta1.User;
      reader.readMessage(value,proto.cs3.identity.user.v1beta1.User.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    case 3:
      var value = msg.getTokenScopeMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.cs3.auth.provider.v1beta1.Scope.deserializeBinaryFromReader, "", new proto.cs3.auth.provider.v1beta1.Scope());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cs3.auth.provider.v1beta1.AuthenticateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.auth.provider.v1beta1.AuthenticateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.auth.provider.v1beta1.AuthenticateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.auth.provider.v1beta1.AuthenticateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cs3.rpc.v1beta1.Status.serializeBinaryToWriter
    );
  }
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.cs3.identity.user.v1beta1.User.serializeBinaryToWriter
    );
  }
  f = message.getTokenScopeMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.cs3.auth.provider.v1beta1.Scope.serializeBinaryToWriter);
  }
};


/**
 * optional cs3.rpc.v1beta1.Status status = 1;
 * @return {?proto.cs3.rpc.v1beta1.Status}
 */
proto.cs3.auth.provider.v1beta1.AuthenticateResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.v1beta1.Status} */ (
    jspb.Message.getWrapperField(this, proto.cs3.rpc.v1beta1.Status, 1));
};


/**
 * @param {?proto.cs3.rpc.v1beta1.Status|undefined} value
 * @return {!proto.cs3.auth.provider.v1beta1.AuthenticateResponse} returns this
*/
proto.cs3.auth.provider.v1beta1.AuthenticateResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.auth.provider.v1beta1.AuthenticateResponse} returns this
 */
proto.cs3.auth.provider.v1beta1.AuthenticateResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.auth.provider.v1beta1.AuthenticateResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.identity.user.v1beta1.User user = 2;
 * @return {?proto.cs3.identity.user.v1beta1.User}
 */
proto.cs3.auth.provider.v1beta1.AuthenticateResponse.prototype.getUser = function() {
  return /** @type{?proto.cs3.identity.user.v1beta1.User} */ (
    jspb.Message.getWrapperField(this, proto.cs3.identity.user.v1beta1.User, 2));
};


/**
 * @param {?proto.cs3.identity.user.v1beta1.User|undefined} value
 * @return {!proto.cs3.auth.provider.v1beta1.AuthenticateResponse} returns this
*/
proto.cs3.auth.provider.v1beta1.AuthenticateResponse.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.auth.provider.v1beta1.AuthenticateResponse} returns this
 */
proto.cs3.auth.provider.v1beta1.AuthenticateResponse.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.auth.provider.v1beta1.AuthenticateResponse.prototype.hasUser = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * map<string, Scope> token_scope = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.cs3.auth.provider.v1beta1.Scope>}
 */
proto.cs3.auth.provider.v1beta1.AuthenticateResponse.prototype.getTokenScopeMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.cs3.auth.provider.v1beta1.Scope>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      proto.cs3.auth.provider.v1beta1.Scope));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.cs3.auth.provider.v1beta1.AuthenticateResponse} returns this
 */
proto.cs3.auth.provider.v1beta1.AuthenticateResponse.prototype.clearTokenScopeMap = function() {
  this.getTokenScopeMap().clear();
  return this;
};

