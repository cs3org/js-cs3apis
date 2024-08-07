// source: cs3/gateway/v1beta1/gateway_api.proto
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

goog.provide('proto.cs3.gateway.v1beta1.ListExistingSharesResponse');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.cs3.gateway.v1beta1.ShareResourceInfo');
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
proto.cs3.gateway.v1beta1.ListExistingSharesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cs3.gateway.v1beta1.ListExistingSharesResponse.repeatedFields_, null);
};
goog.inherits(proto.cs3.gateway.v1beta1.ListExistingSharesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.gateway.v1beta1.ListExistingSharesResponse.displayName = 'proto.cs3.gateway.v1beta1.ListExistingSharesResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cs3.gateway.v1beta1.ListExistingSharesResponse.repeatedFields_ = [3];



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
proto.cs3.gateway.v1beta1.ListExistingSharesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.gateway.v1beta1.ListExistingSharesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.gateway.v1beta1.ListExistingSharesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.gateway.v1beta1.ListExistingSharesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && proto.cs3.rpc.v1beta1.Status.toObject(includeInstance, f),
    opaque: (f = msg.getOpaque()) && proto.cs3.types.v1beta1.Opaque.toObject(includeInstance, f),
    shareInfosList: jspb.Message.toObjectList(msg.getShareInfosList(),
    proto.cs3.gateway.v1beta1.ShareResourceInfo.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.cs3.gateway.v1beta1.ListExistingSharesResponse}
 */
proto.cs3.gateway.v1beta1.ListExistingSharesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.gateway.v1beta1.ListExistingSharesResponse;
  return proto.cs3.gateway.v1beta1.ListExistingSharesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.gateway.v1beta1.ListExistingSharesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.gateway.v1beta1.ListExistingSharesResponse}
 */
proto.cs3.gateway.v1beta1.ListExistingSharesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.cs3.gateway.v1beta1.ShareResourceInfo;
      reader.readMessage(value,proto.cs3.gateway.v1beta1.ShareResourceInfo.deserializeBinaryFromReader);
      msg.addShareInfos(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
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
proto.cs3.gateway.v1beta1.ListExistingSharesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.gateway.v1beta1.ListExistingSharesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.gateway.v1beta1.ListExistingSharesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.gateway.v1beta1.ListExistingSharesResponse.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getShareInfosList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.cs3.gateway.v1beta1.ShareResourceInfo.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional cs3.rpc.v1beta1.Status status = 1;
 * @return {?proto.cs3.rpc.v1beta1.Status}
 */
proto.cs3.gateway.v1beta1.ListExistingSharesResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.v1beta1.Status} */ (
    jspb.Message.getWrapperField(this, proto.cs3.rpc.v1beta1.Status, 1));
};


/**
 * @param {?proto.cs3.rpc.v1beta1.Status|undefined} value
 * @return {!proto.cs3.gateway.v1beta1.ListExistingSharesResponse} returns this
*/
proto.cs3.gateway.v1beta1.ListExistingSharesResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.gateway.v1beta1.ListExistingSharesResponse} returns this
 */
proto.cs3.gateway.v1beta1.ListExistingSharesResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.gateway.v1beta1.ListExistingSharesResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 2;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.gateway.v1beta1.ListExistingSharesResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, proto.cs3.types.v1beta1.Opaque, 2));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.gateway.v1beta1.ListExistingSharesResponse} returns this
*/
proto.cs3.gateway.v1beta1.ListExistingSharesResponse.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.gateway.v1beta1.ListExistingSharesResponse} returns this
 */
proto.cs3.gateway.v1beta1.ListExistingSharesResponse.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.gateway.v1beta1.ListExistingSharesResponse.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated ShareResourceInfo share_infos = 3;
 * @return {!Array<!proto.cs3.gateway.v1beta1.ShareResourceInfo>}
 */
proto.cs3.gateway.v1beta1.ListExistingSharesResponse.prototype.getShareInfosList = function() {
  return /** @type{!Array<!proto.cs3.gateway.v1beta1.ShareResourceInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cs3.gateway.v1beta1.ShareResourceInfo, 3));
};


/**
 * @param {!Array<!proto.cs3.gateway.v1beta1.ShareResourceInfo>} value
 * @return {!proto.cs3.gateway.v1beta1.ListExistingSharesResponse} returns this
*/
proto.cs3.gateway.v1beta1.ListExistingSharesResponse.prototype.setShareInfosList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.cs3.gateway.v1beta1.ShareResourceInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cs3.gateway.v1beta1.ShareResourceInfo}
 */
proto.cs3.gateway.v1beta1.ListExistingSharesResponse.prototype.addShareInfos = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.cs3.gateway.v1beta1.ShareResourceInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cs3.gateway.v1beta1.ListExistingSharesResponse} returns this
 */
proto.cs3.gateway.v1beta1.ListExistingSharesResponse.prototype.clearShareInfosList = function() {
  return this.setShareInfosList([]);
};


/**
 * optional string next_page_token = 4;
 * @return {string}
 */
proto.cs3.gateway.v1beta1.ListExistingSharesResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.cs3.gateway.v1beta1.ListExistingSharesResponse} returns this
 */
proto.cs3.gateway.v1beta1.ListExistingSharesResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


