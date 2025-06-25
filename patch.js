const { platform, arch } = process;
if (platform === "linux" && arch === "x64") {
  try {
    require("@swc/core-linux-x64-gnu");
  } catch (e) {
    console.error("No se pudo cargar swc nativo.");
  }
}
