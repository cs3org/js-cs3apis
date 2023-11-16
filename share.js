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

goog.provide('proto.cs3.sharing.collaboration.v1beta1.Share');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.cs3.identity.user.v1beta1.UserId');
goog.require('proto.cs3.sharing.collaboration.v1beta1.ShareId');
goog.require('proto.cs3.sharing.collaboration.v1beta1.SharePermissions');
goog.require('proto.cs3.storage.provider.v1beta1.Grantee');
goog.require('proto.cs3.storage.provider.v1beta1.ResourceId');
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
proto.cs3.sharing.collaboration.v1beta1.Share = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.sharing.collaboration.v1beta1.Share, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.sharing.collaboration.v1beta1.Share.displayName = 'proto.cs3.sharing.collaboration.v1beta1.Share';
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
proto.cs3.sharing.collaboration.v1beta1.Share.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.sharing.collaboration.v1beta1.Share.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.sharing.collaboration.v1beta1.Share} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.sharing.collaboration.v1beta1.Share.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && proto.cs3.sharing.collaboration.v1beta1.ShareId.toObject(includeInstance, f),
    resourceId: (f = msg.getResourceId()) && proto.cs3.storage.provider.v1beta1.ResourceId.toObject(includeInstance, f),
    permissions: (f = msg.getPermissions()) && proto.cs3.sharing.collaboration.v1beta1.SharePermissions.toObject(includeInstance, f),
    grantee: (f = msg.getGrantee()) && proto.cs3.storage.provider.v1beta1.Grantee.toObject(includeInstance, f),
    owner: (f = msg.getOwner()) && proto.cs3.identity.user.v1beta1.UserId.toObject(includeInstance, f),
    creator: (f = msg.getCreator()) && proto.cs3.identity.user.v1beta1.UserId.toObject(includeInstance, f),
    ctime: (f = msg.getCtime()) && proto.cs3.types.v1beta1.Timestamp.toObject(includeInstance, f),
    mtime: (f = msg.getMtime()) && proto.cs3.types.v1beta1.Timestamp.toObject(includeInstance, f),
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
 * @return {!proto.cs3.sharing.collaboration.v1beta1.Share}
 */
proto.cs3.sharing.collaboration.v1beta1.Share.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.sharing.collaboration.v1beta1.Share;
  return proto.cs3.sharing.collaboration.v1beta1.Share.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.sharing.collaboration.v1beta1.Share} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.sharing.collaboration.v1beta1.Share}
 */
proto.cs3.sharing.collaboration.v1beta1.Share.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cs3.sharing.collaboration.v1beta1.ShareId;
      reader.readMessage(value,proto.cs3.sharing.collaboration.v1beta1.ShareId.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 2:
      var value = new proto.cs3.storage.provider.v1beta1.ResourceId;
      reader.readMessage(value,proto.cs3.storage.provider.v1beta1.ResourceId.deserializeBinaryFromReader);
      msg.setResourceId(value);
      break;
    case 3:
      var value = new proto.cs3.sharing.collaboration.v1beta1.SharePermissions;
      reader.readMessage(value,proto.cs3.sharing.collaboration.v1beta1.SharePermissions.deserializeBinaryFromReader);
      msg.setPermissions(value);
      break;
    case 4:
      var value = new proto.cs3.storage.provider.v1beta1.Grantee;
      reader.readMessage(value,proto.cs3.storage.provider.v1beta1.Grantee.deserializeBinaryFromReader);
      msg.setGrantee(value);
      break;
    case 5:
      var value = new proto.cs3.identity.user.v1beta1.UserId;
      reader.readMessage(value,proto.cs3.identity.user.v1beta1.UserId.deserializeBinaryFromReader);
      msg.setOwner(value);
      break;
    case 6:
      var value = new proto.cs3.identity.user.v1beta1.UserId;
      reader.readMessage(value,proto.cs3.identity.user.v1beta1.UserId.deserializeBinaryFromReader);
      msg.setCreator(value);
      break;
    case 7:
      var value = new proto.cs3.types.v1beta1.Timestamp;
      reader.readMessage(value,proto.cs3.types.v1beta1.Timestamp.deserializeBinaryFromReader);
      msg.setCtime(value);
      break;
    case 8:
      var value = new proto.cs3.types.v1beta1.Timestamp;
      reader.readMessage(value,proto.cs3.types.v1beta1.Timestamp.deserializeBinaryFromReader);
      msg.setMtime(value);
      break;
    case 9:
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
proto.cs3.sharing.collaboration.v1beta1.Share.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.sharing.collaboration.v1beta1.Share.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.sharing.collaboration.v1beta1.Share} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.sharing.collaboration.v1beta1.Share.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cs3.sharing.collaboration.v1beta1.ShareId.serializeBinaryToWriter
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
  f = message.getPermissions();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.cs3.sharing.collaboration.v1beta1.SharePermissions.serializeBinaryToWriter
    );
  }
  f = message.getGrantee();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.cs3.storage.provider.v1beta1.Grantee.serializeBinaryToWriter
    );
  }
  f = message.getOwner();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.cs3.identity.user.v1beta1.UserId.serializeBinaryToWriter
    );
  }
  f = message.getCreator();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.cs3.identity.user.v1beta1.UserId.serializeBinaryToWriter
    );
  }
  f = message.getCtime();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.cs3.types.v1beta1.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getMtime();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.cs3.types.v1beta1.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getExpiration();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.cs3.types.v1beta1.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional ShareId id = 1;
 * @return {?proto.cs3.sharing.collaboration.v1beta1.ShareId}
 */
