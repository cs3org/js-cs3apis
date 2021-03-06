// source: cs3/storageprovider/v0alpha/storageprovider.proto
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

var cs3_rpc_status_pb = require('../../../cs3/rpc/status_pb.js');
goog.object.extend(proto, cs3_rpc_status_pb);
var cs3_storageprovider_v0alpha_resources_pb = require('../../../cs3/storageprovider/v0alpha/resources_pb.js');
goog.object.extend(proto, cs3_storageprovider_v0alpha_resources_pb);
var cs3_storagetypes_storagetypes_pb = require('../../../cs3/storagetypes/storagetypes_pb.js');
goog.object.extend(proto, cs3_storagetypes_storagetypes_pb);
var cs3_types_types_pb = require('../../../cs3/types/types_pb.js');
goog.object.extend(proto, cs3_types_types_pb);
goog.exportSymbol('proto.cs3.storageproviderv0alpha.AddGrantRequest', null, global);
goog.exportSymbol('proto.cs3.storageproviderv0alpha.AddGrantResponse', null, global);
goog.exportSymbol('proto.cs3.storageproviderv0alpha.CreateContainerRequest', null, global);
goog.exportSymbol('proto.cs3.storageproviderv0alpha.CreateContainerResponse', null, global);
goog.exportSymbol('proto.cs3.storageproviderv0alpha.CreateReferenceRequest', null, global);
goog.exportSymbol('proto.cs3.storageproviderv0alpha.CreateReferenceResponse', null, global);
goog.exportSymbol('proto.cs3.storageproviderv0alpha.DeleteRequest', null, global);
goog.exportSymbol('proto.cs3.storageproviderv0alpha.DeleteResponse', null, global);
goog.exportSymbol('proto.cs3.storageproviderv0alpha.GetPathRequest', null, global);
goog.exportSymbol('proto.cs3.storageproviderv0alpha.GetPathResponse', null, global);
goog.exportSymbol('proto.cs3.storageproviderv0alpha.GetProviderRequest', null, global);
goog.exportSymbol('proto.cs3.storageproviderv0alpha.GetProviderResponse', null, global);
goog.exportSymbol('proto.cs3.storageproviderv0alpha.GetQuotaRequest', null, global);
goog.exportSymbol('proto.cs3.storageproviderv0alpha.GetQuotaResponse', null, global);
goog.exportSymbol('proto.cs3.storageproviderv0alpha.InitiateFileDownloadRequest', null, global);
goog.exportSymbol('proto.cs3.storageproviderv0alpha.InitiateFileDownloadResponse', null, global);
goog.exportSymbol('proto.cs3.storageproviderv0alpha.InitiateFileUploadRequest', null, global);
goog.exportSymbol('proto.cs3.storageproviderv0alpha.InitiateFileUploadResponse', null, global);
goog.exportSymbol('proto.cs3.storageproviderv0alpha.ListContainerRequest', null, global);
goog.exportSymbol('proto.cs3.storageproviderv0alpha.ListContainerResponse', null, global);
goog.exportSymbol('proto.cs3.storageproviderv0alpha.ListContainerStreamRequest', null, global);
goog.exportSymbol('proto.cs3.storageproviderv0alpha.ListContainerStreamResponse', null, global);
goog.exportSymbol('proto.cs3.storageproviderv0alpha.ListFileVersionsRequest', null, global);
goog.exportSymbol('proto.cs3.storageproviderv0alpha.ListFileVersionsResponse', null, global);
goog.exportSymbol('proto.cs3.storageproviderv0alpha.ListGrantsRequest', null, global);
goog.exportSymbol('proto.cs3.storageproviderv0alpha.ListGrantsResponse', null, global);
goog.exportSymbol('proto.cs3.storageproviderv0alpha.ListRecycleRequest', null, global);
goog.exportSymbol('proto.cs3.storageproviderv0alpha.ListRecycleResponse', null, global);
goog.exportSymbol('proto.cs3.storageproviderv0alpha.ListRecycleStreamRequest', null, global);
goog.exportSymbol('proto.cs3.storageproviderv0alpha.ListRecycleStreamResponse', null, global);
goog.exportSymbol('proto.cs3.storageproviderv0alpha.MoveRequest', null, global);
goog.exportSymbol('proto.cs3.storageproviderv0alpha.MoveResponse', null, global);
goog.exportSymbol('proto.cs3.storageproviderv0alpha.PurgeRecycleRequest', null, global);
goog.exportSymbol('proto.cs3.storageproviderv0alpha.PurgeRecycleResponse', null, global);
goog.exportSymbol('proto.cs3.storageproviderv0alpha.RemoveGrantRequest', null, global);
goog.exportSymbol('proto.cs3.storageproviderv0alpha.RemoveGrantResponse', null, global);
goog.exportSymbol('proto.cs3.storageproviderv0alpha.RestoreFileVersionRequest', null, global);
goog.exportSymbol('proto.cs3.storageproviderv0alpha.RestoreFileVersionResponse', null, global);
goog.exportSymbol('proto.cs3.storageproviderv0alpha.RestoreRecycleItemRequest', null, global);
goog.exportSymbol('proto.cs3.storageproviderv0alpha.RestoreRecycleItemResponse', null, global);
goog.exportSymbol('proto.cs3.storageproviderv0alpha.SetArbitraryMetadataRequest', null, global);
goog.exportSymbol('proto.cs3.storageproviderv0alpha.SetArbitraryMetadataResponse', null, global);
goog.exportSymbol('proto.cs3.storageproviderv0alpha.StatRequest', null, global);
goog.exportSymbol('proto.cs3.storageproviderv0alpha.StatResponse', null, global);
goog.exportSymbol('proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataRequest', null, global);
goog.exportSymbol('proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataResponse', null, global);
goog.exportSymbol('proto.cs3.storageproviderv0alpha.UpdateGrantRequest', null, global);
goog.exportSymbol('proto.cs3.storageproviderv0alpha.UpdateGrantResponse', null, global);
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
proto.cs3.storageproviderv0alpha.AddGrantRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storageproviderv0alpha.AddGrantRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storageproviderv0alpha.AddGrantRequest.displayName = 'proto.cs3.storageproviderv0alpha.AddGrantRequest';
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
proto.cs3.storageproviderv0alpha.AddGrantResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storageproviderv0alpha.AddGrantResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storageproviderv0alpha.AddGrantResponse.displayName = 'proto.cs3.storageproviderv0alpha.AddGrantResponse';
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
proto.cs3.storageproviderv0alpha.CreateContainerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storageproviderv0alpha.CreateContainerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storageproviderv0alpha.CreateContainerRequest.displayName = 'proto.cs3.storageproviderv0alpha.CreateContainerRequest';
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
proto.cs3.storageproviderv0alpha.CreateContainerResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storageproviderv0alpha.CreateContainerResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storageproviderv0alpha.CreateContainerResponse.displayName = 'proto.cs3.storageproviderv0alpha.CreateContainerResponse';
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
proto.cs3.storageproviderv0alpha.DeleteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storageproviderv0alpha.DeleteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storageproviderv0alpha.DeleteRequest.displayName = 'proto.cs3.storageproviderv0alpha.DeleteRequest';
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
proto.cs3.storageproviderv0alpha.DeleteResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storageproviderv0alpha.DeleteResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storageproviderv0alpha.DeleteResponse.displayName = 'proto.cs3.storageproviderv0alpha.DeleteResponse';
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
proto.cs3.storageproviderv0alpha.GetProviderRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storageproviderv0alpha.GetProviderRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storageproviderv0alpha.GetProviderRequest.displayName = 'proto.cs3.storageproviderv0alpha.GetProviderRequest';
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
proto.cs3.storageproviderv0alpha.GetProviderResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storageproviderv0alpha.GetProviderResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storageproviderv0alpha.GetProviderResponse.displayName = 'proto.cs3.storageproviderv0alpha.GetProviderResponse';
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
proto.cs3.storageproviderv0alpha.GetPathRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storageproviderv0alpha.GetPathRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storageproviderv0alpha.GetPathRequest.displayName = 'proto.cs3.storageproviderv0alpha.GetPathRequest';
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
proto.cs3.storageproviderv0alpha.GetPathResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storageproviderv0alpha.GetPathResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storageproviderv0alpha.GetPathResponse.displayName = 'proto.cs3.storageproviderv0alpha.GetPathResponse';
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
proto.cs3.storageproviderv0alpha.GetQuotaRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storageproviderv0alpha.GetQuotaRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storageproviderv0alpha.GetQuotaRequest.displayName = 'proto.cs3.storageproviderv0alpha.GetQuotaRequest';
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
proto.cs3.storageproviderv0alpha.GetQuotaResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storageproviderv0alpha.GetQuotaResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storageproviderv0alpha.GetQuotaResponse.displayName = 'proto.cs3.storageproviderv0alpha.GetQuotaResponse';
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
proto.cs3.storageproviderv0alpha.InitiateFileUploadRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storageproviderv0alpha.InitiateFileUploadRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storageproviderv0alpha.InitiateFileUploadRequest.displayName = 'proto.cs3.storageproviderv0alpha.InitiateFileUploadRequest';
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
proto.cs3.storageproviderv0alpha.InitiateFileUploadResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cs3.storageproviderv0alpha.InitiateFileUploadResponse.repeatedFields_, null);
};
goog.inherits(proto.cs3.storageproviderv0alpha.InitiateFileUploadResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storageproviderv0alpha.InitiateFileUploadResponse.displayName = 'proto.cs3.storageproviderv0alpha.InitiateFileUploadResponse';
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
proto.cs3.storageproviderv0alpha.InitiateFileDownloadRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storageproviderv0alpha.InitiateFileDownloadRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storageproviderv0alpha.InitiateFileDownloadRequest.displayName = 'proto.cs3.storageproviderv0alpha.InitiateFileDownloadRequest';
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
proto.cs3.storageproviderv0alpha.InitiateFileDownloadResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storageproviderv0alpha.InitiateFileDownloadResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storageproviderv0alpha.InitiateFileDownloadResponse.displayName = 'proto.cs3.storageproviderv0alpha.InitiateFileDownloadResponse';
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
proto.cs3.storageproviderv0alpha.ListGrantsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storageproviderv0alpha.ListGrantsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storageproviderv0alpha.ListGrantsRequest.displayName = 'proto.cs3.storageproviderv0alpha.ListGrantsRequest';
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
proto.cs3.storageproviderv0alpha.ListGrantsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cs3.storageproviderv0alpha.ListGrantsResponse.repeatedFields_, null);
};
goog.inherits(proto.cs3.storageproviderv0alpha.ListGrantsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storageproviderv0alpha.ListGrantsResponse.displayName = 'proto.cs3.storageproviderv0alpha.ListGrantsResponse';
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
proto.cs3.storageproviderv0alpha.ListContainerStreamRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cs3.storageproviderv0alpha.ListContainerStreamRequest.repeatedFields_, null);
};
goog.inherits(proto.cs3.storageproviderv0alpha.ListContainerStreamRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storageproviderv0alpha.ListContainerStreamRequest.displayName = 'proto.cs3.storageproviderv0alpha.ListContainerStreamRequest';
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
proto.cs3.storageproviderv0alpha.ListContainerStreamResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storageproviderv0alpha.ListContainerStreamResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storageproviderv0alpha.ListContainerStreamResponse.displayName = 'proto.cs3.storageproviderv0alpha.ListContainerStreamResponse';
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
proto.cs3.storageproviderv0alpha.ListContainerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cs3.storageproviderv0alpha.ListContainerRequest.repeatedFields_, null);
};
goog.inherits(proto.cs3.storageproviderv0alpha.ListContainerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storageproviderv0alpha.ListContainerRequest.displayName = 'proto.cs3.storageproviderv0alpha.ListContainerRequest';
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
proto.cs3.storageproviderv0alpha.ListContainerResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cs3.storageproviderv0alpha.ListContainerResponse.repeatedFields_, null);
};
goog.inherits(proto.cs3.storageproviderv0alpha.ListContainerResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storageproviderv0alpha.ListContainerResponse.displayName = 'proto.cs3.storageproviderv0alpha.ListContainerResponse';
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
proto.cs3.storageproviderv0alpha.ListFileVersionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storageproviderv0alpha.ListFileVersionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storageproviderv0alpha.ListFileVersionsRequest.displayName = 'proto.cs3.storageproviderv0alpha.ListFileVersionsRequest';
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
proto.cs3.storageproviderv0alpha.ListFileVersionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cs3.storageproviderv0alpha.ListFileVersionsResponse.repeatedFields_, null);
};
goog.inherits(proto.cs3.storageproviderv0alpha.ListFileVersionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storageproviderv0alpha.ListFileVersionsResponse.displayName = 'proto.cs3.storageproviderv0alpha.ListFileVersionsResponse';
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
proto.cs3.storageproviderv0alpha.ListRecycleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storageproviderv0alpha.ListRecycleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storageproviderv0alpha.ListRecycleRequest.displayName = 'proto.cs3.storageproviderv0alpha.ListRecycleRequest';
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
proto.cs3.storageproviderv0alpha.ListRecycleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cs3.storageproviderv0alpha.ListRecycleResponse.repeatedFields_, null);
};
goog.inherits(proto.cs3.storageproviderv0alpha.ListRecycleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storageproviderv0alpha.ListRecycleResponse.displayName = 'proto.cs3.storageproviderv0alpha.ListRecycleResponse';
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
proto.cs3.storageproviderv0alpha.ListRecycleStreamRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storageproviderv0alpha.ListRecycleStreamRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storageproviderv0alpha.ListRecycleStreamRequest.displayName = 'proto.cs3.storageproviderv0alpha.ListRecycleStreamRequest';
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
proto.cs3.storageproviderv0alpha.ListRecycleStreamResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storageproviderv0alpha.ListRecycleStreamResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storageproviderv0alpha.ListRecycleStreamResponse.displayName = 'proto.cs3.storageproviderv0alpha.ListRecycleStreamResponse';
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
proto.cs3.storageproviderv0alpha.MoveRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storageproviderv0alpha.MoveRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storageproviderv0alpha.MoveRequest.displayName = 'proto.cs3.storageproviderv0alpha.MoveRequest';
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
proto.cs3.storageproviderv0alpha.MoveResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storageproviderv0alpha.MoveResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storageproviderv0alpha.MoveResponse.displayName = 'proto.cs3.storageproviderv0alpha.MoveResponse';
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
proto.cs3.storageproviderv0alpha.PurgeRecycleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storageproviderv0alpha.PurgeRecycleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storageproviderv0alpha.PurgeRecycleRequest.displayName = 'proto.cs3.storageproviderv0alpha.PurgeRecycleRequest';
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
proto.cs3.storageproviderv0alpha.PurgeRecycleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storageproviderv0alpha.PurgeRecycleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storageproviderv0alpha.PurgeRecycleResponse.displayName = 'proto.cs3.storageproviderv0alpha.PurgeRecycleResponse';
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
proto.cs3.storageproviderv0alpha.RestoreFileVersionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storageproviderv0alpha.RestoreFileVersionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storageproviderv0alpha.RestoreFileVersionRequest.displayName = 'proto.cs3.storageproviderv0alpha.RestoreFileVersionRequest';
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
proto.cs3.storageproviderv0alpha.RestoreFileVersionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storageproviderv0alpha.RestoreFileVersionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storageproviderv0alpha.RestoreFileVersionResponse.displayName = 'proto.cs3.storageproviderv0alpha.RestoreFileVersionResponse';
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
proto.cs3.storageproviderv0alpha.RestoreRecycleItemRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storageproviderv0alpha.RestoreRecycleItemRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storageproviderv0alpha.RestoreRecycleItemRequest.displayName = 'proto.cs3.storageproviderv0alpha.RestoreRecycleItemRequest';
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
proto.cs3.storageproviderv0alpha.RestoreRecycleItemResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storageproviderv0alpha.RestoreRecycleItemResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storageproviderv0alpha.RestoreRecycleItemResponse.displayName = 'proto.cs3.storageproviderv0alpha.RestoreRecycleItemResponse';
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
proto.cs3.storageproviderv0alpha.RemoveGrantRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storageproviderv0alpha.RemoveGrantRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storageproviderv0alpha.RemoveGrantRequest.displayName = 'proto.cs3.storageproviderv0alpha.RemoveGrantRequest';
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
proto.cs3.storageproviderv0alpha.RemoveGrantResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storageproviderv0alpha.RemoveGrantResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storageproviderv0alpha.RemoveGrantResponse.displayName = 'proto.cs3.storageproviderv0alpha.RemoveGrantResponse';
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
proto.cs3.storageproviderv0alpha.StatRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cs3.storageproviderv0alpha.StatRequest.repeatedFields_, null);
};
goog.inherits(proto.cs3.storageproviderv0alpha.StatRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storageproviderv0alpha.StatRequest.displayName = 'proto.cs3.storageproviderv0alpha.StatRequest';
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
proto.cs3.storageproviderv0alpha.StatResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storageproviderv0alpha.StatResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storageproviderv0alpha.StatResponse.displayName = 'proto.cs3.storageproviderv0alpha.StatResponse';
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
proto.cs3.storageproviderv0alpha.UpdateGrantRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storageproviderv0alpha.UpdateGrantRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storageproviderv0alpha.UpdateGrantRequest.displayName = 'proto.cs3.storageproviderv0alpha.UpdateGrantRequest';
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
proto.cs3.storageproviderv0alpha.UpdateGrantResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storageproviderv0alpha.UpdateGrantResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storageproviderv0alpha.UpdateGrantResponse.displayName = 'proto.cs3.storageproviderv0alpha.UpdateGrantResponse';
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
proto.cs3.storageproviderv0alpha.CreateReferenceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storageproviderv0alpha.CreateReferenceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storageproviderv0alpha.CreateReferenceRequest.displayName = 'proto.cs3.storageproviderv0alpha.CreateReferenceRequest';
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
proto.cs3.storageproviderv0alpha.CreateReferenceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storageproviderv0alpha.CreateReferenceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storageproviderv0alpha.CreateReferenceResponse.displayName = 'proto.cs3.storageproviderv0alpha.CreateReferenceResponse';
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
proto.cs3.storageproviderv0alpha.SetArbitraryMetadataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storageproviderv0alpha.SetArbitraryMetadataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storageproviderv0alpha.SetArbitraryMetadataRequest.displayName = 'proto.cs3.storageproviderv0alpha.SetArbitraryMetadataRequest';
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
proto.cs3.storageproviderv0alpha.SetArbitraryMetadataResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storageproviderv0alpha.SetArbitraryMetadataResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storageproviderv0alpha.SetArbitraryMetadataResponse.displayName = 'proto.cs3.storageproviderv0alpha.SetArbitraryMetadataResponse';
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
proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataRequest.repeatedFields_, null);
};
goog.inherits(proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataRequest.displayName = 'proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataRequest';
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
proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataResponse.displayName = 'proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataResponse';
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
proto.cs3.storageproviderv0alpha.AddGrantRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storageproviderv0alpha.AddGrantRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storageproviderv0alpha.AddGrantRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.AddGrantRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_types_pb.Opaque.toObject(includeInstance, f),
    ref: (f = msg.getRef()) && cs3_storageprovider_v0alpha_resources_pb.Reference.toObject(includeInstance, f),
    grant: (f = msg.getGrant()) && cs3_storageprovider_v0alpha_resources_pb.Grant.toObject(includeInstance, f)
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
 * @return {!proto.cs3.storageproviderv0alpha.AddGrantRequest}
 */
proto.cs3.storageproviderv0alpha.AddGrantRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storageproviderv0alpha.AddGrantRequest;
  return proto.cs3.storageproviderv0alpha.AddGrantRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storageproviderv0alpha.AddGrantRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storageproviderv0alpha.AddGrantRequest}
 */
