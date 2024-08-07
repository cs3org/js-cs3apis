// source: cs3/gateway/v1beta1/resources.proto
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

goog.provide('proto.cs3.gateway.v1beta1.PublicShareResourceInfo');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.cs3.sharing.link.v1beta1.PublicShare');
goog.require('proto.cs3.storage.provider.v1beta1.ResourceInfo');
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
proto.cs3.gateway.v1beta1.PublicShareResourceInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.gateway.v1beta1.PublicShareResourceInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.gateway.v1beta1.PublicShareResourceInfo.displayName = 'proto.cs3.gateway.v1beta1.PublicShareResourceInfo';
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
proto.cs3.gateway.v1beta1.PublicShareResourceInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.gateway.v1beta1.PublicShareResourceInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.gateway.v1beta1.PublicShareResourceInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.gateway.v1beta1.PublicShareResourceInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && proto.cs3.types.v1beta1.Opaque.toObject(includeInstance, f),
    publicShare: (f = msg.getPublicShare()) && proto.cs3.sharing.link.v1beta1.PublicShare.toObject(includeInstance, f),
    resourceInfo: (f = msg.getResourceInfo()) && proto.cs3.storage.provider.v1beta1.ResourceInfo.toObject(includeInstance, f)
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
 * @return {!proto.cs3.gateway.v1beta1.PublicShareResourceInfo}
 */
proto.cs3.gateway.v1beta1.PublicShareResourceInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.gateway.v1beta1.PublicShareResourceInfo;
  return proto.cs3.gateway.v1beta1.PublicShareResourceInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.gateway.v1beta1.PublicShareResourceInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.gateway.v1beta1.PublicShareResourceInfo}
 */
proto.cs3.gateway.v1beta1.PublicShareResourceInfo.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.cs3.sharing.link.v1beta1.PublicShare;
      reader.readMessage(value,proto.cs3.sharing.link.v1beta1.PublicShare.deserializeBinaryFromReader);
      msg.setPublicShare(value);
      break;
    case 3:
      var value = new proto.cs3.storage.provider.v1beta1.ResourceInfo;
      reader.readMessage(value,proto.cs3.storage.provider.v1beta1.ResourceInfo.deserializeBinaryFromReader);
      msg.setResourceInfo(value);
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
proto.cs3.gateway.v1beta1.PublicShareResourceInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.gateway.v1beta1.PublicShareResourceInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.gateway.v1beta1.PublicShareResourceInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.gateway.v1beta1.PublicShareResourceInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cs3.types.v1beta1.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getPublicShare();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.cs3.sharing.link.v1beta1.PublicShare.serializeBinaryToWriter
    );
  }
  f = message.getResourceInfo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.cs3.storage.provider.v1beta1.ResourceInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 1;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.gateway.v1beta1.PublicShareResourceInfo.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, proto.cs3.types.v1beta1.Opaque, 1));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.gateway.v1beta1.PublicShareResourceInfo} returns this
*/
proto.cs3.gateway.v1beta1.PublicShareResourceInfo.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.gateway.v1beta1.PublicShareResourceInfo} returns this
 */
proto.cs3.gateway.v1beta1.PublicShareResourceInfo.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.gateway.v1beta1.PublicShareResourceInfo.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.sharing.link.v1beta1.PublicShare public_share = 2;
 * @return {?proto.cs3.sharing.link.v1beta1.PublicShare}
 */
proto.cs3.gateway.v1beta1.PublicShareResourceInfo.prototype.getPublicShare = function() {
  return /** @type{?proto.cs3.sharing.link.v1beta1.PublicShare} */ (
    jspb.Message.getWrapperField(this, proto.cs3.sharing.link.v1beta1.PublicShare, 2));
};


/**
 * @param {?proto.cs3.sharing.link.v1beta1.PublicShare|undefined} value
 * @return {!proto.cs3.gateway.v1beta1.PublicShareResourceInfo} returns this
*/
proto.cs3.gateway.v1beta1.PublicShareResourceInfo.prototype.setPublicShare = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.gateway.v1beta1.PublicShareResourceInfo} returns this
 */
proto.cs3.gateway.v1beta1.PublicShareResourceInfo.prototype.clearPublicShare = function() {
  return this.setPublicShare(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.gateway.v1beta1.PublicShareResourceInfo.prototype.hasPublicShare = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional cs3.storage.provider.v1beta1.ResourceInfo resource_info = 3;
 * @return {?proto.cs3.storage.provider.v1beta1.ResourceInfo}
 */
proto.cs3.gateway.v1beta1.PublicShareResourceInfo.prototype.getResourceInfo = function() {
  return /** @type{?proto.cs3.storage.provider.v1beta1.ResourceInfo} */ (
    jspb.Message.getWrapperField(this, proto.cs3.storage.provider.v1beta1.ResourceInfo, 3));
};


/**
 * @param {?proto.cs3.storage.provider.v1beta1.ResourceInfo|undefined} value
 * @return {!proto.cs3.gateway.v1beta1.PublicShareResourceInfo} returns this
*/
proto.cs3.gateway.v1beta1.PublicShareResourceInfo.prototype.setResourceInfo = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.gateway.v1beta1.PublicShareResourceInfo} returns this
 */
proto.cs3.gateway.v1beta1.PublicShareResourceInfo.prototype.clearResourceInfo = function() {
  return this.setResourceInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.gateway.v1beta1.PublicShareResourceInfo.prototype.hasResourceInfo = function() {
  return jspb.Message.getField(this, 3) != null;
};


