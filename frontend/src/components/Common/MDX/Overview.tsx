import { useQuery } from "@apollo/client";
import { ALL_ARTICLE_QUERY } from "../../../graphql";
import { MDXEditor } from "@mdxeditor/editor/MDXEditor";
import {
  toolbarPlugin,
  codeBlockPlugin,
  SandpackConfig,
  sandpackPlugin,
  codeMirrorPlugin,
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
  linkPlugin,
  linkDialogPlugin,
  imagePlugin,
  tablePlugin,
  frontmatterPlugin,
  directivesPlugin,
  AdmonitionDirectiveDescriptor,
  diffSourcePlugin,
} from "@mdxeditor/editor";
const defaultSnippetContent = `
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
`.trim();
const reactSandpackConfig: SandpackConfig = {
  defaultPreset: "react",
  presets: [
    {
      label: "React",
      name: "react",
      meta: "live react",
      sandpackTemplate: "react",
      sandpackTheme: "light",
      snippetFileName: "/App.js",
      snippetLanguage: "jsx",
      initialSnippetContent: defaultSnippetContent,
    },
  ],
};
const allPlugins = (diffMarkdown: string) => [
  toolbarPlugin({
    toolbarContents: () => {
      return <> </>;
    },
  }),
  listsPlugin(),
  quotePlugin(),
  headingsPlugin(),
  linkPlugin(),
  linkDialogPlugin(),
  // eslint-disable-next-line @typescript-eslint/require-await
  imagePlugin({}),
  tablePlugin(),
  thematicBreakPlugin(),
  frontmatterPlugin(),
  codeBlockPlugin({ defaultCodeBlockLanguage: "txt" }),
  sandpackPlugin({ sandpackConfig: reactSandpackConfig }),
  codeMirrorPlugin({
    codeBlockLanguages: {
      js: "JavaScript",
      css: "CSS",
      txt: "text",
      tsx: "TypeScript",
      cplusplus: "C++",
      java: "Java",
      c: "C",
    },
  }),
  directivesPlugin({ directiveDescriptors: [AdmonitionDirectiveDescriptor] }),
  diffSourcePlugin({ viewMode: "rich-text", diffMarkdown }),
  markdownShortcutPlugin(),
];

const Overview = () => {
  const { loading, error, data } = useQuery(ALL_ARTICLE_QUERY);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const article = JSON.parse(
    JSON.stringify(data?.AllArticles?.[data?.AllArticles?.length - 1]),
  )?.content;

  return (
    <>
      <MDXEditor
        markdown={`${article}`}
        plugins={allPlugins(`${article}`)}
        readOnly
      />
    </>
  );
};

export default Overview;