proto.cs3.storageproviderv0alpha.AddGrantRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new cs3_storageprovider_v0alpha_resources_pb.Reference;
      reader.readMessage(value,cs3_storageprovider_v0alpha_resources_pb.Reference.deserializeBinaryFromReader);
      msg.setRef(value);
      break;
    case 3:
      var value = new cs3_storageprovider_v0alpha_resources_pb.Grant;
      reader.readMessage(value,cs3_storageprovider_v0alpha_resources_pb.Grant.deserializeBinaryFromReader);
      msg.setGrant(value);
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
proto.cs3.storageproviderv0alpha.AddGrantRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storageproviderv0alpha.AddGrantRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storageproviderv0alpha.AddGrantRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.AddGrantRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getRef();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_storageprovider_v0alpha_resources_pb.Reference.serializeBinaryToWriter
    );
  }
  f = message.getGrant();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      cs3_storageprovider_v0alpha_resources_pb.Grant.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.types.Opaque opaque = 1;
 * @return {?proto.cs3.types.Opaque}
 */
proto.cs3.storageproviderv0alpha.AddGrantRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_types_pb.Opaque, 1));
};


/** @param {?proto.cs3.types.Opaque|undefined} value */
proto.cs3.storageproviderv0alpha.AddGrantRequest.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.AddGrantRequest.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.AddGrantRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Reference ref = 2;
 * @return {?proto.cs3.storageproviderv0alpha.Reference}
 */
proto.cs3.storageproviderv0alpha.AddGrantRequest.prototype.getRef = function() {
  return /** @type{?proto.cs3.storageproviderv0alpha.Reference} */ (
    jspb.Message.getWrapperField(this, cs3_storageprovider_v0alpha_resources_pb.Reference, 2));
};


/** @param {?proto.cs3.storageproviderv0alpha.Reference|undefined} value */
proto.cs3.storageproviderv0alpha.AddGrantRequest.prototype.setRef = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.AddGrantRequest.prototype.clearRef = function() {
  this.setRef(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.AddGrantRequest.prototype.hasRef = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Grant grant = 3;
 * @return {?proto.cs3.storageproviderv0alpha.Grant}
 */
proto.cs3.storageproviderv0alpha.AddGrantRequest.prototype.getGrant = function() {
  return /** @type{?proto.cs3.storageproviderv0alpha.Grant} */ (
    jspb.Message.getWrapperField(this, cs3_storageprovider_v0alpha_resources_pb.Grant, 3));
};


/** @param {?proto.cs3.storageproviderv0alpha.Grant|undefined} value */
proto.cs3.storageproviderv0alpha.AddGrantRequest.prototype.setGrant = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.AddGrantRequest.prototype.clearGrant = function() {
  this.setGrant(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.AddGrantRequest.prototype.hasGrant = function() {
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
proto.cs3.storageproviderv0alpha.AddGrantResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storageproviderv0alpha.AddGrantResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storageproviderv0alpha.AddGrantResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.AddGrantResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && cs3_rpc_status_pb.Status.toObject(includeInstance, f),
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
 * @return {!proto.cs3.storageproviderv0alpha.AddGrantResponse}
 */
proto.cs3.storageproviderv0alpha.AddGrantResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storageproviderv0alpha.AddGrantResponse;
  return proto.cs3.storageproviderv0alpha.AddGrantResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storageproviderv0alpha.AddGrantResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storageproviderv0alpha.AddGrantResponse}
 */
proto.cs3.storageproviderv0alpha.AddGrantResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.cs3.storageproviderv0alpha.AddGrantResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storageproviderv0alpha.AddGrantResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storageproviderv0alpha.AddGrantResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.AddGrantResponse.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional cs3.rpc.Status status = 1;
 * @return {?proto.cs3.rpc.Status}
 */
proto.cs3.storageproviderv0alpha.AddGrantResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.Status} */ (
    jspb.Message.getWrapperField(this, cs3_rpc_status_pb.Status, 1));
};


/** @param {?proto.cs3.rpc.Status|undefined} value */
proto.cs3.storageproviderv0alpha.AddGrantResponse.prototype.setStatus = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.AddGrantResponse.prototype.clearStatus = function() {
  this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.AddGrantResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.Opaque opaque = 2;
 * @return {?proto.cs3.types.Opaque}
 */
proto.cs3.storageproviderv0alpha.AddGrantResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_types_pb.Opaque, 2));
};


/** @param {?proto.cs3.types.Opaque|undefined} value */
proto.cs3.storageproviderv0alpha.AddGrantResponse.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.AddGrantResponse.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.AddGrantResponse.prototype.hasOpaque = function() {
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
proto.cs3.storageproviderv0alpha.CreateContainerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storageproviderv0alpha.CreateContainerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storageproviderv0alpha.CreateContainerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.CreateContainerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_types_pb.Opaque.toObject(includeInstance, f),
    ref: (f = msg.getRef()) && cs3_storageprovider_v0alpha_resources_pb.Reference.toObject(includeInstance, f)
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
 * @return {!proto.cs3.storageproviderv0alpha.CreateContainerRequest}
 */
proto.cs3.storageproviderv0alpha.CreateContainerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storageproviderv0alpha.CreateContainerRequest;
  return proto.cs3.storageproviderv0alpha.CreateContainerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storageproviderv0alpha.CreateContainerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storageproviderv0alpha.CreateContainerRequest}
 */
proto.cs3.storageproviderv0alpha.CreateContainerRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new cs3_storageprovider_v0alpha_resources_pb.Reference;
      reader.readMessage(value,cs3_storageprovider_v0alpha_resources_pb.Reference.deserializeBinaryFromReader);
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
proto.cs3.storageproviderv0alpha.CreateContainerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storageproviderv0alpha.CreateContainerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storageproviderv0alpha.CreateContainerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.CreateContainerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getRef();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_storageprovider_v0alpha_resources_pb.Reference.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.types.Opaque opaque = 1;
 * @return {?proto.cs3.types.Opaque}
 */
proto.cs3.storageproviderv0alpha.CreateContainerRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_types_pb.Opaque, 1));
};


/** @param {?proto.cs3.types.Opaque|undefined} value */
proto.cs3.storageproviderv0alpha.CreateContainerRequest.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.CreateContainerRequest.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.CreateContainerRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Reference ref = 2;
 * @return {?proto.cs3.storageproviderv0alpha.Reference}
 */
proto.cs3.storageproviderv0alpha.CreateContainerRequest.prototype.getRef = function() {
  return /** @type{?proto.cs3.storageproviderv0alpha.Reference} */ (
    jspb.Message.getWrapperField(this, cs3_storageprovider_v0alpha_resources_pb.Reference, 2));
};


/** @param {?proto.cs3.storageproviderv0alpha.Reference|undefined} value */
proto.cs3.storageproviderv0alpha.CreateContainerRequest.prototype.setRef = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.CreateContainerRequest.prototype.clearRef = function() {
  this.setRef(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.CreateContainerRequest.prototype.hasRef = function() {
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
proto.cs3.storageproviderv0alpha.CreateContainerResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storageproviderv0alpha.CreateContainerResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storageproviderv0alpha.CreateContainerResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.CreateContainerResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && cs3_rpc_status_pb.Status.toObject(includeInstance, f),
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
 * @return {!proto.cs3.storageproviderv0alpha.CreateContainerResponse}
 */
proto.cs3.storageproviderv0alpha.CreateContainerResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storageproviderv0alpha.CreateContainerResponse;
  return proto.cs3.storageproviderv0alpha.CreateContainerResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storageproviderv0alpha.CreateContainerResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storageproviderv0alpha.CreateContainerResponse}
 */
proto.cs3.storageproviderv0alpha.CreateContainerResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.cs3.storageproviderv0alpha.CreateContainerResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storageproviderv0alpha.CreateContainerResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storageproviderv0alpha.CreateContainerResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.CreateContainerResponse.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional cs3.rpc.Status status = 1;
 * @return {?proto.cs3.rpc.Status}
 */
proto.cs3.storageproviderv0alpha.CreateContainerResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.Status} */ (
    jspb.Message.getWrapperField(this, cs3_rpc_status_pb.Status, 1));
};


/** @param {?proto.cs3.rpc.Status|undefined} value */
proto.cs3.storageproviderv0alpha.CreateContainerResponse.prototype.setStatus = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.CreateContainerResponse.prototype.clearStatus = function() {
  this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.CreateContainerResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.Opaque opaque = 2;
 * @return {?proto.cs3.types.Opaque}
 */
proto.cs3.storageproviderv0alpha.CreateContainerResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_types_pb.Opaque, 2));
};


/** @param {?proto.cs3.types.Opaque|undefined} value */
proto.cs3.storageproviderv0alpha.CreateContainerResponse.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.CreateContainerResponse.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.CreateContainerResponse.prototype.hasOpaque = function() {
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
proto.cs3.storageproviderv0alpha.DeleteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storageproviderv0alpha.DeleteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storageproviderv0alpha.DeleteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.DeleteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_types_pb.Opaque.toObject(includeInstance, f),
    ref: (f = msg.getRef()) && cs3_storageprovider_v0alpha_resources_pb.Reference.toObject(includeInstance, f)
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
 * @return {!proto.cs3.storageproviderv0alpha.DeleteRequest}
 */
proto.cs3.storageproviderv0alpha.DeleteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storageproviderv0alpha.DeleteRequest;
  return proto.cs3.storageproviderv0alpha.DeleteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storageproviderv0alpha.DeleteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storageproviderv0alpha.DeleteRequest}
 */
proto.cs3.storageproviderv0alpha.DeleteRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new cs3_storageprovider_v0alpha_resources_pb.Reference;
      reader.readMessage(value,cs3_storageprovider_v0alpha_resources_pb.Reference.deserializeBinaryFromReader);
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
proto.cs3.storageproviderv0alpha.DeleteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storageproviderv0alpha.DeleteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storageproviderv0alpha.DeleteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.DeleteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getRef();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_storageprovider_v0alpha_resources_pb.Reference.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.types.Opaque opaque = 1;
 * @return {?proto.cs3.types.Opaque}
 */
proto.cs3.storageproviderv0alpha.DeleteRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_types_pb.Opaque, 1));
};


/** @param {?proto.cs3.types.Opaque|undefined} value */
proto.cs3.storageproviderv0alpha.DeleteRequest.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.DeleteRequest.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.DeleteRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Reference ref = 2;
 * @return {?proto.cs3.storageproviderv0alpha.Reference}
 */
proto.cs3.storageproviderv0alpha.DeleteRequest.prototype.getRef = function() {
  return /** @type{?proto.cs3.storageproviderv0alpha.Reference} */ (
    jspb.Message.getWrapperField(this, cs3_storageprovider_v0alpha_resources_pb.Reference, 2));
};


/** @param {?proto.cs3.storageproviderv0alpha.Reference|undefined} value */
proto.cs3.storageproviderv0alpha.DeleteRequest.prototype.setRef = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.DeleteRequest.prototype.clearRef = function() {
  this.setRef(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.DeleteRequest.prototype.hasRef = function() {
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
proto.cs3.storageproviderv0alpha.DeleteResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storageproviderv0alpha.DeleteResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storageproviderv0alpha.DeleteResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.DeleteResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && cs3_rpc_status_pb.Status.toObject(includeInstance, f),
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
 * @return {!proto.cs3.storageproviderv0alpha.DeleteResponse}
 */
proto.cs3.storageproviderv0alpha.DeleteResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storageproviderv0alpha.DeleteResponse;
  return proto.cs3.storageproviderv0alpha.DeleteResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storageproviderv0alpha.DeleteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storageproviderv0alpha.DeleteResponse}
 */
proto.cs3.storageproviderv0alpha.DeleteResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.cs3.storageproviderv0alpha.DeleteResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storageproviderv0alpha.DeleteResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storageproviderv0alpha.DeleteResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.DeleteResponse.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional cs3.rpc.Status status = 1;
 * @return {?proto.cs3.rpc.Status}
 */
proto.cs3.storageproviderv0alpha.DeleteResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.Status} */ (
    jspb.Message.getWrapperField(this, cs3_rpc_status_pb.Status, 1));
};


/** @param {?proto.cs3.rpc.Status|undefined} value */
proto.cs3.storageproviderv0alpha.DeleteResponse.prototype.setStatus = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.DeleteResponse.prototype.clearStatus = function() {
  this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.DeleteResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.Opaque opaque = 2;
 * @return {?proto.cs3.types.Opaque}
 */
proto.cs3.storageproviderv0alpha.DeleteResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_types_pb.Opaque, 2));
};


/** @param {?proto.cs3.types.Opaque|undefined} value */
proto.cs3.storageproviderv0alpha.DeleteResponse.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.DeleteResponse.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.DeleteResponse.prototype.hasOpaque = function() {
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
proto.cs3.storageproviderv0alpha.GetProviderRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storageproviderv0alpha.GetProviderRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storageproviderv0alpha.GetProviderRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.GetProviderRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.cs3.storageproviderv0alpha.GetProviderRequest}
 */
proto.cs3.storageproviderv0alpha.GetProviderRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storageproviderv0alpha.GetProviderRequest;
  return proto.cs3.storageproviderv0alpha.GetProviderRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storageproviderv0alpha.GetProviderRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storageproviderv0alpha.GetProviderRequest}
 */
proto.cs3.storageproviderv0alpha.GetProviderRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.cs3.storageproviderv0alpha.GetProviderRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storageproviderv0alpha.GetProviderRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storageproviderv0alpha.GetProviderRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.GetProviderRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.cs3.storageproviderv0alpha.GetProviderRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_types_pb.Opaque, 1));
};


/** @param {?proto.cs3.types.Opaque|undefined} value */
proto.cs3.storageproviderv0alpha.GetProviderRequest.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.GetProviderRequest.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.GetProviderRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.cs3.storageproviderv0alpha.GetProviderResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storageproviderv0alpha.GetProviderResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storageproviderv0alpha.GetProviderResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.GetProviderResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && cs3_rpc_status_pb.Status.toObject(includeInstance, f),
    opaque: (f = msg.getOpaque()) && cs3_types_types_pb.Opaque.toObject(includeInstance, f),
    info: (f = msg.getInfo()) && cs3_storagetypes_storagetypes_pb.ProviderInfo.toObject(includeInstance, f)
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
 * @return {!proto.cs3.storageproviderv0alpha.GetProviderResponse}
 */
proto.cs3.storageproviderv0alpha.GetProviderResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storageproviderv0alpha.GetProviderResponse;
  return proto.cs3.storageproviderv0alpha.GetProviderResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storageproviderv0alpha.GetProviderResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storageproviderv0alpha.GetProviderResponse}
 */
proto.cs3.storageproviderv0alpha.GetProviderResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new cs3_storagetypes_storagetypes_pb.ProviderInfo;
      reader.readMessage(value,cs3_storagetypes_storagetypes_pb.ProviderInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
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
proto.cs3.storageproviderv0alpha.GetProviderResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storageproviderv0alpha.GetProviderResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storageproviderv0alpha.GetProviderResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.GetProviderResponse.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      cs3_storagetypes_storagetypes_pb.ProviderInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.rpc.Status status = 1;
 * @return {?proto.cs3.rpc.Status}
 */
proto.cs3.storageproviderv0alpha.GetProviderResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.Status} */ (
    jspb.Message.getWrapperField(this, cs3_rpc_status_pb.Status, 1));
};


/** @param {?proto.cs3.rpc.Status|undefined} value */
proto.cs3.storageproviderv0alpha.GetProviderResponse.prototype.setStatus = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.GetProviderResponse.prototype.clearStatus = function() {
  this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.GetProviderResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.Opaque opaque = 2;
 * @return {?proto.cs3.types.Opaque}
 */
proto.cs3.storageproviderv0alpha.GetProviderResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_types_pb.Opaque, 2));
};


/** @param {?proto.cs3.types.Opaque|undefined} value */
proto.cs3.storageproviderv0alpha.GetProviderResponse.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.GetProviderResponse.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.GetProviderResponse.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional cs3.storagetypes.ProviderInfo info = 3;
 * @return {?proto.cs3.storagetypes.ProviderInfo}
 */
proto.cs3.storageproviderv0alpha.GetProviderResponse.prototype.getInfo = function() {
  return /** @type{?proto.cs3.storagetypes.ProviderInfo} */ (
    jspb.Message.getWrapperField(this, cs3_storagetypes_storagetypes_pb.ProviderInfo, 3));
};


