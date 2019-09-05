async function Element(parent, args, context, info) {
    return await context.prima.elements()
}

module.exports = {
    Element,
}