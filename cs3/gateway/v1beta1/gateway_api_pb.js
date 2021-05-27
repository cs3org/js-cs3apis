// source: cs3/gateway/v1beta1/gateway_api.proto
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

var cs3_app_provider_v1beta1_provider_api_pb = require('../../../cs3/app/provider/v1beta1/provider_api_pb.js');
goog.object.extend(proto, cs3_app_provider_v1beta1_provider_api_pb);
var cs3_app_registry_v1beta1_registry_api_pb = require('../../../cs3/app/registry/v1beta1/registry_api_pb.js');
goog.object.extend(proto, cs3_app_registry_v1beta1_registry_api_pb);
var cs3_auth_applications_v1beta1_applications_api_pb = require('../../../cs3/auth/applications/v1beta1/applications_api_pb.js');
goog.object.extend(proto, cs3_auth_applications_v1beta1_applications_api_pb);
var cs3_auth_registry_v1beta1_registry_api_pb = require('../../../cs3/auth/registry/v1beta1/registry_api_pb.js');
goog.object.extend(proto, cs3_auth_registry_v1beta1_registry_api_pb);
var cs3_gateway_v1beta1_resources_pb = require('../../../cs3/gateway/v1beta1/resources_pb.js');
goog.object.extend(proto, cs3_gateway_v1beta1_resources_pb);
var cs3_identity_group_v1beta1_group_api_pb = require('../../../cs3/identity/group/v1beta1/group_api_pb.js');
goog.object.extend(proto, cs3_identity_group_v1beta1_group_api_pb);
var cs3_identity_user_v1beta1_resources_pb = require('../../../cs3/identity/user/v1beta1/resources_pb.js');
goog.object.extend(proto, cs3_identity_user_v1beta1_resources_pb);
var cs3_identity_user_v1beta1_user_api_pb = require('../../../cs3/identity/user/v1beta1/user_api_pb.js');
goog.object.extend(proto, cs3_identity_user_v1beta1_user_api_pb);
var cs3_ocm_core_v1beta1_ocm_core_api_pb = require('../../../cs3/ocm/core/v1beta1/ocm_core_api_pb.js');
goog.object.extend(proto, cs3_ocm_core_v1beta1_ocm_core_api_pb);
var cs3_ocm_invite_v1beta1_invite_api_pb = require('../../../cs3/ocm/invite/v1beta1/invite_api_pb.js');
goog.object.extend(proto, cs3_ocm_invite_v1beta1_invite_api_pb);
var cs3_ocm_provider_v1beta1_provider_api_pb = require('../../../cs3/ocm/provider/v1beta1/provider_api_pb.js');
goog.object.extend(proto, cs3_ocm_provider_v1beta1_provider_api_pb);
var cs3_preferences_v1beta1_preferences_api_pb = require('../../../cs3/preferences/v1beta1/preferences_api_pb.js');
goog.object.extend(proto, cs3_preferences_v1beta1_preferences_api_pb);
var cs3_rpc_v1beta1_status_pb = require('../../../cs3/rpc/v1beta1/status_pb.js');
goog.object.extend(proto, cs3_rpc_v1beta1_status_pb);
var cs3_sharing_collaboration_v1beta1_collaboration_api_pb = require('../../../cs3/sharing/collaboration/v1beta1/collaboration_api_pb.js');
goog.object.extend(proto, cs3_sharing_collaboration_v1beta1_collaboration_api_pb);
var cs3_sharing_link_v1beta1_link_api_pb = require('../../../cs3/sharing/link/v1beta1/link_api_pb.js');
goog.object.extend(proto, cs3_sharing_link_v1beta1_link_api_pb);
var cs3_sharing_ocm_v1beta1_ocm_api_pb = require('../../../cs3/sharing/ocm/v1beta1/ocm_api_pb.js');
goog.object.extend(proto, cs3_sharing_ocm_v1beta1_ocm_api_pb);
var cs3_storage_provider_v1beta1_provider_api_pb = require('../../../cs3/storage/provider/v1beta1/provider_api_pb.js');
goog.object.extend(proto, cs3_storage_provider_v1beta1_provider_api_pb);
var cs3_storage_provider_v1beta1_resources_pb = require('../../../cs3/storage/provider/v1beta1/resources_pb.js');
goog.object.extend(proto, cs3_storage_provider_v1beta1_resources_pb);
var cs3_tx_v1beta1_tx_api_pb = require('../../../cs3/tx/v1beta1/tx_api_pb.js');
goog.object.extend(proto, cs3_tx_v1beta1_tx_api_pb);
var cs3_types_v1beta1_types_pb = require('../../../cs3/types/v1beta1/types_pb.js');
goog.object.extend(proto, cs3_types_v1beta1_types_pb);
goog.exportSymbol('proto.cs3.gateway.v1beta1.AuthenticateRequest', null, global);
goog.exportSymbol('proto.cs3.gateway.v1beta1.AuthenticateResponse', null, global);
goog.exportSymbol('proto.cs3.gateway.v1beta1.GetQuotaRequest', null, global);
goog.exportSymbol('proto.cs3.gateway.v1beta1.InitiateFileDownloadResponse', null, global);
goog.exportSymbol('proto.cs3.gateway.v1beta1.InitiateFileUploadResponse', null, global);
goog.exportSymbol('proto.cs3.gateway.v1beta1.ListAuthProvidersResponse', null, global);
goog.exportSymbol('proto.cs3.gateway.v1beta1.ListRecycleRequest', null, global);
goog.exportSymbol('proto.cs3.gateway.v1beta1.ListRecycleStreamRequest', null, global);
goog.exportSymbol('proto.cs3.gateway.v1beta1.OpenFileInAppProviderRequest', null, global);
goog.exportSymbol('proto.cs3.gateway.v1beta1.OpenFileInAppProviderRequest.ViewMode', null, global);
goog.exportSymbol('proto.cs3.gateway.v1beta1.OpenInAppRequest', null, global);
goog.exportSymbol('proto.cs3.gateway.v1beta1.OpenInAppRequest.ViewMode', null, global);
goog.exportSymbol('proto.cs3.gateway.v1beta1.PurgeRecycleRequest', null, global);
goog.exportSymbol('proto.cs3.gateway.v1beta1.WhoAmIRequest', null, global);
goog.exportSymbol('proto.cs3.gateway.v1beta1.WhoAmIResponse', null, global);
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
proto.cs3.gateway.v1beta1.AuthenticateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.gateway.v1beta1.AuthenticateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.gateway.v1beta1.AuthenticateRequest.displayName = 'proto.cs3.gateway.v1beta1.AuthenticateRequest';
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
proto.cs3.gateway.v1beta1.AuthenticateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.gateway.v1beta1.AuthenticateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.gateway.v1beta1.AuthenticateResponse.displayName = 'proto.cs3.gateway.v1beta1.AuthenticateResponse';
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
proto.cs3.gateway.v1beta1.WhoAmIRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.gateway.v1beta1.WhoAmIRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.gateway.v1beta1.WhoAmIRequest.displayName = 'proto.cs3.gateway.v1beta1.WhoAmIRequest';
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
proto.cs3.gateway.v1beta1.WhoAmIResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.gateway.v1beta1.WhoAmIResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.gateway.v1beta1.WhoAmIResponse.displayName = 'proto.cs3.gateway.v1beta1.WhoAmIResponse';
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
proto.cs3.gateway.v1beta1.GetQuotaRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.gateway.v1beta1.GetQuotaRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.gateway.v1beta1.GetQuotaRequest.displayName = 'proto.cs3.gateway.v1beta1.GetQuotaRequest';
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
proto.cs3.gateway.v1beta1.ListRecycleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.gateway.v1beta1.ListRecycleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.gateway.v1beta1.ListRecycleRequest.displayName = 'proto.cs3.gateway.v1beta1.ListRecycleRequest';
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
proto.cs3.gateway.v1beta1.ListRecycleStreamRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.gateway.v1beta1.ListRecycleStreamRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.gateway.v1beta1.ListRecycleStreamRequest.displayName = 'proto.cs3.gateway.v1beta1.ListRecycleStreamRequest';
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
proto.cs3.gateway.v1beta1.PurgeRecycleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.gateway.v1beta1.PurgeRecycleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.gateway.v1beta1.PurgeRecycleRequest.displayName = 'proto.cs3.gateway.v1beta1.PurgeRecycleRequest';
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
proto.cs3.gateway.v1beta1.InitiateFileDownloadResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cs3.gateway.v1beta1.InitiateFileDownloadResponse.repeatedFields_, null);
};
goog.inherits(proto.cs3.gateway.v1beta1.InitiateFileDownloadResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.gateway.v1beta1.InitiateFileDownloadResponse.displayName = 'proto.cs3.gateway.v1beta1.InitiateFileDownloadResponse';
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
proto.cs3.gateway.v1beta1.InitiateFileUploadResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cs3.gateway.v1beta1.InitiateFileUploadResponse.repeatedFields_, null);
};
goog.inherits(proto.cs3.gateway.v1beta1.InitiateFileUploadResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.gateway.v1beta1.InitiateFileUploadResponse.displayName = 'proto.cs3.gateway.v1beta1.InitiateFileUploadResponse';
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
proto.cs3.gateway.v1beta1.ListAuthProvidersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cs3.gateway.v1beta1.ListAuthProvidersResponse.repeatedFields_, null);
};
goog.inherits(proto.cs3.gateway.v1beta1.ListAuthProvidersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.gateway.v1beta1.ListAuthProvidersResponse.displayName = 'proto.cs3.gateway.v1beta1.ListAuthProvidersResponse';
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
proto.cs3.gateway.v1beta1.OpenInAppRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.gateway.v1beta1.OpenInAppRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.gateway.v1beta1.OpenInAppRequest.displayName = 'proto.cs3.gateway.v1beta1.OpenInAppRequest';
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
proto.cs3.gateway.v1beta1.OpenFileInAppProviderRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.gateway.v1beta1.OpenFileInAppProviderRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.gateway.v1beta1.OpenFileInAppProviderRequest.displayName = 'proto.cs3.gateway.v1beta1.OpenFileInAppProviderRequest';
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
proto.cs3.gateway.v1beta1.AuthenticateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.gateway.v1beta1.AuthenticateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.gateway.v1beta1.AuthenticateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.gateway.v1beta1.AuthenticateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f),
    type: jspb.Message.getFieldWithDefault(msg, 2, ""),
    clientId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    clientSecret: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.cs3.gateway.v1beta1.AuthenticateRequest}
 */