/** @param {?proto.cs3.storagetypes.ProviderInfo|undefined} value */
proto.cs3.storageproviderv0alpha.GetProviderResponse.prototype.setInfo = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.GetProviderResponse.prototype.clearInfo = function() {
  this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.GetProviderResponse.prototype.hasInfo = function() {
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
proto.cs3.storageproviderv0alpha.GetPathRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storageproviderv0alpha.GetPathRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storageproviderv0alpha.GetPathRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.GetPathRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_types_pb.Opaque.toObject(includeInstance, f),
    resourceId: (f = msg.getResourceId()) && cs3_storageprovider_v0alpha_resources_pb.ResourceId.toObject(includeInstance, f)
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
 * @return {!proto.cs3.storageproviderv0alpha.GetPathRequest}
 */
proto.cs3.storageproviderv0alpha.GetPathRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storageproviderv0alpha.GetPathRequest;
  return proto.cs3.storageproviderv0alpha.GetPathRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storageproviderv0alpha.GetPathRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storageproviderv0alpha.GetPathRequest}
 */
proto.cs3.storageproviderv0alpha.GetPathRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new cs3_storageprovider_v0alpha_resources_pb.ResourceId;
      reader.readMessage(value,cs3_storageprovider_v0alpha_resources_pb.ResourceId.deserializeBinaryFromReader);
      msg.setResourceId(value);
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
proto.cs3.storageproviderv0alpha.GetPathRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storageproviderv0alpha.GetPathRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storageproviderv0alpha.GetPathRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.GetPathRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getResourceId();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_storageprovider_v0alpha_resources_pb.ResourceId.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.types.Opaque opaque = 1;
 * @return {?proto.cs3.types.Opaque}
 */
proto.cs3.storageproviderv0alpha.GetPathRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_types_pb.Opaque, 1));
};


/** @param {?proto.cs3.types.Opaque|undefined} value */
proto.cs3.storageproviderv0alpha.GetPathRequest.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.GetPathRequest.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.GetPathRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ResourceId resource_id = 2;
 * @return {?proto.cs3.storageproviderv0alpha.ResourceId}
 */
proto.cs3.storageproviderv0alpha.GetPathRequest.prototype.getResourceId = function() {
  return /** @type{?proto.cs3.storageproviderv0alpha.ResourceId} */ (
    jspb.Message.getWrapperField(this, cs3_storageprovider_v0alpha_resources_pb.ResourceId, 2));
};


/** @param {?proto.cs3.storageproviderv0alpha.ResourceId|undefined} value */
proto.cs3.storageproviderv0alpha.GetPathRequest.prototype.setResourceId = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.GetPathRequest.prototype.clearResourceId = function() {
  this.setResourceId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.GetPathRequest.prototype.hasResourceId = function() {
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
proto.cs3.storageproviderv0alpha.GetPathResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storageproviderv0alpha.GetPathResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storageproviderv0alpha.GetPathResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.GetPathResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && cs3_rpc_status_pb.Status.toObject(includeInstance, f),
    opaque: (f = msg.getOpaque()) && cs3_types_types_pb.Opaque.toObject(includeInstance, f),
    path: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.cs3.storageproviderv0alpha.GetPathResponse}
 */
proto.cs3.storageproviderv0alpha.GetPathResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storageproviderv0alpha.GetPathResponse;
  return proto.cs3.storageproviderv0alpha.GetPathResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storageproviderv0alpha.GetPathResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storageproviderv0alpha.GetPathResponse}
 */
proto.cs3.storageproviderv0alpha.GetPathResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
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
proto.cs3.storageproviderv0alpha.GetPathResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storageproviderv0alpha.GetPathResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storageproviderv0alpha.GetPathResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.GetPathResponse.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional cs3.rpc.Status status = 1;
 * @return {?proto.cs3.rpc.Status}
 */
proto.cs3.storageproviderv0alpha.GetPathResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.Status} */ (
    jspb.Message.getWrapperField(this, cs3_rpc_status_pb.Status, 1));
};


/** @param {?proto.cs3.rpc.Status|undefined} value */
proto.cs3.storageproviderv0alpha.GetPathResponse.prototype.setStatus = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.GetPathResponse.prototype.clearStatus = function() {
  this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.GetPathResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.Opaque opaque = 2;
 * @return {?proto.cs3.types.Opaque}
 */
proto.cs3.storageproviderv0alpha.GetPathResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_types_pb.Opaque, 2));
};


/** @param {?proto.cs3.types.Opaque|undefined} value */
proto.cs3.storageproviderv0alpha.GetPathResponse.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.GetPathResponse.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.GetPathResponse.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string path = 3;
 * @return {string}
 */
proto.cs3.storageproviderv0alpha.GetPathResponse.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.cs3.storageproviderv0alpha.GetPathResponse.prototype.setPath = function(value) {
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
proto.cs3.storageproviderv0alpha.GetQuotaRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storageproviderv0alpha.GetQuotaRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storageproviderv0alpha.GetQuotaRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.GetQuotaRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.cs3.storageproviderv0alpha.GetQuotaRequest}
 */
proto.cs3.storageproviderv0alpha.GetQuotaRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storageproviderv0alpha.GetQuotaRequest;
  return proto.cs3.storageproviderv0alpha.GetQuotaRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storageproviderv0alpha.GetQuotaRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storageproviderv0alpha.GetQuotaRequest}
 */
proto.cs3.storageproviderv0alpha.GetQuotaRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.cs3.storageproviderv0alpha.GetQuotaRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storageproviderv0alpha.GetQuotaRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storageproviderv0alpha.GetQuotaRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.GetQuotaRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.cs3.storageproviderv0alpha.GetQuotaRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_types_pb.Opaque, 1));
};


/** @param {?proto.cs3.types.Opaque|undefined} value */
proto.cs3.storageproviderv0alpha.GetQuotaRequest.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.GetQuotaRequest.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.GetQuotaRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.cs3.storageproviderv0alpha.GetQuotaResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storageproviderv0alpha.GetQuotaResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storageproviderv0alpha.GetQuotaResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.GetQuotaResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && cs3_rpc_status_pb.Status.toObject(includeInstance, f),
    opaque: (f = msg.getOpaque()) && cs3_types_types_pb.Opaque.toObject(includeInstance, f),
    totalBytes: jspb.Message.getFieldWithDefault(msg, 3, 0),
    usedBytes: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.cs3.storageproviderv0alpha.GetQuotaResponse}
 */
proto.cs3.storageproviderv0alpha.GetQuotaResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storageproviderv0alpha.GetQuotaResponse;
  return proto.cs3.storageproviderv0alpha.GetQuotaResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storageproviderv0alpha.GetQuotaResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storageproviderv0alpha.GetQuotaResponse}
 */
proto.cs3.storageproviderv0alpha.GetQuotaResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalBytes(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUsedBytes(value);
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
proto.cs3.storageproviderv0alpha.GetQuotaResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storageproviderv0alpha.GetQuotaResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storageproviderv0alpha.GetQuotaResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.GetQuotaResponse.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getTotalBytes();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getUsedBytes();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * optional cs3.rpc.Status status = 1;
 * @return {?proto.cs3.rpc.Status}
 */
proto.cs3.storageproviderv0alpha.GetQuotaResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.Status} */ (
    jspb.Message.getWrapperField(this, cs3_rpc_status_pb.Status, 1));
};


/** @param {?proto.cs3.rpc.Status|undefined} value */
proto.cs3.storageproviderv0alpha.GetQuotaResponse.prototype.setStatus = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.GetQuotaResponse.prototype.clearStatus = function() {
  this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.GetQuotaResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.Opaque opaque = 2;
 * @return {?proto.cs3.types.Opaque}
 */
proto.cs3.storageproviderv0alpha.GetQuotaResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_types_pb.Opaque, 2));
};


/** @param {?proto.cs3.types.Opaque|undefined} value */
proto.cs3.storageproviderv0alpha.GetQuotaResponse.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.GetQuotaResponse.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.GetQuotaResponse.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 total_bytes = 3;
 * @return {number}
 */
proto.cs3.storageproviderv0alpha.GetQuotaResponse.prototype.getTotalBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.cs3.storageproviderv0alpha.GetQuotaResponse.prototype.setTotalBytes = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 used_bytes = 4;
 * @return {number}
 */
proto.cs3.storageproviderv0alpha.GetQuotaResponse.prototype.getUsedBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.cs3.storageproviderv0alpha.GetQuotaResponse.prototype.setUsedBytes = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
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
proto.cs3.storageproviderv0alpha.InitiateFileUploadRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storageproviderv0alpha.InitiateFileUploadRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storageproviderv0alpha.InitiateFileUploadRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.InitiateFileUploadRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_types_pb.Opaque.toObject(includeInstance, f),
    ref: (f = msg.getRef()) && cs3_storageprovider_v0alpha_resources_pb.Reference.toObject(includeInstance, f)
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
 * @return {!proto.cs3.storageproviderv0alpha.InitiateFileUploadRequest}
 */
proto.cs3.storageproviderv0alpha.InitiateFileUploadRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storageproviderv0alpha.InitiateFileUploadRequest;
  return proto.cs3.storageproviderv0alpha.InitiateFileUploadRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storageproviderv0alpha.InitiateFileUploadRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storageproviderv0alpha.InitiateFileUploadRequest}
 */
proto.cs3.storageproviderv0alpha.InitiateFileUploadRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new cs3_storageprovider_v0alpha_resources_pb.Reference;
      reader.readMessage(value,cs3_storageprovider_v0alpha_resources_pb.Reference.deserializeBinaryFromReader);
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
proto.cs3.storageproviderv0alpha.InitiateFileUploadRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storageproviderv0alpha.InitiateFileUploadRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storageproviderv0alpha.InitiateFileUploadRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.InitiateFileUploadRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getRef();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_storageprovider_v0alpha_resources_pb.Reference.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.types.Opaque opaque = 1;
 * @return {?proto.cs3.types.Opaque}
 */
proto.cs3.storageproviderv0alpha.InitiateFileUploadRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_types_pb.Opaque, 1));
};


/** @param {?proto.cs3.types.Opaque|undefined} value */
proto.cs3.storageproviderv0alpha.InitiateFileUploadRequest.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.InitiateFileUploadRequest.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.InitiateFileUploadRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Reference ref = 2;
 * @return {?proto.cs3.storageproviderv0alpha.Reference}
 */
proto.cs3.storageproviderv0alpha.InitiateFileUploadRequest.prototype.getRef = function() {
  return /** @type{?proto.cs3.storageproviderv0alpha.Reference} */ (
    jspb.Message.getWrapperField(this, cs3_storageprovider_v0alpha_resources_pb.Reference, 2));
};


/** @param {?proto.cs3.storageproviderv0alpha.Reference|undefined} value */
proto.cs3.storageproviderv0alpha.InitiateFileUploadRequest.prototype.setRef = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.InitiateFileUploadRequest.prototype.clearRef = function() {
  this.setRef(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.InitiateFileUploadRequest.prototype.hasRef = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cs3.storageproviderv0alpha.InitiateFileUploadResponse.repeatedFields_ = [4];



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
proto.cs3.storageproviderv0alpha.InitiateFileUploadResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storageproviderv0alpha.InitiateFileUploadResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storageproviderv0alpha.InitiateFileUploadResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.InitiateFileUploadResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && cs3_rpc_status_pb.Status.toObject(includeInstance, f),
    opaque: (f = msg.getOpaque()) && cs3_types_types_pb.Opaque.toObject(includeInstance, f),
    uploadEndpoint: jspb.Message.getFieldWithDefault(msg, 3, ""),
    availableChecksumsList: jspb.Message.toObjectList(msg.getAvailableChecksumsList(),
    cs3_storageprovider_v0alpha_resources_pb.ResourceChecksumPriority.toObject, includeInstance),
    expose: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
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
 * @return {!proto.cs3.storageproviderv0alpha.InitiateFileUploadResponse}
 */
proto.cs3.storageproviderv0alpha.InitiateFileUploadResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storageproviderv0alpha.InitiateFileUploadResponse;
  return proto.cs3.storageproviderv0alpha.InitiateFileUploadResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storageproviderv0alpha.InitiateFileUploadResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storageproviderv0alpha.InitiateFileUploadResponse}
 */
proto.cs3.storageproviderv0alpha.InitiateFileUploadResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setUploadEndpoint(value);
      break;
    case 4:
      var value = new cs3_storageprovider_v0alpha_resources_pb.ResourceChecksumPriority;
      reader.readMessage(value,cs3_storageprovider_v0alpha_resources_pb.ResourceChecksumPriority.deserializeBinaryFromReader);
      msg.addAvailableChecksums(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExpose(value);
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
proto.cs3.storageproviderv0alpha.InitiateFileUploadResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storageproviderv0alpha.InitiateFileUploadResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storageproviderv0alpha.InitiateFileUploadResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.InitiateFileUploadResponse.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getUploadEndpoint();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAvailableChecksumsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      cs3_storageprovider_v0alpha_resources_pb.ResourceChecksumPriority.serializeBinaryToWriter
    );
  }
  f = message.getExpose();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional cs3.rpc.Status status = 1;
 * @return {?proto.cs3.rpc.Status}
 */
proto.cs3.storageproviderv0alpha.InitiateFileUploadResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.Status} */ (
    jspb.Message.getWrapperField(this, cs3_rpc_status_pb.Status, 1));
};


/** @param {?proto.cs3.rpc.Status|undefined} value */
proto.cs3.storageproviderv0alpha.InitiateFileUploadResponse.prototype.setStatus = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.InitiateFileUploadResponse.prototype.clearStatus = function() {
  this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.InitiateFileUploadResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.Opaque opaque = 2;
 * @return {?proto.cs3.types.Opaque}
 */
proto.cs3.storageproviderv0alpha.InitiateFileUploadResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_types_pb.Opaque, 2));
};


/** @param {?proto.cs3.types.Opaque|undefined} value */
proto.cs3.storageproviderv0alpha.InitiateFileUploadResponse.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.InitiateFileUploadResponse.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.InitiateFileUploadResponse.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string upload_endpoint = 3;
 * @return {string}
 */
proto.cs3.storageproviderv0alpha.InitiateFileUploadResponse.prototype.getUploadEndpoint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.cs3.storageproviderv0alpha.InitiateFileUploadResponse.prototype.setUploadEndpoint = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated ResourceChecksumPriority available_checksums = 4;
 * @return {!Array<!proto.cs3.storageproviderv0alpha.ResourceChecksumPriority>}
 */
proto.cs3.storageproviderv0alpha.InitiateFileUploadResponse.prototype.getAvailableChecksumsList = function() {
  return /** @type{!Array<!proto.cs3.storageproviderv0alpha.ResourceChecksumPriority>} */ (
    jspb.Message.getRepeatedWrapperField(this, cs3_storageprovider_v0alpha_resources_pb.ResourceChecksumPriority, 4));
};


/** @param {!Array<!proto.cs3.storageproviderv0alpha.ResourceChecksumPriority>} value */
proto.cs3.storageproviderv0alpha.InitiateFileUploadResponse.prototype.setAvailableChecksumsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.cs3.storageproviderv0alpha.ResourceChecksumPriority=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cs3.storageproviderv0alpha.ResourceChecksumPriority}
 */
proto.cs3.storageproviderv0alpha.InitiateFileUploadResponse.prototype.addAvailableChecksums = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.cs3.storageproviderv0alpha.ResourceChecksumPriority, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.cs3.storageproviderv0alpha.InitiateFileUploadResponse.prototype.clearAvailableChecksumsList = function() {
  this.setAvailableChecksumsList([]);
};


/**
 * optional bool expose = 5;
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.InitiateFileUploadResponse.prototype.getExpose = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/** @param {boolean} value */
proto.cs3.storageproviderv0alpha.InitiateFileUploadResponse.prototype.setExpose = function(value) {
  jspb.Message.setProto3BooleanField(this, 5, value);
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
proto.cs3.storageproviderv0alpha.InitiateFileDownloadRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storageproviderv0alpha.InitiateFileDownloadRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storageproviderv0alpha.InitiateFileDownloadRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.InitiateFileDownloadRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_types_pb.Opaque.toObject(includeInstance, f),
    ref: (f = msg.getRef()) && cs3_storageprovider_v0alpha_resources_pb.Reference.toObject(includeInstance, f)
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
 * @return {!proto.cs3.storageproviderv0alpha.InitiateFileDownloadRequest}
 */
proto.cs3.storageproviderv0alpha.InitiateFileDownloadRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storageproviderv0alpha.InitiateFileDownloadRequest;
  return proto.cs3.storageproviderv0alpha.InitiateFileDownloadRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storageproviderv0alpha.InitiateFileDownloadRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storageproviderv0alpha.InitiateFileDownloadRequest}
 */
proto.cs3.storageproviderv0alpha.InitiateFileDownloadRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new cs3_storageprovider_v0alpha_resources_pb.Reference;
      reader.readMessage(value,cs3_storageprovider_v0alpha_resources_pb.Reference.deserializeBinaryFromReader);
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
proto.cs3.storageproviderv0alpha.InitiateFileDownloadRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storageproviderv0alpha.InitiateFileDownloadRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storageproviderv0alpha.InitiateFileDownloadRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.InitiateFileDownloadRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getRef();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_storageprovider_v0alpha_resources_pb.Reference.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.types.Opaque opaque = 1;
 * @return {?proto.cs3.types.Opaque}
 */
proto.cs3.storageproviderv0alpha.InitiateFileDownloadRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_types_pb.Opaque, 1));
};


/** @param {?proto.cs3.types.Opaque|undefined} value */
proto.cs3.storageproviderv0alpha.InitiateFileDownloadRequest.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.InitiateFileDownloadRequest.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.InitiateFileDownloadRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Reference ref = 2;
 * @return {?proto.cs3.storageproviderv0alpha.Reference}
 */
proto.cs3.storageproviderv0alpha.InitiateFileDownloadRequest.prototype.getRef = function() {
  return /** @type{?proto.cs3.storageproviderv0alpha.Reference} */ (
    jspb.Message.getWrapperField(this, cs3_storageprovider_v0alpha_resources_pb.Reference, 2));
};


