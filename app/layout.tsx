import "../styles/global.css"
import { Metadata } from "next";
import Navigation from "../components/navigation";

export const metadata :Metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Next Movies",
  },
}

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
