// source: cs3/sharing/ocm/v1beta1/resources.proto
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

goog.provide('proto.cs3.sharing.ocm.v1beta1.ShareReference');
goog.provide('proto.cs3.sharing.ocm.v1beta1.ShareReference.SpecCase');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.cs3.sharing.ocm.v1beta1.ShareId');
goog.require('proto.cs3.sharing.ocm.v1beta1.ShareKey');

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
proto.cs3.sharing.ocm.v1beta1.ShareReference = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.cs3.sharing.ocm.v1beta1.ShareReference.oneofGroups_);
};
goog.inherits(proto.cs3.sharing.ocm.v1beta1.ShareReference, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.sharing.ocm.v1beta1.ShareReference.displayName = 'proto.cs3.sharing.ocm.v1beta1.ShareReference';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.cs3.sharing.ocm.v1beta1.ShareReference.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.cs3.sharing.ocm.v1beta1.ShareReference.SpecCase = {
  SPEC_NOT_SET: 0,
  ID: 1,
  KEY: 2,
  TOKEN: 3
};

/**
 * @return {proto.cs3.sharing.ocm.v1beta1.ShareReference.SpecCase}
 */
proto.cs3.sharing.ocm.v1beta1.ShareReference.prototype.getSpecCase = function() {
  return /** @type {proto.cs3.sharing.ocm.v1beta1.ShareReference.SpecCase} */(jspb.Message.computeOneofCase(this, proto.cs3.sharing.ocm.v1beta1.ShareReference.oneofGroups_[0]));
};



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
proto.cs3.sharing.ocm.v1beta1.ShareReference.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.sharing.ocm.v1beta1.ShareReference.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.sharing.ocm.v1beta1.ShareReference} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.sharing.ocm.v1beta1.ShareReference.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && proto.cs3.sharing.ocm.v1beta1.ShareId.toObject(includeInstance, f),
    key: (f = msg.getKey()) && proto.cs3.sharing.ocm.v1beta1.ShareKey.toObject(includeInstance, f),
    token: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.cs3.sharing.ocm.v1beta1.ShareReference}
 */
proto.cs3.sharing.ocm.v1beta1.ShareReference.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.sharing.ocm.v1beta1.ShareReference;
  return proto.cs3.sharing.ocm.v1beta1.ShareReference.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.sharing.ocm.v1beta1.ShareReference} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.sharing.ocm.v1beta1.ShareReference}
 */
proto.cs3.sharing.ocm.v1beta1.ShareReference.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cs3.sharing.ocm.v1beta1.ShareId;
      reader.readMessage(value,proto.cs3.sharing.ocm.v1beta1.ShareId.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 2:
      var value = new proto.cs3.sharing.ocm.v1beta1.ShareKey;
      reader.readMessage(value,proto.cs3.sharing.ocm.v1beta1.ShareKey.deserializeBinaryFromReader);
      msg.setKey(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
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
proto.cs3.sharing.ocm.v1beta1.ShareReference.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.sharing.ocm.v1beta1.ShareReference.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.sharing.ocm.v1beta1.ShareReference} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.sharing.ocm.v1beta1.ShareReference.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cs3.sharing.ocm.v1beta1.ShareId.serializeBinaryToWriter
    );
  }
  f = message.getKey();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.cs3.sharing.ocm.v1beta1.ShareKey.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional ShareId id = 1;
 * @return {?proto.cs3.sharing.ocm.v1beta1.ShareId}
 */
proto.cs3.sharing.ocm.v1beta1.ShareReference.prototype.getId = function() {
  return /** @type{?proto.cs3.sharing.ocm.v1beta1.ShareId} */ (
    jspb.Message.getWrapperField(this, proto.cs3.sharing.ocm.v1beta1.ShareId, 1));
};


/**
 * @param {?proto.cs3.sharing.ocm.v1beta1.ShareId|undefined} value
 * @return {!proto.cs3.sharing.ocm.v1beta1.ShareReference} returns this
*/
proto.cs3.sharing.ocm.v1beta1.ShareReference.prototype.setId = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.cs3.sharing.ocm.v1beta1.ShareReference.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.sharing.ocm.v1beta1.ShareReference} returns this
 */
proto.cs3.sharing.ocm.v1beta1.ShareReference.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.sharing.ocm.v1beta1.ShareReference.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ShareKey key = 2;
 * @return {?proto.cs3.sharing.ocm.v1beta1.ShareKey}
 */
proto.cs3.sharing.ocm.v1beta1.ShareReference.prototype.getKey = function() {
  return /** @type{?proto.cs3.sharing.ocm.v1beta1.ShareKey} */ (
    jspb.Message.getWrapperField(this, proto.cs3.sharing.ocm.v1beta1.ShareKey, 2));
};


/**
 * @param {?proto.cs3.sharing.ocm.v1beta1.ShareKey|undefined} value
 * @return {!proto.cs3.sharing.ocm.v1beta1.ShareReference} returns this
*/
proto.cs3.sharing.ocm.v1beta1.ShareReference.prototype.setKey = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.cs3.sharing.ocm.v1beta1.ShareReference.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.sharing.ocm.v1beta1.ShareReference} returns this
 */
proto.cs3.sharing.ocm.v1beta1.ShareReference.prototype.clearKey = function() {
  return this.setKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.sharing.ocm.v1beta1.ShareReference.prototype.hasKey = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string token = 3;
 * @return {string}
 */
proto.cs3.sharing.ocm.v1beta1.ShareReference.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.cs3.sharing.ocm.v1beta1.ShareReference} returns this
 */
proto.cs3.sharing.ocm.v1beta1.ShareReference.prototype.setToken = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.cs3.sharing.ocm.v1beta1.ShareReference.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cs3.sharing.ocm.v1beta1.ShareReference} returns this
 */
proto.cs3.sharing.ocm.v1beta1.ShareReference.prototype.clearToken = function() {
  return jspb.Message.setOneofField(this, 3, proto.cs3.sharing.ocm.v1beta1.ShareReference.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.sharing.ocm.v1beta1.ShareReference.prototype.hasToken = function() {
  return jspb.Message.getField(this, 3) != null;
};


