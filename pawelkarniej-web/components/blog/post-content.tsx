/** @format */

import { Fragment, type ReactNode } from "react";
import { unified } from "unified";
import remarkMdx from "remark-mdx";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";

type MarkdownNode = {
  type: string;
  name?: string;
  value?: string;
  depth?: number;
  ordered?: boolean;
  url?: string;
  alt?: string;
  lang?: string;
  align?: Array<"left" | "right" | "center" | null>;
  attributes?: Array<{
    type: string;
    name?: string;
    value?: string;
  }>;
  children?: MarkdownNode[];
};

function getMdxAttribute(
  node: MarkdownNode,
  attributeName: string,
): string | undefined {
  return node.attributes?.find((attribute) => attribute.name === attributeName)
    ?.value;
}

function renderChildren(children: MarkdownNode[] = []): ReactNode {
  return children.map((child, index) => (
    <Fragment key={`${child.type}-${index}`}>{renderNode(child)}</Fragment>
  ));
}

function renderNode(node: MarkdownNode, ctx?: { isHeader?: boolean }): ReactNode {
  switch (node.type) {
    case "root":
      return renderChildren(node.children);
    case "heading": {
      const content = renderChildren(node.children);
      switch (node.depth) {
        case 1:
          return (
            <h1 className="mt-12 mb-6 text-3xl md:text-4xl font-heading font-bold tracking-tight text-foreground">
              {content}
            </h1>
          );
        case 2:
          return (
            <h2 className="mt-14 mb-5 text-2xl md:text-3xl font-heading font-bold tracking-tight text-foreground border-b border-border pb-3">
              {content}
            </h2>
          );
        case 3:
          return (
            <h3 className="mt-10 mb-3 text-xl md:text-2xl font-heading font-semibold tracking-tight text-foreground">
              {content}
            </h3>
          );
        case 4:
          return (
            <h4 className="mt-8 mb-3 text-lg md:text-xl font-heading font-semibold tracking-tight text-foreground">
              {content}
            </h4>
          );
        default:
          return (
            <h5 className="mt-6 mb-2 text-base md:text-lg font-heading font-semibold tracking-tight text-foreground">
              {content}
            </h5>
          );
      }
    }
    case "paragraph":
      return (
        <p className="my-5 text-foreground/80 leading-[1.75] text-base md:text-lg">
          {renderChildren(node.children)}
        </p>
      );
    case "thematicBreak":
      return <hr className="my-12 border-border" />;
    case "text":
      return node.value ?? "";
    case "strong":
      return (
        <strong className="font-semibold text-foreground">
          {renderChildren(node.children)}
        </strong>
      );
    case "emphasis":
      return (
        <em className="italic text-foreground">
          {renderChildren(node.children)}
        </em>
      );
    case "delete":
      return (
        <del className="line-through text-muted-foreground">
          {renderChildren(node.children)}
        </del>
      );
    case "inlineCode":
      return (
        <code className="rounded bg-secondary px-1.5 py-0.5 text-[0.92em] font-mono text-emerald-600 border border-border">
          {node.value}
        </code>
      );
    case "code":
      return (
        <pre className="my-6 overflow-x-auto rounded-2xl bg-card border border-border p-5 text-sm leading-relaxed text-foreground font-mono">
          <code>{node.value ?? ""}</code>
        </pre>
      );
    case "blockquote":
      return (
        <blockquote className="my-6 border-l-4 border-emerald-500/50 bg-card/50 rounded-r-lg pl-5 pr-4 py-3 text-foreground/80 italic">
          {renderChildren(node.children)}
        </blockquote>
      );
    case "list": {
      if (node.ordered) {
        return (
          <ol className="my-5 ml-6 list-decimal space-y-2 text-foreground/80 text-base md:text-lg leading-[1.75] marker:text-muted-foreground">
            {renderChildren(node.children)}
          </ol>
        );
      }
      return (
        <ul className="my-5 ml-6 list-disc space-y-2 text-foreground/80 text-base md:text-lg leading-[1.75] marker:text-emerald-500">
          {renderChildren(node.children)}
        </ul>
      );
    }
    case "listItem":
      return (
        <li className="pl-2 [&>p]:my-0">
          {renderChildren(node.children)}
        </li>
      );
    case "link":
      return (
        <a
          href={node.url}
          className="text-primary underline decoration-primary/30 underline-offset-4 hover:text-primary/80 hover:decoration-primary/60 transition-colors"
        >
          {renderChildren(node.children)}
        </a>
      );
    case "break":
      return <br />;
    case "table":
      return (
        <div className="my-8 -mx-4 md:mx-0 overflow-x-auto rounded-2xl border border-border">
          <table className="w-full border-collapse text-sm md:text-base">
            {renderChildren(node.children)}
          </table>
        </div>
      );
    case "tableRow": {
      const isHeader = ctx?.isHeader ?? false;
      const cells = (node.children ?? []).map((cell, i) => (
        <Fragment key={i}>{renderNode(cell, { isHeader })}</Fragment>
      ));
      return <tr className="border-b border-border last:border-b-0">{cells}</tr>;
    }
    case "tableCell": {
      if (ctx?.isHeader) {
        return (
          <th className="px-4 py-3 text-left font-semibold text-foreground bg-card/70 border-b border-border">
            {renderChildren(node.children)}
          </th>
        );
      }
      return (
        <td className="px-4 py-3 text-foreground/80 align-top">
          {renderChildren(node.children)}
        </td>
      );
    }
    case "mdxJsxTextElement":
    case "mdxJsxFlowElement":
      if (node.type.startsWith("mdxJsx") && getMdxAttribute(node, "src")) {
        const src = getMdxAttribute(node, "src");
        const alt = getMdxAttribute(node, "alt") ?? "";
        if (node.name === "img" && src) {
          return (
            <img
              src={src}
              alt={alt}
              className="my-8 rounded-2xl border border-border w-full"
              loading="lazy"
            />
          );
        }
      }
      return null;
    case "mdxFlowExpression":
    case "mdxTextExpression":
      return null;
    default:
      return renderChildren(node.children);
  }
}

