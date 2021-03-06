// source: cs3/appregistry/v0alpha/appregistry.proto
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

var cs3_appregistry_v0alpha_resources_pb = require('../../../cs3/appregistry/v0alpha/resources_pb.js');
goog.object.extend(proto, cs3_appregistry_v0alpha_resources_pb);
var cs3_rpc_status_pb = require('../../../cs3/rpc/status_pb.js');
goog.object.extend(proto, cs3_rpc_status_pb);
var cs3_storageprovider_v0alpha_resources_pb = require('../../../cs3/storageprovider/v0alpha/resources_pb.js');
goog.object.extend(proto, cs3_storageprovider_v0alpha_resources_pb);
var cs3_types_types_pb = require('../../../cs3/types/types_pb.js');
goog.object.extend(proto, cs3_types_types_pb);
goog.exportSymbol('proto.cs3.appregistryv0alpha.GetAppProvidersRequest', null, global);
goog.exportSymbol('proto.cs3.appregistryv0alpha.GetAppProvidersResponse', null, global);
goog.exportSymbol('proto.cs3.appregistryv0alpha.ListAppProvidersRequest', null, global);
goog.exportSymbol('proto.cs3.appregistryv0alpha.ListAppProvidersResponse', null, global);
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
proto.cs3.appregistryv0alpha.GetAppProvidersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.appregistryv0alpha.GetAppProvidersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.appregistryv0alpha.GetAppProvidersRequest.displayName = 'proto.cs3.appregistryv0alpha.GetAppProvidersRequest';
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
proto.cs3.appregistryv0alpha.GetAppProvidersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cs3.appregistryv0alpha.GetAppProvidersResponse.repeatedFields_, null);
};
goog.inherits(proto.cs3.appregistryv0alpha.GetAppProvidersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.appregistryv0alpha.GetAppProvidersResponse.displayName = 'proto.cs3.appregistryv0alpha.GetAppProvidersResponse';
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
proto.cs3.appregistryv0alpha.ListAppProvidersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.appregistryv0alpha.ListAppProvidersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.appregistryv0alpha.ListAppProvidersRequest.displayName = 'proto.cs3.appregistryv0alpha.ListAppProvidersRequest';
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
proto.cs3.appregistryv0alpha.ListAppProvidersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cs3.appregistryv0alpha.ListAppProvidersResponse.repeatedFields_, null);
};
goog.inherits(proto.cs3.appregistryv0alpha.ListAppProvidersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.appregistryv0alpha.ListAppProvidersResponse.displayName = 'proto.cs3.appregistryv0alpha.ListAppProvidersResponse';
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
proto.cs3.appregistryv0alpha.GetAppProvidersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.appregistryv0alpha.GetAppProvidersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.appregistryv0alpha.GetAppProvidersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.appregistryv0alpha.GetAppProvidersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_types_pb.Opaque.toObject(includeInstance, f),
    resourceInfo: (f = msg.getResourceInfo()) && cs3_storageprovider_v0alpha_resources_pb.ResourceInfo.toObject(includeInstance, f)
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
 * @return {!proto.cs3.appregistryv0alpha.GetAppProvidersRequest}
 */
proto.cs3.appregistryv0alpha.GetAppProvidersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.appregistryv0alpha.GetAppProvidersRequest;
  return proto.cs3.appregistryv0alpha.GetAppProvidersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.appregistryv0alpha.GetAppProvidersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.appregistryv0alpha.GetAppProvidersRequest}
 */
