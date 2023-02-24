import { Title } from "solid-start";
import { HttpHeader } from "solid-start/server";

export default function Home() {
  return (
    <main>
      <HttpHeader name="Referrer-Policy" value="same-origin" />
      <HttpHeader name="Custom-Header" value="Blubb" />
      <Title>Hello World</Title>
      <h1>About</h1>
    </main>
  );
}
