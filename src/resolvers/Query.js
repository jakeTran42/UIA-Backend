function info(parent, args, context, info) {
    return "This is the backend for ULALA IDLE ADVENTURE companion APP using GRAPHQL"
}

function guideFeed(parent, args, context, info) {
    return context.prisma.guides()
}