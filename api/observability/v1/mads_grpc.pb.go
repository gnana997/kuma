// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package v1

import (
	context "context"
	v3 "github.com/envoyproxy/go-control-plane/envoy/service/discovery/v3"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// MonitoringAssignmentDiscoveryServiceClient is the client API for MonitoringAssignmentDiscoveryService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type MonitoringAssignmentDiscoveryServiceClient interface {
	// GRPC
	DeltaMonitoringAssignments(ctx context.Context, opts ...grpc.CallOption) (MonitoringAssignmentDiscoveryService_DeltaMonitoringAssignmentsClient, error)
	StreamMonitoringAssignments(ctx context.Context, opts ...grpc.CallOption) (MonitoringAssignmentDiscoveryService_StreamMonitoringAssignmentsClient, error)
	// HTTP
	FetchMonitoringAssignments(ctx context.Context, in *v3.DiscoveryRequest, opts ...grpc.CallOption) (*v3.DiscoveryResponse, error)
}

type monitoringAssignmentDiscoveryServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewMonitoringAssignmentDiscoveryServiceClient(cc grpc.ClientConnInterface) MonitoringAssignmentDiscoveryServiceClient {
	return &monitoringAssignmentDiscoveryServiceClient{cc}
}

func (c *monitoringAssignmentDiscoveryServiceClient) DeltaMonitoringAssignments(ctx context.Context, opts ...grpc.CallOption) (MonitoringAssignmentDiscoveryService_DeltaMonitoringAssignmentsClient, error) {
	stream, err := c.cc.NewStream(ctx, &MonitoringAssignmentDiscoveryService_ServiceDesc.Streams[0], "/kuma.observability.v1.MonitoringAssignmentDiscoveryService/DeltaMonitoringAssignments", opts...)
	if err != nil {
		return nil, err
	}
	x := &monitoringAssignmentDiscoveryServiceDeltaMonitoringAssignmentsClient{stream}
	return x, nil
}

type MonitoringAssignmentDiscoveryService_DeltaMonitoringAssignmentsClient interface {
	Send(*v3.DeltaDiscoveryRequest) error
	Recv() (*v3.DeltaDiscoveryResponse, error)
	grpc.ClientStream
}

type monitoringAssignmentDiscoveryServiceDeltaMonitoringAssignmentsClient struct {
	grpc.ClientStream
}

func (x *monitoringAssignmentDiscoveryServiceDeltaMonitoringAssignmentsClient) Send(m *v3.DeltaDiscoveryRequest) error {
	return x.ClientStream.SendMsg(m)
}