proto.cs3.appregistryv0alpha.GetAppProvidersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_types_types_pb.Opaque;
      reader.readMessage(value,cs3_types_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    case 2:
      var value = new cs3_storageprovider_v0alpha_resources_pb.ResourceInfo;
      reader.readMessage(value,cs3_storageprovider_v0alpha_resources_pb.ResourceInfo.deserializeBinaryFromReader);
      msg.setResourceInfo(value);
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
proto.cs3.appregistryv0alpha.GetAppProvidersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.appregistryv0alpha.GetAppProvidersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.appregistryv0alpha.GetAppProvidersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.appregistryv0alpha.GetAppProvidersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getResourceInfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_storageprovider_v0alpha_resources_pb.ResourceInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.types.Opaque opaque = 1;
 * @return {?proto.cs3.types.Opaque}
 */
proto.cs3.appregistryv0alpha.GetAppProvidersRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_types_pb.Opaque, 1));
};


/** @param {?proto.cs3.types.Opaque|undefined} value */
proto.cs3.appregistryv0alpha.GetAppProvidersRequest.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.appregistryv0alpha.GetAppProvidersRequest.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.appregistryv0alpha.GetAppProvidersRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.storageproviderv0alpha.ResourceInfo resource_info = 2;
 * @return {?proto.cs3.storageproviderv0alpha.ResourceInfo}
 */
proto.cs3.appregistryv0alpha.GetAppProvidersRequest.prototype.getResourceInfo = function() {
  return /** @type{?proto.cs3.storageproviderv0alpha.ResourceInfo} */ (
    jspb.Message.getWrapperField(this, cs3_storageprovider_v0alpha_resources_pb.ResourceInfo, 2));
};


/** @param {?proto.cs3.storageproviderv0alpha.ResourceInfo|undefined} value */
proto.cs3.appregistryv0alpha.GetAppProvidersRequest.prototype.setResourceInfo = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.appregistryv0alpha.GetAppProvidersRequest.prototype.clearResourceInfo = function() {
  this.setResourceInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.appregistryv0alpha.GetAppProvidersRequest.prototype.hasResourceInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cs3.appregistryv0alpha.GetAppProvidersResponse.repeatedFields_ = [3];



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
proto.cs3.appregistryv0alpha.GetAppProvidersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.appregistryv0alpha.GetAppProvidersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.appregistryv0alpha.GetAppProvidersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.appregistryv0alpha.GetAppProvidersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && cs3_rpc_status_pb.Status.toObject(includeInstance, f),
    opaque: (f = msg.getOpaque()) && cs3_types_types_pb.Opaque.toObject(includeInstance, f),
    providersList: jspb.Message.toObjectList(msg.getProvidersList(),
    cs3_appregistry_v0alpha_resources_pb.ProviderInfo.toObject, includeInstance)
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
 * @return {!proto.cs3.appregistryv0alpha.GetAppProvidersResponse}
 */
proto.cs3.appregistryv0alpha.GetAppProvidersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.appregistryv0alpha.GetAppProvidersResponse;
  return proto.cs3.appregistryv0alpha.GetAppProvidersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.appregistryv0alpha.GetAppProvidersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.appregistryv0alpha.GetAppProvidersResponse}
 */
proto.cs3.appregistryv0alpha.GetAppProvidersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_rpc_status_pb.Status;
      reader.readMessage(value,cs3_rpc_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 2:
      var value = new cs3_types_types_pb.Opaque;
      reader.readMessage(value,cs3_types_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    case 3:
      var value = new cs3_appregistry_v0alpha_resources_pb.ProviderInfo;
      reader.readMessage(value,cs3_appregistry_v0alpha_resources_pb.ProviderInfo.deserializeBinaryFromReader);
      msg.addProviders(value);
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
proto.cs3.appregistryv0alpha.GetAppProvidersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.appregistryv0alpha.GetAppProvidersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.appregistryv0alpha.GetAppProvidersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.appregistryv0alpha.GetAppProvidersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_rpc_status_pb.Status.serializeBinaryToWriter
    );
  }
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_types_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getProvidersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      cs3_appregistry_v0alpha_resources_pb.ProviderInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.rpc.Status status = 1;
 * @return {?proto.cs3.rpc.Status}
 */
