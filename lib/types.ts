export type TreeNode = {
  title: string;
  date: string;
  urlPath: string;
  children: TreeNode[];
};

export type TreeRoot = TreeNode[];

export type PathSegment = { pathName: string };
