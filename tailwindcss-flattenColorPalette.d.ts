declare module 'tailwindcss/lib/util/flattenColorPalette' {
    import { ColorValue } from 'tailwindcss/types/config';
  
    function flattenColorPalette(colors: ColorValue): Record<string, string>;
  
    export default flattenColorPalette;
  }
  