proto.cs3.sharing.collaboration.v1beta1.Share.prototype.getId = function() {
  return /** @type{?proto.cs3.sharing.collaboration.v1beta1.ShareId} */ (
    jspb.Message.getWrapperField(this, proto.cs3.sharing.collaboration.v1beta1.ShareId, 1));
};


/**
 * @param {?proto.cs3.sharing.collaboration.v1beta1.ShareId|undefined} value
 * @return {!proto.cs3.sharing.collaboration.v1beta1.Share} returns this
*/
proto.cs3.sharing.collaboration.v1beta1.Share.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.sharing.collaboration.v1beta1.Share} returns this
 */
proto.cs3.sharing.collaboration.v1beta1.Share.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.sharing.collaboration.v1beta1.Share.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.storage.provider.v1beta1.ResourceId resource_id = 2;
 * @return {?proto.cs3.storage.provider.v1beta1.ResourceId}
 */
proto.cs3.sharing.collaboration.v1beta1.Share.prototype.getResourceId = function() {
  return /** @type{?proto.cs3.storage.provider.v1beta1.ResourceId} */ (
    jspb.Message.getWrapperField(this, proto.cs3.storage.provider.v1beta1.ResourceId, 2));
};


/**
 * @param {?proto.cs3.storage.provider.v1beta1.ResourceId|undefined} value
 * @return {!proto.cs3.sharing.collaboration.v1beta1.Share} returns this
*/
proto.cs3.sharing.collaboration.v1beta1.Share.prototype.setResourceId = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.sharing.collaboration.v1beta1.Share} returns this
 */
proto.cs3.sharing.collaboration.v1beta1.Share.prototype.clearResourceId = function() {
  return this.setResourceId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.sharing.collaboration.v1beta1.Share.prototype.hasResourceId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional SharePermissions permissions = 3;
 * @return {?proto.cs3.sharing.collaboration.v1beta1.SharePermissions}
 */
proto.cs3.sharing.collaboration.v1beta1.Share.prototype.getPermissions = function() {
  return /** @type{?proto.cs3.sharing.collaboration.v1beta1.SharePermissions} */ (
    jspb.Message.getWrapperField(this, proto.cs3.sharing.collaboration.v1beta1.SharePermissions, 3));
};


/**
 * @param {?proto.cs3.sharing.collaboration.v1beta1.SharePermissions|undefined} value
 * @return {!proto.cs3.sharing.collaboration.v1beta1.Share} returns this
*/
proto.cs3.sharing.collaboration.v1beta1.Share.prototype.setPermissions = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.sharing.collaboration.v1beta1.Share} returns this
 */
proto.cs3.sharing.collaboration.v1beta1.Share.prototype.clearPermissions = function() {
  return this.setPermissions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.sharing.collaboration.v1beta1.Share.prototype.hasPermissions = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional cs3.storage.provider.v1beta1.Grantee grantee = 4;
 * @return {?proto.cs3.storage.provider.v1beta1.Grantee}
 */
proto.cs3.sharing.collaboration.v1beta1.Share.prototype.getGrantee = function() {
  return /** @type{?proto.cs3.storage.provider.v1beta1.Grantee} */ (
    jspb.Message.getWrapperField(this, proto.cs3.storage.provider.v1beta1.Grantee, 4));
};


/**
 * @param {?proto.cs3.storage.provider.v1beta1.Grantee|undefined} value
 * @return {!proto.cs3.sharing.collaboration.v1beta1.Share} returns this
*/
proto.cs3.sharing.collaboration.v1beta1.Share.prototype.setGrantee = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.sharing.collaboration.v1beta1.Share} returns this
 */
