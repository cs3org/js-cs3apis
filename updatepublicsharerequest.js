// source: cs3/sharing/link/v1beta1/link_api.proto
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

goog.provide('proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest');
goog.provide('proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.Update');
goog.provide('proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.Update.Type');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.cs3.sharing.link.v1beta1.Grant');
goog.require('proto.cs3.sharing.link.v1beta1.PublicShareReference');
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
proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.displayName = 'proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest';
}
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
proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.Update = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.Update, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.Update.displayName = 'proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.Update';
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
proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && proto.cs3.types.v1beta1.Opaque.toObject(includeInstance, f),
    ref: (f = msg.getRef()) && proto.cs3.sharing.link.v1beta1.PublicShareReference.toObject(includeInstance, f),
    update: (f = msg.getUpdate()) && proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.Update.toObject(includeInstance, f)
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
 * @return {!proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest}
 */
proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest;
  return proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest}
 */
proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.cs3.sharing.link.v1beta1.PublicShareReference;
      reader.readMessage(value,proto.cs3.sharing.link.v1beta1.PublicShareReference.deserializeBinaryFromReader);
      msg.setRef(value);
      break;
    case 3:
      var value = new proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.Update;
      reader.readMessage(value,proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.Update.deserializeBinaryFromReader);
      msg.setUpdate(value);
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
proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cs3.types.v1beta1.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getRef();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.cs3.sharing.link.v1beta1.PublicShareReference.serializeBinaryToWriter
    );
  }
  f = message.getUpdate();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.Update.serializeBinaryToWriter
    );
  }
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
proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.Update.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.Update.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.Update} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.Update.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 3, 0),
    grant: (f = msg.getGrant()) && proto.cs3.sharing.link.v1beta1.Grant.toObject(includeInstance, f),
    displayName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    description: jspb.Message.getFieldWithDefault(msg, 6, ""),
    notifyUploads: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    notifyUploadsExtraRecipients: jspb.Message.getFieldWithDefault(msg, 8, "")
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
 * @return {!proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.Update}
 */
proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.Update.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.Update;
  return proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.Update.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.Update} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.Update}
 */
proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.Update.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {!proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.Update.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 4:
      var value = new proto.cs3.sharing.link.v1beta1.Grant;
      reader.readMessage(value,proto.cs3.sharing.link.v1beta1.Grant.deserializeBinaryFromReader);
      msg.setGrant(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNotifyUploads(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setNotifyUploadsExtraRecipients(value);
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
proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.Update.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.Update.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.Update} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.Update.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getGrant();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.cs3.sharing.link.v1beta1.Grant.serializeBinaryToWriter
    );
  }
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getNotifyUploads();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getNotifyUploadsExtraRecipients();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.Update.Type = {
  TYPE_INVALID: 0,
  TYPE_PERMISSIONS: 1,
  TYPE_PASSWORD: 2,
  TYPE_EXPIRATION: 3,
  TYPE_DISPLAYNAME: 4,
  TYPE_DESCRIPTION: 5,
  TYPE_NOTIFYUPLOADS: 6,
  TYPE_NOTIFYUPLOADSEXTRARECIPIENTS: 7
};

/**
 * optional Type type = 3;
 * @return {!proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.Update.Type}
 */
proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.Update.prototype.getType = function() {
  return /** @type {!proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.Update.Type} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.Update.Type} value
 * @return {!proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.Update} returns this
 */
proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.Update.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional Grant grant = 4;
 * @return {?proto.cs3.sharing.link.v1beta1.Grant}
 */
proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.Update.prototype.getGrant = function() {
  return /** @type{?proto.cs3.sharing.link.v1beta1.Grant} */ (
    jspb.Message.getWrapperField(this, proto.cs3.sharing.link.v1beta1.Grant, 4));
};


/**
 * @param {?proto.cs3.sharing.link.v1beta1.Grant|undefined} value
 * @return {!proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.Update} returns this
*/
proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.Update.prototype.setGrant = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.Update} returns this
 */
proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.Update.prototype.clearGrant = function() {
  return this.setGrant(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.Update.prototype.hasGrant = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string display_name = 5;
 * @return {string}
 */
proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.Update.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.Update} returns this
 */
proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.Update.prototype.setDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string description = 6;
 * @return {string}
 */
proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.Update.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.Update} returns this
 */
proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.Update.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional bool notify_uploads = 7;
 * @return {boolean}
 */
proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.Update.prototype.getNotifyUploads = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.Update} returns this
 */
proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.Update.prototype.setNotifyUploads = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional string notify_uploads_extra_recipients = 8;
 * @return {string}
 */
proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.Update.prototype.getNotifyUploadsExtraRecipients = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.Update} returns this
 */
proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.Update.prototype.setNotifyUploadsExtraRecipients = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 1;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, proto.cs3.types.v1beta1.Opaque, 1));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest} returns this
*/
proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest} returns this
 */
proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PublicShareReference ref = 2;
 * @return {?proto.cs3.sharing.link.v1beta1.PublicShareReference}
 */
proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.prototype.getRef = function() {
  return /** @type{?proto.cs3.sharing.link.v1beta1.PublicShareReference} */ (
    jspb.Message.getWrapperField(this, proto.cs3.sharing.link.v1beta1.PublicShareReference, 2));
};


/**
 * @param {?proto.cs3.sharing.link.v1beta1.PublicShareReference|undefined} value
 * @return {!proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest} returns this
*/
proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.prototype.setRef = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest} returns this
 */
proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.prototype.clearRef = function() {
  return this.setRef(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.prototype.hasRef = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Update update = 3;
 * @return {?proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.Update}
 */
proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.prototype.getUpdate = function() {
  return /** @type{?proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.Update} */ (
    jspb.Message.getWrapperField(this, proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.Update, 3));
};


/**
 * @param {?proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.Update|undefined} value
 * @return {!proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest} returns this
*/
proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.prototype.setUpdate = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest} returns this
 */
proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.prototype.clearUpdate = function() {
  return this.setUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest.prototype.hasUpdate = function() {
  return jspb.Message.getField(this, 3) != null;
};


