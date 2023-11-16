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

goog.provide('proto.cs3.sharing.collaboration.v1beta1.ShareGrant');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.cs3.sharing.collaboration.v1beta1.SharePermissions');
goog.require('proto.cs3.storage.provider.v1beta1.Grantee');
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
proto.cs3.sharing.collaboration.v1beta1.ShareGrant = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.sharing.collaboration.v1beta1.ShareGrant, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.sharing.collaboration.v1beta1.ShareGrant.displayName = 'proto.cs3.sharing.collaboration.v1beta1.ShareGrant';
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
proto.cs3.sharing.collaboration.v1beta1.ShareGrant.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.sharing.collaboration.v1beta1.ShareGrant.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.sharing.collaboration.v1beta1.ShareGrant} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.sharing.collaboration.v1beta1.ShareGrant.toObject = function(includeInstance, msg) {
  var f, obj = {
    grantee: (f = msg.getGrantee()) && proto.cs3.storage.provider.v1beta1.Grantee.toObject(includeInstance, f),
    permissions: (f = msg.getPermissions()) && proto.cs3.sharing.collaboration.v1beta1.SharePermissions.toObject(includeInstance, f),
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
 * @return {!proto.cs3.sharing.collaboration.v1beta1.ShareGrant}
 */
proto.cs3.sharing.collaboration.v1beta1.ShareGrant.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.sharing.collaboration.v1beta1.ShareGrant;
  return proto.cs3.sharing.collaboration.v1beta1.ShareGrant.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.sharing.collaboration.v1beta1.ShareGrant} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.sharing.collaboration.v1beta1.ShareGrant}
 */
proto.cs3.sharing.collaboration.v1beta1.ShareGrant.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.cs3.sharing.collaboration.v1beta1.SharePermissions;
      reader.readMessage(value,proto.cs3.sharing.collaboration.v1beta1.SharePermissions.deserializeBinaryFromReader);
      msg.setPermissions(value);
      break;
    case 3:
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
proto.cs3.sharing.collaboration.v1beta1.ShareGrant.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.sharing.collaboration.v1beta1.ShareGrant.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.sharing.collaboration.v1beta1.ShareGrant} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.sharing.collaboration.v1beta1.ShareGrant.serializeBinaryToWriter = function(message, writer) {
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
      proto.cs3.sharing.collaboration.v1beta1.SharePermissions.serializeBinaryToWriter
    );
  }
  f = message.getExpiration();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.cs3.types.v1beta1.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.storage.provider.v1beta1.Grantee grantee = 1;
 * @return {?proto.cs3.storage.provider.v1beta1.Grantee}
 */
proto.cs3.sharing.collaboration.v1beta1.ShareGrant.prototype.getGrantee = function() {
  return /** @type{?proto.cs3.storage.provider.v1beta1.Grantee} */ (
    jspb.Message.getWrapperField(this, proto.cs3.storage.provider.v1beta1.Grantee, 1));
};


/**
 * @param {?proto.cs3.storage.provider.v1beta1.Grantee|undefined} value
 * @return {!proto.cs3.sharing.collaboration.v1beta1.ShareGrant} returns this
*/
proto.cs3.sharing.collaboration.v1beta1.ShareGrant.prototype.setGrantee = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.sharing.collaboration.v1beta1.ShareGrant} returns this
 */
proto.cs3.sharing.collaboration.v1beta1.ShareGrant.prototype.clearGrantee = function() {
  return this.setGrantee(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.sharing.collaboration.v1beta1.ShareGrant.prototype.hasGrantee = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SharePermissions permissions = 2;
 * @return {?proto.cs3.sharing.collaboration.v1beta1.SharePermissions}
 */
proto.cs3.sharing.collaboration.v1beta1.ShareGrant.prototype.getPermissions = function() {
  return /** @type{?proto.cs3.sharing.collaboration.v1beta1.SharePermissions} */ (
    jspb.Message.getWrapperField(this, proto.cs3.sharing.collaboration.v1beta1.SharePermissions, 2));
};


/**
 * @param {?proto.cs3.sharing.collaboration.v1beta1.SharePermissions|undefined} value
 * @return {!proto.cs3.sharing.collaboration.v1beta1.ShareGrant} returns this
*/
proto.cs3.sharing.collaboration.v1beta1.ShareGrant.prototype.setPermissions = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.sharing.collaboration.v1beta1.ShareGrant} returns this
 */
proto.cs3.sharing.collaboration.v1beta1.ShareGrant.prototype.clearPermissions = function() {
  return this.setPermissions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.sharing.collaboration.v1beta1.ShareGrant.prototype.hasPermissions = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional cs3.types.v1beta1.Timestamp expiration = 3;
 * @return {?proto.cs3.types.v1beta1.Timestamp}
 */
proto.cs3.sharing.collaboration.v1beta1.ShareGrant.prototype.getExpiration = function() {
  return /** @type{?proto.cs3.types.v1beta1.Timestamp} */ (
    jspb.Message.getWrapperField(this, proto.cs3.types.v1beta1.Timestamp, 3));
};


/**
 * @param {?proto.cs3.types.v1beta1.Timestamp|undefined} value
 * @return {!proto.cs3.sharing.collaboration.v1beta1.ShareGrant} returns this
*/
proto.cs3.sharing.collaboration.v1beta1.ShareGrant.prototype.setExpiration = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.sharing.collaboration.v1beta1.ShareGrant} returns this
 */
proto.cs3.sharing.collaboration.v1beta1.ShareGrant.prototype.clearExpiration = function() {
  return this.setExpiration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.sharing.collaboration.v1beta1.ShareGrant.prototype.hasExpiration = function() {
  return jspb.Message.getField(this, 3) != null;
};