/** @param {?proto.cs3.storageproviderv0alpha.Reference|undefined} value */
proto.cs3.storageproviderv0alpha.InitiateFileDownloadRequest.prototype.setRef = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.InitiateFileDownloadRequest.prototype.clearRef = function() {
  this.setRef(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.InitiateFileDownloadRequest.prototype.hasRef = function() {
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
proto.cs3.storageproviderv0alpha.InitiateFileDownloadResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storageproviderv0alpha.InitiateFileDownloadResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storageproviderv0alpha.InitiateFileDownloadResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.InitiateFileDownloadResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && cs3_rpc_status_pb.Status.toObject(includeInstance, f),
    opaque: (f = msg.getOpaque()) && cs3_types_types_pb.Opaque.toObject(includeInstance, f),
    downloadEndpoint: jspb.Message.getFieldWithDefault(msg, 3, ""),
    expose: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
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
 * @return {!proto.cs3.storageproviderv0alpha.InitiateFileDownloadResponse}
 */
proto.cs3.storageproviderv0alpha.InitiateFileDownloadResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storageproviderv0alpha.InitiateFileDownloadResponse;
  return proto.cs3.storageproviderv0alpha.InitiateFileDownloadResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storageproviderv0alpha.InitiateFileDownloadResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storageproviderv0alpha.InitiateFileDownloadResponse}
 */
proto.cs3.storageproviderv0alpha.InitiateFileDownloadResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setDownloadEndpoint(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExpose(value);
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
proto.cs3.storageproviderv0alpha.InitiateFileDownloadResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storageproviderv0alpha.InitiateFileDownloadResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storageproviderv0alpha.InitiateFileDownloadResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.InitiateFileDownloadResponse.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getDownloadEndpoint();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getExpose();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional cs3.rpc.Status status = 1;
 * @return {?proto.cs3.rpc.Status}
 */
proto.cs3.storageproviderv0alpha.InitiateFileDownloadResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.Status} */ (
    jspb.Message.getWrapperField(this, cs3_rpc_status_pb.Status, 1));
};


/** @param {?proto.cs3.rpc.Status|undefined} value */
proto.cs3.storageproviderv0alpha.InitiateFileDownloadResponse.prototype.setStatus = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.InitiateFileDownloadResponse.prototype.clearStatus = function() {
  this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.InitiateFileDownloadResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.Opaque opaque = 2;
 * @return {?proto.cs3.types.Opaque}
 */
proto.cs3.storageproviderv0alpha.InitiateFileDownloadResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_types_pb.Opaque, 2));
};


/** @param {?proto.cs3.types.Opaque|undefined} value */
proto.cs3.storageproviderv0alpha.InitiateFileDownloadResponse.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.InitiateFileDownloadResponse.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.InitiateFileDownloadResponse.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string download_endpoint = 3;
 * @return {string}
 */
proto.cs3.storageproviderv0alpha.InitiateFileDownloadResponse.prototype.getDownloadEndpoint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.cs3.storageproviderv0alpha.InitiateFileDownloadResponse.prototype.setDownloadEndpoint = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool expose = 5;
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.InitiateFileDownloadResponse.prototype.getExpose = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/** @param {boolean} value */
proto.cs3.storageproviderv0alpha.InitiateFileDownloadResponse.prototype.setExpose = function(value) {
  jspb.Message.setProto3BooleanField(this, 5, value);
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
proto.cs3.storageproviderv0alpha.ListGrantsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storageproviderv0alpha.ListGrantsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storageproviderv0alpha.ListGrantsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.ListGrantsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_types_pb.Opaque.toObject(includeInstance, f),
    ref: (f = msg.getRef()) && cs3_storageprovider_v0alpha_resources_pb.Reference.toObject(includeInstance, f)
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
 * @return {!proto.cs3.storageproviderv0alpha.ListGrantsRequest}
 */
proto.cs3.storageproviderv0alpha.ListGrantsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storageproviderv0alpha.ListGrantsRequest;
  return proto.cs3.storageproviderv0alpha.ListGrantsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storageproviderv0alpha.ListGrantsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storageproviderv0alpha.ListGrantsRequest}
 */
proto.cs3.storageproviderv0alpha.ListGrantsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new cs3_storageprovider_v0alpha_resources_pb.Reference;
      reader.readMessage(value,cs3_storageprovider_v0alpha_resources_pb.Reference.deserializeBinaryFromReader);
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
proto.cs3.storageproviderv0alpha.ListGrantsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storageproviderv0alpha.ListGrantsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storageproviderv0alpha.ListGrantsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.ListGrantsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getRef();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_storageprovider_v0alpha_resources_pb.Reference.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.types.Opaque opaque = 1;
 * @return {?proto.cs3.types.Opaque}
 */
proto.cs3.storageproviderv0alpha.ListGrantsRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_types_pb.Opaque, 1));
};


/** @param {?proto.cs3.types.Opaque|undefined} value */
proto.cs3.storageproviderv0alpha.ListGrantsRequest.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.ListGrantsRequest.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.ListGrantsRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Reference ref = 2;
 * @return {?proto.cs3.storageproviderv0alpha.Reference}
 */
proto.cs3.storageproviderv0alpha.ListGrantsRequest.prototype.getRef = function() {
  return /** @type{?proto.cs3.storageproviderv0alpha.Reference} */ (
    jspb.Message.getWrapperField(this, cs3_storageprovider_v0alpha_resources_pb.Reference, 2));
};


/** @param {?proto.cs3.storageproviderv0alpha.Reference|undefined} value */
proto.cs3.storageproviderv0alpha.ListGrantsRequest.prototype.setRef = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.ListGrantsRequest.prototype.clearRef = function() {
  this.setRef(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.ListGrantsRequest.prototype.hasRef = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cs3.storageproviderv0alpha.ListGrantsResponse.repeatedFields_ = [3];



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
proto.cs3.storageproviderv0alpha.ListGrantsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storageproviderv0alpha.ListGrantsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storageproviderv0alpha.ListGrantsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.ListGrantsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && cs3_rpc_status_pb.Status.toObject(includeInstance, f),
    opaque: (f = msg.getOpaque()) && cs3_types_types_pb.Opaque.toObject(includeInstance, f),
    grantsList: jspb.Message.toObjectList(msg.getGrantsList(),
    cs3_storageprovider_v0alpha_resources_pb.Grant.toObject, includeInstance)
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
 * @return {!proto.cs3.storageproviderv0alpha.ListGrantsResponse}
 */
proto.cs3.storageproviderv0alpha.ListGrantsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storageproviderv0alpha.ListGrantsResponse;
  return proto.cs3.storageproviderv0alpha.ListGrantsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storageproviderv0alpha.ListGrantsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storageproviderv0alpha.ListGrantsResponse}
 */
proto.cs3.storageproviderv0alpha.ListGrantsResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new cs3_storageprovider_v0alpha_resources_pb.Grant;
      reader.readMessage(value,cs3_storageprovider_v0alpha_resources_pb.Grant.deserializeBinaryFromReader);
      msg.addGrants(value);
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
proto.cs3.storageproviderv0alpha.ListGrantsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storageproviderv0alpha.ListGrantsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storageproviderv0alpha.ListGrantsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.ListGrantsResponse.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getGrantsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      cs3_storageprovider_v0alpha_resources_pb.Grant.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.rpc.Status status = 1;
 * @return {?proto.cs3.rpc.Status}
 */
proto.cs3.storageproviderv0alpha.ListGrantsResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.Status} */ (
    jspb.Message.getWrapperField(this, cs3_rpc_status_pb.Status, 1));
};


/** @param {?proto.cs3.rpc.Status|undefined} value */
proto.cs3.storageproviderv0alpha.ListGrantsResponse.prototype.setStatus = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.ListGrantsResponse.prototype.clearStatus = function() {
  this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.ListGrantsResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.Opaque opaque = 2;
 * @return {?proto.cs3.types.Opaque}
 */
proto.cs3.storageproviderv0alpha.ListGrantsResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_types_pb.Opaque, 2));
};


/** @param {?proto.cs3.types.Opaque|undefined} value */
proto.cs3.storageproviderv0alpha.ListGrantsResponse.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.ListGrantsResponse.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.ListGrantsResponse.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Grant grants = 3;
 * @return {!Array<!proto.cs3.storageproviderv0alpha.Grant>}
 */
proto.cs3.storageproviderv0alpha.ListGrantsResponse.prototype.getGrantsList = function() {
  return /** @type{!Array<!proto.cs3.storageproviderv0alpha.Grant>} */ (
    jspb.Message.getRepeatedWrapperField(this, cs3_storageprovider_v0alpha_resources_pb.Grant, 3));
};


/** @param {!Array<!proto.cs3.storageproviderv0alpha.Grant>} value */
proto.cs3.storageproviderv0alpha.ListGrantsResponse.prototype.setGrantsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.cs3.storageproviderv0alpha.Grant=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cs3.storageproviderv0alpha.Grant}
 */
proto.cs3.storageproviderv0alpha.ListGrantsResponse.prototype.addGrants = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.cs3.storageproviderv0alpha.Grant, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.cs3.storageproviderv0alpha.ListGrantsResponse.prototype.clearGrantsList = function() {
  this.setGrantsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cs3.storageproviderv0alpha.ListContainerStreamRequest.repeatedFields_ = [3];



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
proto.cs3.storageproviderv0alpha.ListContainerStreamRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storageproviderv0alpha.ListContainerStreamRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storageproviderv0alpha.ListContainerStreamRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.ListContainerStreamRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_types_pb.Opaque.toObject(includeInstance, f),
    ref: (f = msg.getRef()) && cs3_storageprovider_v0alpha_resources_pb.Reference.toObject(includeInstance, f),
    arbitraryMetadataKeysList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.cs3.storageproviderv0alpha.ListContainerStreamRequest}
 */
proto.cs3.storageproviderv0alpha.ListContainerStreamRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storageproviderv0alpha.ListContainerStreamRequest;
  return proto.cs3.storageproviderv0alpha.ListContainerStreamRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storageproviderv0alpha.ListContainerStreamRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storageproviderv0alpha.ListContainerStreamRequest}
 */
proto.cs3.storageproviderv0alpha.ListContainerStreamRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new cs3_storageprovider_v0alpha_resources_pb.Reference;
      reader.readMessage(value,cs3_storageprovider_v0alpha_resources_pb.Reference.deserializeBinaryFromReader);
      msg.setRef(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addArbitraryMetadataKeys(value);
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
proto.cs3.storageproviderv0alpha.ListContainerStreamRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storageproviderv0alpha.ListContainerStreamRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storageproviderv0alpha.ListContainerStreamRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.ListContainerStreamRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getRef();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_storageprovider_v0alpha_resources_pb.Reference.serializeBinaryToWriter
    );
  }
  f = message.getArbitraryMetadataKeysList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional cs3.types.Opaque opaque = 1;
 * @return {?proto.cs3.types.Opaque}
 */
proto.cs3.storageproviderv0alpha.ListContainerStreamRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_types_pb.Opaque, 1));
};


/** @param {?proto.cs3.types.Opaque|undefined} value */
proto.cs3.storageproviderv0alpha.ListContainerStreamRequest.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.ListContainerStreamRequest.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.ListContainerStreamRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Reference ref = 2;
 * @return {?proto.cs3.storageproviderv0alpha.Reference}
 */
proto.cs3.storageproviderv0alpha.ListContainerStreamRequest.prototype.getRef = function() {
  return /** @type{?proto.cs3.storageproviderv0alpha.Reference} */ (
    jspb.Message.getWrapperField(this, cs3_storageprovider_v0alpha_resources_pb.Reference, 2));
};


/** @param {?proto.cs3.storageproviderv0alpha.Reference|undefined} value */
proto.cs3.storageproviderv0alpha.ListContainerStreamRequest.prototype.setRef = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.ListContainerStreamRequest.prototype.clearRef = function() {
  this.setRef(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.ListContainerStreamRequest.prototype.hasRef = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated string arbitrary_metadata_keys = 3;
 * @return {!Array<string>}
 */
proto.cs3.storageproviderv0alpha.ListContainerStreamRequest.prototype.getArbitraryMetadataKeysList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/** @param {!Array<string>} value */
proto.cs3.storageproviderv0alpha.ListContainerStreamRequest.prototype.setArbitraryMetadataKeysList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.cs3.storageproviderv0alpha.ListContainerStreamRequest.prototype.addArbitraryMetadataKeys = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.cs3.storageproviderv0alpha.ListContainerStreamRequest.prototype.clearArbitraryMetadataKeysList = function() {
  this.setArbitraryMetadataKeysList([]);
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
proto.cs3.storageproviderv0alpha.ListContainerStreamResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storageproviderv0alpha.ListContainerStreamResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storageproviderv0alpha.ListContainerStreamResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.ListContainerStreamResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && cs3_rpc_status_pb.Status.toObject(includeInstance, f),
    opaque: (f = msg.getOpaque()) && cs3_types_types_pb.Opaque.toObject(includeInstance, f),
    info: (f = msg.getInfo()) && cs3_storageprovider_v0alpha_resources_pb.ResourceInfo.toObject(includeInstance, f)
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
 * @return {!proto.cs3.storageproviderv0alpha.ListContainerStreamResponse}
 */
proto.cs3.storageproviderv0alpha.ListContainerStreamResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storageproviderv0alpha.ListContainerStreamResponse;
  return proto.cs3.storageproviderv0alpha.ListContainerStreamResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storageproviderv0alpha.ListContainerStreamResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storageproviderv0alpha.ListContainerStreamResponse}
 */
proto.cs3.storageproviderv0alpha.ListContainerStreamResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new cs3_storageprovider_v0alpha_resources_pb.ResourceInfo;
      reader.readMessage(value,cs3_storageprovider_v0alpha_resources_pb.ResourceInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
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
proto.cs3.storageproviderv0alpha.ListContainerStreamResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storageproviderv0alpha.ListContainerStreamResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storageproviderv0alpha.ListContainerStreamResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.ListContainerStreamResponse.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      cs3_storageprovider_v0alpha_resources_pb.ResourceInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.rpc.Status status = 1;
 * @return {?proto.cs3.rpc.Status}
 */
proto.cs3.storageproviderv0alpha.ListContainerStreamResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.Status} */ (
    jspb.Message.getWrapperField(this, cs3_rpc_status_pb.Status, 1));
};


/** @param {?proto.cs3.rpc.Status|undefined} value */
proto.cs3.storageproviderv0alpha.ListContainerStreamResponse.prototype.setStatus = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.ListContainerStreamResponse.prototype.clearStatus = function() {
  this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.ListContainerStreamResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.Opaque opaque = 2;
 * @return {?proto.cs3.types.Opaque}
 */
proto.cs3.storageproviderv0alpha.ListContainerStreamResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_types_pb.Opaque, 2));
};


/** @param {?proto.cs3.types.Opaque|undefined} value */
proto.cs3.storageproviderv0alpha.ListContainerStreamResponse.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.ListContainerStreamResponse.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.ListContainerStreamResponse.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ResourceInfo info = 3;
 * @return {?proto.cs3.storageproviderv0alpha.ResourceInfo}
 */
proto.cs3.storageproviderv0alpha.ListContainerStreamResponse.prototype.getInfo = function() {
  return /** @type{?proto.cs3.storageproviderv0alpha.ResourceInfo} */ (
    jspb.Message.getWrapperField(this, cs3_storageprovider_v0alpha_resources_pb.ResourceInfo, 3));
};


/** @param {?proto.cs3.storageproviderv0alpha.ResourceInfo|undefined} value */
proto.cs3.storageproviderv0alpha.ListContainerStreamResponse.prototype.setInfo = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.ListContainerStreamResponse.prototype.clearInfo = function() {
  this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.ListContainerStreamResponse.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cs3.storageproviderv0alpha.ListContainerRequest.repeatedFields_ = [3];



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
proto.cs3.storageproviderv0alpha.ListContainerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storageproviderv0alpha.ListContainerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storageproviderv0alpha.ListContainerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.ListContainerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_types_pb.Opaque.toObject(includeInstance, f),
    ref: (f = msg.getRef()) && cs3_storageprovider_v0alpha_resources_pb.Reference.toObject(includeInstance, f),
    arbitraryMetadataKeysList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.cs3.storageproviderv0alpha.ListContainerRequest}
 */
proto.cs3.storageproviderv0alpha.ListContainerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storageproviderv0alpha.ListContainerRequest;
  return proto.cs3.storageproviderv0alpha.ListContainerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storageproviderv0alpha.ListContainerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storageproviderv0alpha.ListContainerRequest}
 */
proto.cs3.storageproviderv0alpha.ListContainerRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new cs3_storageprovider_v0alpha_resources_pb.Reference;
      reader.readMessage(value,cs3_storageprovider_v0alpha_resources_pb.Reference.deserializeBinaryFromReader);
      msg.setRef(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addArbitraryMetadataKeys(value);
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
proto.cs3.storageproviderv0alpha.ListContainerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storageproviderv0alpha.ListContainerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storageproviderv0alpha.ListContainerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.ListContainerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getRef();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_storageprovider_v0alpha_resources_pb.Reference.serializeBinaryToWriter
    );
  }
  f = message.getArbitraryMetadataKeysList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional cs3.types.Opaque opaque = 1;
 * @return {?proto.cs3.types.Opaque}
 */
proto.cs3.storageproviderv0alpha.ListContainerRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_types_pb.Opaque, 1));
};


/** @param {?proto.cs3.types.Opaque|undefined} value */
proto.cs3.storageproviderv0alpha.ListContainerRequest.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.ListContainerRequest.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.ListContainerRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Reference ref = 2;
 * @return {?proto.cs3.storageproviderv0alpha.Reference}
 */
proto.cs3.storageproviderv0alpha.ListContainerRequest.prototype.getRef = function() {
  return /** @type{?proto.cs3.storageproviderv0alpha.Reference} */ (
    jspb.Message.getWrapperField(this, cs3_storageprovider_v0alpha_resources_pb.Reference, 2));
};


