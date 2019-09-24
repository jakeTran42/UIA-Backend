function guides(parent, args, context, info) {
    return context.prima.owner({id: parent.id}).guides()
}

module.exports = {
    guides,
}