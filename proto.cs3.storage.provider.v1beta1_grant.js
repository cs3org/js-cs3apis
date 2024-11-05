// source: cs3/storage/provider/v1beta1/resources.proto
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

goog.provide('proto.cs3.storage.provider.v1beta1.Grant');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.cs3.identity.user.v1beta1.UserId');
goog.require('proto.cs3.storage.provider.v1beta1.Grantee');
goog.require('proto.cs3.storage.provider.v1beta1.ResourcePermissions');
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
proto.cs3.storage.provider.v1beta1.Grant = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storage.provider.v1beta1.Grant, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storage.provider.v1beta1.Grant.displayName = 'proto.cs3.storage.provider.v1beta1.Grant';
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
proto.cs3.storage.provider.v1beta1.Grant.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storage.provider.v1beta1.Grant.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storage.provider.v1beta1.Grant} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.Grant.toObject = function(includeInstance, msg) {
  var f, obj = {
    grantee: (f = msg.getGrantee()) && proto.cs3.storage.provider.v1beta1.Grantee.toObject(includeInstance, f),
    permissions: (f = msg.getPermissions()) && proto.cs3.storage.provider.v1beta1.ResourcePermissions.toObject(includeInstance, f),
    creator: (f = msg.getCreator()) && proto.cs3.identity.user.v1beta1.UserId.toObject(includeInstance, f),
    expiration: (f = msg.getExpiration()) && proto.cs3.types.v1beta1.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.cs3.storage.provider.v1beta1.Grant}
 */
proto.cs3.storage.provider.v1beta1.Grant.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storage.provider.v1beta1.Grant;
  return proto.cs3.storage.provider.v1beta1.Grant.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storage.provider.v1beta1.Grant} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storage.provider.v1beta1.Grant}
 */
proto.cs3.storage.provider.v1beta1.Grant.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cs3.storage.provider.v1beta1.Grantee;
      reader.readMessage(value,proto.cs3.storage.provider.v1beta1.Grantee.deserializeBinaryFromReader);
      msg.setGrantee(value);
      break;
    case 2:
      var value = new proto.cs3.storage.provider.v1beta1.ResourcePermissions;
      reader.readMessage(value,proto.cs3.storage.provider.v1beta1.ResourcePermissions.deserializeBinaryFromReader);
      msg.setPermissions(value);
      break;
    case 3:
      var value = new proto.cs3.identity.user.v1beta1.UserId;
      reader.readMessage(value,proto.cs3.identity.user.v1beta1.UserId.deserializeBinaryFromReader);
      msg.setCreator(value);
      break;
    case 4:
      var value = new proto.cs3.types.v1beta1.Timestamp;
      reader.readMessage(value,proto.cs3.types.v1beta1.Timestamp.deserializeBinaryFromReader);
      msg.setExpiration(value);
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
proto.cs3.storage.provider.v1beta1.Grant.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storage.provider.v1beta1.Grant.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storage.provider.v1beta1.Grant} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.Grant.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGrantee();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cs3.storage.provider.v1beta1.Grantee.serializeBinaryToWriter
    );
  }
  f = message.getPermissions();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.cs3.storage.provider.v1beta1.ResourcePermissions.serializeBinaryToWriter
    );
  }
  f = message.getCreator();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.cs3.identity.user.v1beta1.UserId.serializeBinaryToWriter
    );
  }
  f = message.getExpiration();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.cs3.types.v1beta1.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional Grantee grantee = 1;
 * @return {?proto.cs3.storage.provider.v1beta1.Grantee}
 */
proto.cs3.storage.provider.v1beta1.Grant.prototype.getGrantee = function() {
  return /** @type{?proto.cs3.storage.provider.v1beta1.Grantee} */ (
    jspb.Message.getWrapperField(this, proto.cs3.storage.provider.v1beta1.Grantee, 1));
};


/**
 * @param {?proto.cs3.storage.provider.v1beta1.Grantee|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.Grant} returns this
*/
proto.cs3.storage.provider.v1beta1.Grant.prototype.setGrantee = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.Grant} returns this
 */
proto.cs3.storage.provider.v1beta1.Grant.prototype.clearGrantee = function() {
  return this.setGrantee(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.Grant.prototype.hasGrantee = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ResourcePermissions permissions = 2;
 * @return {?proto.cs3.storage.provider.v1beta1.ResourcePermissions}
 */
proto.cs3.storage.provider.v1beta1.Grant.prototype.getPermissions = function() {
  return /** @type{?proto.cs3.storage.provider.v1beta1.ResourcePermissions} */ (
    jspb.Message.getWrapperField(this, proto.cs3.storage.provider.v1beta1.ResourcePermissions, 2));
};


/**
 * @param {?proto.cs3.storage.provider.v1beta1.ResourcePermissions|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.Grant} returns this
*/
proto.cs3.storage.provider.v1beta1.Grant.prototype.setPermissions = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.Grant} returns this
 */
proto.cs3.storage.provider.v1beta1.Grant.prototype.clearPermissions = function() {
  return this.setPermissions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.Grant.prototype.hasPermissions = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional cs3.identity.user.v1beta1.UserId creator = 3;
 * @return {?proto.cs3.identity.user.v1beta1.UserId}
 */
proto.cs3.storage.provider.v1beta1.Grant.prototype.getCreator = function() {
  return /** @type{?proto.cs3.identity.user.v1beta1.UserId} */ (
    jspb.Message.getWrapperField(this, proto.cs3.identity.user.v1beta1.UserId, 3));
};


/**
 * @param {?proto.cs3.identity.user.v1beta1.UserId|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.Grant} returns this
*/
proto.cs3.storage.provider.v1beta1.Grant.prototype.setCreator = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.Grant} returns this
 */
proto.cs3.storage.provider.v1beta1.Grant.prototype.clearCreator = function() {
  return this.setCreator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.Grant.prototype.hasCreator = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional cs3.types.v1beta1.Timestamp expiration = 4;
 * @return {?proto.cs3.types.v1beta1.Timestamp}
 */
proto.cs3.storage.provider.v1beta1.Grant.prototype.getExpiration = function() {
  return /** @type{?proto.cs3.types.v1beta1.Timestamp} */ (
    jspb.Message.getWrapperField(this, proto.cs3.types.v1beta1.Timestamp, 4));
};


/**
 * @param {?proto.cs3.types.v1beta1.Timestamp|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.Grant} returns this
*/
proto.cs3.storage.provider.v1beta1.Grant.prototype.setExpiration = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.Grant} returns this
 */
proto.cs3.storage.provider.v1beta1.Grant.prototype.clearExpiration = function() {
  return this.setExpiration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.Grant.prototype.hasExpiration = function() {
  return jspb.Message.getField(this, 4) != null;
};

