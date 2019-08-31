const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')


async function signup(parent, args, context, info) {
  // 1
  const password = await bcrypt.hash(args.password, 10)
  // 2
  const user = await context.prisma.createUser({ ...args, password })

  // 3
  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  // 4
  return {
    token,
    user,
  }
}
  
async function login(parent, args, context, info) {
  // 1

  const identifier = args.email ? {email: args.email} : {handle: args.handle}

  const user = (await context.prisma.user(identifier))

  if (!user) {
    throw new Error('No such user found')
  }

  // 2
  const valid = await bcrypt.compare(args.password, user.password)
  if (!valid) {
    throw new Error('Invalid password')
  }

  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  // 3
  return {
    token,
    user,
  }
}

function postGuide(parent, args, context, info) {
  const userId = getUserId(context)
    return context.prisma.createGuide({
    title: args.title,
    body: args.body,
    owner: { connect: { id: userId } },
  })
}

async function stageInsertion(parent, args, context, info) {

  if (args.gear_level%5 != 0 && args.gear_level != 1) {
    throw new Error('Gear level is invalid')
  }

  return context.prisma.createStageStruct({
      stage_number: args.stage_number,
      base_exp: args.base_exp,
      gear_level: args.gear_level,
      base_shell: args.base_shell,
      map: { connect: {id: args.mapId}}
  })
}

async function mapInsertion(parent, args, context, info) {

  const name = {name: args.name}
  const total_stage = args.total_stage ? { total_stage: args.total_stage } : {}
  const previous =  args.previous_mapId ? {previous_map: { connect: {id: args.previous_mapId}}} : {}
  const next =  args.next_mapId ? {next_map: { connect: {id: args.next_mapId}}} : {}
  const continent = args.continentId ? {continent: { connect: {id: args.continentId}}} : {}

  // console.log({...name, ...total_stage, ...previous, ...next, ...continent})

  return context.prisma.createMap({
      // name: args.name,
      // total_stage: args.total_stage,
      // previous_map: { connect: {id: args.previous_mapId}},
      // next_map: { connect: {id: args.next_mapId}},
      // continent: { connect: {id: args.continentId}},
      ...name, ...total_stage, ...previous, ...next, ...continent
  })
}

async function mapUpdate(parent, args ,context, info) {

  const tot_stage = args.total_stage ? {total_stage: args.total_stage} : {}
  const next = args.next_map ? {next_map: {connect: {id: args.next_map}}} : {}
  const previous = args.previous_map ? {previous_map: {connect: {id: args.previous_map}}} : {}
  const location = args.continent ? {continent: {connect: {id: args.continent}}} : {}

  const where = args.whereId ? { id: args.whereId } : {}
  const data = {...tot_stage, ...next, ...previous, ...location}

  console.log(data)

  return context.prisma.updateMap({
    where,
    data
  })
}

  
module.exports = {
    signup,
    login,
    postGuide,
    stageInsertion,
    mapInsertion,
    mapUpdate
}