// Custom renderer for tables: first row is the header.
function renderTableTree(table: MarkdownNode): ReactNode {
  const rows = table.children ?? [];
  if (rows.length === 0) return null;
  const [headRow, ...bodyRows] = rows;
  return (
    <div className="my-8 -mx-4 md:mx-0 overflow-x-auto rounded-2xl border border-border">
      <table className="w-full border-collapse text-sm md:text-base">
        <thead>
          <Fragment>{renderNode(headRow, { isHeader: true })}</Fragment>
        </thead>
        <tbody>
          {bodyRows.map((row, i) => (
            <Fragment key={i}>{renderNode(row, { isHeader: false })}</Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Walk the tree once to (a) strip the first H1 (the page already shows the
// post title in its header) and (b) replace tables with the proper
// thead/tbody-aware renderer.
function transform(node: MarkdownNode, state: { strippedH1: boolean }): MarkdownNode | null {
  if (node.type === "heading" && node.depth === 1 && !state.strippedH1) {
    state.strippedH1 = true;
    return null;
  }
  if (node.children) {
    const next: MarkdownNode[] = [];
    for (const child of node.children) {
      const transformed = transform(child, state);
      if (transformed) next.push(transformed);
    }
    return { ...node, children: next };
  }
  return node;
}

function renderTreeWithTables(node: MarkdownNode): ReactNode {
  if (node.type === "table") return renderTableTree(node);
  if (node.type === "root" || node.children) {
    const children = (node.children ?? []).map((child, i) => (
      <Fragment key={`${child.type}-${i}`}>{renderTreeWithTables(child)}</Fragment>
    ));
    if (node.type === "root") return children;
    // Re-render container nodes via renderNode but with our recursed children.
    // Simpler: fall back to the standard renderer for non-table, non-root nodes.
    return renderNode(node);
  }
  return renderNode(node);
}

export function PostContent({ content }: { content: string }) {
  const tree = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkMdx)
    .parse(content) as MarkdownNode;

  const transformed = transform(tree, { strippedH1: false }) ?? tree;
  return <>{renderTreeWithTables(transformed)}</>;
}
