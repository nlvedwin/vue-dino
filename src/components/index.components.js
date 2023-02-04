const components = import.meta.globEager("./**/*.vue")
const exportedComponents = {}
for (const path in components) {
    const name = path.split("/").pop().split(".")[0]
    exportedComponents[name] = components[path].default
}

export default {
    ...exportedComponents,
}
