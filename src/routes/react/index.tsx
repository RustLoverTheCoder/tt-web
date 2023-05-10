import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const show = useSignal(false);
  const count = useSignal(0);
  const variant = useSignal<"contained" | "outlined" | "text">("contained");

  return (
    <>
      <div>
        <div>123</div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Qwik React",
};