/** @param {?proto.cs3.storageproviderv0alpha.Reference|undefined} value */
proto.cs3.storageproviderv0alpha.ListContainerRequest.prototype.setRef = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.ListContainerRequest.prototype.clearRef = function() {
  this.setRef(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.ListContainerRequest.prototype.hasRef = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated string arbitrary_metadata_keys = 3;
 * @return {!Array<string>}
 */
proto.cs3.storageproviderv0alpha.ListContainerRequest.prototype.getArbitraryMetadataKeysList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/** @param {!Array<string>} value */
proto.cs3.storageproviderv0alpha.ListContainerRequest.prototype.setArbitraryMetadataKeysList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.cs3.storageproviderv0alpha.ListContainerRequest.prototype.addArbitraryMetadataKeys = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.cs3.storageproviderv0alpha.ListContainerRequest.prototype.clearArbitraryMetadataKeysList = function() {
  this.setArbitraryMetadataKeysList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cs3.storageproviderv0alpha.ListContainerResponse.repeatedFields_ = [3];



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
proto.cs3.storageproviderv0alpha.ListContainerResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storageproviderv0alpha.ListContainerResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storageproviderv0alpha.ListContainerResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.ListContainerResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && cs3_rpc_status_pb.Status.toObject(includeInstance, f),
    opaque: (f = msg.getOpaque()) && cs3_types_types_pb.Opaque.toObject(includeInstance, f),
    infosList: jspb.Message.toObjectList(msg.getInfosList(),
    cs3_storageprovider_v0alpha_resources_pb.ResourceInfo.toObject, includeInstance)
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
 * @return {!proto.cs3.storageproviderv0alpha.ListContainerResponse}
 */
proto.cs3.storageproviderv0alpha.ListContainerResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storageproviderv0alpha.ListContainerResponse;
  return proto.cs3.storageproviderv0alpha.ListContainerResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storageproviderv0alpha.ListContainerResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storageproviderv0alpha.ListContainerResponse}
 */
proto.cs3.storageproviderv0alpha.ListContainerResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new cs3_storageprovider_v0alpha_resources_pb.ResourceInfo;
      reader.readMessage(value,cs3_storageprovider_v0alpha_resources_pb.ResourceInfo.deserializeBinaryFromReader);
      msg.addInfos(value);
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
proto.cs3.storageproviderv0alpha.ListContainerResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storageproviderv0alpha.ListContainerResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storageproviderv0alpha.ListContainerResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.ListContainerResponse.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getInfosList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      cs3_storageprovider_v0alpha_resources_pb.ResourceInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.rpc.Status status = 1;
 * @return {?proto.cs3.rpc.Status}
 */
proto.cs3.storageproviderv0alpha.ListContainerResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.Status} */ (
    jspb.Message.getWrapperField(this, cs3_rpc_status_pb.Status, 1));
};


/** @param {?proto.cs3.rpc.Status|undefined} value */
proto.cs3.storageproviderv0alpha.ListContainerResponse.prototype.setStatus = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.ListContainerResponse.prototype.clearStatus = function() {
  this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.ListContainerResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.Opaque opaque = 2;
 * @return {?proto.cs3.types.Opaque}
 */
proto.cs3.storageproviderv0alpha.ListContainerResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_types_pb.Opaque, 2));
};


/** @param {?proto.cs3.types.Opaque|undefined} value */
proto.cs3.storageproviderv0alpha.ListContainerResponse.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.ListContainerResponse.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.ListContainerResponse.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated ResourceInfo infos = 3;
 * @return {!Array<!proto.cs3.storageproviderv0alpha.ResourceInfo>}
 */
proto.cs3.storageproviderv0alpha.ListContainerResponse.prototype.getInfosList = function() {
  return /** @type{!Array<!proto.cs3.storageproviderv0alpha.ResourceInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, cs3_storageprovider_v0alpha_resources_pb.ResourceInfo, 3));
};


/** @param {!Array<!proto.cs3.storageproviderv0alpha.ResourceInfo>} value */
proto.cs3.storageproviderv0alpha.ListContainerResponse.prototype.setInfosList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.cs3.storageproviderv0alpha.ResourceInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cs3.storageproviderv0alpha.ResourceInfo}
 */
proto.cs3.storageproviderv0alpha.ListContainerResponse.prototype.addInfos = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.cs3.storageproviderv0alpha.ResourceInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.cs3.storageproviderv0alpha.ListContainerResponse.prototype.clearInfosList = function() {
  this.setInfosList([]);
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
proto.cs3.storageproviderv0alpha.ListFileVersionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storageproviderv0alpha.ListFileVersionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storageproviderv0alpha.ListFileVersionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.ListFileVersionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_types_pb.Opaque.toObject(includeInstance, f),
    ref: (f = msg.getRef()) && cs3_storageprovider_v0alpha_resources_pb.Reference.toObject(includeInstance, f)
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
 * @return {!proto.cs3.storageproviderv0alpha.ListFileVersionsRequest}
 */
proto.cs3.storageproviderv0alpha.ListFileVersionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storageproviderv0alpha.ListFileVersionsRequest;
  return proto.cs3.storageproviderv0alpha.ListFileVersionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storageproviderv0alpha.ListFileVersionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storageproviderv0alpha.ListFileVersionsRequest}
 */
proto.cs3.storageproviderv0alpha.ListFileVersionsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new cs3_storageprovider_v0alpha_resources_pb.Reference;
      reader.readMessage(value,cs3_storageprovider_v0alpha_resources_pb.Reference.deserializeBinaryFromReader);
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
proto.cs3.storageproviderv0alpha.ListFileVersionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storageproviderv0alpha.ListFileVersionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storageproviderv0alpha.ListFileVersionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.ListFileVersionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getRef();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_storageprovider_v0alpha_resources_pb.Reference.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.types.Opaque opaque = 1;
 * @return {?proto.cs3.types.Opaque}
 */
proto.cs3.storageproviderv0alpha.ListFileVersionsRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_types_pb.Opaque, 1));
};


/** @param {?proto.cs3.types.Opaque|undefined} value */
proto.cs3.storageproviderv0alpha.ListFileVersionsRequest.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.ListFileVersionsRequest.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.ListFileVersionsRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Reference ref = 2;
 * @return {?proto.cs3.storageproviderv0alpha.Reference}
 */
proto.cs3.storageproviderv0alpha.ListFileVersionsRequest.prototype.getRef = function() {
  return /** @type{?proto.cs3.storageproviderv0alpha.Reference} */ (
    jspb.Message.getWrapperField(this, cs3_storageprovider_v0alpha_resources_pb.Reference, 2));
};


/** @param {?proto.cs3.storageproviderv0alpha.Reference|undefined} value */
proto.cs3.storageproviderv0alpha.ListFileVersionsRequest.prototype.setRef = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.ListFileVersionsRequest.prototype.clearRef = function() {
  this.setRef(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.ListFileVersionsRequest.prototype.hasRef = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cs3.storageproviderv0alpha.ListFileVersionsResponse.repeatedFields_ = [3];



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
proto.cs3.storageproviderv0alpha.ListFileVersionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storageproviderv0alpha.ListFileVersionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storageproviderv0alpha.ListFileVersionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.ListFileVersionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && cs3_rpc_status_pb.Status.toObject(includeInstance, f),
    opaque: (f = msg.getOpaque()) && cs3_types_types_pb.Opaque.toObject(includeInstance, f),
    versionsList: jspb.Message.toObjectList(msg.getVersionsList(),
    cs3_storageprovider_v0alpha_resources_pb.FileVersion.toObject, includeInstance)
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
 * @return {!proto.cs3.storageproviderv0alpha.ListFileVersionsResponse}
 */
proto.cs3.storageproviderv0alpha.ListFileVersionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storageproviderv0alpha.ListFileVersionsResponse;
  return proto.cs3.storageproviderv0alpha.ListFileVersionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storageproviderv0alpha.ListFileVersionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storageproviderv0alpha.ListFileVersionsResponse}
 */
proto.cs3.storageproviderv0alpha.ListFileVersionsResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new cs3_storageprovider_v0alpha_resources_pb.FileVersion;
      reader.readMessage(value,cs3_storageprovider_v0alpha_resources_pb.FileVersion.deserializeBinaryFromReader);
      msg.addVersions(value);
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
proto.cs3.storageproviderv0alpha.ListFileVersionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storageproviderv0alpha.ListFileVersionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storageproviderv0alpha.ListFileVersionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.ListFileVersionsResponse.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getVersionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      cs3_storageprovider_v0alpha_resources_pb.FileVersion.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.rpc.Status status = 1;
 * @return {?proto.cs3.rpc.Status}
 */
proto.cs3.storageproviderv0alpha.ListFileVersionsResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.Status} */ (
    jspb.Message.getWrapperField(this, cs3_rpc_status_pb.Status, 1));
};


/** @param {?proto.cs3.rpc.Status|undefined} value */
proto.cs3.storageproviderv0alpha.ListFileVersionsResponse.prototype.setStatus = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.ListFileVersionsResponse.prototype.clearStatus = function() {
  this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.ListFileVersionsResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.Opaque opaque = 2;
 * @return {?proto.cs3.types.Opaque}
 */
proto.cs3.storageproviderv0alpha.ListFileVersionsResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_types_pb.Opaque, 2));
};


/** @param {?proto.cs3.types.Opaque|undefined} value */
proto.cs3.storageproviderv0alpha.ListFileVersionsResponse.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.ListFileVersionsResponse.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.ListFileVersionsResponse.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated FileVersion versions = 3;
 * @return {!Array<!proto.cs3.storageproviderv0alpha.FileVersion>}
 */
proto.cs3.storageproviderv0alpha.ListFileVersionsResponse.prototype.getVersionsList = function() {
  return /** @type{!Array<!proto.cs3.storageproviderv0alpha.FileVersion>} */ (
    jspb.Message.getRepeatedWrapperField(this, cs3_storageprovider_v0alpha_resources_pb.FileVersion, 3));
};


/** @param {!Array<!proto.cs3.storageproviderv0alpha.FileVersion>} value */
proto.cs3.storageproviderv0alpha.ListFileVersionsResponse.prototype.setVersionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.cs3.storageproviderv0alpha.FileVersion=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cs3.storageproviderv0alpha.FileVersion}
 */
proto.cs3.storageproviderv0alpha.ListFileVersionsResponse.prototype.addVersions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.cs3.storageproviderv0alpha.FileVersion, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.cs3.storageproviderv0alpha.ListFileVersionsResponse.prototype.clearVersionsList = function() {
  this.setVersionsList([]);
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
proto.cs3.storageproviderv0alpha.ListRecycleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storageproviderv0alpha.ListRecycleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storageproviderv0alpha.ListRecycleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.ListRecycleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_types_pb.Opaque.toObject(includeInstance, f),
    fromTs: (f = msg.getFromTs()) && cs3_types_types_pb.Timestamp.toObject(includeInstance, f),
    toTs: (f = msg.getToTs()) && cs3_types_types_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.cs3.storageproviderv0alpha.ListRecycleRequest}
 */
proto.cs3.storageproviderv0alpha.ListRecycleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storageproviderv0alpha.ListRecycleRequest;
  return proto.cs3.storageproviderv0alpha.ListRecycleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storageproviderv0alpha.ListRecycleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storageproviderv0alpha.ListRecycleRequest}
 */
proto.cs3.storageproviderv0alpha.ListRecycleRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new cs3_types_types_pb.Timestamp;
      reader.readMessage(value,cs3_types_types_pb.Timestamp.deserializeBinaryFromReader);
      msg.setFromTs(value);
      break;
    case 3:
      var value = new cs3_types_types_pb.Timestamp;
      reader.readMessage(value,cs3_types_types_pb.Timestamp.deserializeBinaryFromReader);
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
proto.cs3.storageproviderv0alpha.ListRecycleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storageproviderv0alpha.ListRecycleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storageproviderv0alpha.ListRecycleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.ListRecycleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getFromTs();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_types_types_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getToTs();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      cs3_types_types_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.types.Opaque opaque = 1;
 * @return {?proto.cs3.types.Opaque}
 */
proto.cs3.storageproviderv0alpha.ListRecycleRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_types_pb.Opaque, 1));
};


/** @param {?proto.cs3.types.Opaque|undefined} value */
proto.cs3.storageproviderv0alpha.ListRecycleRequest.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.ListRecycleRequest.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.ListRecycleRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.Timestamp from_ts = 2;
 * @return {?proto.cs3.types.Timestamp}
 */
proto.cs3.storageproviderv0alpha.ListRecycleRequest.prototype.getFromTs = function() {
  return /** @type{?proto.cs3.types.Timestamp} */ (
    jspb.Message.getWrapperField(this, cs3_types_types_pb.Timestamp, 2));
};


/** @param {?proto.cs3.types.Timestamp|undefined} value */
proto.cs3.storageproviderv0alpha.ListRecycleRequest.prototype.setFromTs = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.ListRecycleRequest.prototype.clearFromTs = function() {
  this.setFromTs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.ListRecycleRequest.prototype.hasFromTs = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional cs3.types.Timestamp to_ts = 3;
 * @return {?proto.cs3.types.Timestamp}
 */
proto.cs3.storageproviderv0alpha.ListRecycleRequest.prototype.getToTs = function() {
  return /** @type{?proto.cs3.types.Timestamp} */ (
    jspb.Message.getWrapperField(this, cs3_types_types_pb.Timestamp, 3));
};


/** @param {?proto.cs3.types.Timestamp|undefined} value */
proto.cs3.storageproviderv0alpha.ListRecycleRequest.prototype.setToTs = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.ListRecycleRequest.prototype.clearToTs = function() {
  this.setToTs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.ListRecycleRequest.prototype.hasToTs = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cs3.storageproviderv0alpha.ListRecycleResponse.repeatedFields_ = [3];



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
proto.cs3.storageproviderv0alpha.ListRecycleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storageproviderv0alpha.ListRecycleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storageproviderv0alpha.ListRecycleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.ListRecycleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && cs3_rpc_status_pb.Status.toObject(includeInstance, f),
    opaque: (f = msg.getOpaque()) && cs3_types_types_pb.Opaque.toObject(includeInstance, f),
    recycleItemsList: jspb.Message.toObjectList(msg.getRecycleItemsList(),
    cs3_storageprovider_v0alpha_resources_pb.RecycleItem.toObject, includeInstance)
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
 * @return {!proto.cs3.storageproviderv0alpha.ListRecycleResponse}
 */
proto.cs3.storageproviderv0alpha.ListRecycleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storageproviderv0alpha.ListRecycleResponse;
  return proto.cs3.storageproviderv0alpha.ListRecycleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storageproviderv0alpha.ListRecycleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storageproviderv0alpha.ListRecycleResponse}
 */
proto.cs3.storageproviderv0alpha.ListRecycleResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new cs3_storageprovider_v0alpha_resources_pb.RecycleItem;
      reader.readMessage(value,cs3_storageprovider_v0alpha_resources_pb.RecycleItem.deserializeBinaryFromReader);
      msg.addRecycleItems(value);
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
proto.cs3.storageproviderv0alpha.ListRecycleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storageproviderv0alpha.ListRecycleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storageproviderv0alpha.ListRecycleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.ListRecycleResponse.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getRecycleItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      cs3_storageprovider_v0alpha_resources_pb.RecycleItem.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.rpc.Status status = 1;
 * @return {?proto.cs3.rpc.Status}
 */
proto.cs3.storageproviderv0alpha.ListRecycleResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.Status} */ (
    jspb.Message.getWrapperField(this, cs3_rpc_status_pb.Status, 1));
};


/** @param {?proto.cs3.rpc.Status|undefined} value */
proto.cs3.storageproviderv0alpha.ListRecycleResponse.prototype.setStatus = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.ListRecycleResponse.prototype.clearStatus = function() {
  this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.ListRecycleResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.Opaque opaque = 2;
 * @return {?proto.cs3.types.Opaque}
 */
proto.cs3.storageproviderv0alpha.ListRecycleResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_types_pb.Opaque, 2));
};


/** @param {?proto.cs3.types.Opaque|undefined} value */
proto.cs3.storageproviderv0alpha.ListRecycleResponse.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.ListRecycleResponse.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.ListRecycleResponse.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated RecycleItem recycle_items = 3;
 * @return {!Array<!proto.cs3.storageproviderv0alpha.RecycleItem>}
 */
proto.cs3.storageproviderv0alpha.ListRecycleResponse.prototype.getRecycleItemsList = function() {
  return /** @type{!Array<!proto.cs3.storageproviderv0alpha.RecycleItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, cs3_storageprovider_v0alpha_resources_pb.RecycleItem, 3));
};


/** @param {!Array<!proto.cs3.storageproviderv0alpha.RecycleItem>} value */
proto.cs3.storageproviderv0alpha.ListRecycleResponse.prototype.setRecycleItemsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.cs3.storageproviderv0alpha.RecycleItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cs3.storageproviderv0alpha.RecycleItem}
 */
proto.cs3.storageproviderv0alpha.ListRecycleResponse.prototype.addRecycleItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.cs3.storageproviderv0alpha.RecycleItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.cs3.storageproviderv0alpha.ListRecycleResponse.prototype.clearRecycleItemsList = function() {
  this.setRecycleItemsList([]);
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
proto.cs3.storageproviderv0alpha.ListRecycleStreamRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storageproviderv0alpha.ListRecycleStreamRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storageproviderv0alpha.ListRecycleStreamRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.ListRecycleStreamRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_types_pb.Opaque.toObject(includeInstance, f),
    fromTs: (f = msg.getFromTs()) && cs3_types_types_pb.Timestamp.toObject(includeInstance, f),
    toTs: (f = msg.getToTs()) && cs3_types_types_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.cs3.storageproviderv0alpha.ListRecycleStreamRequest}
 */
proto.cs3.storageproviderv0alpha.ListRecycleStreamRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storageproviderv0alpha.ListRecycleStreamRequest;
  return proto.cs3.storageproviderv0alpha.ListRecycleStreamRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storageproviderv0alpha.ListRecycleStreamRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storageproviderv0alpha.ListRecycleStreamRequest}
 */
proto.cs3.storageproviderv0alpha.ListRecycleStreamRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new cs3_types_types_pb.Timestamp;
      reader.readMessage(value,cs3_types_types_pb.Timestamp.deserializeBinaryFromReader);
      msg.setFromTs(value);
      break;
    case 3:
      var value = new cs3_types_types_pb.Timestamp;
      reader.readMessage(value,cs3_types_types_pb.Timestamp.deserializeBinaryFromReader);
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
proto.cs3.storageproviderv0alpha.ListRecycleStreamRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storageproviderv0alpha.ListRecycleStreamRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storageproviderv0alpha.ListRecycleStreamRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.ListRecycleStreamRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getFromTs();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_types_types_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getToTs();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      cs3_types_types_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.types.Opaque opaque = 1;
 * @return {?proto.cs3.types.Opaque}
 */
proto.cs3.storageproviderv0alpha.ListRecycleStreamRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_types_pb.Opaque, 1));
};


