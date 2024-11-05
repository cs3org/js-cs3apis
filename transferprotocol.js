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

goog.provide('proto.cs3.sharing.ocm.v1beta1.TransferProtocol');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');

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
proto.cs3.sharing.ocm.v1beta1.TransferProtocol = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.sharing.ocm.v1beta1.TransferProtocol, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.sharing.ocm.v1beta1.TransferProtocol.displayName = 'proto.cs3.sharing.ocm.v1beta1.TransferProtocol';
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
proto.cs3.sharing.ocm.v1beta1.TransferProtocol.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.sharing.ocm.v1beta1.TransferProtocol.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.sharing.ocm.v1beta1.TransferProtocol} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.sharing.ocm.v1beta1.TransferProtocol.toObject = function(includeInstance, msg) {
  var f, obj = {
    sharedSecret: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sourceUri: jspb.Message.getFieldWithDefault(msg, 2, ""),
    size: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.cs3.sharing.ocm.v1beta1.TransferProtocol}
 */
proto.cs3.sharing.ocm.v1beta1.TransferProtocol.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.sharing.ocm.v1beta1.TransferProtocol;
  return proto.cs3.sharing.ocm.v1beta1.TransferProtocol.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.sharing.ocm.v1beta1.TransferProtocol} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.sharing.ocm.v1beta1.TransferProtocol}
 */
proto.cs3.sharing.ocm.v1beta1.TransferProtocol.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSharedSecret(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourceUri(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSize(value);
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
proto.cs3.sharing.ocm.v1beta1.TransferProtocol.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.sharing.ocm.v1beta1.TransferProtocol.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.sharing.ocm.v1beta1.TransferProtocol} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.sharing.ocm.v1beta1.TransferProtocol.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSharedSecret();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSourceUri();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional string shared_secret = 1;
 * @return {string}
 */
proto.cs3.sharing.ocm.v1beta1.TransferProtocol.prototype.getSharedSecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cs3.sharing.ocm.v1beta1.TransferProtocol} returns this
 */
proto.cs3.sharing.ocm.v1beta1.TransferProtocol.prototype.setSharedSecret = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string source_uri = 2;
 * @return {string}
 */
proto.cs3.sharing.ocm.v1beta1.TransferProtocol.prototype.getSourceUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cs3.sharing.ocm.v1beta1.TransferProtocol} returns this
 */
proto.cs3.sharing.ocm.v1beta1.TransferProtocol.prototype.setSourceUri = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 size = 3;
 * @return {number}
 */
proto.cs3.sharing.ocm.v1beta1.TransferProtocol.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.cs3.sharing.ocm.v1beta1.TransferProtocol} returns this
 */
proto.cs3.sharing.ocm.v1beta1.TransferProtocol.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};

