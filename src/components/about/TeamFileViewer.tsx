"use client";

import { useMemo, useState } from "react";
import { FileUser, FolderOpen, Folder as FolderIcon, Users } from "lucide-react";

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

export type TeamMember = {
  name: string;
  primaryRole: string;
  secondaryRoles?: string[];
  responsibilities: string[];
  avatar: string;
  imagePending?: boolean;
};

export type TeamGroup = {
  title: string;
  subtitle: string;
  members: TeamMember[];
};

type TeamFileViewerProps = {
  groups: TeamGroup[];
};

export default function TeamFileViewer({ groups }: TeamFileViewerProps) {
  const initialGroup = groups[0]?.title ?? "";
  const initialMember = groups[0]?.members[0]?.name ?? "";

  const [selectedGroup, setSelectedGroup] = useState(initialGroup);
  const [selectedMemberName, setSelectedMemberName] = useState(initialMember);
  const [expandedGroups, setExpandedGroups] = useState<string[]>(groups.map((g) => g.title));

  const selectedMember = useMemo(() => {
    const group = groups.find((g) => g.title === selectedGroup) ?? groups[0];
    return (
      group?.members.find((member) => member.name === selectedMemberName) ??
      group?.members[0]
    );
  }, [groups, selectedGroup, selectedMemberName]);

  const toggleGroup = (title: string) => {
    setExpandedGroups((prev) =>
      prev.includes(title) ? prev.filter((item) => item !== title) : [...prev, title],
    );
  };

  const selectMember = (groupTitle: string, memberName: string) => {
    setSelectedGroup(groupTitle);
    setSelectedMemberName(memberName);
  };

  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[620px] overflow-hidden rounded-3xl border border-black/10 bg-black"
    >
      <ResizablePanel defaultSize={31} minSize={24}>
        <div className="h-full border-r border-white/10">
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <FolderOpen className="h-4 w-4 text-white" />
            <p className="text-sm font-semibold text-white">Team Explorer</p>
          </div>

          <ScrollArea className="h-[560px] lg:h-[calc(100vh-290px)]">
            <div className="p-2">
              {groups.map((group) => {
                const isExpanded = expandedGroups.includes(group.title);
                return (
                  <div key={group.title} className="mb-1">
                    <button
                      onClick={() => toggleGroup(group.title)}
                      className="flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm text-white/90 transition-colors hover:bg-white/10"
                    >
                      {isExpanded ? (
                        <FolderOpen className="h-4 w-4 text-white/80" />
                      ) : (
                        <FolderIcon className="h-4 w-4 text-white/70" />
                      )}
                      <span className="truncate">{group.title}</span>
                    </button>

                    {isExpanded && (
                      <div className="ml-4 mt-1 space-y-1 border-l border-white/10 pl-3">
                        {group.members.map((member) => {
                          const isActive =
                            member.name === selectedMemberName && group.title === selectedGroup;
                          return (
                            <button
                              key={member.name}
                              onClick={() => selectMember(group.title, member.name)}
                              className={cn(
                                "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm transition-colors",
                                isActive
                                  ? "bg-white/15 text-white"
                                  : "text-white/75 hover:bg-white/10 hover:text-white",
                              )}
                            >
                              <FileUser className="h-4 w-4" />
                              <span className="truncate">{member.name}</span>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </ScrollArea>
        </div>
      </ResizablePanel>

      <ResizableHandle withHandle />

      <ResizablePanel defaultSize={69} minSize={44}>
        <div className="h-full p-5 md:p-6">
          {selectedMember ? (
            <div className="grid h-full gap-6 md:grid-cols-[320px_1fr]">
              <div className="rounded-2xl border border-white/10 bg-zinc-950 p-4">
                <div className="relative overflow-hidden rounded-xl border border-white/10">
                  <img
                    src={selectedMember.avatar}
                    alt={selectedMember.name}
                    className="aspect-square w-full object-cover"
                  />
                  {selectedMember.imagePending && (
                    <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/80 px-2 py-1 text-[10px] uppercase tracking-wide text-white/90">
                      Image pending
                    </span>
                  )}
                </div>
                <div className="mt-4 rounded-xl border border-white/10 bg-black p-4">
                  <h3 className="text-xl font-semibold text-white">{selectedMember.name}</h3>
                  <p className="mt-1 text-sm text-white/75">{selectedMember.primaryRole}</p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-zinc-950 p-5 md:p-6">
                <div className="mb-5 flex items-center gap-2">
                  <Users className="h-5 w-5 text-white" />
                  <h4 className="text-lg font-semibold text-white">Member Details</h4>
                </div>

                {selectedMember.secondaryRoles && selectedMember.secondaryRoles.length > 0 && (
                  <div className="mb-6">
                    <p className="mb-2 text-xs uppercase tracking-wide text-white/60">
                      Secondary Roles
                    </p>
                    <p className="text-sm text-white/85">
                      {selectedMember.secondaryRoles.join(" • ")}
                    </p>
                  </div>
                )}

                <div>
                  <p className="mb-3 text-xs uppercase tracking-wide text-white/60">
                    Responsibilities
                  </p>
                  <ul className="space-y-2 text-sm leading-relaxed text-white/85">
                    {selectedMember.responsibilities.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex h-full items-center justify-center text-white/70">
              Select a team member
            </div>
          )}
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