/** @param {?proto.cs3.types.Opaque|undefined} value */
proto.cs3.storageproviderv0alpha.ListRecycleStreamRequest.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.ListRecycleStreamRequest.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.ListRecycleStreamRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.Timestamp from_ts = 2;
 * @return {?proto.cs3.types.Timestamp}
 */
proto.cs3.storageproviderv0alpha.ListRecycleStreamRequest.prototype.getFromTs = function() {
  return /** @type{?proto.cs3.types.Timestamp} */ (
    jspb.Message.getWrapperField(this, cs3_types_types_pb.Timestamp, 2));
};


/** @param {?proto.cs3.types.Timestamp|undefined} value */
proto.cs3.storageproviderv0alpha.ListRecycleStreamRequest.prototype.setFromTs = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.ListRecycleStreamRequest.prototype.clearFromTs = function() {
  this.setFromTs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.ListRecycleStreamRequest.prototype.hasFromTs = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional cs3.types.Timestamp to_ts = 3;
 * @return {?proto.cs3.types.Timestamp}
 */
proto.cs3.storageproviderv0alpha.ListRecycleStreamRequest.prototype.getToTs = function() {
  return /** @type{?proto.cs3.types.Timestamp} */ (
    jspb.Message.getWrapperField(this, cs3_types_types_pb.Timestamp, 3));
};


/** @param {?proto.cs3.types.Timestamp|undefined} value */
proto.cs3.storageproviderv0alpha.ListRecycleStreamRequest.prototype.setToTs = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.ListRecycleStreamRequest.prototype.clearToTs = function() {
  this.setToTs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.ListRecycleStreamRequest.prototype.hasToTs = function() {
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
proto.cs3.storageproviderv0alpha.ListRecycleStreamResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storageproviderv0alpha.ListRecycleStreamResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storageproviderv0alpha.ListRecycleStreamResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.ListRecycleStreamResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && cs3_rpc_status_pb.Status.toObject(includeInstance, f),
    opaque: (f = msg.getOpaque()) && cs3_types_types_pb.Opaque.toObject(includeInstance, f),
    recycleItem: (f = msg.getRecycleItem()) && cs3_storageprovider_v0alpha_resources_pb.RecycleItem.toObject(includeInstance, f)
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
 * @return {!proto.cs3.storageproviderv0alpha.ListRecycleStreamResponse}
 */
proto.cs3.storageproviderv0alpha.ListRecycleStreamResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storageproviderv0alpha.ListRecycleStreamResponse;
  return proto.cs3.storageproviderv0alpha.ListRecycleStreamResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storageproviderv0alpha.ListRecycleStreamResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storageproviderv0alpha.ListRecycleStreamResponse}
 */
proto.cs3.storageproviderv0alpha.ListRecycleStreamResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new cs3_storageprovider_v0alpha_resources_pb.RecycleItem;
      reader.readMessage(value,cs3_storageprovider_v0alpha_resources_pb.RecycleItem.deserializeBinaryFromReader);
      msg.setRecycleItem(value);
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
proto.cs3.storageproviderv0alpha.ListRecycleStreamResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storageproviderv0alpha.ListRecycleStreamResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storageproviderv0alpha.ListRecycleStreamResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.ListRecycleStreamResponse.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getRecycleItem();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      cs3_storageprovider_v0alpha_resources_pb.RecycleItem.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.rpc.Status status = 1;
 * @return {?proto.cs3.rpc.Status}
 */
proto.cs3.storageproviderv0alpha.ListRecycleStreamResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.Status} */ (
    jspb.Message.getWrapperField(this, cs3_rpc_status_pb.Status, 1));
};


/** @param {?proto.cs3.rpc.Status|undefined} value */
proto.cs3.storageproviderv0alpha.ListRecycleStreamResponse.prototype.setStatus = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.ListRecycleStreamResponse.prototype.clearStatus = function() {
  this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.ListRecycleStreamResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.Opaque opaque = 2;
 * @return {?proto.cs3.types.Opaque}
 */
proto.cs3.storageproviderv0alpha.ListRecycleStreamResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_types_pb.Opaque, 2));
};


/** @param {?proto.cs3.types.Opaque|undefined} value */
proto.cs3.storageproviderv0alpha.ListRecycleStreamResponse.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.ListRecycleStreamResponse.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.ListRecycleStreamResponse.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional RecycleItem recycle_item = 3;
 * @return {?proto.cs3.storageproviderv0alpha.RecycleItem}
 */
proto.cs3.storageproviderv0alpha.ListRecycleStreamResponse.prototype.getRecycleItem = function() {
  return /** @type{?proto.cs3.storageproviderv0alpha.RecycleItem} */ (
    jspb.Message.getWrapperField(this, cs3_storageprovider_v0alpha_resources_pb.RecycleItem, 3));
};


/** @param {?proto.cs3.storageproviderv0alpha.RecycleItem|undefined} value */
proto.cs3.storageproviderv0alpha.ListRecycleStreamResponse.prototype.setRecycleItem = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.ListRecycleStreamResponse.prototype.clearRecycleItem = function() {
  this.setRecycleItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.ListRecycleStreamResponse.prototype.hasRecycleItem = function() {
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
proto.cs3.storageproviderv0alpha.MoveRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storageproviderv0alpha.MoveRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storageproviderv0alpha.MoveRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.MoveRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_types_pb.Opaque.toObject(includeInstance, f),
    source: (f = msg.getSource()) && cs3_storageprovider_v0alpha_resources_pb.Reference.toObject(includeInstance, f),
    destination: (f = msg.getDestination()) && cs3_storageprovider_v0alpha_resources_pb.Reference.toObject(includeInstance, f)
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
 * @return {!proto.cs3.storageproviderv0alpha.MoveRequest}
 */
proto.cs3.storageproviderv0alpha.MoveRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storageproviderv0alpha.MoveRequest;
  return proto.cs3.storageproviderv0alpha.MoveRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storageproviderv0alpha.MoveRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storageproviderv0alpha.MoveRequest}
 */
proto.cs3.storageproviderv0alpha.MoveRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new cs3_storageprovider_v0alpha_resources_pb.Reference;
      reader.readMessage(value,cs3_storageprovider_v0alpha_resources_pb.Reference.deserializeBinaryFromReader);
      msg.setSource(value);
      break;
    case 3:
      var value = new cs3_storageprovider_v0alpha_resources_pb.Reference;
      reader.readMessage(value,cs3_storageprovider_v0alpha_resources_pb.Reference.deserializeBinaryFromReader);
      msg.setDestination(value);
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
proto.cs3.storageproviderv0alpha.MoveRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storageproviderv0alpha.MoveRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storageproviderv0alpha.MoveRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.MoveRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getSource();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_storageprovider_v0alpha_resources_pb.Reference.serializeBinaryToWriter
    );
  }
  f = message.getDestination();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      cs3_storageprovider_v0alpha_resources_pb.Reference.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.types.Opaque opaque = 1;
 * @return {?proto.cs3.types.Opaque}
 */
proto.cs3.storageproviderv0alpha.MoveRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_types_pb.Opaque, 1));
};


/** @param {?proto.cs3.types.Opaque|undefined} value */
proto.cs3.storageproviderv0alpha.MoveRequest.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.MoveRequest.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.MoveRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Reference source = 2;
 * @return {?proto.cs3.storageproviderv0alpha.Reference}
 */
proto.cs3.storageproviderv0alpha.MoveRequest.prototype.getSource = function() {
  return /** @type{?proto.cs3.storageproviderv0alpha.Reference} */ (
    jspb.Message.getWrapperField(this, cs3_storageprovider_v0alpha_resources_pb.Reference, 2));
};


/** @param {?proto.cs3.storageproviderv0alpha.Reference|undefined} value */
proto.cs3.storageproviderv0alpha.MoveRequest.prototype.setSource = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.MoveRequest.prototype.clearSource = function() {
  this.setSource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.MoveRequest.prototype.hasSource = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Reference destination = 3;
 * @return {?proto.cs3.storageproviderv0alpha.Reference}
 */
proto.cs3.storageproviderv0alpha.MoveRequest.prototype.getDestination = function() {
  return /** @type{?proto.cs3.storageproviderv0alpha.Reference} */ (
    jspb.Message.getWrapperField(this, cs3_storageprovider_v0alpha_resources_pb.Reference, 3));
};


/** @param {?proto.cs3.storageproviderv0alpha.Reference|undefined} value */
proto.cs3.storageproviderv0alpha.MoveRequest.prototype.setDestination = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.MoveRequest.prototype.clearDestination = function() {
  this.setDestination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.MoveRequest.prototype.hasDestination = function() {
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
proto.cs3.storageproviderv0alpha.MoveResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storageproviderv0alpha.MoveResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storageproviderv0alpha.MoveResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.MoveResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && cs3_rpc_status_pb.Status.toObject(includeInstance, f),
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
 * @return {!proto.cs3.storageproviderv0alpha.MoveResponse}
 */
proto.cs3.storageproviderv0alpha.MoveResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storageproviderv0alpha.MoveResponse;
  return proto.cs3.storageproviderv0alpha.MoveResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storageproviderv0alpha.MoveResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storageproviderv0alpha.MoveResponse}
 */
proto.cs3.storageproviderv0alpha.MoveResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.cs3.storageproviderv0alpha.MoveResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storageproviderv0alpha.MoveResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storageproviderv0alpha.MoveResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.MoveResponse.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional cs3.rpc.Status status = 1;
 * @return {?proto.cs3.rpc.Status}
 */
proto.cs3.storageproviderv0alpha.MoveResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.Status} */ (
    jspb.Message.getWrapperField(this, cs3_rpc_status_pb.Status, 1));
};


/** @param {?proto.cs3.rpc.Status|undefined} value */
proto.cs3.storageproviderv0alpha.MoveResponse.prototype.setStatus = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.MoveResponse.prototype.clearStatus = function() {
  this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.MoveResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.Opaque opaque = 2;
 * @return {?proto.cs3.types.Opaque}
 */
proto.cs3.storageproviderv0alpha.MoveResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_types_pb.Opaque, 2));
};


/** @param {?proto.cs3.types.Opaque|undefined} value */
proto.cs3.storageproviderv0alpha.MoveResponse.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.MoveResponse.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.MoveResponse.prototype.hasOpaque = function() {
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
proto.cs3.storageproviderv0alpha.PurgeRecycleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storageproviderv0alpha.PurgeRecycleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storageproviderv0alpha.PurgeRecycleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.PurgeRecycleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_types_pb.Opaque.toObject(includeInstance, f),
    ref: (f = msg.getRef()) && cs3_storageprovider_v0alpha_resources_pb.Reference.toObject(includeInstance, f)
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
 * @return {!proto.cs3.storageproviderv0alpha.PurgeRecycleRequest}
 */
proto.cs3.storageproviderv0alpha.PurgeRecycleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storageproviderv0alpha.PurgeRecycleRequest;
  return proto.cs3.storageproviderv0alpha.PurgeRecycleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storageproviderv0alpha.PurgeRecycleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storageproviderv0alpha.PurgeRecycleRequest}
 */
proto.cs3.storageproviderv0alpha.PurgeRecycleRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new cs3_storageprovider_v0alpha_resources_pb.Reference;
      reader.readMessage(value,cs3_storageprovider_v0alpha_resources_pb.Reference.deserializeBinaryFromReader);
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
proto.cs3.storageproviderv0alpha.PurgeRecycleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storageproviderv0alpha.PurgeRecycleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storageproviderv0alpha.PurgeRecycleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.PurgeRecycleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getRef();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_storageprovider_v0alpha_resources_pb.Reference.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.types.Opaque opaque = 1;
 * @return {?proto.cs3.types.Opaque}
 */
proto.cs3.storageproviderv0alpha.PurgeRecycleRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_types_pb.Opaque, 1));
};


/** @param {?proto.cs3.types.Opaque|undefined} value */
proto.cs3.storageproviderv0alpha.PurgeRecycleRequest.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.PurgeRecycleRequest.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.PurgeRecycleRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Reference ref = 2;
 * @return {?proto.cs3.storageproviderv0alpha.Reference}
 */
proto.cs3.storageproviderv0alpha.PurgeRecycleRequest.prototype.getRef = function() {
  return /** @type{?proto.cs3.storageproviderv0alpha.Reference} */ (
    jspb.Message.getWrapperField(this, cs3_storageprovider_v0alpha_resources_pb.Reference, 2));
};


/** @param {?proto.cs3.storageproviderv0alpha.Reference|undefined} value */
proto.cs3.storageproviderv0alpha.PurgeRecycleRequest.prototype.setRef = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.PurgeRecycleRequest.prototype.clearRef = function() {
  this.setRef(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.PurgeRecycleRequest.prototype.hasRef = function() {
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
proto.cs3.storageproviderv0alpha.PurgeRecycleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storageproviderv0alpha.PurgeRecycleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storageproviderv0alpha.PurgeRecycleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.PurgeRecycleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && cs3_rpc_status_pb.Status.toObject(includeInstance, f),
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
 * @return {!proto.cs3.storageproviderv0alpha.PurgeRecycleResponse}
 */
proto.cs3.storageproviderv0alpha.PurgeRecycleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storageproviderv0alpha.PurgeRecycleResponse;
  return proto.cs3.storageproviderv0alpha.PurgeRecycleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storageproviderv0alpha.PurgeRecycleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storageproviderv0alpha.PurgeRecycleResponse}
 */
proto.cs3.storageproviderv0alpha.PurgeRecycleResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.cs3.storageproviderv0alpha.PurgeRecycleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storageproviderv0alpha.PurgeRecycleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storageproviderv0alpha.PurgeRecycleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.PurgeRecycleResponse.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional cs3.rpc.Status status = 1;
 * @return {?proto.cs3.rpc.Status}
 */
proto.cs3.storageproviderv0alpha.PurgeRecycleResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.Status} */ (
    jspb.Message.getWrapperField(this, cs3_rpc_status_pb.Status, 1));
};


/** @param {?proto.cs3.rpc.Status|undefined} value */
proto.cs3.storageproviderv0alpha.PurgeRecycleResponse.prototype.setStatus = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.PurgeRecycleResponse.prototype.clearStatus = function() {
  this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.PurgeRecycleResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.Opaque opaque = 2;
 * @return {?proto.cs3.types.Opaque}
 */
proto.cs3.storageproviderv0alpha.PurgeRecycleResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_types_pb.Opaque, 2));
};


/** @param {?proto.cs3.types.Opaque|undefined} value */
proto.cs3.storageproviderv0alpha.PurgeRecycleResponse.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.PurgeRecycleResponse.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.PurgeRecycleResponse.prototype.hasOpaque = function() {
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
proto.cs3.storageproviderv0alpha.RestoreFileVersionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storageproviderv0alpha.RestoreFileVersionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storageproviderv0alpha.RestoreFileVersionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.RestoreFileVersionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_types_pb.Opaque.toObject(includeInstance, f),
    ref: (f = msg.getRef()) && cs3_storageprovider_v0alpha_resources_pb.Reference.toObject(includeInstance, f),
    key: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.cs3.storageproviderv0alpha.RestoreFileVersionRequest}
 */
proto.cs3.storageproviderv0alpha.RestoreFileVersionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storageproviderv0alpha.RestoreFileVersionRequest;
  return proto.cs3.storageproviderv0alpha.RestoreFileVersionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storageproviderv0alpha.RestoreFileVersionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storageproviderv0alpha.RestoreFileVersionRequest}
 */
proto.cs3.storageproviderv0alpha.RestoreFileVersionRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new cs3_storageprovider_v0alpha_resources_pb.Reference;
      reader.readMessage(value,cs3_storageprovider_v0alpha_resources_pb.Reference.deserializeBinaryFromReader);
      msg.setRef(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
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
proto.cs3.storageproviderv0alpha.RestoreFileVersionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storageproviderv0alpha.RestoreFileVersionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storageproviderv0alpha.RestoreFileVersionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.RestoreFileVersionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getRef();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_storageprovider_v0alpha_resources_pb.Reference.serializeBinaryToWriter
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional cs3.types.Opaque opaque = 1;
 * @return {?proto.cs3.types.Opaque}
 */
proto.cs3.storageproviderv0alpha.RestoreFileVersionRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_types_pb.Opaque, 1));
};


/** @param {?proto.cs3.types.Opaque|undefined} value */
proto.cs3.storageproviderv0alpha.RestoreFileVersionRequest.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.RestoreFileVersionRequest.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.RestoreFileVersionRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Reference ref = 2;
 * @return {?proto.cs3.storageproviderv0alpha.Reference}
 */
proto.cs3.storageproviderv0alpha.RestoreFileVersionRequest.prototype.getRef = function() {
  return /** @type{?proto.cs3.storageproviderv0alpha.Reference} */ (
    jspb.Message.getWrapperField(this, cs3_storageprovider_v0alpha_resources_pb.Reference, 2));
};


/** @param {?proto.cs3.storageproviderv0alpha.Reference|undefined} value */
proto.cs3.storageproviderv0alpha.RestoreFileVersionRequest.prototype.setRef = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.RestoreFileVersionRequest.prototype.clearRef = function() {
  this.setRef(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.RestoreFileVersionRequest.prototype.hasRef = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string key = 3;
 * @return {string}
 */
proto.cs3.storageproviderv0alpha.RestoreFileVersionRequest.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.cs3.storageproviderv0alpha.RestoreFileVersionRequest.prototype.setKey = function(value) {
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
proto.cs3.storageproviderv0alpha.RestoreFileVersionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storageproviderv0alpha.RestoreFileVersionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storageproviderv0alpha.RestoreFileVersionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.RestoreFileVersionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && cs3_rpc_status_pb.Status.toObject(includeInstance, f),
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
 * @return {!proto.cs3.storageproviderv0alpha.RestoreFileVersionResponse}
 */
proto.cs3.storageproviderv0alpha.RestoreFileVersionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storageproviderv0alpha.RestoreFileVersionResponse;
  return proto.cs3.storageproviderv0alpha.RestoreFileVersionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storageproviderv0alpha.RestoreFileVersionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storageproviderv0alpha.RestoreFileVersionResponse}
 */
proto.cs3.storageproviderv0alpha.RestoreFileVersionResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.cs3.storageproviderv0alpha.RestoreFileVersionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storageproviderv0alpha.RestoreFileVersionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storageproviderv0alpha.RestoreFileVersionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.RestoreFileVersionResponse.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional cs3.rpc.Status status = 1;
 * @return {?proto.cs3.rpc.Status}
 */
proto.cs3.storageproviderv0alpha.RestoreFileVersionResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.Status} */ (
    jspb.Message.getWrapperField(this, cs3_rpc_status_pb.Status, 1));
};


