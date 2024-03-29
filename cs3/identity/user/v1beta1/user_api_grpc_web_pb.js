/**
 * @fileoverview gRPC-Web generated client stub for cs3.identity.user.v1beta1
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v0.0.0
// source: cs3/identity/user/v1beta1/user_api.proto


/* eslint-disable */
// @ts-nocheck


goog.provide('proto.cs3.identity.user.v1beta1.UserAPIClient');
goog.provide('proto.cs3.identity.user.v1beta1.UserAPIPromiseClient');

goog.require('grpc.web.MethodDescriptor');
goog.require('grpc.web.MethodType');
goog.require('grpc.web.GrpcWebClientBase');
goog.require('grpc.web.AbstractClientBase');
goog.require('grpc.web.ClientReadableStream');
goog.require('grpc.web.RpcError');
goog.require('proto.cs3.identity.user.v1beta1.FindUsersRequest');
goog.require('proto.cs3.identity.user.v1beta1.FindUsersResponse');
goog.require('proto.cs3.identity.user.v1beta1.GetUserByClaimRequest');
goog.require('proto.cs3.identity.user.v1beta1.GetUserByClaimResponse');
goog.require('proto.cs3.identity.user.v1beta1.GetUserGroupsRequest');
goog.require('proto.cs3.identity.user.v1beta1.GetUserGroupsResponse');
goog.require('proto.cs3.identity.user.v1beta1.GetUserRequest');
goog.require('proto.cs3.identity.user.v1beta1.GetUserResponse');

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
proto.cs3.identity.user.v1beta1.UserAPIClient =
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
proto.cs3.identity.user.v1beta1.UserAPIPromiseClient =
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
 *   !proto.cs3.identity.user.v1beta1.GetUserRequest,
 *   !proto.cs3.identity.user.v1beta1.GetUserResponse>}
 */
const methodDescriptor_UserAPI_GetUser = new grpc.web.MethodDescriptor(
  '/cs3.identity.user.v1beta1.UserAPI/GetUser',
  grpc.web.MethodType.UNARY,
  proto.cs3.identity.user.v1beta1.GetUserRequest,
  proto.cs3.identity.user.v1beta1.GetUserResponse,
  /**
   * @param {!proto.cs3.identity.user.v1beta1.GetUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.identity.user.v1beta1.GetUserResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.identity.user.v1beta1.GetUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.cs3.identity.user.v1beta1.GetUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.identity.user.v1beta1.GetUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.identity.user.v1beta1.UserAPIClient.prototype.getUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.identity.user.v1beta1.UserAPI/GetUser',
      request,
      metadata || {},
      methodDescriptor_UserAPI_GetUser,
      callback);
};


/**
 * @param {!proto.cs3.identity.user.v1beta1.GetUserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.identity.user.v1beta1.GetUserResponse>}
 *     Promise that resolves to the response
 */
proto.cs3.identity.user.v1beta1.UserAPIPromiseClient.prototype.getUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.identity.user.v1beta1.UserAPI/GetUser',
      request,
      metadata || {},
      methodDescriptor_UserAPI_GetUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.identity.user.v1beta1.GetUserByClaimRequest,
 *   !proto.cs3.identity.user.v1beta1.GetUserByClaimResponse>}
 */