proto.cs3.gateway.v1beta1.AuthenticateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.gateway.v1beta1.AuthenticateRequest;
  return proto.cs3.gateway.v1beta1.AuthenticateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.gateway.v1beta1.AuthenticateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.gateway.v1beta1.AuthenticateRequest}
 */
proto.cs3.gateway.v1beta1.AuthenticateRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientId(value);
      break;
    case 4:
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
proto.cs3.gateway.v1beta1.AuthenticateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.gateway.v1beta1.AuthenticateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.gateway.v1beta1.AuthenticateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.gateway.v1beta1.AuthenticateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getClientId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getClientSecret();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 1;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.gateway.v1beta1.AuthenticateRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 1));
};


/** @param {?proto.cs3.types.v1beta1.Opaque|undefined} value */
proto.cs3.gateway.v1beta1.AuthenticateRequest.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.gateway.v1beta1.AuthenticateRequest.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.gateway.v1beta1.AuthenticateRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string type = 2;
 * @return {string}
 */
proto.cs3.gateway.v1beta1.AuthenticateRequest.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.cs3.gateway.v1beta1.AuthenticateRequest.prototype.setType = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string client_id = 3;
 * @return {string}
 */
proto.cs3.gateway.v1beta1.AuthenticateRequest.prototype.getClientId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.cs3.gateway.v1beta1.AuthenticateRequest.prototype.setClientId = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string client_secret = 4;
 * @return {string}
 */
proto.cs3.gateway.v1beta1.AuthenticateRequest.prototype.getClientSecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.cs3.gateway.v1beta1.AuthenticateRequest.prototype.setClientSecret = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
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
proto.cs3.gateway.v1beta1.AuthenticateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.gateway.v1beta1.AuthenticateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.gateway.v1beta1.AuthenticateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.gateway.v1beta1.AuthenticateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && cs3_rpc_v1beta1_status_pb.Status.toObject(includeInstance, f),
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f),
    token: jspb.Message.getFieldWithDefault(msg, 3, ""),
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
 * @return {!proto.cs3.gateway.v1beta1.AuthenticateResponse}
 */
proto.cs3.gateway.v1beta1.AuthenticateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.gateway.v1beta1.AuthenticateResponse;
  return proto.cs3.gateway.v1beta1.AuthenticateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.gateway.v1beta1.AuthenticateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.gateway.v1beta1.AuthenticateResponse}
 */
proto.cs3.gateway.v1beta1.AuthenticateResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new cs3_types_v1beta1_types_pb.Opaque;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 4:
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
proto.cs3.gateway.v1beta1.AuthenticateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.gateway.v1beta1.AuthenticateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.gateway.v1beta1.AuthenticateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.gateway.v1beta1.AuthenticateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_rpc_v1beta1_status_pb.Status.serializeBinaryToWriter
    );
  }
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      cs3_identity_user_v1beta1_resources_pb.User.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.rpc.v1beta1.Status status = 1;
 * @return {?proto.cs3.rpc.v1beta1.Status}
 */
