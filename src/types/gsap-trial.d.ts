declare module "gsap-trial/SplitText" {
  export class SplitText {
    constructor(target: string | string[] | Element | NodeList | Element[], vars?: object);
    chars: Element[];
    words: Element[];
    lines: Element[];
    revert(): void;
  }
}
