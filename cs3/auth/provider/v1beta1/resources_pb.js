// source: cs3/auth/provider/v1beta1/resources.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var cs3_types_v1beta1_types_pb = require('../../../../cs3/types/v1beta1/types_pb.js');
goog.object.extend(proto, cs3_types_v1beta1_types_pb);
goog.exportSymbol('proto.cs3.auth.provider.v1beta1.Role', null, global);
goog.exportSymbol('proto.cs3.auth.provider.v1beta1.Scope', null, global);
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
proto.cs3.auth.provider.v1beta1.Scope = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.auth.provider.v1beta1.Scope, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.auth.provider.v1beta1.Scope.displayName = 'proto.cs3.auth.provider.v1beta1.Scope';
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
proto.cs3.auth.provider.v1beta1.Scope.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.auth.provider.v1beta1.Scope.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.auth.provider.v1beta1.Scope} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.auth.provider.v1beta1.Scope.toObject = function(includeInstance, msg) {
  var f, obj = {
    resource: (f = msg.getResource()) && cs3_types_v1beta1_types_pb.OpaqueEntry.toObject(includeInstance, f),
    role: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.cs3.auth.provider.v1beta1.Scope}
 */
proto.cs3.auth.provider.v1beta1.Scope.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.auth.provider.v1beta1.Scope;
  return proto.cs3.auth.provider.v1beta1.Scope.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.auth.provider.v1beta1.Scope} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.auth.provider.v1beta1.Scope}
 */
proto.cs3.auth.provider.v1beta1.Scope.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_types_v1beta1_types_pb.OpaqueEntry;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.OpaqueEntry.deserializeBinaryFromReader);
      msg.setResource(value);
      break;
    case 2:
      var value = /** @type {!proto.cs3.auth.provider.v1beta1.Role} */ (reader.readEnum());
      msg.setRole(value);
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
proto.cs3.auth.provider.v1beta1.Scope.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.auth.provider.v1beta1.Scope.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.auth.provider.v1beta1.Scope} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.auth.provider.v1beta1.Scope.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResource();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_v1beta1_types_pb.OpaqueEntry.serializeBinaryToWriter
    );
  }
  f = message.getRole();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional cs3.types.v1beta1.OpaqueEntry resource = 1;
 * @return {?proto.cs3.types.v1beta1.OpaqueEntry}
 */
proto.cs3.auth.provider.v1beta1.Scope.prototype.getResource = function() {
  return /** @type{?proto.cs3.types.v1beta1.OpaqueEntry} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.OpaqueEntry, 1));
};


/** @param {?proto.cs3.types.v1beta1.OpaqueEntry|undefined} value */
proto.cs3.auth.provider.v1beta1.Scope.prototype.setResource = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.auth.provider.v1beta1.Scope.prototype.clearResource = function() {
  this.setResource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.auth.provider.v1beta1.Scope.prototype.hasResource = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Role role = 2;
 * @return {!proto.cs3.auth.provider.v1beta1.Role}
 */
proto.cs3.auth.provider.v1beta1.Scope.prototype.getRole = function() {
  return /** @type {!proto.cs3.auth.provider.v1beta1.Role} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.cs3.auth.provider.v1beta1.Role} value */
proto.cs3.auth.provider.v1beta1.Scope.prototype.setRole = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * @enum {number}
 */
proto.cs3.auth.provider.v1beta1.Role = {
  ROLE_INVALID: 0,
  ROLE_OWNER: 1,
  ROLE_LEGACY: 2,
  ROLE_VIEWER: 3,
  ROLE_EDITOR: 4,
  ROLE_FILE_EDITOR: 5,
  ROLE_COOWNER: 6,
  ROLE_UPLOADER: 7
};

goog.object.extend(exports, proto.cs3.auth.provider.v1beta1);