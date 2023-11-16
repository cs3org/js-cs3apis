/**
 * @fileoverview gRPC-Web generated client stub for cs3.storage.registry.v1beta1
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v0.0.0
// source: cs3/storage/registry/v1beta1/registry_api.proto


/* eslint-disable */
// @ts-nocheck


goog.provide('proto.cs3.storage.registry.v1beta1.RegistryAPIClient');
goog.provide('proto.cs3.storage.registry.v1beta1.RegistryAPIPromiseClient');

goog.require('grpc.web.MethodDescriptor');
goog.require('grpc.web.MethodType');
goog.require('grpc.web.GrpcWebClientBase');
goog.require('grpc.web.AbstractClientBase');
goog.require('grpc.web.ClientReadableStream');
goog.require('grpc.web.RpcError');
goog.require('proto.cs3.storage.registry.v1beta1.GetHomeRequest');
goog.require('proto.cs3.storage.registry.v1beta1.GetHomeResponse');
goog.require('proto.cs3.storage.registry.v1beta1.GetStorageProvidersRequest');
goog.require('proto.cs3.storage.registry.v1beta1.GetStorageProvidersResponse');
goog.require('proto.cs3.storage.registry.v1beta1.ListStorageProvidersRequest');
goog.require('proto.cs3.storage.registry.v1beta1.ListStorageProvidersResponse');

goog.requireType('grpc.web.ClientOptions');



goog.scope(function() {

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.cs3.storage.registry.v1beta1.RegistryAPIClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.cs3.storage.registry.v1beta1.RegistryAPIPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storage.registry.v1beta1.GetStorageProvidersRequest,
 *   !proto.cs3.storage.registry.v1beta1.GetStorageProvidersResponse>}
 */
const methodDescriptor_RegistryAPI_GetStorageProviders = new grpc.web.MethodDescriptor(
  '/cs3.storage.registry.v1beta1.RegistryAPI/GetStorageProviders',
  grpc.web.MethodType.UNARY,
  proto.cs3.storage.registry.v1beta1.GetStorageProvidersRequest,
  proto.cs3.storage.registry.v1beta1.GetStorageProvidersResponse,
  /**
   * @param {!proto.cs3.storage.registry.v1beta1.GetStorageProvidersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.registry.v1beta1.GetStorageProvidersResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storage.registry.v1beta1.GetStorageProvidersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.cs3.storage.registry.v1beta1.GetStorageProvidersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storage.registry.v1beta1.GetStorageProvidersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.storage.registry.v1beta1.RegistryAPIClient.prototype.getStorageProviders =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storage.registry.v1beta1.RegistryAPI/GetStorageProviders',
      request,
      metadata || {},
      methodDescriptor_RegistryAPI_GetStorageProviders,
      callback);
};


/**
 * @param {!proto.cs3.storage.registry.v1beta1.GetStorageProvidersRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storage.registry.v1beta1.GetStorageProvidersResponse>}
 *     Promise that resolves to the response
 */
proto.cs3.storage.registry.v1beta1.RegistryAPIPromiseClient.prototype.getStorageProviders =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storage.registry.v1beta1.RegistryAPI/GetStorageProviders',
      request,
      metadata || {},
      methodDescriptor_RegistryAPI_GetStorageProviders);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storage.registry.v1beta1.ListStorageProvidersRequest,
 *   !proto.cs3.storage.registry.v1beta1.ListStorageProvidersResponse>}
 */
const methodDescriptor_RegistryAPI_ListStorageProviders = new grpc.web.MethodDescriptor(
  '/cs3.storage.registry.v1beta1.RegistryAPI/ListStorageProviders',
  grpc.web.MethodType.UNARY,
  proto.cs3.storage.registry.v1beta1.ListStorageProvidersRequest,
  proto.cs3.storage.registry.v1beta1.ListStorageProvidersResponse,
  /**
   * @param {!proto.cs3.storage.registry.v1beta1.ListStorageProvidersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.registry.v1beta1.ListStorageProvidersResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storage.registry.v1beta1.ListStorageProvidersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.cs3.storage.registry.v1beta1.ListStorageProvidersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storage.registry.v1beta1.ListStorageProvidersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.storage.registry.v1beta1.RegistryAPIClient.prototype.listStorageProviders =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storage.registry.v1beta1.RegistryAPI/ListStorageProviders',
      request,
      metadata || {},
      methodDescriptor_RegistryAPI_ListStorageProviders,
      callback);
};


/**
 * @param {!proto.cs3.storage.registry.v1beta1.ListStorageProvidersRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storage.registry.v1beta1.ListStorageProvidersResponse>}
 *     Promise that resolves to the response
 */
proto.cs3.storage.registry.v1beta1.RegistryAPIPromiseClient.prototype.listStorageProviders =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storage.registry.v1beta1.RegistryAPI/ListStorageProviders',
      request,
      metadata || {},
      methodDescriptor_RegistryAPI_ListStorageProviders);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storage.registry.v1beta1.GetHomeRequest,
 *   !proto.cs3.storage.registry.v1beta1.GetHomeResponse>}
 */
const methodDescriptor_RegistryAPI_GetHome = new grpc.web.MethodDescriptor(
  '/cs3.storage.registry.v1beta1.RegistryAPI/GetHome',
  grpc.web.MethodType.UNARY,
  proto.cs3.storage.registry.v1beta1.GetHomeRequest,
  proto.cs3.storage.registry.v1beta1.GetHomeResponse,
  /**
   * @param {!proto.cs3.storage.registry.v1beta1.GetHomeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.registry.v1beta1.GetHomeResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storage.registry.v1beta1.GetHomeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.cs3.storage.registry.v1beta1.GetHomeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storage.registry.v1beta1.GetHomeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.storage.registry.v1beta1.RegistryAPIClient.prototype.getHome =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storage.registry.v1beta1.RegistryAPI/GetHome',
      request,
      metadata || {},
      methodDescriptor_RegistryAPI_GetHome,
      callback);
};


/**
 * @param {!proto.cs3.storage.registry.v1beta1.GetHomeRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storage.registry.v1beta1.GetHomeResponse>}
 *     Promise that resolves to the response
 */
proto.cs3.storage.registry.v1beta1.RegistryAPIPromiseClient.prototype.getHome =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storage.registry.v1beta1.RegistryAPI/GetHome',
      request,
      metadata || {},
      methodDescriptor_RegistryAPI_GetHome);
};


}); // goog.scope

