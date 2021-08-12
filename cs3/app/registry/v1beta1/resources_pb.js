// source: cs3/app/registry/v1beta1/resources.proto
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
goog.exportSymbol('proto.cs3.app.registry.v1beta1.AppProviderList', null, global);
goog.exportSymbol('proto.cs3.app.registry.v1beta1.ProviderInfo', null, global);
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
proto.cs3.app.registry.v1beta1.ProviderInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cs3.app.registry.v1beta1.ProviderInfo.repeatedFields_, null);
};
goog.inherits(proto.cs3.app.registry.v1beta1.ProviderInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.app.registry.v1beta1.ProviderInfo.displayName = 'proto.cs3.app.registry.v1beta1.ProviderInfo';
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
proto.cs3.app.registry.v1beta1.AppProviderList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cs3.app.registry.v1beta1.AppProviderList.repeatedFields_, null);
};
goog.inherits(proto.cs3.app.registry.v1beta1.AppProviderList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.app.registry.v1beta1.AppProviderList.displayName = 'proto.cs3.app.registry.v1beta1.AppProviderList';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cs3.app.registry.v1beta1.ProviderInfo.repeatedFields_ = [2];



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
proto.cs3.app.registry.v1beta1.ProviderInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.app.registry.v1beta1.ProviderInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.app.registry.v1beta1.ProviderInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.app.registry.v1beta1.ProviderInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f),
    mimeTypesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    address: jspb.Message.getFieldWithDefault(msg, 3, ""),
    name: jspb.Message.getFieldWithDefault(msg, 4, ""),
    description: jspb.Message.getFieldWithDefault(msg, 5, ""),
    icon: jspb.Message.getFieldWithDefault(msg, 6, ""),
    desktopOnly: jspb.Message.getBooleanFieldWithDefault(msg, 7, false)
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
 * @return {!proto.cs3.app.registry.v1beta1.ProviderInfo}
 */
proto.cs3.app.registry.v1beta1.ProviderInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.app.registry.v1beta1.ProviderInfo;
  return proto.cs3.app.registry.v1beta1.ProviderInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.app.registry.v1beta1.ProviderInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.app.registry.v1beta1.ProviderInfo}
 */
proto.cs3.app.registry.v1beta1.ProviderInfo.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.addMimeTypes(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setIcon(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDesktopOnly(value);
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
proto.cs3.app.registry.v1beta1.ProviderInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.app.registry.v1beta1.ProviderInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.app.registry.v1beta1.ProviderInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.app.registry.v1beta1.ProviderInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getMimeTypesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getIcon();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getDesktopOnly();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 1;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.app.registry.v1beta1.ProviderInfo.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 1));
};


/** @param {?proto.cs3.types.v1beta1.Opaque|undefined} value */
proto.cs3.app.registry.v1beta1.ProviderInfo.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.app.registry.v1beta1.ProviderInfo.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.app.registry.v1beta1.ProviderInfo.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated string mime_types = 2;
 * @return {!Array<string>}
 */
proto.cs3.app.registry.v1beta1.ProviderInfo.prototype.getMimeTypesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/** @param {!Array<string>} value */
proto.cs3.app.registry.v1beta1.ProviderInfo.prototype.setMimeTypesList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.cs3.app.registry.v1beta1.ProviderInfo.prototype.addMimeTypes = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.cs3.app.registry.v1beta1.ProviderInfo.prototype.clearMimeTypesList = function() {
  this.setMimeTypesList([]);
};


/**
 * optional string address = 3;
 * @return {string}
 */
proto.cs3.app.registry.v1beta1.ProviderInfo.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.cs3.app.registry.v1beta1.ProviderInfo.prototype.setAddress = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.cs3.app.registry.v1beta1.ProviderInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.cs3.app.registry.v1beta1.ProviderInfo.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string description = 5;
 * @return {string}
 */
proto.cs3.app.registry.v1beta1.ProviderInfo.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.cs3.app.registry.v1beta1.ProviderInfo.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string icon = 6;
 * @return {string}
 */
proto.cs3.app.registry.v1beta1.ProviderInfo.prototype.getIcon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.cs3.app.registry.v1beta1.ProviderInfo.prototype.setIcon = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional bool desktop_only = 7;
 * @return {boolean}
 */
proto.cs3.app.registry.v1beta1.ProviderInfo.prototype.getDesktopOnly = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/** @param {boolean} value */
proto.cs3.app.registry.v1beta1.ProviderInfo.prototype.setDesktopOnly = function(value) {
  jspb.Message.setProto3BooleanField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cs3.app.registry.v1beta1.AppProviderList.repeatedFields_ = [1];



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
proto.cs3.app.registry.v1beta1.AppProviderList.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.app.registry.v1beta1.AppProviderList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.app.registry.v1beta1.AppProviderList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.app.registry.v1beta1.AppProviderList.toObject = function(includeInstance, msg) {
  var f, obj = {
    appProvidersList: jspb.Message.toObjectList(msg.getAppProvidersList(),
    proto.cs3.app.registry.v1beta1.ProviderInfo.toObject, includeInstance)
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
 * @return {!proto.cs3.app.registry.v1beta1.AppProviderList}
 */
proto.cs3.app.registry.v1beta1.AppProviderList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.app.registry.v1beta1.AppProviderList;
  return proto.cs3.app.registry.v1beta1.AppProviderList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.app.registry.v1beta1.AppProviderList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.app.registry.v1beta1.AppProviderList}
 */
proto.cs3.app.registry.v1beta1.AppProviderList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cs3.app.registry.v1beta1.ProviderInfo;
      reader.readMessage(value,proto.cs3.app.registry.v1beta1.ProviderInfo.deserializeBinaryFromReader);
      msg.addAppProviders(value);
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
proto.cs3.app.registry.v1beta1.AppProviderList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.app.registry.v1beta1.AppProviderList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.app.registry.v1beta1.AppProviderList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.app.registry.v1beta1.AppProviderList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAppProvidersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.cs3.app.registry.v1beta1.ProviderInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ProviderInfo app_providers = 1;
 * @return {!Array<!proto.cs3.app.registry.v1beta1.ProviderInfo>}
 */
proto.cs3.app.registry.v1beta1.AppProviderList.prototype.getAppProvidersList = function() {
  return /** @type{!Array<!proto.cs3.app.registry.v1beta1.ProviderInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cs3.app.registry.v1beta1.ProviderInfo, 1));
};


/** @param {!Array<!proto.cs3.app.registry.v1beta1.ProviderInfo>} value */
proto.cs3.app.registry.v1beta1.AppProviderList.prototype.setAppProvidersList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.cs3.app.registry.v1beta1.ProviderInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cs3.app.registry.v1beta1.ProviderInfo}
 */
proto.cs3.app.registry.v1beta1.AppProviderList.prototype.addAppProviders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.cs3.app.registry.v1beta1.ProviderInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.cs3.app.registry.v1beta1.AppProviderList.prototype.clearAppProvidersList = function() {
  this.setAppProvidersList([]);
};


goog.object.extend(exports, proto.cs3.app.registry.v1beta1);
