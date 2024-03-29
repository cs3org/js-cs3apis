// source: cs3/storage/provider/v1beta1/provider_api.proto
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

goog.provide('proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest');
goog.provide('proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.OptionsCase');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.cs3.storage.provider.v1beta1.Reference');
goog.require('proto.cs3.types.v1beta1.Opaque');
goog.require('proto.cs3.types.v1beta1.Timestamp');

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
proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.oneofGroups_);
};
goog.inherits(proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.displayName = 'proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.oneofGroups_ = [[3,4,6]];

/**
 * @enum {number}
 */
proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.OptionsCase = {
  OPTIONS_NOT_SET: 0,
  IF_NOT_EXIST: 3,
  IF_MATCH: 4,
  IF_UNMODIFIED_SINCE: 6
};

/**
 * @return {proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.OptionsCase}
 */
proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.prototype.getOptionsCase = function() {
  return /** @type {proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.OptionsCase} */(jspb.Message.computeOneofCase(this, proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.oneofGroups_[0]));
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
proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && proto.cs3.types.v1beta1.Opaque.toObject(includeInstance, f),
    ref: (f = msg.getRef()) && proto.cs3.storage.provider.v1beta1.Reference.toObject(includeInstance, f),
    ifNotExist: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    ifMatch: jspb.Message.getFieldWithDefault(msg, 4, ""),
    ifUnmodifiedSince: (f = msg.getIfUnmodifiedSince()) && proto.cs3.types.v1beta1.Timestamp.toObject(includeInstance, f),
    lockId: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest}
 */
proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest;
  return proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest}
 */
proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.cs3.storage.provider.v1beta1.Reference;
      reader.readMessage(value,proto.cs3.storage.provider.v1beta1.Reference.deserializeBinaryFromReader);
      msg.setRef(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIfNotExist(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setIfMatch(value);
      break;
    case 6:
      var value = new proto.cs3.types.v1beta1.Timestamp;
      reader.readMessage(value,proto.cs3.types.v1beta1.Timestamp.deserializeBinaryFromReader);
      msg.setIfUnmodifiedSince(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setLockId(value);
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
proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cs3.types.v1beta1.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getRef();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.cs3.storage.provider.v1beta1.Reference.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getIfUnmodifiedSince();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.cs3.types.v1beta1.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getLockId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 1;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, proto.cs3.types.v1beta1.Opaque, 1));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest} returns this
*/
proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Reference ref = 2;
 * @return {?proto.cs3.storage.provider.v1beta1.Reference}
 */
proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.prototype.getRef = function() {
  return /** @type{?proto.cs3.storage.provider.v1beta1.Reference} */ (
    jspb.Message.getWrapperField(this, proto.cs3.storage.provider.v1beta1.Reference, 2));
};


/**
 * @param {?proto.cs3.storage.provider.v1beta1.Reference|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest} returns this
*/
proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.prototype.setRef = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.prototype.clearRef = function() {
  return this.setRef(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.prototype.hasRef = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool if_not_exist = 3;
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.prototype.getIfNotExist = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.prototype.setIfNotExist = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.prototype.clearIfNotExist = function() {
  return jspb.Message.setOneofField(this, 3, proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.prototype.hasIfNotExist = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string if_match = 4;
 * @return {string}
 */
proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.prototype.getIfMatch = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.prototype.setIfMatch = function(value) {
  return jspb.Message.setOneofField(this, 4, proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.prototype.clearIfMatch = function() {
  return jspb.Message.setOneofField(this, 4, proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.prototype.hasIfMatch = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional cs3.types.v1beta1.Timestamp if_unmodified_since = 6;
 * @return {?proto.cs3.types.v1beta1.Timestamp}
 */
proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.prototype.getIfUnmodifiedSince = function() {
  return /** @type{?proto.cs3.types.v1beta1.Timestamp} */ (
    jspb.Message.getWrapperField(this, proto.cs3.types.v1beta1.Timestamp, 6));
};


/**
 * @param {?proto.cs3.types.v1beta1.Timestamp|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest} returns this
*/
proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.prototype.setIfUnmodifiedSince = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.prototype.clearIfUnmodifiedSince = function() {
  return this.setIfUnmodifiedSince(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.prototype.hasIfUnmodifiedSince = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string lock_id = 5;
 * @return {string}
 */
proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.prototype.getLockId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.prototype.setLockId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