proto.cs3.gateway.v1beta1.AuthenticateResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.v1beta1.Status} */ (
    jspb.Message.getWrapperField(this, cs3_rpc_v1beta1_status_pb.Status, 1));
};


/** @param {?proto.cs3.rpc.v1beta1.Status|undefined} value */
proto.cs3.gateway.v1beta1.AuthenticateResponse.prototype.setStatus = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.gateway.v1beta1.AuthenticateResponse.prototype.clearStatus = function() {
  this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.gateway.v1beta1.AuthenticateResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 2;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.gateway.v1beta1.AuthenticateResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 2));
};


/** @param {?proto.cs3.types.v1beta1.Opaque|undefined} value */
proto.cs3.gateway.v1beta1.AuthenticateResponse.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.gateway.v1beta1.AuthenticateResponse.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.gateway.v1beta1.AuthenticateResponse.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string token = 3;
 * @return {string}
 */
proto.cs3.gateway.v1beta1.AuthenticateResponse.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.cs3.gateway.v1beta1.AuthenticateResponse.prototype.setToken = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional cs3.identity.user.v1beta1.User user = 4;
 * @return {?proto.cs3.identity.user.v1beta1.User}
 */
proto.cs3.gateway.v1beta1.AuthenticateResponse.prototype.getUser = function() {
  return /** @type{?proto.cs3.identity.user.v1beta1.User} */ (
    jspb.Message.getWrapperField(this, cs3_identity_user_v1beta1_resources_pb.User, 4));
};


/** @param {?proto.cs3.identity.user.v1beta1.User|undefined} value */
proto.cs3.gateway.v1beta1.AuthenticateResponse.prototype.setUser = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.gateway.v1beta1.AuthenticateResponse.prototype.clearUser = function() {
  this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.gateway.v1beta1.AuthenticateResponse.prototype.hasUser = function() {
  return jspb.Message.getField(this, 4) != null;
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
proto.cs3.gateway.v1beta1.WhoAmIRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.gateway.v1beta1.WhoAmIRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.gateway.v1beta1.WhoAmIRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.gateway.v1beta1.WhoAmIRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f),
    token: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.cs3.gateway.v1beta1.WhoAmIRequest}
 */
proto.cs3.gateway.v1beta1.WhoAmIRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.gateway.v1beta1.WhoAmIRequest;
  return proto.cs3.gateway.v1beta1.WhoAmIRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.gateway.v1beta1.WhoAmIRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.gateway.v1beta1.WhoAmIRequest}
 */
proto.cs3.gateway.v1beta1.WhoAmIRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setToken(value);
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
proto.cs3.gateway.v1beta1.WhoAmIRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.gateway.v1beta1.WhoAmIRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.gateway.v1beta1.WhoAmIRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.gateway.v1beta1.WhoAmIRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 1;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.gateway.v1beta1.WhoAmIRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 1));
};


/** @param {?proto.cs3.types.v1beta1.Opaque|undefined} value */
proto.cs3.gateway.v1beta1.WhoAmIRequest.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.gateway.v1beta1.WhoAmIRequest.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.gateway.v1beta1.WhoAmIRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.cs3.gateway.v1beta1.WhoAmIRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.cs3.gateway.v1beta1.WhoAmIRequest.prototype.setToken = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
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
proto.cs3.gateway.v1beta1.WhoAmIResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.gateway.v1beta1.WhoAmIResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.gateway.v1beta1.WhoAmIResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.gateway.v1beta1.WhoAmIResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && cs3_rpc_v1beta1_status_pb.Status.toObject(includeInstance, f),
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f),
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
 * @return {!proto.cs3.gateway.v1beta1.WhoAmIResponse}
 */
proto.cs3.gateway.v1beta1.WhoAmIResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.gateway.v1beta1.WhoAmIResponse;
  return proto.cs3.gateway.v1beta1.WhoAmIResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.gateway.v1beta1.WhoAmIResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.gateway.v1beta1.WhoAmIResponse}
 */
proto.cs3.gateway.v1beta1.WhoAmIResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new cs3_types_v1beta1_types_pb.Opaque;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    case 3:
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
proto.cs3.gateway.v1beta1.WhoAmIResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.gateway.v1beta1.WhoAmIResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.gateway.v1beta1.WhoAmIResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.gateway.v1beta1.WhoAmIResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_rpc_v1beta1_status_pb.Status.serializeBinaryToWriter
    );
  }
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      cs3_identity_user_v1beta1_resources_pb.User.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.rpc.v1beta1.Status status = 1;
 * @return {?proto.cs3.rpc.v1beta1.Status}
 */
proto.cs3.gateway.v1beta1.WhoAmIResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.v1beta1.Status} */ (
    jspb.Message.getWrapperField(this, cs3_rpc_v1beta1_status_pb.Status, 1));
};


/** @param {?proto.cs3.rpc.v1beta1.Status|undefined} value */
proto.cs3.gateway.v1beta1.WhoAmIResponse.prototype.setStatus = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.gateway.v1beta1.WhoAmIResponse.prototype.clearStatus = function() {
  this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.gateway.v1beta1.WhoAmIResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 2;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.gateway.v1beta1.WhoAmIResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 2));
};


/** @param {?proto.cs3.types.v1beta1.Opaque|undefined} value */
proto.cs3.gateway.v1beta1.WhoAmIResponse.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.gateway.v1beta1.WhoAmIResponse.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.gateway.v1beta1.WhoAmIResponse.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional cs3.identity.user.v1beta1.User user = 3;
 * @return {?proto.cs3.identity.user.v1beta1.User}
 */
proto.cs3.gateway.v1beta1.WhoAmIResponse.prototype.getUser = function() {
  return /** @type{?proto.cs3.identity.user.v1beta1.User} */ (
    jspb.Message.getWrapperField(this, cs3_identity_user_v1beta1_resources_pb.User, 3));
};


/** @param {?proto.cs3.identity.user.v1beta1.User|undefined} value */
proto.cs3.gateway.v1beta1.WhoAmIResponse.prototype.setUser = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.gateway.v1beta1.WhoAmIResponse.prototype.clearUser = function() {
  this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.gateway.v1beta1.WhoAmIResponse.prototype.hasUser = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.cs3.gateway.v1beta1.GetQuotaRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.gateway.v1beta1.GetQuotaRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.gateway.v1beta1.GetQuotaRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.gateway.v1beta1.GetQuotaRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f),
    ref: (f = msg.getRef()) && cs3_storage_provider_v1beta1_resources_pb.Reference.toObject(includeInstance, f)
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
 * @return {!proto.cs3.gateway.v1beta1.GetQuotaRequest}
 */
