/**
 * @fileoverview gRPC-Web generated client stub for cs3.tx.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var cs3_rpc_v1beta1_status_pb = require('../../../cs3/rpc/v1beta1/status_pb.js')

var cs3_sharing_ocm_v1beta1_resources_pb = require('../../../cs3/sharing/ocm/v1beta1/resources_pb.js')

var cs3_tx_v1beta1_resources_pb = require('../../../cs3/tx/v1beta1/resources_pb.js')

var cs3_types_v1beta1_types_pb = require('../../../cs3/types/v1beta1/types_pb.js')
const proto = {};
proto.cs3 = {};
proto.cs3.tx = {};
proto.cs3.tx.v1beta1 = require('./tx_api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cs3.tx.v1beta1.TxAPIClient =
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
proto.cs3.tx.v1beta1.TxAPIPromiseClient =
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
 *   !proto.cs3.tx.v1beta1.PullTransferRequest,
 *   !proto.cs3.tx.v1beta1.PullTransferResponse>}
 */
const methodDescriptor_TxAPI_PullTransfer = new grpc.web.MethodDescriptor(
  '/cs3.tx.v1beta1.TxAPI/PullTransfer',
  grpc.web.MethodType.UNARY,
  proto.cs3.tx.v1beta1.PullTransferRequest,
  proto.cs3.tx.v1beta1.PullTransferResponse,
  /** @param {!proto.cs3.tx.v1beta1.PullTransferRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.tx.v1beta1.PullTransferResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.tx.v1beta1.PullTransferRequest,
 *   !proto.cs3.tx.v1beta1.PullTransferResponse>}
 */
const methodInfo_TxAPI_PullTransfer = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.tx.v1beta1.PullTransferResponse,
  /** @param {!proto.cs3.tx.v1beta1.PullTransferRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.tx.v1beta1.PullTransferResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.tx.v1beta1.PullTransferRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.tx.v1beta1.PullTransferResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.tx.v1beta1.PullTransferResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.tx.v1beta1.TxAPIClient.prototype.pullTransfer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.tx.v1beta1.TxAPI/PullTransfer',
      request,
      metadata || {},
      methodDescriptor_TxAPI_PullTransfer,
      callback);
};


/**
 * @param {!proto.cs3.tx.v1beta1.PullTransferRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.tx.v1beta1.PullTransferResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.tx.v1beta1.TxAPIPromiseClient.prototype.pullTransfer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.tx.v1beta1.TxAPI/PullTransfer',
      request,
      metadata || {},
      methodDescriptor_TxAPI_PullTransfer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.tx.v1beta1.GetTransferStatusRequest,
 *   !proto.cs3.tx.v1beta1.GetTransferStatusResponse>}
 */
const methodDescriptor_TxAPI_GetTransferStatus = new grpc.web.MethodDescriptor(
  '/cs3.tx.v1beta1.TxAPI/GetTransferStatus',
  grpc.web.MethodType.UNARY,
  proto.cs3.tx.v1beta1.GetTransferStatusRequest,
  proto.cs3.tx.v1beta1.GetTransferStatusResponse,
  /** @param {!proto.cs3.tx.v1beta1.GetTransferStatusRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.tx.v1beta1.GetTransferStatusResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.tx.v1beta1.GetTransferStatusRequest,
 *   !proto.cs3.tx.v1beta1.GetTransferStatusResponse>}
 */
const methodInfo_TxAPI_GetTransferStatus = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.tx.v1beta1.GetTransferStatusResponse,
  /** @param {!proto.cs3.tx.v1beta1.GetTransferStatusRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.tx.v1beta1.GetTransferStatusResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.tx.v1beta1.GetTransferStatusRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.tx.v1beta1.GetTransferStatusResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.tx.v1beta1.GetTransferStatusResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.tx.v1beta1.TxAPIClient.prototype.getTransferStatus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.tx.v1beta1.TxAPI/GetTransferStatus',
      request,
      metadata || {},
      methodDescriptor_TxAPI_GetTransferStatus,
      callback);
};


/**
 * @param {!proto.cs3.tx.v1beta1.GetTransferStatusRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.tx.v1beta1.GetTransferStatusResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.tx.v1beta1.TxAPIPromiseClient.prototype.getTransferStatus =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.tx.v1beta1.TxAPI/GetTransferStatus',
      request,
      metadata || {},
      methodDescriptor_TxAPI_GetTransferStatus);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.tx.v1beta1.CancelTransferRequest,
 *   !proto.cs3.tx.v1beta1.CancelTransferResponse>}
 */
const methodDescriptor_TxAPI_CancelTransfer = new grpc.web.MethodDescriptor(
  '/cs3.tx.v1beta1.TxAPI/CancelTransfer',
  grpc.web.MethodType.UNARY,
  proto.cs3.tx.v1beta1.CancelTransferRequest,
  proto.cs3.tx.v1beta1.CancelTransferResponse,
  /** @param {!proto.cs3.tx.v1beta1.CancelTransferRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.tx.v1beta1.CancelTransferResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.tx.v1beta1.CancelTransferRequest,
 *   !proto.cs3.tx.v1beta1.CancelTransferResponse>}
 */
const methodInfo_TxAPI_CancelTransfer = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.tx.v1beta1.CancelTransferResponse,
  /** @param {!proto.cs3.tx.v1beta1.CancelTransferRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.tx.v1beta1.CancelTransferResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.tx.v1beta1.CancelTransferRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.tx.v1beta1.CancelTransferResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.tx.v1beta1.CancelTransferResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.tx.v1beta1.TxAPIClient.prototype.cancelTransfer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.tx.v1beta1.TxAPI/CancelTransfer',
      request,
      metadata || {},
      methodDescriptor_TxAPI_CancelTransfer,
      callback);
};


/**
 * @param {!proto.cs3.tx.v1beta1.CancelTransferRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.tx.v1beta1.CancelTransferResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.tx.v1beta1.TxAPIPromiseClient.prototype.cancelTransfer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.tx.v1beta1.TxAPI/CancelTransfer',
      request,
      metadata || {},
      methodDescriptor_TxAPI_CancelTransfer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.tx.v1beta1.ListTransfersRequest,
 *   !proto.cs3.tx.v1beta1.ListTransfersResponse>}
 */
const methodDescriptor_TxAPI_ListTransfers = new grpc.web.MethodDescriptor(
  '/cs3.tx.v1beta1.TxAPI/ListTransfers',
  grpc.web.MethodType.UNARY,
  proto.cs3.tx.v1beta1.ListTransfersRequest,
  proto.cs3.tx.v1beta1.ListTransfersResponse,
  /** @param {!proto.cs3.tx.v1beta1.ListTransfersRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.tx.v1beta1.ListTransfersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.tx.v1beta1.ListTransfersRequest,
 *   !proto.cs3.tx.v1beta1.ListTransfersResponse>}
 */
const methodInfo_TxAPI_ListTransfers = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.tx.v1beta1.ListTransfersResponse,
  /** @param {!proto.cs3.tx.v1beta1.ListTransfersRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.tx.v1beta1.ListTransfersResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.tx.v1beta1.ListTransfersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.tx.v1beta1.ListTransfersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.tx.v1beta1.ListTransfersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.tx.v1beta1.TxAPIClient.prototype.listTransfers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.tx.v1beta1.TxAPI/ListTransfers',
      request,
      metadata || {},
      methodDescriptor_TxAPI_ListTransfers,
      callback);
};


/**
 * @param {!proto.cs3.tx.v1beta1.ListTransfersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.tx.v1beta1.ListTransfersResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.tx.v1beta1.TxAPIPromiseClient.prototype.listTransfers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.tx.v1beta1.TxAPI/ListTransfers',
      request,
      metadata || {},
      methodDescriptor_TxAPI_ListTransfers);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.tx.v1beta1.RetryTransferRequest,
 *   !proto.cs3.tx.v1beta1.RetryTransferResponse>}
 */
const methodDescriptor_TxAPI_RetryTransfer = new grpc.web.MethodDescriptor(
  '/cs3.tx.v1beta1.TxAPI/RetryTransfer',
  grpc.web.MethodType.UNARY,
  proto.cs3.tx.v1beta1.RetryTransferRequest,
  proto.cs3.tx.v1beta1.RetryTransferResponse,
  /** @param {!proto.cs3.tx.v1beta1.RetryTransferRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.tx.v1beta1.RetryTransferResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.tx.v1beta1.RetryTransferRequest,
 *   !proto.cs3.tx.v1beta1.RetryTransferResponse>}
 */
const methodInfo_TxAPI_RetryTransfer = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.tx.v1beta1.RetryTransferResponse,
  /** @param {!proto.cs3.tx.v1beta1.RetryTransferRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.tx.v1beta1.RetryTransferResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.tx.v1beta1.RetryTransferRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.tx.v1beta1.RetryTransferResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.tx.v1beta1.RetryTransferResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.tx.v1beta1.TxAPIClient.prototype.retryTransfer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.tx.v1beta1.TxAPI/RetryTransfer',
      request,
      metadata || {},
      methodDescriptor_TxAPI_RetryTransfer,
      callback);
};


/**
 * @param {!proto.cs3.tx.v1beta1.RetryTransferRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.tx.v1beta1.RetryTransferResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.tx.v1beta1.TxAPIPromiseClient.prototype.retryTransfer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.tx.v1beta1.TxAPI/RetryTransfer',
      request,
      metadata || {},
      methodDescriptor_TxAPI_RetryTransfer);
};


module.exports = proto.cs3.tx.v1beta1;

