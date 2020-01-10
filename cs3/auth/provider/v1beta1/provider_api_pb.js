// source: cs3/auth/provider/v1beta1/provider_api.proto
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

var cs3_identity_user_v1beta1_resources_pb = require('../../../../cs3/identity/user/v1beta1/resources_pb.js');
goog.object.extend(proto, cs3_identity_user_v1beta1_resources_pb);
var cs3_rpc_v1beta1_status_pb = require('../../../../cs3/rpc/v1beta1/status_pb.js');
goog.object.extend(proto, cs3_rpc_v1beta1_status_pb);
var cs3_types_v1beta1_types_pb = require('../../../../cs3/types/v1beta1/types_pb.js');
goog.object.extend(proto, cs3_types_v1beta1_types_pb);
goog.exportSymbol('proto.cs3.auth.provider.v1beta1.AuthenticateRequest', null, global);
goog.exportSymbol('proto.cs3.auth.provider.v1beta1.AuthenticateResponse', null, global);
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
proto.cs3.auth.provider.v1beta1.AuthenticateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.auth.provider.v1beta1.AuthenticateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.auth.provider.v1beta1.AuthenticateRequest.displayName = 'proto.cs3.auth.provider.v1beta1.AuthenticateRequest';
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
proto.cs3.auth.provider.v1beta1.AuthenticateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.auth.provider.v1beta1.AuthenticateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.auth.provider.v1beta1.AuthenticateResponse.displayName = 'proto.cs3.auth.provider.v1beta1.AuthenticateResponse';
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
proto.cs3.auth.provider.v1beta1.AuthenticateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.auth.provider.v1beta1.AuthenticateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.auth.provider.v1beta1.AuthenticateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.auth.provider.v1beta1.AuthenticateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f),
    clientId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    clientSecret: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.cs3.auth.provider.v1beta1.AuthenticateRequest}
 */
proto.cs3.auth.provider.v1beta1.AuthenticateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.auth.provider.v1beta1.AuthenticateRequest;
  return proto.cs3.auth.provider.v1beta1.AuthenticateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.auth.provider.v1beta1.AuthenticateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.auth.provider.v1beta1.AuthenticateRequest}
 */
proto.cs3.auth.provider.v1beta1.AuthenticateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_types_v1beta1_types_pb.Opaque;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientSecret(value);
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
proto.cs3.auth.provider.v1beta1.AuthenticateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.auth.provider.v1beta1.AuthenticateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.auth.provider.v1beta1.AuthenticateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.auth.provider.v1beta1.AuthenticateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getClientId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getClientSecret();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 1;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.auth.provider.v1beta1.AuthenticateRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 1));
};


/** @param {?proto.cs3.types.v1beta1.Opaque|undefined} value */
proto.cs3.auth.provider.v1beta1.AuthenticateRequest.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.auth.provider.v1beta1.AuthenticateRequest.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.auth.provider.v1beta1.AuthenticateRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string client_id = 2;
 * @return {string}
 */
proto.cs3.auth.provider.v1beta1.AuthenticateRequest.prototype.getClientId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.cs3.auth.provider.v1beta1.AuthenticateRequest.prototype.setClientId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string client_secret = 3;
 * @return {string}
 */
proto.cs3.auth.provider.v1beta1.AuthenticateRequest.prototype.getClientSecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.cs3.auth.provider.v1beta1.AuthenticateRequest.prototype.setClientSecret = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
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
proto.cs3.auth.provider.v1beta1.AuthenticateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.auth.provider.v1beta1.AuthenticateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.auth.provider.v1beta1.AuthenticateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.auth.provider.v1beta1.AuthenticateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && cs3_rpc_v1beta1_status_pb.Status.toObject(includeInstance, f),
    user: (f = msg.getUser()) && cs3_identity_user_v1beta1_resources_pb.User.toObject(includeInstance, f)
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
 * @return {!proto.cs3.auth.provider.v1beta1.AuthenticateResponse}
 */
proto.cs3.auth.provider.v1beta1.AuthenticateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.auth.provider.v1beta1.AuthenticateResponse;
  return proto.cs3.auth.provider.v1beta1.AuthenticateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.auth.provider.v1beta1.AuthenticateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.auth.provider.v1beta1.AuthenticateResponse}
 */
proto.cs3.auth.provider.v1beta1.AuthenticateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_rpc_v1beta1_status_pb.Status;
      reader.readMessage(value,cs3_rpc_v1beta1_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 2:
      var value = new cs3_identity_user_v1beta1_resources_pb.User;
      reader.readMessage(value,cs3_identity_user_v1beta1_resources_pb.User.deserializeBinaryFromReader);
      msg.setUser(value);
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
proto.cs3.auth.provider.v1beta1.AuthenticateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.auth.provider.v1beta1.AuthenticateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.auth.provider.v1beta1.AuthenticateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.auth.provider.v1beta1.AuthenticateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_rpc_v1beta1_status_pb.Status.serializeBinaryToWriter
    );
  }
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_identity_user_v1beta1_resources_pb.User.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.rpc.v1beta1.Status status = 1;
 * @return {?proto.cs3.rpc.v1beta1.Status}
 */
proto.cs3.auth.provider.v1beta1.AuthenticateResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.v1beta1.Status} */ (
    jspb.Message.getWrapperField(this, cs3_rpc_v1beta1_status_pb.Status, 1));
};


/** @param {?proto.cs3.rpc.v1beta1.Status|undefined} value */
proto.cs3.auth.provider.v1beta1.AuthenticateResponse.prototype.setStatus = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.auth.provider.v1beta1.AuthenticateResponse.prototype.clearStatus = function() {
  this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.auth.provider.v1beta1.AuthenticateResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.identity.user.v1beta1.User user = 2;
 * @return {?proto.cs3.identity.user.v1beta1.User}
 */
proto.cs3.auth.provider.v1beta1.AuthenticateResponse.prototype.getUser = function() {
  return /** @type{?proto.cs3.identity.user.v1beta1.User} */ (
    jspb.Message.getWrapperField(this, cs3_identity_user_v1beta1_resources_pb.User, 2));
};


/** @param {?proto.cs3.identity.user.v1beta1.User|undefined} value */
proto.cs3.auth.provider.v1beta1.AuthenticateResponse.prototype.setUser = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.auth.provider.v1beta1.AuthenticateResponse.prototype.clearUser = function() {
  this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.auth.provider.v1beta1.AuthenticateResponse.prototype.hasUser = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.cs3.auth.provider.v1beta1);
