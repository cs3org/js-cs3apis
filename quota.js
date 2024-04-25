// source: cs3/storage/provider/v1beta1/resources.proto
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

goog.provide('proto.cs3.storage.provider.v1beta1.Quota');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
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
proto.cs3.storage.provider.v1beta1.Quota = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storage.provider.v1beta1.Quota, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storage.provider.v1beta1.Quota.displayName = 'proto.cs3.storage.provider.v1beta1.Quota';
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
proto.cs3.storage.provider.v1beta1.Quota.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storage.provider.v1beta1.Quota.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storage.provider.v1beta1.Quota} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.Quota.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && proto.cs3.types.v1beta1.Opaque.toObject(includeInstance, f),
    quotaMaxBytes: jspb.Message.getFieldWithDefault(msg, 2, 0),
    quotaMaxFiles: jspb.Message.getFieldWithDefault(msg, 3, 0),
    remainingBytes: jspb.Message.getFieldWithDefault(msg, 4, 0),
    remainingFiles: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.cs3.storage.provider.v1beta1.Quota}
 */
proto.cs3.storage.provider.v1beta1.Quota.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storage.provider.v1beta1.Quota;
  return proto.cs3.storage.provider.v1beta1.Quota.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storage.provider.v1beta1.Quota} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storage.provider.v1beta1.Quota}
 */
proto.cs3.storage.provider.v1beta1.Quota.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cs3.types.v1beta1.Opaque;
      reader.readMessage(value,proto.cs3.types.v1beta1.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setQuotaMaxBytes(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setQuotaMaxFiles(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRemainingBytes(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRemainingFiles(value);
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
proto.cs3.storage.provider.v1beta1.Quota.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storage.provider.v1beta1.Quota.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storage.provider.v1beta1.Quota} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.Quota.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cs3.types.v1beta1.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getQuotaMaxBytes();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getQuotaMaxFiles();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getRemainingBytes();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getRemainingFiles();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 1;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.storage.provider.v1beta1.Quota.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, proto.cs3.types.v1beta1.Opaque, 1));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.Quota} returns this
*/
proto.cs3.storage.provider.v1beta1.Quota.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.Quota} returns this
 */
proto.cs3.storage.provider.v1beta1.Quota.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.Quota.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 quota_max_bytes = 2;
 * @return {number}
 */
proto.cs3.storage.provider.v1beta1.Quota.prototype.getQuotaMaxBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.cs3.storage.provider.v1beta1.Quota} returns this
 */
proto.cs3.storage.provider.v1beta1.Quota.prototype.setQuotaMaxBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 quota_max_files = 3;
 * @return {number}
 */
proto.cs3.storage.provider.v1beta1.Quota.prototype.getQuotaMaxFiles = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.cs3.storage.provider.v1beta1.Quota} returns this
 */
proto.cs3.storage.provider.v1beta1.Quota.prototype.setQuotaMaxFiles = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 remaining_bytes = 4;
 * @return {number}
 */
proto.cs3.storage.provider.v1beta1.Quota.prototype.getRemainingBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.cs3.storage.provider.v1beta1.Quota} returns this
 */
proto.cs3.storage.provider.v1beta1.Quota.prototype.setRemainingBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 remaining_files = 5;
 * @return {number}
 */
proto.cs3.storage.provider.v1beta1.Quota.prototype.getRemainingFiles = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.cs3.storage.provider.v1beta1.Quota} returns this
 */
proto.cs3.storage.provider.v1beta1.Quota.prototype.setRemainingFiles = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


