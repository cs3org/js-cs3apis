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

goog.provide('proto.cs3.sharing.ocm.v1beta1.SharePermissions');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.cs3.storage.provider.v1beta1.ResourcePermissions');

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
proto.cs3.sharing.ocm.v1beta1.SharePermissions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.sharing.ocm.v1beta1.SharePermissions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.sharing.ocm.v1beta1.SharePermissions.displayName = 'proto.cs3.sharing.ocm.v1beta1.SharePermissions';
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
proto.cs3.sharing.ocm.v1beta1.SharePermissions.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.sharing.ocm.v1beta1.SharePermissions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.sharing.ocm.v1beta1.SharePermissions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.sharing.ocm.v1beta1.SharePermissions.toObject = function(includeInstance, msg) {
  var f, obj = {
    permissions: (f = msg.getPermissions()) && proto.cs3.storage.provider.v1beta1.ResourcePermissions.toObject(includeInstance, f),
    reshare: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.cs3.sharing.ocm.v1beta1.SharePermissions}
 */
proto.cs3.sharing.ocm.v1beta1.SharePermissions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.sharing.ocm.v1beta1.SharePermissions;
  return proto.cs3.sharing.ocm.v1beta1.SharePermissions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.sharing.ocm.v1beta1.SharePermissions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.sharing.ocm.v1beta1.SharePermissions}
 */
proto.cs3.sharing.ocm.v1beta1.SharePermissions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cs3.storage.provider.v1beta1.ResourcePermissions;
      reader.readMessage(value,proto.cs3.storage.provider.v1beta1.ResourcePermissions.deserializeBinaryFromReader);
      msg.setPermissions(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReshare(value);
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
proto.cs3.sharing.ocm.v1beta1.SharePermissions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.sharing.ocm.v1beta1.SharePermissions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.sharing.ocm.v1beta1.SharePermissions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.sharing.ocm.v1beta1.SharePermissions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPermissions();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cs3.storage.provider.v1beta1.ResourcePermissions.serializeBinaryToWriter
    );
  }
  f = message.getReshare();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional cs3.storage.provider.v1beta1.ResourcePermissions permissions = 1;
 * @return {?proto.cs3.storage.provider.v1beta1.ResourcePermissions}
 */
proto.cs3.sharing.ocm.v1beta1.SharePermissions.prototype.getPermissions = function() {
  return /** @type{?proto.cs3.storage.provider.v1beta1.ResourcePermissions} */ (
    jspb.Message.getWrapperField(this, proto.cs3.storage.provider.v1beta1.ResourcePermissions, 1));
};


/**
 * @param {?proto.cs3.storage.provider.v1beta1.ResourcePermissions|undefined} value
 * @return {!proto.cs3.sharing.ocm.v1beta1.SharePermissions} returns this
*/
proto.cs3.sharing.ocm.v1beta1.SharePermissions.prototype.setPermissions = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.sharing.ocm.v1beta1.SharePermissions} returns this
 */
proto.cs3.sharing.ocm.v1beta1.SharePermissions.prototype.clearPermissions = function() {
  return this.setPermissions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.sharing.ocm.v1beta1.SharePermissions.prototype.hasPermissions = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool reshare = 2;
 * @return {boolean}
 */
proto.cs3.sharing.ocm.v1beta1.SharePermissions.prototype.getReshare = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cs3.sharing.ocm.v1beta1.SharePermissions} returns this
 */
proto.cs3.sharing.ocm.v1beta1.SharePermissions.prototype.setReshare = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


