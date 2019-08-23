function guides(parent, args, context, info) {
    return context.prima.user({id: parent.id}).guides()
}

module.exports = {
    guides,
}