proto.cs3.appregistryv0alpha.GetAppProvidersResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.Status} */ (
    jspb.Message.getWrapperField(this, cs3_rpc_status_pb.Status, 1));
};


/** @param {?proto.cs3.rpc.Status|undefined} value */
proto.cs3.appregistryv0alpha.GetAppProvidersResponse.prototype.setStatus = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.appregistryv0alpha.GetAppProvidersResponse.prototype.clearStatus = function() {
  this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.appregistryv0alpha.GetAppProvidersResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.Opaque opaque = 2;
 * @return {?proto.cs3.types.Opaque}
 */
proto.cs3.appregistryv0alpha.GetAppProvidersResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_types_pb.Opaque, 2));
};


/** @param {?proto.cs3.types.Opaque|undefined} value */
proto.cs3.appregistryv0alpha.GetAppProvidersResponse.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.appregistryv0alpha.GetAppProvidersResponse.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.appregistryv0alpha.GetAppProvidersResponse.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated ProviderInfo providers = 3;
 * @return {!Array<!proto.cs3.appregistryv0alpha.ProviderInfo>}
 */
proto.cs3.appregistryv0alpha.GetAppProvidersResponse.prototype.getProvidersList = function() {
  return /** @type{!Array<!proto.cs3.appregistryv0alpha.ProviderInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, cs3_appregistry_v0alpha_resources_pb.ProviderInfo, 3));
};


/** @param {!Array<!proto.cs3.appregistryv0alpha.ProviderInfo>} value */
proto.cs3.appregistryv0alpha.GetAppProvidersResponse.prototype.setProvidersList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.cs3.appregistryv0alpha.ProviderInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cs3.appregistryv0alpha.ProviderInfo}
 */
proto.cs3.appregistryv0alpha.GetAppProvidersResponse.prototype.addProviders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.cs3.appregistryv0alpha.ProviderInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.cs3.appregistryv0alpha.GetAppProvidersResponse.prototype.clearProvidersList = function() {
  this.setProvidersList([]);
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
proto.cs3.appregistryv0alpha.ListAppProvidersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.appregistryv0alpha.ListAppProvidersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.appregistryv0alpha.ListAppProvidersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.appregistryv0alpha.ListAppProvidersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_types_pb.Opaque.toObject(includeInstance, f)
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
 * @return {!proto.cs3.appregistryv0alpha.ListAppProvidersRequest}
 */
proto.cs3.appregistryv0alpha.ListAppProvidersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.appregistryv0alpha.ListAppProvidersRequest;
  return proto.cs3.appregistryv0alpha.ListAppProvidersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.appregistryv0alpha.ListAppProvidersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.appregistryv0alpha.ListAppProvidersRequest}
 */
proto.cs3.appregistryv0alpha.ListAppProvidersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_types_types_pb.Opaque;
      reader.readMessage(value,cs3_types_types_pb.Opaque.deserializeBinaryFromReader);
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
proto.cs3.appregistryv0alpha.ListAppProvidersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.appregistryv0alpha.ListAppProvidersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.appregistryv0alpha.ListAppProvidersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.appregistryv0alpha.ListAppProvidersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_types_pb.Opaque.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.types.Opaque opaque = 1;
 * @return {?proto.cs3.types.Opaque}
 */
proto.cs3.appregistryv0alpha.ListAppProvidersRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_types_pb.Opaque, 1));
};


/** @param {?proto.cs3.types.Opaque|undefined} value */
proto.cs3.appregistryv0alpha.ListAppProvidersRequest.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.appregistryv0alpha.ListAppProvidersRequest.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.appregistryv0alpha.ListAppProvidersRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cs3.appregistryv0alpha.ListAppProvidersResponse.repeatedFields_ = [3];



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
proto.cs3.appregistryv0alpha.ListAppProvidersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.appregistryv0alpha.ListAppProvidersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.appregistryv0alpha.ListAppProvidersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.appregistryv0alpha.ListAppProvidersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && cs3_rpc_status_pb.Status.toObject(includeInstance, f),
    opaque: (f = msg.getOpaque()) && cs3_types_types_pb.Opaque.toObject(includeInstance, f),
    providersList: jspb.Message.toObjectList(msg.getProvidersList(),
    cs3_appregistry_v0alpha_resources_pb.ProviderInfo.toObject, includeInstance)
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
 * @return {!proto.cs3.appregistryv0alpha.ListAppProvidersResponse}
 */
