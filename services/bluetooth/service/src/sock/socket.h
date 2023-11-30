/*
 * Copyright (C) 2021-2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

#ifndef SOCKET_H
#define SOCKET_H

#include <map>
#include <mutex>
#include <string>
#include <vector>
#include "base_def.h"
#include "transport/transport.h"
#include "transport/transport_factory.h"
#include "transport/transport_rfcomm.h"

#include "socket_def.h"
#include "socket_gap_client.h"
#include "socket_gap_server.h"
#include "socket_sdp_client.h"
#include "socket_sdp_server.h"

namespace OHOS {
namespace bluetooth {
// result of sending data to app
typedef enum {
    SOCKET_SEND_NONE = 0,
    SOCKET_SEND_ERROR,
    SOCKET_SEND_PARTIAL,
    SOCKET_SEND_ALL,
} SocketSendRet;

/**
 * @brief This Socket class provides a set of methods that client initiates the connection and
 *        server listen and accept the connection.
 */
class Socket {
public:
    /**
     * @brief Constructor.
     */
    Socket();

    /**
     * @brief Destructor.
     */
    virtual ~Socket();

    /**
     * @brief The client initiates the connection.
     * @details The client queries the SDP and finds the channel to be connected through UUID.
     *          Client sets security level to GAP.
     * @param addr address.
     * @param uuid server record uuid to search scn.
     * @param securityFlag require the connection to be encrypted and authenticated.
     * @param sockfd the upper socket fd that generated by the socketpair.
     * @return int
     */
    int Connect(const std::string &addr, const Uuid &uuid, int securityFlag, int &sockfd);

    /**
     * @brief The server listen and accept the connection.
     * @details The server registers service records to SDP with service name, uuid and server channel
     *          number that assigned by rfcomm. Server sets security level to GAP.
     * @param name server service name.
     * @param uuid server uuid.
     * @param securityFlag require the connection to be encrypted and authenticated.
     * @param sockfd the upper socket fd that generated by the socketpair.
     * @return int
     */
    int Listen(const std::string &name, const Uuid &uuid, int securityFlag, int &sockfd);

    /**
     * @brief SDP query completed.
     *
     * @param context socket object.
     * @return int
     */
    int ReceiveSdpResult(uint8_t scn);

    /**
     * @brief close socket.
     *
     */
    void CloseSocket(bool isDisable);

    /**
     * @brief erase socket
     *
     * @param socket
     */
    void RemoveServerSocket();

    /**
     * @brief close socket fd
     *
     * @param socket
     */
    void CloseSocketFd();

    /**
     * @brief clear up socket
     *
     * @param socket
     */
    static void ClearUpAllSocket();

    /**
     * @brief Poll thread notify the socket that it has data.
     *
     * @param context socket object.
     */
    static void OnSocketReadReady(Socket &sock);

    /**
     * @brief Poll thread notify the socket that it can receive data.
     *
     * @param context socket object.
     */
    static void OnSocketWriteReady(Socket &sock);

    /**
     * @brief Poll thread notify the socket that it exception occurred.
     *
     * @param context socket object.
     */
    static void OnSocketException(Socket &sock);

private:
    // remote device address.
    BtAddr remoteAddr_ {{0}, 0};
    // server channel number.
    uint8_t scn_ {0};
    // send mtu.
    uint16_t sendMTU_ {0};
    // recv mtu
    uint16_t recvMTU_ {0};
    // is server or not.
    bool isServer_ {false};
    // connect state.
    SocketState state_ {};
    // the transport socket fd that generated by the socketpair.
    int upperlayerFd_ {-1};
    // the transport socket fd that generated by the socketpair.
    int transportFd_ {-1};
    // require the connection to be encrypted and authenticated.
    int securityFlag_ {0};
    // number of connected clients.
    int clientNumber_ {0};
    // The maximum number of connected devices.
    int maxConnectedNum_ {SOCK_MAX_CLIENT};
    // service id.
    GAP_Service serviceId_ {SPP_ID_START};
    // can read data from Rfcomm.
    bool isCanRead_ {true};
    // can read data from Rfcomm.
    bool isCanWrite_ {true};
    // is or not new socket
    bool isNewSocket_ {false};
    // length of data that send to app failed.
    size_t recvBufLen_ {0};
    // length of data that send to stack failed.
    size_t sendBufLen_ {0};
    // save data that sent to app failed.
    uint8_t recvDataBuf_[SOCK_DEF_RFC_MTU] = {0};
    // save data that sent to stack failed.
    uint8_t sendDataBuf_[SOCK_DEF_RFC_MTU] = {0};
    std::mutex mutex_ {};
    std::mutex fdMutex_ {};
    std::recursive_mutex writeMutex_ {};
    static std::recursive_mutex g_socketMutex;
    // new transport that server accept
    DataTransport *newSockTransport_ {nullptr};
    // the pointer of the SockTransport.
    std::unique_ptr<DataTransport> sockTransport_ {nullptr};
    // the pointer of the transportFactory_.
    std::unique_ptr<TransportFactory> transportFactory_ {nullptr};
    // the pointer of the SocketSdpClient.
    std::unique_ptr<SocketSdpClient> sdpClient_ {nullptr};
    // the pointer of the SocketSdpServer.
    std::unique_ptr<SocketSdpServer> sdpServer_ {nullptr};
    // the pointer of the SocketGapClient.
    std::unique_ptr<SocketGapClient> socketGapClient_ {nullptr};
    // the pointer of the SocketGapServer.
    std::unique_ptr<SocketGapServer> socketGapServer_ {nullptr};
    // the map manages the correspondence between new socket and transport.
    std::map<DataTransport *, std::unique_ptr<Socket>> socketMap_ {};
    // the map manages all sockets;
    static std::vector<Socket *> g_allServerSockets;

