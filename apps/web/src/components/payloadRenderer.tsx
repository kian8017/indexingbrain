/*
import Link from "next/link";

type RendererProps = {
  nodes: any[];
};

export default function PayloadRenderer({ nodes }: RendererProps) {
  const rendered = nodes.map((n) => {
    if (n.text !== undefined) {
      let t = n.text;
      if (n.bold === true) {
        t = <strong>{t}</strong>;
      }
      if (n.italic === true) {
        t = <em>{t}</em>;
      }
      if (n.underline === true) {
        t = <span className="underline">{t}</span>;
      }
      if (n.underline === true) {
        t = <s>{t}</s>;
      }
      if (n.code === true) {
        t = <code>{t}</code>;
      }
      return <span>{t}</span>;
    } else if (n.children !== undefined) {
      const children = <PayloadRenderer nodes={n.children} />;
      switch (n.type) {
        case "h1":
          return <h1>{children}</h1>;
        case "h2":
          return <h2>{children}</h2>;
        case "h3":
          return <h3>{children}</h3>;
        case "h4":
          return <h4>{children}</h4>;
        case "h5":
          return <h5>{children}</h5>;
        case "h6":
          return <h6>{children}</h6>;
        case "indent":
          return <div className="pl-8">{children}</div>;
        case "ol":
          return <ol>{children}</ol>;
        case "ul":
          return <ul>{children}</ul>;
        case "li":
          return <li>{children}</li>;
        case "upload":
          return (
            <img
              src={n.value.url}
              height={n.value.height}
              width={n.value.width}
            />
          );
        case "link":
          switch (n.linkType) {
            case "custom":
              return <Link href={n.url}>{children}</Link>;
            case "internal":
              const slug = n?.doc?.value?.slug;
              if (slug === undefined) {
                throw new Error("undefined slug");
              } else {
                return <Link href={`/page/${slug}`}>{children}</Link>;
              }
            default:
              throw new Error(`unknown linktype ${n.linkType}`);
          }
        default:
          console.log("unknown", n.type);
        case undefined:
          return <div>{children}</div>;
      }
    }
  });
  return <>{rendered}</>;
}
*/
