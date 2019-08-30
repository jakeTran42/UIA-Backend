function info(parent, args, context, info) {
    return "This API is build for the mobile game app Ulala Idle Adventure. Please see documentation on the side on how to use."
}

function guideFeed(parent, args, context, info) {
    return context.prisma.guides()
}

module.exports = {
    info,
    guideFeed
}