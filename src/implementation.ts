import prisma from '#/prisma'

export function getUserByEmail(call, callback) {
  const { email } = call.request
}

export async function getUserById(call, callback) {
  const { id } = call.request

  const user = await prisma.user.findFirst({
    where: {
      id
    }
  })

  return callback(null, { user })
}

export function loginUser(call, callback) {
  const { email, password } = call.request
}

export function registerUser(call, callback) {
  const { firstName, email, phone, password } = call.request
}