    /**
     * @brief is server or not.
     *
     * @return true: the role is server.
     * @return false :the role is client.
     */
    bool IsServer() const
    {
        return isServer_;
    }

    /**
     * @brief address translation.
     *
     * @param addr remote device address.
     */
    void SetRemoteAddr(std::string addr);

    /**
     * @brief Send connection scn to app.
     *
     * @param fd socket fd.
     * @param scn socket scn.
     * @return true
     * @return false
     */
    static bool SendAppConnectScn(int fd, int scn);

    /**
     * @brief Send connection information to app.
     *
     * @param fd socket fd.
     * @param addr remote device address.
     * @param status connect state.
     * @param send_fd accept socket fd.
     * @return true
     * @return false
     */
    static bool SendAppConnectInfo(int fd, int acceptFd, const SocketConnectInfo &connectInfo);

    /**
     * @brief When server accept a connection request, generate a new socket.
     *
     * @param addr remote device address.
     * @param transport transport object.
     */
    int AddSocketInternal(BtAddr addr, DataTransport *transport, uint16_t sendMTU, uint16_t recvMTU);

    /**
     * @brief PPoll thread notify the socket that it can receive data.
     *
     * @param context socket object.
     */
    void OnSocketWriteReadyNative(Socket &sock);

    /**
     * @brief Poll thread notify the socket that it exception occurred.
     *
     * @param context socket object.
     */
    void OnSocketExceptionNative(Socket &sock);

    /**
     * @brief Assign serviceId to service
     *
     * @return int
     */
    static GAP_Service AssignServiceId();

    /**
     * @brief free  serviceId
     *
     * @param serviceId
     */
    static void FreeServiceId(GAP_Service serviceId);

    /**
     * @brief Send data to app.
     *
     * @param fd socket fd.
     * @param buf data to send.
     * @param len the size of the data to send.
     * @return SocketSendRet
     */
    static SocketSendRet SendDataToApp(int fd, const uint8_t *buf, size_t len);

    /**
     * @brief Read data from Rfcomm.
     *
     */
    void ReadData();

    /**
     * @brief Write data from Rfcomm.
     *
     */
    void WriteData();

    /**
     * @brief Write data to transport.
     *
     */
    int TransportWrite(Packet *subPkt);

    /**
     * @brief Notify Service Delete Socket
     *
     * @param socket
     */
    static void NotifyServiceDeleteSocket(Socket &sock);

    /**
     * @brief erase socket
     *
     * @param socket
     */
    static void EraseSocket(Socket &socket);

    /**
     * @brief write data to app
     *
     * @param socket
     */
    void WriteDataToAPP(const uint8_t *buffer, size_t len);

    /**
     * @brief process disconnect
     *
     * @param socket
     */
    void ProcessDisconnection(Socket &socket, DataTransport *transport);

    /**
     * @brief Get service dispatcher.
     *
     * @return service dispatcher.
     */
    utility::Dispatcher *GetDispatchter();

    BT_DISALLOW_COPY_AND_ASSIGN(Socket);
    DECLARE_IMPL();
};
}  // namespace bluetooth
}  // namespace OHOS
#endif  // SOCKET_H