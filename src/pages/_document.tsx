/* eslint-disable @next/next/no-img-element */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />

        <script
          dangerouslySetInnerHTML={{
            __html: `
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
      
                ym(91979418, "init", {
                      clickmap:true,
                      trackLinks:true,
                      accurateTrackBounce:true
                });

                (function(e, x, pe, r, i, me, nt){
e[i]=e[i]||function(){(e[i].a=e[i].a||[]).push(arguments)},
me=x.createElement(pe),me.async=1,me.src=r,nt=x.getElementsByTagName(pe)[0],nt.parentNode.insertBefore(me,nt)})
(window, document, 'script', 'https://abt.s3.yandex.net/expjs/latest/exp.js', 'ymab');
ymab('metrika.91979418', 'init'/*, {clientFeatures}, {callback}*/);
              `,
          }}
        />
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/91979418"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </body>
    </Html>
  );
}
