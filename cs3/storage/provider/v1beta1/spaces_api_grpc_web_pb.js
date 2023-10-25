/**
 * @fileoverview gRPC-Web generated client stub for cs3.storage.provider.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var cs3_identity_user_v1beta1_resources_pb = require('../../../../cs3/identity/user/v1beta1/resources_pb.js')

var cs3_rpc_v1beta1_status_pb = require('../../../../cs3/rpc/v1beta1/status_pb.js')

var cs3_storage_provider_v1beta1_resources_pb = require('../../../../cs3/storage/provider/v1beta1/resources_pb.js')

var cs3_types_v1beta1_types_pb = require('../../../../cs3/types/v1beta1/types_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')
const proto = {};
proto.cs3 = {};
proto.cs3.storage = {};
proto.cs3.storage.provider = {};
proto.cs3.storage.provider.v1beta1 = require('./spaces_api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cs3.storage.provider.v1beta1.SpacesAPIClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cs3.storage.provider.v1beta1.SpacesAPIPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storage.provider.v1beta1.CreateStorageSpaceRequest,
 *   !proto.cs3.storage.provider.v1beta1.CreateStorageSpaceResponse>}
 */
const methodDescriptor_SpacesAPI_CreateStorageSpace = new grpc.web.MethodDescriptor(
  '/cs3.storage.provider.v1beta1.SpacesAPI/CreateStorageSpace',
  grpc.web.MethodType.UNARY,
  proto.cs3.storage.provider.v1beta1.CreateStorageSpaceRequest,
  proto.cs3.storage.provider.v1beta1.CreateStorageSpaceResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.CreateStorageSpaceRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.CreateStorageSpaceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storage.provider.v1beta1.CreateStorageSpaceRequest,
 *   !proto.cs3.storage.provider.v1beta1.CreateStorageSpaceResponse>}
 */
const methodInfo_SpacesAPI_CreateStorageSpace = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storage.provider.v1beta1.CreateStorageSpaceResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.CreateStorageSpaceRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.CreateStorageSpaceResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storage.provider.v1beta1.CreateStorageSpaceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storage.provider.v1beta1.CreateStorageSpaceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storage.provider.v1beta1.CreateStorageSpaceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.storage.provider.v1beta1.SpacesAPIClient.prototype.createStorageSpace =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.SpacesAPI/CreateStorageSpace',
      request,
      metadata || {},
      methodDescriptor_SpacesAPI_CreateStorageSpace,
      callback);
};


/**
 * @param {!proto.cs3.storage.provider.v1beta1.CreateStorageSpaceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storage.provider.v1beta1.CreateStorageSpaceResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.storage.provider.v1beta1.SpacesAPIPromiseClient.prototype.createStorageSpace =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.SpacesAPI/CreateStorageSpace',
      request,
      metadata || {},
      methodDescriptor_SpacesAPI_CreateStorageSpace);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storage.provider.v1beta1.ListStorageSpacesRequest,
 *   !proto.cs3.storage.provider.v1beta1.ListStorageSpacesResponse>}
 */
const methodDescriptor_SpacesAPI_ListStorageSpaces = new grpc.web.MethodDescriptor(
  '/cs3.storage.provider.v1beta1.SpacesAPI/ListStorageSpaces',
  grpc.web.MethodType.UNARY,
  proto.cs3.storage.provider.v1beta1.ListStorageSpacesRequest,
  proto.cs3.storage.provider.v1beta1.ListStorageSpacesResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.ListStorageSpacesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.ListStorageSpacesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storage.provider.v1beta1.ListStorageSpacesRequest,
 *   !proto.cs3.storage.provider.v1beta1.ListStorageSpacesResponse>}
 */
const methodInfo_SpacesAPI_ListStorageSpaces = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storage.provider.v1beta1.ListStorageSpacesResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.ListStorageSpacesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.ListStorageSpacesResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storage.provider.v1beta1.ListStorageSpacesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storage.provider.v1beta1.ListStorageSpacesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storage.provider.v1beta1.ListStorageSpacesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.storage.provider.v1beta1.SpacesAPIClient.prototype.listStorageSpaces =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.SpacesAPI/ListStorageSpaces',
      request,
      metadata || {},
      methodDescriptor_SpacesAPI_ListStorageSpaces,
      callback);
};


