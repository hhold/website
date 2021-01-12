import Head from "next/head";

export default function Home() {
  console.log("So long, and thanks for all the fish.")
  return (
    <div className="m-10 ml-5 text-base">
      <Head>
        <title>Hitesh Nair</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="title" content="Hitesh Nair" />
        <meta
          name="description"
          content="Product, growth, design, code, music, startups, humour."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hiteshnair.com/" />
        <meta property="og:title" content="Hitesh Nair" />
        <meta
          property="og:description"
          content="Product, growth, design, code, music, startups, humour."
        />
        <meta name="author" content="Hitesh Nair" />

        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-between">
        <h1 className="mb-2">Hitesh Nair</h1>
        <a href="https://twitter.com/htshnr" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current text-white transform hover:text-blue-300 hover:scale-125"
          >
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
          </svg>
        </a>
      </div>
      <p className="mb-8">
        Product, growth, design, code, music, startups, humour.
      </p>
      <div>
        <span className="font-semibold">2021</span>
        <hr className="mt-4 mb-4"></hr>
      ???
      </div>
      <div className="mt-8">
        <span className="font-semibold">2019-2020</span>
        <hr className="mt-4 mb-4"></hr>
        <ul className="list-disc mt-3 mb-4 ml-10">
          <li>
            <a
              href="https://medium.com/@hellohitesh/i-miss-the-office-so-i-made-an-ai-write-me-new-scripts-c4a14af4dd86"
              target="_blank"
            >
              Fine-tuning OpenAI's GPT-2 model to write new The Office scripts
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/p/B_P7D4ulvrL/" target="_blank">
              Using neural machine translation to convert The Office lines into
              Shakespearean English
            </a>
          </li>
          <li>
            <a
              href="https://www.amazon.com/Hitesh-Inc-Victory-Road-Battle/dp/B07Q9JX6L9/"
              target="_blank"
            >
              An Alexa skill exploring using voice as a medium in role-playing
              games instead of text boxes
            </a>
          </li>
          <li>
            <a
              href="https://colab.research.google.com/drive/1ZANC5dbVUJyinG5-IcoeQOvtIgEU5Bo6"
              target="_blank"
            >
              Using markov chains to generate text from your Instagram DMs
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
