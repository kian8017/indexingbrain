//import request from "@/components/payload";
//import PayloadRenderer from "@/components/payloadRenderer";

type SlugPageParams = {
  params: {
    slug: string;
  };
};

export default async function SlugPage({ params }: SlugPageParams) {
  /*
  const queryUrl = `/api/pages?where[slug][equals]=${params.slug}`;
  const resp = await request(queryUrl, undefined, "GET");
  if (resp.docs.length !== 1) {
    throw new Error(
      `expected 1, got ${resp.docs.length} matches for slug '${params.slug}'`
    );
  } else {
    const doc = resp.docs[0];
    return (
      <div className="max-w-4xl mx-auto">
        <h1 className="text-center">{doc.title}</h1>
        <hr />
        <div className="space-y-4">
          <PayloadRenderer nodes={doc.content} />
        </div>
      </div>
    );
  }
  */
  return <div>PAGE</div>;
}