proto.cs3.gateway.v1beta1.GetQuotaRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.gateway.v1beta1.GetQuotaRequest;
  return proto.cs3.gateway.v1beta1.GetQuotaRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.gateway.v1beta1.GetQuotaRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.gateway.v1beta1.GetQuotaRequest}
 */
proto.cs3.gateway.v1beta1.GetQuotaRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new cs3_storage_provider_v1beta1_resources_pb.Reference;
      reader.readMessage(value,cs3_storage_provider_v1beta1_resources_pb.Reference.deserializeBinaryFromReader);
      msg.setRef(value);
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
proto.cs3.gateway.v1beta1.GetQuotaRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.gateway.v1beta1.GetQuotaRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.gateway.v1beta1.GetQuotaRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.gateway.v1beta1.GetQuotaRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getRef();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_storage_provider_v1beta1_resources_pb.Reference.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 1;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.gateway.v1beta1.GetQuotaRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 1));
};


/** @param {?proto.cs3.types.v1beta1.Opaque|undefined} value */
proto.cs3.gateway.v1beta1.GetQuotaRequest.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.gateway.v1beta1.GetQuotaRequest.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.gateway.v1beta1.GetQuotaRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.storage.provider.v1beta1.Reference ref = 2;
 * @return {?proto.cs3.storage.provider.v1beta1.Reference}
 */
proto.cs3.gateway.v1beta1.GetQuotaRequest.prototype.getRef = function() {
  return /** @type{?proto.cs3.storage.provider.v1beta1.Reference} */ (
    jspb.Message.getWrapperField(this, cs3_storage_provider_v1beta1_resources_pb.Reference, 2));
};


/** @param {?proto.cs3.storage.provider.v1beta1.Reference|undefined} value */
proto.cs3.gateway.v1beta1.GetQuotaRequest.prototype.setRef = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.gateway.v1beta1.GetQuotaRequest.prototype.clearRef = function() {
  this.setRef(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.gateway.v1beta1.GetQuotaRequest.prototype.hasRef = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.cs3.gateway.v1beta1.ListRecycleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.gateway.v1beta1.ListRecycleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.gateway.v1beta1.ListRecycleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.gateway.v1beta1.ListRecycleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f),
    ref: (f = msg.getRef()) && cs3_storage_provider_v1beta1_resources_pb.Reference.toObject(includeInstance, f),
    fromTs: (f = msg.getFromTs()) && cs3_types_v1beta1_types_pb.Timestamp.toObject(includeInstance, f),
    toTs: (f = msg.getToTs()) && cs3_types_v1beta1_types_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.cs3.gateway.v1beta1.ListRecycleRequest}
 */
proto.cs3.gateway.v1beta1.ListRecycleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.gateway.v1beta1.ListRecycleRequest;
  return proto.cs3.gateway.v1beta1.ListRecycleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.gateway.v1beta1.ListRecycleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.gateway.v1beta1.ListRecycleRequest}
 */
proto.cs3.gateway.v1beta1.ListRecycleRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new cs3_storage_provider_v1beta1_resources_pb.Reference;
      reader.readMessage(value,cs3_storage_provider_v1beta1_resources_pb.Reference.deserializeBinaryFromReader);
      msg.setRef(value);
      break;
    case 3:
      var value = new cs3_types_v1beta1_types_pb.Timestamp;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Timestamp.deserializeBinaryFromReader);
      msg.setFromTs(value);
      break;
    case 4:
      var value = new cs3_types_v1beta1_types_pb.Timestamp;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Timestamp.deserializeBinaryFromReader);
      msg.setToTs(value);
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
proto.cs3.gateway.v1beta1.ListRecycleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.gateway.v1beta1.ListRecycleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.gateway.v1beta1.ListRecycleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.gateway.v1beta1.ListRecycleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getRef();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_storage_provider_v1beta1_resources_pb.Reference.serializeBinaryToWriter
    );
  }
  f = message.getFromTs();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      cs3_types_v1beta1_types_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getToTs();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      cs3_types_v1beta1_types_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 1;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.gateway.v1beta1.ListRecycleRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 1));
};


/** @param {?proto.cs3.types.v1beta1.Opaque|undefined} value */
proto.cs3.gateway.v1beta1.ListRecycleRequest.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.gateway.v1beta1.ListRecycleRequest.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.gateway.v1beta1.ListRecycleRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.storage.provider.v1beta1.Reference ref = 2;
 * @return {?proto.cs3.storage.provider.v1beta1.Reference}
 */
proto.cs3.gateway.v1beta1.ListRecycleRequest.prototype.getRef = function() {
  return /** @type{?proto.cs3.storage.provider.v1beta1.Reference} */ (
    jspb.Message.getWrapperField(this, cs3_storage_provider_v1beta1_resources_pb.Reference, 2));
};


