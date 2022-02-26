class Mosaic {
    constructor(url, container, options = {}) {
        if (typeof container === 'string') {
            container = document.querySelector(container);
        }

        if (!url || !container?.style) {
            console.error('参数不正确');
        }

        this.url = url;
        this.options = options;
        this.container = container;

        this.init();
    }
    init() {
        const img = new Image();
        const canvas = document.createElement('canvas');
        canvas.style.position = 'absolute';
        canvas.style.zIndex = 999;
        canvas.style.imageRendering = 'pixelated';
        this.img = img;
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        const containerBoundingRect = this.container.getBoundingClientRect();
        const container_w = containerBoundingRect.width;
        const container_h = containerBoundingRect.height;
        canvas.style.width = container_w + 'px';
        canvas.style.height = container_h + 'px';

        img.onload = () => {
            this.run(container_w, container_h);
        }

        img.src = this.url;
    }
    run(w, h) {
        const compressTimes = parseInt(this.options.compressTimes) || 12;
        let compress_w = parseInt(w / compressTimes);
        let compress_h = parseInt(h / compressTimes);
        this.canvas.width = compress_w;
        this.canvas.height = compress_h;
        this.ctx.drawImage(this.img, 0, 0, compress_w, compress_h);
        this.container.prepend(this.canvas);
        this.img = null;
    }
    remove() {
        this.container.removeChild(this.canvas);
        this.canvas = null;
    }
}

export default Mosaic;