const methodDescriptor_UserAPI_GetUserByClaim = new grpc.web.MethodDescriptor(
  '/cs3.identity.user.v1beta1.UserAPI/GetUserByClaim',
  grpc.web.MethodType.UNARY,
  proto.cs3.identity.user.v1beta1.GetUserByClaimRequest,
  proto.cs3.identity.user.v1beta1.GetUserByClaimResponse,
  /**
   * @param {!proto.cs3.identity.user.v1beta1.GetUserByClaimRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.identity.user.v1beta1.GetUserByClaimResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.identity.user.v1beta1.GetUserByClaimRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.cs3.identity.user.v1beta1.GetUserByClaimResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.identity.user.v1beta1.GetUserByClaimResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.identity.user.v1beta1.UserAPIClient.prototype.getUserByClaim =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.identity.user.v1beta1.UserAPI/GetUserByClaim',
      request,
      metadata || {},
      methodDescriptor_UserAPI_GetUserByClaim,
      callback);
};


/**
 * @param {!proto.cs3.identity.user.v1beta1.GetUserByClaimRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.identity.user.v1beta1.GetUserByClaimResponse>}
 *     Promise that resolves to the response
 */
proto.cs3.identity.user.v1beta1.UserAPIPromiseClient.prototype.getUserByClaim =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.identity.user.v1beta1.UserAPI/GetUserByClaim',
      request,
      metadata || {},
      methodDescriptor_UserAPI_GetUserByClaim);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.identity.user.v1beta1.GetUserGroupsRequest,
 *   !proto.cs3.identity.user.v1beta1.GetUserGroupsResponse>}
 */
const methodDescriptor_UserAPI_GetUserGroups = new grpc.web.MethodDescriptor(
  '/cs3.identity.user.v1beta1.UserAPI/GetUserGroups',
  grpc.web.MethodType.UNARY,
  proto.cs3.identity.user.v1beta1.GetUserGroupsRequest,
  proto.cs3.identity.user.v1beta1.GetUserGroupsResponse,
  /**
   * @param {!proto.cs3.identity.user.v1beta1.GetUserGroupsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.identity.user.v1beta1.GetUserGroupsResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.identity.user.v1beta1.GetUserGroupsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.cs3.identity.user.v1beta1.GetUserGroupsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.identity.user.v1beta1.GetUserGroupsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.identity.user.v1beta1.UserAPIClient.prototype.getUserGroups =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.identity.user.v1beta1.UserAPI/GetUserGroups',
      request,
      metadata || {},
      methodDescriptor_UserAPI_GetUserGroups,
      callback);
};


/**
 * @param {!proto.cs3.identity.user.v1beta1.GetUserGroupsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.identity.user.v1beta1.GetUserGroupsResponse>}
 *     Promise that resolves to the response
 */
proto.cs3.identity.user.v1beta1.UserAPIPromiseClient.prototype.getUserGroups =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.identity.user.v1beta1.UserAPI/GetUserGroups',
      request,
      metadata || {},
      methodDescriptor_UserAPI_GetUserGroups);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.identity.user.v1beta1.FindUsersRequest,
 *   !proto.cs3.identity.user.v1beta1.FindUsersResponse>}
 */
const methodDescriptor_UserAPI_FindUsers = new grpc.web.MethodDescriptor(
  '/cs3.identity.user.v1beta1.UserAPI/FindUsers',
  grpc.web.MethodType.UNARY,
  proto.cs3.identity.user.v1beta1.FindUsersRequest,
  proto.cs3.identity.user.v1beta1.FindUsersResponse,
  /**
   * @param {!proto.cs3.identity.user.v1beta1.FindUsersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.identity.user.v1beta1.FindUsersResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.identity.user.v1beta1.FindUsersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.cs3.identity.user.v1beta1.FindUsersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.identity.user.v1beta1.FindUsersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.identity.user.v1beta1.UserAPIClient.prototype.findUsers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.identity.user.v1beta1.UserAPI/FindUsers',
      request,
      metadata || {},
      methodDescriptor_UserAPI_FindUsers,
      callback);
};


/**
 * @param {!proto.cs3.identity.user.v1beta1.FindUsersRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.identity.user.v1beta1.FindUsersResponse>}
 *     Promise that resolves to the response
 */
proto.cs3.identity.user.v1beta1.UserAPIPromiseClient.prototype.findUsers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.identity.user.v1beta1.UserAPI/FindUsers',
      request,
      metadata || {},
      methodDescriptor_UserAPI_FindUsers);
};


}); // goog.scope

