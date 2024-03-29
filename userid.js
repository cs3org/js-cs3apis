// source: cs3/identity/user/v1beta1/resources.proto
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

goog.provide('proto.cs3.identity.user.v1beta1.UserId');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');

goog.forwardDeclare('proto.cs3.identity.user.v1beta1.UserType');
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
proto.cs3.identity.user.v1beta1.UserId = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.identity.user.v1beta1.UserId, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.identity.user.v1beta1.UserId.displayName = 'proto.cs3.identity.user.v1beta1.UserId';
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
proto.cs3.identity.user.v1beta1.UserId.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.identity.user.v1beta1.UserId.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.identity.user.v1beta1.UserId} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.identity.user.v1beta1.UserId.toObject = function(includeInstance, msg) {
  var f, obj = {
    idp: jspb.Message.getFieldWithDefault(msg, 1, ""),
    opaqueId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    type: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.cs3.identity.user.v1beta1.UserId}
 */
proto.cs3.identity.user.v1beta1.UserId.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.identity.user.v1beta1.UserId;
  return proto.cs3.identity.user.v1beta1.UserId.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.identity.user.v1beta1.UserId} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.identity.user.v1beta1.UserId}
 */
proto.cs3.identity.user.v1beta1.UserId.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOpaqueId(value);
      break;
    case 3:
      var value = /** @type {!proto.cs3.identity.user.v1beta1.UserType} */ (reader.readEnum());
      msg.setType(value);
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
proto.cs3.identity.user.v1beta1.UserId.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.identity.user.v1beta1.UserId.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.identity.user.v1beta1.UserId} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.identity.user.v1beta1.UserId.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdp();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOpaqueId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional string idp = 1;
 * @return {string}
 */
proto.cs3.identity.user.v1beta1.UserId.prototype.getIdp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cs3.identity.user.v1beta1.UserId} returns this
 */
proto.cs3.identity.user.v1beta1.UserId.prototype.setIdp = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string opaque_id = 2;
 * @return {string}
 */
proto.cs3.identity.user.v1beta1.UserId.prototype.getOpaqueId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cs3.identity.user.v1beta1.UserId} returns this
 */
proto.cs3.identity.user.v1beta1.UserId.prototype.setOpaqueId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional UserType type = 3;
 * @return {!proto.cs3.identity.user.v1beta1.UserType}
 */
proto.cs3.identity.user.v1beta1.UserId.prototype.getType = function() {
  return /** @type {!proto.cs3.identity.user.v1beta1.UserType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.cs3.identity.user.v1beta1.UserType} value
 * @return {!proto.cs3.identity.user.v1beta1.UserId} returns this
 */
proto.cs3.identity.user.v1beta1.UserId.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