/** @param {?proto.cs3.storage.provider.v1beta1.Reference|undefined} value */
proto.cs3.gateway.v1beta1.ListRecycleRequest.prototype.setRef = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.gateway.v1beta1.ListRecycleRequest.prototype.clearRef = function() {
  this.setRef(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.gateway.v1beta1.ListRecycleRequest.prototype.hasRef = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional cs3.types.v1beta1.Timestamp from_ts = 3;
 * @return {?proto.cs3.types.v1beta1.Timestamp}
 */
proto.cs3.gateway.v1beta1.ListRecycleRequest.prototype.getFromTs = function() {
  return /** @type{?proto.cs3.types.v1beta1.Timestamp} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Timestamp, 3));
};


/** @param {?proto.cs3.types.v1beta1.Timestamp|undefined} value */
proto.cs3.gateway.v1beta1.ListRecycleRequest.prototype.setFromTs = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.gateway.v1beta1.ListRecycleRequest.prototype.clearFromTs = function() {
  this.setFromTs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.gateway.v1beta1.ListRecycleRequest.prototype.hasFromTs = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional cs3.types.v1beta1.Timestamp to_ts = 4;
 * @return {?proto.cs3.types.v1beta1.Timestamp}
 */
proto.cs3.gateway.v1beta1.ListRecycleRequest.prototype.getToTs = function() {
  return /** @type{?proto.cs3.types.v1beta1.Timestamp} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Timestamp, 4));
};


/** @param {?proto.cs3.types.v1beta1.Timestamp|undefined} value */
proto.cs3.gateway.v1beta1.ListRecycleRequest.prototype.setToTs = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.gateway.v1beta1.ListRecycleRequest.prototype.clearToTs = function() {
  this.setToTs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.gateway.v1beta1.ListRecycleRequest.prototype.hasToTs = function() {
  return jspb.Message.getField(this, 4) != null;
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
proto.cs3.gateway.v1beta1.ListRecycleStreamRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.gateway.v1beta1.ListRecycleStreamRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.gateway.v1beta1.ListRecycleStreamRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.gateway.v1beta1.ListRecycleStreamRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f),
    ref: (f = msg.getRef()) && cs3_storage_provider_v1beta1_resources_pb.Reference.toObject(includeInstance, f),
    fromTs: (f = msg.getFromTs()) && cs3_types_v1beta1_types_pb.Timestamp.toObject(includeInstance, f),
    toTs: (f = msg.getToTs()) && cs3_types_v1beta1_types_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.cs3.gateway.v1beta1.ListRecycleStreamRequest}
 */
proto.cs3.gateway.v1beta1.ListRecycleStreamRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.gateway.v1beta1.ListRecycleStreamRequest;
  return proto.cs3.gateway.v1beta1.ListRecycleStreamRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.gateway.v1beta1.ListRecycleStreamRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.gateway.v1beta1.ListRecycleStreamRequest}
 */
proto.cs3.gateway.v1beta1.ListRecycleStreamRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new cs3_storage_provider_v1beta1_resources_pb.Reference;
      reader.readMessage(value,cs3_storage_provider_v1beta1_resources_pb.Reference.deserializeBinaryFromReader);
      msg.setRef(value);
      break;
    case 3:
      var value = new cs3_types_v1beta1_types_pb.Timestamp;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Timestamp.deserializeBinaryFromReader);
      msg.setFromTs(value);
      break;
    case 4:
      var value = new cs3_types_v1beta1_types_pb.Timestamp;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Timestamp.deserializeBinaryFromReader);
      msg.setToTs(value);
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
proto.cs3.gateway.v1beta1.ListRecycleStreamRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.gateway.v1beta1.ListRecycleStreamRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.gateway.v1beta1.ListRecycleStreamRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.gateway.v1beta1.ListRecycleStreamRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getRef();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_storage_provider_v1beta1_resources_pb.Reference.serializeBinaryToWriter
    );
  }
  f = message.getFromTs();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      cs3_types_v1beta1_types_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getToTs();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      cs3_types_v1beta1_types_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 1;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.gateway.v1beta1.ListRecycleStreamRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 1));
};


/** @param {?proto.cs3.types.v1beta1.Opaque|undefined} value */
proto.cs3.gateway.v1beta1.ListRecycleStreamRequest.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.gateway.v1beta1.ListRecycleStreamRequest.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.gateway.v1beta1.ListRecycleStreamRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.storage.provider.v1beta1.Reference ref = 2;
 * @return {?proto.cs3.storage.provider.v1beta1.Reference}
 */
proto.cs3.gateway.v1beta1.ListRecycleStreamRequest.prototype.getRef = function() {
  return /** @type{?proto.cs3.storage.provider.v1beta1.Reference} */ (
    jspb.Message.getWrapperField(this, cs3_storage_provider_v1beta1_resources_pb.Reference, 2));
};


/** @param {?proto.cs3.storage.provider.v1beta1.Reference|undefined} value */
proto.cs3.gateway.v1beta1.ListRecycleStreamRequest.prototype.setRef = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.gateway.v1beta1.ListRecycleStreamRequest.prototype.clearRef = function() {
  this.setRef(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.gateway.v1beta1.ListRecycleStreamRequest.prototype.hasRef = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional cs3.types.v1beta1.Timestamp from_ts = 3;
 * @return {?proto.cs3.types.v1beta1.Timestamp}
 */
proto.cs3.gateway.v1beta1.ListRecycleStreamRequest.prototype.getFromTs = function() {
  return /** @type{?proto.cs3.types.v1beta1.Timestamp} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Timestamp, 3));
};


/** @param {?proto.cs3.types.v1beta1.Timestamp|undefined} value */
proto.cs3.gateway.v1beta1.ListRecycleStreamRequest.prototype.setFromTs = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.gateway.v1beta1.ListRecycleStreamRequest.prototype.clearFromTs = function() {
  this.setFromTs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.gateway.v1beta1.ListRecycleStreamRequest.prototype.hasFromTs = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional cs3.types.v1beta1.Timestamp to_ts = 4;
 * @return {?proto.cs3.types.v1beta1.Timestamp}
 */
proto.cs3.gateway.v1beta1.ListRecycleStreamRequest.prototype.getToTs = function() {
  return /** @type{?proto.cs3.types.v1beta1.Timestamp} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Timestamp, 4));
};


/** @param {?proto.cs3.types.v1beta1.Timestamp|undefined} value */
proto.cs3.gateway.v1beta1.ListRecycleStreamRequest.prototype.setToTs = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.gateway.v1beta1.ListRecycleStreamRequest.prototype.clearToTs = function() {
  this.setToTs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.gateway.v1beta1.ListRecycleStreamRequest.prototype.hasToTs = function() {
  return jspb.Message.getField(this, 4) != null;
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
proto.cs3.gateway.v1beta1.PurgeRecycleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.gateway.v1beta1.PurgeRecycleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.gateway.v1beta1.PurgeRecycleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.gateway.v1beta1.PurgeRecycleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f),
    ref: (f = msg.getRef()) && cs3_storage_provider_v1beta1_resources_pb.Reference.toObject(includeInstance, f)
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
 * @return {!proto.cs3.gateway.v1beta1.PurgeRecycleRequest}
 */
proto.cs3.gateway.v1beta1.PurgeRecycleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.gateway.v1beta1.PurgeRecycleRequest;
  return proto.cs3.gateway.v1beta1.PurgeRecycleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.gateway.v1beta1.PurgeRecycleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.gateway.v1beta1.PurgeRecycleRequest}
 */
proto.cs3.gateway.v1beta1.PurgeRecycleRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new cs3_storage_provider_v1beta1_resources_pb.Reference;
      reader.readMessage(value,cs3_storage_provider_v1beta1_resources_pb.Reference.deserializeBinaryFromReader);
      msg.setRef(value);
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
proto.cs3.gateway.v1beta1.PurgeRecycleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.gateway.v1beta1.PurgeRecycleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.gateway.v1beta1.PurgeRecycleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.gateway.v1beta1.PurgeRecycleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getRef();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_storage_provider_v1beta1_resources_pb.Reference.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 1;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.gateway.v1beta1.PurgeRecycleRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 1));
};


/** @param {?proto.cs3.types.v1beta1.Opaque|undefined} value */
proto.cs3.gateway.v1beta1.PurgeRecycleRequest.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.gateway.v1beta1.PurgeRecycleRequest.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.gateway.v1beta1.PurgeRecycleRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.storage.provider.v1beta1.Reference ref = 2;
 * @return {?proto.cs3.storage.provider.v1beta1.Reference}
 */
proto.cs3.gateway.v1beta1.PurgeRecycleRequest.prototype.getRef = function() {
  return /** @type{?proto.cs3.storage.provider.v1beta1.Reference} */ (
    jspb.Message.getWrapperField(this, cs3_storage_provider_v1beta1_resources_pb.Reference, 2));
};


/** @param {?proto.cs3.storage.provider.v1beta1.Reference|undefined} value */
proto.cs3.gateway.v1beta1.PurgeRecycleRequest.prototype.setRef = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.gateway.v1beta1.PurgeRecycleRequest.prototype.clearRef = function() {
  this.setRef(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.gateway.v1beta1.PurgeRecycleRequest.prototype.hasRef = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cs3.gateway.v1beta1.InitiateFileDownloadResponse.repeatedFields_ = [3];



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
proto.cs3.gateway.v1beta1.InitiateFileDownloadResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.gateway.v1beta1.InitiateFileDownloadResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.gateway.v1beta1.InitiateFileDownloadResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.gateway.v1beta1.InitiateFileDownloadResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && cs3_rpc_v1beta1_status_pb.Status.toObject(includeInstance, f),
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f),
    protocolsList: jspb.Message.toObjectList(msg.getProtocolsList(),
    cs3_gateway_v1beta1_resources_pb.FileDownloadProtocol.toObject, includeInstance)
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
 * @return {!proto.cs3.gateway.v1beta1.InitiateFileDownloadResponse}
 */
proto.cs3.gateway.v1beta1.InitiateFileDownloadResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.gateway.v1beta1.InitiateFileDownloadResponse;
  return proto.cs3.gateway.v1beta1.InitiateFileDownloadResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.gateway.v1beta1.InitiateFileDownloadResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.gateway.v1beta1.InitiateFileDownloadResponse}
 */
proto.cs3.gateway.v1beta1.InitiateFileDownloadResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new cs3_types_v1beta1_types_pb.Opaque;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    case 3:
      var value = new cs3_gateway_v1beta1_resources_pb.FileDownloadProtocol;
      reader.readMessage(value,cs3_gateway_v1beta1_resources_pb.FileDownloadProtocol.deserializeBinaryFromReader);
      msg.addProtocols(value);
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
proto.cs3.gateway.v1beta1.InitiateFileDownloadResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.gateway.v1beta1.InitiateFileDownloadResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.gateway.v1beta1.InitiateFileDownloadResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.gateway.v1beta1.InitiateFileDownloadResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_rpc_v1beta1_status_pb.Status.serializeBinaryToWriter
    );
  }
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getProtocolsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      cs3_gateway_v1beta1_resources_pb.FileDownloadProtocol.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.rpc.v1beta1.Status status = 1;
 * @return {?proto.cs3.rpc.v1beta1.Status}
 */
