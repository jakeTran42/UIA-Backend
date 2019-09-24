async function Element_One(parent, args, context, info) {
    return await context.prima.pet({id: parent.id}).element()
}

module.exports = {
    Element_One,
}