/**
 * @param {!proto.cs3.storage.provider.v1beta1.ListStorageSpacesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storage.provider.v1beta1.ListStorageSpacesResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.storage.provider.v1beta1.SpacesAPIPromiseClient.prototype.listStorageSpaces =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.SpacesAPI/ListStorageSpaces',
      request,
      metadata || {},
      methodDescriptor_SpacesAPI_ListStorageSpaces);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storage.provider.v1beta1.UpdateStorageSpaceRequest,
 *   !proto.cs3.storage.provider.v1beta1.UpdateStorageSpaceResponse>}
 */
const methodDescriptor_SpacesAPI_UpdateStorageSpace = new grpc.web.MethodDescriptor(
  '/cs3.storage.provider.v1beta1.SpacesAPI/UpdateStorageSpace',
  grpc.web.MethodType.UNARY,
  proto.cs3.storage.provider.v1beta1.UpdateStorageSpaceRequest,
  proto.cs3.storage.provider.v1beta1.UpdateStorageSpaceResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.UpdateStorageSpaceRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.UpdateStorageSpaceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storage.provider.v1beta1.UpdateStorageSpaceRequest,
 *   !proto.cs3.storage.provider.v1beta1.UpdateStorageSpaceResponse>}
 */
const methodInfo_SpacesAPI_UpdateStorageSpace = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storage.provider.v1beta1.UpdateStorageSpaceResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.UpdateStorageSpaceRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.UpdateStorageSpaceResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storage.provider.v1beta1.UpdateStorageSpaceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storage.provider.v1beta1.UpdateStorageSpaceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storage.provider.v1beta1.UpdateStorageSpaceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.storage.provider.v1beta1.SpacesAPIClient.prototype.updateStorageSpace =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.SpacesAPI/UpdateStorageSpace',
      request,
      metadata || {},
      methodDescriptor_SpacesAPI_UpdateStorageSpace,
      callback);
};


/**
 * @param {!proto.cs3.storage.provider.v1beta1.UpdateStorageSpaceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storage.provider.v1beta1.UpdateStorageSpaceResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.storage.provider.v1beta1.SpacesAPIPromiseClient.prototype.updateStorageSpace =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.SpacesAPI/UpdateStorageSpace',
      request,
      metadata || {},
      methodDescriptor_SpacesAPI_UpdateStorageSpace);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storage.provider.v1beta1.DeleteStorageSpaceRequest,
 *   !proto.cs3.storage.provider.v1beta1.DeleteStorageSpaceResponse>}
 */
const methodDescriptor_SpacesAPI_DeleteStorageSpace = new grpc.web.MethodDescriptor(
  '/cs3.storage.provider.v1beta1.SpacesAPI/DeleteStorageSpace',
  grpc.web.MethodType.UNARY,
  proto.cs3.storage.provider.v1beta1.DeleteStorageSpaceRequest,
  proto.cs3.storage.provider.v1beta1.DeleteStorageSpaceResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.DeleteStorageSpaceRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.DeleteStorageSpaceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storage.provider.v1beta1.DeleteStorageSpaceRequest,
 *   !proto.cs3.storage.provider.v1beta1.DeleteStorageSpaceResponse>}
 */
const methodInfo_SpacesAPI_DeleteStorageSpace = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storage.provider.v1beta1.DeleteStorageSpaceResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.DeleteStorageSpaceRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.DeleteStorageSpaceResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storage.provider.v1beta1.DeleteStorageSpaceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storage.provider.v1beta1.DeleteStorageSpaceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storage.provider.v1beta1.DeleteStorageSpaceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.storage.provider.v1beta1.SpacesAPIClient.prototype.deleteStorageSpace =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.SpacesAPI/DeleteStorageSpace',
      request,
      metadata || {},
      methodDescriptor_SpacesAPI_DeleteStorageSpace,
      callback);
};


/**
 * @param {!proto.cs3.storage.provider.v1beta1.DeleteStorageSpaceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storage.provider.v1beta1.DeleteStorageSpaceResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.storage.provider.v1beta1.SpacesAPIPromiseClient.prototype.deleteStorageSpace =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.SpacesAPI/DeleteStorageSpace',
      request,
      metadata || {},
      methodDescriptor_SpacesAPI_DeleteStorageSpace);
};


module.exports = proto.cs3.storage.provider.v1beta1;