proto.cs3.gateway.v1beta1.InitiateFileDownloadResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.v1beta1.Status} */ (
    jspb.Message.getWrapperField(this, cs3_rpc_v1beta1_status_pb.Status, 1));
};


/** @param {?proto.cs3.rpc.v1beta1.Status|undefined} value */
proto.cs3.gateway.v1beta1.InitiateFileDownloadResponse.prototype.setStatus = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.gateway.v1beta1.InitiateFileDownloadResponse.prototype.clearStatus = function() {
  this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.gateway.v1beta1.InitiateFileDownloadResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 2;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.gateway.v1beta1.InitiateFileDownloadResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 2));
};


/** @param {?proto.cs3.types.v1beta1.Opaque|undefined} value */
proto.cs3.gateway.v1beta1.InitiateFileDownloadResponse.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.gateway.v1beta1.InitiateFileDownloadResponse.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.gateway.v1beta1.InitiateFileDownloadResponse.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated FileDownloadProtocol protocols = 3;
 * @return {!Array<!proto.cs3.gateway.v1beta1.FileDownloadProtocol>}
 */
proto.cs3.gateway.v1beta1.InitiateFileDownloadResponse.prototype.getProtocolsList = function() {
  return /** @type{!Array<!proto.cs3.gateway.v1beta1.FileDownloadProtocol>} */ (
    jspb.Message.getRepeatedWrapperField(this, cs3_gateway_v1beta1_resources_pb.FileDownloadProtocol, 3));
};


/** @param {!Array<!proto.cs3.gateway.v1beta1.FileDownloadProtocol>} value */
proto.cs3.gateway.v1beta1.InitiateFileDownloadResponse.prototype.setProtocolsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.cs3.gateway.v1beta1.FileDownloadProtocol=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cs3.gateway.v1beta1.FileDownloadProtocol}
 */
proto.cs3.gateway.v1beta1.InitiateFileDownloadResponse.prototype.addProtocols = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.cs3.gateway.v1beta1.FileDownloadProtocol, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.cs3.gateway.v1beta1.InitiateFileDownloadResponse.prototype.clearProtocolsList = function() {
  this.setProtocolsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cs3.gateway.v1beta1.InitiateFileUploadResponse.repeatedFields_ = [3];



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
proto.cs3.gateway.v1beta1.InitiateFileUploadResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.gateway.v1beta1.InitiateFileUploadResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.gateway.v1beta1.InitiateFileUploadResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.gateway.v1beta1.InitiateFileUploadResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && cs3_rpc_v1beta1_status_pb.Status.toObject(includeInstance, f),
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f),
    protocolsList: jspb.Message.toObjectList(msg.getProtocolsList(),
    cs3_gateway_v1beta1_resources_pb.FileUploadProtocol.toObject, includeInstance)
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
 * @return {!proto.cs3.gateway.v1beta1.InitiateFileUploadResponse}
 */
proto.cs3.gateway.v1beta1.InitiateFileUploadResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.gateway.v1beta1.InitiateFileUploadResponse;
  return proto.cs3.gateway.v1beta1.InitiateFileUploadResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.gateway.v1beta1.InitiateFileUploadResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.gateway.v1beta1.InitiateFileUploadResponse}
 */
proto.cs3.gateway.v1beta1.InitiateFileUploadResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new cs3_types_v1beta1_types_pb.Opaque;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    case 3:
      var value = new cs3_gateway_v1beta1_resources_pb.FileUploadProtocol;
      reader.readMessage(value,cs3_gateway_v1beta1_resources_pb.FileUploadProtocol.deserializeBinaryFromReader);
      msg.addProtocols(value);
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
proto.cs3.gateway.v1beta1.InitiateFileUploadResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.gateway.v1beta1.InitiateFileUploadResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.gateway.v1beta1.InitiateFileUploadResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.gateway.v1beta1.InitiateFileUploadResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_rpc_v1beta1_status_pb.Status.serializeBinaryToWriter
    );
  }
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getProtocolsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      cs3_gateway_v1beta1_resources_pb.FileUploadProtocol.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.rpc.v1beta1.Status status = 1;
 * @return {?proto.cs3.rpc.v1beta1.Status}
 */
