declare module "*.obj";
declare module "*.jpeg";

declare namespace Intl {
    class DisplayNames {
        constructor(locales: string | string[], options: { type: string });
        public of: (code: string) => string;
    }
}
