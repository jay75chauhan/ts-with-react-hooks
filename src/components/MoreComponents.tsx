import React from "react";

export interface HeadingsProps {
  title: string;
}

export function Heading({ title }: HeadingsProps) {
  return <h1>{title}</h1>;
}

export default function MoreComponents() {
  return <Heading title="More Components" />;
}
