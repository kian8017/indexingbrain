import Carousel from "@/components/carousel.server";
import Logo from "../components/logo";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <h1 className="text-center">
        FamilySearch Indexing of{" "}
        <span className="underline">handwritten documents</span> using the{" "}
        <Logo />!
      </h1>
      <div className="flex justify-center gap-32">
        <div className="text-lg self-end">
          <ol>
            <li>To help improve the ease of...</li>
            <li>To help improve the accuracy of...</li>
            <li>To help invite more Saints to try...</li>
            <li>To help train more indexers for...</li>
            <li>To create worldwide database for...</li>
          </ol>
        </div>
        <div>
          <Carousel />
        </div>
      </div>
      <div className="text-center">
        <h2>
          <strong>
            Indexing Handwritten Records, Including Foreign Language Handwritten
            Records!
          </strong>
        </h2>
      </div>
      <div>
        <p>Get Started in 3 easy steps!</p>
        <ol>
          <li>
            Watch the slideshow{" "}
            <Link href="/">
              "Intro to <Logo />"
            </Link>
          </li>
          <li>
            Watch the slideshow{" "}
            <Link href="/test_notvisited">
              "How to Use <Logo /> -- Just the Basics"
            </Link>
          </li>
          <li>
            Watch the slideshow{" "}
            <Link href="/test_notvisited2">
              "Examples of Handwritten Documents -- Advanced"
            </Link>
            . Don't skip this step! It's foundational!
          </li>
        </ol>
      </div>
      <hr />
      <div>
        <p>
          Want to learn more about reading handwritten names?
          <br />
          Check out the{" "}
          <Link href="/completelist">
            Complete List of All Advanced Examples
          </Link>
          .
        </p>
      </div>
      <hr />
      <div>
        <p>
          Any questions? Check out the{" "}
          <Link href="/faq">list of frequently asked questions</Link>.
        </p>
      </div>
    </div>
  );
}

/*
export default function Home() {
  return (
    <main>
      <div className="self-center">
        <h1 className="mt-8 max-w-xl">FamilySearch Indexing of handwritten documents using the <strong>Indexing-Brain!</strong></h1>
      </div>
      <div className="flex flex-col lg:flex-row-reverse items-center lg:justify-evenly w-full">
        <div className="py-4">
          <Carousel />
        </div>
        <div className="text-left py-4">
          <h2>The <strong>Indexing-Brain</strong> is designed to help:</h2>
          <ol className="py-1">
            <li>Improve the ease of...</li>
            <li>Improve the accuracy of...</li>
            <li>Invite more Saints to try...</li>
            <li>Train more indexers for...</li>
            <li>Create worldwide database for...</li>
          </ol>
          <p><strong>... indexing handwritten records, including foreign
            language handwritten records!</strong></p>
        </div>
      </div>
      <hr />
      <div className="text-left py-4">
        <p>Get Started in 3 easy steps!</p>
        <ol>
          <li>Watch the slideshow <a href="/">"Intro to the <strong>Indexing-Brain</strong>"</a></li>
          <li>Watch the slideshow <a href="/test_notvisited">"How to Use the <strong>Indexing-Brain</strong> -- Just the Basics"</a></li>
          <li>Watch the slideshow <a href="/test_notvisited2">"Examples of Handwritten Documents -- Advanced"</a>. Don't skip this step!  It's foundational!</li>
        </ol>
      </div>
      <hr />
      <div className="text-left py-4">
        <p>
          Want to learn more about reading handwritten names?
          <br />
          Check out the <a href="/completelist">Complete List of All Advanced Examples</a>.
        </p>
      </div>
      <hr />
      <div className="text-left py-4">
        <p>
          Any questions? Check out the <a href="/faq">list of frequently asked questions</a>.
        </p>
      </div>
    </main>
  );
}
*/
