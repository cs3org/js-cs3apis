/**
 * @fileoverview gRPC-Web generated client stub for cs3.identity.group.v1beta1
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v0.0.0
// source: cs3/identity/group/v1beta1/group_api.proto


/* eslint-disable */
// @ts-nocheck


goog.provide('proto.cs3.identity.group.v1beta1.GroupAPIClient');
goog.provide('proto.cs3.identity.group.v1beta1.GroupAPIPromiseClient');

goog.require('grpc.web.MethodDescriptor');
goog.require('grpc.web.MethodType');
goog.require('grpc.web.GrpcWebClientBase');
goog.require('grpc.web.AbstractClientBase');
goog.require('grpc.web.ClientReadableStream');
goog.require('grpc.web.RpcError');
goog.require('proto.cs3.identity.group.v1beta1.FindGroupsRequest');
goog.require('proto.cs3.identity.group.v1beta1.FindGroupsResponse');
goog.require('proto.cs3.identity.group.v1beta1.GetGroupByClaimRequest');
goog.require('proto.cs3.identity.group.v1beta1.GetGroupByClaimResponse');
goog.require('proto.cs3.identity.group.v1beta1.GetGroupRequest');
goog.require('proto.cs3.identity.group.v1beta1.GetGroupResponse');
goog.require('proto.cs3.identity.group.v1beta1.GetMembersRequest');
goog.require('proto.cs3.identity.group.v1beta1.GetMembersResponse');
goog.require('proto.cs3.identity.group.v1beta1.HasMemberRequest');
goog.require('proto.cs3.identity.group.v1beta1.HasMemberResponse');

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
proto.cs3.identity.group.v1beta1.GroupAPIClient =
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
proto.cs3.identity.group.v1beta1.GroupAPIPromiseClient =
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
 *   !proto.cs3.identity.group.v1beta1.GetGroupRequest,
 *   !proto.cs3.identity.group.v1beta1.GetGroupResponse>}
 */
const methodDescriptor_GroupAPI_GetGroup = new grpc.web.MethodDescriptor(
  '/cs3.identity.group.v1beta1.GroupAPI/GetGroup',
  grpc.web.MethodType.UNARY,
  proto.cs3.identity.group.v1beta1.GetGroupRequest,
  proto.cs3.identity.group.v1beta1.GetGroupResponse,
  /**
   * @param {!proto.cs3.identity.group.v1beta1.GetGroupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.identity.group.v1beta1.GetGroupResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.identity.group.v1beta1.GetGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.cs3.identity.group.v1beta1.GetGroupResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.identity.group.v1beta1.GetGroupResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.identity.group.v1beta1.GroupAPIClient.prototype.getGroup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.identity.group.v1beta1.GroupAPI/GetGroup',
      request,
      metadata || {},
      methodDescriptor_GroupAPI_GetGroup,
      callback);
};


/**
 * @param {!proto.cs3.identity.group.v1beta1.GetGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.identity.group.v1beta1.GetGroupResponse>}
 *     Promise that resolves to the response
 */
proto.cs3.identity.group.v1beta1.GroupAPIPromiseClient.prototype.getGroup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.identity.group.v1beta1.GroupAPI/GetGroup',
      request,
      metadata || {},
      methodDescriptor_GroupAPI_GetGroup);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.identity.group.v1beta1.GetGroupByClaimRequest,
 *   !proto.cs3.identity.group.v1beta1.GetGroupByClaimResponse>}
 */
const methodDescriptor_GroupAPI_GetGroupByClaim = new grpc.web.MethodDescriptor(
  '/cs3.identity.group.v1beta1.GroupAPI/GetGroupByClaim',
  grpc.web.MethodType.UNARY,
  proto.cs3.identity.group.v1beta1.GetGroupByClaimRequest,
  proto.cs3.identity.group.v1beta1.GetGroupByClaimResponse,
  /**
   * @param {!proto.cs3.identity.group.v1beta1.GetGroupByClaimRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.identity.group.v1beta1.GetGroupByClaimResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.identity.group.v1beta1.GetGroupByClaimRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.cs3.identity.group.v1beta1.GetGroupByClaimResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.identity.group.v1beta1.GetGroupByClaimResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.identity.group.v1beta1.GroupAPIClient.prototype.getGroupByClaim =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.identity.group.v1beta1.GroupAPI/GetGroupByClaim',
      request,
      metadata || {},
      methodDescriptor_GroupAPI_GetGroupByClaim,
      callback);
};


/**
 * @param {!proto.cs3.identity.group.v1beta1.GetGroupByClaimRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.identity.group.v1beta1.GetGroupByClaimResponse>}
 *     Promise that resolves to the response
 */
proto.cs3.identity.group.v1beta1.GroupAPIPromiseClient.prototype.getGroupByClaim =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.identity.group.v1beta1.GroupAPI/GetGroupByClaim',
      request,
      metadata || {},
      methodDescriptor_GroupAPI_GetGroupByClaim);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.identity.group.v1beta1.GetMembersRequest,
 *   !proto.cs3.identity.group.v1beta1.GetMembersResponse>}
 */
