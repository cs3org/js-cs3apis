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

goog.provide('proto.cs3.sharing.ocm.v1beta1.ShareKey');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.cs3.identity.user.v1beta1.UserId');
goog.require('proto.cs3.storage.provider.v1beta1.Grantee');
goog.require('proto.cs3.storage.provider.v1beta1.ResourceId');

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
proto.cs3.sharing.ocm.v1beta1.ShareKey = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.sharing.ocm.v1beta1.ShareKey, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.sharing.ocm.v1beta1.ShareKey.displayName = 'proto.cs3.sharing.ocm.v1beta1.ShareKey';
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
proto.cs3.sharing.ocm.v1beta1.ShareKey.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.sharing.ocm.v1beta1.ShareKey.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.sharing.ocm.v1beta1.ShareKey} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.sharing.ocm.v1beta1.ShareKey.toObject = function(includeInstance, msg) {
  var f, obj = {
    owner: (f = msg.getOwner()) && proto.cs3.identity.user.v1beta1.UserId.toObject(includeInstance, f),
    resourceId: (f = msg.getResourceId()) && proto.cs3.storage.provider.v1beta1.ResourceId.toObject(includeInstance, f),
    grantee: (f = msg.getGrantee()) && proto.cs3.storage.provider.v1beta1.Grantee.toObject(includeInstance, f)
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
 * @return {!proto.cs3.sharing.ocm.v1beta1.ShareKey}
 */
proto.cs3.sharing.ocm.v1beta1.ShareKey.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.sharing.ocm.v1beta1.ShareKey;
  return proto.cs3.sharing.ocm.v1beta1.ShareKey.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.sharing.ocm.v1beta1.ShareKey} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.sharing.ocm.v1beta1.ShareKey}
 */
proto.cs3.sharing.ocm.v1beta1.ShareKey.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cs3.identity.user.v1beta1.UserId;
      reader.readMessage(value,proto.cs3.identity.user.v1beta1.UserId.deserializeBinaryFromReader);
      msg.setOwner(value);
      break;
    case 2:
      var value = new proto.cs3.storage.provider.v1beta1.ResourceId;
      reader.readMessage(value,proto.cs3.storage.provider.v1beta1.ResourceId.deserializeBinaryFromReader);
      msg.setResourceId(value);
      break;
    case 3:
      var value = new proto.cs3.storage.provider.v1beta1.Grantee;
      reader.readMessage(value,proto.cs3.storage.provider.v1beta1.Grantee.deserializeBinaryFromReader);
      msg.setGrantee(value);
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
proto.cs3.sharing.ocm.v1beta1.ShareKey.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.sharing.ocm.v1beta1.ShareKey.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.sharing.ocm.v1beta1.ShareKey} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.sharing.ocm.v1beta1.ShareKey.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOwner();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cs3.identity.user.v1beta1.UserId.serializeBinaryToWriter
    );
  }
  f = message.getResourceId();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.cs3.storage.provider.v1beta1.ResourceId.serializeBinaryToWriter
    );
  }
  f = message.getGrantee();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.cs3.storage.provider.v1beta1.Grantee.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.identity.user.v1beta1.UserId owner = 1;
 * @return {?proto.cs3.identity.user.v1beta1.UserId}
 */
proto.cs3.sharing.ocm.v1beta1.ShareKey.prototype.getOwner = function() {
  return /** @type{?proto.cs3.identity.user.v1beta1.UserId} */ (
    jspb.Message.getWrapperField(this, proto.cs3.identity.user.v1beta1.UserId, 1));
};


/**
 * @param {?proto.cs3.identity.user.v1beta1.UserId|undefined} value
 * @return {!proto.cs3.sharing.ocm.v1beta1.ShareKey} returns this
*/
proto.cs3.sharing.ocm.v1beta1.ShareKey.prototype.setOwner = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.sharing.ocm.v1beta1.ShareKey} returns this
 */
proto.cs3.sharing.ocm.v1beta1.ShareKey.prototype.clearOwner = function() {
  return this.setOwner(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.sharing.ocm.v1beta1.ShareKey.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.storage.provider.v1beta1.ResourceId resource_id = 2;
 * @return {?proto.cs3.storage.provider.v1beta1.ResourceId}
 */
proto.cs3.sharing.ocm.v1beta1.ShareKey.prototype.getResourceId = function() {
  return /** @type{?proto.cs3.storage.provider.v1beta1.ResourceId} */ (
    jspb.Message.getWrapperField(this, proto.cs3.storage.provider.v1beta1.ResourceId, 2));
};


/**
 * @param {?proto.cs3.storage.provider.v1beta1.ResourceId|undefined} value
 * @return {!proto.cs3.sharing.ocm.v1beta1.ShareKey} returns this
*/
proto.cs3.sharing.ocm.v1beta1.ShareKey.prototype.setResourceId = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.sharing.ocm.v1beta1.ShareKey} returns this
 */
proto.cs3.sharing.ocm.v1beta1.ShareKey.prototype.clearResourceId = function() {
  return this.setResourceId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.sharing.ocm.v1beta1.ShareKey.prototype.hasResourceId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional cs3.storage.provider.v1beta1.Grantee grantee = 3;
 * @return {?proto.cs3.storage.provider.v1beta1.Grantee}
 */
proto.cs3.sharing.ocm.v1beta1.ShareKey.prototype.getGrantee = function() {
  return /** @type{?proto.cs3.storage.provider.v1beta1.Grantee} */ (
    jspb.Message.getWrapperField(this, proto.cs3.storage.provider.v1beta1.Grantee, 3));
};


/**
 * @param {?proto.cs3.storage.provider.v1beta1.Grantee|undefined} value
 * @return {!proto.cs3.sharing.ocm.v1beta1.ShareKey} returns this
*/
proto.cs3.sharing.ocm.v1beta1.ShareKey.prototype.setGrantee = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.sharing.ocm.v1beta1.ShareKey} returns this
 */
proto.cs3.sharing.ocm.v1beta1.ShareKey.prototype.clearGrantee = function() {
  return this.setGrantee(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.sharing.ocm.v1beta1.ShareKey.prototype.hasGrantee = function() {
  return jspb.Message.getField(this, 3) != null;
};

