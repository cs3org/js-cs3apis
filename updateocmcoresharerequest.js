// source: cs3/ocm/core/v1beta1/ocm_core_api.proto
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

goog.provide('proto.cs3.ocm.core.v1beta1.UpdateOCMCoreShareRequest');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.cs3.sharing.ocm.v1beta1.Protocol');
goog.require('proto.cs3.types.v1beta1.Opaque');
goog.require('proto.cs3.types.v1beta1.Timestamp');

goog.forwardDeclare('proto.cs3.sharing.ocm.v1beta1.ShareType');
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
proto.cs3.ocm.core.v1beta1.UpdateOCMCoreShareRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cs3.ocm.core.v1beta1.UpdateOCMCoreShareRequest.repeatedFields_, null);
};
goog.inherits(proto.cs3.ocm.core.v1beta1.UpdateOCMCoreShareRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.ocm.core.v1beta1.UpdateOCMCoreShareRequest.displayName = 'proto.cs3.ocm.core.v1beta1.UpdateOCMCoreShareRequest';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cs3.ocm.core.v1beta1.UpdateOCMCoreShareRequest.repeatedFields_ = [7];



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
proto.cs3.ocm.core.v1beta1.UpdateOCMCoreShareRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.ocm.core.v1beta1.UpdateOCMCoreShareRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.ocm.core.v1beta1.UpdateOCMCoreShareRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.ocm.core.v1beta1.UpdateOCMCoreShareRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && proto.cs3.types.v1beta1.Opaque.toObject(includeInstance, f),
    ocmShareId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    shareType: jspb.Message.getFieldWithDefault(msg, 5, 0),
    expiration: (f = msg.getExpiration()) && proto.cs3.types.v1beta1.Timestamp.toObject(includeInstance, f),
    protocolsList: jspb.Message.toObjectList(msg.getProtocolsList(),
    proto.cs3.sharing.ocm.v1beta1.Protocol.toObject, includeInstance)
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
 * @return {!proto.cs3.ocm.core.v1beta1.UpdateOCMCoreShareRequest}
 */
proto.cs3.ocm.core.v1beta1.UpdateOCMCoreShareRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.ocm.core.v1beta1.UpdateOCMCoreShareRequest;
  return proto.cs3.ocm.core.v1beta1.UpdateOCMCoreShareRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.ocm.core.v1beta1.UpdateOCMCoreShareRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.ocm.core.v1beta1.UpdateOCMCoreShareRequest}
 */
proto.cs3.ocm.core.v1beta1.UpdateOCMCoreShareRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setOcmShareId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = /** @type {!proto.cs3.sharing.ocm.v1beta1.ShareType} */ (reader.readEnum());
      msg.setShareType(value);
      break;
    case 6:
      var value = new proto.cs3.types.v1beta1.Timestamp;
      reader.readMessage(value,proto.cs3.types.v1beta1.Timestamp.deserializeBinaryFromReader);
      msg.setExpiration(value);
      break;
    case 7:
      var value = new proto.cs3.sharing.ocm.v1beta1.Protocol;
      reader.readMessage(value,proto.cs3.sharing.ocm.v1beta1.Protocol.deserializeBinaryFromReader);
      msg.addProtocols(value);
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
proto.cs3.ocm.core.v1beta1.UpdateOCMCoreShareRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.ocm.core.v1beta1.UpdateOCMCoreShareRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.ocm.core.v1beta1.UpdateOCMCoreShareRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.ocm.core.v1beta1.UpdateOCMCoreShareRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cs3.types.v1beta1.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getOcmShareId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getShareType();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getExpiration();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.cs3.types.v1beta1.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getProtocolsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.cs3.sharing.ocm.v1beta1.Protocol.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 1;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.ocm.core.v1beta1.UpdateOCMCoreShareRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, proto.cs3.types.v1beta1.Opaque, 1));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.ocm.core.v1beta1.UpdateOCMCoreShareRequest} returns this
*/
proto.cs3.ocm.core.v1beta1.UpdateOCMCoreShareRequest.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.ocm.core.v1beta1.UpdateOCMCoreShareRequest} returns this
 */
