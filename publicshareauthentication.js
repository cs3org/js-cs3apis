// source: cs3/sharing/link/v1beta1/resources.proto
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

goog.provide('proto.cs3.sharing.link.v1beta1.PublicShareAuthentication');
goog.provide('proto.cs3.sharing.link.v1beta1.PublicShareAuthentication.SpecCase');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.cs3.sharing.link.v1beta1.ShareSignature');

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
proto.cs3.sharing.link.v1beta1.PublicShareAuthentication = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.cs3.sharing.link.v1beta1.PublicShareAuthentication.oneofGroups_);
};
goog.inherits(proto.cs3.sharing.link.v1beta1.PublicShareAuthentication, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.sharing.link.v1beta1.PublicShareAuthentication.displayName = 'proto.cs3.sharing.link.v1beta1.PublicShareAuthentication';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.cs3.sharing.link.v1beta1.PublicShareAuthentication.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.cs3.sharing.link.v1beta1.PublicShareAuthentication.SpecCase = {
  SPEC_NOT_SET: 0,
  PASSWORD: 1,
  SIGNATURE: 2
};

/**
 * @return {proto.cs3.sharing.link.v1beta1.PublicShareAuthentication.SpecCase}
 */
proto.cs3.sharing.link.v1beta1.PublicShareAuthentication.prototype.getSpecCase = function() {
  return /** @type {proto.cs3.sharing.link.v1beta1.PublicShareAuthentication.SpecCase} */(jspb.Message.computeOneofCase(this, proto.cs3.sharing.link.v1beta1.PublicShareAuthentication.oneofGroups_[0]));
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
proto.cs3.sharing.link.v1beta1.PublicShareAuthentication.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.sharing.link.v1beta1.PublicShareAuthentication.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.sharing.link.v1beta1.PublicShareAuthentication} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.sharing.link.v1beta1.PublicShareAuthentication.toObject = function(includeInstance, msg) {
  var f, obj = {
    password: jspb.Message.getFieldWithDefault(msg, 1, ""),
    signature: (f = msg.getSignature()) && proto.cs3.sharing.link.v1beta1.ShareSignature.toObject(includeInstance, f)
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
 * @return {!proto.cs3.sharing.link.v1beta1.PublicShareAuthentication}
 */
proto.cs3.sharing.link.v1beta1.PublicShareAuthentication.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.sharing.link.v1beta1.PublicShareAuthentication;
  return proto.cs3.sharing.link.v1beta1.PublicShareAuthentication.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.sharing.link.v1beta1.PublicShareAuthentication} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.sharing.link.v1beta1.PublicShareAuthentication}
 */
proto.cs3.sharing.link.v1beta1.PublicShareAuthentication.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 2:
      var value = new proto.cs3.sharing.link.v1beta1.ShareSignature;
      reader.readMessage(value,proto.cs3.sharing.link.v1beta1.ShareSignature.deserializeBinaryFromReader);
      msg.setSignature(value);
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
proto.cs3.sharing.link.v1beta1.PublicShareAuthentication.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.sharing.link.v1beta1.PublicShareAuthentication.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.sharing.link.v1beta1.PublicShareAuthentication} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.sharing.link.v1beta1.PublicShareAuthentication.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSignature();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.cs3.sharing.link.v1beta1.ShareSignature.serializeBinaryToWriter
    );
  }
};


/**
 * optional string password = 1;
 * @return {string}
 */
proto.cs3.sharing.link.v1beta1.PublicShareAuthentication.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cs3.sharing.link.v1beta1.PublicShareAuthentication} returns this
 */
proto.cs3.sharing.link.v1beta1.PublicShareAuthentication.prototype.setPassword = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.cs3.sharing.link.v1beta1.PublicShareAuthentication.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cs3.sharing.link.v1beta1.PublicShareAuthentication} returns this
 */
proto.cs3.sharing.link.v1beta1.PublicShareAuthentication.prototype.clearPassword = function() {
  return jspb.Message.setOneofField(this, 1, proto.cs3.sharing.link.v1beta1.PublicShareAuthentication.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.sharing.link.v1beta1.PublicShareAuthentication.prototype.hasPassword = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ShareSignature signature = 2;
 * @return {?proto.cs3.sharing.link.v1beta1.ShareSignature}
 */
proto.cs3.sharing.link.v1beta1.PublicShareAuthentication.prototype.getSignature = function() {
  return /** @type{?proto.cs3.sharing.link.v1beta1.ShareSignature} */ (
    jspb.Message.getWrapperField(this, proto.cs3.sharing.link.v1beta1.ShareSignature, 2));
};


/**
 * @param {?proto.cs3.sharing.link.v1beta1.ShareSignature|undefined} value
 * @return {!proto.cs3.sharing.link.v1beta1.PublicShareAuthentication} returns this
*/
proto.cs3.sharing.link.v1beta1.PublicShareAuthentication.prototype.setSignature = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.cs3.sharing.link.v1beta1.PublicShareAuthentication.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.sharing.link.v1beta1.PublicShareAuthentication} returns this
 */
proto.cs3.sharing.link.v1beta1.PublicShareAuthentication.prototype.clearSignature = function() {
  return this.setSignature(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.sharing.link.v1beta1.PublicShareAuthentication.prototype.hasSignature = function() {
  return jspb.Message.getField(this, 2) != null;
};

