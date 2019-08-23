function owner(parent, args, context, info) {
    return context.prisma.guide({id: parent.id}).owner()
}

module.exports = {
    owner,
}