proto.cs3.ocm.core.v1beta1.UpdateOCMCoreShareRequest.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.ocm.core.v1beta1.UpdateOCMCoreShareRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string ocm_share_id = 2;
 * @return {string}
 */
proto.cs3.ocm.core.v1beta1.UpdateOCMCoreShareRequest.prototype.getOcmShareId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cs3.ocm.core.v1beta1.UpdateOCMCoreShareRequest} returns this
 */
proto.cs3.ocm.core.v1beta1.UpdateOCMCoreShareRequest.prototype.setOcmShareId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.cs3.ocm.core.v1beta1.UpdateOCMCoreShareRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.cs3.ocm.core.v1beta1.UpdateOCMCoreShareRequest} returns this
 */
proto.cs3.ocm.core.v1beta1.UpdateOCMCoreShareRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional cs3.sharing.ocm.v1beta1.ShareType share_type = 5;
 * @return {!proto.cs3.sharing.ocm.v1beta1.ShareType}
 */
proto.cs3.ocm.core.v1beta1.UpdateOCMCoreShareRequest.prototype.getShareType = function() {
  return /** @type {!proto.cs3.sharing.ocm.v1beta1.ShareType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.cs3.sharing.ocm.v1beta1.ShareType} value
 * @return {!proto.cs3.ocm.core.v1beta1.UpdateOCMCoreShareRequest} returns this
 */
proto.cs3.ocm.core.v1beta1.UpdateOCMCoreShareRequest.prototype.setShareType = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional cs3.types.v1beta1.Timestamp expiration = 6;
 * @return {?proto.cs3.types.v1beta1.Timestamp}
 */
proto.cs3.ocm.core.v1beta1.UpdateOCMCoreShareRequest.prototype.getExpiration = function() {
  return /** @type{?proto.cs3.types.v1beta1.Timestamp} */ (
    jspb.Message.getWrapperField(this, proto.cs3.types.v1beta1.Timestamp, 6));
};


/**
 * @param {?proto.cs3.types.v1beta1.Timestamp|undefined} value
 * @return {!proto.cs3.ocm.core.v1beta1.UpdateOCMCoreShareRequest} returns this
*/
proto.cs3.ocm.core.v1beta1.UpdateOCMCoreShareRequest.prototype.setExpiration = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.ocm.core.v1beta1.UpdateOCMCoreShareRequest} returns this
 */
proto.cs3.ocm.core.v1beta1.UpdateOCMCoreShareRequest.prototype.clearExpiration = function() {
  return this.setExpiration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.ocm.core.v1beta1.UpdateOCMCoreShareRequest.prototype.hasExpiration = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated cs3.sharing.ocm.v1beta1.Protocol protocols = 7;
 * @return {!Array<!proto.cs3.sharing.ocm.v1beta1.Protocol>}
 */
proto.cs3.ocm.core.v1beta1.UpdateOCMCoreShareRequest.prototype.getProtocolsList = function() {
  return /** @type{!Array<!proto.cs3.sharing.ocm.v1beta1.Protocol>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cs3.sharing.ocm.v1beta1.Protocol, 7));
};


/**
 * @param {!Array<!proto.cs3.sharing.ocm.v1beta1.Protocol>} value
 * @return {!proto.cs3.ocm.core.v1beta1.UpdateOCMCoreShareRequest} returns this
*/
proto.cs3.ocm.core.v1beta1.UpdateOCMCoreShareRequest.prototype.setProtocolsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.cs3.sharing.ocm.v1beta1.Protocol=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cs3.sharing.ocm.v1beta1.Protocol}
 */
proto.cs3.ocm.core.v1beta1.UpdateOCMCoreShareRequest.prototype.addProtocols = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.cs3.sharing.ocm.v1beta1.Protocol, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cs3.ocm.core.v1beta1.UpdateOCMCoreShareRequest} returns this
 */
proto.cs3.ocm.core.v1beta1.UpdateOCMCoreShareRequest.prototype.clearProtocolsList = function() {
  return this.setProtocolsList([]);
};

