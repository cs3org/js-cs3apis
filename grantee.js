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

goog.provide('proto.cs3.storage.provider.v1beta1.Grantee');
goog.provide('proto.cs3.storage.provider.v1beta1.Grantee.IdCase');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.cs3.identity.group.v1beta1.GroupId');
goog.require('proto.cs3.identity.user.v1beta1.UserId');
goog.require('proto.cs3.types.v1beta1.Opaque');

goog.forwardDeclare('proto.cs3.storage.provider.v1beta1.GranteeType');
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
proto.cs3.storage.provider.v1beta1.Grantee = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.cs3.storage.provider.v1beta1.Grantee.oneofGroups_);
};
goog.inherits(proto.cs3.storage.provider.v1beta1.Grantee, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storage.provider.v1beta1.Grantee.displayName = 'proto.cs3.storage.provider.v1beta1.Grantee';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.cs3.storage.provider.v1beta1.Grantee.oneofGroups_ = [[3,4]];

/**
 * @enum {number}
 */
proto.cs3.storage.provider.v1beta1.Grantee.IdCase = {
  ID_NOT_SET: 0,
  USER_ID: 3,
  GROUP_ID: 4
};

/**
 * @return {proto.cs3.storage.provider.v1beta1.Grantee.IdCase}
 */
proto.cs3.storage.provider.v1beta1.Grantee.prototype.getIdCase = function() {
  return /** @type {proto.cs3.storage.provider.v1beta1.Grantee.IdCase} */(jspb.Message.computeOneofCase(this, proto.cs3.storage.provider.v1beta1.Grantee.oneofGroups_[0]));
};



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
proto.cs3.storage.provider.v1beta1.Grantee.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storage.provider.v1beta1.Grantee.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storage.provider.v1beta1.Grantee} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.Grantee.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    userId: (f = msg.getUserId()) && proto.cs3.identity.user.v1beta1.UserId.toObject(includeInstance, f),
    groupId: (f = msg.getGroupId()) && proto.cs3.identity.group.v1beta1.GroupId.toObject(includeInstance, f),
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
 * @return {!proto.cs3.storage.provider.v1beta1.Grantee}
 */
proto.cs3.storage.provider.v1beta1.Grantee.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storage.provider.v1beta1.Grantee;
  return proto.cs3.storage.provider.v1beta1.Grantee.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storage.provider.v1beta1.Grantee} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storage.provider.v1beta1.Grantee}
 */
proto.cs3.storage.provider.v1beta1.Grantee.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.cs3.storage.provider.v1beta1.GranteeType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = new proto.cs3.identity.user.v1beta1.UserId;
      reader.readMessage(value,proto.cs3.identity.user.v1beta1.UserId.deserializeBinaryFromReader);
      msg.setUserId(value);
      break;
    case 4:
      var value = new proto.cs3.identity.group.v1beta1.GroupId;
      reader.readMessage(value,proto.cs3.identity.group.v1beta1.GroupId.deserializeBinaryFromReader);
      msg.setGroupId(value);
      break;
    case 5:
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
proto.cs3.storage.provider.v1beta1.Grantee.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storage.provider.v1beta1.Grantee.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storage.provider.v1beta1.Grantee} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.Grantee.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.cs3.identity.user.v1beta1.UserId.serializeBinaryToWriter
    );
  }
  f = message.getGroupId();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.cs3.identity.group.v1beta1.GroupId.serializeBinaryToWriter
    );
  }
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.cs3.types.v1beta1.Opaque.serializeBinaryToWriter
    );
  }
};


/**
 * optional GranteeType type = 1;
 * @return {!proto.cs3.storage.provider.v1beta1.GranteeType}
 */
proto.cs3.storage.provider.v1beta1.Grantee.prototype.getType = function() {
  return /** @type {!proto.cs3.storage.provider.v1beta1.GranteeType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.cs3.storage.provider.v1beta1.GranteeType} value
 * @return {!proto.cs3.storage.provider.v1beta1.Grantee} returns this
 */
proto.cs3.storage.provider.v1beta1.Grantee.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional cs3.identity.user.v1beta1.UserId user_id = 3;
 * @return {?proto.cs3.identity.user.v1beta1.UserId}
 */
proto.cs3.storage.provider.v1beta1.Grantee.prototype.getUserId = function() {
  return /** @type{?proto.cs3.identity.user.v1beta1.UserId} */ (
    jspb.Message.getWrapperField(this, proto.cs3.identity.user.v1beta1.UserId, 3));
};


/**
 * @param {?proto.cs3.identity.user.v1beta1.UserId|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.Grantee} returns this
*/
proto.cs3.storage.provider.v1beta1.Grantee.prototype.setUserId = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.cs3.storage.provider.v1beta1.Grantee.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.Grantee} returns this
 */
proto.cs3.storage.provider.v1beta1.Grantee.prototype.clearUserId = function() {
  return this.setUserId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.Grantee.prototype.hasUserId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional cs3.identity.group.v1beta1.GroupId group_id = 4;
 * @return {?proto.cs3.identity.group.v1beta1.GroupId}
 */
proto.cs3.storage.provider.v1beta1.Grantee.prototype.getGroupId = function() {
  return /** @type{?proto.cs3.identity.group.v1beta1.GroupId} */ (
    jspb.Message.getWrapperField(this, proto.cs3.identity.group.v1beta1.GroupId, 4));
};


/**
 * @param {?proto.cs3.identity.group.v1beta1.GroupId|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.Grantee} returns this
*/
proto.cs3.storage.provider.v1beta1.Grantee.prototype.setGroupId = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.cs3.storage.provider.v1beta1.Grantee.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.Grantee} returns this
 */
proto.cs3.storage.provider.v1beta1.Grantee.prototype.clearGroupId = function() {
  return this.setGroupId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.Grantee.prototype.hasGroupId = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 5;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.storage.provider.v1beta1.Grantee.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, proto.cs3.types.v1beta1.Opaque, 5));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.Grantee} returns this
*/
proto.cs3.storage.provider.v1beta1.Grantee.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.Grantee} returns this
 */
proto.cs3.storage.provider.v1beta1.Grantee.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.Grantee.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 5) != null;
};

