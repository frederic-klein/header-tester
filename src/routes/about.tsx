import { Title } from "solid-start";
import { HttpHeader } from "solid-start/server";

export default function Home() {
  return (
    <main>
      <HttpHeader name="Referrer-Policy" value="no-referrer-when-downgrade" />
      <HttpHeader name="Content-Security-Policy" value="self" />
      <HttpHeader name="X-Frame-Options" value="SAMEORIGIN" />
      <HttpHeader name="X-Content-Type-Options" value="nosniff" />
      <HttpHeader name="Permissions-Policy" value="geolocation=(), microphone=()" />
      <Title>Hello World</Title>
      <h1>About</h1>
    </main>
  );
}