/** @param {?proto.cs3.rpc.Status|undefined} value */
proto.cs3.storageproviderv0alpha.RestoreFileVersionResponse.prototype.setStatus = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.RestoreFileVersionResponse.prototype.clearStatus = function() {
  this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.RestoreFileVersionResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.Opaque opaque = 2;
 * @return {?proto.cs3.types.Opaque}
 */
proto.cs3.storageproviderv0alpha.RestoreFileVersionResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_types_pb.Opaque, 2));
};


/** @param {?proto.cs3.types.Opaque|undefined} value */
proto.cs3.storageproviderv0alpha.RestoreFileVersionResponse.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.RestoreFileVersionResponse.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.RestoreFileVersionResponse.prototype.hasOpaque = function() {
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
proto.cs3.storageproviderv0alpha.RestoreRecycleItemRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storageproviderv0alpha.RestoreRecycleItemRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storageproviderv0alpha.RestoreRecycleItemRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.RestoreRecycleItemRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_types_pb.Opaque.toObject(includeInstance, f),
    ref: (f = msg.getRef()) && cs3_storageprovider_v0alpha_resources_pb.Reference.toObject(includeInstance, f),
    key: jspb.Message.getFieldWithDefault(msg, 3, ""),
    restorePath: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.cs3.storageproviderv0alpha.RestoreRecycleItemRequest}
 */
proto.cs3.storageproviderv0alpha.RestoreRecycleItemRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storageproviderv0alpha.RestoreRecycleItemRequest;
  return proto.cs3.storageproviderv0alpha.RestoreRecycleItemRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storageproviderv0alpha.RestoreRecycleItemRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storageproviderv0alpha.RestoreRecycleItemRequest}
 */
proto.cs3.storageproviderv0alpha.RestoreRecycleItemRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new cs3_storageprovider_v0alpha_resources_pb.Reference;
      reader.readMessage(value,cs3_storageprovider_v0alpha_resources_pb.Reference.deserializeBinaryFromReader);
      msg.setRef(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRestorePath(value);
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
proto.cs3.storageproviderv0alpha.RestoreRecycleItemRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storageproviderv0alpha.RestoreRecycleItemRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storageproviderv0alpha.RestoreRecycleItemRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.RestoreRecycleItemRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getRef();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_storageprovider_v0alpha_resources_pb.Reference.serializeBinaryToWriter
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRestorePath();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional cs3.types.Opaque opaque = 1;
 * @return {?proto.cs3.types.Opaque}
 */
proto.cs3.storageproviderv0alpha.RestoreRecycleItemRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_types_pb.Opaque, 1));
};


/** @param {?proto.cs3.types.Opaque|undefined} value */
proto.cs3.storageproviderv0alpha.RestoreRecycleItemRequest.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.RestoreRecycleItemRequest.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.RestoreRecycleItemRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Reference ref = 2;
 * @return {?proto.cs3.storageproviderv0alpha.Reference}
 */
proto.cs3.storageproviderv0alpha.RestoreRecycleItemRequest.prototype.getRef = function() {
  return /** @type{?proto.cs3.storageproviderv0alpha.Reference} */ (
    jspb.Message.getWrapperField(this, cs3_storageprovider_v0alpha_resources_pb.Reference, 2));
};


/** @param {?proto.cs3.storageproviderv0alpha.Reference|undefined} value */
proto.cs3.storageproviderv0alpha.RestoreRecycleItemRequest.prototype.setRef = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.RestoreRecycleItemRequest.prototype.clearRef = function() {
  this.setRef(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.RestoreRecycleItemRequest.prototype.hasRef = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string key = 3;
 * @return {string}
 */
proto.cs3.storageproviderv0alpha.RestoreRecycleItemRequest.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.cs3.storageproviderv0alpha.RestoreRecycleItemRequest.prototype.setKey = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string restore_path = 4;
 * @return {string}
 */
proto.cs3.storageproviderv0alpha.RestoreRecycleItemRequest.prototype.getRestorePath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.cs3.storageproviderv0alpha.RestoreRecycleItemRequest.prototype.setRestorePath = function(value) {
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
proto.cs3.storageproviderv0alpha.RestoreRecycleItemResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storageproviderv0alpha.RestoreRecycleItemResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storageproviderv0alpha.RestoreRecycleItemResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.RestoreRecycleItemResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && cs3_rpc_status_pb.Status.toObject(includeInstance, f),
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
 * @return {!proto.cs3.storageproviderv0alpha.RestoreRecycleItemResponse}
 */
proto.cs3.storageproviderv0alpha.RestoreRecycleItemResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storageproviderv0alpha.RestoreRecycleItemResponse;
  return proto.cs3.storageproviderv0alpha.RestoreRecycleItemResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storageproviderv0alpha.RestoreRecycleItemResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storageproviderv0alpha.RestoreRecycleItemResponse}
 */
proto.cs3.storageproviderv0alpha.RestoreRecycleItemResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.cs3.storageproviderv0alpha.RestoreRecycleItemResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storageproviderv0alpha.RestoreRecycleItemResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storageproviderv0alpha.RestoreRecycleItemResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.RestoreRecycleItemResponse.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional cs3.rpc.Status status = 1;
 * @return {?proto.cs3.rpc.Status}
 */
proto.cs3.storageproviderv0alpha.RestoreRecycleItemResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.Status} */ (
    jspb.Message.getWrapperField(this, cs3_rpc_status_pb.Status, 1));
};


/** @param {?proto.cs3.rpc.Status|undefined} value */
proto.cs3.storageproviderv0alpha.RestoreRecycleItemResponse.prototype.setStatus = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.RestoreRecycleItemResponse.prototype.clearStatus = function() {
  this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.RestoreRecycleItemResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.Opaque opaque = 2;
 * @return {?proto.cs3.types.Opaque}
 */
proto.cs3.storageproviderv0alpha.RestoreRecycleItemResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_types_pb.Opaque, 2));
};


/** @param {?proto.cs3.types.Opaque|undefined} value */
proto.cs3.storageproviderv0alpha.RestoreRecycleItemResponse.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.RestoreRecycleItemResponse.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.RestoreRecycleItemResponse.prototype.hasOpaque = function() {
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
proto.cs3.storageproviderv0alpha.RemoveGrantRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storageproviderv0alpha.RemoveGrantRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storageproviderv0alpha.RemoveGrantRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.RemoveGrantRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_types_pb.Opaque.toObject(includeInstance, f),
    ref: (f = msg.getRef()) && cs3_storageprovider_v0alpha_resources_pb.Reference.toObject(includeInstance, f),
    grant: (f = msg.getGrant()) && cs3_storageprovider_v0alpha_resources_pb.Grant.toObject(includeInstance, f)
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
 * @return {!proto.cs3.storageproviderv0alpha.RemoveGrantRequest}
 */
proto.cs3.storageproviderv0alpha.RemoveGrantRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storageproviderv0alpha.RemoveGrantRequest;
  return proto.cs3.storageproviderv0alpha.RemoveGrantRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storageproviderv0alpha.RemoveGrantRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storageproviderv0alpha.RemoveGrantRequest}
 */
proto.cs3.storageproviderv0alpha.RemoveGrantRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new cs3_storageprovider_v0alpha_resources_pb.Reference;
      reader.readMessage(value,cs3_storageprovider_v0alpha_resources_pb.Reference.deserializeBinaryFromReader);
      msg.setRef(value);
      break;
    case 3:
      var value = new cs3_storageprovider_v0alpha_resources_pb.Grant;
      reader.readMessage(value,cs3_storageprovider_v0alpha_resources_pb.Grant.deserializeBinaryFromReader);
      msg.setGrant(value);
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
proto.cs3.storageproviderv0alpha.RemoveGrantRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storageproviderv0alpha.RemoveGrantRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storageproviderv0alpha.RemoveGrantRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.RemoveGrantRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getRef();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_storageprovider_v0alpha_resources_pb.Reference.serializeBinaryToWriter
    );
  }
  f = message.getGrant();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      cs3_storageprovider_v0alpha_resources_pb.Grant.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.types.Opaque opaque = 1;
 * @return {?proto.cs3.types.Opaque}
 */
proto.cs3.storageproviderv0alpha.RemoveGrantRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_types_pb.Opaque, 1));
};


/** @param {?proto.cs3.types.Opaque|undefined} value */
proto.cs3.storageproviderv0alpha.RemoveGrantRequest.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.RemoveGrantRequest.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.RemoveGrantRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Reference ref = 2;
 * @return {?proto.cs3.storageproviderv0alpha.Reference}
 */
proto.cs3.storageproviderv0alpha.RemoveGrantRequest.prototype.getRef = function() {
  return /** @type{?proto.cs3.storageproviderv0alpha.Reference} */ (
    jspb.Message.getWrapperField(this, cs3_storageprovider_v0alpha_resources_pb.Reference, 2));
};


/** @param {?proto.cs3.storageproviderv0alpha.Reference|undefined} value */
proto.cs3.storageproviderv0alpha.RemoveGrantRequest.prototype.setRef = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.RemoveGrantRequest.prototype.clearRef = function() {
  this.setRef(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.RemoveGrantRequest.prototype.hasRef = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Grant grant = 3;
 * @return {?proto.cs3.storageproviderv0alpha.Grant}
 */
proto.cs3.storageproviderv0alpha.RemoveGrantRequest.prototype.getGrant = function() {
  return /** @type{?proto.cs3.storageproviderv0alpha.Grant} */ (
    jspb.Message.getWrapperField(this, cs3_storageprovider_v0alpha_resources_pb.Grant, 3));
};


/** @param {?proto.cs3.storageproviderv0alpha.Grant|undefined} value */
proto.cs3.storageproviderv0alpha.RemoveGrantRequest.prototype.setGrant = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.RemoveGrantRequest.prototype.clearGrant = function() {
  this.setGrant(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.RemoveGrantRequest.prototype.hasGrant = function() {
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
proto.cs3.storageproviderv0alpha.RemoveGrantResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storageproviderv0alpha.RemoveGrantResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storageproviderv0alpha.RemoveGrantResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.RemoveGrantResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && cs3_rpc_status_pb.Status.toObject(includeInstance, f),
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
 * @return {!proto.cs3.storageproviderv0alpha.RemoveGrantResponse}
 */
proto.cs3.storageproviderv0alpha.RemoveGrantResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storageproviderv0alpha.RemoveGrantResponse;
  return proto.cs3.storageproviderv0alpha.RemoveGrantResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storageproviderv0alpha.RemoveGrantResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storageproviderv0alpha.RemoveGrantResponse}
 */
proto.cs3.storageproviderv0alpha.RemoveGrantResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.cs3.storageproviderv0alpha.RemoveGrantResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storageproviderv0alpha.RemoveGrantResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storageproviderv0alpha.RemoveGrantResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.RemoveGrantResponse.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional cs3.rpc.Status status = 1;
 * @return {?proto.cs3.rpc.Status}
 */
proto.cs3.storageproviderv0alpha.RemoveGrantResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.Status} */ (
    jspb.Message.getWrapperField(this, cs3_rpc_status_pb.Status, 1));
};


/** @param {?proto.cs3.rpc.Status|undefined} value */
proto.cs3.storageproviderv0alpha.RemoveGrantResponse.prototype.setStatus = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.RemoveGrantResponse.prototype.clearStatus = function() {
  this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.RemoveGrantResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.Opaque opaque = 2;
 * @return {?proto.cs3.types.Opaque}
 */
proto.cs3.storageproviderv0alpha.RemoveGrantResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_types_pb.Opaque, 2));
};


/** @param {?proto.cs3.types.Opaque|undefined} value */
proto.cs3.storageproviderv0alpha.RemoveGrantResponse.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.RemoveGrantResponse.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.RemoveGrantResponse.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cs3.storageproviderv0alpha.StatRequest.repeatedFields_ = [3];



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
proto.cs3.storageproviderv0alpha.StatRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storageproviderv0alpha.StatRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storageproviderv0alpha.StatRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.StatRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_types_pb.Opaque.toObject(includeInstance, f),
    ref: (f = msg.getRef()) && cs3_storageprovider_v0alpha_resources_pb.Reference.toObject(includeInstance, f),
    arbitraryMetadataKeysList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.cs3.storageproviderv0alpha.StatRequest}
 */
proto.cs3.storageproviderv0alpha.StatRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storageproviderv0alpha.StatRequest;
  return proto.cs3.storageproviderv0alpha.StatRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storageproviderv0alpha.StatRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storageproviderv0alpha.StatRequest}
 */
proto.cs3.storageproviderv0alpha.StatRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new cs3_storageprovider_v0alpha_resources_pb.Reference;
      reader.readMessage(value,cs3_storageprovider_v0alpha_resources_pb.Reference.deserializeBinaryFromReader);
      msg.setRef(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addArbitraryMetadataKeys(value);
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
proto.cs3.storageproviderv0alpha.StatRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storageproviderv0alpha.StatRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storageproviderv0alpha.StatRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.StatRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getRef();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_storageprovider_v0alpha_resources_pb.Reference.serializeBinaryToWriter
    );
  }
  f = message.getArbitraryMetadataKeysList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional cs3.types.Opaque opaque = 1;
 * @return {?proto.cs3.types.Opaque}
 */
proto.cs3.storageproviderv0alpha.StatRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_types_pb.Opaque, 1));
};


/** @param {?proto.cs3.types.Opaque|undefined} value */
proto.cs3.storageproviderv0alpha.StatRequest.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.StatRequest.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.StatRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Reference ref = 2;
 * @return {?proto.cs3.storageproviderv0alpha.Reference}
 */
proto.cs3.storageproviderv0alpha.StatRequest.prototype.getRef = function() {
  return /** @type{?proto.cs3.storageproviderv0alpha.Reference} */ (
    jspb.Message.getWrapperField(this, cs3_storageprovider_v0alpha_resources_pb.Reference, 2));
};


/** @param {?proto.cs3.storageproviderv0alpha.Reference|undefined} value */
proto.cs3.storageproviderv0alpha.StatRequest.prototype.setRef = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.StatRequest.prototype.clearRef = function() {
  this.setRef(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.StatRequest.prototype.hasRef = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated string arbitrary_metadata_keys = 3;
 * @return {!Array<string>}
 */
proto.cs3.storageproviderv0alpha.StatRequest.prototype.getArbitraryMetadataKeysList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/** @param {!Array<string>} value */
proto.cs3.storageproviderv0alpha.StatRequest.prototype.setArbitraryMetadataKeysList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.cs3.storageproviderv0alpha.StatRequest.prototype.addArbitraryMetadataKeys = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.cs3.storageproviderv0alpha.StatRequest.prototype.clearArbitraryMetadataKeysList = function() {
  this.setArbitraryMetadataKeysList([]);
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
proto.cs3.storageproviderv0alpha.StatResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storageproviderv0alpha.StatResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storageproviderv0alpha.StatResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.StatResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && cs3_rpc_status_pb.Status.toObject(includeInstance, f),
    opaque: (f = msg.getOpaque()) && cs3_types_types_pb.Opaque.toObject(includeInstance, f),
    info: (f = msg.getInfo()) && cs3_storageprovider_v0alpha_resources_pb.ResourceInfo.toObject(includeInstance, f)
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
 * @return {!proto.cs3.storageproviderv0alpha.StatResponse}
 */
proto.cs3.storageproviderv0alpha.StatResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storageproviderv0alpha.StatResponse;
  return proto.cs3.storageproviderv0alpha.StatResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storageproviderv0alpha.StatResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storageproviderv0alpha.StatResponse}
 */
proto.cs3.storageproviderv0alpha.StatResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new cs3_storageprovider_v0alpha_resources_pb.ResourceInfo;
      reader.readMessage(value,cs3_storageprovider_v0alpha_resources_pb.ResourceInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
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
proto.cs3.storageproviderv0alpha.StatResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storageproviderv0alpha.StatResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storageproviderv0alpha.StatResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.StatResponse.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      cs3_storageprovider_v0alpha_resources_pb.ResourceInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.rpc.Status status = 1;
 * @return {?proto.cs3.rpc.Status}
 */
proto.cs3.storageproviderv0alpha.StatResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.Status} */ (
    jspb.Message.getWrapperField(this, cs3_rpc_status_pb.Status, 1));
};


/** @param {?proto.cs3.rpc.Status|undefined} value */
proto.cs3.storageproviderv0alpha.StatResponse.prototype.setStatus = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.StatResponse.prototype.clearStatus = function() {
  this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.StatResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.Opaque opaque = 2;
 * @return {?proto.cs3.types.Opaque}
 */
proto.cs3.storageproviderv0alpha.StatResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_types_pb.Opaque, 2));
};


/** @param {?proto.cs3.types.Opaque|undefined} value */
proto.cs3.storageproviderv0alpha.StatResponse.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.StatResponse.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.StatResponse.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ResourceInfo info = 3;
 * @return {?proto.cs3.storageproviderv0alpha.ResourceInfo}
 */
proto.cs3.storageproviderv0alpha.StatResponse.prototype.getInfo = function() {
  return /** @type{?proto.cs3.storageproviderv0alpha.ResourceInfo} */ (
    jspb.Message.getWrapperField(this, cs3_storageprovider_v0alpha_resources_pb.ResourceInfo, 3));
};


