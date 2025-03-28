declare module 'html2pdf.js' {
  interface Html2PdfOptions {
    margin?: number | [number, number, number, number];
    filename?: string;
    image?: { type: string; quality: number };
    html2canvas?: {
      scale?: number;
      logging?: boolean;
      dpi?: number;
      letterRendering?: boolean;
      useCORS?: boolean;
      width?: number | string;
      height?: number | string;
      x?: number;
      y?: number;
      scrollX?: number;
      scrollY?: number;
      windowWidth?: number;
      windowHeight?: number;
    };
    jsPDF?: {
      unit?: string;
      format?: string | number[];
      orientation?: string;
      compress?: boolean;
      precision?: number;
      userUnit?: number;
    };
    pagebreak?: {
      mode?: string[] | string;
      before?: string;
      after?: string;
      avoid?: string;
    };
  }

  interface Html2Pdf {
    from(element: HTMLElement | string): Html2Pdf;
    set(options: Html2PdfOptions): Html2Pdf;
    toPdf(): Html2Pdf;
    save(filename?: string): void;
    output(type: string, options?: any): string | Uint8Array | ArrayBuffer;
    get(type: string, options?: any): Promise<string | Uint8Array | ArrayBuffer>;
    finally(callback: () => void): any;
    then(callback: () => void): void;
  }

  function html2pdf(): Html2Pdf;

  export = html2pdf;
}