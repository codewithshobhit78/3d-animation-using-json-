function locomotive() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },

        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            };
        },

        pinType: document.querySelector("#main").style.transform
            ? "transform"
            : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}
locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
});

function files(index) {
    var data = `
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0001.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0002.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0003.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0004.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0005.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0006.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0007.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0008.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0009.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0010.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0011.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0012.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0013.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0014.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0015.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0016.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0017.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0018.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0019.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0020.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0021.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0022.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0023.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0024.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0025.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0026.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0027.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0028.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0029.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0030.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0031.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0032.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0033.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0034.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0035.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0036.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0037.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0038.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0039.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0040.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0041.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0042.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0043.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0044.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0045.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0046.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0047.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0048.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0049.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0050.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0051.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0052.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0053.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0054.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0055.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0056.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0057.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0058.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0059.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0060.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0061.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0062.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0063.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0064.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0065.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0066.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0067.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0068.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0069.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0070.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0071.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0072.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0073.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0074.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0075.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0076.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0077.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0078.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0079.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0080.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0081.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0082.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0083.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0084.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0085.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0086.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0087.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0088.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0089.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0090.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0091.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0092.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0093.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0094.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0095.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0096.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0097.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0098.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0099.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0100.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0101.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0102.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0103.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0104.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0105.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0106.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0107.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0108.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0109.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0110.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0111.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0112.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0113.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0114.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0115.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0116.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0117.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0118.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0119.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0120.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0121.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0122.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0123.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0124.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0125.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0126.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0127.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0128.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0129.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0130.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0131.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0132.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0133.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0134.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0135.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0136.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0137.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0138.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0139.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0140.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0141.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0142.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0143.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0144.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0145.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0146.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0147.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0148.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0149.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0150.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0151.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0152.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0153.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0154.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0155.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0156.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0157.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0158.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0159.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0160.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0161.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0162.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0163.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0164.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0165.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0166.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0167.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0168.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0169.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0170.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0171.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0172.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0173.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0174.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0175.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0176.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0177.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0178.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0179.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0180.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0181.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0182.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0183.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0184.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0185.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0186.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0187.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0188.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0189.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0190.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0191.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0192.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0193.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0194.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0195.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0196.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0197.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0198.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0199.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0200.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0201.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0202.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0203.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0204.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0205.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0206.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0207.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0208.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0209.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0210.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0211.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0212.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0213.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0214.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0215.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0216.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0217.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0218.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0219.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0220.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0221.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0222.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0223.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0224.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0225.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0226.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0227.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0228.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0229.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0230.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0231.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0232.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0233.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0234.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0235.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0236.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0237.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0238.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0239.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0240.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0241.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0242.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0243.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0244.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0245.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0246.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0247.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0248.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0249.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0250.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0251.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0252.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0253.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0254.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0255.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0256.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0257.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0258.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0259.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0260.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0261.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0262.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0263.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0264.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0265.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0266.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0267.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0268.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0269.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0270.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0271.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0272.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0273.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0274.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0275.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0276.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0277.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0278.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0279.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0280.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0281.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0282.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0283.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0284.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0285.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0286.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0287.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0288.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0289.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0290.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0291.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0292.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0293.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0294.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0295.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0296.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0297.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0298.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0299.png
       /Users/shobhit/Downloads/3d animation using json /CYBERFICTION-IMAGES/male0300.png
 `;
    return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
    frame: 1,
};

for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
}

gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
        scrub: 0.15,
        trigger: `#page>canvas`,
        start: `top top`,
        end: `600% top`,
        scroller: `#main`,
    },
    onUpdate: render,
});

images[1].onload = render;

function render() {
    scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
    );
}
ScrollTrigger.create({
    trigger: "#page>canvas",
    pin: true,
    // markers:true,
    scroller: `#main`,
    start: `top top`,
    end: `600% top`,
});



gsap.to("#page1", {
    scrollTrigger: {
        trigger: `#page1`,
        start: `top top`,
        end: `bottom top`,
        pin: true,
        scroller: `#main`
    }
})
gsap.to("#page2", {
    scrollTrigger: {
        trigger: `#page2`,
        start: `top top`,
        end: `bottom top`,
        pin: true,
        scroller: `#main`
    }
})
gsap.to("#page3", {
    scrollTrigger: {
        trigger: `#page3`,
        start: `top top`,
        end: `bottom top`,
        pin: true,
        scroller: `#main`
    }
})