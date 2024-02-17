export function generateColorShades(
  hexColor: string,
  numShades: number
): string[] {
  // Convert hex to RGB
  let r: number = parseInt(hexColor.substring(1, 3), 16);
  let g: number = parseInt(hexColor.substring(3, 5), 16);
  let b: number = parseInt(hexColor.substring(5, 7), 16);

  const shades: string[] = [];
  // Generate shades
  for (let i: number = 0; i < numShades; i++) {
    // Manipulate RGB values for shades
    const shadeR: number = Math.floor(r * (1 - i / numShades));
    const shadeG: number = Math.floor(g * (1 - i / numShades));
    const shadeB: number = Math.floor(b * (1 - i / numShades));

    // Convert RGB to hex
    const shadeHex: string =
      "#" +
      ((1 << 24) + (shadeR << 16) + (shadeG << 8) + shadeB)
        .toString(16)
        .slice(1);

    shades.push(shadeHex);
  }

  return shades;
}