const methodDescriptor_GroupAPI_GetMembers = new grpc.web.MethodDescriptor(
  '/cs3.identity.group.v1beta1.GroupAPI/GetMembers',
  grpc.web.MethodType.UNARY,
  proto.cs3.identity.group.v1beta1.GetMembersRequest,
  proto.cs3.identity.group.v1beta1.GetMembersResponse,
  /**
   * @param {!proto.cs3.identity.group.v1beta1.GetMembersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.identity.group.v1beta1.GetMembersResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.identity.group.v1beta1.GetMembersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.cs3.identity.group.v1beta1.GetMembersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.identity.group.v1beta1.GetMembersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.identity.group.v1beta1.GroupAPIClient.prototype.getMembers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.identity.group.v1beta1.GroupAPI/GetMembers',
      request,
      metadata || {},
      methodDescriptor_GroupAPI_GetMembers,
      callback);
};


/**
 * @param {!proto.cs3.identity.group.v1beta1.GetMembersRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.identity.group.v1beta1.GetMembersResponse>}
 *     Promise that resolves to the response
 */
proto.cs3.identity.group.v1beta1.GroupAPIPromiseClient.prototype.getMembers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.identity.group.v1beta1.GroupAPI/GetMembers',
      request,
      metadata || {},
      methodDescriptor_GroupAPI_GetMembers);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.identity.group.v1beta1.HasMemberRequest,
 *   !proto.cs3.identity.group.v1beta1.HasMemberResponse>}
 */
const methodDescriptor_GroupAPI_HasMember = new grpc.web.MethodDescriptor(
  '/cs3.identity.group.v1beta1.GroupAPI/HasMember',
  grpc.web.MethodType.UNARY,
  proto.cs3.identity.group.v1beta1.HasMemberRequest,
  proto.cs3.identity.group.v1beta1.HasMemberResponse,
  /**
   * @param {!proto.cs3.identity.group.v1beta1.HasMemberRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.identity.group.v1beta1.HasMemberResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.identity.group.v1beta1.HasMemberRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.cs3.identity.group.v1beta1.HasMemberResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.identity.group.v1beta1.HasMemberResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.identity.group.v1beta1.GroupAPIClient.prototype.hasMember =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.identity.group.v1beta1.GroupAPI/HasMember',
      request,
      metadata || {},
      methodDescriptor_GroupAPI_HasMember,
      callback);
};


/**
 * @param {!proto.cs3.identity.group.v1beta1.HasMemberRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.identity.group.v1beta1.HasMemberResponse>}
 *     Promise that resolves to the response
 */
proto.cs3.identity.group.v1beta1.GroupAPIPromiseClient.prototype.hasMember =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.identity.group.v1beta1.GroupAPI/HasMember',
      request,
      metadata || {},
      methodDescriptor_GroupAPI_HasMember);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.identity.group.v1beta1.FindGroupsRequest,
 *   !proto.cs3.identity.group.v1beta1.FindGroupsResponse>}
 */
const methodDescriptor_GroupAPI_FindGroups = new grpc.web.MethodDescriptor(
  '/cs3.identity.group.v1beta1.GroupAPI/FindGroups',
  grpc.web.MethodType.UNARY,
  proto.cs3.identity.group.v1beta1.FindGroupsRequest,
  proto.cs3.identity.group.v1beta1.FindGroupsResponse,
  /**
   * @param {!proto.cs3.identity.group.v1beta1.FindGroupsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.identity.group.v1beta1.FindGroupsResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.identity.group.v1beta1.FindGroupsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.cs3.identity.group.v1beta1.FindGroupsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.identity.group.v1beta1.FindGroupsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.identity.group.v1beta1.GroupAPIClient.prototype.findGroups =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.identity.group.v1beta1.GroupAPI/FindGroups',
      request,
      metadata || {},
      methodDescriptor_GroupAPI_FindGroups,
      callback);
};


/**
 * @param {!proto.cs3.identity.group.v1beta1.FindGroupsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.identity.group.v1beta1.FindGroupsResponse>}
 *     Promise that resolves to the response
 */
proto.cs3.identity.group.v1beta1.GroupAPIPromiseClient.prototype.findGroups =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.identity.group.v1beta1.GroupAPI/FindGroups',
      request,
      metadata || {},
      methodDescriptor_GroupAPI_FindGroups);
};


}); // goog.scope

