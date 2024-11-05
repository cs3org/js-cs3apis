// source: cs3/tx/v1beta1/tx_api.proto
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

goog.provide('proto.cs3.tx.v1beta1.ListTransfersResponse');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.cs3.rpc.v1beta1.Status');
goog.require('proto.cs3.tx.v1beta1.TxInfo');
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
proto.cs3.tx.v1beta1.ListTransfersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cs3.tx.v1beta1.ListTransfersResponse.repeatedFields_, null);
};
goog.inherits(proto.cs3.tx.v1beta1.ListTransfersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.tx.v1beta1.ListTransfersResponse.displayName = 'proto.cs3.tx.v1beta1.ListTransfersResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cs3.tx.v1beta1.ListTransfersResponse.repeatedFields_ = [2];



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
proto.cs3.tx.v1beta1.ListTransfersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.tx.v1beta1.ListTransfersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.tx.v1beta1.ListTransfersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.tx.v1beta1.ListTransfersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && proto.cs3.rpc.v1beta1.Status.toObject(includeInstance, f),
    transfersList: jspb.Message.toObjectList(msg.getTransfersList(),
    proto.cs3.tx.v1beta1.TxInfo.toObject, includeInstance),
    opaque: (f = msg.getOpaque()) && proto.cs3.types.v1beta1.Opaque.toObject(includeInstance, f)
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
 * @return {!proto.cs3.tx.v1beta1.ListTransfersResponse}
 */
proto.cs3.tx.v1beta1.ListTransfersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.tx.v1beta1.ListTransfersResponse;
  return proto.cs3.tx.v1beta1.ListTransfersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.tx.v1beta1.ListTransfersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.tx.v1beta1.ListTransfersResponse}
 */
proto.cs3.tx.v1beta1.ListTransfersResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.cs3.tx.v1beta1.TxInfo;
      reader.readMessage(value,proto.cs3.tx.v1beta1.TxInfo.deserializeBinaryFromReader);
      msg.addTransfers(value);
      break;
    case 3:
      var value = new proto.cs3.types.v1beta1.Opaque;
      reader.readMessage(value,proto.cs3.types.v1beta1.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
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
proto.cs3.tx.v1beta1.ListTransfersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.tx.v1beta1.ListTransfersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.tx.v1beta1.ListTransfersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.tx.v1beta1.ListTransfersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cs3.rpc.v1beta1.Status.serializeBinaryToWriter
    );
  }
  f = message.getTransfersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.cs3.tx.v1beta1.TxInfo.serializeBinaryToWriter
    );
  }
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.cs3.types.v1beta1.Opaque.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.rpc.v1beta1.Status status = 1;
 * @return {?proto.cs3.rpc.v1beta1.Status}
 */
proto.cs3.tx.v1beta1.ListTransfersResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.v1beta1.Status} */ (
    jspb.Message.getWrapperField(this, proto.cs3.rpc.v1beta1.Status, 1));
};


/**
 * @param {?proto.cs3.rpc.v1beta1.Status|undefined} value
 * @return {!proto.cs3.tx.v1beta1.ListTransfersResponse} returns this
*/
proto.cs3.tx.v1beta1.ListTransfersResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.tx.v1beta1.ListTransfersResponse} returns this
 */
proto.cs3.tx.v1beta1.ListTransfersResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.tx.v1beta1.ListTransfersResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated TxInfo transfers = 2;
 * @return {!Array<!proto.cs3.tx.v1beta1.TxInfo>}
 */
proto.cs3.tx.v1beta1.ListTransfersResponse.prototype.getTransfersList = function() {
  return /** @type{!Array<!proto.cs3.tx.v1beta1.TxInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cs3.tx.v1beta1.TxInfo, 2));
};


/**
 * @param {!Array<!proto.cs3.tx.v1beta1.TxInfo>} value
 * @return {!proto.cs3.tx.v1beta1.ListTransfersResponse} returns this
*/
proto.cs3.tx.v1beta1.ListTransfersResponse.prototype.setTransfersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.cs3.tx.v1beta1.TxInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cs3.tx.v1beta1.TxInfo}
 */
proto.cs3.tx.v1beta1.ListTransfersResponse.prototype.addTransfers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.cs3.tx.v1beta1.TxInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cs3.tx.v1beta1.ListTransfersResponse} returns this
 */
proto.cs3.tx.v1beta1.ListTransfersResponse.prototype.clearTransfersList = function() {
  return this.setTransfersList([]);
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 3;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.tx.v1beta1.ListTransfersResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, proto.cs3.types.v1beta1.Opaque, 3));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.tx.v1beta1.ListTransfersResponse} returns this
*/
proto.cs3.tx.v1beta1.ListTransfersResponse.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.tx.v1beta1.ListTransfersResponse} returns this
 */
proto.cs3.tx.v1beta1.ListTransfersResponse.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.tx.v1beta1.ListTransfersResponse.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 3) != null;
};

