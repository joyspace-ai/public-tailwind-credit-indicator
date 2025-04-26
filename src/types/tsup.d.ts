declare module 'tsup' {
  export interface Options {
    entry: string[];
    format?: ('cjs' | 'esm')[];
    dts?: boolean;
    splitting?: boolean;
    sourcemap?: boolean;
    clean?: boolean;
    treeshake?: boolean;
    external?: string[];
    [key: string]: any;
  }

  export function defineConfig(options: Options): Options;
} 