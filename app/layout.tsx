import Header from "@/components/Header/header";
import "./globals.scss";
import { Roboto } from "next/font/google";
import Footer from "@/components/footer";
import Script from "next/script";
import { RealViewport } from "@/components/RealViewport";

const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500"],
});

export const metadata = {
  title: "Отель София, Ставрополь, Минеральные воды - официальный сайт",
  description:
    " Отель София - идеальный выбор для комфортного пребывания в Минеральных Водах. Мы предлагаем бесплатный Wi-Fi, трансфер, парковку и удобства для детей. Насладитесь удобством кондиционера и близостью к основным достопримечательностям города. Забронируйте номер сейчас и насладитесь приятным отдыхом в Отеле София.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="lenis">
      <body className={roboto.className}>
        <RealViewport />
        <Header />
        {children}
        <Footer />
      </body>
      <Script id="show-banner">
        {`(function (w) {
            var q = [
                ['setContext', 'TL-INT-otelsofia-ru_2023-07-31', 'ru'],
                ['embed', 'search-form', {
                    container: 'tl-search-form'
                }]
            ];
            var h = ["ru-ibe.tlintegration.ru", "ibe.tlintegration.ru", "ibe.tlintegration.com"];
            var t = w.travelline = (w.travelline || {}),
                ti = t.integration = (t.integration || {});
            ti.__cq = ti.__cq ? ti.__cq.concat(q) : q;
            if (!ti.__loader) {
                ti.__loader = true;
                var d = w.document, c = d.getElementsByTagName("head")[0] || d.getElementsByTagName("body")[0];
        
                function e(s, f) {
                    return function () {
                        w.TL || (() => {
                            c.removeChild(s);
                            f();
                        })();
                    }
                }
        
                (function l(h) {
                    if (0 === h.length) return;
                    var s = d.createElement("script");
                    s.type = "text/javascript";
                    s.async = !0;
                    s.src = "https://" + h[0] + "/integration/loader.js";
                    s.onerror = s.onload = e(s, function () {
                        l(h.slice(1, h.length))
                    });
                    c.appendChild(s)
                })(h);
            }
        })(window);`}
      </Script>
    </html>
  );
}
