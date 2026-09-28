"use client";

import { useTransition } from "react";
import { Subject } from "@/lib/types";
import { chooseElectiveSubjectAction } from "./actions";

export default function ChooseElectiveClient({
  electives,
  currentElectiveSubjectId,
}: {
  electives: Subject[];
  currentElectiveSubjectId: string | null;
}) {
  const [isPending, startTransition] = useTransition();

  function handleChoose(subjectId: string) {
    startTransition(async () => {
      await chooseElectiveSubjectAction(subjectId);
      // A full navigation (not router.push) avoids the client router cache,
      // which would otherwise briefly reuse "/"'s pre-choice snapshot from
      // before the sidebar link to it was ever fetched.
      window.location.href = "/";
    });
  }

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {electives.map((subject) => {
        const isSelected = subject.id === currentElectiveSubjectId;
        return (
          <button
            key={subject.id}
            type="button"
            disabled={isPending}
            onClick={() => handleChoose(subject.id)}
            className={`w-full rounded-2xl border-2 p-5 text-left shadow-sm transition hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98] disabled:opacity-50 ${
              isSelected
                ? "border-indigo-500 bg-indigo-50"
                : "border-slate-200 bg-white hover:border-indigo-300"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="h-3.5 w-3.5 rounded-full" style={{ backgroundColor: subject.color }} />
              {isSelected && (
                <span className="rounded-full bg-indigo-600 px-2.5 py-1 text-xs font-bold text-white">
                  ✓ Kiválasztva
                </span>
              )}
            </div>
            <p className="mt-2 font-extrabold tracking-tight text-slate-900">{subject.name}</p>
            <p className="mt-1 text-xs font-semibold text-indigo-600">
              {isSelected ? "Ezt tanulod" : "Ezt választom →"}
            </p>
          </button>
        );
      })}
    </div>
  );
}
