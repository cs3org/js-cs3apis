// source: cs3/ocm/provider/v1beta1/provider_api.proto
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

goog.provide('proto.cs3.ocm.provider.v1beta1.IsProviderAllowedRequest');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.cs3.ocm.provider.v1beta1.ProviderInfo');
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
proto.cs3.ocm.provider.v1beta1.IsProviderAllowedRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.ocm.provider.v1beta1.IsProviderAllowedRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.ocm.provider.v1beta1.IsProviderAllowedRequest.displayName = 'proto.cs3.ocm.provider.v1beta1.IsProviderAllowedRequest';
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
proto.cs3.ocm.provider.v1beta1.IsProviderAllowedRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.ocm.provider.v1beta1.IsProviderAllowedRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.ocm.provider.v1beta1.IsProviderAllowedRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.ocm.provider.v1beta1.IsProviderAllowedRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && proto.cs3.types.v1beta1.Opaque.toObject(includeInstance, f),
    provider: (f = msg.getProvider()) && proto.cs3.ocm.provider.v1beta1.ProviderInfo.toObject(includeInstance, f)
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
 * @return {!proto.cs3.ocm.provider.v1beta1.IsProviderAllowedRequest}
 */
proto.cs3.ocm.provider.v1beta1.IsProviderAllowedRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.ocm.provider.v1beta1.IsProviderAllowedRequest;
  return proto.cs3.ocm.provider.v1beta1.IsProviderAllowedRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.ocm.provider.v1beta1.IsProviderAllowedRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.ocm.provider.v1beta1.IsProviderAllowedRequest}
 */
proto.cs3.ocm.provider.v1beta1.IsProviderAllowedRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.cs3.ocm.provider.v1beta1.ProviderInfo;
      reader.readMessage(value,proto.cs3.ocm.provider.v1beta1.ProviderInfo.deserializeBinaryFromReader);
      msg.setProvider(value);
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
proto.cs3.ocm.provider.v1beta1.IsProviderAllowedRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.ocm.provider.v1beta1.IsProviderAllowedRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.ocm.provider.v1beta1.IsProviderAllowedRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.ocm.provider.v1beta1.IsProviderAllowedRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cs3.types.v1beta1.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getProvider();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.cs3.ocm.provider.v1beta1.ProviderInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 1;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.ocm.provider.v1beta1.IsProviderAllowedRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, proto.cs3.types.v1beta1.Opaque, 1));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.ocm.provider.v1beta1.IsProviderAllowedRequest} returns this
*/
proto.cs3.ocm.provider.v1beta1.IsProviderAllowedRequest.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.ocm.provider.v1beta1.IsProviderAllowedRequest} returns this
 */
proto.cs3.ocm.provider.v1beta1.IsProviderAllowedRequest.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.ocm.provider.v1beta1.IsProviderAllowedRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ProviderInfo provider = 2;
 * @return {?proto.cs3.ocm.provider.v1beta1.ProviderInfo}
 */
proto.cs3.ocm.provider.v1beta1.IsProviderAllowedRequest.prototype.getProvider = function() {
  return /** @type{?proto.cs3.ocm.provider.v1beta1.ProviderInfo} */ (
    jspb.Message.getWrapperField(this, proto.cs3.ocm.provider.v1beta1.ProviderInfo, 2));
};


/**
 * @param {?proto.cs3.ocm.provider.v1beta1.ProviderInfo|undefined} value
 * @return {!proto.cs3.ocm.provider.v1beta1.IsProviderAllowedRequest} returns this
*/
proto.cs3.ocm.provider.v1beta1.IsProviderAllowedRequest.prototype.setProvider = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.ocm.provider.v1beta1.IsProviderAllowedRequest} returns this
 */
proto.cs3.ocm.provider.v1beta1.IsProviderAllowedRequest.prototype.clearProvider = function() {
  return this.setProvider(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.ocm.provider.v1beta1.IsProviderAllowedRequest.prototype.hasProvider = function() {
  return jspb.Message.getField(this, 2) != null;
};