proto.cs3.sharing.collaboration.v1beta1.Share.prototype.clearGrantee = function() {
  return this.setGrantee(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.sharing.collaboration.v1beta1.Share.prototype.hasGrantee = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional cs3.identity.user.v1beta1.UserId owner = 5;
 * @return {?proto.cs3.identity.user.v1beta1.UserId}
 */
proto.cs3.sharing.collaboration.v1beta1.Share.prototype.getOwner = function() {
  return /** @type{?proto.cs3.identity.user.v1beta1.UserId} */ (
    jspb.Message.getWrapperField(this, proto.cs3.identity.user.v1beta1.UserId, 5));
};


/**
 * @param {?proto.cs3.identity.user.v1beta1.UserId|undefined} value
 * @return {!proto.cs3.sharing.collaboration.v1beta1.Share} returns this
*/
proto.cs3.sharing.collaboration.v1beta1.Share.prototype.setOwner = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.sharing.collaboration.v1beta1.Share} returns this
 */
proto.cs3.sharing.collaboration.v1beta1.Share.prototype.clearOwner = function() {
  return this.setOwner(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.sharing.collaboration.v1beta1.Share.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional cs3.identity.user.v1beta1.UserId creator = 6;
 * @return {?proto.cs3.identity.user.v1beta1.UserId}
 */
proto.cs3.sharing.collaboration.v1beta1.Share.prototype.getCreator = function() {
  return /** @type{?proto.cs3.identity.user.v1beta1.UserId} */ (
    jspb.Message.getWrapperField(this, proto.cs3.identity.user.v1beta1.UserId, 6));
};


/**
 * @param {?proto.cs3.identity.user.v1beta1.UserId|undefined} value
 * @return {!proto.cs3.sharing.collaboration.v1beta1.Share} returns this
*/
proto.cs3.sharing.collaboration.v1beta1.Share.prototype.setCreator = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.sharing.collaboration.v1beta1.Share} returns this
 */
proto.cs3.sharing.collaboration.v1beta1.Share.prototype.clearCreator = function() {
  return this.setCreator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.sharing.collaboration.v1beta1.Share.prototype.hasCreator = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional cs3.types.v1beta1.Timestamp ctime = 7;
 * @return {?proto.cs3.types.v1beta1.Timestamp}
 */
proto.cs3.sharing.collaboration.v1beta1.Share.prototype.getCtime = function() {
  return /** @type{?proto.cs3.types.v1beta1.Timestamp} */ (
    jspb.Message.getWrapperField(this, proto.cs3.types.v1beta1.Timestamp, 7));
};


/**
 * @param {?proto.cs3.types.v1beta1.Timestamp|undefined} value
 * @return {!proto.cs3.sharing.collaboration.v1beta1.Share} returns this
*/
proto.cs3.sharing.collaboration.v1beta1.Share.prototype.setCtime = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.sharing.collaboration.v1beta1.Share} returns this
 */
proto.cs3.sharing.collaboration.v1beta1.Share.prototype.clearCtime = function() {
  return this.setCtime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.sharing.collaboration.v1beta1.Share.prototype.hasCtime = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional cs3.types.v1beta1.Timestamp mtime = 8;
 * @return {?proto.cs3.types.v1beta1.Timestamp}
 */
proto.cs3.sharing.collaboration.v1beta1.Share.prototype.getMtime = function() {
  return /** @type{?proto.cs3.types.v1beta1.Timestamp} */ (
    jspb.Message.getWrapperField(this, proto.cs3.types.v1beta1.Timestamp, 8));
};


/**
 * @param {?proto.cs3.types.v1beta1.Timestamp|undefined} value
 * @return {!proto.cs3.sharing.collaboration.v1beta1.Share} returns this
*/
proto.cs3.sharing.collaboration.v1beta1.Share.prototype.setMtime = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.sharing.collaboration.v1beta1.Share} returns this
 */
proto.cs3.sharing.collaboration.v1beta1.Share.prototype.clearMtime = function() {
  return this.setMtime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.sharing.collaboration.v1beta1.Share.prototype.hasMtime = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional cs3.types.v1beta1.Timestamp expiration = 9;
 * @return {?proto.cs3.types.v1beta1.Timestamp}
 */
proto.cs3.sharing.collaboration.v1beta1.Share.prototype.getExpiration = function() {
  return /** @type{?proto.cs3.types.v1beta1.Timestamp} */ (
    jspb.Message.getWrapperField(this, proto.cs3.types.v1beta1.Timestamp, 9));
};


/**
 * @param {?proto.cs3.types.v1beta1.Timestamp|undefined} value
 * @return {!proto.cs3.sharing.collaboration.v1beta1.Share} returns this
*/
proto.cs3.sharing.collaboration.v1beta1.Share.prototype.setExpiration = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.sharing.collaboration.v1beta1.Share} returns this
 */
proto.cs3.sharing.collaboration.v1beta1.Share.prototype.clearExpiration = function() {
  return this.setExpiration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.sharing.collaboration.v1beta1.Share.prototype.hasExpiration = function() {
  return jspb.Message.getField(this, 9) != null;
};


