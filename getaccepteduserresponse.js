// source: cs3/ocm/invite/v1beta1/invite_api.proto
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

goog.provide('proto.cs3.ocm.invite.v1beta1.GetAcceptedUserResponse');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.cs3.identity.user.v1beta1.User');
goog.require('proto.cs3.rpc.v1beta1.Status');
goog.require('proto.cs3.types.v1beta1.Opaque');

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
proto.cs3.ocm.invite.v1beta1.GetAcceptedUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.ocm.invite.v1beta1.GetAcceptedUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.ocm.invite.v1beta1.GetAcceptedUserResponse.displayName = 'proto.cs3.ocm.invite.v1beta1.GetAcceptedUserResponse';
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
proto.cs3.ocm.invite.v1beta1.GetAcceptedUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.ocm.invite.v1beta1.GetAcceptedUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.ocm.invite.v1beta1.GetAcceptedUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.ocm.invite.v1beta1.GetAcceptedUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && proto.cs3.rpc.v1beta1.Status.toObject(includeInstance, f),
    opaque: (f = msg.getOpaque()) && proto.cs3.types.v1beta1.Opaque.toObject(includeInstance, f),
    remoteUser: (f = msg.getRemoteUser()) && proto.cs3.identity.user.v1beta1.User.toObject(includeInstance, f)
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
 * @return {!proto.cs3.ocm.invite.v1beta1.GetAcceptedUserResponse}
 */
proto.cs3.ocm.invite.v1beta1.GetAcceptedUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.ocm.invite.v1beta1.GetAcceptedUserResponse;
  return proto.cs3.ocm.invite.v1beta1.GetAcceptedUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.ocm.invite.v1beta1.GetAcceptedUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.ocm.invite.v1beta1.GetAcceptedUserResponse}
 */
proto.cs3.ocm.invite.v1beta1.GetAcceptedUserResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.cs3.types.v1beta1.Opaque;
      reader.readMessage(value,proto.cs3.types.v1beta1.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    case 3:
      var value = new proto.cs3.identity.user.v1beta1.User;
      reader.readMessage(value,proto.cs3.identity.user.v1beta1.User.deserializeBinaryFromReader);
      msg.setRemoteUser(value);
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
proto.cs3.ocm.invite.v1beta1.GetAcceptedUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.ocm.invite.v1beta1.GetAcceptedUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.ocm.invite.v1beta1.GetAcceptedUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.ocm.invite.v1beta1.GetAcceptedUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cs3.rpc.v1beta1.Status.serializeBinaryToWriter
    );
  }
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.cs3.types.v1beta1.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getRemoteUser();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.cs3.identity.user.v1beta1.User.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.rpc.v1beta1.Status status = 1;
 * @return {?proto.cs3.rpc.v1beta1.Status}
 */
proto.cs3.ocm.invite.v1beta1.GetAcceptedUserResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.v1beta1.Status} */ (
    jspb.Message.getWrapperField(this, proto.cs3.rpc.v1beta1.Status, 1));
};


/**
 * @param {?proto.cs3.rpc.v1beta1.Status|undefined} value
 * @return {!proto.cs3.ocm.invite.v1beta1.GetAcceptedUserResponse} returns this
*/
proto.cs3.ocm.invite.v1beta1.GetAcceptedUserResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.ocm.invite.v1beta1.GetAcceptedUserResponse} returns this
 */
proto.cs3.ocm.invite.v1beta1.GetAcceptedUserResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.ocm.invite.v1beta1.GetAcceptedUserResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 2;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.ocm.invite.v1beta1.GetAcceptedUserResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, proto.cs3.types.v1beta1.Opaque, 2));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.ocm.invite.v1beta1.GetAcceptedUserResponse} returns this
*/
proto.cs3.ocm.invite.v1beta1.GetAcceptedUserResponse.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.ocm.invite.v1beta1.GetAcceptedUserResponse} returns this
 */
proto.cs3.ocm.invite.v1beta1.GetAcceptedUserResponse.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.ocm.invite.v1beta1.GetAcceptedUserResponse.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional cs3.identity.user.v1beta1.User remote_user = 3;
 * @return {?proto.cs3.identity.user.v1beta1.User}
 */
proto.cs3.ocm.invite.v1beta1.GetAcceptedUserResponse.prototype.getRemoteUser = function() {
  return /** @type{?proto.cs3.identity.user.v1beta1.User} */ (
    jspb.Message.getWrapperField(this, proto.cs3.identity.user.v1beta1.User, 3));
};


/**
 * @param {?proto.cs3.identity.user.v1beta1.User|undefined} value
 * @return {!proto.cs3.ocm.invite.v1beta1.GetAcceptedUserResponse} returns this
*/
proto.cs3.ocm.invite.v1beta1.GetAcceptedUserResponse.prototype.setRemoteUser = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.ocm.invite.v1beta1.GetAcceptedUserResponse} returns this
 */
proto.cs3.ocm.invite.v1beta1.GetAcceptedUserResponse.prototype.clearRemoteUser = function() {
  return this.setRemoteUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.ocm.invite.v1beta1.GetAcceptedUserResponse.prototype.hasRemoteUser = function() {
  return jspb.Message.getField(this, 3) != null;
};


