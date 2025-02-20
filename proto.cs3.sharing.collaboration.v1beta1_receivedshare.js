// source: cs3/sharing/collaboration/v1beta1/resources.proto
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

goog.provide('proto.cs3.sharing.collaboration.v1beta1.ReceivedShare');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.cs3.sharing.collaboration.v1beta1.Share');
goog.require('proto.cs3.storage.provider.v1beta1.Reference');

goog.forwardDeclare('proto.cs3.sharing.collaboration.v1beta1.ShareState');
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
proto.cs3.sharing.collaboration.v1beta1.ReceivedShare = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.sharing.collaboration.v1beta1.ReceivedShare, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.sharing.collaboration.v1beta1.ReceivedShare.displayName = 'proto.cs3.sharing.collaboration.v1beta1.ReceivedShare';
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
proto.cs3.sharing.collaboration.v1beta1.ReceivedShare.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.sharing.collaboration.v1beta1.ReceivedShare.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.sharing.collaboration.v1beta1.ReceivedShare} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.sharing.collaboration.v1beta1.ReceivedShare.toObject = function(includeInstance, msg) {
  var f, obj = {
    share: (f = msg.getShare()) && proto.cs3.sharing.collaboration.v1beta1.Share.toObject(includeInstance, f),
    state: jspb.Message.getFieldWithDefault(msg, 2, 0),
    mountPoint: (f = msg.getMountPoint()) && proto.cs3.storage.provider.v1beta1.Reference.toObject(includeInstance, f),
    hidden: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    alias: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.cs3.sharing.collaboration.v1beta1.ReceivedShare}
 */
proto.cs3.sharing.collaboration.v1beta1.ReceivedShare.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.sharing.collaboration.v1beta1.ReceivedShare;
  return proto.cs3.sharing.collaboration.v1beta1.ReceivedShare.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.sharing.collaboration.v1beta1.ReceivedShare} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.sharing.collaboration.v1beta1.ReceivedShare}
 */
proto.cs3.sharing.collaboration.v1beta1.ReceivedShare.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cs3.sharing.collaboration.v1beta1.Share;
      reader.readMessage(value,proto.cs3.sharing.collaboration.v1beta1.Share.deserializeBinaryFromReader);
      msg.setShare(value);
      break;
    case 2:
      var value = /** @type {!proto.cs3.sharing.collaboration.v1beta1.ShareState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 3:
      var value = new proto.cs3.storage.provider.v1beta1.Reference;
      reader.readMessage(value,proto.cs3.storage.provider.v1beta1.Reference.deserializeBinaryFromReader);
      msg.setMountPoint(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHidden(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAlias(value);
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
proto.cs3.sharing.collaboration.v1beta1.ReceivedShare.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.sharing.collaboration.v1beta1.ReceivedShare.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.sharing.collaboration.v1beta1.ReceivedShare} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.sharing.collaboration.v1beta1.ReceivedShare.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShare();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cs3.sharing.collaboration.v1beta1.Share.serializeBinaryToWriter
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getMountPoint();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.cs3.storage.provider.v1beta1.Reference.serializeBinaryToWriter
    );
  }
  f = message.getHidden();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getAlias();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional Share share = 1;
 * @return {?proto.cs3.sharing.collaboration.v1beta1.Share}
 */
proto.cs3.sharing.collaboration.v1beta1.ReceivedShare.prototype.getShare = function() {
  return /** @type{?proto.cs3.sharing.collaboration.v1beta1.Share} */ (
    jspb.Message.getWrapperField(this, proto.cs3.sharing.collaboration.v1beta1.Share, 1));
};


/**
 * @param {?proto.cs3.sharing.collaboration.v1beta1.Share|undefined} value
 * @return {!proto.cs3.sharing.collaboration.v1beta1.ReceivedShare} returns this
*/
proto.cs3.sharing.collaboration.v1beta1.ReceivedShare.prototype.setShare = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.sharing.collaboration.v1beta1.ReceivedShare} returns this
 */
proto.cs3.sharing.collaboration.v1beta1.ReceivedShare.prototype.clearShare = function() {
  return this.setShare(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.sharing.collaboration.v1beta1.ReceivedShare.prototype.hasShare = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ShareState state = 2;
 * @return {!proto.cs3.sharing.collaboration.v1beta1.ShareState}
 */
proto.cs3.sharing.collaboration.v1beta1.ReceivedShare.prototype.getState = function() {
  return /** @type {!proto.cs3.sharing.collaboration.v1beta1.ShareState} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.cs3.sharing.collaboration.v1beta1.ShareState} value
 * @return {!proto.cs3.sharing.collaboration.v1beta1.ReceivedShare} returns this
 */
proto.cs3.sharing.collaboration.v1beta1.ReceivedShare.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional cs3.storage.provider.v1beta1.Reference mount_point = 3;
 * @return {?proto.cs3.storage.provider.v1beta1.Reference}
 */
proto.cs3.sharing.collaboration.v1beta1.ReceivedShare.prototype.getMountPoint = function() {
  return /** @type{?proto.cs3.storage.provider.v1beta1.Reference} */ (
    jspb.Message.getWrapperField(this, proto.cs3.storage.provider.v1beta1.Reference, 3));
};


/**
 * @param {?proto.cs3.storage.provider.v1beta1.Reference|undefined} value
 * @return {!proto.cs3.sharing.collaboration.v1beta1.ReceivedShare} returns this
*/
proto.cs3.sharing.collaboration.v1beta1.ReceivedShare.prototype.setMountPoint = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.sharing.collaboration.v1beta1.ReceivedShare} returns this
 */
proto.cs3.sharing.collaboration.v1beta1.ReceivedShare.prototype.clearMountPoint = function() {
  return this.setMountPoint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.sharing.collaboration.v1beta1.ReceivedShare.prototype.hasMountPoint = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool hidden = 4;
 * @return {boolean}
 */
proto.cs3.sharing.collaboration.v1beta1.ReceivedShare.prototype.getHidden = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cs3.sharing.collaboration.v1beta1.ReceivedShare} returns this
 */
proto.cs3.sharing.collaboration.v1beta1.ReceivedShare.prototype.setHidden = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional string alias = 5;
 * @return {string}
 */
proto.cs3.sharing.collaboration.v1beta1.ReceivedShare.prototype.getAlias = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.cs3.sharing.collaboration.v1beta1.ReceivedShare} returns this
 */
proto.cs3.sharing.collaboration.v1beta1.ReceivedShare.prototype.setAlias = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


