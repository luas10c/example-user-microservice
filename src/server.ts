import { loadPackageDefinition, Server, ServerCredentials } from '@grpc/grpc-js'
import { loadSync } from '@grpc/proto-loader'
import * as path from 'path'
import '#/config/dotenv'

import * as implementation from './implementation'

const USER_PROTO = path.resolve(__dirname, 'pb', 'user.proto')

const packageDefinition = loadSync(USER_PROTO, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
})

const proto = loadPackageDefinition(packageDefinition) as any

const server = new Server()

server.addService(proto.UserService.service, implementation)

server.bindAsync(
  '0.0.0.0:4434',
  ServerCredentials.createInsecure(),
  (error, port) => {
    if (error) {
      console.log(error)
      return
    }
    console.log('port', port)
    server.start()
  }
)