proto.cs3.gateway.v1beta1.InitiateFileUploadResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.v1beta1.Status} */ (
    jspb.Message.getWrapperField(this, cs3_rpc_v1beta1_status_pb.Status, 1));
};


/** @param {?proto.cs3.rpc.v1beta1.Status|undefined} value */
proto.cs3.gateway.v1beta1.InitiateFileUploadResponse.prototype.setStatus = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.gateway.v1beta1.InitiateFileUploadResponse.prototype.clearStatus = function() {
  this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.gateway.v1beta1.InitiateFileUploadResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 2;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.gateway.v1beta1.InitiateFileUploadResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 2));
};


/** @param {?proto.cs3.types.v1beta1.Opaque|undefined} value */
proto.cs3.gateway.v1beta1.InitiateFileUploadResponse.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.gateway.v1beta1.InitiateFileUploadResponse.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.gateway.v1beta1.InitiateFileUploadResponse.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated FileUploadProtocol protocols = 3;
 * @return {!Array<!proto.cs3.gateway.v1beta1.FileUploadProtocol>}
 */
proto.cs3.gateway.v1beta1.InitiateFileUploadResponse.prototype.getProtocolsList = function() {
  return /** @type{!Array<!proto.cs3.gateway.v1beta1.FileUploadProtocol>} */ (
    jspb.Message.getRepeatedWrapperField(this, cs3_gateway_v1beta1_resources_pb.FileUploadProtocol, 3));
};


/** @param {!Array<!proto.cs3.gateway.v1beta1.FileUploadProtocol>} value */
proto.cs3.gateway.v1beta1.InitiateFileUploadResponse.prototype.setProtocolsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.cs3.gateway.v1beta1.FileUploadProtocol=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cs3.gateway.v1beta1.FileUploadProtocol}
 */
proto.cs3.gateway.v1beta1.InitiateFileUploadResponse.prototype.addProtocols = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.cs3.gateway.v1beta1.FileUploadProtocol, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.cs3.gateway.v1beta1.InitiateFileUploadResponse.prototype.clearProtocolsList = function() {
  this.setProtocolsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cs3.gateway.v1beta1.ListAuthProvidersResponse.repeatedFields_ = [3];



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
proto.cs3.gateway.v1beta1.ListAuthProvidersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.gateway.v1beta1.ListAuthProvidersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.gateway.v1beta1.ListAuthProvidersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.gateway.v1beta1.ListAuthProvidersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && cs3_rpc_v1beta1_status_pb.Status.toObject(includeInstance, f),
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f),
    typesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.cs3.gateway.v1beta1.ListAuthProvidersResponse}
 */
proto.cs3.gateway.v1beta1.ListAuthProvidersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.gateway.v1beta1.ListAuthProvidersResponse;
  return proto.cs3.gateway.v1beta1.ListAuthProvidersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.gateway.v1beta1.ListAuthProvidersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.gateway.v1beta1.ListAuthProvidersResponse}
 */
proto.cs3.gateway.v1beta1.ListAuthProvidersResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new cs3_types_v1beta1_types_pb.Opaque;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addTypes(value);
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
proto.cs3.gateway.v1beta1.ListAuthProvidersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.gateway.v1beta1.ListAuthProvidersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.gateway.v1beta1.ListAuthProvidersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.gateway.v1beta1.ListAuthProvidersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_rpc_v1beta1_status_pb.Status.serializeBinaryToWriter
    );
  }
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getTypesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional cs3.rpc.v1beta1.Status status = 1;
 * @return {?proto.cs3.rpc.v1beta1.Status}
 */
proto.cs3.gateway.v1beta1.ListAuthProvidersResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.v1beta1.Status} */ (
    jspb.Message.getWrapperField(this, cs3_rpc_v1beta1_status_pb.Status, 1));
};


/** @param {?proto.cs3.rpc.v1beta1.Status|undefined} value */
proto.cs3.gateway.v1beta1.ListAuthProvidersResponse.prototype.setStatus = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.gateway.v1beta1.ListAuthProvidersResponse.prototype.clearStatus = function() {
  this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.gateway.v1beta1.ListAuthProvidersResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 2;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.gateway.v1beta1.ListAuthProvidersResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 2));
};


/** @param {?proto.cs3.types.v1beta1.Opaque|undefined} value */
proto.cs3.gateway.v1beta1.ListAuthProvidersResponse.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.gateway.v1beta1.ListAuthProvidersResponse.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.gateway.v1beta1.ListAuthProvidersResponse.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated string types = 3;
 * @return {!Array<string>}
 */
proto.cs3.gateway.v1beta1.ListAuthProvidersResponse.prototype.getTypesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/** @param {!Array<string>} value */
proto.cs3.gateway.v1beta1.ListAuthProvidersResponse.prototype.setTypesList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.cs3.gateway.v1beta1.ListAuthProvidersResponse.prototype.addTypes = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.cs3.gateway.v1beta1.ListAuthProvidersResponse.prototype.clearTypesList = function() {
  this.setTypesList([]);
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
proto.cs3.gateway.v1beta1.OpenInAppRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.gateway.v1beta1.OpenInAppRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.gateway.v1beta1.OpenInAppRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.gateway.v1beta1.OpenInAppRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f),
    ref: (f = msg.getRef()) && cs3_storage_provider_v1beta1_resources_pb.Reference.toObject(includeInstance, f),
    viewMode: jspb.Message.getFieldWithDefault(msg, 3, 0),
    app: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.cs3.gateway.v1beta1.OpenInAppRequest}
 */
proto.cs3.gateway.v1beta1.OpenInAppRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.gateway.v1beta1.OpenInAppRequest;
  return proto.cs3.gateway.v1beta1.OpenInAppRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.gateway.v1beta1.OpenInAppRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.gateway.v1beta1.OpenInAppRequest}
 */
