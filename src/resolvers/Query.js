function info(parent, args, context, info) {
    return "This API is build for the mobile game app Ulala Idle Adventure. Please see documentation on the side on how to use."
}

async function guideFeed(parent, args, context, info) {
    return await context.prisma.guides()
}

async function petFeed(parent, args, context, info) {
    return await context.prisma.pets()
}

module.exports = {
    info,
    guideFeed,
    petFeed
}