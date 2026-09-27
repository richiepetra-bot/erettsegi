export const dynamic = "force-dynamic";

import { getCurrentUser } from "@/lib/db/users";
import { listInvitesForStudent, listLinkedSupervisors } from "@/lib/db/invites";
import MeghivokClient from "./MeghivokClient";

export default async function MeghivokPage() {
  const user = await getCurrentUser();
  const [invites, links] = await Promise.all([
    listInvitesForStudent(user.id),
    listLinkedSupervisors(user.id),
  ]);

  return <MeghivokClient invites={invites} links={links} />;
}