proto.cs3.gateway.v1beta1.OpenInAppRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new cs3_storage_provider_v1beta1_resources_pb.Reference;
      reader.readMessage(value,cs3_storage_provider_v1beta1_resources_pb.Reference.deserializeBinaryFromReader);
      msg.setRef(value);
      break;
    case 3:
      var value = /** @type {!proto.cs3.gateway.v1beta1.OpenInAppRequest.ViewMode} */ (reader.readEnum());
      msg.setViewMode(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setApp(value);
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
proto.cs3.gateway.v1beta1.OpenInAppRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.gateway.v1beta1.OpenInAppRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.gateway.v1beta1.OpenInAppRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.gateway.v1beta1.OpenInAppRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getRef();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_storage_provider_v1beta1_resources_pb.Reference.serializeBinaryToWriter
    );
  }
  f = message.getViewMode();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getApp();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.cs3.gateway.v1beta1.OpenInAppRequest.ViewMode = {
  VIEW_MODE_INVALID: 0,
  VIEW_MODE_VIEW_ONLY: 1,
  VIEW_MODE_READ_ONLY: 2,
  VIEW_MODE_READ_WRITE: 3
};

/**
 * optional cs3.types.v1beta1.Opaque opaque = 1;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.gateway.v1beta1.OpenInAppRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 1));
};


/** @param {?proto.cs3.types.v1beta1.Opaque|undefined} value */
proto.cs3.gateway.v1beta1.OpenInAppRequest.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.gateway.v1beta1.OpenInAppRequest.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.gateway.v1beta1.OpenInAppRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.storage.provider.v1beta1.Reference ref = 2;
 * @return {?proto.cs3.storage.provider.v1beta1.Reference}
 */
proto.cs3.gateway.v1beta1.OpenInAppRequest.prototype.getRef = function() {
  return /** @type{?proto.cs3.storage.provider.v1beta1.Reference} */ (
    jspb.Message.getWrapperField(this, cs3_storage_provider_v1beta1_resources_pb.Reference, 2));
};


/** @param {?proto.cs3.storage.provider.v1beta1.Reference|undefined} value */
proto.cs3.gateway.v1beta1.OpenInAppRequest.prototype.setRef = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.gateway.v1beta1.OpenInAppRequest.prototype.clearRef = function() {
  this.setRef(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.gateway.v1beta1.OpenInAppRequest.prototype.hasRef = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ViewMode view_mode = 3;
 * @return {!proto.cs3.gateway.v1beta1.OpenInAppRequest.ViewMode}
 */
proto.cs3.gateway.v1beta1.OpenInAppRequest.prototype.getViewMode = function() {
  return /** @type {!proto.cs3.gateway.v1beta1.OpenInAppRequest.ViewMode} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.cs3.gateway.v1beta1.OpenInAppRequest.ViewMode} value */
proto.cs3.gateway.v1beta1.OpenInAppRequest.prototype.setViewMode = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string app = 4;
 * @return {string}
 */
proto.cs3.gateway.v1beta1.OpenInAppRequest.prototype.getApp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.cs3.gateway.v1beta1.OpenInAppRequest.prototype.setApp = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
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
proto.cs3.gateway.v1beta1.OpenFileInAppProviderRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.gateway.v1beta1.OpenFileInAppProviderRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.gateway.v1beta1.OpenFileInAppProviderRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.gateway.v1beta1.OpenFileInAppProviderRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f),
    ref: (f = msg.getRef()) && cs3_storage_provider_v1beta1_resources_pb.Reference.toObject(includeInstance, f),
    viewMode: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.cs3.gateway.v1beta1.OpenFileInAppProviderRequest}
 */
proto.cs3.gateway.v1beta1.OpenFileInAppProviderRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.gateway.v1beta1.OpenFileInAppProviderRequest;
  return proto.cs3.gateway.v1beta1.OpenFileInAppProviderRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.gateway.v1beta1.OpenFileInAppProviderRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.gateway.v1beta1.OpenFileInAppProviderRequest}
 */
proto.cs3.gateway.v1beta1.OpenFileInAppProviderRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new cs3_storage_provider_v1beta1_resources_pb.Reference;
      reader.readMessage(value,cs3_storage_provider_v1beta1_resources_pb.Reference.deserializeBinaryFromReader);
      msg.setRef(value);
      break;
    case 3:
      var value = /** @type {!proto.cs3.gateway.v1beta1.OpenFileInAppProviderRequest.ViewMode} */ (reader.readEnum());
      msg.setViewMode(value);
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
proto.cs3.gateway.v1beta1.OpenFileInAppProviderRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.gateway.v1beta1.OpenFileInAppProviderRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.gateway.v1beta1.OpenFileInAppProviderRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.gateway.v1beta1.OpenFileInAppProviderRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getRef();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_storage_provider_v1beta1_resources_pb.Reference.serializeBinaryToWriter
    );
  }
  f = message.getViewMode();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.cs3.gateway.v1beta1.OpenFileInAppProviderRequest.ViewMode = {
  VIEW_MODE_INVALID: 0,
  VIEW_MODE_VIEW_ONLY: 1,
  VIEW_MODE_READ_ONLY: 2,
  VIEW_MODE_READ_WRITE: 3
};

/**
 * optional cs3.types.v1beta1.Opaque opaque = 1;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.gateway.v1beta1.OpenFileInAppProviderRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 1));
};


/** @param {?proto.cs3.types.v1beta1.Opaque|undefined} value */
proto.cs3.gateway.v1beta1.OpenFileInAppProviderRequest.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.gateway.v1beta1.OpenFileInAppProviderRequest.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.gateway.v1beta1.OpenFileInAppProviderRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.storage.provider.v1beta1.Reference ref = 2;
 * @return {?proto.cs3.storage.provider.v1beta1.Reference}
 */
proto.cs3.gateway.v1beta1.OpenFileInAppProviderRequest.prototype.getRef = function() {
  return /** @type{?proto.cs3.storage.provider.v1beta1.Reference} */ (
    jspb.Message.getWrapperField(this, cs3_storage_provider_v1beta1_resources_pb.Reference, 2));
};


/** @param {?proto.cs3.storage.provider.v1beta1.Reference|undefined} value */
proto.cs3.gateway.v1beta1.OpenFileInAppProviderRequest.prototype.setRef = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.gateway.v1beta1.OpenFileInAppProviderRequest.prototype.clearRef = function() {
  this.setRef(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.gateway.v1beta1.OpenFileInAppProviderRequest.prototype.hasRef = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ViewMode view_mode = 3;
 * @return {!proto.cs3.gateway.v1beta1.OpenFileInAppProviderRequest.ViewMode}
 */
proto.cs3.gateway.v1beta1.OpenFileInAppProviderRequest.prototype.getViewMode = function() {
  return /** @type {!proto.cs3.gateway.v1beta1.OpenFileInAppProviderRequest.ViewMode} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.cs3.gateway.v1beta1.OpenFileInAppProviderRequest.ViewMode} value */
proto.cs3.gateway.v1beta1.OpenFileInAppProviderRequest.prototype.setViewMode = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


goog.object.extend(exports, proto.cs3.gateway.v1beta1);
