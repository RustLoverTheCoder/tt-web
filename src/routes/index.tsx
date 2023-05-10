import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Image from "../components/Image";

export default component$(() => {
  return (
    <>
      <div>123</div>
      <Image src="http://n.sinaimg.cn/front/0/w400h400/20181122/bssD-hmhhnqt3425479.jpg" />
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
