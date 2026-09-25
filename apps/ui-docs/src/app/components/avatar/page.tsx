"use client";

import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@yuva-devlab/ui";
import { ComponentView } from "../../../components/component-view";

export default function AvatarDocPage() {
  const preview = (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
          alt="Sarah Connor"
        />
        <AvatarFallback>SC</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>YP</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="bg-primary text-primary-foreground font-bold">
          AI
        </AvatarFallback>
      </Avatar>
    </div>
  );

  const codeSnippet = `import { Avatar, AvatarImage, AvatarFallback } from "@yuva-devlab/ui";

export function UserAvatar() {
  return (
    <Avatar>
      <AvatarImage src="/avatar.png" alt="User avatar" />
      <AvatarFallback>YP</AvatarFallback>
    </Avatar>
  );
}`;

  const propsList = [
    {
      name: "Avatar",
      type: "React.Component",
      default: "—",
      description:
        "Root avatar container with circular clipping and overflow hidden.",
    },
    {
      name: "AvatarImage",
      type: "React.Component",
      default: "—",
      description: "Image element loaded inside the avatar.",
    },
    {
      name: "AvatarFallback",
      type: "React.Component",
      default: "—",
      description:
        "Fallback text or initials rendered when image is unavailable or loading.",
    },
  ];

  const cssClasses = [
    {
      name: ".dl-avatar",
      description: "Circular avatar frame with overflow hidden and border.",
    },
    {
      name: ".dl-avatar__img",
      description: "Aspect-ratio 1:1 image element filling container.",
    },
    {
      name: ".dl-avatar__fallback",
      description: "Centered fallback container with muted background.",
    },
  ];

  return (
    <ComponentView
      title="Avatar"
      description="Visual avatar element displaying user profiles, agents, or fallback initials."
      category="Data Display & Layout"
      preview={preview}
      codeSnippet={codeSnippet}
      propsList={propsList}
      cssClasses={cssClasses}
    />
  );
}