/** @param {?proto.cs3.storageproviderv0alpha.ResourceInfo|undefined} value */
proto.cs3.storageproviderv0alpha.StatResponse.prototype.setInfo = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.StatResponse.prototype.clearInfo = function() {
  this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.StatResponse.prototype.hasInfo = function() {
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
proto.cs3.storageproviderv0alpha.UpdateGrantRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storageproviderv0alpha.UpdateGrantRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storageproviderv0alpha.UpdateGrantRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.UpdateGrantRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_types_pb.Opaque.toObject(includeInstance, f),
    ref: (f = msg.getRef()) && cs3_storageprovider_v0alpha_resources_pb.Reference.toObject(includeInstance, f),
    grant: (f = msg.getGrant()) && cs3_storageprovider_v0alpha_resources_pb.Grant.toObject(includeInstance, f)
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
 * @return {!proto.cs3.storageproviderv0alpha.UpdateGrantRequest}
 */
proto.cs3.storageproviderv0alpha.UpdateGrantRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storageproviderv0alpha.UpdateGrantRequest;
  return proto.cs3.storageproviderv0alpha.UpdateGrantRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storageproviderv0alpha.UpdateGrantRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storageproviderv0alpha.UpdateGrantRequest}
 */
proto.cs3.storageproviderv0alpha.UpdateGrantRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new cs3_storageprovider_v0alpha_resources_pb.Reference;
      reader.readMessage(value,cs3_storageprovider_v0alpha_resources_pb.Reference.deserializeBinaryFromReader);
      msg.setRef(value);
      break;
    case 3:
      var value = new cs3_storageprovider_v0alpha_resources_pb.Grant;
      reader.readMessage(value,cs3_storageprovider_v0alpha_resources_pb.Grant.deserializeBinaryFromReader);
      msg.setGrant(value);
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
proto.cs3.storageproviderv0alpha.UpdateGrantRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storageproviderv0alpha.UpdateGrantRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storageproviderv0alpha.UpdateGrantRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.UpdateGrantRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getRef();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_storageprovider_v0alpha_resources_pb.Reference.serializeBinaryToWriter
    );
  }
  f = message.getGrant();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      cs3_storageprovider_v0alpha_resources_pb.Grant.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.types.Opaque opaque = 1;
 * @return {?proto.cs3.types.Opaque}
 */
proto.cs3.storageproviderv0alpha.UpdateGrantRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_types_pb.Opaque, 1));
};


/** @param {?proto.cs3.types.Opaque|undefined} value */
proto.cs3.storageproviderv0alpha.UpdateGrantRequest.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.UpdateGrantRequest.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.UpdateGrantRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Reference ref = 2;
 * @return {?proto.cs3.storageproviderv0alpha.Reference}
 */
proto.cs3.storageproviderv0alpha.UpdateGrantRequest.prototype.getRef = function() {
  return /** @type{?proto.cs3.storageproviderv0alpha.Reference} */ (
    jspb.Message.getWrapperField(this, cs3_storageprovider_v0alpha_resources_pb.Reference, 2));
};


/** @param {?proto.cs3.storageproviderv0alpha.Reference|undefined} value */
proto.cs3.storageproviderv0alpha.UpdateGrantRequest.prototype.setRef = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.UpdateGrantRequest.prototype.clearRef = function() {
  this.setRef(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.UpdateGrantRequest.prototype.hasRef = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Grant grant = 3;
 * @return {?proto.cs3.storageproviderv0alpha.Grant}
 */
proto.cs3.storageproviderv0alpha.UpdateGrantRequest.prototype.getGrant = function() {
  return /** @type{?proto.cs3.storageproviderv0alpha.Grant} */ (
    jspb.Message.getWrapperField(this, cs3_storageprovider_v0alpha_resources_pb.Grant, 3));
};


/** @param {?proto.cs3.storageproviderv0alpha.Grant|undefined} value */
proto.cs3.storageproviderv0alpha.UpdateGrantRequest.prototype.setGrant = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.UpdateGrantRequest.prototype.clearGrant = function() {
  this.setGrant(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.UpdateGrantRequest.prototype.hasGrant = function() {
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
proto.cs3.storageproviderv0alpha.UpdateGrantResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storageproviderv0alpha.UpdateGrantResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storageproviderv0alpha.UpdateGrantResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.UpdateGrantResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && cs3_rpc_status_pb.Status.toObject(includeInstance, f),
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
 * @return {!proto.cs3.storageproviderv0alpha.UpdateGrantResponse}
 */
proto.cs3.storageproviderv0alpha.UpdateGrantResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storageproviderv0alpha.UpdateGrantResponse;
  return proto.cs3.storageproviderv0alpha.UpdateGrantResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storageproviderv0alpha.UpdateGrantResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storageproviderv0alpha.UpdateGrantResponse}
 */
proto.cs3.storageproviderv0alpha.UpdateGrantResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.cs3.storageproviderv0alpha.UpdateGrantResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storageproviderv0alpha.UpdateGrantResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storageproviderv0alpha.UpdateGrantResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.UpdateGrantResponse.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional cs3.rpc.Status status = 1;
 * @return {?proto.cs3.rpc.Status}
 */
proto.cs3.storageproviderv0alpha.UpdateGrantResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.Status} */ (
    jspb.Message.getWrapperField(this, cs3_rpc_status_pb.Status, 1));
};


/** @param {?proto.cs3.rpc.Status|undefined} value */
proto.cs3.storageproviderv0alpha.UpdateGrantResponse.prototype.setStatus = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.UpdateGrantResponse.prototype.clearStatus = function() {
  this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.UpdateGrantResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.Opaque opaque = 2;
 * @return {?proto.cs3.types.Opaque}
 */
proto.cs3.storageproviderv0alpha.UpdateGrantResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_types_pb.Opaque, 2));
};


/** @param {?proto.cs3.types.Opaque|undefined} value */
proto.cs3.storageproviderv0alpha.UpdateGrantResponse.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.UpdateGrantResponse.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.UpdateGrantResponse.prototype.hasOpaque = function() {
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
proto.cs3.storageproviderv0alpha.CreateReferenceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storageproviderv0alpha.CreateReferenceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storageproviderv0alpha.CreateReferenceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.CreateReferenceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_types_pb.Opaque.toObject(includeInstance, f),
    path: jspb.Message.getFieldWithDefault(msg, 2, ""),
    targetUri: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.cs3.storageproviderv0alpha.CreateReferenceRequest}
 */
proto.cs3.storageproviderv0alpha.CreateReferenceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storageproviderv0alpha.CreateReferenceRequest;
  return proto.cs3.storageproviderv0alpha.CreateReferenceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storageproviderv0alpha.CreateReferenceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storageproviderv0alpha.CreateReferenceRequest}
 */
proto.cs3.storageproviderv0alpha.CreateReferenceRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetUri(value);
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
proto.cs3.storageproviderv0alpha.CreateReferenceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storageproviderv0alpha.CreateReferenceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storageproviderv0alpha.CreateReferenceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.CreateReferenceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTargetUri();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional cs3.types.Opaque opaque = 1;
 * @return {?proto.cs3.types.Opaque}
 */
proto.cs3.storageproviderv0alpha.CreateReferenceRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_types_pb.Opaque, 1));
};


/** @param {?proto.cs3.types.Opaque|undefined} value */
proto.cs3.storageproviderv0alpha.CreateReferenceRequest.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.CreateReferenceRequest.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.CreateReferenceRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string path = 2;
 * @return {string}
 */
proto.cs3.storageproviderv0alpha.CreateReferenceRequest.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.cs3.storageproviderv0alpha.CreateReferenceRequest.prototype.setPath = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string target_uri = 3;
 * @return {string}
 */
proto.cs3.storageproviderv0alpha.CreateReferenceRequest.prototype.getTargetUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.cs3.storageproviderv0alpha.CreateReferenceRequest.prototype.setTargetUri = function(value) {
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
proto.cs3.storageproviderv0alpha.CreateReferenceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storageproviderv0alpha.CreateReferenceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storageproviderv0alpha.CreateReferenceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.CreateReferenceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && cs3_rpc_status_pb.Status.toObject(includeInstance, f),
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
 * @return {!proto.cs3.storageproviderv0alpha.CreateReferenceResponse}
 */
proto.cs3.storageproviderv0alpha.CreateReferenceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storageproviderv0alpha.CreateReferenceResponse;
  return proto.cs3.storageproviderv0alpha.CreateReferenceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storageproviderv0alpha.CreateReferenceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storageproviderv0alpha.CreateReferenceResponse}
 */
proto.cs3.storageproviderv0alpha.CreateReferenceResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.cs3.storageproviderv0alpha.CreateReferenceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storageproviderv0alpha.CreateReferenceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storageproviderv0alpha.CreateReferenceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.CreateReferenceResponse.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional cs3.rpc.Status status = 1;
 * @return {?proto.cs3.rpc.Status}
 */
proto.cs3.storageproviderv0alpha.CreateReferenceResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.Status} */ (
    jspb.Message.getWrapperField(this, cs3_rpc_status_pb.Status, 1));
};


/** @param {?proto.cs3.rpc.Status|undefined} value */
proto.cs3.storageproviderv0alpha.CreateReferenceResponse.prototype.setStatus = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.CreateReferenceResponse.prototype.clearStatus = function() {
  this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.CreateReferenceResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.Opaque opaque = 2;
 * @return {?proto.cs3.types.Opaque}
 */
proto.cs3.storageproviderv0alpha.CreateReferenceResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_types_pb.Opaque, 2));
};


/** @param {?proto.cs3.types.Opaque|undefined} value */
proto.cs3.storageproviderv0alpha.CreateReferenceResponse.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.CreateReferenceResponse.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.CreateReferenceResponse.prototype.hasOpaque = function() {
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
proto.cs3.storageproviderv0alpha.SetArbitraryMetadataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storageproviderv0alpha.SetArbitraryMetadataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storageproviderv0alpha.SetArbitraryMetadataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.SetArbitraryMetadataRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_types_pb.Opaque.toObject(includeInstance, f),
    ref: (f = msg.getRef()) && cs3_storageprovider_v0alpha_resources_pb.Reference.toObject(includeInstance, f),
    arbitraryMetadata: (f = msg.getArbitraryMetadata()) && cs3_storageprovider_v0alpha_resources_pb.ArbitraryMetadata.toObject(includeInstance, f)
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
 * @return {!proto.cs3.storageproviderv0alpha.SetArbitraryMetadataRequest}
 */
proto.cs3.storageproviderv0alpha.SetArbitraryMetadataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storageproviderv0alpha.SetArbitraryMetadataRequest;
  return proto.cs3.storageproviderv0alpha.SetArbitraryMetadataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storageproviderv0alpha.SetArbitraryMetadataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storageproviderv0alpha.SetArbitraryMetadataRequest}
 */
proto.cs3.storageproviderv0alpha.SetArbitraryMetadataRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new cs3_storageprovider_v0alpha_resources_pb.Reference;
      reader.readMessage(value,cs3_storageprovider_v0alpha_resources_pb.Reference.deserializeBinaryFromReader);
      msg.setRef(value);
      break;
    case 3:
      var value = new cs3_storageprovider_v0alpha_resources_pb.ArbitraryMetadata;
      reader.readMessage(value,cs3_storageprovider_v0alpha_resources_pb.ArbitraryMetadata.deserializeBinaryFromReader);
      msg.setArbitraryMetadata(value);
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
proto.cs3.storageproviderv0alpha.SetArbitraryMetadataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storageproviderv0alpha.SetArbitraryMetadataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storageproviderv0alpha.SetArbitraryMetadataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.SetArbitraryMetadataRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getRef();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_storageprovider_v0alpha_resources_pb.Reference.serializeBinaryToWriter
    );
  }
  f = message.getArbitraryMetadata();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      cs3_storageprovider_v0alpha_resources_pb.ArbitraryMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.types.Opaque opaque = 1;
 * @return {?proto.cs3.types.Opaque}
 */
proto.cs3.storageproviderv0alpha.SetArbitraryMetadataRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_types_pb.Opaque, 1));
};


/** @param {?proto.cs3.types.Opaque|undefined} value */
proto.cs3.storageproviderv0alpha.SetArbitraryMetadataRequest.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.SetArbitraryMetadataRequest.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.SetArbitraryMetadataRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Reference ref = 2;
 * @return {?proto.cs3.storageproviderv0alpha.Reference}
 */
proto.cs3.storageproviderv0alpha.SetArbitraryMetadataRequest.prototype.getRef = function() {
  return /** @type{?proto.cs3.storageproviderv0alpha.Reference} */ (
    jspb.Message.getWrapperField(this, cs3_storageprovider_v0alpha_resources_pb.Reference, 2));
};


/** @param {?proto.cs3.storageproviderv0alpha.Reference|undefined} value */
proto.cs3.storageproviderv0alpha.SetArbitraryMetadataRequest.prototype.setRef = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.SetArbitraryMetadataRequest.prototype.clearRef = function() {
  this.setRef(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.SetArbitraryMetadataRequest.prototype.hasRef = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ArbitraryMetadata arbitrary_metadata = 3;
 * @return {?proto.cs3.storageproviderv0alpha.ArbitraryMetadata}
 */
proto.cs3.storageproviderv0alpha.SetArbitraryMetadataRequest.prototype.getArbitraryMetadata = function() {
  return /** @type{?proto.cs3.storageproviderv0alpha.ArbitraryMetadata} */ (
    jspb.Message.getWrapperField(this, cs3_storageprovider_v0alpha_resources_pb.ArbitraryMetadata, 3));
};


/** @param {?proto.cs3.storageproviderv0alpha.ArbitraryMetadata|undefined} value */
proto.cs3.storageproviderv0alpha.SetArbitraryMetadataRequest.prototype.setArbitraryMetadata = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.SetArbitraryMetadataRequest.prototype.clearArbitraryMetadata = function() {
  this.setArbitraryMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.SetArbitraryMetadataRequest.prototype.hasArbitraryMetadata = function() {
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
proto.cs3.storageproviderv0alpha.SetArbitraryMetadataResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storageproviderv0alpha.SetArbitraryMetadataResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storageproviderv0alpha.SetArbitraryMetadataResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.SetArbitraryMetadataResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && cs3_rpc_status_pb.Status.toObject(includeInstance, f),
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
 * @return {!proto.cs3.storageproviderv0alpha.SetArbitraryMetadataResponse}
 */
proto.cs3.storageproviderv0alpha.SetArbitraryMetadataResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storageproviderv0alpha.SetArbitraryMetadataResponse;
  return proto.cs3.storageproviderv0alpha.SetArbitraryMetadataResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storageproviderv0alpha.SetArbitraryMetadataResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storageproviderv0alpha.SetArbitraryMetadataResponse}
 */
proto.cs3.storageproviderv0alpha.SetArbitraryMetadataResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.cs3.storageproviderv0alpha.SetArbitraryMetadataResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storageproviderv0alpha.SetArbitraryMetadataResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storageproviderv0alpha.SetArbitraryMetadataResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.SetArbitraryMetadataResponse.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional cs3.rpc.Status status = 1;
 * @return {?proto.cs3.rpc.Status}
 */
proto.cs3.storageproviderv0alpha.SetArbitraryMetadataResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.Status} */ (
    jspb.Message.getWrapperField(this, cs3_rpc_status_pb.Status, 1));
};


/** @param {?proto.cs3.rpc.Status|undefined} value */
proto.cs3.storageproviderv0alpha.SetArbitraryMetadataResponse.prototype.setStatus = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.SetArbitraryMetadataResponse.prototype.clearStatus = function() {
  this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.SetArbitraryMetadataResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.Opaque opaque = 2;
 * @return {?proto.cs3.types.Opaque}
 */
proto.cs3.storageproviderv0alpha.SetArbitraryMetadataResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_types_pb.Opaque, 2));
};


/** @param {?proto.cs3.types.Opaque|undefined} value */
proto.cs3.storageproviderv0alpha.SetArbitraryMetadataResponse.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.SetArbitraryMetadataResponse.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.SetArbitraryMetadataResponse.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataRequest.repeatedFields_ = [3];



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
proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_types_pb.Opaque.toObject(includeInstance, f),
    ref: (f = msg.getRef()) && cs3_storageprovider_v0alpha_resources_pb.Reference.toObject(includeInstance, f),
    arbitraryMetadataKeysList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataRequest}
 */
proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataRequest;
  return proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataRequest}
 */
proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new cs3_storageprovider_v0alpha_resources_pb.Reference;
      reader.readMessage(value,cs3_storageprovider_v0alpha_resources_pb.Reference.deserializeBinaryFromReader);
      msg.setRef(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addArbitraryMetadataKeys(value);
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
proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getRef();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_storageprovider_v0alpha_resources_pb.Reference.serializeBinaryToWriter
    );
  }
  f = message.getArbitraryMetadataKeysList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional cs3.types.Opaque opaque = 1;
 * @return {?proto.cs3.types.Opaque}
 */
proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_types_pb.Opaque, 1));
};


/** @param {?proto.cs3.types.Opaque|undefined} value */
proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataRequest.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataRequest.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Reference ref = 2;
 * @return {?proto.cs3.storageproviderv0alpha.Reference}
 */
proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataRequest.prototype.getRef = function() {
  return /** @type{?proto.cs3.storageproviderv0alpha.Reference} */ (
    jspb.Message.getWrapperField(this, cs3_storageprovider_v0alpha_resources_pb.Reference, 2));
};


/** @param {?proto.cs3.storageproviderv0alpha.Reference|undefined} value */
proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataRequest.prototype.setRef = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataRequest.prototype.clearRef = function() {
  this.setRef(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataRequest.prototype.hasRef = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated string arbitrary_metadata_keys = 3;
 * @return {!Array<string>}
 */
proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataRequest.prototype.getArbitraryMetadataKeysList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/** @param {!Array<string>} value */
proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataRequest.prototype.setArbitraryMetadataKeysList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataRequest.prototype.addArbitraryMetadataKeys = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataRequest.prototype.clearArbitraryMetadataKeysList = function() {
  this.setArbitraryMetadataKeysList([]);
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
proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && cs3_rpc_status_pb.Status.toObject(includeInstance, f),
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
 * @return {!proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataResponse}
 */
proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataResponse;
  return proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataResponse}
 */
proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataResponse.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional cs3.rpc.Status status = 1;
 * @return {?proto.cs3.rpc.Status}
 */
proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.Status} */ (
    jspb.Message.getWrapperField(this, cs3_rpc_status_pb.Status, 1));
};


/** @param {?proto.cs3.rpc.Status|undefined} value */
proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataResponse.prototype.setStatus = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataResponse.prototype.clearStatus = function() {
  this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.Opaque opaque = 2;
 * @return {?proto.cs3.types.Opaque}
 */
proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_types_pb.Opaque, 2));
};


/** @param {?proto.cs3.types.Opaque|undefined} value */
proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataResponse.prototype.setOpaque = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataResponse.prototype.clearOpaque = function() {
  this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataResponse.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.cs3.storageproviderv0alpha);