func (x *monitoringAssignmentDiscoveryServiceDeltaMonitoringAssignmentsClient) Recv() (*v3.DeltaDiscoveryResponse, error) {
	m := new(v3.DeltaDiscoveryResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *monitoringAssignmentDiscoveryServiceClient) StreamMonitoringAssignments(ctx context.Context, opts ...grpc.CallOption) (MonitoringAssignmentDiscoveryService_StreamMonitoringAssignmentsClient, error) {
	stream, err := c.cc.NewStream(ctx, &MonitoringAssignmentDiscoveryService_ServiceDesc.Streams[1], "/kuma.observability.v1.MonitoringAssignmentDiscoveryService/StreamMonitoringAssignments", opts...)
	if err != nil {
		return nil, err
	}
	x := &monitoringAssignmentDiscoveryServiceStreamMonitoringAssignmentsClient{stream}
	return x, nil
}

type MonitoringAssignmentDiscoveryService_StreamMonitoringAssignmentsClient interface {
	Send(*v3.DiscoveryRequest) error
	Recv() (*v3.DiscoveryResponse, error)
	grpc.ClientStream
}

type monitoringAssignmentDiscoveryServiceStreamMonitoringAssignmentsClient struct {
	grpc.ClientStream
}

func (x *monitoringAssignmentDiscoveryServiceStreamMonitoringAssignmentsClient) Send(m *v3.DiscoveryRequest) error {
	return x.ClientStream.SendMsg(m)
}

func (x *monitoringAssignmentDiscoveryServiceStreamMonitoringAssignmentsClient) Recv() (*v3.DiscoveryResponse, error) {
	m := new(v3.DiscoveryResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *monitoringAssignmentDiscoveryServiceClient) FetchMonitoringAssignments(ctx context.Context, in *v3.DiscoveryRequest, opts ...grpc.CallOption) (*v3.DiscoveryResponse, error) {
	out := new(v3.DiscoveryResponse)
	err := c.cc.Invoke(ctx, "/kuma.observability.v1.MonitoringAssignmentDiscoveryService/FetchMonitoringAssignments", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// MonitoringAssignmentDiscoveryServiceServer is the server API for MonitoringAssignmentDiscoveryService service.
// All implementations must embed UnimplementedMonitoringAssignmentDiscoveryServiceServer
// for forward compatibility
type MonitoringAssignmentDiscoveryServiceServer interface {
	// GRPC
	DeltaMonitoringAssignments(MonitoringAssignmentDiscoveryService_DeltaMonitoringAssignmentsServer) error
	StreamMonitoringAssignments(MonitoringAssignmentDiscoveryService_StreamMonitoringAssignmentsServer) error
	// HTTP
	FetchMonitoringAssignments(context.Context, *v3.DiscoveryRequest) (*v3.DiscoveryResponse, error)
	mustEmbedUnimplementedMonitoringAssignmentDiscoveryServiceServer()
}

// UnimplementedMonitoringAssignmentDiscoveryServiceServer must be embedded to have forward compatible implementations.
type UnimplementedMonitoringAssignmentDiscoveryServiceServer struct {
}

func (UnimplementedMonitoringAssignmentDiscoveryServiceServer) DeltaMonitoringAssignments(MonitoringAssignmentDiscoveryService_DeltaMonitoringAssignmentsServer) error {
	return status.Errorf(codes.Unimplemented, "method DeltaMonitoringAssignments not implemented")
}
func (UnimplementedMonitoringAssignmentDiscoveryServiceServer) StreamMonitoringAssignments(MonitoringAssignmentDiscoveryService_StreamMonitoringAssignmentsServer) error {
	return status.Errorf(codes.Unimplemented, "method StreamMonitoringAssignments not implemented")
}
func (UnimplementedMonitoringAssignmentDiscoveryServiceServer) FetchMonitoringAssignments(context.Context, *v3.DiscoveryRequest) (*v3.DiscoveryResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method FetchMonitoringAssignments not implemented")
}
func (UnimplementedMonitoringAssignmentDiscoveryServiceServer) mustEmbedUnimplementedMonitoringAssignmentDiscoveryServiceServer() {
}

// UnsafeMonitoringAssignmentDiscoveryServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to MonitoringAssignmentDiscoveryServiceServer will
// result in compilation errors.
type UnsafeMonitoringAssignmentDiscoveryServiceServer interface {
	mustEmbedUnimplementedMonitoringAssignmentDiscoveryServiceServer()
}

func RegisterMonitoringAssignmentDiscoveryServiceServer(s grpc.ServiceRegistrar, srv MonitoringAssignmentDiscoveryServiceServer) {
	s.RegisterService(&MonitoringAssignmentDiscoveryService_ServiceDesc, srv)
}

func _MonitoringAssignmentDiscoveryService_DeltaMonitoringAssignments_Handler(srv interface{}, stream grpc.ServerStream) error {
	return srv.(MonitoringAssignmentDiscoveryServiceServer).DeltaMonitoringAssignments(&monitoringAssignmentDiscoveryServiceDeltaMonitoringAssignmentsServer{stream})
}

type MonitoringAssignmentDiscoveryService_DeltaMonitoringAssignmentsServer interface {
	Send(*v3.DeltaDiscoveryResponse) error
	Recv() (*v3.DeltaDiscoveryRequest, error)
	grpc.ServerStream
}

type monitoringAssignmentDiscoveryServiceDeltaMonitoringAssignmentsServer struct {
	grpc.ServerStream
}

func (x *monitoringAssignmentDiscoveryServiceDeltaMonitoringAssignmentsServer) Send(m *v3.DeltaDiscoveryResponse) error {
	return x.ServerStream.SendMsg(m)
}

func (x *monitoringAssignmentDiscoveryServiceDeltaMonitoringAssignmentsServer) Recv() (*v3.DeltaDiscoveryRequest, error) {
	m := new(v3.DeltaDiscoveryRequest)
	if err := x.ServerStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func _MonitoringAssignmentDiscoveryService_StreamMonitoringAssignments_Handler(srv interface{}, stream grpc.ServerStream) error {
	return srv.(MonitoringAssignmentDiscoveryServiceServer).StreamMonitoringAssignments(&monitoringAssignmentDiscoveryServiceStreamMonitoringAssignmentsServer{stream})
}

type MonitoringAssignmentDiscoveryService_StreamMonitoringAssignmentsServer interface {
	Send(*v3.DiscoveryResponse) error
	Recv() (*v3.DiscoveryRequest, error)
	grpc.ServerStream
}

type monitoringAssignmentDiscoveryServiceStreamMonitoringAssignmentsServer struct {
	grpc.ServerStream
}

func (x *monitoringAssignmentDiscoveryServiceStreamMonitoringAssignmentsServer) Send(m *v3.DiscoveryResponse) error {
	return x.ServerStream.SendMsg(m)
}

func (x *monitoringAssignmentDiscoveryServiceStreamMonitoringAssignmentsServer) Recv() (*v3.DiscoveryRequest, error) {
	m := new(v3.DiscoveryRequest)
	if err := x.ServerStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func _MonitoringAssignmentDiscoveryService_FetchMonitoringAssignments_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(v3.DiscoveryRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MonitoringAssignmentDiscoveryServiceServer).FetchMonitoringAssignments(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/kuma.observability.v1.MonitoringAssignmentDiscoveryService/FetchMonitoringAssignments",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MonitoringAssignmentDiscoveryServiceServer).FetchMonitoringAssignments(ctx, req.(*v3.DiscoveryRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// MonitoringAssignmentDiscoveryService_ServiceDesc is the grpc.ServiceDesc for MonitoringAssignmentDiscoveryService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var MonitoringAssignmentDiscoveryService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "kuma.observability.v1.MonitoringAssignmentDiscoveryService",
	HandlerType: (*MonitoringAssignmentDiscoveryServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "FetchMonitoringAssignments",
			Handler:    _MonitoringAssignmentDiscoveryService_FetchMonitoringAssignments_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "DeltaMonitoringAssignments",
			Handler:       _MonitoringAssignmentDiscoveryService_DeltaMonitoringAssignments_Handler,
			ServerStreams: true,
			ClientStreams: true,
		},
		{
			StreamName:    "StreamMonitoringAssignments",
			Handler:       _MonitoringAssignmentDiscoveryService_StreamMonitoringAssignments_Handler,
			ServerStreams: true,
			ClientStreams: true,
		},
	},
	Metadata: "observability/v1/mads.proto",
}