proto.cs3.appregistryv0alpha.ListAppProvidersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.appregistryv0alpha.ListAppProvidersResponse;
  return proto.cs3.appregistryv0alpha.ListAppProvidersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.appregistryv0alpha.ListAppProvidersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.appregistryv0alpha.ListAppProvidersResponse}
 */
proto.cs3.appregistryv0alpha.ListAppProvidersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_rpc_status_pb.Status;
      reader.readMessage(value,cs3_rpc_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 2:
      var value = new cs3_types_types_pb.Opaque;
      reader.readMessage(value,cs3_types_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    case 3:
      var value = new cs3_appregistry_v0alpha_resources_pb.ProviderInfo;
      reader.readMessage(value,cs3_appregistry_v0alpha_resources_pb.ProviderInfo.deserializeBinaryFromReader);
      msg.addProviders(value);
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
proto.cs3.appregistryv0alpha.ListAppProvidersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.appregistryv0alpha.ListAppProvidersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.appregistryv0alpha.ListAppProvidersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.appregistryv0alpha.ListAppProvidersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_rpc_status_pb.Status.serializeBinaryToWriter
    );
  }
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_types_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getProvidersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      cs3_appregistry_v0alpha_resources_pb.ProviderInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.rpc.Status status = 1;
 * @return {?proto.cs3.rpc.Status}
 */
proto.cs3.appregistryv0alpha.ListAppProvidersResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.Status} */ (
    jspb.Message.getWrapperField(this, cs3_rpc_status_pb.Status, 1));
};


/** @param {?proto.cs3.rpc.Status|undefined} value */
proto.cs3.appregistryv0alpha.ListAppProvidersResponse.prototype.setStatus = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.appregistryv0alpha.ListAppProvidersResponse.prototype.clearStatus = function() {
  this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.appregistryv0alpha.ListAppProvidersResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.Opaque opaque = 2;
 * @return {?proto.cs3.types.Opaque}
 */
proto.cs3.appregistryv0alpha.ListAppProvidersResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_types_pb.Opaque, 2));
};


/** @param {?proto.cs3.types.Opaque|undefined} value */
proto.cs3.appregistryv0alpha.ListAppProvidersResponse.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.appregistryv0alpha.ListAppProvidersResponse.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.appregistryv0alpha.ListAppProvidersResponse.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated ProviderInfo providers = 3;
 * @return {!Array<!proto.cs3.appregistryv0alpha.ProviderInfo>}
 */
proto.cs3.appregistryv0alpha.ListAppProvidersResponse.prototype.getProvidersList = function() {
  return /** @type{!Array<!proto.cs3.appregistryv0alpha.ProviderInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, cs3_appregistry_v0alpha_resources_pb.ProviderInfo, 3));
};


/** @param {!Array<!proto.cs3.appregistryv0alpha.ProviderInfo>} value */
proto.cs3.appregistryv0alpha.ListAppProvidersResponse.prototype.setProvidersList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.cs3.appregistryv0alpha.ProviderInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cs3.appregistryv0alpha.ProviderInfo}
 */
proto.cs3.appregistryv0alpha.ListAppProvidersResponse.prototype.addProviders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.cs3.appregistryv0alpha.ProviderInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.cs3.appregistryv0alpha.ListAppProvidersResponse.prototype.clearProvidersList = function() {
  this.setProvidersList([]);
};


goog.object.extend(exports, proto.cs3.appregistryv0alpha);
